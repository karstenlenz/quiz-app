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
exports.isElementInViewport = isElementInViewport;
exports.createElement = createElement;
exports.main = void 0;
var main = get('main');
exports.main = main;

function get(selector) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return target.querySelector(selector);
}

function getAll(selector) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return target.querySelectorAll(selector);
}

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (// rect.top >= 0 &&
    rect.top + 150 <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function createElement(type, className) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : main;
  var el = document.createElement(type);
  el.className = className;
  target.appendChild(el);
  return el;
}
},{}],"data/content.json":[function(require,module,exports) {
module.exports = {
  "cardContent": [{
    "question": "1 What is the lorem ipsum, dolor sit?",
    "answer": "1 The answer is  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus praesentium adipisci iste numquam ipsum iusto eveniet eos earum suscipit enim facere in a tempora totam facilis ut, eum assumenda.",
    "tags": ["HTML", "CSS", "JavaScript", "lorem", "ipsum"],
    "isBookmarked": true
  }, {
    "question": "2 What is the lorem ipsum, dolor sit?",
    "answer": "2 The answer is  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus praesentium adipisci iste numquam ipsum iusto eveniet eos earum suscipit enim facere in a tempora totam facilis ut, eum assumenda.",
    "tags": ["JavaScript", "lorem", "ipsum"]
  }, {
    "question": "3 What is the lorem ipsum, dolor sit?",
    "answer": "3 The answer is Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus praesentium adipisci iste numquam ipsum iusto eveniet eos earum suscipit enim facere in a tempora totam facilis ut, eum assumenda.",
    "tags": ["HTML", "CSS", "JavaScript"],
    "isBookmarked": true
  }, {
    "question": "4 What is the lorem ipsum, dolor sit?",
    "answer": "4 The answer is  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus praesentium adipisci iste numquam ipsum iusto eveniet eos earum suscipit enim facere in a tempora totam facilis ut, eum assumenda.",
    "tags": ["HTML", "CSS", "lorem", "ipsum"]
  }, {
    "question": "5 What is the lorem ipsum, dolor sit?",
    "answer": "5 The answer is  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus praesentium adipisci iste numquam ipsum iusto eveniet eos earum suscipit enim facere in a tempora totam facilis ut, eum assumenda.",
    "tags": ["HTML", "JavaScript", "ipsum"]
  }, {
    "question": "6 What is the lorem ipsum, dolor sit?",
    "answer": "6 The answer is Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus praesentium adipisci iste numquam ipsum iusto eveniet eos earum suscipit enim facere in a tempora totam facilis ut, eum assumenda.",
    "tags": ["ipsum"],
    "isBookmarked": true
  }]
};
},{}],"src/js/card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCards = createCards;
exports.createBookmarkedCards = createBookmarkedCards;
exports.createCard = createCard;
exports.cardContent = void 0;

var _util = require("./util");

var data = _interopRequireWildcard(require("../../data/content.json"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// get elements
var cardContent = data.cardContent;
exports.cardContent = cardContent;
var main = (0, _util.get)('main');

function createCards(content) {
  content.forEach(createCard);
}

function createBookmarkedCards() {
  cardContent.filter(function (card) {
    return card.isBookmarked;
  }).forEach(createCard);
}

function createCard(_ref) {
  var question = _ref.question,
      answer = _ref.answer,
      _ref$tags = _ref.tags,
      tags = _ref$tags === void 0 ? [] : _ref$tags,
      _ref$isBookmarked = _ref.isBookmarked,
      isBookmarked = _ref$isBookmarked === void 0 ? false : _ref$isBookmarked;
  var card = document.createElement('section');
  card.className = 'card p-15 mb-40';
  card.innerHTML =
  /*html*/
  "\n<svg\n    class=\"card__bookmark ".concat(isBookmarked ? 'card__bookmark--active' : '', "\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    width=\"24\"\n    height=\"24\"\n    viewBox=\"0 0 24 24\"\n    fill=\"none\"\n    stroke=\"currentColor\"\n    stroke-width=\"2\"\n    stroke-linecap=\"round\"\n    stroke-linejoin=\"round\"\n    class=\"feather feather-bookmark\"\n  >\n    <path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path>\n  </svg>\n\n<h2>Question</h2>\n<p>\n").concat(question, "\n</p>\n<button class=\"card__button--answer p-10\">Show answer</button>\n<p class =\"card__answer d-none\">").concat(answer, "</p>\n<ul class=\"p-0 d-flex-wrap\">\n\n</ul>");
  main.appendChild(card); //create Tags

  var tagTarget = (0, _util.get)('ul', card);
  tags.forEach(function (tag) {
    var tagEl = document.createElement('li');
    tagTarget.appendChild(tagEl);
    tagEl.textContent = tag;
  });
  addBookMarkListener(card);
  addAnswerListener(card);
  addFadeInListener(main);
  fadeInWhenInViewport(card);
  main.addEventListener('load', function () {
    return fadeInWhenInViewport(card);
  });
  main.addEventListener('scroll', function () {
    return fadeInWhenInViewport(card);
  });
}

function addAnswerListener(element) {
  var buttonAnswer = element.querySelector('.card__button--answer');
  var answer = element.querySelector('.card__answer');
  buttonAnswer.addEventListener('click', function () {
    answer.classList.toggle('d-none');

    if (buttonAnswer.textContent === 'Show answer') {
      buttonAnswer.textContent = 'Hide answer';
    } else {
      buttonAnswer.textContent = 'Show answer';
    }
  });
}

function addBookMarkListener(element) {
  var bookmark = element.querySelector('.card__bookmark');
  bookmark.addEventListener('click', function () {
    return toggleBookmarkActive(bookmark);
  });
} // bookmark toggle


function toggleBookmarkActive(element) {
  element.classList.toggle('card__bookmark--active');
}

function addFadeInListener(card) {
  card.addEventListener('load', function () {
    return fadeInWhenInViewport(card);
  });
  card.addEventListener('scroll', function () {
    return fadeInWhenInViewport(card);
  });
}

function fadeInWhenInViewport(card) {
  if ((0, _util.isElementInViewport)(card)) {
    card.classList.add('card--fade-in');
  } else {
    card.classList.remove('card--fade-in');
  }
}
},{"./util":"src/js/util.js","../../data/content.json":"data/content.json"}],"src/js/form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initForm = initForm;

