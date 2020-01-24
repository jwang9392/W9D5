const DOMNodeCollection = require("./dom_node_collections.js");

const docReadyCBs = [];

let fx = () => alert("the document is ready");
docReadyCBs.push(fx);

window.$l = function(arg) {
  if (typeof arg === 'string') {
    let arr = Array.from(document.querySelectorAll(arg));
    return new DOMNodeCollection(arr);
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  } else if (arg instanceof Function) {
    if (document.readyState === 'complete') {
      arg();
      docReadyCBs.forEach(func => {
        func();
      });
    } else {
      docReadyCBs.push(arg);
    }
  }
};

$l(() => {
  console.log('hello');
  
})