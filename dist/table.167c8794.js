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
})({"js/models/TableColumns.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TableColumns = /*#__PURE__*/function () {
  function TableColumns() {
    _classCallCheck(this, TableColumns);
  }

  _createClass(TableColumns, [{
    key: "genereColumns",
    value: function genereColumns(data) {
      var fragment = new DocumentFragment();

      for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        var col = document.createElement("td");
        col.textContent = value;
        col.setAttribute("data-name", key);
        fragment.appendChild(col);
      }

      return fragment;
    }
  }]);

  return TableColumns;
}();

exports.default = TableColumns;
},{}],"js/components/TableRow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TableColumns = _interopRequireDefault(require("../models/TableColumns"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TableRow = /*#__PURE__*/function () {
  function TableRow(_ref) {
    var id = _ref.id,
        name = _ref.name,
        surname = _ref.surname,
        email = _ref.email,
        submitDate = _ref.submitDate,
        _ref$onEdit = _ref.onEdit,
        onEdit = _ref$onEdit === void 0 ? function () {} : _ref$onEdit,
        _ref$onDelete = _ref.onDelete,
        onDelete = _ref$onDelete === void 0 ? function () {} : _ref$onDelete;

    _classCallCheck(this, TableRow);

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.submitDate = submitDate;
    this.onEdit = onEdit;
    this.onDelete = onDelete;
  }

  _createClass(TableRow, [{
    key: "_handleDelete",
    value: function _handleDelete(row) {
      row.remove();
      this.onDelete(this.id);
    }
  }, {
    key: "_handleEdit",
    value: function _handleEdit() {
      this.onEdit({
        id: this.id,
        name: this.name,
        surname: this.surname,
        email: this.email,
        submitDate: this.submitDate
      });
    }
  }, {
    key: "_genereColumns",
    value: function _genereColumns() {
      return new _TableColumns.default().genereColumns({
        name: this.name,
        surname: this.surname,
        email: this.email,
        submitDate: this.submitDate
      });
    }
  }, {
    key: "row",
    get: function get() {
      var _this = this;

      var row = document.createElement("tr");
      var deleteButton = document.createElement("button");
      var editButton = document.createElement("button");
      var buttonsCol = document.createElement("td");

      var columns = this._genereColumns();

      deleteButton.classList.add("js-delete-row-btn");
      deleteButton.textContent = "Delete";
      editButton.textContent = "Edit";
      editButton.addEventListener("click", this._handleEdit.bind(this));
      deleteButton.addEventListener("click", function () {
        return _this._handleDelete.call(_this, row);
      });
      buttonsCol.insertAdjacentElement("beforeend", deleteButton);
      buttonsCol.insertAdjacentElement("beforeend", editButton);
      row.appendChild(columns);
      row.insertAdjacentElement("beforeend", buttonsCol);
      return row;
    }
  }]);

  return TableRow;
}();

exports.default = TableRow;
},{"../models/TableColumns":"js/models/TableColumns.js"}],"js/components/TableModalForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TableModalForm = /*#__PURE__*/function () {
  function TableModalForm(_ref) {
    var onSubmit = _ref.onSubmit,
        data = _objectWithoutProperties(_ref, ["onSubmit"]);

    _classCallCheck(this, TableModalForm);

    this.data = data;
    /**@param {object} data Object with input values
     * @param {array} inputs Array with inputs, this can be used for they validation
     */

    this.onSubmit = onSubmit;
  }

  _createClass(TableModalForm, [{
    key: "genere",
    value: function genere() {
      var _this = this;

      var form = document.createElement("form");
      form.innerHTML = "<input type=\"text\" name=\"name\" placeholder=\"Name\" value=".concat(this.data.name, " />\n            <input type=\"text\" name=\"surname\" placeholder=\"Surname\" value=").concat(this.data.surname, " />\n            <input type=\"email\" name=\"email\" placeholder=\"Email\" value=").concat(this.data.email, " />\n            <button type=\"submit\">Save</button>");
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        _this._handleSubmit.call(_this, form);
      });
      return form;
    }
    /**@param form Form element for getting it's inputs
     */

  }, {
    key: "_handleSubmit",
    value: function _handleSubmit(form) {
      var name = form.querySelector('input[name="name"]');
      var surname = form.querySelector('input[name="surname"]');
      var email = form.querySelector('input[name="email"]');
      this.onSubmit({
        name: name.value,
        surname: surname.value,
        email: email.value
      }, [name, surname, email]);
    }
  }]);

  return TableModalForm;
}();