var _util = require("./util");

var _card = require("./card");

function initForm() {
  // get elements
  var form = (0, _util.get)('.form'); // add event listener

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var question = form.question,
        answer = form.answer,
        tags = form.tags;

    _card.cardContent.push({
      question: question.value,
      answer: answer.value,
      tags: tags.value.split(',').map(function (tag) {
        return tag.trim();
      })
    });

    console.log('card created');
    form.reset();
  });
}
},{"./util":"src/js/util.js","./card":"src/js/card.js"}],"src/js/create.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initCreate = initCreate;

var _util = require("./util");

var _form = require("./form");

function initCreate() {
  var main = (0, _util.get)('main');
  main.className = 'p-15 page--create';
  main.innerHTML =
  /*html*/
  "    <form action=\"\" class=\"form\">\n  <div class=\"form__input-wrapper d-flex-wrap mb-40\">\n    <label for=\"question\" class=\"form__label\">Question</label>\n    <textarea\n      name=\"question\"\n      id=\"question\"\n      cols=\"30\"\n      rows=\"10\"\n      placeholder=\"What do you want to ask?\"\n      class=\"form__textarea p-10\"\n    ></textarea>\n  </div>\n  <div class=\"form__input-wrapper d-flex-wrap mb-40\">\n    <label for=\"answer\" class=\"form__label\">Answer</label>\n    <textarea\n      name=\"answer\"\n      id=\"answer\"\n      cols=\"30\"\n      rows=\"10\"\n      placeholder=\"What's the answer?\"\n      class=\"form__textarea p-10\"\n    ></textarea>\n  </div>\n  <div class=\"form__input-wrapper d-flex-wrap mb-40\">\n    <label for=\"tags\" class=\"form__label\">Tags</label>\n    <input\n      id=\"tags\"\n      type=\"text\"\n      placeholder=\"tag1,tag2,tag3\"\n      class=\"form__input--text p-10\"\n    />\n  </div>\n  <button class=\"form__button p-10 mb-40\">Submit</button>\n</form>\n";
  (0, _form.initForm)();
}
},{"./util":"src/js/util.js","./form":"src/js/form.js"}],"src/js/darkmode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDarkMode = initDarkMode;

var _util = require("./util");

function initDarkMode() {
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
},{"./util":"src/js/util.js"}],"src/js/profile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initProfile = initProfile;

var _util = require("./util");

var _darkmode = require("./darkmode");

function initProfile() {
  var main = (0, _util.get)('main');
  main.className = 'profile p-15 d-flex-wrap page--profile';
  main.innerHTML =
  /*html*/
  "<img\nsrc=\"https://source.unsplash.com/collection/1953210/200x200\"\nalt=\"Profile picture\"\nclass=\"profile__picture mw-50\"\n/>\n<h2 class=\"profile__user-name\">karstenlenz123</h2>\n<p>\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur\nhic totam dolores voluptas eligendi magnam debitis possimus laboriosam\nvel repellendus odio, maxime molestiae id consequuntur exercitationem\neveniet reiciendis pariatur autem?\n</p>\n<div class=\"w-100\">\n<h2>Skills</h2>\n<ul class=\"p-0 d-flex-wrap\">\n  <li class>Skill1</li>\n  <li class>Skill2</li>\n  <li class>Skill3</li>\n  <li class>Skill4</li>\n</ul>\n</div>\n<button class=\"p-10 mb-40 darkmode\">Dark Mode</button>\n<button class=\"p-10 mb-40\">Logout</button>\n";
  (0, _darkmode.initDarkMode)();
}
},{"./util":"src/js/util.js","./darkmode":"src/js/darkmode.js"}],"src/js/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = Filter;
exports.filterCards = filterCards;

