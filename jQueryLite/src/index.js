const DOMNodeCollection = require("./dom_node_collections.js");

window.$l = function(arg) {
  if (typeof arg === 'string') {
    let arr = Array.from(document.querySelectorAll(arg));
    return new DOMNodeCollection(arr);
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }


};