exports.default = TableModalForm;
},{}],"js/models/Modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal = /*#__PURE__*/function () {
  /**@param {string} container is a selector's name of container that will store the modal window*/
  function Modal(_ref) {
    var container = _ref.container,
        _ref$beforeGenere = _ref.beforeGenere,
        beforeGenere = _ref$beforeGenere === void 0 ? function () {} : _ref$beforeGenere,
        _ref$beforeClose = _ref.beforeClose,
        beforeClose = _ref$beforeClose === void 0 ? function () {} : _ref$beforeClose,
        _ref$afterClose = _ref.afterClose,
        afterClose = _ref$afterClose === void 0 ? function () {} : _ref$afterClose,
        _ref$afterGenere = _ref.afterGenere,
        afterGenere = _ref$afterGenere === void 0 ? function () {} : _ref$afterGenere,
        _ref$withAnimation = _ref.withAnimation,
        withAnimation = _ref$withAnimation === void 0 ? false : _ref$withAnimation;

    _classCallCheck(this, Modal);

    this.container = container;
    this.beforeGenere = beforeGenere;
    this.beforeClose = beforeClose;
    this.afterClose = afterClose;
    this.afterGenere = afterGenere;
    this.withAnimation = withAnimation;
    this.modal = null;
  }

  _createClass(Modal, [{
    key: "_genereButton",
    value: function _genereButton(id, textContent, onClick) {
      var closeButtonElement = document.createElement("button");
      closeButtonElement.textContent = textContent;
      closeButtonElement.id = id;
      closeButtonElement.addEventListener("click", onClick);
      return closeButtonElement;
    }
  }, {
    key: "_genereWrapperElement",
    value: function _genereWrapperElement(id, className) {
      var wrapperElement = document.createElement("div");
      wrapperElement.classList.add(className);
      wrapperElement.id = id;
      return wrapperElement;
    }
  }, {
    key: "_fadeIn",
    value: function _fadeIn(element) {
      element.style.display = "flex";
      setTimeout(function () {
        return element.style.opacity = 1;
      }, 100);
    }
  }, {
    key: "_fadeOut",
    value: function _fadeOut(element) {
      element.style.opacity = 0;
      setTimeout(function () {
        return element.remove();
      }, 100);
    }
  }, {
    key: "genereModal",
    value: function genereModal(content) {
      this.beforeGenere();
      var container = document.querySelector(".".concat(this.container));

      var wrapperElement = this._genereWrapperElement("js-modal", "modal-container");

      this.modal = wrapperElement;

      var closeButtonElement = this._genereButton("js-close-modal-btn", "close", this.handleCloseModal.bind(this));

      wrapperElement.insertAdjacentElement("afterbegin", closeButtonElement);
      wrapperElement.insertAdjacentElement("beforeend", content);

      if (this.withAnimation) {
        wrapperElement.style.opacity = 0;
        wrapperElement.style.display = "none";
      }

      container.insertAdjacentElement("beforeend", wrapperElement);

      if (this.withAnimation) {
        this._fadeIn(wrapperElement);
      }

      this.afterGenere();
    }
  }, {
    key: "handleCloseModal",
    value: function handleCloseModal() {
      this.beforeClose();
      this.close();
      this.afterClose();
    }
  }, {
    key: "close",
    value: function close() {
      if (this.withAnimation) {
        this._fadeOut(this.modal);
      } else {
        modal.remove();
      }
    }
  }]);

  return Modal;
}();