var _util = require("./util");

var _navigation = require("./navigation");

var _card = require("./card");

function Filter() {
  var form = (0, _util.createElement)('form');
  var input = (0, _util.createElement)('input', 'filter__input p-10 mb-15');
  input.placeholder = 'Filter nach Tags, z.B. CSS';
  form.appendChild(input);
  var button = (0, _util.createElement)('button', 'filter__button p-10 mb-30');
  button.textContent = 'Filtern';
  form.appendChild(button);
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var keyword = input.value;
    filterCards(keyword);
    console.log(keyword);
    form.reset();
  });
}

function filterCards(keyword) {
  if (keyword !== '') {
    (0, _navigation.clearContent)();
    Filter();

    var filteredContent = _card.cardContent.filter(function (card) {
      return card.tags.includes(keyword.trim());
    });

    console.log('filteredcontent = ' + filteredContent);
    filteredContent.forEach(_card.createCard);

    if (filteredContent.length === 0) {
      var errorMessage = (0, _util.createElement)('h2', '', _util.main);
      errorMessage.textContent = "Es gibt keine Karte mit dem Tag \"".concat(keyword, "\". Tipp: Achte auf Gro\xDF- und Kleinschreibung und Leerzeichen.");
    }
  }
}
},{"./util":"src/js/util.js","./navigation":"src/js/navigation.js","./card":"src/js/card.js"}],"src/js/navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.clearContent = clearContent;
exports.initializeNav = initializeNav;
exports.main = void 0;

var _index = require("./index");

var _util = require("./util");

var _card = require("./card");

var _create = require("./create");

var _profile = require("./profile");

var _form = require("./form");

var _filter = require("./filter");

var headline = (0, _util.get)('h1'); // Pages
// Navigation links

var navBookmarks = (0, _util.get)('[data-js="navBookmarks"');
var navIndex = (0, _util.get)('[data-js="navIndex"');
var navCreate = (0, _util.get)('[data-js="navCreate"');
var navProfile = (0, _util.get)('[data-js="navProfile"');
var iconsFooter = (0, _util.getAll)('.footer__icon');
var main = (0, _util.get)('main');
exports.main = main;

function render(pageName) {
  var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : navIndex;
  clearContent();
  iconsFooter.forEach(function (el) {
    return el.classList.remove('footer__icon--active');
  });
  icon.querySelector('.footer__icon').classList.add('footer__icon--active');

  switch (pageName) {
    case 'pageIndex':
      (0, _filter.Filter)();
      (0, _card.createCards)(_card.cardContent);
      changeHeadline('Quiz-App');
      break;

    case 'pageBookmarks':
      (0, _card.createBookmarkedCards)();
      changeHeadline('Bookmarks');
      break;

    case 'pageCreate':
      (0, _create.initCreate)();
      changeHeadline('Create');
      break;

    case 'pageProfile':
      (0, _profile.initProfile)();
      changeHeadline('Profile');
      break;
  }

  var historyState = {
    pageName: pageName
  };
  window.history.pushState(historyState, null, "".concat(pageName, ".html"));
}

function clearContent() {
  var main = (0, _util.get)('main');
  main.innerHTML = '';
}

function changeHeadline(string) {
  headline.textContent = string;
}

function initializeNav() {
  // Add Event Listeners
  navIndex.addEventListener('click', function () {
    return render('pageIndex', navIndex);
  });
  navBookmarks.addEventListener('click', function () {
    return render('pageBookmarks', navBookmarks);
  });
  navCreate.addEventListener('click', function () {
    return render('pageCreate', navCreate);
  });
  navProfile.addEventListener('click', function () {
    return render('pageProfile', navProfile);
  });
}
},{"./index":"src/js/index.js","./util":"src/js/util.js","./card":"src/js/card.js","./create":"src/js/create.js","./profile":"src/js/profile.js","./form":"src/js/form.js","./filter":"src/js/filter.js"}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _navigation = require("./navigation");

var _card = require("./card");

var _darkmode = require("./darkmode");

var _form = require("./form");

var _filter = require("./filter");

(0, _filter.Filter)();
(0, _card.createCards)(_card.cardContent);
(0, _navigation.initializeNav)(); //initializeForm()

history.replaceState(null, null, '');

window.onpopstate = function (event) {
  if (event.state != null) {
    var state = {
      pageName: '',
      icon: ''
    };
    state.pageName = event.state.pageName;
    state.icon = event.state.icon;
    (0, _navigation.render)(state.pageName, state.icon);
  }
}; // export function timeMachine(state) {
//   console.log('state ' + state.pageName + ' ' + state.icon)
//   render(state.pageName, state.icon)
// }
},{"./navigation":"src/js/navigation.js","./card":"src/js/card.js","./darkmode":"src/js/darkmode.js","./form":"src/js/form.js","./filter":"src/js/filter.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53573" + '/');

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