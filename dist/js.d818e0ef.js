// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.getAll = getAll;

// get functions
function get(selector) {
  return document.querySelector(selector);
}

function getAll(selector) {
  return document.querySelectorAll(selector);
}
},{}],"src/js/navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeNav = initializeNav;

var _util = require("./util");

function initializeNav() {
  // Pages
  var pageIndex = (0, _util.get)('.page--index');
  var pageBookmark = (0, _util.get)('.page--bookmarks');
  var pageCreate = (0, _util.get)('.page--create');
  var pageProfile = (0, _util.get)('.page--profile');
  var headline = (0, _util.get)('h1'); // Navigation links

  var navLinks = (0, _util.getAll)('nav > div');
  var navBookmark = (0, _util.get)('.nav__bookmarks');
  var navIndex = (0, _util.get)('.nav__index');
  var navCreate = (0, _util.get)('.nav__create');
  var navProfile = (0, _util.get)('.nav__profile');
  var iconsFooter = (0, _util.getAll)('.footer__icon'); // Add Event Listeners

  navIndex.addEventListener('click', showPage(pageIndex, 'Quiz-App', navIndex));
  navBookmark.addEventListener('click', showPage(pageBookmark, 'Bookmarks', navBookmark));
  navCreate.addEventListener('click', showPage(pageCreate, 'Create', navCreate));
  navProfile.addEventListener('click', showPage(pageProfile, 'Profile', navProfile)); //Navigation functions

  function showPage(pageName, headline, icon) {
    return function () {
      hideAllPages();
      pageName.classList.remove('d-none');
      changeHeadline(headline);
      iconsFooter.forEach(function (el) {
        return el.classList.remove('footer__icon--active');
      });
      icon.querySelector('.footer__icon').classList.add('footer__icon--active');
    };
  }

  function changeHeadline(string) {
    headline.textContent = string;
  }

  function hideAllPages() {
    var pages = document.querySelectorAll('main');
    pages.forEach(function (page) {
      return page.classList.add('d-none');
    });
  } // functions
  //  function switchPage(pageName) {
  //    return () => {
  //      navLinks.forEach(
  //        element.classList.add('d-none')
  //        pageName.classList.remove('d-none')
  //      )
  //  }
  //  }

}
},{"./util":"src/js/util.js"}],"src/js/card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeCard = initializeCard;

var _util = require("./util");

function initializeCard() {
  // get elements
  var buttonsAnswer = (0, _util.getAll)('.card__button--answer');
  var cards = (0, _util.getAll)('.card'); // add event listener

  cards.forEach(function (element) {
    var bookmark = element.querySelector('.card__bookmark');
    bookmark.addEventListener('click', function () {
      return toggleBookmarkActive(bookmark);
    });
    var buttonAnswer = element.querySelector('.card__button--answer');
    buttonAnswer.addEventListener('click', function () {
      var answer = element.querySelector('.card__answer');
      answer.classList.toggle('d-none');

      if (buttonAnswer.textContent === 'Show answer') {
        buttonAnswer.textContent = 'Hide answer';
      } else {
        buttonAnswer.textContent = 'Show answer';
      }
    });
  }); // bookmark toggle

  function toggleBookmarkActive(element) {
    element.classList.toggle('card__bookmark--active');
    element.classList.toggle('card__bookmark--inactive');
  }
}
},{"./util":"src/js/util.js"}],"src/js/darkmode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeDarkMode = initializeDarkMode;

var _util = require("./util");

function initializeDarkMode() {
  // get elements
  var buttonDark = (0, _util.get)('.darkmode');
  var styleSheet = (0, _util.get)('.stylesheet');
  var styleSheetURL = styleSheet.href; // add event listener

  buttonDark.addEventListener('click', function () {
    if (buttonDark.textContent === 'Dark Mode') {
      styleSheet.href = 'dark.css';
      buttonDark.textContent = 'Light Mode';
    } else {
      styleSheet.href = styleSheetURL;
      buttonDark.textContent = 'Dark Mode';
    }
  });
}
},{"./util":"src/js/util.js"}],"src/js/form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeForm = initializeForm;

var _util = require("./util");

function initializeForm() {
  // get elements
  var inputsForm = (0, _util.getAll)('textarea,input');
  var form = (0, _util.get)('.form'); // add event listener

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.reset();
  });
}
},{"./util":"src/js/util.js"}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _navigation = require("./navigation");

var _card = require("./card");

var _darkmode = require("./darkmode");

var _form = require("./form");

(0, _navigation.initializeNav)();
(0, _card.initializeCard)();
(0, _darkmode.initializeDarkMode)();
(0, _form.initializeForm)();
},{"./navigation":"src/js/navigation.js","./card":"src/js/card.js","./darkmode":"src/js/darkmode.js","./form":"src/js/form.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65481" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map