exports.default = Modal;
},{}],"js/helpers/id.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateId;

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
},{}],"js/table.js":[function(require,module,exports) {
"use strict";

var _TableRow = _interopRequireDefault(require("./components/TableRow"));

var _TableModalForm = _interopRequireDefault(require("./components/TableModalForm"));

var _Modal = _interopRequireDefault(require("./models/Modal"));

var _id = _interopRequireDefault(require("./helpers/id"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tableData = [];
var form = document.getElementById("js-table-form");
form.addEventListener("submit", handleTableFormSubmit);

function handleTableFormSubmit(e) {
  e.preventDefault();
  var name = form.querySelector('input[name="name"]');
  var surname = form.querySelector('input[name="surname"]');
  var email = form.querySelector('input[name="email"]');
  var submitDate = new Date().toLocaleString();
  var formIsNotValid = validateInputs([name, surname, email]);
  if (formIsNotValid) return;
  tableData.push({
    id: (0, _id.default)(),
    name: name.value,
    surname: surname.value,
    email: email.value,
    submitDate: submitDate
  });
  updateRows();
  removeFieldWarnings([name, surname, email]);
  clearTableForm([name, surname, email]);
}

function clearTableForm(inputs) {
  for (var index = 0; index < inputs.length; index++) {
    inputs[index].value = "";
  }
}

function validateInputs(inputs) {
  var hasError = false;

  for (var index = 0; index < inputs.length; index++) {
    if (inputs[index].value) continue;
    showEmptyFieldWarning(inputs[index]);
    hasError = true;
  }

  return hasError;
}

function showEmptyFieldWarning(input) {
  input.classList.add("field-error");
}

function removeFieldWarnings(inputs) {
  for (var index = 0; index < inputs.length; index++) {
    inputs[index].classList.remove("field-error");
  }
}

function openEditFormModal(data) {
  var modal = new _Modal.default({
    container: "js-modal-container",
    withAnimation: true
  });
  modal.genereModal(new _TableModalForm.default(_objectSpread({}, data, {
    onSubmit: function onSubmit(submitedData, inputs) {
      return onEditSubmit({
        id: data.id,
        modal: modal,
        submitedData: submitedData
      }, inputs);
    }
  })).genere());
}

function onEditSubmit(_ref, inputs) {
  var id = _ref.id,
      modal = _ref.modal,
      submitedData = _ref.submitedData;
  var result = [];
  var formIsNotValid = validateInputs(inputs);
  if (formIsNotValid) return;

  for (var index = 0; index < tableData.length; index++) {
    if (id === tableData[index].id) {
      tableData[index] = submitedData;
      tableData[index].submitDate = new Date().toLocaleString();
    }

    result.push(tableData[index]);
  }

  tableData = result;
  modal.close();
  updateRows();
}

function updateRows() {
  var fragment = new DocumentFragment();

  for (var index = 0; index < tableData.length; index++) {
    fragment.appendChild(new _TableRow.default(_objectSpread({
      onEdit: function onEdit(data) {
        return openEditFormModal(data);
      },
      onDelete: function onDelete(id) {
        return deleteRow(id);
      },
      id: tableData[index].id
    }, tableData[index])).row);
  }

  var table = document.getElementById("js-table-body");
  table.innerHTML = "";
  table.appendChild(fragment);
}

function deleteRow(id) {
  var result = [];

  for (var index = 0; index < tableData.length; index++) {
    if (tableData[index].id === id) continue;
    result.push(tableData[index]);
  }

  tableData = result;
}
},{"./components/TableRow":"js/components/TableRow.js","./components/TableModalForm":"js/components/TableModalForm.js","./models/Modal":"js/models/Modal.js","./helpers/id":"js/helpers/id.js"}],"C:/Users/dgolo/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60137" + '/');

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
},{}]},{},["C:/Users/dgolo/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/table.js"], null)
//# sourceMappingURL=/table.167c8794.js.map