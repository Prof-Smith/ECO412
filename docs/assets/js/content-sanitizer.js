(function () {
  'use strict';

  const INLINE_PATTERNS = [
    /[^\s<>]*cite[^\s<>]*turn\d+search\d+[^\s<>]*/giu,
    /\uE200cite\uE202[^\uE201]*\uE201/gu,
    /cite[^]*/gu,
    /\[?\s*cite\s*\]?\s*turn\d+search\d+/giu
  ];

  const IMAGE_PATTERNS = [
    /[^\s<>]*image[^\s<>]*turn\d+search\d+[^\s<>]*(?:image_Page_|thumbnail)[^\s<>]*/giu,
    /\uE200image\uE202[^\uE201]*\uE201(?:\s*\([^\n]*\))?/gu,
    /image[^]*(?:\s*\([^\n]*\))?/gu,
    /turn\d+search\d+[^\s<>]*(?:image_Page_|thumbnail)[^\s<>]*/giu
  ];

  function cleanText(value) {
    let result = value;
    INLINE_PATTERNS.forEach((pattern) => { result = result.replace(pattern, ''); });
    IMAGE_PATTERNS.forEach((pattern) => { result = result.replace(pattern, ''); });
    return result.replace(/[ \t]{2,}/g, ' ').replace(/\s+([.,;:!?])/g, '$1');
  }

  function isImageReferenceParagraph(element) {
    const text = (element.textContent || '').trim();
    return /turn\d+search\d+/i.test(text) &&
      /(image_Page_|thumbnail|\bimage\b)/i.test(text) &&
      !element.querySelector('img,svg,canvas,video');
  }

  function sanitize(root) {
    const scope = root || document.querySelector('main') || document.body;
    if (!scope) return;

    scope.querySelectorAll('p,li,blockquote,figcaption').forEach((element) => {
      if (isImageReferenceParagraph(element)) element.remove();
    });

    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const cleaned = cleanText(node.nodeValue || '');
      if (cleaned !== node.nodeValue) node.nodeValue = cleaned;
    });

    scope.querySelectorAll('p,li,blockquote,figcaption').forEach((element) => {
      if (!(element.textContent || '').trim() && !element.children.length) element.remove();
    });
  }

  function run() { sanitize(document.querySelector('.md-content') || document); }
  document.addEventListener('DOMContentLoaded', run);
  window.addEventListener('load', run);

  if (typeof document$ !== 'undefined' && document$ && document$.subscribe) {
    document$.subscribe(run);
  }

  const observer = new MutationObserver((mutations) => {
    if (mutations.some((m) => m.addedNodes.length)) run();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.md-content') || document.body;
    if (target) observer.observe(target, { childList: true, subtree: true });
  });

  window.ECO412SanitizeContent = sanitize;
})();
