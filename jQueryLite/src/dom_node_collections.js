class DOMNodeCollection {
  constructor(array) {
    this.array = array;
  }

  html(str) {
    if (str === undefined) {
      return this.array[0].innerHTML;
    } else {
      this.array.forEach (el => {
        el.innerHTML = str;
      });
    }
  }

  empty() {
    this.html("");
  }

  append(arg) {
    if (arg instanceof DOMNodeCollection) {
      this.array.forEach(el => {
        arg.array.forEach(node => {
          let clone = node.cloneNode(true);
          el.appendChild(clone);
        });
      });
    } else if (arg instanceof HTMLElement) {
      this.array.forEach(el => {
        let clone = arg.cloneNode(true);
        el.appendChild(clone);
      });
    } else if (typeof arg === 'string') {
      this.array.forEach(el => {
        el.innerHTML += arg;
      });
    }
  }

  addClass(str) {
    this.array.forEach(el => {
      el.className = str;
    });
  }

  removeClass() {
    this.array.forEach(el => {
      el.className = "";
    });
  }

  attr(k, v) {
    // debugger
    if (v === undefined) {
      return this.array[0].getAttribute(k);
    } else {
      this.array.forEach(el => {
        el.setAttribute(k, v);
      });
    }
  }

  children() {
    let kids = [];

    this.array.forEach(el => {
      kids.push(el.children);
    });

    return new DOMNodeCollection(kids);
  }

  parent() {
    let parents = [];

    this.array.forEach(el => {
      parents.push(el.parentElement);
    });

    return new DOMNodeCollection(parents);
  }

  find(selector) {
    let foundArr = [];

    this.array.forEach(el => {  
      foundArr = foundArr.concat(Array.from(el.querySelectorAll(selector)));
    });

    return new DOMNodeCollection(foundArr);
  }

  remove() {
    this.array.forEach(el => {
      el.innerHTML = "";
    });
  }

  on(event, cb) {
    // this.attr(event, cb);

    this.array.forEach(el => {
      debugger
      const key = `js-${event}`;

      el[key] = cb;
      el.addEventListener(event, cb);
      debugger
    });
  }

  off(event) {
    this.array.forEach(el => {
      debugger

      el.removeEventListener(event, el[`js-${event}`]);
    });
  }
}


module.exports = DOMNodeCollection;