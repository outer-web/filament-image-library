// node_modules/cropperjs/dist/cropper.esm.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
var WINDOW = IS_BROWSER ? window : {};
var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : false;
var HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : false;
var NAMESPACE = "cropper";
var ACTION_ALL = "all";
var ACTION_CROP = "crop";
var ACTION_MOVE = "move";
var ACTION_ZOOM = "zoom";
var ACTION_EAST = "e";
var ACTION_WEST = "w";
var ACTION_SOUTH = "s";
var ACTION_NORTH = "n";
var ACTION_NORTH_EAST = "ne";
var ACTION_NORTH_WEST = "nw";
var ACTION_SOUTH_EAST = "se";
var ACTION_SOUTH_WEST = "sw";
var CLASS_CROP = "".concat(NAMESPACE, "-crop");
var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
var CLASS_MOVE = "".concat(NAMESPACE, "-move");
var DATA_ACTION = "".concat(NAMESPACE, "Action");
var DATA_PREVIEW = "".concat(NAMESPACE, "Preview");
var DRAG_MODE_CROP = "crop";
var DRAG_MODE_MOVE = "move";
var DRAG_MODE_NONE = "none";
var EVENT_CROP = "crop";
var EVENT_CROP_END = "cropend";
var EVENT_CROP_MOVE = "cropmove";
var EVENT_CROP_START = "cropstart";
var EVENT_DBLCLICK = "dblclick";
var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown";
var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove";
var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup";
var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START;
var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE;
var EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END;
var EVENT_READY = "ready";
var EVENT_RESIZE = "resize";
var EVENT_WHEEL = "wheel";
var EVENT_ZOOM = "zoom";
var MIME_TYPE_JPEG = "image/jpeg";
var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
var REGEXP_DATA_URL = /^data:/;
var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
var REGEXP_TAG_NAME = /^img|canvas$/i;
var MIN_CONTAINER_WIDTH = 200;
var MIN_CONTAINER_HEIGHT = 100;
var DEFAULTS = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: DRAG_MODE_CROP,
  // 'crop', 'move' or 'none'
  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: "",
  // Re-render the cropper when resize the window
  responsive: true,
  // Restore the cropped area after resize the window
  restore: true,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: true,
  // Check the current image's Exif Orientation information
  checkOrientation: true,
  // Show the black modal
  modal: true,
  // Show the dashed lines for guiding
  guides: true,
  // Show the center indicator for guiding
  center: true,
  // Show the white modal to highlight the crop box
  highlight: true,
  // Show the grid background
  background: true,
  // Enable to crop the image automatically when initialize
  autoCrop: true,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: true,
  // Enable to rotate the image
  rotatable: true,
  // Enable to scale the image
  scalable: true,
  // Enable to zoom the image
  zoomable: true,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: true,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: true,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: true,
  // Enable to resize the crop box
  cropBoxResizable: true,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: true,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: MIN_CONTAINER_WIDTH,
  minContainerHeight: MIN_CONTAINER_HEIGHT,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
};
var TEMPLATE = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
var isNaN = Number.isNaN || WINDOW.isNaN;
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
var isPositiveNumber = function isPositiveNumber2(value) {
  return value > 0 && value < Infinity;
};
function isUndefined(value) {
  return typeof value === "undefined";
}
function isObject(value) {
  return _typeof(value) === "object" && value !== null;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }
  try {
    var _constructor = value.constructor;
    var prototype = _constructor.prototype;
    return _constructor && prototype && hasOwnProperty.call(prototype, "isPrototypeOf");
  } catch (error) {
    return false;
  }
}
function isFunction(value) {
  return typeof value === "function";
}
var slice = Array.prototype.slice;
function toArray(value) {
  return Array.from ? Array.from(value) : slice.call(value);
}
function forEach(data, callback) {
  if (data && isFunction(callback)) {
    if (Array.isArray(data) || isNumber(data.length)) {
      toArray(data).forEach(function(value, key) {
        callback.call(data, value, key, data);
      });
    } else if (isObject(data)) {
      Object.keys(data).forEach(function(key) {
        callback.call(data, data[key], key, data);
      });
    }
  }
  return data;
}
var assign = Object.assign || function assign2(target) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (isObject(target) && args.length > 0) {
    args.forEach(function(arg) {
      if (isObject(arg)) {
        Object.keys(arg).forEach(function(key) {
          target[key] = arg[key];
        });
      }
    });
  }
  return target;
};
var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
function normalizeDecimalNumber(value) {
  var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
}
var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
function setStyle(element, styles) {
  var style = element.style;
  forEach(styles, function(value, property) {
    if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
      value = "".concat(value, "px");
    }
    style[property] = value;
  });
}
function hasClass(element, value) {
  return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
}
function addClass(element, value) {
  if (!value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      addClass(elem, value);
    });
    return;
  }
  if (element.classList) {
    element.classList.add(value);
    return;
  }
  var className = element.className.trim();
  if (!className) {
    element.className = value;
  } else if (className.indexOf(value) < 0) {
    element.className = "".concat(className, " ").concat(value);
  }
}
function removeClass(element, value) {
  if (!value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      removeClass(elem, value);
    });
    return;
  }
  if (element.classList) {
    element.classList.remove(value);
    return;
  }
  if (element.className.indexOf(value) >= 0) {
    element.className = element.className.replace(value, "");
  }
}
function toggleClass(element, value, added) {
  if (!value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      toggleClass(elem, value, added);
    });
    return;
  }
  if (added) {
    addClass(element, value);
  } else {
    removeClass(element, value);
  }
}
var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
function toParamCase(value) {
  return value.replace(REGEXP_CAMEL_CASE, "$1-$2").toLowerCase();
}
function getData(element, name) {
  if (isObject(element[name])) {
    return element[name];
  }
  if (element.dataset) {
    return element.dataset[name];
  }
  return element.getAttribute("data-".concat(toParamCase(name)));
}
function setData(element, name, data) {
  if (isObject(data)) {
    element[name] = data;
  } else if (element.dataset) {
    element.dataset[name] = data;
  } else {
    element.setAttribute("data-".concat(toParamCase(name)), data);
  }
}
function removeData(element, name) {
  if (isObject(element[name])) {
    try {
      delete element[name];
    } catch (error) {
      element[name] = void 0;
    }
  } else if (element.dataset) {
    try {
      delete element.dataset[name];
    } catch (error) {
      element.dataset[name] = void 0;
    }
  } else {
    element.removeAttribute("data-".concat(toParamCase(name)));
  }
}
var REGEXP_SPACES = /\s\s*/;
var onceSupported = (function() {
  var supported = false;
  if (IS_BROWSER) {
    var once = false;
    var listener = function listener2() {
    };
    var options = Object.defineProperty({}, "once", {
      get: function get() {
        supported = true;
        return once;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function set(value) {
        once = value;
      }
    });
    WINDOW.addEventListener("test", listener, options);
    WINDOW.removeEventListener("test", listener, options);
  }
  return supported;
})();
function removeListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function(event) {
    if (!onceSupported) {
      var listeners = element.listeners;
      if (listeners && listeners[event] && listeners[event][listener]) {
        handler = listeners[event][listener];
        delete listeners[event][listener];
        if (Object.keys(listeners[event]).length === 0) {
          delete listeners[event];
        }
        if (Object.keys(listeners).length === 0) {
          delete element.listeners;
        }
      }
    }
    element.removeEventListener(event, handler, options);
  });
}
function addListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var _handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function(event) {
    if (options.once && !onceSupported) {
      var _element$listeners = element.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
      _handler = function handler() {
        delete listeners[event][listener];
        element.removeEventListener(event, _handler, options);
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        listener.apply(element, args);
      };
      if (!listeners[event]) {
        listeners[event] = {};
      }
      if (listeners[event][listener]) {
        element.removeEventListener(event, listeners[event][listener], options);
      }
      listeners[event][listener] = _handler;
      element.listeners = listeners;
    }
    element.addEventListener(event, _handler, options);
  });
}
function dispatchEvent(element, type, data) {
  var event;
  if (isFunction(Event) && isFunction(CustomEvent)) {
    event = new CustomEvent(type, {
      detail: data,
      bubbles: true,
      cancelable: true
    });
  } else {
    event = document.createEvent("CustomEvent");
    event.initCustomEvent(type, true, true, data);
  }
  return element.dispatchEvent(event);
}
function getOffset(element) {
  var box = element.getBoundingClientRect();
  return {
    left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: box.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var location = WINDOW.location;
var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function isCrossOriginURL(url) {
  var parts = url.match(REGEXP_ORIGINS);
  return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
}
function addTimestamp(url) {
  var timestamp = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return url + (url.indexOf("?") === -1 ? "?" : "&") + timestamp;
}
function getTransforms(_ref) {
  var rotate2 = _ref.rotate, scaleX2 = _ref.scaleX, scaleY2 = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
  var values = [];
  if (isNumber(translateX) && translateX !== 0) {
    values.push("translateX(".concat(translateX, "px)"));
  }
  if (isNumber(translateY) && translateY !== 0) {
    values.push("translateY(".concat(translateY, "px)"));
  }
  if (isNumber(rotate2) && rotate2 !== 0) {
    values.push("rotate(".concat(rotate2, "deg)"));
  }
  if (isNumber(scaleX2) && scaleX2 !== 1) {
    values.push("scaleX(".concat(scaleX2, ")"));
  }
  if (isNumber(scaleY2) && scaleY2 !== 1) {
    values.push("scaleY(".concat(scaleY2, ")"));
  }
  var transform = values.length ? values.join(" ") : "none";
  return {
    WebkitTransform: transform,
    msTransform: transform,
    transform
  };
}
function getMaxZoomRatio(pointers) {
  var pointers2 = _objectSpread2({}, pointers);
  var maxRatio = 0;
  forEach(pointers, function(pointer, pointerId) {
    delete pointers2[pointerId];
    forEach(pointers2, function(pointer2) {
      var x1 = Math.abs(pointer.startX - pointer2.startX);
      var y1 = Math.abs(pointer.startY - pointer2.startY);
      var x2 = Math.abs(pointer.endX - pointer2.endX);
      var y2 = Math.abs(pointer.endY - pointer2.endY);
      var z1 = Math.sqrt(x1 * x1 + y1 * y1);
      var z2 = Math.sqrt(x2 * x2 + y2 * y2);
      var ratio = (z2 - z1) / z1;
      if (Math.abs(ratio) > Math.abs(maxRatio)) {
        maxRatio = ratio;
      }
    });
  });
  return maxRatio;
}
function getPointer(_ref2, endOnly) {
  var pageX = _ref2.pageX, pageY = _ref2.pageY;
  var end = {
    endX: pageX,
    endY: pageY
  };
  return endOnly ? end : _objectSpread2({
    startX: pageX,
    startY: pageY
  }, end);
}
function getPointersCenter(pointers) {
  var pageX = 0;
  var pageY = 0;
  var count = 0;
  forEach(pointers, function(_ref3) {
    var startX = _ref3.startX, startY = _ref3.startY;
    pageX += startX;
    pageY += startY;
    count += 1;
  });
  pageX /= count;
  pageY /= count;
  return {
    pageX,
    pageY
  };
}
function getAdjustedSizes(_ref4) {
  var aspectRatio = _ref4.aspectRatio, height = _ref4.height, width = _ref4.width;
  var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain";
  var isValidWidth = isPositiveNumber(width);
  var isValidHeight = isPositiveNumber(height);
  if (isValidWidth && isValidHeight) {
    var adjustedWidth = height * aspectRatio;
    if (type === "contain" && adjustedWidth > width || type === "cover" && adjustedWidth < width) {
      height = width / aspectRatio;
    } else {
      width = height * aspectRatio;
    }
  } else if (isValidWidth) {
    height = width / aspectRatio;
  } else if (isValidHeight) {
    width = height * aspectRatio;
  }
  return {
    width,
    height
  };
}
function getRotatedSizes(_ref5) {
  var width = _ref5.width, height = _ref5.height, degree = _ref5.degree;
  degree = Math.abs(degree) % 180;
  if (degree === 90) {
    return {
      width: height,
      height: width
    };
  }
  var arc = degree % 90 * Math.PI / 180;
  var sinArc = Math.sin(arc);
  var cosArc = Math.cos(arc);
  var newWidth = width * cosArc + height * sinArc;
  var newHeight = width * sinArc + height * cosArc;
  return degree > 90 ? {
    width: newHeight,
    height: newWidth
  } : {
    width: newWidth,
    height: newHeight
  };
}
function getSourceCanvas(image, _ref6, _ref7, _ref8) {
  var imageAspectRatio = _ref6.aspectRatio, imageNaturalWidth = _ref6.naturalWidth, imageNaturalHeight = _ref6.naturalHeight, _ref6$rotate = _ref6.rotate, rotate2 = _ref6$rotate === void 0 ? 0 : _ref6$rotate, _ref6$scaleX = _ref6.scaleX, scaleX2 = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX, _ref6$scaleY = _ref6.scaleY, scaleY2 = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
  var aspectRatio = _ref7.aspectRatio, naturalWidth = _ref7.naturalWidth, naturalHeight = _ref7.naturalHeight;
  var _ref8$fillColor = _ref8.fillColor, fillColor = _ref8$fillColor === void 0 ? "transparent" : _ref8$fillColor, _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled, imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE, _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality, imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? "low" : _ref8$imageSmoothingQ, _ref8$maxWidth = _ref8.maxWidth, maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth, _ref8$maxHeight = _ref8.maxHeight, maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight, _ref8$minWidth = _ref8.minWidth, minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth, _ref8$minHeight = _ref8.minHeight, minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  var maxSizes = getAdjustedSizes({
    aspectRatio,
    width: maxWidth,
    height: maxHeight
  });
  var minSizes = getAdjustedSizes({
    aspectRatio,
    width: minWidth,
    height: minHeight
  }, "cover");
  var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
  var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));
  var destMaxSizes = getAdjustedSizes({
    aspectRatio: imageAspectRatio,
    width: maxWidth,
    height: maxHeight
  });
  var destMinSizes = getAdjustedSizes({
    aspectRatio: imageAspectRatio,
    width: minWidth,
    height: minHeight
  }, "cover");
  var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
  var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
  var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
  canvas.width = normalizeDecimalNumber(width);
  canvas.height = normalizeDecimalNumber(height);
  context.fillStyle = fillColor;
  context.fillRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);
  context.rotate(rotate2 * Math.PI / 180);
  context.scale(scaleX2, scaleY2);
  context.imageSmoothingEnabled = imageSmoothingEnabled;
  context.imageSmoothingQuality = imageSmoothingQuality;
  context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function(param) {
    return Math.floor(normalizeDecimalNumber(param));
  }))));
  context.restore();
  return canvas;
}
var fromCharCode = String.fromCharCode;
function getStringFromCharCode(dataView, start, length) {
  var str = "";
  length += start;
  for (var i = start; i < length; i += 1) {
    str += fromCharCode(dataView.getUint8(i));
  }
  return str;
}
var REGEXP_DATA_URL_HEAD = /^data:.*,/;
function dataURLToArrayBuffer(dataURL) {
  var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, "");
  var binary = atob(base64);
  var arrayBuffer = new ArrayBuffer(binary.length);
  var uint8 = new Uint8Array(arrayBuffer);
  forEach(uint8, function(value, i) {
    uint8[i] = binary.charCodeAt(i);
  });
  return arrayBuffer;
}
function arrayBufferToDataURL(arrayBuffer, mimeType) {
  var chunks = [];
  var chunkSize = 8192;
  var uint8 = new Uint8Array(arrayBuffer);
  while (uint8.length > 0) {
    chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
    uint8 = uint8.subarray(chunkSize);
  }
  return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join("")));
}
function resetAndGetOrientation(arrayBuffer) {
  var dataView = new DataView(arrayBuffer);
  var orientation;
  try {
    var littleEndian;
    var app1Start;
    var ifdStart;
    if (dataView.getUint8(0) === 255 && dataView.getUint8(1) === 216) {
      var length = dataView.byteLength;
      var offset = 2;
      while (offset + 1 < length) {
        if (dataView.getUint8(offset) === 255 && dataView.getUint8(offset + 1) === 225) {
          app1Start = offset;
          break;
        }
        offset += 1;
      }
    }
    if (app1Start) {
      var exifIDCode = app1Start + 4;
      var tiffOffset = app1Start + 10;
      if (getStringFromCharCode(dataView, exifIDCode, 4) === "Exif") {
        var endianness = dataView.getUint16(tiffOffset);
        littleEndian = endianness === 18761;
        if (littleEndian || endianness === 19789) {
          if (dataView.getUint16(tiffOffset + 2, littleEndian) === 42) {
            var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
            if (firstIFDOffset >= 8) {
              ifdStart = tiffOffset + firstIFDOffset;
            }
          }
        }
      }
    }
    if (ifdStart) {
      var _length = dataView.getUint16(ifdStart, littleEndian);
      var _offset;
      var i;
      for (i = 0; i < _length; i += 1) {
        _offset = ifdStart + i * 12 + 2;
        if (dataView.getUint16(_offset, littleEndian) === 274) {
          _offset += 8;
          orientation = dataView.getUint16(_offset, littleEndian);
          dataView.setUint16(_offset, 1, littleEndian);
          break;
        }
      }
    }
  } catch (error) {
    orientation = 1;
  }
  return orientation;
}
function parseOrientation(orientation) {
  var rotate2 = 0;
  var scaleX2 = 1;
  var scaleY2 = 1;
  switch (orientation) {
    // Flip horizontal
    case 2:
      scaleX2 = -1;
      break;
    // Rotate left 180°
    case 3:
      rotate2 = -180;
      break;
    // Flip vertical
    case 4:
      scaleY2 = -1;
      break;
    // Flip vertical and rotate right 90°
    case 5:
      rotate2 = 90;
      scaleY2 = -1;
      break;
    // Rotate right 90°
    case 6:
      rotate2 = 90;
      break;
    // Flip horizontal and rotate right 90°
    case 7:
      rotate2 = 90;
      scaleX2 = -1;
      break;
    // Rotate left 90°
    case 8:
      rotate2 = -90;
      break;
  }
  return {
    rotate: rotate2,
    scaleX: scaleX2,
    scaleY: scaleY2
  };
}
var render = {
  render: function render2() {
    this.initContainer();
    this.initCanvas();
    this.initCropBox();
    this.renderCanvas();
    if (this.cropped) {
      this.renderCropBox();
    }
  },
  initContainer: function initContainer() {
    var element = this.element, options = this.options, container = this.container, cropper = this.cropper;
    var minWidth = Number(options.minContainerWidth);
    var minHeight = Number(options.minContainerHeight);
    addClass(cropper, CLASS_HIDDEN);
    removeClass(element, CLASS_HIDDEN);
    var containerData = {
      width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
      height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
    };
    this.containerData = containerData;
    setStyle(cropper, {
      width: containerData.width,
      height: containerData.height
    });
    addClass(element, CLASS_HIDDEN);
    removeClass(cropper, CLASS_HIDDEN);
  },
  // Canvas (image wrapper)
  initCanvas: function initCanvas() {
    var containerData = this.containerData, imageData = this.imageData;
    var viewMode = this.options.viewMode;
    var rotated = Math.abs(imageData.rotate) % 180 === 90;
    var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
    var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
    var aspectRatio = naturalWidth / naturalHeight;
    var canvasWidth = containerData.width;
    var canvasHeight = containerData.height;
    if (containerData.height * aspectRatio > containerData.width) {
      if (viewMode === 3) {
        canvasWidth = containerData.height * aspectRatio;
      } else {
        canvasHeight = containerData.width / aspectRatio;
      }
    } else if (viewMode === 3) {
      canvasHeight = containerData.width / aspectRatio;
    } else {
      canvasWidth = containerData.height * aspectRatio;
    }
    var canvasData = {
      aspectRatio,
      naturalWidth,
      naturalHeight,
      width: canvasWidth,
      height: canvasHeight
    };
    this.canvasData = canvasData;
    this.limited = viewMode === 1 || viewMode === 2;
    this.limitCanvas(true, true);
    canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
    canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
    canvasData.left = (containerData.width - canvasData.width) / 2;
    canvasData.top = (containerData.height - canvasData.height) / 2;
    canvasData.oldLeft = canvasData.left;
    canvasData.oldTop = canvasData.top;
    this.initialCanvasData = assign({}, canvasData);
  },
  limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
    var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
    var viewMode = options.viewMode;
    var aspectRatio = canvasData.aspectRatio;
    var cropped = this.cropped && cropBoxData;
    if (sizeLimited) {
      var minCanvasWidth = Number(options.minCanvasWidth) || 0;
      var minCanvasHeight = Number(options.minCanvasHeight) || 0;
      if (viewMode > 1) {
        minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
        minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
        if (viewMode === 3) {
          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      } else if (viewMode > 0) {
        if (minCanvasWidth) {
          minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
        } else if (minCanvasHeight) {
          minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
        } else if (cropped) {
          minCanvasWidth = cropBoxData.width;
          minCanvasHeight = cropBoxData.height;
          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      }
      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio,
        width: minCanvasWidth,
        height: minCanvasHeight
      });
      minCanvasWidth = _getAdjustedSizes.width;
      minCanvasHeight = _getAdjustedSizes.height;
      canvasData.minWidth = minCanvasWidth;
      canvasData.minHeight = minCanvasHeight;
      canvasData.maxWidth = Infinity;
      canvasData.maxHeight = Infinity;
    }
    if (positionLimited) {
      if (viewMode > (cropped ? 0 : 1)) {
        var newCanvasLeft = containerData.width - canvasData.width;
        var newCanvasTop = containerData.height - canvasData.height;
        canvasData.minLeft = Math.min(0, newCanvasLeft);
        canvasData.minTop = Math.min(0, newCanvasTop);
        canvasData.maxLeft = Math.max(0, newCanvasLeft);
        canvasData.maxTop = Math.max(0, newCanvasTop);
        if (cropped && this.limited) {
          canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
          canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
          canvasData.maxLeft = cropBoxData.left;
          canvasData.maxTop = cropBoxData.top;
          if (viewMode === 2) {
            if (canvasData.width >= containerData.width) {
              canvasData.minLeft = Math.min(0, newCanvasLeft);
              canvasData.maxLeft = Math.max(0, newCanvasLeft);
            }
            if (canvasData.height >= containerData.height) {
              canvasData.minTop = Math.min(0, newCanvasTop);
              canvasData.maxTop = Math.max(0, newCanvasTop);
            }
          }
        }
      } else {
        canvasData.minLeft = -canvasData.width;
        canvasData.minTop = -canvasData.height;
        canvasData.maxLeft = containerData.width;
        canvasData.maxTop = containerData.height;
      }
    }
  },
  renderCanvas: function renderCanvas(changed, transformed) {
    var canvasData = this.canvasData, imageData = this.imageData;
    if (transformed) {
      var _getRotatedSizes = getRotatedSizes({
        width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
        height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
        degree: imageData.rotate || 0
      }), naturalWidth = _getRotatedSizes.width, naturalHeight = _getRotatedSizes.height;
      var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
      var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
      canvasData.left -= (width - canvasData.width) / 2;
      canvasData.top -= (height - canvasData.height) / 2;
      canvasData.width = width;
      canvasData.height = height;
      canvasData.aspectRatio = naturalWidth / naturalHeight;
      canvasData.naturalWidth = naturalWidth;
      canvasData.naturalHeight = naturalHeight;
      this.limitCanvas(true, false);
    }
    if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
      canvasData.left = canvasData.oldLeft;
    }
    if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
      canvasData.top = canvasData.oldTop;
    }
    canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
    canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
    this.limitCanvas(false, true);
    canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
    canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
    canvasData.oldLeft = canvasData.left;
    canvasData.oldTop = canvasData.top;
    setStyle(this.canvas, assign({
      width: canvasData.width,
      height: canvasData.height
    }, getTransforms({
      translateX: canvasData.left,
      translateY: canvasData.top
    })));
    this.renderImage(changed);
    if (this.cropped && this.limited) {
      this.limitCropBox(true, true);
    }
  },
  renderImage: function renderImage(changed) {
    var canvasData = this.canvasData, imageData = this.imageData;
    var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
    var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
    assign(imageData, {
      width,
      height,
      left: (canvasData.width - width) / 2,
      top: (canvasData.height - height) / 2
    });
    setStyle(this.image, assign({
      width: imageData.width,
      height: imageData.height
    }, getTransforms(assign({
      translateX: imageData.left,
      translateY: imageData.top
    }, imageData))));
    if (changed) {
      this.output();
    }
  },
  initCropBox: function initCropBox() {
    var options = this.options, canvasData = this.canvasData;
    var aspectRatio = options.aspectRatio || options.initialAspectRatio;
    var autoCropArea = Number(options.autoCropArea) || 0.8;
    var cropBoxData = {
      width: canvasData.width,
      height: canvasData.height
    };
    if (aspectRatio) {
      if (canvasData.height * aspectRatio > canvasData.width) {
        cropBoxData.height = cropBoxData.width / aspectRatio;
      } else {
        cropBoxData.width = cropBoxData.height * aspectRatio;
      }
    }
    this.cropBoxData = cropBoxData;
    this.limitCropBox(true, true);
    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
    cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
    cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
    cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
    cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;
    this.initialCropBoxData = assign({}, cropBoxData);
  },
  limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
    var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData, limited = this.limited;
    var aspectRatio = options.aspectRatio;
    if (sizeLimited) {
      var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
      var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
      var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
      var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height;
      minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
      minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
      if (aspectRatio) {
        if (minCropBoxWidth && minCropBoxHeight) {
          if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }
        } else if (minCropBoxWidth) {
          minCropBoxHeight = minCropBoxWidth / aspectRatio;
        } else if (minCropBoxHeight) {
          minCropBoxWidth = minCropBoxHeight * aspectRatio;
        }
        if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
          maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
        } else {
          maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
        }
      }
      cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
      cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
      cropBoxData.maxWidth = maxCropBoxWidth;
      cropBoxData.maxHeight = maxCropBoxHeight;
    }
    if (positionLimited) {
      if (limited) {
        cropBoxData.minLeft = Math.max(0, canvasData.left);
        cropBoxData.minTop = Math.max(0, canvasData.top);
        cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
        cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
      } else {
        cropBoxData.minLeft = 0;
        cropBoxData.minTop = 0;
        cropBoxData.maxLeft = containerData.width - cropBoxData.width;
        cropBoxData.maxTop = containerData.height - cropBoxData.height;
      }
    }
  },
  renderCropBox: function renderCropBox() {
    var options = this.options, containerData = this.containerData, cropBoxData = this.cropBoxData;
    if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
      cropBoxData.left = cropBoxData.oldLeft;
    }
    if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
      cropBoxData.top = cropBoxData.oldTop;
    }
    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
    this.limitCropBox(false, true);
    cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
    cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;
    if (options.movable && options.cropBoxMovable) {
      setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
    }
    setStyle(this.cropBox, assign({
      width: cropBoxData.width,
      height: cropBoxData.height
    }, getTransforms({
      translateX: cropBoxData.left,
      translateY: cropBoxData.top
    })));
    if (this.cropped && this.limited) {
      this.limitCanvas(true, true);
    }
    if (!this.disabled) {
      this.output();
    }
  },
  output: function output() {
    this.preview();
    dispatchEvent(this.element, EVENT_CROP, this.getData());
  }
};
var preview = {
  initPreview: function initPreview() {
    var element = this.element, crossOrigin = this.crossOrigin;
    var preview3 = this.options.preview;
    var url = crossOrigin ? this.crossOriginUrl : this.url;
    var alt = element.alt || "The image to preview";
    var image = document.createElement("img");
    if (crossOrigin) {
      image.crossOrigin = crossOrigin;
    }
    image.src = url;
    image.alt = alt;
    this.viewBox.appendChild(image);
    this.viewBoxImage = image;
    if (!preview3) {
      return;
    }
    var previews = preview3;
    if (typeof preview3 === "string") {
      previews = element.ownerDocument.querySelectorAll(preview3);
    } else if (preview3.querySelector) {
      previews = [preview3];
    }
    this.previews = previews;
    forEach(previews, function(el) {
      var img = document.createElement("img");
      setData(el, DATA_PREVIEW, {
        width: el.offsetWidth,
        height: el.offsetHeight,
        html: el.innerHTML
      });
      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }
      img.src = url;
      img.alt = alt;
      img.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"';
      el.innerHTML = "";
      el.appendChild(img);
    });
  },
  resetPreview: function resetPreview() {
    forEach(this.previews, function(element) {
      var data = getData(element, DATA_PREVIEW);
      setStyle(element, {
        width: data.width,
        height: data.height
      });
      element.innerHTML = data.html;
      removeData(element, DATA_PREVIEW);
    });
  },
  preview: function preview2() {
    var imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
    var cropBoxWidth = cropBoxData.width, cropBoxHeight = cropBoxData.height;
    var width = imageData.width, height = imageData.height;
    var left = cropBoxData.left - canvasData.left - imageData.left;
    var top = cropBoxData.top - canvasData.top - imageData.top;
    if (!this.cropped || this.disabled) {
      return;
    }
    setStyle(this.viewBoxImage, assign({
      width,
      height
    }, getTransforms(assign({
      translateX: -left,
      translateY: -top
    }, imageData))));
    forEach(this.previews, function(element) {
      var data = getData(element, DATA_PREVIEW);
      var originalWidth = data.width;
      var originalHeight = data.height;
      var newWidth = originalWidth;
      var newHeight = originalHeight;
      var ratio = 1;
      if (cropBoxWidth) {
        ratio = originalWidth / cropBoxWidth;
        newHeight = cropBoxHeight * ratio;
      }
      if (cropBoxHeight && newHeight > originalHeight) {
        ratio = originalHeight / cropBoxHeight;
        newWidth = cropBoxWidth * ratio;
        newHeight = originalHeight;
      }
      setStyle(element, {
        width: newWidth,
        height: newHeight
      });
      setStyle(element.getElementsByTagName("img")[0], assign({
        width: width * ratio,
        height: height * ratio
      }, getTransforms(assign({
        translateX: -left * ratio,
        translateY: -top * ratio
      }, imageData))));
    });
  }
};
var events = {
  bind: function bind() {
    var element = this.element, options = this.options, cropper = this.cropper;
    if (isFunction(options.cropstart)) {
      addListener(element, EVENT_CROP_START, options.cropstart);
    }
    if (isFunction(options.cropmove)) {
      addListener(element, EVENT_CROP_MOVE, options.cropmove);
    }
    if (isFunction(options.cropend)) {
      addListener(element, EVENT_CROP_END, options.cropend);
    }
    if (isFunction(options.crop)) {
      addListener(element, EVENT_CROP, options.crop);
    }
    if (isFunction(options.zoom)) {
      addListener(element, EVENT_ZOOM, options.zoom);
    }
    addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));
    if (options.zoomable && options.zoomOnWheel) {
      addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
        passive: false,
        capture: true
      });
    }
    if (options.toggleDragModeOnDblclick) {
      addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
    }
    addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
    addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));
    if (options.responsive) {
      addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
    }
  },
  unbind: function unbind() {
    var element = this.element, options = this.options, cropper = this.cropper;
    if (isFunction(options.cropstart)) {
      removeListener(element, EVENT_CROP_START, options.cropstart);
    }
    if (isFunction(options.cropmove)) {
      removeListener(element, EVENT_CROP_MOVE, options.cropmove);
    }
    if (isFunction(options.cropend)) {
      removeListener(element, EVENT_CROP_END, options.cropend);
    }
    if (isFunction(options.crop)) {
      removeListener(element, EVENT_CROP, options.crop);
    }
    if (isFunction(options.zoom)) {
      removeListener(element, EVENT_ZOOM, options.zoom);
    }
    removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);
    if (options.zoomable && options.zoomOnWheel) {
      removeListener(cropper, EVENT_WHEEL, this.onWheel, {
        passive: false,
        capture: true
      });
    }
    if (options.toggleDragModeOnDblclick) {
      removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
    }
    removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
    removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);
    if (options.responsive) {
      removeListener(window, EVENT_RESIZE, this.onResize);
    }
  }
};
var handlers = {
  resize: function resize() {
    if (this.disabled) {
      return;
    }
    var options = this.options, container = this.container, containerData = this.containerData;
    var ratioX = container.offsetWidth / containerData.width;
    var ratioY = container.offsetHeight / containerData.height;
    var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY;
    if (ratio !== 1) {
      var canvasData;
      var cropBoxData;
      if (options.restore) {
        canvasData = this.getCanvasData();
        cropBoxData = this.getCropBoxData();
      }
      this.render();
      if (options.restore) {
        this.setCanvasData(forEach(canvasData, function(n, i) {
          canvasData[i] = n * ratio;
        }));
        this.setCropBoxData(forEach(cropBoxData, function(n, i) {
          cropBoxData[i] = n * ratio;
        }));
      }
    }
  },
  dblclick: function dblclick() {
    if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
      return;
    }
    this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
  },
  wheel: function wheel(event) {
    var _this = this;
    var ratio = Number(this.options.wheelZoomRatio) || 0.1;
    var delta = 1;
    if (this.disabled) {
      return;
    }
    event.preventDefault();
    if (this.wheeling) {
      return;
    }
    this.wheeling = true;
    setTimeout(function() {
      _this.wheeling = false;
    }, 50);
    if (event.deltaY) {
      delta = event.deltaY > 0 ? 1 : -1;
    } else if (event.wheelDelta) {
      delta = -event.wheelDelta / 120;
    } else if (event.detail) {
      delta = event.detail > 0 ? 1 : -1;
    }
    this.zoom(-delta * ratio, event);
  },
  cropStart: function cropStart(event) {
    var buttons = event.buttons, button = event.button;
    if (this.disabled || (event.type === "mousedown" || event.type === "pointerdown" && event.pointerType === "mouse") && // No primary button (Usually the left button)
    (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey)) {
      return;
    }
    var options = this.options, pointers = this.pointers;
    var action;
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        pointers[touch.identifier] = getPointer(touch);
      });
    } else {
      pointers[event.pointerId || 0] = getPointer(event);
    }
    if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
      action = ACTION_ZOOM;
    } else {
      action = getData(event.target, DATA_ACTION);
    }
    if (!REGEXP_ACTIONS.test(action)) {
      return;
    }
    if (dispatchEvent(this.element, EVENT_CROP_START, {
      originalEvent: event,
      action
    }) === false) {
      return;
    }
    event.preventDefault();
    this.action = action;
    this.cropping = false;
    if (action === ACTION_CROP) {
      this.cropping = true;
      addClass(this.dragBox, CLASS_MODAL);
    }
  },
  cropMove: function cropMove(event) {
    var action = this.action;
    if (this.disabled || !action) {
      return;
    }
    var pointers = this.pointers;
    event.preventDefault();
    if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
      originalEvent: event,
      action
    }) === false) {
      return;
    }
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        assign(pointers[touch.identifier] || {}, getPointer(touch, true));
      });
    } else {
      assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
    }
    this.change(event);
  },
  cropEnd: function cropEnd(event) {
    if (this.disabled) {
      return;
    }
    var action = this.action, pointers = this.pointers;
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        delete pointers[touch.identifier];
      });
    } else {
      delete pointers[event.pointerId || 0];
    }
    if (!action) {
      return;
    }
    event.preventDefault();
    if (!Object.keys(pointers).length) {
      this.action = "";
    }
    if (this.cropping) {
      this.cropping = false;
      toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
    }
    dispatchEvent(this.element, EVENT_CROP_END, {
      originalEvent: event,
      action
    });
  }
};
var change = {
  change: function change2(event) {
    var options = this.options, canvasData = this.canvasData, containerData = this.containerData, cropBoxData = this.cropBoxData, pointers = this.pointers;
    var action = this.action;
    var aspectRatio = options.aspectRatio;
    var left = cropBoxData.left, top = cropBoxData.top, width = cropBoxData.width, height = cropBoxData.height;
    var right = left + width;
    var bottom = top + height;
    var minLeft = 0;
    var minTop = 0;
    var maxWidth = containerData.width;
    var maxHeight = containerData.height;
    var renderable = true;
    var offset;
    if (!aspectRatio && event.shiftKey) {
      aspectRatio = width && height ? width / height : 1;
    }
    if (this.limited) {
      minLeft = cropBoxData.minLeft;
      minTop = cropBoxData.minTop;
      maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
      maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
    }
    var pointer = pointers[Object.keys(pointers)[0]];
    var range = {
      x: pointer.endX - pointer.startX,
      y: pointer.endY - pointer.startY
    };
    var check = function check2(side) {
      switch (side) {
        case ACTION_EAST:
          if (right + range.x > maxWidth) {
            range.x = maxWidth - right;
          }
          break;
        case ACTION_WEST:
          if (left + range.x < minLeft) {
            range.x = minLeft - left;
          }
          break;
        case ACTION_NORTH:
          if (top + range.y < minTop) {
            range.y = minTop - top;
          }
          break;
        case ACTION_SOUTH:
          if (bottom + range.y > maxHeight) {
            range.y = maxHeight - bottom;
          }
          break;
      }
    };
    switch (action) {
      // Move crop box
      case ACTION_ALL:
        left += range.x;
        top += range.y;
        break;
      // Resize crop box
      case ACTION_EAST:
        if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }
        check(ACTION_EAST);
        width += range.x;
        if (width < 0) {
          action = ACTION_WEST;
          width = -width;
          left -= width;
        }
        if (aspectRatio) {
          height = width / aspectRatio;
          top += (cropBoxData.height - height) / 2;
        }
        break;
      case ACTION_NORTH:
        if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }
        check(ACTION_NORTH);
        height -= range.y;
        top += range.y;
        if (height < 0) {
          action = ACTION_SOUTH;
          height = -height;
          top -= height;
        }
        if (aspectRatio) {
          width = height * aspectRatio;
          left += (cropBoxData.width - width) / 2;
        }
        break;
      case ACTION_WEST:
        if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }
        check(ACTION_WEST);
        width -= range.x;
        left += range.x;
        if (width < 0) {
          action = ACTION_EAST;
          width = -width;
          left -= width;
        }
        if (aspectRatio) {
          height = width / aspectRatio;
          top += (cropBoxData.height - height) / 2;
        }
        break;
      case ACTION_SOUTH:
        if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }
        check(ACTION_SOUTH);
        height += range.y;
        if (height < 0) {
          action = ACTION_NORTH;
          height = -height;
          top -= height;
        }
        if (aspectRatio) {
          width = height * aspectRatio;
          left += (cropBoxData.width - width) / 2;
        }
        break;
      case ACTION_NORTH_EAST:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
            renderable = false;
            break;
          }
          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
        } else {
          check(ACTION_NORTH);
          check(ACTION_EAST);
          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width += range.x;
          }
          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }
        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_WEST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_NORTH_WEST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_SOUTH_EAST;
          height = -height;
          top -= height;
        }
        break;
      case ACTION_NORTH_WEST:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
            renderable = false;
            break;
          }
          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
          left += cropBoxData.width - width;
        } else {
          check(ACTION_NORTH);
          check(ACTION_WEST);
          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }
          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }
        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_EAST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_NORTH_EAST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_SOUTH_WEST;
          height = -height;
          top -= height;
        }
        break;
      case ACTION_SOUTH_WEST:
        if (aspectRatio) {
          if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
            renderable = false;
            break;
          }
          check(ACTION_WEST);
          width -= range.x;
          left += range.x;
          height = width / aspectRatio;
        } else {
          check(ACTION_SOUTH);
          check(ACTION_WEST);
          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }
          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }
        if (width < 0 && height < 0) {
          action = ACTION_NORTH_EAST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_SOUTH_EAST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_NORTH_WEST;
          height = -height;
          top -= height;
        }
        break;
      case ACTION_SOUTH_EAST:
        if (aspectRatio) {
          if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
            renderable = false;
            break;
          }
          check(ACTION_EAST);
          width += range.x;
          height = width / aspectRatio;
        } else {
          check(ACTION_SOUTH);
          check(ACTION_EAST);
          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width += range.x;
          }
          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }
        if (width < 0 && height < 0) {
          action = ACTION_NORTH_WEST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_SOUTH_WEST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_NORTH_EAST;
          height = -height;
          top -= height;
        }
        break;
      // Move canvas
      case ACTION_MOVE:
        this.move(range.x, range.y);
        renderable = false;
        break;
      // Zoom canvas
      case ACTION_ZOOM:
        this.zoom(getMaxZoomRatio(pointers), event);
        renderable = false;
        break;
      // Create crop box
      case ACTION_CROP:
        if (!range.x || !range.y) {
          renderable = false;
          break;
        }
        offset = getOffset(this.cropper);
        left = pointer.startX - offset.left;
        top = pointer.startY - offset.top;
        width = cropBoxData.minWidth;
        height = cropBoxData.minHeight;
        if (range.x > 0) {
          action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
        } else if (range.x < 0) {
          left -= width;
          action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
        }
        if (range.y < 0) {
          top -= height;
        }
        if (!this.cropped) {
          removeClass(this.cropBox, CLASS_HIDDEN);
          this.cropped = true;
          if (this.limited) {
            this.limitCropBox(true, true);
          }
        }
        break;
    }
    if (renderable) {
      cropBoxData.width = width;
      cropBoxData.height = height;
      cropBoxData.left = left;
      cropBoxData.top = top;
      this.action = action;
      this.renderCropBox();
    }
    forEach(pointers, function(p) {
      p.startX = p.endX;
      p.startY = p.endY;
    });
  }
};
var methods = {
  // Show the crop box manually
  crop: function crop() {
    if (this.ready && !this.cropped && !this.disabled) {
      this.cropped = true;
      this.limitCropBox(true, true);
      if (this.options.modal) {
        addClass(this.dragBox, CLASS_MODAL);
      }
      removeClass(this.cropBox, CLASS_HIDDEN);
      this.setCropBoxData(this.initialCropBoxData);
    }
    return this;
  },
  // Reset the image and crop box to their initial states
  reset: function reset() {
    if (this.ready && !this.disabled) {
      this.imageData = assign({}, this.initialImageData);
      this.canvasData = assign({}, this.initialCanvasData);
      this.cropBoxData = assign({}, this.initialCropBoxData);
      this.renderCanvas();
      if (this.cropped) {
        this.renderCropBox();
      }
    }
    return this;
  },
  // Clear the crop box
  clear: function clear() {
    if (this.cropped && !this.disabled) {
      assign(this.cropBoxData, {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      });
      this.cropped = false;
      this.renderCropBox();
      this.limitCanvas(true, true);
      this.renderCanvas();
      removeClass(this.dragBox, CLASS_MODAL);
      addClass(this.cropBox, CLASS_HIDDEN);
    }
    return this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function replace(url) {
    var hasSameSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!this.disabled && url) {
      if (this.isImg) {
        this.element.src = url;
      }
      if (hasSameSize) {
        this.url = url;
        this.image.src = url;
        if (this.ready) {
          this.viewBoxImage.src = url;
          forEach(this.previews, function(element) {
            element.getElementsByTagName("img")[0].src = url;
          });
        }
      } else {
        if (this.isImg) {
          this.replaced = true;
        }
        this.options.data = null;
        this.uncreate();
        this.load(url);
      }
    }
    return this;
  },
  // Enable (unfreeze) the cropper
  enable: function enable() {
    if (this.ready && this.disabled) {
      this.disabled = false;
      removeClass(this.cropper, CLASS_DISABLED);
    }
    return this;
  },
  // Disable (freeze) the cropper
  disable: function disable() {
    if (this.ready && !this.disabled) {
      this.disabled = true;
      addClass(this.cropper, CLASS_DISABLED);
    }
    return this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function destroy() {
    var element = this.element;
    if (!element[NAMESPACE]) {
      return this;
    }
    element[NAMESPACE] = void 0;
    if (this.isImg && this.replaced) {
      element.src = this.originalUrl;
    }
    this.uncreate();
    return this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function move(offsetX) {
    var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : offsetX;
    var _this$canvasData = this.canvasData, left = _this$canvasData.left, top = _this$canvasData.top;
    return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function moveTo(x) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
    var canvasData = this.canvasData;
    var changed = false;
    x = Number(x);
    y = Number(y);
    if (this.ready && !this.disabled && this.options.movable) {
      if (isNumber(x)) {
        canvasData.left = x;
        changed = true;
      }
      if (isNumber(y)) {
        canvasData.top = y;
        changed = true;
      }
      if (changed) {
        this.renderCanvas(true);
      }
    }
    return this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function zoom(ratio, _originalEvent) {
    var canvasData = this.canvasData;
    ratio = Number(ratio);
    if (ratio < 0) {
      ratio = 1 / (1 - ratio);
    } else {
      ratio = 1 + ratio;
    }
    return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
    var options = this.options, canvasData = this.canvasData;
    var width = canvasData.width, height = canvasData.height, naturalWidth = canvasData.naturalWidth, naturalHeight = canvasData.naturalHeight;
    ratio = Number(ratio);
    if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
      var newWidth = naturalWidth * ratio;
      var newHeight = naturalHeight * ratio;
      if (dispatchEvent(this.element, EVENT_ZOOM, {
        ratio,
        oldRatio: width / naturalWidth,
        originalEvent: _originalEvent
      }) === false) {
        return this;
      }
      if (_originalEvent) {
        var pointers = this.pointers;
        var offset = getOffset(this.cropper);
        var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
          pageX: _originalEvent.pageX,
          pageY: _originalEvent.pageY
        };
        canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
        canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
      } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
        canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
        canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
      } else {
        canvasData.left -= (newWidth - width) / 2;
        canvasData.top -= (newHeight - height) / 2;
      }
      canvasData.width = newWidth;
      canvasData.height = newHeight;
      this.renderCanvas(true);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function rotate(degree) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function rotateTo(degree) {
    degree = Number(degree);
    if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
      this.imageData.rotate = degree % 360;
      this.renderCanvas(true, true);
    }
    return this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function scaleX(_scaleX) {
    var scaleY2 = this.imageData.scaleY;
    return this.scale(_scaleX, isNumber(scaleY2) ? scaleY2 : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function scaleY(_scaleY) {
    var scaleX2 = this.imageData.scaleX;
    return this.scale(isNumber(scaleX2) ? scaleX2 : 1, _scaleY);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function scale(scaleX2) {
    var scaleY2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : scaleX2;
    var imageData = this.imageData;
    var transformed = false;
    scaleX2 = Number(scaleX2);
    scaleY2 = Number(scaleY2);
    if (this.ready && !this.disabled && this.options.scalable) {
      if (isNumber(scaleX2)) {
        imageData.scaleX = scaleX2;
        transformed = true;
      }
      if (isNumber(scaleY2)) {
        imageData.scaleY = scaleY2;
        transformed = true;
      }
      if (transformed) {
        this.renderCanvas(true, true);
      }
    }
    return this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function getData2() {
    var rounded = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var options = this.options, imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
    var data;
    if (this.ready && this.cropped) {
      data = {
        x: cropBoxData.left - canvasData.left,
        y: cropBoxData.top - canvasData.top,
        width: cropBoxData.width,
        height: cropBoxData.height
      };
      var ratio = imageData.width / imageData.naturalWidth;
      forEach(data, function(n, i) {
        data[i] = n / ratio;
      });
      if (rounded) {
        var bottom = Math.round(data.y + data.height);
        var right = Math.round(data.x + data.width);
        data.x = Math.round(data.x);
        data.y = Math.round(data.y);
        data.width = right - data.x;
        data.height = bottom - data.y;
      }
    } else {
      data = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    if (options.rotatable) {
      data.rotate = imageData.rotate || 0;
    }
    if (options.scalable) {
      data.scaleX = imageData.scaleX || 1;
      data.scaleY = imageData.scaleY || 1;
    }
    return data;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function setData2(data) {
    var options = this.options, imageData = this.imageData, canvasData = this.canvasData;
    var cropBoxData = {};
    if (this.ready && !this.disabled && isPlainObject(data)) {
      var transformed = false;
      if (options.rotatable) {
        if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
          imageData.rotate = data.rotate;
          transformed = true;
        }
      }
      if (options.scalable) {
        if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
          imageData.scaleX = data.scaleX;
          transformed = true;
        }
        if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
          imageData.scaleY = data.scaleY;
          transformed = true;
        }
      }
      if (transformed) {
        this.renderCanvas(true, true);
      }
      var ratio = imageData.width / imageData.naturalWidth;
      if (isNumber(data.x)) {
        cropBoxData.left = data.x * ratio + canvasData.left;
      }
      if (isNumber(data.y)) {
        cropBoxData.top = data.y * ratio + canvasData.top;
      }
      if (isNumber(data.width)) {
        cropBoxData.width = data.width * ratio;
      }
      if (isNumber(data.height)) {
        cropBoxData.height = data.height * ratio;
      }
      this.setCropBoxData(cropBoxData);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function getContainerData() {
    return this.ready ? assign({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function getImageData() {
    return this.sized ? assign({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function getCanvasData() {
    var canvasData = this.canvasData;
    var data = {};
    if (this.ready) {
      forEach(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(n) {
        data[n] = canvasData[n];
      });
    }
    return data;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function setCanvasData(data) {
    var canvasData = this.canvasData;
    var aspectRatio = canvasData.aspectRatio;
    if (this.ready && !this.disabled && isPlainObject(data)) {
      if (isNumber(data.left)) {
        canvasData.left = data.left;
      }
      if (isNumber(data.top)) {
        canvasData.top = data.top;
      }
      if (isNumber(data.width)) {
        canvasData.width = data.width;
        canvasData.height = data.width / aspectRatio;
      } else if (isNumber(data.height)) {
        canvasData.height = data.height;
        canvasData.width = data.height * aspectRatio;
      }
      this.renderCanvas(true);
    }
    return this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function getCropBoxData() {
    var cropBoxData = this.cropBoxData;
    var data;
    if (this.ready && this.cropped) {
      data = {
        left: cropBoxData.left,
        top: cropBoxData.top,
        width: cropBoxData.width,
        height: cropBoxData.height
      };
    }
    return data || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function setCropBoxData(data) {
    var cropBoxData = this.cropBoxData;
    var aspectRatio = this.options.aspectRatio;
    var widthChanged;
    var heightChanged;
    if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
      if (isNumber(data.left)) {
        cropBoxData.left = data.left;
      }
      if (isNumber(data.top)) {
        cropBoxData.top = data.top;
      }
      if (isNumber(data.width) && data.width !== cropBoxData.width) {
        widthChanged = true;
        cropBoxData.width = data.width;
      }
      if (isNumber(data.height) && data.height !== cropBoxData.height) {
        heightChanged = true;
        cropBoxData.height = data.height;
      }
      if (aspectRatio) {
        if (widthChanged) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else if (heightChanged) {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }
      this.renderCropBox();
    }
    return this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function getCroppedCanvas() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement) {
      return null;
    }
    var canvasData = this.canvasData;
    var source = getSourceCanvas(this.image, this.imageData, canvasData, options);
    if (!this.cropped) {
      return source;
    }
    var _this$getData = this.getData(options.rounded), initialX = _this$getData.x, initialY = _this$getData.y, initialWidth = _this$getData.width, initialHeight = _this$getData.height;
    var ratio = source.width / Math.floor(canvasData.naturalWidth);
    if (ratio !== 1) {
      initialX *= ratio;
      initialY *= ratio;
      initialWidth *= ratio;
      initialHeight *= ratio;
    }
    var aspectRatio = initialWidth / initialHeight;
    var maxSizes = getAdjustedSizes({
      aspectRatio,
      width: options.maxWidth || Infinity,
      height: options.maxHeight || Infinity
    });
    var minSizes = getAdjustedSizes({
      aspectRatio,
      width: options.minWidth || 0,
      height: options.minHeight || 0
    }, "cover");
    var _getAdjustedSizes = getAdjustedSizes({
      aspectRatio,
      width: options.width || (ratio !== 1 ? source.width : initialWidth),
      height: options.height || (ratio !== 1 ? source.height : initialHeight)
    }), width = _getAdjustedSizes.width, height = _getAdjustedSizes.height;
    width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
    height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = options.fillColor || "transparent";
    context.fillRect(0, 0, width, height);
    var _options$imageSmoothi = options.imageSmoothingEnabled, imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi, imageSmoothingQuality = options.imageSmoothingQuality;
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    if (imageSmoothingQuality) {
      context.imageSmoothingQuality = imageSmoothingQuality;
    }
    var sourceWidth = source.width;
    var sourceHeight = source.height;
    var srcX = initialX;
    var srcY = initialY;
    var srcWidth;
    var srcHeight;
    var dstX;
    var dstY;
    var dstWidth;
    var dstHeight;
    if (srcX <= -initialWidth || srcX > sourceWidth) {
      srcX = 0;
      srcWidth = 0;
      dstX = 0;
      dstWidth = 0;
    } else if (srcX <= 0) {
      dstX = -srcX;
      srcX = 0;
      srcWidth = Math.min(sourceWidth, initialWidth + srcX);
      dstWidth = srcWidth;
    } else if (srcX <= sourceWidth) {
      dstX = 0;
      srcWidth = Math.min(initialWidth, sourceWidth - srcX);
      dstWidth = srcWidth;
    }
    if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
      srcY = 0;
      srcHeight = 0;
      dstY = 0;
      dstHeight = 0;
    } else if (srcY <= 0) {
      dstY = -srcY;
      srcY = 0;
      srcHeight = Math.min(sourceHeight, initialHeight + srcY);
      dstHeight = srcHeight;
    } else if (srcY <= sourceHeight) {
      dstY = 0;
      srcHeight = Math.min(initialHeight, sourceHeight - srcY);
      dstHeight = srcHeight;
    }
    var params = [srcX, srcY, srcWidth, srcHeight];
    if (dstWidth > 0 && dstHeight > 0) {
      var scale2 = width / initialWidth;
      params.push(dstX * scale2, dstY * scale2, dstWidth * scale2, dstHeight * scale2);
    }
    context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function(param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    return canvas;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function setAspectRatio(aspectRatio) {
    var options = this.options;
    if (!this.disabled && !isUndefined(aspectRatio)) {
      options.aspectRatio = Math.max(0, aspectRatio) || NaN;
      if (this.ready) {
        this.initCropBox();
        if (this.cropped) {
          this.renderCropBox();
        }
      }
    }
    return this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function setDragMode(mode) {
    var options = this.options, dragBox = this.dragBox, face = this.face;
    if (this.ready && !this.disabled) {
      var croppable = mode === DRAG_MODE_CROP;
      var movable = options.movable && mode === DRAG_MODE_MOVE;
      mode = croppable || movable ? mode : DRAG_MODE_NONE;
      options.dragMode = mode;
      setData(dragBox, DATA_ACTION, mode);
      toggleClass(dragBox, CLASS_CROP, croppable);
      toggleClass(dragBox, CLASS_MOVE, movable);
      if (!options.cropBoxMovable) {
        setData(face, DATA_ACTION, mode);
        toggleClass(face, CLASS_CROP, croppable);
        toggleClass(face, CLASS_MOVE, movable);
      }
    }
    return this;
  }
};
var AnotherCropper = WINDOW.Cropper;
var Cropper = /* @__PURE__ */ (function() {
  function Cropper2(element) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Cropper2);
    if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    }
    this.element = element;
    this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
    this.cropped = false;
    this.disabled = false;
    this.pointers = {};
    this.ready = false;
    this.reloading = false;
    this.replaced = false;
    this.sized = false;
    this.sizing = false;
    this.init();
  }
  return _createClass(Cropper2, [{
    key: "init",
    value: function init() {
      var element = this.element;
      var tagName = element.tagName.toLowerCase();
      var url;
      if (element[NAMESPACE]) {
        return;
      }
      element[NAMESPACE] = this;
      if (tagName === "img") {
        this.isImg = true;
        url = element.getAttribute("src") || "";
        this.originalUrl = url;
        if (!url) {
          return;
        }
        url = element.src;
      } else if (tagName === "canvas" && window.HTMLCanvasElement) {
        url = element.toDataURL();
      }
      this.load(url);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this = this;
      if (!url) {
        return;
      }
      this.url = url;
      this.imageData = {};
      var element = this.element, options = this.options;
      if (!options.rotatable && !options.scalable) {
        options.checkOrientation = false;
      }
      if (!options.checkOrientation || !window.ArrayBuffer) {
        this.clone();
        return;
      }
      if (REGEXP_DATA_URL.test(url)) {
        if (REGEXP_DATA_URL_JPEG.test(url)) {
          this.read(dataURLToArrayBuffer(url));
        } else {
          this.clone();
        }
        return;
      }
      var xhr = new XMLHttpRequest();
      var clone = this.clone.bind(this);
      this.reloading = true;
      this.xhr = xhr;
      xhr.onabort = clone;
      xhr.onerror = clone;
      xhr.ontimeout = clone;
      xhr.onprogress = function() {
        if (xhr.getResponseHeader("content-type") !== MIME_TYPE_JPEG) {
          xhr.abort();
        }
      };
      xhr.onload = function() {
        _this.read(xhr.response);
      };
      xhr.onloadend = function() {
        _this.reloading = false;
        _this.xhr = null;
      };
      if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
        url = addTimestamp(url);
      }
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.withCredentials = element.crossOrigin === "use-credentials";
      xhr.send();
    }
  }, {
    key: "read",
    value: function read(arrayBuffer) {
      var options = this.options, imageData = this.imageData;
      var orientation = resetAndGetOrientation(arrayBuffer);
      var rotate2 = 0;
      var scaleX2 = 1;
      var scaleY2 = 1;
      if (orientation > 1) {
        this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);
        var _parseOrientation = parseOrientation(orientation);
        rotate2 = _parseOrientation.rotate;
        scaleX2 = _parseOrientation.scaleX;
        scaleY2 = _parseOrientation.scaleY;
      }
      if (options.rotatable) {
        imageData.rotate = rotate2;
      }
      if (options.scalable) {
        imageData.scaleX = scaleX2;
        imageData.scaleY = scaleY2;
      }
      this.clone();
    }
  }, {
    key: "clone",
    value: function clone() {
      var element = this.element, url = this.url;
      var crossOrigin = element.crossOrigin;
      var crossOriginUrl = url;
      if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
        if (!crossOrigin) {
          crossOrigin = "anonymous";
        }
        crossOriginUrl = addTimestamp(url);
      }
      this.crossOrigin = crossOrigin;
      this.crossOriginUrl = crossOriginUrl;
      var image = document.createElement("img");
      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }
      image.src = crossOriginUrl || url;
      image.alt = element.alt || "The image to crop";
      this.image = image;
      image.onload = this.start.bind(this);
      image.onerror = this.stop.bind(this);
      addClass(image, CLASS_HIDE);
      element.parentNode.insertBefore(image, element.nextSibling);
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;
      var image = this.image;
      image.onload = null;
      image.onerror = null;
      this.sizing = true;
      var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);
      var done = function done2(naturalWidth, naturalHeight) {
        assign(_this2.imageData, {
          naturalWidth,
          naturalHeight,
          aspectRatio: naturalWidth / naturalHeight
        });
        _this2.initialImageData = assign({}, _this2.imageData);
        _this2.sizing = false;
        _this2.sized = true;
        _this2.build();
      };
      if (image.naturalWidth && !isIOSWebKit) {
        done(image.naturalWidth, image.naturalHeight);
        return;
      }
      var sizingImage = document.createElement("img");
      var body = document.body || document.documentElement;
      this.sizingImage = sizingImage;
      sizingImage.onload = function() {
        done(sizingImage.width, sizingImage.height);
        if (!isIOSWebKit) {
          body.removeChild(sizingImage);
        }
      };
      sizingImage.src = image.src;
      if (!isIOSWebKit) {
        sizingImage.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
        body.appendChild(sizingImage);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      var image = this.image;
      image.onload = null;
      image.onerror = null;
      image.parentNode.removeChild(image);
      this.image = null;
    }
  }, {
    key: "build",
    value: function build() {
      if (!this.sized || this.ready) {
        return;
      }
      var element = this.element, options = this.options, image = this.image;
      var container = element.parentNode;
      var template = document.createElement("div");
      template.innerHTML = TEMPLATE;
      var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
      var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
      var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
      var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
      var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
      this.container = container;
      this.cropper = cropper;
      this.canvas = canvas;
      this.dragBox = dragBox;
      this.cropBox = cropBox;
      this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
      this.face = face;
      canvas.appendChild(image);
      addClass(element, CLASS_HIDDEN);
      container.insertBefore(cropper, element.nextSibling);
      removeClass(image, CLASS_HIDE);
      this.initPreview();
      this.bind();
      options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
      options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
      options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
      addClass(cropBox, CLASS_HIDDEN);
      if (!options.guides) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
      }
      if (!options.center) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
      }
      if (options.background) {
        addClass(cropper, "".concat(NAMESPACE, "-bg"));
      }
      if (!options.highlight) {
        addClass(face, CLASS_INVISIBLE);
      }
      if (options.cropBoxMovable) {
        addClass(face, CLASS_MOVE);
        setData(face, DATA_ACTION, ACTION_ALL);
      }
      if (!options.cropBoxResizable) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
      }
      this.render();
      this.ready = true;
      this.setDragMode(options.dragMode);
      if (options.autoCrop) {
        this.crop();
      }
      this.setData(options.data);
      if (isFunction(options.ready)) {
        addListener(element, EVENT_READY, options.ready, {
          once: true
        });
      }
      dispatchEvent(element, EVENT_READY);
    }
  }, {
    key: "unbuild",
    value: function unbuild() {
      if (!this.ready) {
        return;
      }
      this.ready = false;
      this.unbind();
      this.resetPreview();
      var parentNode = this.cropper.parentNode;
      if (parentNode) {
        parentNode.removeChild(this.cropper);
      }
      removeClass(this.element, CLASS_HIDDEN);
    }
  }, {
    key: "uncreate",
    value: function uncreate() {
      if (this.ready) {
        this.unbuild();
        this.ready = false;
        this.cropped = false;
      } else if (this.sizing) {
        this.sizingImage.onload = null;
        this.sizing = false;
        this.sized = false;
      } else if (this.reloading) {
        this.xhr.onabort = null;
        this.xhr.abort();
      } else if (this.image) {
        this.stop();
      }
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */
  }], [{
    key: "noConflict",
    value: function noConflict() {
      window.Cropper = AnotherCropper;
      return Cropper2;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function setDefaults(options) {
      assign(DEFAULTS, isPlainObject(options) && options);
    }
  }]);
})();
assign(Cropper.prototype, render, preview, events, handlers, change, methods);

// resources/js/index.js
window.ImageLibraryCropper = Cropper;
/*! Bundled license information:

cropperjs/dist/cropper.esm.js:
  (*!
   * Cropper.js v1.6.2
   * https://fengyuanchen.github.io/cropperjs
   *
   * Copyright 2015-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2024-04-21T07:43:05.335Z
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL2Nyb3BwZXJqcy9kaXN0L2Nyb3BwZXIuZXNtLmpzIiwgIi4uL2pzL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiFcbiAqIENyb3BwZXIuanMgdjEuNi4yXG4gKiBodHRwczovL2Zlbmd5dWFuY2hlbi5naXRodWIuaW8vY3JvcHBlcmpzXG4gKlxuICogQ29weXJpZ2h0IDIwMTUtcHJlc2VudCBDaGVuIEZlbmd5dWFuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDI0LTA0LTIxVDA3OjQzOjA1LjMzNVpcbiAqL1xuXG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHtcbiAgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7XG4gICAgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlO1xuICAgIH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pO1xuICB9XG4gIHJldHVybiB0O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIoZSkge1xuICBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykge1xuICAgIHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTtcbiAgICByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlO1xufVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHtcbiAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIHQgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiBpKSByZXR1cm4gaTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbn1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBcInN5bWJvbFwiID09IHR5cGVvZiBpID8gaSA6IGkgKyBcIlwiO1xufVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gIHJldHVybiBhcnIyO1xufVxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxudmFyIElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbnZhciBXSU5ET1cgPSBJU19CUk9XU0VSID8gd2luZG93IDoge307XG52YXIgSVNfVE9VQ0hfREVWSUNFID0gSVNfQlJPV1NFUiAmJiBXSU5ET1cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gJ29udG91Y2hzdGFydCcgaW4gV0lORE9XLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IGZhbHNlO1xudmFyIEhBU19QT0lOVEVSX0VWRU5UID0gSVNfQlJPV1NFUiA/ICdQb2ludGVyRXZlbnQnIGluIFdJTkRPVyA6IGZhbHNlO1xudmFyIE5BTUVTUEFDRSA9ICdjcm9wcGVyJztcblxuLy8gQWN0aW9uc1xudmFyIEFDVElPTl9BTEwgPSAnYWxsJztcbnZhciBBQ1RJT05fQ1JPUCA9ICdjcm9wJztcbnZhciBBQ1RJT05fTU9WRSA9ICdtb3ZlJztcbnZhciBBQ1RJT05fWk9PTSA9ICd6b29tJztcbnZhciBBQ1RJT05fRUFTVCA9ICdlJztcbnZhciBBQ1RJT05fV0VTVCA9ICd3JztcbnZhciBBQ1RJT05fU09VVEggPSAncyc7XG52YXIgQUNUSU9OX05PUlRIID0gJ24nO1xudmFyIEFDVElPTl9OT1JUSF9FQVNUID0gJ25lJztcbnZhciBBQ1RJT05fTk9SVEhfV0VTVCA9ICdudyc7XG52YXIgQUNUSU9OX1NPVVRIX0VBU1QgPSAnc2UnO1xudmFyIEFDVElPTl9TT1VUSF9XRVNUID0gJ3N3JztcblxuLy8gQ2xhc3Nlc1xudmFyIENMQVNTX0NST1AgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWNyb3BcIik7XG52YXIgQ0xBU1NfRElTQUJMRUQgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWRpc2FibGVkXCIpO1xudmFyIENMQVNTX0hJRERFTiA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItaGlkZGVuXCIpO1xudmFyIENMQVNTX0hJREUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWhpZGVcIik7XG52YXIgQ0xBU1NfSU5WSVNJQkxFID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1pbnZpc2libGVcIik7XG52YXIgQ0xBU1NfTU9EQUwgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLW1vZGFsXCIpO1xudmFyIENMQVNTX01PVkUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLW1vdmVcIik7XG5cbi8vIERhdGEga2V5c1xudmFyIERBVEFfQUNUSU9OID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIkFjdGlvblwiKTtcbnZhciBEQVRBX1BSRVZJRVcgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiUHJldmlld1wiKTtcblxuLy8gRHJhZyBtb2Rlc1xudmFyIERSQUdfTU9ERV9DUk9QID0gJ2Nyb3AnO1xudmFyIERSQUdfTU9ERV9NT1ZFID0gJ21vdmUnO1xudmFyIERSQUdfTU9ERV9OT05FID0gJ25vbmUnO1xuXG4vLyBFdmVudHNcbnZhciBFVkVOVF9DUk9QID0gJ2Nyb3AnO1xudmFyIEVWRU5UX0NST1BfRU5EID0gJ2Nyb3BlbmQnO1xudmFyIEVWRU5UX0NST1BfTU9WRSA9ICdjcm9wbW92ZSc7XG52YXIgRVZFTlRfQ1JPUF9TVEFSVCA9ICdjcm9wc3RhcnQnO1xudmFyIEVWRU5UX0RCTENMSUNLID0gJ2RibGNsaWNrJztcbnZhciBFVkVOVF9UT1VDSF9TVEFSVCA9IElTX1RPVUNIX0RFVklDRSA/ICd0b3VjaHN0YXJ0JyA6ICdtb3VzZWRvd24nO1xudmFyIEVWRU5UX1RPVUNIX01PVkUgPSBJU19UT1VDSF9ERVZJQ0UgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnO1xudmFyIEVWRU5UX1RPVUNIX0VORCA9IElTX1RPVUNIX0RFVklDRSA/ICd0b3VjaGVuZCB0b3VjaGNhbmNlbCcgOiAnbW91c2V1cCc7XG52YXIgRVZFTlRfUE9JTlRFUl9ET1dOID0gSEFTX1BPSU5URVJfRVZFTlQgPyAncG9pbnRlcmRvd24nIDogRVZFTlRfVE9VQ0hfU1RBUlQ7XG52YXIgRVZFTlRfUE9JTlRFUl9NT1ZFID0gSEFTX1BPSU5URVJfRVZFTlQgPyAncG9pbnRlcm1vdmUnIDogRVZFTlRfVE9VQ0hfTU9WRTtcbnZhciBFVkVOVF9QT0lOVEVSX1VQID0gSEFTX1BPSU5URVJfRVZFTlQgPyAncG9pbnRlcnVwIHBvaW50ZXJjYW5jZWwnIDogRVZFTlRfVE9VQ0hfRU5EO1xudmFyIEVWRU5UX1JFQURZID0gJ3JlYWR5JztcbnZhciBFVkVOVF9SRVNJWkUgPSAncmVzaXplJztcbnZhciBFVkVOVF9XSEVFTCA9ICd3aGVlbCc7XG52YXIgRVZFTlRfWk9PTSA9ICd6b29tJztcblxuLy8gTWltZSB0eXBlc1xudmFyIE1JTUVfVFlQRV9KUEVHID0gJ2ltYWdlL2pwZWcnO1xuXG4vLyBSZWdFeHBzXG52YXIgUkVHRVhQX0FDVElPTlMgPSAvXmV8d3xzfG58c2V8c3d8bmV8bnd8YWxsfGNyb3B8bW92ZXx6b29tJC87XG52YXIgUkVHRVhQX0RBVEFfVVJMID0gL15kYXRhOi87XG52YXIgUkVHRVhQX0RBVEFfVVJMX0pQRUcgPSAvXmRhdGE6aW1hZ2VcXC9qcGVnO2Jhc2U2NCwvO1xudmFyIFJFR0VYUF9UQUdfTkFNRSA9IC9eaW1nfGNhbnZhcyQvaTtcblxuLy8gTWlzY1xuLy8gSW5zcGlyZWQgYnkgdGhlIGRlZmF1bHQgd2lkdGggYW5kIGhlaWdodCBvZiBhIGNhbnZhcyBlbGVtZW50LlxudmFyIE1JTl9DT05UQUlORVJfV0lEVEggPSAyMDA7XG52YXIgTUlOX0NPTlRBSU5FUl9IRUlHSFQgPSAxMDA7XG5cbnZhciBERUZBVUxUUyA9IHtcbiAgLy8gRGVmaW5lIHRoZSB2aWV3IG1vZGUgb2YgdGhlIGNyb3BwZXJcbiAgdmlld01vZGU6IDAsXG4gIC8vIDAsIDEsIDIsIDNcblxuICAvLyBEZWZpbmUgdGhlIGRyYWdnaW5nIG1vZGUgb2YgdGhlIGNyb3BwZXJcbiAgZHJhZ01vZGU6IERSQUdfTU9ERV9DUk9QLFxuICAvLyAnY3JvcCcsICdtb3ZlJyBvciAnbm9uZSdcblxuICAvLyBEZWZpbmUgdGhlIGluaXRpYWwgYXNwZWN0IHJhdGlvIG9mIHRoZSBjcm9wIGJveFxuICBpbml0aWFsQXNwZWN0UmF0aW86IE5hTixcbiAgLy8gRGVmaW5lIHRoZSBhc3BlY3QgcmF0aW8gb2YgdGhlIGNyb3AgYm94XG4gIGFzcGVjdFJhdGlvOiBOYU4sXG4gIC8vIEFuIG9iamVjdCB3aXRoIHRoZSBwcmV2aW91cyBjcm9wcGluZyByZXN1bHQgZGF0YVxuICBkYXRhOiBudWxsLFxuICAvLyBBIHNlbGVjdG9yIGZvciBhZGRpbmcgZXh0cmEgY29udGFpbmVycyB0byBwcmV2aWV3XG4gIHByZXZpZXc6ICcnLFxuICAvLyBSZS1yZW5kZXIgdGhlIGNyb3BwZXIgd2hlbiByZXNpemUgdGhlIHdpbmRvd1xuICByZXNwb25zaXZlOiB0cnVlLFxuICAvLyBSZXN0b3JlIHRoZSBjcm9wcGVkIGFyZWEgYWZ0ZXIgcmVzaXplIHRoZSB3aW5kb3dcbiAgcmVzdG9yZTogdHJ1ZSxcbiAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgaW1hZ2UgaXMgYSBjcm9zcy1vcmlnaW4gaW1hZ2VcbiAgY2hlY2tDcm9zc09yaWdpbjogdHJ1ZSxcbiAgLy8gQ2hlY2sgdGhlIGN1cnJlbnQgaW1hZ2UncyBFeGlmIE9yaWVudGF0aW9uIGluZm9ybWF0aW9uXG4gIGNoZWNrT3JpZW50YXRpb246IHRydWUsXG4gIC8vIFNob3cgdGhlIGJsYWNrIG1vZGFsXG4gIG1vZGFsOiB0cnVlLFxuICAvLyBTaG93IHRoZSBkYXNoZWQgbGluZXMgZm9yIGd1aWRpbmdcbiAgZ3VpZGVzOiB0cnVlLFxuICAvLyBTaG93IHRoZSBjZW50ZXIgaW5kaWNhdG9yIGZvciBndWlkaW5nXG4gIGNlbnRlcjogdHJ1ZSxcbiAgLy8gU2hvdyB0aGUgd2hpdGUgbW9kYWwgdG8gaGlnaGxpZ2h0IHRoZSBjcm9wIGJveFxuICBoaWdobGlnaHQ6IHRydWUsXG4gIC8vIFNob3cgdGhlIGdyaWQgYmFja2dyb3VuZFxuICBiYWNrZ3JvdW5kOiB0cnVlLFxuICAvLyBFbmFibGUgdG8gY3JvcCB0aGUgaW1hZ2UgYXV0b21hdGljYWxseSB3aGVuIGluaXRpYWxpemVcbiAgYXV0b0Nyb3A6IHRydWUsXG4gIC8vIERlZmluZSB0aGUgcGVyY2VudGFnZSBvZiBhdXRvbWF0aWMgY3JvcHBpbmcgYXJlYSB3aGVuIGluaXRpYWxpemVzXG4gIGF1dG9Dcm9wQXJlYTogMC44LFxuICAvLyBFbmFibGUgdG8gbW92ZSB0aGUgaW1hZ2VcbiAgbW92YWJsZTogdHJ1ZSxcbiAgLy8gRW5hYmxlIHRvIHJvdGF0ZSB0aGUgaW1hZ2VcbiAgcm90YXRhYmxlOiB0cnVlLFxuICAvLyBFbmFibGUgdG8gc2NhbGUgdGhlIGltYWdlXG4gIHNjYWxhYmxlOiB0cnVlLFxuICAvLyBFbmFibGUgdG8gem9vbSB0aGUgaW1hZ2VcbiAgem9vbWFibGU6IHRydWUsXG4gIC8vIEVuYWJsZSB0byB6b29tIHRoZSBpbWFnZSBieSBkcmFnZ2luZyB0b3VjaFxuICB6b29tT25Ub3VjaDogdHJ1ZSxcbiAgLy8gRW5hYmxlIHRvIHpvb20gdGhlIGltYWdlIGJ5IHdoZWVsaW5nIG1vdXNlXG4gIHpvb21PbldoZWVsOiB0cnVlLFxuICAvLyBEZWZpbmUgem9vbSByYXRpbyB3aGVuIHpvb20gdGhlIGltYWdlIGJ5IHdoZWVsaW5nIG1vdXNlXG4gIHdoZWVsWm9vbVJhdGlvOiAwLjEsXG4gIC8vIEVuYWJsZSB0byBtb3ZlIHRoZSBjcm9wIGJveFxuICBjcm9wQm94TW92YWJsZTogdHJ1ZSxcbiAgLy8gRW5hYmxlIHRvIHJlc2l6ZSB0aGUgY3JvcCBib3hcbiAgY3JvcEJveFJlc2l6YWJsZTogdHJ1ZSxcbiAgLy8gVG9nZ2xlIGRyYWcgbW9kZSBiZXR3ZWVuIFwiY3JvcFwiIGFuZCBcIm1vdmVcIiB3aGVuIGNsaWNrIHR3aWNlIG9uIHRoZSBjcm9wcGVyXG4gIHRvZ2dsZURyYWdNb2RlT25EYmxjbGljazogdHJ1ZSxcbiAgLy8gU2l6ZSBsaW1pdGF0aW9uXG4gIG1pbkNhbnZhc1dpZHRoOiAwLFxuICBtaW5DYW52YXNIZWlnaHQ6IDAsXG4gIG1pbkNyb3BCb3hXaWR0aDogMCxcbiAgbWluQ3JvcEJveEhlaWdodDogMCxcbiAgbWluQ29udGFpbmVyV2lkdGg6IE1JTl9DT05UQUlORVJfV0lEVEgsXG4gIG1pbkNvbnRhaW5lckhlaWdodDogTUlOX0NPTlRBSU5FUl9IRUlHSFQsXG4gIC8vIFNob3J0Y3V0cyBvZiBldmVudHNcbiAgcmVhZHk6IG51bGwsXG4gIGNyb3BzdGFydDogbnVsbCxcbiAgY3JvcG1vdmU6IG51bGwsXG4gIGNyb3BlbmQ6IG51bGwsXG4gIGNyb3A6IG51bGwsXG4gIHpvb206IG51bGxcbn07XG5cbnZhciBURU1QTEFURSA9ICc8ZGl2IGNsYXNzPVwiY3JvcHBlci1jb250YWluZXJcIiB0b3VjaC1hY3Rpb249XCJub25lXCI+JyArICc8ZGl2IGNsYXNzPVwiY3JvcHBlci13cmFwLWJveFwiPicgKyAnPGRpdiBjbGFzcz1cImNyb3BwZXItY2FudmFzXCI+PC9kaXY+JyArICc8L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJjcm9wcGVyLWRyYWctYm94XCI+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwiY3JvcHBlci1jcm9wLWJveFwiPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXZpZXctYm94XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWRhc2hlZCBkYXNoZWQtaFwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1kYXNoZWQgZGFzaGVkLXZcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItY2VudGVyXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWZhY2VcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItbGluZSBsaW5lLWVcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwiZVwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1saW5lIGxpbmUtblwiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJuXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWxpbmUgbGluZS13XCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cIndcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItbGluZSBsaW5lLXNcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwic1wiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1wb2ludCBwb2ludC1lXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cImVcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtblwiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJuXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LXdcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwid1wiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1wb2ludCBwb2ludC1zXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cInNcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtbmVcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwibmVcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtbndcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwibndcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtc3dcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwic3dcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtc2VcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwic2VcIj48L3NwYW4+JyArICc8L2Rpdj4nICsgJzwvZGl2Pic7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIG5vdCBhIG51bWJlci5cbiAqL1xudmFyIGlzTmFOID0gTnVtYmVyLmlzTmFOIHx8IFdJTkRPVy5pc05hTjtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIG51bWJlciwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIHBvc2l0aXZlIG51bWJlci5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gKi9cbnZhciBpc1Bvc2l0aXZlTnVtYmVyID0gZnVuY3Rpb24gaXNQb3NpdGl2ZU51bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPiAwICYmIHZhbHVlIDwgSW5maW5pdHk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyB1bmRlZmluZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIG9iamVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xufVxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHRyeSB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHZhbHVlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBwcm90b3R5cGUgPSBfY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgIHJldHVybiBfY29uc3RydWN0b3IgJiYgcHJvdG90eXBlICYmIGhhc093blByb3BlcnR5LmNhbGwocHJvdG90eXBlLCAnaXNQcm90b3R5cGVPZicpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbi8qKlxuICogQ29udmVydCBhcnJheS1saWtlIG9yIGl0ZXJhYmxlIG9iamVjdCB0byBhbiBhcnJheS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhIG5ldyBhcnJheS5cbiAqL1xuZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuZnJvbSA/IEFycmF5LmZyb20odmFsdWUpIDogc2xpY2UuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSB0aGUgZ2l2ZW4gZGF0YS5cbiAqIEBwYXJhbSB7Kn0gZGF0YSAtIFRoZSBkYXRhIHRvIGl0ZXJhdGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBwcm9jZXNzIGZ1bmN0aW9uIGZvciBlYWNoIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIG9yaWdpbmFsIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2goZGF0YSwgY2FsbGJhY2spIHtcbiAgaWYgKGRhdGEgJiYgaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSB8fCBpc051bWJlcihkYXRhLmxlbmd0aCkgLyogYXJyYXktbGlrZSAqLykge1xuICAgICAgdG9BcnJheShkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoZGF0YSwgdmFsdWUsIGtleSwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChkYXRhLCBkYXRhW2tleV0sIGtleSwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogRXh0ZW5kIHRoZSBnaXZlbiBvYmplY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2JqZWN0IHRvIGV4dGVuZC5cbiAqIEBwYXJhbSB7Kn0gYXJncyAtIFRoZSByZXN0IG9iamVjdHMgZm9yIG1lcmdpbmcgdG8gdGhlIHRhcmdldCBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZXh0ZW5kZWQgb2JqZWN0LlxuICovXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBhcmdzLmxlbmd0aCA+IDApIHtcbiAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgaWYgKGlzT2JqZWN0KGFyZykpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoYXJnKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IGFyZ1trZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbnZhciBSRUdFWFBfREVDSU1BTFMgPSAvXFwuXFxkKig/OjB8OSl7MTJ9XFxkKiQvO1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBkZWNpbWFsIG51bWJlci5cbiAqIENoZWNrIG91dCB7QGxpbmsgaHR0cHM6Ly8wLjMwMDAwMDAwMDAwMDAwMDA0LmNvbS99XG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gbm9ybWFsaXplLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lcz0xMDAwMDAwMDAwMDBdIC0gVGhlIHRpbWVzIGZvciBub3JtYWxpemluZy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG5vcm1hbGl6ZWQgbnVtYmVyLlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVEZWNpbWFsTnVtYmVyKHZhbHVlKSB7XG4gIHZhciB0aW1lcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTAwMDAwMDAwMDAwO1xuICByZXR1cm4gUkVHRVhQX0RFQ0lNQUxTLnRlc3QodmFsdWUpID8gTWF0aC5yb3VuZCh2YWx1ZSAqIHRpbWVzKSAvIHRpbWVzIDogdmFsdWU7XG59XG52YXIgUkVHRVhQX1NVRkZJWCA9IC9ed2lkdGh8aGVpZ2h0fGxlZnR8dG9wfG1hcmdpbkxlZnR8bWFyZ2luVG9wJC87XG5cbi8qKlxuICogQXBwbHkgc3R5bGVzIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyAtIFRoZSBzdHlsZXMgZm9yIGFwcGx5aW5nLlxuICovXG5mdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZXMpIHtcbiAgdmFyIHN0eWxlID0gZWxlbWVudC5zdHlsZTtcbiAgZm9yRWFjaChzdHlsZXMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcGVydHkpIHtcbiAgICBpZiAoUkVHRVhQX1NVRkZJWC50ZXN0KHByb3BlcnR5KSAmJiBpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gXCJcIi5jb25jYXQodmFsdWUsIFwicHhcIik7XG4gICAgfVxuICAgIHN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBoYXMgYSBzcGVjaWFsIGNsYXNzLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gY2hlY2suXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgY2xhc3MgdG8gc2VhcmNoLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBzcGVjaWFsIGNsYXNzIHdhcyBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgdmFsdWUpIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0ID8gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModmFsdWUpIDogZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZih2YWx1ZSkgPiAtMTtcbn1cblxuLyoqXG4gKiBBZGQgY2xhc3NlcyB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSB0YXJnZXQgZWxlbWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzc2VzIHRvIGJlIGFkZGVkLlxuICovXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCB2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpc051bWJlcihlbGVtZW50Lmxlbmd0aCkpIHtcbiAgICBmb3JFYWNoKGVsZW1lbnQsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICBhZGRDbGFzcyhlbGVtLCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh2YWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBjbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS50cmltKCk7XG4gIGlmICghY2xhc3NOYW1lKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSB2YWx1ZTtcbiAgfSBlbHNlIGlmIChjbGFzc05hbWUuaW5kZXhPZih2YWx1ZSkgPCAwKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiIFwiKS5jb25jYXQodmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGNsYXNzZXMgZnJvbSB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSB0YXJnZXQgZWxlbWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzc2VzIHRvIGJlIHJlbW92ZWQuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlzTnVtYmVyKGVsZW1lbnQubGVuZ3RoKSkge1xuICAgIGZvckVhY2goZWxlbWVudCwgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW0sIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YodmFsdWUpID49IDApIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UodmFsdWUsICcnKTtcbiAgfVxufVxuXG4vKipcbiAqIEFkZCBvciByZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIGNsYXNzZXMgdG8gYmUgdG9nZ2xlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYWRkZWQgLSBBZGQgb25seS5cbiAqL1xuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgdmFsdWUsIGFkZGVkKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlzTnVtYmVyKGVsZW1lbnQubGVuZ3RoKSkge1xuICAgIGZvckVhY2goZWxlbWVudCwgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIHRvZ2dsZUNsYXNzKGVsZW0sIHZhbHVlLCBhZGRlZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSUUxMC0xMSBkb2Vzbid0IHN1cHBvcnQgdGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgYGNsYXNzTGlzdC50b2dnbGVgXG4gIGlmIChhZGRlZCkge1xuICAgIGFkZENsYXNzKGVsZW1lbnQsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCB2YWx1ZSk7XG4gIH1cbn1cbnZhciBSRUdFWFBfQ0FNRUxfQ0FTRSA9IC8oW2EtelxcZF0pKFtBLVpdKS9nO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZ2l2ZW4gc3RyaW5nIGZyb20gY2FtZWxDYXNlIHRvIGtlYmFiLWNhc2VcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHRvUGFyYW1DYXNlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKFJFR0VYUF9DQU1FTF9DQVNFLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIEdldCBkYXRhIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBkYXRhIGtleSB0byBnZXQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZGF0YSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0RGF0YShlbGVtZW50LCBuYW1lKSB7XG4gIGlmIChpc09iamVjdChlbGVtZW50W25hbWVdKSkge1xuICAgIHJldHVybiBlbGVtZW50W25hbWVdO1xuICB9XG4gIGlmIChlbGVtZW50LmRhdGFzZXQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0W25hbWVdO1xuICB9XG4gIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtXCIuY29uY2F0KHRvUGFyYW1DYXNlKG5hbWUpKSk7XG59XG5cbi8qKlxuICogU2V0IGRhdGEgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBkYXRhIGtleSB0byBzZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YSAtIFRoZSBkYXRhIHZhbHVlLlxuICovXG5mdW5jdGlvbiBzZXREYXRhKGVsZW1lbnQsIG5hbWUsIGRhdGEpIHtcbiAgaWYgKGlzT2JqZWN0KGRhdGEpKSB7XG4gICAgZWxlbWVudFtuYW1lXSA9IGRhdGE7XG4gIH0gZWxzZSBpZiAoZWxlbWVudC5kYXRhc2V0KSB7XG4gICAgZWxlbWVudC5kYXRhc2V0W25hbWVdID0gZGF0YTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtXCIuY29uY2F0KHRvUGFyYW1DYXNlKG5hbWUpKSwgZGF0YSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgZGF0YSBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgZGF0YSBrZXkgdG8gcmVtb3ZlLlxuICovXG5mdW5jdGlvbiByZW1vdmVEYXRhKGVsZW1lbnQsIG5hbWUpIHtcbiAgaWYgKGlzT2JqZWN0KGVsZW1lbnRbbmFtZV0pKSB7XG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZSBlbGVtZW50W25hbWVdO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBlbGVtZW50W25hbWVdID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSBlbHNlIGlmIChlbGVtZW50LmRhdGFzZXQpIHtcbiAgICAvLyAjMTI4IFNhZmFyaSBub3QgYWxsb3dzIHRvIGRlbGV0ZSBkYXRhc2V0IHByb3BlcnR5XG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZSBlbGVtZW50LmRhdGFzZXRbbmFtZV07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGVsZW1lbnQuZGF0YXNldFtuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdCh0b1BhcmFtQ2FzZShuYW1lKSkpO1xuICB9XG59XG52YXIgUkVHRVhQX1NQQUNFUyA9IC9cXHNcXHMqLztcbnZhciBvbmNlU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3VwcG9ydGVkID0gZmFsc2U7XG4gIGlmIChJU19CUk9XU0VSKSB7XG4gICAgdmFyIG9uY2UgPSBmYWxzZTtcbiAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHt9O1xuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnb25jZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICBzdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gb25jZTtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgc2V0dGVyIGNhbiBmaXggYSBgVHlwZUVycm9yYCBpbiBzdHJpY3QgbW9kZVxuICAgICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0Vycm9ycy9HZXR0ZXJfb25seX1cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc2V0XG4gICAgICAgKi9cbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgIG9uY2UgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBXSU5ET1cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICBXSU5ET1cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgfVxuICByZXR1cm4gc3VwcG9ydGVkO1xufSgpO1xuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lciBmcm9tIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBldmVudCB0eXBlKHMpLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBUaGUgZXZlbnQgbGlzdGVuZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBldmVudCBvcHRpb25zLlxuICovXG5mdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gIHZhciBoYW5kbGVyID0gbGlzdGVuZXI7XG4gIHR5cGUudHJpbSgpLnNwbGl0KFJFR0VYUF9TUEFDRVMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCFvbmNlU3VwcG9ydGVkKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gZWxlbWVudC5saXN0ZW5lcnM7XG4gICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVyc1tldmVudF0gJiYgbGlzdGVuZXJzW2V2ZW50XVtsaXN0ZW5lcl0pIHtcbiAgICAgICAgaGFuZGxlciA9IGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdO1xuICAgICAgICBkZWxldGUgbGlzdGVuZXJzW2V2ZW50XVtsaXN0ZW5lcl07XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhsaXN0ZW5lcnNbZXZlbnRdKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBkZWxldGUgbGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMobGlzdGVuZXJzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBkZWxldGUgZWxlbWVudC5saXN0ZW5lcnM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBldmVudCB0eXBlKHMpLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBUaGUgZXZlbnQgbGlzdGVuZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBldmVudCBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihlbGVtZW50LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gIHZhciBfaGFuZGxlciA9IGxpc3RlbmVyO1xuICB0eXBlLnRyaW0oKS5zcGxpdChSRUdFWFBfU1BBQ0VTKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChvcHRpb25zLm9uY2UgJiYgIW9uY2VTdXBwb3J0ZWQpIHtcbiAgICAgIHZhciBfZWxlbWVudCRsaXN0ZW5lcnMgPSBlbGVtZW50Lmxpc3RlbmVycyxcbiAgICAgICAgbGlzdGVuZXJzID0gX2VsZW1lbnQkbGlzdGVuZXJzID09PSB2b2lkIDAgPyB7fSA6IF9lbGVtZW50JGxpc3RlbmVycztcbiAgICAgIF9oYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgZGVsZXRlIGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIF9oYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RlbmVyLmFwcGx5KGVsZW1lbnQsIGFyZ3MpO1xuICAgICAgfTtcbiAgICAgIGlmICghbGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdID0ge307XG4gICAgICB9XG4gICAgICBpZiAobGlzdGVuZXJzW2V2ZW50XVtsaXN0ZW5lcl0pIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXSA9IF9oYW5kbGVyO1xuICAgICAgZWxlbWVudC5saXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gICAgfVxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgX2hhbmRsZXIsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBldmVudCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZXZlbnQgdGFyZ2V0LlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgZXZlbnQgdHlwZShzKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIGFkZGl0aW9uYWwgZXZlbnQgZGF0YS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBJbmRpY2F0ZSBpZiB0aGUgZXZlbnQgaXMgZGVmYXVsdCBwcmV2ZW50ZWQgb3Igbm90LlxuICovXG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIHR5cGUsIGRhdGEpIHtcbiAgdmFyIGV2ZW50O1xuXG4gIC8vIEV2ZW50IGFuZCBDdXN0b21FdmVudCBvbiBJRTktMTEgYXJlIGdsb2JhbCBvYmplY3RzLCBub3QgY29uc3RydWN0b3JzXG4gIGlmIChpc0Z1bmN0aW9uKEV2ZW50KSAmJiBpc0Z1bmN0aW9uKEN1c3RvbUV2ZW50KSkge1xuICAgIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHtcbiAgICAgIGRldGFpbDogZGF0YSxcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgZGF0YSk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBvZmZzZXQgYmFzZSBvbiB0aGUgZG9jdW1lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgb2Zmc2V0IGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE9mZnNldChlbGVtZW50KSB7XG4gIHZhciBib3ggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IGJveC5sZWZ0ICsgKHdpbmRvdy5wYWdlWE9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0KSxcbiAgICB0b3A6IGJveC50b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcClcbiAgfTtcbn1cbnZhciBsb2NhdGlvbiA9IFdJTkRPVy5sb2NhdGlvbjtcbnZhciBSRUdFWFBfT1JJR0lOUyA9IC9eKFxcdys6KVxcL1xcLyhbXjovPyNdKik6PyhcXGQqKS9pO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBVUkwgaXMgYSBjcm9zcyBvcmlnaW4gVVJMLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSB0YXJnZXQgVVJMLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiBVUkwgaXMgYSBjcm9zcyBvcmlnaW4gVVJMLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzQ3Jvc3NPcmlnaW5VUkwodXJsKSB7XG4gIHZhciBwYXJ0cyA9IHVybC5tYXRjaChSRUdFWFBfT1JJR0lOUyk7XG4gIHJldHVybiBwYXJ0cyAhPT0gbnVsbCAmJiAocGFydHNbMV0gIT09IGxvY2F0aW9uLnByb3RvY29sIHx8IHBhcnRzWzJdICE9PSBsb2NhdGlvbi5ob3N0bmFtZSB8fCBwYXJ0c1szXSAhPT0gbG9jYXRpb24ucG9ydCk7XG59XG5cbi8qKlxuICogQWRkIHRpbWVzdGFtcCB0byB0aGUgZ2l2ZW4gVVJMLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSB0YXJnZXQgVVJMLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlc3VsdCBVUkwuXG4gKi9cbmZ1bmN0aW9uIGFkZFRpbWVzdGFtcCh1cmwpIHtcbiAgdmFyIHRpbWVzdGFtcCA9IFwidGltZXN0YW1wPVwiLmNvbmNhdChuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gIHJldHVybiB1cmwgKyAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgdGltZXN0YW1wO1xufVxuXG4vKipcbiAqIEdldCB0cmFuc2Zvcm1zIGJhc2Ugb24gdGhlIGdpdmVuIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBUaGUgdGFyZ2V0IG9iamVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5nIGNvbnRhaW5zIHRyYW5zZm9ybSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybXMoX3JlZikge1xuICB2YXIgcm90YXRlID0gX3JlZi5yb3RhdGUsXG4gICAgc2NhbGVYID0gX3JlZi5zY2FsZVgsXG4gICAgc2NhbGVZID0gX3JlZi5zY2FsZVksXG4gICAgdHJhbnNsYXRlWCA9IF9yZWYudHJhbnNsYXRlWCxcbiAgICB0cmFuc2xhdGVZID0gX3JlZi50cmFuc2xhdGVZO1xuICB2YXIgdmFsdWVzID0gW107XG4gIGlmIChpc051bWJlcih0cmFuc2xhdGVYKSAmJiB0cmFuc2xhdGVYICE9PSAwKSB7XG4gICAgdmFsdWVzLnB1c2goXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdCh0cmFuc2xhdGVYLCBcInB4KVwiKSk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHRyYW5zbGF0ZVkpICYmIHRyYW5zbGF0ZVkgIT09IDApIHtcbiAgICB2YWx1ZXMucHVzaChcInRyYW5zbGF0ZVkoXCIuY29uY2F0KHRyYW5zbGF0ZVksIFwicHgpXCIpKTtcbiAgfVxuXG4gIC8vIFJvdGF0ZSBzaG91bGQgY29tZSBmaXJzdCBiZWZvcmUgc2NhbGUgdG8gbWF0Y2ggb3JpZW50YXRpb24gdHJhbnNmb3JtXG4gIGlmIChpc051bWJlcihyb3RhdGUpICYmIHJvdGF0ZSAhPT0gMCkge1xuICAgIHZhbHVlcy5wdXNoKFwicm90YXRlKFwiLmNvbmNhdChyb3RhdGUsIFwiZGVnKVwiKSk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHNjYWxlWCkgJiYgc2NhbGVYICE9PSAxKSB7XG4gICAgdmFsdWVzLnB1c2goXCJzY2FsZVgoXCIuY29uY2F0KHNjYWxlWCwgXCIpXCIpKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIoc2NhbGVZKSAmJiBzY2FsZVkgIT09IDEpIHtcbiAgICB2YWx1ZXMucHVzaChcInNjYWxlWShcIi5jb25jYXQoc2NhbGVZLCBcIilcIikpO1xuICB9XG4gIHZhciB0cmFuc2Zvcm0gPSB2YWx1ZXMubGVuZ3RoID8gdmFsdWVzLmpvaW4oJyAnKSA6ICdub25lJztcbiAgcmV0dXJuIHtcbiAgICBXZWJraXRUcmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBtc1RyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gIH07XG59XG5cbi8qKlxuICogR2V0IHRoZSBtYXggcmF0aW8gb2YgYSBncm91cCBvZiBwb2ludGVycy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwb2ludGVycyAtIFRoZSB0YXJnZXQgcG9pbnRlcnMuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVzdWx0IHJhdGlvLlxuICovXG5mdW5jdGlvbiBnZXRNYXhab29tUmF0aW8ocG9pbnRlcnMpIHtcbiAgdmFyIHBvaW50ZXJzMiA9IF9vYmplY3RTcHJlYWQyKHt9LCBwb2ludGVycyk7XG4gIHZhciBtYXhSYXRpbyA9IDA7XG4gIGZvckVhY2gocG9pbnRlcnMsIGZ1bmN0aW9uIChwb2ludGVyLCBwb2ludGVySWQpIHtcbiAgICBkZWxldGUgcG9pbnRlcnMyW3BvaW50ZXJJZF07XG4gICAgZm9yRWFjaChwb2ludGVyczIsIGZ1bmN0aW9uIChwb2ludGVyMikge1xuICAgICAgdmFyIHgxID0gTWF0aC5hYnMocG9pbnRlci5zdGFydFggLSBwb2ludGVyMi5zdGFydFgpO1xuICAgICAgdmFyIHkxID0gTWF0aC5hYnMocG9pbnRlci5zdGFydFkgLSBwb2ludGVyMi5zdGFydFkpO1xuICAgICAgdmFyIHgyID0gTWF0aC5hYnMocG9pbnRlci5lbmRYIC0gcG9pbnRlcjIuZW5kWCk7XG4gICAgICB2YXIgeTIgPSBNYXRoLmFicyhwb2ludGVyLmVuZFkgLSBwb2ludGVyMi5lbmRZKTtcbiAgICAgIHZhciB6MSA9IE1hdGguc3FydCh4MSAqIHgxICsgeTEgKiB5MSk7XG4gICAgICB2YXIgejIgPSBNYXRoLnNxcnQoeDIgKiB4MiArIHkyICogeTIpO1xuICAgICAgdmFyIHJhdGlvID0gKHoyIC0gejEpIC8gejE7XG4gICAgICBpZiAoTWF0aC5hYnMocmF0aW8pID4gTWF0aC5hYnMobWF4UmF0aW8pKSB7XG4gICAgICAgIG1heFJhdGlvID0gcmF0aW87XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbWF4UmF0aW87XG59XG5cbi8qKlxuICogR2V0IGEgcG9pbnRlciBmcm9tIGFuIGV2ZW50IG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCAtIFRoZSB0YXJnZXQgZXZlbnQgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBlbmRPbmx5IC0gSW5kaWNhdGVzIGlmIG9ubHkgcmV0dXJucyB0aGUgZW5kIHBvaW50IGNvb3JkaW5hdGUgb3Igbm90LlxuICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBwb2ludGVyIGNvbnRhaW5zIHN0YXJ0IGFuZC9vciBlbmQgcG9pbnQgY29vcmRpbmF0ZXMuXG4gKi9cbmZ1bmN0aW9uIGdldFBvaW50ZXIoX3JlZjIsIGVuZE9ubHkpIHtcbiAgdmFyIHBhZ2VYID0gX3JlZjIucGFnZVgsXG4gICAgcGFnZVkgPSBfcmVmMi5wYWdlWTtcbiAgdmFyIGVuZCA9IHtcbiAgICBlbmRYOiBwYWdlWCxcbiAgICBlbmRZOiBwYWdlWVxuICB9O1xuICByZXR1cm4gZW5kT25seSA/IGVuZCA6IF9vYmplY3RTcHJlYWQyKHtcbiAgICBzdGFydFg6IHBhZ2VYLFxuICAgIHN0YXJ0WTogcGFnZVlcbiAgfSwgZW5kKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNlbnRlciBwb2ludCBjb29yZGluYXRlIG9mIGEgZ3JvdXAgb2YgcG9pbnRlcnMuXG4gKiBAcGFyYW0ge09iamVjdH0gcG9pbnRlcnMgLSBUaGUgdGFyZ2V0IHBvaW50ZXJzLlxuICogQHJldHVybnMge09iamVjdH0gVGhlIGNlbnRlciBwb2ludCBjb29yZGluYXRlLlxuICovXG5mdW5jdGlvbiBnZXRQb2ludGVyc0NlbnRlcihwb2ludGVycykge1xuICB2YXIgcGFnZVggPSAwO1xuICB2YXIgcGFnZVkgPSAwO1xuICB2YXIgY291bnQgPSAwO1xuICBmb3JFYWNoKHBvaW50ZXJzLCBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICB2YXIgc3RhcnRYID0gX3JlZjMuc3RhcnRYLFxuICAgICAgc3RhcnRZID0gX3JlZjMuc3RhcnRZO1xuICAgIHBhZ2VYICs9IHN0YXJ0WDtcbiAgICBwYWdlWSArPSBzdGFydFk7XG4gICAgY291bnQgKz0gMTtcbiAgfSk7XG4gIHBhZ2VYIC89IGNvdW50O1xuICBwYWdlWSAvPSBjb3VudDtcbiAgcmV0dXJuIHtcbiAgICBwYWdlWDogcGFnZVgsXG4gICAgcGFnZVk6IHBhZ2VZXG4gIH07XG59XG5cbi8qKlxuICogR2V0IHRoZSBtYXggc2l6ZXMgaW4gYSByZWN0YW5nbGUgdW5kZXIgdGhlIGdpdmVuIGFzcGVjdCByYXRpby5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG9yaWdpbmFsIHNpemVzLlxuICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlPSdjb250YWluJ10gLSBUaGUgYWRqdXN0IHR5cGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IHNpemVzLlxuICovXG5mdW5jdGlvbiBnZXRBZGp1c3RlZFNpemVzKF9yZWY0KSB7XG4gIHZhciBhc3BlY3RSYXRpbyA9IF9yZWY0LmFzcGVjdFJhdGlvLFxuICAgIGhlaWdodCA9IF9yZWY0LmhlaWdodCxcbiAgICB3aWR0aCA9IF9yZWY0LndpZHRoO1xuICB2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ2NvbnRhaW4nO1xuICB2YXIgaXNWYWxpZFdpZHRoID0gaXNQb3NpdGl2ZU51bWJlcih3aWR0aCk7XG4gIHZhciBpc1ZhbGlkSGVpZ2h0ID0gaXNQb3NpdGl2ZU51bWJlcihoZWlnaHQpO1xuICBpZiAoaXNWYWxpZFdpZHRoICYmIGlzVmFsaWRIZWlnaHQpIHtcbiAgICB2YXIgYWRqdXN0ZWRXaWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgIGlmICh0eXBlID09PSAnY29udGFpbicgJiYgYWRqdXN0ZWRXaWR0aCA+IHdpZHRoIHx8IHR5cGUgPT09ICdjb3ZlcicgJiYgYWRqdXN0ZWRXaWR0aCA8IHdpZHRoKSB7XG4gICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkV2lkdGgpIHtcbiAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICB9IGVsc2UgaWYgKGlzVmFsaWRIZWlnaHQpIHtcbiAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59XG5cbi8qKlxuICogR2V0IHRoZSBuZXcgc2l6ZXMgb2YgYSByZWN0YW5nbGUgYWZ0ZXIgcm90YXRlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG9yaWdpbmFsIHNpemVzLlxuICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBzaXplcy5cbiAqL1xuZnVuY3Rpb24gZ2V0Um90YXRlZFNpemVzKF9yZWY1KSB7XG4gIHZhciB3aWR0aCA9IF9yZWY1LndpZHRoLFxuICAgIGhlaWdodCA9IF9yZWY1LmhlaWdodCxcbiAgICBkZWdyZWUgPSBfcmVmNS5kZWdyZWU7XG4gIGRlZ3JlZSA9IE1hdGguYWJzKGRlZ3JlZSkgJSAxODA7XG4gIGlmIChkZWdyZWUgPT09IDkwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBoZWlnaHQsXG4gICAgICBoZWlnaHQ6IHdpZHRoXG4gICAgfTtcbiAgfVxuICB2YXIgYXJjID0gZGVncmVlICUgOTAgKiBNYXRoLlBJIC8gMTgwO1xuICB2YXIgc2luQXJjID0gTWF0aC5zaW4oYXJjKTtcbiAgdmFyIGNvc0FyYyA9IE1hdGguY29zKGFyYyk7XG4gIHZhciBuZXdXaWR0aCA9IHdpZHRoICogY29zQXJjICsgaGVpZ2h0ICogc2luQXJjO1xuICB2YXIgbmV3SGVpZ2h0ID0gd2lkdGggKiBzaW5BcmMgKyBoZWlnaHQgKiBjb3NBcmM7XG4gIHJldHVybiBkZWdyZWUgPiA5MCA/IHtcbiAgICB3aWR0aDogbmV3SGVpZ2h0LFxuICAgIGhlaWdodDogbmV3V2lkdGhcbiAgfSA6IHtcbiAgICB3aWR0aDogbmV3V2lkdGgsXG4gICAgaGVpZ2h0OiBuZXdIZWlnaHRcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXQgYSBjYW52YXMgd2hpY2ggZHJldyB0aGUgZ2l2ZW4gaW1hZ2UuXG4gKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGltYWdlIC0gVGhlIGltYWdlIGZvciBkcmF3aW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGltYWdlRGF0YSAtIFRoZSBpbWFnZSBkYXRhLlxuICogQHBhcmFtIHtPYmplY3R9IGNhbnZhc0RhdGEgLSBUaGUgY2FudmFzIGRhdGEuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBvcHRpb25zLlxuICogQHJldHVybnMge0hUTUxDYW52YXNFbGVtZW50fSBUaGUgcmVzdWx0IGNhbnZhcy5cbiAqL1xuZnVuY3Rpb24gZ2V0U291cmNlQ2FudmFzKGltYWdlLCBfcmVmNiwgX3JlZjcsIF9yZWY4KSB7XG4gIHZhciBpbWFnZUFzcGVjdFJhdGlvID0gX3JlZjYuYXNwZWN0UmF0aW8sXG4gICAgaW1hZ2VOYXR1cmFsV2lkdGggPSBfcmVmNi5uYXR1cmFsV2lkdGgsXG4gICAgaW1hZ2VOYXR1cmFsSGVpZ2h0ID0gX3JlZjYubmF0dXJhbEhlaWdodCxcbiAgICBfcmVmNiRyb3RhdGUgPSBfcmVmNi5yb3RhdGUsXG4gICAgcm90YXRlID0gX3JlZjYkcm90YXRlID09PSB2b2lkIDAgPyAwIDogX3JlZjYkcm90YXRlLFxuICAgIF9yZWY2JHNjYWxlWCA9IF9yZWY2LnNjYWxlWCxcbiAgICBzY2FsZVggPSBfcmVmNiRzY2FsZVggPT09IHZvaWQgMCA/IDEgOiBfcmVmNiRzY2FsZVgsXG4gICAgX3JlZjYkc2NhbGVZID0gX3JlZjYuc2NhbGVZLFxuICAgIHNjYWxlWSA9IF9yZWY2JHNjYWxlWSA9PT0gdm9pZCAwID8gMSA6IF9yZWY2JHNjYWxlWTtcbiAgdmFyIGFzcGVjdFJhdGlvID0gX3JlZjcuYXNwZWN0UmF0aW8sXG4gICAgbmF0dXJhbFdpZHRoID0gX3JlZjcubmF0dXJhbFdpZHRoLFxuICAgIG5hdHVyYWxIZWlnaHQgPSBfcmVmNy5uYXR1cmFsSGVpZ2h0O1xuICB2YXIgX3JlZjgkZmlsbENvbG9yID0gX3JlZjguZmlsbENvbG9yLFxuICAgIGZpbGxDb2xvciA9IF9yZWY4JGZpbGxDb2xvciA9PT0gdm9pZCAwID8gJ3RyYW5zcGFyZW50JyA6IF9yZWY4JGZpbGxDb2xvcixcbiAgICBfcmVmOCRpbWFnZVNtb290aGluZ0UgPSBfcmVmOC5pbWFnZVNtb290aGluZ0VuYWJsZWQsXG4gICAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gX3JlZjgkaW1hZ2VTbW9vdGhpbmdFID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjgkaW1hZ2VTbW9vdGhpbmdFLFxuICAgIF9yZWY4JGltYWdlU21vb3RoaW5nUSA9IF9yZWY4LmltYWdlU21vb3RoaW5nUXVhbGl0eSxcbiAgICBpbWFnZVNtb290aGluZ1F1YWxpdHkgPSBfcmVmOCRpbWFnZVNtb290aGluZ1EgPT09IHZvaWQgMCA/ICdsb3cnIDogX3JlZjgkaW1hZ2VTbW9vdGhpbmdRLFxuICAgIF9yZWY4JG1heFdpZHRoID0gX3JlZjgubWF4V2lkdGgsXG4gICAgbWF4V2lkdGggPSBfcmVmOCRtYXhXaWR0aCA9PT0gdm9pZCAwID8gSW5maW5pdHkgOiBfcmVmOCRtYXhXaWR0aCxcbiAgICBfcmVmOCRtYXhIZWlnaHQgPSBfcmVmOC5tYXhIZWlnaHQsXG4gICAgbWF4SGVpZ2h0ID0gX3JlZjgkbWF4SGVpZ2h0ID09PSB2b2lkIDAgPyBJbmZpbml0eSA6IF9yZWY4JG1heEhlaWdodCxcbiAgICBfcmVmOCRtaW5XaWR0aCA9IF9yZWY4Lm1pbldpZHRoLFxuICAgIG1pbldpZHRoID0gX3JlZjgkbWluV2lkdGggPT09IHZvaWQgMCA/IDAgOiBfcmVmOCRtaW5XaWR0aCxcbiAgICBfcmVmOCRtaW5IZWlnaHQgPSBfcmVmOC5taW5IZWlnaHQsXG4gICAgbWluSGVpZ2h0ID0gX3JlZjgkbWluSGVpZ2h0ID09PSB2b2lkIDAgPyAwIDogX3JlZjgkbWluSGVpZ2h0O1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIHZhciBtYXhTaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgaGVpZ2h0OiBtYXhIZWlnaHRcbiAgfSk7XG4gIHZhciBtaW5TaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICB3aWR0aDogbWluV2lkdGgsXG4gICAgaGVpZ2h0OiBtaW5IZWlnaHRcbiAgfSwgJ2NvdmVyJyk7XG4gIHZhciB3aWR0aCA9IE1hdGgubWluKG1heFNpemVzLndpZHRoLCBNYXRoLm1heChtaW5TaXplcy53aWR0aCwgbmF0dXJhbFdpZHRoKSk7XG4gIHZhciBoZWlnaHQgPSBNYXRoLm1pbihtYXhTaXplcy5oZWlnaHQsIE1hdGgubWF4KG1pblNpemVzLmhlaWdodCwgbmF0dXJhbEhlaWdodCkpO1xuXG4gIC8vIE5vdGU6IHNob3VsZCBhbHdheXMgdXNlIGltYWdlJ3MgbmF0dXJhbCBzaXplcyBmb3IgZHJhd2luZyBhc1xuICAvLyBpbWFnZURhdGEubmF0dXJhbFdpZHRoID09PSBjYW52YXNEYXRhLm5hdHVyYWxIZWlnaHQgd2hlbiByb3RhdGUgJSAxODAgPT09IDkwXG4gIHZhciBkZXN0TWF4U2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICBhc3BlY3RSYXRpbzogaW1hZ2VBc3BlY3RSYXRpbyxcbiAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgaGVpZ2h0OiBtYXhIZWlnaHRcbiAgfSk7XG4gIHZhciBkZXN0TWluU2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICBhc3BlY3RSYXRpbzogaW1hZ2VBc3BlY3RSYXRpbyxcbiAgICB3aWR0aDogbWluV2lkdGgsXG4gICAgaGVpZ2h0OiBtaW5IZWlnaHRcbiAgfSwgJ2NvdmVyJyk7XG4gIHZhciBkZXN0V2lkdGggPSBNYXRoLm1pbihkZXN0TWF4U2l6ZXMud2lkdGgsIE1hdGgubWF4KGRlc3RNaW5TaXplcy53aWR0aCwgaW1hZ2VOYXR1cmFsV2lkdGgpKTtcbiAgdmFyIGRlc3RIZWlnaHQgPSBNYXRoLm1pbihkZXN0TWF4U2l6ZXMuaGVpZ2h0LCBNYXRoLm1heChkZXN0TWluU2l6ZXMuaGVpZ2h0LCBpbWFnZU5hdHVyYWxIZWlnaHQpKTtcbiAgdmFyIHBhcmFtcyA9IFstZGVzdFdpZHRoIC8gMiwgLWRlc3RIZWlnaHQgLyAyLCBkZXN0V2lkdGgsIGRlc3RIZWlnaHRdO1xuICBjYW52YXMud2lkdGggPSBub3JtYWxpemVEZWNpbWFsTnVtYmVyKHdpZHRoKTtcbiAgY2FudmFzLmhlaWdodCA9IG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIoaGVpZ2h0KTtcbiAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsQ29sb3I7XG4gIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIGNvbnRleHQuc2F2ZSgpO1xuICBjb250ZXh0LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xuICBjb250ZXh0LnJvdGF0ZShyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgY29udGV4dC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XG4gIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gaW1hZ2VTbW9vdGhpbmdFbmFibGVkO1xuICBjb250ZXh0LmltYWdlU21vb3RoaW5nUXVhbGl0eSA9IGltYWdlU21vb3RoaW5nUXVhbGl0eTtcbiAgY29udGV4dC5kcmF3SW1hZ2UuYXBwbHkoY29udGV4dCwgW2ltYWdlXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHBhcmFtcy5tYXAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3Iobm9ybWFsaXplRGVjaW1hbE51bWJlcihwYXJhbSkpO1xuICB9KSkpKTtcbiAgY29udGV4dC5yZXN0b3JlKCk7XG4gIHJldHVybiBjYW52YXM7XG59XG52YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcblxuLyoqXG4gKiBHZXQgc3RyaW5nIGZyb20gY2hhciBjb2RlIGluIGRhdGEgdmlldy5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IGRhdGFWaWV3IC0gVGhlIGRhdGEgdmlldyBmb3IgcmVhZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFRoZSBzdGFydCBpbmRleC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSBUaGUgcmVhZCBsZW5ndGguXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVhZCByZXN1bHQuXG4gKi9cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21DaGFyQ29kZShkYXRhVmlldywgc3RhcnQsIGxlbmd0aCkge1xuICB2YXIgc3RyID0gJyc7XG4gIGxlbmd0aCArPSBzdGFydDtcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzdHIgKz0gZnJvbUNoYXJDb2RlKGRhdGFWaWV3LmdldFVpbnQ4KGkpKTtcbiAgfVxuICByZXR1cm4gc3RyO1xufVxudmFyIFJFR0VYUF9EQVRBX1VSTF9IRUFEID0gL15kYXRhOi4qLC87XG5cbi8qKlxuICogVHJhbnNmb3JtIERhdGEgVVJMIHRvIGFycmF5IGJ1ZmZlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhVVJMIC0gVGhlIERhdGEgVVJMIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gVGhlIHJlc3VsdCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGRhdGFVUkxUb0FycmF5QnVmZmVyKGRhdGFVUkwpIHtcbiAgdmFyIGJhc2U2NCA9IGRhdGFVUkwucmVwbGFjZShSRUdFWFBfREFUQV9VUkxfSEVBRCwgJycpO1xuICB2YXIgYmluYXJ5ID0gYXRvYihiYXNlNjQpO1xuICB2YXIgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYmluYXJ5Lmxlbmd0aCk7XG4gIHZhciB1aW50OCA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgZm9yRWFjaCh1aW50OCwgZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgdWludDhbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgfSk7XG4gIHJldHVybiBhcnJheUJ1ZmZlcjtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYXJyYXkgYnVmZmVyIHRvIERhdGEgVVJMLlxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgLSBUaGUgYXJyYXkgYnVmZmVyIHRvIHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtaW1lVHlwZSAtIFRoZSBtaW1lIHR5cGUgb2YgdGhlIERhdGEgVVJMLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlc3VsdCBEYXRhIFVSTC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0RhdGFVUkwoYXJyYXlCdWZmZXIsIG1pbWVUeXBlKSB7XG4gIHZhciBjaHVua3MgPSBbXTtcblxuICAvLyBDaHVuayBUeXBlZCBBcnJheSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlICgjNDM1KVxuICB2YXIgY2h1bmtTaXplID0gODE5MjtcbiAgdmFyIHVpbnQ4ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICB3aGlsZSAodWludDgubGVuZ3RoID4gMCkge1xuICAgIC8vIFhYWDogQmFiZWwncyBgdG9Db25zdW1hYmxlQXJyYXlgIGhlbHBlciB3aWxsIHRocm93IGVycm9yIGluIElFIG9yIFNhZmFyaSA5XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICBjaHVua3MucHVzaChmcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdG9BcnJheSh1aW50OC5zdWJhcnJheSgwLCBjaHVua1NpemUpKSkpO1xuICAgIHVpbnQ4ID0gdWludDguc3ViYXJyYXkoY2h1bmtTaXplKTtcbiAgfVxuICByZXR1cm4gXCJkYXRhOlwiLmNvbmNhdChtaW1lVHlwZSwgXCI7YmFzZTY0LFwiKS5jb25jYXQoYnRvYShjaHVua3Muam9pbignJykpKTtcbn1cblxuLyoqXG4gKiBHZXQgb3JpZW50YXRpb24gdmFsdWUgZnJvbSBnaXZlbiBhcnJheSBidWZmZXIuXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gcmVhZC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZWFkIG9yaWVudGF0aW9uIHZhbHVlLlxuICovXG5mdW5jdGlvbiByZXNldEFuZEdldE9yaWVudGF0aW9uKGFycmF5QnVmZmVyKSB7XG4gIHZhciBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhhcnJheUJ1ZmZlcik7XG4gIHZhciBvcmllbnRhdGlvbjtcblxuICAvLyBJZ25vcmVzIHJhbmdlIGVycm9yIHdoZW4gdGhlIGltYWdlIGRvZXMgbm90IGhhdmUgY29ycmVjdCBFeGlmIGluZm9ybWF0aW9uXG4gIHRyeSB7XG4gICAgdmFyIGxpdHRsZUVuZGlhbjtcbiAgICB2YXIgYXBwMVN0YXJ0O1xuICAgIHZhciBpZmRTdGFydDtcblxuICAgIC8vIE9ubHkgaGFuZGxlIEpQRUcgaW1hZ2UgKHN0YXJ0IGJ5IDB4RkZEOClcbiAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDgoMCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgoMSkgPT09IDB4RDgpIHtcbiAgICAgIHZhciBsZW5ndGggPSBkYXRhVmlldy5ieXRlTGVuZ3RoO1xuICAgICAgdmFyIG9mZnNldCA9IDI7XG4gICAgICB3aGlsZSAob2Zmc2V0ICsgMSA8IGxlbmd0aCkge1xuICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KSA9PT0gMHhGRiAmJiBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQgKyAxKSA9PT0gMHhFMSkge1xuICAgICAgICAgIGFwcDFTdGFydCA9IG9mZnNldDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFwcDFTdGFydCkge1xuICAgICAgdmFyIGV4aWZJRENvZGUgPSBhcHAxU3RhcnQgKyA0O1xuICAgICAgdmFyIHRpZmZPZmZzZXQgPSBhcHAxU3RhcnQgKyAxMDtcbiAgICAgIGlmIChnZXRTdHJpbmdGcm9tQ2hhckNvZGUoZGF0YVZpZXcsIGV4aWZJRENvZGUsIDQpID09PSAnRXhpZicpIHtcbiAgICAgICAgdmFyIGVuZGlhbm5lc3MgPSBkYXRhVmlldy5nZXRVaW50MTYodGlmZk9mZnNldCk7XG4gICAgICAgIGxpdHRsZUVuZGlhbiA9IGVuZGlhbm5lc3MgPT09IDB4NDk0OTtcbiAgICAgICAgaWYgKGxpdHRsZUVuZGlhbiB8fCBlbmRpYW5uZXNzID09PSAweDRENEQgLyogYmlnRW5kaWFuICovKSB7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0ICsgMiwgbGl0dGxlRW5kaWFuKSA9PT0gMHgwMDJBKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3RJRkRPZmZzZXQgPSBkYXRhVmlldy5nZXRVaW50MzIodGlmZk9mZnNldCArIDQsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICBpZiAoZmlyc3RJRkRPZmZzZXQgPj0gMHgwMDAwMDAwOCkge1xuICAgICAgICAgICAgICBpZmRTdGFydCA9IHRpZmZPZmZzZXQgKyBmaXJzdElGRE9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlmZFN0YXJ0KSB7XG4gICAgICB2YXIgX2xlbmd0aCA9IGRhdGFWaWV3LmdldFVpbnQxNihpZmRTdGFydCwgbGl0dGxlRW5kaWFuKTtcbiAgICAgIHZhciBfb2Zmc2V0O1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgX2xlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIF9vZmZzZXQgPSBpZmRTdGFydCArIGkgKiAxMiArIDI7XG4gICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50MTYoX29mZnNldCwgbGl0dGxlRW5kaWFuKSA9PT0gMHgwMTEyIC8qIE9yaWVudGF0aW9uICovKSB7XG4gICAgICAgICAgLy8gOCBpcyB0aGUgb2Zmc2V0IG9mIHRoZSBjdXJyZW50IHRhZydzIHZhbHVlXG4gICAgICAgICAgX29mZnNldCArPSA4O1xuXG4gICAgICAgICAgLy8gR2V0IHRoZSBvcmlnaW5hbCBvcmllbnRhdGlvbiB2YWx1ZVxuICAgICAgICAgIG9yaWVudGF0aW9uID0gZGF0YVZpZXcuZ2V0VWludDE2KF9vZmZzZXQsIGxpdHRsZUVuZGlhbik7XG5cbiAgICAgICAgICAvLyBPdmVycmlkZSB0aGUgb3JpZW50YXRpb24gd2l0aCBpdHMgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNihfb2Zmc2V0LCAxLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIG9yaWVudGF0aW9uID0gMTtcbiAgfVxuICByZXR1cm4gb3JpZW50YXRpb247XG59XG5cbi8qKlxuICogUGFyc2UgRXhpZiBPcmllbnRhdGlvbiB2YWx1ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcmllbnRhdGlvbiAtIFRoZSBvcmllbnRhdGlvbiB0byBwYXJzZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwYXJzZWQgcmVzdWx0LlxuICovXG5mdW5jdGlvbiBwYXJzZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIHZhciByb3RhdGUgPSAwO1xuICB2YXIgc2NhbGVYID0gMTtcbiAgdmFyIHNjYWxlWSA9IDE7XG4gIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAvLyBGbGlwIGhvcml6b250YWxcbiAgICBjYXNlIDI6XG4gICAgICBzY2FsZVggPSAtMTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gUm90YXRlIGxlZnQgMTgwXHUwMEIwXG4gICAgY2FzZSAzOlxuICAgICAgcm90YXRlID0gLTE4MDtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gRmxpcCB2ZXJ0aWNhbFxuICAgIGNhc2UgNDpcbiAgICAgIHNjYWxlWSA9IC0xO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBGbGlwIHZlcnRpY2FsIGFuZCByb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICBjYXNlIDU6XG4gICAgICByb3RhdGUgPSA5MDtcbiAgICAgIHNjYWxlWSA9IC0xO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBSb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICBjYXNlIDY6XG4gICAgICByb3RhdGUgPSA5MDtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gRmxpcCBob3Jpem9udGFsIGFuZCByb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICBjYXNlIDc6XG4gICAgICByb3RhdGUgPSA5MDtcbiAgICAgIHNjYWxlWCA9IC0xO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBSb3RhdGUgbGVmdCA5MFx1MDBCMFxuICAgIGNhc2UgODpcbiAgICAgIHJvdGF0ZSA9IC05MDtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiB7XG4gICAgcm90YXRlOiByb3RhdGUsXG4gICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgc2NhbGVZOiBzY2FsZVlcbiAgfTtcbn1cblxudmFyIHJlbmRlciA9IHtcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdGhpcy5pbml0Q29udGFpbmVyKCk7XG4gICAgdGhpcy5pbml0Q2FudmFzKCk7XG4gICAgdGhpcy5pbml0Q3JvcEJveCgpO1xuICAgIHRoaXMucmVuZGVyQ2FudmFzKCk7XG4gICAgaWYgKHRoaXMuY3JvcHBlZCkge1xuICAgICAgdGhpcy5yZW5kZXJDcm9wQm94KCk7XG4gICAgfVxuICB9LFxuICBpbml0Q29udGFpbmVyOiBmdW5jdGlvbiBpbml0Q29udGFpbmVyKCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLFxuICAgICAgY3JvcHBlciA9IHRoaXMuY3JvcHBlcjtcbiAgICB2YXIgbWluV2lkdGggPSBOdW1iZXIob3B0aW9ucy5taW5Db250YWluZXJXaWR0aCk7XG4gICAgdmFyIG1pbkhlaWdodCA9IE51bWJlcihvcHRpb25zLm1pbkNvbnRhaW5lckhlaWdodCk7XG4gICAgYWRkQ2xhc3MoY3JvcHBlciwgQ0xBU1NfSElEREVOKTtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBDTEFTU19ISURERU4pO1xuICAgIHZhciBjb250YWluZXJEYXRhID0ge1xuICAgICAgd2lkdGg6IE1hdGgubWF4KGNvbnRhaW5lci5vZmZzZXRXaWR0aCwgbWluV2lkdGggPj0gMCA/IG1pbldpZHRoIDogTUlOX0NPTlRBSU5FUl9XSURUSCksXG4gICAgICBoZWlnaHQ6IE1hdGgubWF4KGNvbnRhaW5lci5vZmZzZXRIZWlnaHQsIG1pbkhlaWdodCA+PSAwID8gbWluSGVpZ2h0IDogTUlOX0NPTlRBSU5FUl9IRUlHSFQpXG4gICAgfTtcbiAgICB0aGlzLmNvbnRhaW5lckRhdGEgPSBjb250YWluZXJEYXRhO1xuICAgIHNldFN0eWxlKGNyb3BwZXIsIHtcbiAgICAgIHdpZHRoOiBjb250YWluZXJEYXRhLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXJEYXRhLmhlaWdodFxuICAgIH0pO1xuICAgIGFkZENsYXNzKGVsZW1lbnQsIENMQVNTX0hJRERFTik7XG4gICAgcmVtb3ZlQ2xhc3MoY3JvcHBlciwgQ0xBU1NfSElEREVOKTtcbiAgfSxcbiAgLy8gQ2FudmFzIChpbWFnZSB3cmFwcGVyKVxuICBpbml0Q2FudmFzOiBmdW5jdGlvbiBpbml0Q2FudmFzKCkge1xuICAgIHZhciBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhLFxuICAgICAgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGE7XG4gICAgdmFyIHZpZXdNb2RlID0gdGhpcy5vcHRpb25zLnZpZXdNb2RlO1xuICAgIHZhciByb3RhdGVkID0gTWF0aC5hYnMoaW1hZ2VEYXRhLnJvdGF0ZSkgJSAxODAgPT09IDkwO1xuICAgIHZhciBuYXR1cmFsV2lkdGggPSByb3RhdGVkID8gaW1hZ2VEYXRhLm5hdHVyYWxIZWlnaHQgOiBpbWFnZURhdGEubmF0dXJhbFdpZHRoO1xuICAgIHZhciBuYXR1cmFsSGVpZ2h0ID0gcm90YXRlZCA/IGltYWdlRGF0YS5uYXR1cmFsV2lkdGggOiBpbWFnZURhdGEubmF0dXJhbEhlaWdodDtcbiAgICB2YXIgYXNwZWN0UmF0aW8gPSBuYXR1cmFsV2lkdGggLyBuYXR1cmFsSGVpZ2h0O1xuICAgIHZhciBjYW52YXNXaWR0aCA9IGNvbnRhaW5lckRhdGEud2lkdGg7XG4gICAgdmFyIGNhbnZhc0hlaWdodCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0O1xuICAgIGlmIChjb250YWluZXJEYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvID4gY29udGFpbmVyRGF0YS53aWR0aCkge1xuICAgICAgaWYgKHZpZXdNb2RlID09PSAzKSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gY29udGFpbmVyRGF0YS5oZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IGNvbnRhaW5lckRhdGEud2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZpZXdNb2RlID09PSAzKSB7XG4gICAgICBjYW52YXNIZWlnaHQgPSBjb250YWluZXJEYXRhLndpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbnZhc1dpZHRoID0gY29udGFpbmVyRGF0YS5oZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICB9XG4gICAgdmFyIGNhbnZhc0RhdGEgPSB7XG4gICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICBuYXR1cmFsV2lkdGg6IG5hdHVyYWxXaWR0aCxcbiAgICAgIG5hdHVyYWxIZWlnaHQ6IG5hdHVyYWxIZWlnaHQsXG4gICAgICB3aWR0aDogY2FudmFzV2lkdGgsXG4gICAgICBoZWlnaHQ6IGNhbnZhc0hlaWdodFxuICAgIH07XG4gICAgdGhpcy5jYW52YXNEYXRhID0gY2FudmFzRGF0YTtcbiAgICB0aGlzLmxpbWl0ZWQgPSB2aWV3TW9kZSA9PT0gMSB8fCB2aWV3TW9kZSA9PT0gMjtcbiAgICB0aGlzLmxpbWl0Q2FudmFzKHRydWUsIHRydWUpO1xuICAgIGNhbnZhc0RhdGEud2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChjYW52YXNEYXRhLndpZHRoLCBjYW52YXNEYXRhLm1pbldpZHRoKSwgY2FudmFzRGF0YS5tYXhXaWR0aCk7XG4gICAgY2FudmFzRGF0YS5oZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChjYW52YXNEYXRhLmhlaWdodCwgY2FudmFzRGF0YS5taW5IZWlnaHQpLCBjYW52YXNEYXRhLm1heEhlaWdodCk7XG4gICAgY2FudmFzRGF0YS5sZWZ0ID0gKGNvbnRhaW5lckRhdGEud2lkdGggLSBjYW52YXNEYXRhLndpZHRoKSAvIDI7XG4gICAgY2FudmFzRGF0YS50b3AgPSAoY29udGFpbmVyRGF0YS5oZWlnaHQgLSBjYW52YXNEYXRhLmhlaWdodCkgLyAyO1xuICAgIGNhbnZhc0RhdGEub2xkTGVmdCA9IGNhbnZhc0RhdGEubGVmdDtcbiAgICBjYW52YXNEYXRhLm9sZFRvcCA9IGNhbnZhc0RhdGEudG9wO1xuICAgIHRoaXMuaW5pdGlhbENhbnZhc0RhdGEgPSBhc3NpZ24oe30sIGNhbnZhc0RhdGEpO1xuICB9LFxuICBsaW1pdENhbnZhczogZnVuY3Rpb24gbGltaXRDYW52YXMoc2l6ZUxpbWl0ZWQsIHBvc2l0aW9uTGltaXRlZCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgY29udGFpbmVyRGF0YSA9IHRoaXMuY29udGFpbmVyRGF0YSxcbiAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG4gICAgdmFyIHZpZXdNb2RlID0gb3B0aW9ucy52aWV3TW9kZTtcbiAgICB2YXIgYXNwZWN0UmF0aW8gPSBjYW52YXNEYXRhLmFzcGVjdFJhdGlvO1xuICAgIHZhciBjcm9wcGVkID0gdGhpcy5jcm9wcGVkICYmIGNyb3BCb3hEYXRhO1xuICAgIGlmIChzaXplTGltaXRlZCkge1xuICAgICAgdmFyIG1pbkNhbnZhc1dpZHRoID0gTnVtYmVyKG9wdGlvbnMubWluQ2FudmFzV2lkdGgpIHx8IDA7XG4gICAgICB2YXIgbWluQ2FudmFzSGVpZ2h0ID0gTnVtYmVyKG9wdGlvbnMubWluQ2FudmFzSGVpZ2h0KSB8fCAwO1xuICAgICAgaWYgKHZpZXdNb2RlID4gMSkge1xuICAgICAgICBtaW5DYW52YXNXaWR0aCA9IE1hdGgubWF4KG1pbkNhbnZhc1dpZHRoLCBjb250YWluZXJEYXRhLndpZHRoKTtcbiAgICAgICAgbWluQ2FudmFzSGVpZ2h0ID0gTWF0aC5tYXgobWluQ2FudmFzSGVpZ2h0LCBjb250YWluZXJEYXRhLmhlaWdodCk7XG4gICAgICAgIGlmICh2aWV3TW9kZSA9PT0gMykge1xuICAgICAgICAgIGlmIChtaW5DYW52YXNIZWlnaHQgKiBhc3BlY3RSYXRpbyA+IG1pbkNhbnZhc1dpZHRoKSB7XG4gICAgICAgICAgICBtaW5DYW52YXNXaWR0aCA9IG1pbkNhbnZhc0hlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBtaW5DYW52YXNXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2aWV3TW9kZSA+IDApIHtcbiAgICAgICAgaWYgKG1pbkNhbnZhc1dpZHRoKSB7XG4gICAgICAgICAgbWluQ2FudmFzV2lkdGggPSBNYXRoLm1heChtaW5DYW52YXNXaWR0aCwgY3JvcHBlZCA/IGNyb3BCb3hEYXRhLndpZHRoIDogMCk7XG4gICAgICAgIH0gZWxzZSBpZiAobWluQ2FudmFzSGVpZ2h0KSB7XG4gICAgICAgICAgbWluQ2FudmFzSGVpZ2h0ID0gTWF0aC5tYXgobWluQ2FudmFzSGVpZ2h0LCBjcm9wcGVkID8gY3JvcEJveERhdGEuaGVpZ2h0IDogMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3JvcHBlZCkge1xuICAgICAgICAgIG1pbkNhbnZhc1dpZHRoID0gY3JvcEJveERhdGEud2lkdGg7XG4gICAgICAgICAgbWluQ2FudmFzSGVpZ2h0ID0gY3JvcEJveERhdGEuaGVpZ2h0O1xuICAgICAgICAgIGlmIChtaW5DYW52YXNIZWlnaHQgKiBhc3BlY3RSYXRpbyA+IG1pbkNhbnZhc1dpZHRoKSB7XG4gICAgICAgICAgICBtaW5DYW52YXNXaWR0aCA9IG1pbkNhbnZhc0hlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBtaW5DYW52YXNXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgd2lkdGg6IG1pbkNhbnZhc1dpZHRoLFxuICAgICAgICBoZWlnaHQ6IG1pbkNhbnZhc0hlaWdodFxuICAgICAgfSk7XG4gICAgICBtaW5DYW52YXNXaWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzLndpZHRoO1xuICAgICAgbWluQ2FudmFzSGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXMuaGVpZ2h0O1xuICAgICAgY2FudmFzRGF0YS5taW5XaWR0aCA9IG1pbkNhbnZhc1dpZHRoO1xuICAgICAgY2FudmFzRGF0YS5taW5IZWlnaHQgPSBtaW5DYW52YXNIZWlnaHQ7XG4gICAgICBjYW52YXNEYXRhLm1heFdpZHRoID0gSW5maW5pdHk7XG4gICAgICBjYW52YXNEYXRhLm1heEhlaWdodCA9IEluZmluaXR5O1xuICAgIH1cbiAgICBpZiAocG9zaXRpb25MaW1pdGVkKSB7XG4gICAgICBpZiAodmlld01vZGUgPiAoY3JvcHBlZCA/IDAgOiAxKSkge1xuICAgICAgICB2YXIgbmV3Q2FudmFzTGVmdCA9IGNvbnRhaW5lckRhdGEud2lkdGggLSBjYW52YXNEYXRhLndpZHRoO1xuICAgICAgICB2YXIgbmV3Q2FudmFzVG9wID0gY29udGFpbmVyRGF0YS5oZWlnaHQgLSBjYW52YXNEYXRhLmhlaWdodDtcbiAgICAgICAgY2FudmFzRGF0YS5taW5MZWZ0ID0gTWF0aC5taW4oMCwgbmV3Q2FudmFzTGVmdCk7XG4gICAgICAgIGNhbnZhc0RhdGEubWluVG9wID0gTWF0aC5taW4oMCwgbmV3Q2FudmFzVG9wKTtcbiAgICAgICAgY2FudmFzRGF0YS5tYXhMZWZ0ID0gTWF0aC5tYXgoMCwgbmV3Q2FudmFzTGVmdCk7XG4gICAgICAgIGNhbnZhc0RhdGEubWF4VG9wID0gTWF0aC5tYXgoMCwgbmV3Q2FudmFzVG9wKTtcbiAgICAgICAgaWYgKGNyb3BwZWQgJiYgdGhpcy5saW1pdGVkKSB7XG4gICAgICAgICAgY2FudmFzRGF0YS5taW5MZWZ0ID0gTWF0aC5taW4oY3JvcEJveERhdGEubGVmdCwgY3JvcEJveERhdGEubGVmdCArIChjcm9wQm94RGF0YS53aWR0aCAtIGNhbnZhc0RhdGEud2lkdGgpKTtcbiAgICAgICAgICBjYW52YXNEYXRhLm1pblRvcCA9IE1hdGgubWluKGNyb3BCb3hEYXRhLnRvcCwgY3JvcEJveERhdGEudG9wICsgKGNyb3BCb3hEYXRhLmhlaWdodCAtIGNhbnZhc0RhdGEuaGVpZ2h0KSk7XG4gICAgICAgICAgY2FudmFzRGF0YS5tYXhMZWZ0ID0gY3JvcEJveERhdGEubGVmdDtcbiAgICAgICAgICBjYW52YXNEYXRhLm1heFRvcCA9IGNyb3BCb3hEYXRhLnRvcDtcbiAgICAgICAgICBpZiAodmlld01vZGUgPT09IDIpIHtcbiAgICAgICAgICAgIGlmIChjYW52YXNEYXRhLndpZHRoID49IGNvbnRhaW5lckRhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgY2FudmFzRGF0YS5taW5MZWZ0ID0gTWF0aC5taW4oMCwgbmV3Q2FudmFzTGVmdCk7XG4gICAgICAgICAgICAgIGNhbnZhc0RhdGEubWF4TGVmdCA9IE1hdGgubWF4KDAsIG5ld0NhbnZhc0xlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbnZhc0RhdGEuaGVpZ2h0ID49IGNvbnRhaW5lckRhdGEuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgIGNhbnZhc0RhdGEubWluVG9wID0gTWF0aC5taW4oMCwgbmV3Q2FudmFzVG9wKTtcbiAgICAgICAgICAgICAgY2FudmFzRGF0YS5tYXhUb3AgPSBNYXRoLm1heCgwLCBuZXdDYW52YXNUb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FudmFzRGF0YS5taW5MZWZ0ID0gLWNhbnZhc0RhdGEud2lkdGg7XG4gICAgICAgIGNhbnZhc0RhdGEubWluVG9wID0gLWNhbnZhc0RhdGEuaGVpZ2h0O1xuICAgICAgICBjYW52YXNEYXRhLm1heExlZnQgPSBjb250YWluZXJEYXRhLndpZHRoO1xuICAgICAgICBjYW52YXNEYXRhLm1heFRvcCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmVuZGVyQ2FudmFzOiBmdW5jdGlvbiByZW5kZXJDYW52YXMoY2hhbmdlZCwgdHJhbnNmb3JtZWQpIHtcbiAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YSxcbiAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuICAgIGlmICh0cmFuc2Zvcm1lZCkge1xuICAgICAgdmFyIF9nZXRSb3RhdGVkU2l6ZXMgPSBnZXRSb3RhdGVkU2l6ZXMoe1xuICAgICAgICAgIHdpZHRoOiBpbWFnZURhdGEubmF0dXJhbFdpZHRoICogTWF0aC5hYnMoaW1hZ2VEYXRhLnNjYWxlWCB8fCAxKSxcbiAgICAgICAgICBoZWlnaHQ6IGltYWdlRGF0YS5uYXR1cmFsSGVpZ2h0ICogTWF0aC5hYnMoaW1hZ2VEYXRhLnNjYWxlWSB8fCAxKSxcbiAgICAgICAgICBkZWdyZWU6IGltYWdlRGF0YS5yb3RhdGUgfHwgMFxuICAgICAgICB9KSxcbiAgICAgICAgbmF0dXJhbFdpZHRoID0gX2dldFJvdGF0ZWRTaXplcy53aWR0aCxcbiAgICAgICAgbmF0dXJhbEhlaWdodCA9IF9nZXRSb3RhdGVkU2l6ZXMuaGVpZ2h0O1xuICAgICAgdmFyIHdpZHRoID0gY2FudmFzRGF0YS53aWR0aCAqIChuYXR1cmFsV2lkdGggLyBjYW52YXNEYXRhLm5hdHVyYWxXaWR0aCk7XG4gICAgICB2YXIgaGVpZ2h0ID0gY2FudmFzRGF0YS5oZWlnaHQgKiAobmF0dXJhbEhlaWdodCAvIGNhbnZhc0RhdGEubmF0dXJhbEhlaWdodCk7XG4gICAgICBjYW52YXNEYXRhLmxlZnQgLT0gKHdpZHRoIC0gY2FudmFzRGF0YS53aWR0aCkgLyAyO1xuICAgICAgY2FudmFzRGF0YS50b3AgLT0gKGhlaWdodCAtIGNhbnZhc0RhdGEuaGVpZ2h0KSAvIDI7XG4gICAgICBjYW52YXNEYXRhLndpZHRoID0gd2lkdGg7XG4gICAgICBjYW52YXNEYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIGNhbnZhc0RhdGEuYXNwZWN0UmF0aW8gPSBuYXR1cmFsV2lkdGggLyBuYXR1cmFsSGVpZ2h0O1xuICAgICAgY2FudmFzRGF0YS5uYXR1cmFsV2lkdGggPSBuYXR1cmFsV2lkdGg7XG4gICAgICBjYW52YXNEYXRhLm5hdHVyYWxIZWlnaHQgPSBuYXR1cmFsSGVpZ2h0O1xuICAgICAgdGhpcy5saW1pdENhbnZhcyh0cnVlLCBmYWxzZSk7XG4gICAgfVxuICAgIGlmIChjYW52YXNEYXRhLndpZHRoID4gY2FudmFzRGF0YS5tYXhXaWR0aCB8fCBjYW52YXNEYXRhLndpZHRoIDwgY2FudmFzRGF0YS5taW5XaWR0aCkge1xuICAgICAgY2FudmFzRGF0YS5sZWZ0ID0gY2FudmFzRGF0YS5vbGRMZWZ0O1xuICAgIH1cbiAgICBpZiAoY2FudmFzRGF0YS5oZWlnaHQgPiBjYW52YXNEYXRhLm1heEhlaWdodCB8fCBjYW52YXNEYXRhLmhlaWdodCA8IGNhbnZhc0RhdGEubWluSGVpZ2h0KSB7XG4gICAgICBjYW52YXNEYXRhLnRvcCA9IGNhbnZhc0RhdGEub2xkVG9wO1xuICAgIH1cbiAgICBjYW52YXNEYXRhLndpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgoY2FudmFzRGF0YS53aWR0aCwgY2FudmFzRGF0YS5taW5XaWR0aCksIGNhbnZhc0RhdGEubWF4V2lkdGgpO1xuICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoY2FudmFzRGF0YS5oZWlnaHQsIGNhbnZhc0RhdGEubWluSGVpZ2h0KSwgY2FudmFzRGF0YS5tYXhIZWlnaHQpO1xuICAgIHRoaXMubGltaXRDYW52YXMoZmFsc2UsIHRydWUpO1xuICAgIGNhbnZhc0RhdGEubGVmdCA9IE1hdGgubWluKE1hdGgubWF4KGNhbnZhc0RhdGEubGVmdCwgY2FudmFzRGF0YS5taW5MZWZ0KSwgY2FudmFzRGF0YS5tYXhMZWZ0KTtcbiAgICBjYW52YXNEYXRhLnRvcCA9IE1hdGgubWluKE1hdGgubWF4KGNhbnZhc0RhdGEudG9wLCBjYW52YXNEYXRhLm1pblRvcCksIGNhbnZhc0RhdGEubWF4VG9wKTtcbiAgICBjYW52YXNEYXRhLm9sZExlZnQgPSBjYW52YXNEYXRhLmxlZnQ7XG4gICAgY2FudmFzRGF0YS5vbGRUb3AgPSBjYW52YXNEYXRhLnRvcDtcbiAgICBzZXRTdHlsZSh0aGlzLmNhbnZhcywgYXNzaWduKHtcbiAgICAgIHdpZHRoOiBjYW52YXNEYXRhLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjYW52YXNEYXRhLmhlaWdodFxuICAgIH0sIGdldFRyYW5zZm9ybXMoe1xuICAgICAgdHJhbnNsYXRlWDogY2FudmFzRGF0YS5sZWZ0LFxuICAgICAgdHJhbnNsYXRlWTogY2FudmFzRGF0YS50b3BcbiAgICB9KSkpO1xuICAgIHRoaXMucmVuZGVySW1hZ2UoY2hhbmdlZCk7XG4gICAgaWYgKHRoaXMuY3JvcHBlZCAmJiB0aGlzLmxpbWl0ZWQpIHtcbiAgICAgIHRoaXMubGltaXRDcm9wQm94KHRydWUsIHRydWUpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVySW1hZ2U6IGZ1bmN0aW9uIHJlbmRlckltYWdlKGNoYW5nZWQpIHtcbiAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YSxcbiAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuICAgIHZhciB3aWR0aCA9IGltYWdlRGF0YS5uYXR1cmFsV2lkdGggKiAoY2FudmFzRGF0YS53aWR0aCAvIGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoKTtcbiAgICB2YXIgaGVpZ2h0ID0gaW1hZ2VEYXRhLm5hdHVyYWxIZWlnaHQgKiAoY2FudmFzRGF0YS5oZWlnaHQgLyBjYW52YXNEYXRhLm5hdHVyYWxIZWlnaHQpO1xuICAgIGFzc2lnbihpbWFnZURhdGEsIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgbGVmdDogKGNhbnZhc0RhdGEud2lkdGggLSB3aWR0aCkgLyAyLFxuICAgICAgdG9wOiAoY2FudmFzRGF0YS5oZWlnaHQgLSBoZWlnaHQpIC8gMlxuICAgIH0pO1xuICAgIHNldFN0eWxlKHRoaXMuaW1hZ2UsIGFzc2lnbih7XG4gICAgICB3aWR0aDogaW1hZ2VEYXRhLndpZHRoLFxuICAgICAgaGVpZ2h0OiBpbWFnZURhdGEuaGVpZ2h0XG4gICAgfSwgZ2V0VHJhbnNmb3Jtcyhhc3NpZ24oe1xuICAgICAgdHJhbnNsYXRlWDogaW1hZ2VEYXRhLmxlZnQsXG4gICAgICB0cmFuc2xhdGVZOiBpbWFnZURhdGEudG9wXG4gICAgfSwgaW1hZ2VEYXRhKSkpKTtcbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy5vdXRwdXQoKTtcbiAgICB9XG4gIH0sXG4gIGluaXRDcm9wQm94OiBmdW5jdGlvbiBpbml0Q3JvcEJveCgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgdmFyIGFzcGVjdFJhdGlvID0gb3B0aW9ucy5hc3BlY3RSYXRpbyB8fCBvcHRpb25zLmluaXRpYWxBc3BlY3RSYXRpbztcbiAgICB2YXIgYXV0b0Nyb3BBcmVhID0gTnVtYmVyKG9wdGlvbnMuYXV0b0Nyb3BBcmVhKSB8fCAwLjg7XG4gICAgdmFyIGNyb3BCb3hEYXRhID0ge1xuICAgICAgd2lkdGg6IGNhbnZhc0RhdGEud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNhbnZhc0RhdGEuaGVpZ2h0XG4gICAgfTtcbiAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgIGlmIChjYW52YXNEYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvID4gY2FudmFzRGF0YS53aWR0aCkge1xuICAgICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBjcm9wQm94RGF0YS53aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3JvcEJveERhdGEud2lkdGggPSBjcm9wQm94RGF0YS5oZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jcm9wQm94RGF0YSA9IGNyb3BCb3hEYXRhO1xuICAgIHRoaXMubGltaXRDcm9wQm94KHRydWUsIHRydWUpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBhdXRvIGNyb3AgYXJlYVxuICAgIGNyb3BCb3hEYXRhLndpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEud2lkdGgsIGNyb3BCb3hEYXRhLm1pbldpZHRoKSwgY3JvcEJveERhdGEubWF4V2lkdGgpO1xuICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IE1hdGgubWluKE1hdGgubWF4KGNyb3BCb3hEYXRhLmhlaWdodCwgY3JvcEJveERhdGEubWluSGVpZ2h0KSwgY3JvcEJveERhdGEubWF4SGVpZ2h0KTtcblxuICAgIC8vIFRoZSB3aWR0aC9oZWlnaHQgb2YgYXV0byBjcm9wIGFyZWEgbXVzdCBsYXJnZSB0aGFuIFwibWluV2lkdGgvSGVpZ2h0XCJcbiAgICBjcm9wQm94RGF0YS53aWR0aCA9IE1hdGgubWF4KGNyb3BCb3hEYXRhLm1pbldpZHRoLCBjcm9wQm94RGF0YS53aWR0aCAqIGF1dG9Dcm9wQXJlYSk7XG4gICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gTWF0aC5tYXgoY3JvcEJveERhdGEubWluSGVpZ2h0LCBjcm9wQm94RGF0YS5oZWlnaHQgKiBhdXRvQ3JvcEFyZWEpO1xuICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBjYW52YXNEYXRhLmxlZnQgKyAoY2FudmFzRGF0YS53aWR0aCAtIGNyb3BCb3hEYXRhLndpZHRoKSAvIDI7XG4gICAgY3JvcEJveERhdGEudG9wID0gY2FudmFzRGF0YS50b3AgKyAoY2FudmFzRGF0YS5oZWlnaHQgLSBjcm9wQm94RGF0YS5oZWlnaHQpIC8gMjtcbiAgICBjcm9wQm94RGF0YS5vbGRMZWZ0ID0gY3JvcEJveERhdGEubGVmdDtcbiAgICBjcm9wQm94RGF0YS5vbGRUb3AgPSBjcm9wQm94RGF0YS50b3A7XG4gICAgdGhpcy5pbml0aWFsQ3JvcEJveERhdGEgPSBhc3NpZ24oe30sIGNyb3BCb3hEYXRhKTtcbiAgfSxcbiAgbGltaXRDcm9wQm94OiBmdW5jdGlvbiBsaW1pdENyb3BCb3goc2l6ZUxpbWl0ZWQsIHBvc2l0aW9uTGltaXRlZCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgY29udGFpbmVyRGF0YSA9IHRoaXMuY29udGFpbmVyRGF0YSxcbiAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGEsXG4gICAgICBsaW1pdGVkID0gdGhpcy5saW1pdGVkO1xuICAgIHZhciBhc3BlY3RSYXRpbyA9IG9wdGlvbnMuYXNwZWN0UmF0aW87XG4gICAgaWYgKHNpemVMaW1pdGVkKSB7XG4gICAgICB2YXIgbWluQ3JvcEJveFdpZHRoID0gTnVtYmVyKG9wdGlvbnMubWluQ3JvcEJveFdpZHRoKSB8fCAwO1xuICAgICAgdmFyIG1pbkNyb3BCb3hIZWlnaHQgPSBOdW1iZXIob3B0aW9ucy5taW5Dcm9wQm94SGVpZ2h0KSB8fCAwO1xuICAgICAgdmFyIG1heENyb3BCb3hXaWR0aCA9IGxpbWl0ZWQgPyBNYXRoLm1pbihjb250YWluZXJEYXRhLndpZHRoLCBjYW52YXNEYXRhLndpZHRoLCBjYW52YXNEYXRhLndpZHRoICsgY2FudmFzRGF0YS5sZWZ0LCBjb250YWluZXJEYXRhLndpZHRoIC0gY2FudmFzRGF0YS5sZWZ0KSA6IGNvbnRhaW5lckRhdGEud2lkdGg7XG4gICAgICB2YXIgbWF4Q3JvcEJveEhlaWdodCA9IGxpbWl0ZWQgPyBNYXRoLm1pbihjb250YWluZXJEYXRhLmhlaWdodCwgY2FudmFzRGF0YS5oZWlnaHQsIGNhbnZhc0RhdGEuaGVpZ2h0ICsgY2FudmFzRGF0YS50b3AsIGNvbnRhaW5lckRhdGEuaGVpZ2h0IC0gY2FudmFzRGF0YS50b3ApIDogY29udGFpbmVyRGF0YS5oZWlnaHQ7XG5cbiAgICAgIC8vIFRoZSBtaW4vbWF4Q3JvcEJveFdpZHRoL0hlaWdodCBtdXN0IGJlIGxlc3MgdGhhbiBjb250YWluZXIncyB3aWR0aC9oZWlnaHRcbiAgICAgIG1pbkNyb3BCb3hXaWR0aCA9IE1hdGgubWluKG1pbkNyb3BCb3hXaWR0aCwgY29udGFpbmVyRGF0YS53aWR0aCk7XG4gICAgICBtaW5Dcm9wQm94SGVpZ2h0ID0gTWF0aC5taW4obWluQ3JvcEJveEhlaWdodCwgY29udGFpbmVyRGF0YS5oZWlnaHQpO1xuICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgIGlmIChtaW5Dcm9wQm94V2lkdGggJiYgbWluQ3JvcEJveEhlaWdodCkge1xuICAgICAgICAgIGlmIChtaW5Dcm9wQm94SGVpZ2h0ICogYXNwZWN0UmF0aW8gPiBtaW5Dcm9wQm94V2lkdGgpIHtcbiAgICAgICAgICAgIG1pbkNyb3BCb3hIZWlnaHQgPSBtaW5Dcm9wQm94V2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWluQ3JvcEJveFdpZHRoID0gbWluQ3JvcEJveEhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtaW5Dcm9wQm94V2lkdGgpIHtcbiAgICAgICAgICBtaW5Dcm9wQm94SGVpZ2h0ID0gbWluQ3JvcEJveFdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgIH0gZWxzZSBpZiAobWluQ3JvcEJveEhlaWdodCkge1xuICAgICAgICAgIG1pbkNyb3BCb3hXaWR0aCA9IG1pbkNyb3BCb3hIZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4Q3JvcEJveEhlaWdodCAqIGFzcGVjdFJhdGlvID4gbWF4Q3JvcEJveFdpZHRoKSB7XG4gICAgICAgICAgbWF4Q3JvcEJveEhlaWdodCA9IG1heENyb3BCb3hXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1heENyb3BCb3hXaWR0aCA9IG1heENyb3BCb3hIZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgbWluV2lkdGgvSGVpZ2h0IG11c3QgYmUgbGVzcyB0aGFuIG1heFdpZHRoL0hlaWdodFxuICAgICAgY3JvcEJveERhdGEubWluV2lkdGggPSBNYXRoLm1pbihtaW5Dcm9wQm94V2lkdGgsIG1heENyb3BCb3hXaWR0aCk7XG4gICAgICBjcm9wQm94RGF0YS5taW5IZWlnaHQgPSBNYXRoLm1pbihtaW5Dcm9wQm94SGVpZ2h0LCBtYXhDcm9wQm94SGVpZ2h0KTtcbiAgICAgIGNyb3BCb3hEYXRhLm1heFdpZHRoID0gbWF4Q3JvcEJveFdpZHRoO1xuICAgICAgY3JvcEJveERhdGEubWF4SGVpZ2h0ID0gbWF4Q3JvcEJveEhlaWdodDtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uTGltaXRlZCkge1xuICAgICAgaWYgKGxpbWl0ZWQpIHtcbiAgICAgICAgY3JvcEJveERhdGEubWluTGVmdCA9IE1hdGgubWF4KDAsIGNhbnZhc0RhdGEubGVmdCk7XG4gICAgICAgIGNyb3BCb3hEYXRhLm1pblRvcCA9IE1hdGgubWF4KDAsIGNhbnZhc0RhdGEudG9wKTtcbiAgICAgICAgY3JvcEJveERhdGEubWF4TGVmdCA9IE1hdGgubWluKGNvbnRhaW5lckRhdGEud2lkdGgsIGNhbnZhc0RhdGEubGVmdCArIGNhbnZhc0RhdGEud2lkdGgpIC0gY3JvcEJveERhdGEud2lkdGg7XG4gICAgICAgIGNyb3BCb3hEYXRhLm1heFRvcCA9IE1hdGgubWluKGNvbnRhaW5lckRhdGEuaGVpZ2h0LCBjYW52YXNEYXRhLnRvcCArIGNhbnZhc0RhdGEuaGVpZ2h0KSAtIGNyb3BCb3hEYXRhLmhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyb3BCb3hEYXRhLm1pbkxlZnQgPSAwO1xuICAgICAgICBjcm9wQm94RGF0YS5taW5Ub3AgPSAwO1xuICAgICAgICBjcm9wQm94RGF0YS5tYXhMZWZ0ID0gY29udGFpbmVyRGF0YS53aWR0aCAtIGNyb3BCb3hEYXRhLndpZHRoO1xuICAgICAgICBjcm9wQm94RGF0YS5tYXhUb3AgPSBjb250YWluZXJEYXRhLmhlaWdodCAtIGNyb3BCb3hEYXRhLmhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlbmRlckNyb3BCb3g6IGZ1bmN0aW9uIHJlbmRlckNyb3BCb3goKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhLFxuICAgICAgY3JvcEJveERhdGEgPSB0aGlzLmNyb3BCb3hEYXRhO1xuICAgIGlmIChjcm9wQm94RGF0YS53aWR0aCA+IGNyb3BCb3hEYXRhLm1heFdpZHRoIHx8IGNyb3BCb3hEYXRhLndpZHRoIDwgY3JvcEJveERhdGEubWluV2lkdGgpIHtcbiAgICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBjcm9wQm94RGF0YS5vbGRMZWZ0O1xuICAgIH1cbiAgICBpZiAoY3JvcEJveERhdGEuaGVpZ2h0ID4gY3JvcEJveERhdGEubWF4SGVpZ2h0IHx8IGNyb3BCb3hEYXRhLmhlaWdodCA8IGNyb3BCb3hEYXRhLm1pbkhlaWdodCkge1xuICAgICAgY3JvcEJveERhdGEudG9wID0gY3JvcEJveERhdGEub2xkVG9wO1xuICAgIH1cbiAgICBjcm9wQm94RGF0YS53aWR0aCA9IE1hdGgubWluKE1hdGgubWF4KGNyb3BCb3hEYXRhLndpZHRoLCBjcm9wQm94RGF0YS5taW5XaWR0aCksIGNyb3BCb3hEYXRhLm1heFdpZHRoKTtcbiAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChjcm9wQm94RGF0YS5oZWlnaHQsIGNyb3BCb3hEYXRhLm1pbkhlaWdodCksIGNyb3BCb3hEYXRhLm1heEhlaWdodCk7XG4gICAgdGhpcy5saW1pdENyb3BCb3goZmFsc2UsIHRydWUpO1xuICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBNYXRoLm1pbihNYXRoLm1heChjcm9wQm94RGF0YS5sZWZ0LCBjcm9wQm94RGF0YS5taW5MZWZ0KSwgY3JvcEJveERhdGEubWF4TGVmdCk7XG4gICAgY3JvcEJveERhdGEudG9wID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEudG9wLCBjcm9wQm94RGF0YS5taW5Ub3ApLCBjcm9wQm94RGF0YS5tYXhUb3ApO1xuICAgIGNyb3BCb3hEYXRhLm9sZExlZnQgPSBjcm9wQm94RGF0YS5sZWZ0O1xuICAgIGNyb3BCb3hEYXRhLm9sZFRvcCA9IGNyb3BCb3hEYXRhLnRvcDtcbiAgICBpZiAob3B0aW9ucy5tb3ZhYmxlICYmIG9wdGlvbnMuY3JvcEJveE1vdmFibGUpIHtcbiAgICAgIC8vIFR1cm4gdG8gbW92ZSB0aGUgY2FudmFzIHdoZW4gdGhlIGNyb3AgYm94IGlzIGVxdWFsIHRvIHRoZSBjb250YWluZXJcbiAgICAgIHNldERhdGEodGhpcy5mYWNlLCBEQVRBX0FDVElPTiwgY3JvcEJveERhdGEud2lkdGggPj0gY29udGFpbmVyRGF0YS53aWR0aCAmJiBjcm9wQm94RGF0YS5oZWlnaHQgPj0gY29udGFpbmVyRGF0YS5oZWlnaHQgPyBBQ1RJT05fTU9WRSA6IEFDVElPTl9BTEwpO1xuICAgIH1cbiAgICBzZXRTdHlsZSh0aGlzLmNyb3BCb3gsIGFzc2lnbih7XG4gICAgICB3aWR0aDogY3JvcEJveERhdGEud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNyb3BCb3hEYXRhLmhlaWdodFxuICAgIH0sIGdldFRyYW5zZm9ybXMoe1xuICAgICAgdHJhbnNsYXRlWDogY3JvcEJveERhdGEubGVmdCxcbiAgICAgIHRyYW5zbGF0ZVk6IGNyb3BCb3hEYXRhLnRvcFxuICAgIH0pKSk7XG4gICAgaWYgKHRoaXMuY3JvcHBlZCAmJiB0aGlzLmxpbWl0ZWQpIHtcbiAgICAgIHRoaXMubGltaXRDYW52YXModHJ1ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5vdXRwdXQoKTtcbiAgICB9XG4gIH0sXG4gIG91dHB1dDogZnVuY3Rpb24gb3V0cHV0KCkge1xuICAgIHRoaXMucHJldmlldygpO1xuICAgIGRpc3BhdGNoRXZlbnQodGhpcy5lbGVtZW50LCBFVkVOVF9DUk9QLCB0aGlzLmdldERhdGEoKSk7XG4gIH1cbn07XG5cbnZhciBwcmV2aWV3ID0ge1xuICBpbml0UHJldmlldzogZnVuY3Rpb24gaW5pdFByZXZpZXcoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICBjcm9zc09yaWdpbiA9IHRoaXMuY3Jvc3NPcmlnaW47XG4gICAgdmFyIHByZXZpZXcgPSB0aGlzLm9wdGlvbnMucHJldmlldztcbiAgICB2YXIgdXJsID0gY3Jvc3NPcmlnaW4gPyB0aGlzLmNyb3NzT3JpZ2luVXJsIDogdGhpcy51cmw7XG4gICAgdmFyIGFsdCA9IGVsZW1lbnQuYWx0IHx8ICdUaGUgaW1hZ2UgdG8gcHJldmlldyc7XG4gICAgdmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWYgKGNyb3NzT3JpZ2luKSB7XG4gICAgICBpbWFnZS5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuICAgIH1cbiAgICBpbWFnZS5zcmMgPSB1cmw7XG4gICAgaW1hZ2UuYWx0ID0gYWx0O1xuICAgIHRoaXMudmlld0JveC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgdGhpcy52aWV3Qm94SW1hZ2UgPSBpbWFnZTtcbiAgICBpZiAoIXByZXZpZXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHByZXZpZXdzID0gcHJldmlldztcbiAgICBpZiAodHlwZW9mIHByZXZpZXcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwcmV2aWV3cyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHByZXZpZXcpO1xuICAgIH0gZWxzZSBpZiAocHJldmlldy5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICBwcmV2aWV3cyA9IFtwcmV2aWV3XTtcbiAgICB9XG4gICAgdGhpcy5wcmV2aWV3cyA9IHByZXZpZXdzO1xuICAgIGZvckVhY2gocHJldmlld3MsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAvLyBTYXZlIHRoZSBvcmlnaW5hbCBzaXplIGZvciByZWNvdmVyXG4gICAgICBzZXREYXRhKGVsLCBEQVRBX1BSRVZJRVcsIHtcbiAgICAgICAgd2lkdGg6IGVsLm9mZnNldFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVsLm9mZnNldEhlaWdodCxcbiAgICAgICAgaHRtbDogZWwuaW5uZXJIVE1MXG4gICAgICB9KTtcbiAgICAgIGlmIChjcm9zc09yaWdpbikge1xuICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgIH1cbiAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgICBpbWcuYWx0ID0gYWx0O1xuXG4gICAgICAvKipcbiAgICAgICAqIE92ZXJyaWRlIGltZyBlbGVtZW50IHN0eWxlc1xuICAgICAgICogQWRkIGBkaXNwbGF5OmJsb2NrYCB0byBhdm9pZCBtYXJnaW4gdG9wIGlzc3VlXG4gICAgICAgKiBBZGQgYGhlaWdodDphdXRvYCB0byBvdmVycmlkZSBgaGVpZ2h0YCBhdHRyaWJ1dGUgb24gSUU4XG4gICAgICAgKiAoT2NjdXIgb25seSB3aGVuIG1hcmdpbi10b3AgPD0gLWhlaWdodClcbiAgICAgICAqL1xuICAgICAgaW1nLnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTpibG9jazsnICsgJ3dpZHRoOjEwMCU7JyArICdoZWlnaHQ6YXV0bzsnICsgJ21pbi13aWR0aDowIWltcG9ydGFudDsnICsgJ21pbi1oZWlnaHQ6MCFpbXBvcnRhbnQ7JyArICdtYXgtd2lkdGg6bm9uZSFpbXBvcnRhbnQ7JyArICdtYXgtaGVpZ2h0Om5vbmUhaW1wb3J0YW50OycgKyAnaW1hZ2Utb3JpZW50YXRpb246MGRlZyFpbXBvcnRhbnQ7XCInO1xuICAgICAgZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICBlbC5hcHBlbmRDaGlsZChpbWcpO1xuICAgIH0pO1xuICB9LFxuICByZXNldFByZXZpZXc6IGZ1bmN0aW9uIHJlc2V0UHJldmlldygpIHtcbiAgICBmb3JFYWNoKHRoaXMucHJldmlld3MsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB2YXIgZGF0YSA9IGdldERhdGEoZWxlbWVudCwgREFUQV9QUkVWSUVXKTtcbiAgICAgIHNldFN0eWxlKGVsZW1lbnQsIHtcbiAgICAgICAgd2lkdGg6IGRhdGEud2lkdGgsXG4gICAgICAgIGhlaWdodDogZGF0YS5oZWlnaHRcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBkYXRhLmh0bWw7XG4gICAgICByZW1vdmVEYXRhKGVsZW1lbnQsIERBVEFfUFJFVklFVyk7XG4gICAgfSk7XG4gIH0sXG4gIHByZXZpZXc6IGZ1bmN0aW9uIHByZXZpZXcoKSB7XG4gICAgdmFyIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhLFxuICAgICAgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YSxcbiAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YTtcbiAgICB2YXIgY3JvcEJveFdpZHRoID0gY3JvcEJveERhdGEud2lkdGgsXG4gICAgICBjcm9wQm94SGVpZ2h0ID0gY3JvcEJveERhdGEuaGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IGltYWdlRGF0YS53aWR0aCxcbiAgICAgIGhlaWdodCA9IGltYWdlRGF0YS5oZWlnaHQ7XG4gICAgdmFyIGxlZnQgPSBjcm9wQm94RGF0YS5sZWZ0IC0gY2FudmFzRGF0YS5sZWZ0IC0gaW1hZ2VEYXRhLmxlZnQ7XG4gICAgdmFyIHRvcCA9IGNyb3BCb3hEYXRhLnRvcCAtIGNhbnZhc0RhdGEudG9wIC0gaW1hZ2VEYXRhLnRvcDtcbiAgICBpZiAoIXRoaXMuY3JvcHBlZCB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFN0eWxlKHRoaXMudmlld0JveEltYWdlLCBhc3NpZ24oe1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9LCBnZXRUcmFuc2Zvcm1zKGFzc2lnbih7XG4gICAgICB0cmFuc2xhdGVYOiAtbGVmdCxcbiAgICAgIHRyYW5zbGF0ZVk6IC10b3BcbiAgICB9LCBpbWFnZURhdGEpKSkpO1xuICAgIGZvckVhY2godGhpcy5wcmV2aWV3cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHZhciBkYXRhID0gZ2V0RGF0YShlbGVtZW50LCBEQVRBX1BSRVZJRVcpO1xuICAgICAgdmFyIG9yaWdpbmFsV2lkdGggPSBkYXRhLndpZHRoO1xuICAgICAgdmFyIG9yaWdpbmFsSGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgICB2YXIgbmV3V2lkdGggPSBvcmlnaW5hbFdpZHRoO1xuICAgICAgdmFyIG5ld0hlaWdodCA9IG9yaWdpbmFsSGVpZ2h0O1xuICAgICAgdmFyIHJhdGlvID0gMTtcbiAgICAgIGlmIChjcm9wQm94V2lkdGgpIHtcbiAgICAgICAgcmF0aW8gPSBvcmlnaW5hbFdpZHRoIC8gY3JvcEJveFdpZHRoO1xuICAgICAgICBuZXdIZWlnaHQgPSBjcm9wQm94SGVpZ2h0ICogcmF0aW87XG4gICAgICB9XG4gICAgICBpZiAoY3JvcEJveEhlaWdodCAmJiBuZXdIZWlnaHQgPiBvcmlnaW5hbEhlaWdodCkge1xuICAgICAgICByYXRpbyA9IG9yaWdpbmFsSGVpZ2h0IC8gY3JvcEJveEhlaWdodDtcbiAgICAgICAgbmV3V2lkdGggPSBjcm9wQm94V2lkdGggKiByYXRpbztcbiAgICAgICAgbmV3SGVpZ2h0ID0gb3JpZ2luYWxIZWlnaHQ7XG4gICAgICB9XG4gICAgICBzZXRTdHlsZShlbGVtZW50LCB7XG4gICAgICAgIHdpZHRoOiBuZXdXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBuZXdIZWlnaHRcbiAgICAgIH0pO1xuICAgICAgc2V0U3R5bGUoZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0sIGFzc2lnbih7XG4gICAgICAgIHdpZHRoOiB3aWR0aCAqIHJhdGlvLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCAqIHJhdGlvXG4gICAgICB9LCBnZXRUcmFuc2Zvcm1zKGFzc2lnbih7XG4gICAgICAgIHRyYW5zbGF0ZVg6IC1sZWZ0ICogcmF0aW8sXG4gICAgICAgIHRyYW5zbGF0ZVk6IC10b3AgKiByYXRpb1xuICAgICAgfSwgaW1hZ2VEYXRhKSkpKTtcbiAgICB9KTtcbiAgfVxufTtcblxudmFyIGV2ZW50cyA9IHtcbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBjcm9wcGVyID0gdGhpcy5jcm9wcGVyO1xuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcHN0YXJ0KSkge1xuICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9TVEFSVCwgb3B0aW9ucy5jcm9wc3RhcnQpO1xuICAgIH1cbiAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3Btb3ZlKSkge1xuICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9NT1ZFLCBvcHRpb25zLmNyb3Btb3ZlKTtcbiAgICB9XG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wZW5kKSkge1xuICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9FTkQsIG9wdGlvbnMuY3JvcGVuZCk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcCkpIHtcbiAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NST1AsIG9wdGlvbnMuY3JvcCk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuem9vbSkpIHtcbiAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX1pPT00sIG9wdGlvbnMuem9vbSk7XG4gICAgfVxuICAgIGFkZExpc3RlbmVyKGNyb3BwZXIsIEVWRU5UX1BPSU5URVJfRE9XTiwgdGhpcy5vbkNyb3BTdGFydCA9IHRoaXMuY3JvcFN0YXJ0LmJpbmQodGhpcykpO1xuICAgIGlmIChvcHRpb25zLnpvb21hYmxlICYmIG9wdGlvbnMuem9vbU9uV2hlZWwpIHtcbiAgICAgIGFkZExpc3RlbmVyKGNyb3BwZXIsIEVWRU5UX1dIRUVMLCB0aGlzLm9uV2hlZWwgPSB0aGlzLndoZWVsLmJpbmQodGhpcyksIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgIGNhcHR1cmU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy50b2dnbGVEcmFnTW9kZU9uRGJsY2xpY2spIHtcbiAgICAgIGFkZExpc3RlbmVyKGNyb3BwZXIsIEVWRU5UX0RCTENMSUNLLCB0aGlzLm9uRGJsY2xpY2sgPSB0aGlzLmRibGNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBhZGRMaXN0ZW5lcihlbGVtZW50Lm93bmVyRG9jdW1lbnQsIEVWRU5UX1BPSU5URVJfTU9WRSwgdGhpcy5vbkNyb3BNb3ZlID0gdGhpcy5jcm9wTW92ZS5iaW5kKHRoaXMpKTtcbiAgICBhZGRMaXN0ZW5lcihlbGVtZW50Lm93bmVyRG9jdW1lbnQsIEVWRU5UX1BPSU5URVJfVVAsIHRoaXMub25Dcm9wRW5kID0gdGhpcy5jcm9wRW5kLmJpbmQodGhpcykpO1xuICAgIGlmIChvcHRpb25zLnJlc3BvbnNpdmUpIHtcbiAgICAgIGFkZExpc3RlbmVyKHdpbmRvdywgRVZFTlRfUkVTSVpFLCB0aGlzLm9uUmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9LFxuICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBjcm9wcGVyID0gdGhpcy5jcm9wcGVyO1xuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcHN0YXJ0KSkge1xuICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9TVEFSVCwgb3B0aW9ucy5jcm9wc3RhcnQpO1xuICAgIH1cbiAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3Btb3ZlKSkge1xuICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9NT1ZFLCBvcHRpb25zLmNyb3Btb3ZlKTtcbiAgICB9XG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wZW5kKSkge1xuICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9FTkQsIG9wdGlvbnMuY3JvcGVuZCk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcCkpIHtcbiAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NST1AsIG9wdGlvbnMuY3JvcCk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuem9vbSkpIHtcbiAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX1pPT00sIG9wdGlvbnMuem9vbSk7XG4gICAgfVxuICAgIHJlbW92ZUxpc3RlbmVyKGNyb3BwZXIsIEVWRU5UX1BPSU5URVJfRE9XTiwgdGhpcy5vbkNyb3BTdGFydCk7XG4gICAgaWYgKG9wdGlvbnMuem9vbWFibGUgJiYgb3B0aW9ucy56b29tT25XaGVlbCkge1xuICAgICAgcmVtb3ZlTGlzdGVuZXIoY3JvcHBlciwgRVZFTlRfV0hFRUwsIHRoaXMub25XaGVlbCwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRvZ2dsZURyYWdNb2RlT25EYmxjbGljaykge1xuICAgICAgcmVtb3ZlTGlzdGVuZXIoY3JvcHBlciwgRVZFTlRfREJMQ0xJQ0ssIHRoaXMub25EYmxjbGljayk7XG4gICAgfVxuICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQub3duZXJEb2N1bWVudCwgRVZFTlRfUE9JTlRFUl9NT1ZFLCB0aGlzLm9uQ3JvcE1vdmUpO1xuICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQub3duZXJEb2N1bWVudCwgRVZFTlRfUE9JTlRFUl9VUCwgdGhpcy5vbkNyb3BFbmQpO1xuICAgIGlmIChvcHRpb25zLnJlc3BvbnNpdmUpIHtcbiAgICAgIHJlbW92ZUxpc3RlbmVyKHdpbmRvdywgRVZFTlRfUkVTSVpFLCB0aGlzLm9uUmVzaXplKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBoYW5kbGVycyA9IHtcbiAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcixcbiAgICAgIGNvbnRhaW5lckRhdGEgPSB0aGlzLmNvbnRhaW5lckRhdGE7XG4gICAgdmFyIHJhdGlvWCA9IGNvbnRhaW5lci5vZmZzZXRXaWR0aCAvIGNvbnRhaW5lckRhdGEud2lkdGg7XG4gICAgdmFyIHJhdGlvWSA9IGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgLyBjb250YWluZXJEYXRhLmhlaWdodDtcbiAgICB2YXIgcmF0aW8gPSBNYXRoLmFicyhyYXRpb1ggLSAxKSA+IE1hdGguYWJzKHJhdGlvWSAtIDEpID8gcmF0aW9YIDogcmF0aW9ZO1xuXG4gICAgLy8gUmVzaXplIHdoZW4gd2lkdGggY2hhbmdlZCBvciBoZWlnaHQgY2hhbmdlZFxuICAgIGlmIChyYXRpbyAhPT0gMSkge1xuICAgICAgdmFyIGNhbnZhc0RhdGE7XG4gICAgICB2YXIgY3JvcEJveERhdGE7XG4gICAgICBpZiAob3B0aW9ucy5yZXN0b3JlKSB7XG4gICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmdldENhbnZhc0RhdGEoKTtcbiAgICAgICAgY3JvcEJveERhdGEgPSB0aGlzLmdldENyb3BCb3hEYXRhKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgaWYgKG9wdGlvbnMucmVzdG9yZSkge1xuICAgICAgICB0aGlzLnNldENhbnZhc0RhdGEoZm9yRWFjaChjYW52YXNEYXRhLCBmdW5jdGlvbiAobiwgaSkge1xuICAgICAgICAgIGNhbnZhc0RhdGFbaV0gPSBuICogcmF0aW87XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zZXRDcm9wQm94RGF0YShmb3JFYWNoKGNyb3BCb3hEYXRhLCBmdW5jdGlvbiAobiwgaSkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhW2ldID0gbiAqIHJhdGlvO1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYmxjbGljazogZnVuY3Rpb24gZGJsY2xpY2soKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5vcHRpb25zLmRyYWdNb2RlID09PSBEUkFHX01PREVfTk9ORSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldERyYWdNb2RlKGhhc0NsYXNzKHRoaXMuZHJhZ0JveCwgQ0xBU1NfQ1JPUCkgPyBEUkFHX01PREVfTU9WRSA6IERSQUdfTU9ERV9DUk9QKTtcbiAgfSxcbiAgd2hlZWw6IGZ1bmN0aW9uIHdoZWVsKGV2ZW50KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgcmF0aW8gPSBOdW1iZXIodGhpcy5vcHRpb25zLndoZWVsWm9vbVJhdGlvKSB8fCAwLjE7XG4gICAgdmFyIGRlbHRhID0gMTtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gTGltaXQgd2hlZWwgc3BlZWQgdG8gcHJldmVudCB6b29tIHRvbyBmYXN0ICgjMjEpXG4gICAgaWYgKHRoaXMud2hlZWxpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy53aGVlbGluZyA9IHRydWU7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy53aGVlbGluZyA9IGZhbHNlO1xuICAgIH0sIDUwKTtcbiAgICBpZiAoZXZlbnQuZGVsdGFZKSB7XG4gICAgICBkZWx0YSA9IGV2ZW50LmRlbHRhWSA+IDAgPyAxIDogLTE7XG4gICAgfSBlbHNlIGlmIChldmVudC53aGVlbERlbHRhKSB7XG4gICAgICBkZWx0YSA9IC1ldmVudC53aGVlbERlbHRhIC8gMTIwO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQuZGV0YWlsKSB7XG4gICAgICBkZWx0YSA9IGV2ZW50LmRldGFpbCA+IDAgPyAxIDogLTE7XG4gICAgfVxuICAgIHRoaXMuem9vbSgtZGVsdGEgKiByYXRpbywgZXZlbnQpO1xuICB9LFxuICBjcm9wU3RhcnQ6IGZ1bmN0aW9uIGNyb3BTdGFydChldmVudCkge1xuICAgIHZhciBidXR0b25zID0gZXZlbnQuYnV0dG9ucyxcbiAgICAgIGJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjtcbiAgICBpZiAodGhpcy5kaXNhYmxlZFxuXG4gICAgLy8gSGFuZGxlIG1vdXNlIGV2ZW50IGFuZCBwb2ludGVyIGV2ZW50IGFuZCBpZ25vcmUgdG91Y2ggZXZlbnRcbiAgICB8fCAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZXZlbnQudHlwZSA9PT0gJ3BvaW50ZXJkb3duJyAmJiBldmVudC5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykgJiYgKFxuICAgIC8vIE5vIHByaW1hcnkgYnV0dG9uIChVc3VhbGx5IHRoZSBsZWZ0IGJ1dHRvbilcbiAgICBpc051bWJlcihidXR0b25zKSAmJiBidXR0b25zICE9PSAxIHx8IGlzTnVtYmVyKGJ1dHRvbikgJiYgYnV0dG9uICE9PSAwXG5cbiAgICAvLyBPcGVuIGNvbnRleHQgbWVudVxuICAgIHx8IGV2ZW50LmN0cmxLZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgcG9pbnRlcnMgPSB0aGlzLnBvaW50ZXJzO1xuICAgIHZhciBhY3Rpb247XG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAvLyBIYW5kbGUgdG91Y2ggZXZlbnRcbiAgICAgIGZvckVhY2goZXZlbnQuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uICh0b3VjaCkge1xuICAgICAgICBwb2ludGVyc1t0b3VjaC5pZGVudGlmaWVyXSA9IGdldFBvaW50ZXIodG91Y2gpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhhbmRsZSBtb3VzZSBldmVudCBhbmQgcG9pbnRlciBldmVudFxuICAgICAgcG9pbnRlcnNbZXZlbnQucG9pbnRlcklkIHx8IDBdID0gZ2V0UG9pbnRlcihldmVudCk7XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyhwb2ludGVycykubGVuZ3RoID4gMSAmJiBvcHRpb25zLnpvb21hYmxlICYmIG9wdGlvbnMuem9vbU9uVG91Y2gpIHtcbiAgICAgIGFjdGlvbiA9IEFDVElPTl9aT09NO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3Rpb24gPSBnZXREYXRhKGV2ZW50LnRhcmdldCwgREFUQV9BQ1RJT04pO1xuICAgIH1cbiAgICBpZiAoIVJFR0VYUF9BQ1RJT05TLnRlc3QoYWN0aW9uKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGlzcGF0Y2hFdmVudCh0aGlzLmVsZW1lbnQsIEVWRU5UX0NST1BfU1RBUlQsIHtcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICB9KSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGxpbmUgaXMgcmVxdWlyZWQgZm9yIHByZXZlbnRpbmcgcGFnZSB6b29taW5nIGluIGlPUyBicm93c2Vyc1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgdGhpcy5jcm9wcGluZyA9IGZhbHNlO1xuICAgIGlmIChhY3Rpb24gPT09IEFDVElPTl9DUk9QKSB7XG4gICAgICB0aGlzLmNyb3BwaW5nID0gdHJ1ZTtcbiAgICAgIGFkZENsYXNzKHRoaXMuZHJhZ0JveCwgQ0xBU1NfTU9EQUwpO1xuICAgIH1cbiAgfSxcbiAgY3JvcE1vdmU6IGZ1bmN0aW9uIGNyb3BNb3ZlKGV2ZW50KSB7XG4gICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aW9uO1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICFhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChkaXNwYXRjaEV2ZW50KHRoaXMuZWxlbWVudCwgRVZFTlRfQ1JPUF9NT1ZFLCB7XG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgfSkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgZm9yRWFjaChldmVudC5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgIC8vIFRoZSBmaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQgKCM0MzIpXG4gICAgICAgIGFzc2lnbihwb2ludGVyc1t0b3VjaC5pZGVudGlmaWVyXSB8fCB7fSwgZ2V0UG9pbnRlcih0b3VjaCwgdHJ1ZSkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnbihwb2ludGVyc1tldmVudC5wb2ludGVySWQgfHwgMF0gfHwge30sIGdldFBvaW50ZXIoZXZlbnQsIHRydWUpKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UoZXZlbnQpO1xuICB9LFxuICBjcm9wRW5kOiBmdW5jdGlvbiBjcm9wRW5kKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aW9uLFxuICAgICAgcG9pbnRlcnMgPSB0aGlzLnBvaW50ZXJzO1xuICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgZm9yRWFjaChldmVudC5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgIGRlbGV0ZSBwb2ludGVyc1t0b3VjaC5pZGVudGlmaWVyXTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgcG9pbnRlcnNbZXZlbnQucG9pbnRlcklkIHx8IDBdO1xuICAgIH1cbiAgICBpZiAoIWFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghT2JqZWN0LmtleXMocG9pbnRlcnMpLmxlbmd0aCkge1xuICAgICAgdGhpcy5hY3Rpb24gPSAnJztcbiAgICB9XG4gICAgaWYgKHRoaXMuY3JvcHBpbmcpIHtcbiAgICAgIHRoaXMuY3JvcHBpbmcgPSBmYWxzZTtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMuZHJhZ0JveCwgQ0xBU1NfTU9EQUwsIHRoaXMuY3JvcHBlZCAmJiB0aGlzLm9wdGlvbnMubW9kYWwpO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KHRoaXMuZWxlbWVudCwgRVZFTlRfQ1JPUF9FTkQsIHtcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICB9KTtcbiAgfVxufTtcblxudmFyIGNoYW5nZSA9IHtcbiAgY2hhbmdlOiBmdW5jdGlvbiBjaGFuZ2UoZXZlbnQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhLFxuICAgICAgY3JvcEJveERhdGEgPSB0aGlzLmNyb3BCb3hEYXRhLFxuICAgICAgcG9pbnRlcnMgPSB0aGlzLnBvaW50ZXJzO1xuICAgIHZhciBhY3Rpb24gPSB0aGlzLmFjdGlvbjtcbiAgICB2YXIgYXNwZWN0UmF0aW8gPSBvcHRpb25zLmFzcGVjdFJhdGlvO1xuICAgIHZhciBsZWZ0ID0gY3JvcEJveERhdGEubGVmdCxcbiAgICAgIHRvcCA9IGNyb3BCb3hEYXRhLnRvcCxcbiAgICAgIHdpZHRoID0gY3JvcEJveERhdGEud2lkdGgsXG4gICAgICBoZWlnaHQgPSBjcm9wQm94RGF0YS5oZWlnaHQ7XG4gICAgdmFyIHJpZ2h0ID0gbGVmdCArIHdpZHRoO1xuICAgIHZhciBib3R0b20gPSB0b3AgKyBoZWlnaHQ7XG4gICAgdmFyIG1pbkxlZnQgPSAwO1xuICAgIHZhciBtaW5Ub3AgPSAwO1xuICAgIHZhciBtYXhXaWR0aCA9IGNvbnRhaW5lckRhdGEud2lkdGg7XG4gICAgdmFyIG1heEhlaWdodCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0O1xuICAgIHZhciByZW5kZXJhYmxlID0gdHJ1ZTtcbiAgICB2YXIgb2Zmc2V0O1xuXG4gICAgLy8gTG9ja2luZyBhc3BlY3QgcmF0aW8gaW4gXCJmcmVlIG1vZGVcIiBieSBob2xkaW5nIHNoaWZ0IGtleVxuICAgIGlmICghYXNwZWN0UmF0aW8gJiYgZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgIGFzcGVjdFJhdGlvID0gd2lkdGggJiYgaGVpZ2h0ID8gd2lkdGggLyBoZWlnaHQgOiAxO1xuICAgIH1cbiAgICBpZiAodGhpcy5saW1pdGVkKSB7XG4gICAgICBtaW5MZWZ0ID0gY3JvcEJveERhdGEubWluTGVmdDtcbiAgICAgIG1pblRvcCA9IGNyb3BCb3hEYXRhLm1pblRvcDtcbiAgICAgIG1heFdpZHRoID0gbWluTGVmdCArIE1hdGgubWluKGNvbnRhaW5lckRhdGEud2lkdGgsIGNhbnZhc0RhdGEud2lkdGgsIGNhbnZhc0RhdGEubGVmdCArIGNhbnZhc0RhdGEud2lkdGgpO1xuICAgICAgbWF4SGVpZ2h0ID0gbWluVG9wICsgTWF0aC5taW4oY29udGFpbmVyRGF0YS5oZWlnaHQsIGNhbnZhc0RhdGEuaGVpZ2h0LCBjYW52YXNEYXRhLnRvcCArIGNhbnZhc0RhdGEuaGVpZ2h0KTtcbiAgICB9XG4gICAgdmFyIHBvaW50ZXIgPSBwb2ludGVyc1tPYmplY3Qua2V5cyhwb2ludGVycylbMF1dO1xuICAgIHZhciByYW5nZSA9IHtcbiAgICAgIHg6IHBvaW50ZXIuZW5kWCAtIHBvaW50ZXIuc3RhcnRYLFxuICAgICAgeTogcG9pbnRlci5lbmRZIC0gcG9pbnRlci5zdGFydFlcbiAgICB9O1xuICAgIHZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKHNpZGUpIHtcbiAgICAgIHN3aXRjaCAoc2lkZSkge1xuICAgICAgICBjYXNlIEFDVElPTl9FQVNUOlxuICAgICAgICAgIGlmIChyaWdodCArIHJhbmdlLnggPiBtYXhXaWR0aCkge1xuICAgICAgICAgICAgcmFuZ2UueCA9IG1heFdpZHRoIC0gcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEFDVElPTl9XRVNUOlxuICAgICAgICAgIGlmIChsZWZ0ICsgcmFuZ2UueCA8IG1pbkxlZnQpIHtcbiAgICAgICAgICAgIHJhbmdlLnggPSBtaW5MZWZ0IC0gbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQUNUSU9OX05PUlRIOlxuICAgICAgICAgIGlmICh0b3AgKyByYW5nZS55IDwgbWluVG9wKSB7XG4gICAgICAgICAgICByYW5nZS55ID0gbWluVG9wIC0gdG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBQ1RJT05fU09VVEg6XG4gICAgICAgICAgaWYgKGJvdHRvbSArIHJhbmdlLnkgPiBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgIHJhbmdlLnkgPSBtYXhIZWlnaHQgLSBib3R0b207XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIC8vIE1vdmUgY3JvcCBib3hcbiAgICAgIGNhc2UgQUNUSU9OX0FMTDpcbiAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICB0b3AgKz0gcmFuZ2UueTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIFJlc2l6ZSBjcm9wIGJveFxuICAgICAgY2FzZSBBQ1RJT05fRUFTVDpcbiAgICAgICAgaWYgKHJhbmdlLnggPj0gMCAmJiAocmlnaHQgPj0gbWF4V2lkdGggfHwgYXNwZWN0UmF0aW8gJiYgKHRvcCA8PSBtaW5Ub3AgfHwgYm90dG9tID49IG1heEhlaWdodCkpKSB7XG4gICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrKEFDVElPTl9FQVNUKTtcbiAgICAgICAgd2lkdGggKz0gcmFuZ2UueDtcbiAgICAgICAgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9XRVNUO1xuICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICB0b3AgKz0gKGNyb3BCb3hEYXRhLmhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBQ1RJT05fTk9SVEg6XG4gICAgICAgIGlmIChyYW5nZS55IDw9IDAgJiYgKHRvcCA8PSBtaW5Ub3AgfHwgYXNwZWN0UmF0aW8gJiYgKGxlZnQgPD0gbWluTGVmdCB8fCByaWdodCA+PSBtYXhXaWR0aCkpKSB7XG4gICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrKEFDVElPTl9OT1JUSCk7XG4gICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICB0b3AgKz0gcmFuZ2UueTtcbiAgICAgICAgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEg7XG4gICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgbGVmdCArPSAoY3JvcEJveERhdGEud2lkdGggLSB3aWR0aCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBQ1RJT05fV0VTVDpcbiAgICAgICAgaWYgKHJhbmdlLnggPD0gMCAmJiAobGVmdCA8PSBtaW5MZWZ0IHx8IGFzcGVjdFJhdGlvICYmICh0b3AgPD0gbWluVG9wIHx8IGJvdHRvbSA+PSBtYXhIZWlnaHQpKSkge1xuICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjaGVjayhBQ1RJT05fV0VTVCk7XG4gICAgICAgIHdpZHRoIC09IHJhbmdlLng7XG4gICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcbiAgICAgICAgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9FQVNUO1xuICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICB0b3AgKz0gKGNyb3BCb3hEYXRhLmhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBQ1RJT05fU09VVEg6XG4gICAgICAgIGlmIChyYW5nZS55ID49IDAgJiYgKGJvdHRvbSA+PSBtYXhIZWlnaHQgfHwgYXNwZWN0UmF0aW8gJiYgKGxlZnQgPD0gbWluTGVmdCB8fCByaWdodCA+PSBtYXhXaWR0aCkpKSB7XG4gICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrKEFDVElPTl9TT1VUSCk7XG4gICAgICAgIGhlaWdodCArPSByYW5nZS55O1xuICAgICAgICBpZiAoaGVpZ2h0IDwgMCkge1xuICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9OT1JUSDtcbiAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICBsZWZ0ICs9IChjcm9wQm94RGF0YS53aWR0aCAtIHdpZHRoKSAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFDVElPTl9OT1JUSF9FQVNUOlxuICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICBpZiAocmFuZ2UueSA8PSAwICYmICh0b3AgPD0gbWluVG9wIHx8IHJpZ2h0ID49IG1heFdpZHRoKSkge1xuICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoZWNrKEFDVElPTl9OT1JUSCk7XG4gICAgICAgICAgaGVpZ2h0IC09IHJhbmdlLnk7XG4gICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgIGNoZWNrKEFDVElPTl9FQVNUKTtcbiAgICAgICAgICBpZiAocmFuZ2UueCA+PSAwKSB7XG4gICAgICAgICAgICBpZiAocmlnaHQgPCBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICB3aWR0aCArPSByYW5nZS54O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS55IDw9IDAgJiYgdG9wIDw9IG1pblRvcCkge1xuICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyYW5nZS55IDw9IDApIHtcbiAgICAgICAgICAgIGlmICh0b3AgPiBtaW5Ub3ApIHtcbiAgICAgICAgICAgICAgaGVpZ2h0IC09IHJhbmdlLnk7XG4gICAgICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoZWlnaHQgLT0gcmFuZ2UueTtcbiAgICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAod2lkdGggPCAwICYmIGhlaWdodCA8IDApIHtcbiAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfV0VTVDtcbiAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgfSBlbHNlIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfV0VTVDtcbiAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfRUFTVDtcbiAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFDVElPTl9OT1JUSF9XRVNUOlxuICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICBpZiAocmFuZ2UueSA8PSAwICYmICh0b3AgPD0gbWluVG9wIHx8IGxlZnQgPD0gbWluTGVmdCkpIHtcbiAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgbGVmdCArPSBjcm9wQm94RGF0YS53aWR0aCAtIHdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoZWNrKEFDVElPTl9OT1JUSCk7XG4gICAgICAgICAgY2hlY2soQUNUSU9OX1dFU1QpO1xuICAgICAgICAgIGlmIChyYW5nZS54IDw9IDApIHtcbiAgICAgICAgICAgIGlmIChsZWZ0ID4gbWluTGVmdCkge1xuICAgICAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgICAgICBsZWZ0ICs9IHJhbmdlLng7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLnkgPD0gMCAmJiB0b3AgPD0gbWluVG9wKSB7XG4gICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2lkdGggLT0gcmFuZ2UueDtcbiAgICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJhbmdlLnkgPD0gMCkge1xuICAgICAgICAgICAgaWYgKHRvcCA+IG1pblRvcCkge1xuICAgICAgICAgICAgICBoZWlnaHQgLT0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aWR0aCA8IDAgJiYgaGVpZ2h0IDwgMCkge1xuICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9TT1VUSF9FQVNUO1xuICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9OT1JUSF9FQVNUO1xuICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0IDwgMCkge1xuICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9TT1VUSF9XRVNUO1xuICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUNUSU9OX1NPVVRIX1dFU1Q6XG4gICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgIGlmIChyYW5nZS54IDw9IDAgJiYgKGxlZnQgPD0gbWluTGVmdCB8fCBib3R0b20gPj0gbWF4SGVpZ2h0KSkge1xuICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoZWNrKEFDVElPTl9XRVNUKTtcbiAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcbiAgICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoZWNrKEFDVElPTl9TT1VUSCk7XG4gICAgICAgICAgY2hlY2soQUNUSU9OX1dFU1QpO1xuICAgICAgICAgIGlmIChyYW5nZS54IDw9IDApIHtcbiAgICAgICAgICAgIGlmIChsZWZ0ID4gbWluTGVmdCkge1xuICAgICAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgICAgICBsZWZ0ICs9IHJhbmdlLng7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLnkgPj0gMCAmJiBib3R0b20gPj0gbWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2lkdGggLT0gcmFuZ2UueDtcbiAgICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJhbmdlLnkgPj0gMCkge1xuICAgICAgICAgICAgaWYgKGJvdHRvbSA8IG1heEhlaWdodCkge1xuICAgICAgICAgICAgICBoZWlnaHQgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVpZ2h0ICs9IHJhbmdlLnk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aWR0aCA8IDAgJiYgaGVpZ2h0IDwgMCkge1xuICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9OT1JUSF9FQVNUO1xuICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9TT1VUSF9FQVNUO1xuICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0IDwgMCkge1xuICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9OT1JUSF9XRVNUO1xuICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUNUSU9OX1NPVVRIX0VBU1Q6XG4gICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgIGlmIChyYW5nZS54ID49IDAgJiYgKHJpZ2h0ID49IG1heFdpZHRoIHx8IGJvdHRvbSA+PSBtYXhIZWlnaHQpKSB7XG4gICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hlY2soQUNUSU9OX0VBU1QpO1xuICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG4gICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGVjayhBQ1RJT05fU09VVEgpO1xuICAgICAgICAgIGNoZWNrKEFDVElPTl9FQVNUKTtcbiAgICAgICAgICBpZiAocmFuZ2UueCA+PSAwKSB7XG4gICAgICAgICAgICBpZiAocmlnaHQgPCBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICB3aWR0aCArPSByYW5nZS54O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS55ID49IDAgJiYgYm90dG9tID49IG1heEhlaWdodCkge1xuICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyYW5nZS55ID49IDApIHtcbiAgICAgICAgICAgIGlmIChib3R0b20gPCBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgaGVpZ2h0ICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlaWdodCArPSByYW5nZS55O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAod2lkdGggPCAwICYmIGhlaWdodCA8IDApIHtcbiAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfV0VTVDtcbiAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgfSBlbHNlIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfV0VTVDtcbiAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfRUFTVDtcbiAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIE1vdmUgY2FudmFzXG4gICAgICBjYXNlIEFDVElPTl9NT1ZFOlxuICAgICAgICB0aGlzLm1vdmUocmFuZ2UueCwgcmFuZ2UueSk7XG4gICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIFpvb20gY2FudmFzXG4gICAgICBjYXNlIEFDVElPTl9aT09NOlxuICAgICAgICB0aGlzLnpvb20oZ2V0TWF4Wm9vbVJhdGlvKHBvaW50ZXJzKSwgZXZlbnQpO1xuICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBDcmVhdGUgY3JvcCBib3hcbiAgICAgIGNhc2UgQUNUSU9OX0NST1A6XG4gICAgICAgIGlmICghcmFuZ2UueCB8fCAhcmFuZ2UueSkge1xuICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgPSBnZXRPZmZzZXQodGhpcy5jcm9wcGVyKTtcbiAgICAgICAgbGVmdCA9IHBvaW50ZXIuc3RhcnRYIC0gb2Zmc2V0LmxlZnQ7XG4gICAgICAgIHRvcCA9IHBvaW50ZXIuc3RhcnRZIC0gb2Zmc2V0LnRvcDtcbiAgICAgICAgd2lkdGggPSBjcm9wQm94RGF0YS5taW5XaWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gY3JvcEJveERhdGEubWluSGVpZ2h0O1xuICAgICAgICBpZiAocmFuZ2UueCA+IDApIHtcbiAgICAgICAgICBhY3Rpb24gPSByYW5nZS55ID4gMCA/IEFDVElPTl9TT1VUSF9FQVNUIDogQUNUSU9OX05PUlRIX0VBU1Q7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuZ2UueCA8IDApIHtcbiAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIGFjdGlvbiA9IHJhbmdlLnkgPiAwID8gQUNUSU9OX1NPVVRIX1dFU1QgOiBBQ1RJT05fTk9SVEhfV0VTVDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZ2UueSA8IDApIHtcbiAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hvdyB0aGUgY3JvcCBib3ggaWYgaXMgaGlkZGVuXG4gICAgICAgIGlmICghdGhpcy5jcm9wcGVkKSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5jcm9wQm94LCBDTEFTU19ISURERU4pO1xuICAgICAgICAgIHRoaXMuY3JvcHBlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoaXMubGltaXRlZCkge1xuICAgICAgICAgICAgdGhpcy5saW1pdENyb3BCb3godHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmVuZGVyYWJsZSkge1xuICAgICAgY3JvcEJveERhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBsZWZ0O1xuICAgICAgY3JvcEJveERhdGEudG9wID0gdG9wO1xuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICB0aGlzLnJlbmRlckNyb3BCb3goKTtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZVxuICAgIGZvckVhY2gocG9pbnRlcnMsIGZ1bmN0aW9uIChwKSB7XG4gICAgICBwLnN0YXJ0WCA9IHAuZW5kWDtcbiAgICAgIHAuc3RhcnRZID0gcC5lbmRZO1xuICAgIH0pO1xuICB9XG59O1xuXG52YXIgbWV0aG9kcyA9IHtcbiAgLy8gU2hvdyB0aGUgY3JvcCBib3ggbWFudWFsbHlcbiAgY3JvcDogZnVuY3Rpb24gY3JvcCgpIHtcbiAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5jcm9wcGVkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNyb3BwZWQgPSB0cnVlO1xuICAgICAgdGhpcy5saW1pdENyb3BCb3godHJ1ZSwgdHJ1ZSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGFsKSB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuZHJhZ0JveCwgQ0xBU1NfTU9EQUwpO1xuICAgICAgfVxuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5jcm9wQm94LCBDTEFTU19ISURERU4pO1xuICAgICAgdGhpcy5zZXRDcm9wQm94RGF0YSh0aGlzLmluaXRpYWxDcm9wQm94RGF0YSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvLyBSZXNldCB0aGUgaW1hZ2UgYW5kIGNyb3AgYm94IHRvIHRoZWlyIGluaXRpYWwgc3RhdGVzXG4gIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbWFnZURhdGEgPSBhc3NpZ24oe30sIHRoaXMuaW5pdGlhbEltYWdlRGF0YSk7XG4gICAgICB0aGlzLmNhbnZhc0RhdGEgPSBhc3NpZ24oe30sIHRoaXMuaW5pdGlhbENhbnZhc0RhdGEpO1xuICAgICAgdGhpcy5jcm9wQm94RGF0YSA9IGFzc2lnbih7fSwgdGhpcy5pbml0aWFsQ3JvcEJveERhdGEpO1xuICAgICAgdGhpcy5yZW5kZXJDYW52YXMoKTtcbiAgICAgIGlmICh0aGlzLmNyb3BwZWQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJDcm9wQm94KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvLyBDbGVhciB0aGUgY3JvcCBib3hcbiAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGlmICh0aGlzLmNyb3BwZWQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGFzc2lnbih0aGlzLmNyb3BCb3hEYXRhLCB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMFxuICAgICAgfSk7XG4gICAgICB0aGlzLmNyb3BwZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVuZGVyQ3JvcEJveCgpO1xuICAgICAgdGhpcy5saW1pdENhbnZhcyh0cnVlLCB0cnVlKTtcblxuICAgICAgLy8gUmVuZGVyIGNhbnZhcyBhZnRlciBjcm9wIGJveCByZW5kZXJlZFxuICAgICAgdGhpcy5yZW5kZXJDYW52YXMoKTtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZHJhZ0JveCwgQ0xBU1NfTU9EQUwpO1xuICAgICAgYWRkQ2xhc3ModGhpcy5jcm9wQm94LCBDTEFTU19ISURERU4pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIGltYWdlJ3Mgc3JjIGFuZCByZWJ1aWxkIHRoZSBjcm9wcGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgbmV3IFVSTC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbaGFzU2FtZVNpemVdIC0gSW5kaWNhdGUgaWYgdGhlIG5ldyBpbWFnZSBoYXMgdGhlIHNhbWUgc2l6ZSBhcyB0aGUgb2xkIG9uZS5cbiAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICovXG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UodXJsKSB7XG4gICAgdmFyIGhhc1NhbWVTaXplID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdXJsKSB7XG4gICAgICBpZiAodGhpcy5pc0ltZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3JjID0gdXJsO1xuICAgICAgfVxuICAgICAgaWYgKGhhc1NhbWVTaXplKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHVybDtcbiAgICAgICAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICAgICAgICB0aGlzLnZpZXdCb3hJbWFnZS5zcmMgPSB1cmw7XG4gICAgICAgICAgZm9yRWFjaCh0aGlzLnByZXZpZXdzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc3JjID0gdXJsO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5pc0ltZykge1xuICAgICAgICAgIHRoaXMucmVwbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy5kYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy51bmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLmxvYWQodXJsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8vIEVuYWJsZSAodW5mcmVlemUpIHRoZSBjcm9wcGVyXG4gIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIGlmICh0aGlzLnJlYWR5ICYmIHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuY3JvcHBlciwgQ0xBU1NfRElTQUJMRUQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLy8gRGlzYWJsZSAoZnJlZXplKSB0aGUgY3JvcHBlclxuICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGFkZENsYXNzKHRoaXMuY3JvcHBlciwgQ0xBU1NfRElTQUJMRUQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGNyb3BwZXIgYW5kIHJlbW92ZSB0aGUgaW5zdGFuY2UgZnJvbSB0aGUgaW1hZ2VcbiAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICovXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgaWYgKCFlbGVtZW50W05BTUVTUEFDRV0pIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBlbGVtZW50W05BTUVTUEFDRV0gPSB1bmRlZmluZWQ7XG4gICAgaWYgKHRoaXMuaXNJbWcgJiYgdGhpcy5yZXBsYWNlZCkge1xuICAgICAgZWxlbWVudC5zcmMgPSB0aGlzLm9yaWdpbmFsVXJsO1xuICAgIH1cbiAgICB0aGlzLnVuY3JlYXRlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8qKlxuICAgKiBNb3ZlIHRoZSBjYW52YXMgd2l0aCByZWxhdGl2ZSBvZmZzZXRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRYIC0gVGhlIHJlbGF0aXZlIG9mZnNldCBkaXN0YW5jZSBvbiB0aGUgeC1heGlzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW29mZnNldFk9b2Zmc2V0WF0gLSBUaGUgcmVsYXRpdmUgb2Zmc2V0IGRpc3RhbmNlIG9uIHRoZSB5LWF4aXMuXG4gICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAqL1xuICBtb3ZlOiBmdW5jdGlvbiBtb3ZlKG9mZnNldFgpIHtcbiAgICB2YXIgb2Zmc2V0WSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogb2Zmc2V0WDtcbiAgICB2YXIgX3RoaXMkY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YSxcbiAgICAgIGxlZnQgPSBfdGhpcyRjYW52YXNEYXRhLmxlZnQsXG4gICAgICB0b3AgPSBfdGhpcyRjYW52YXNEYXRhLnRvcDtcbiAgICByZXR1cm4gdGhpcy5tb3ZlVG8oaXNVbmRlZmluZWQob2Zmc2V0WCkgPyBvZmZzZXRYIDogbGVmdCArIE51bWJlcihvZmZzZXRYKSwgaXNVbmRlZmluZWQob2Zmc2V0WSkgPyBvZmZzZXRZIDogdG9wICsgTnVtYmVyKG9mZnNldFkpKTtcbiAgfSxcbiAgLyoqXG4gICAqIE1vdmUgdGhlIGNhbnZhcyB0byBhbiBhYnNvbHV0ZSBwb2ludFxuICAgKiBAcGFyYW0ge251bWJlcn0geCAtIFRoZSB4LWF4aXMgY29vcmRpbmF0ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFt5PXhdIC0gVGhlIHktYXhpcyBjb29yZGluYXRlLlxuICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgKi9cbiAgbW92ZVRvOiBmdW5jdGlvbiBtb3ZlVG8oeCkge1xuICAgIHZhciB5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB4O1xuICAgIHZhciBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgeCA9IE51bWJlcih4KTtcbiAgICB5ID0gTnVtYmVyKHkpO1xuICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIHRoaXMub3B0aW9ucy5tb3ZhYmxlKSB7XG4gICAgICBpZiAoaXNOdW1iZXIoeCkpIHtcbiAgICAgICAgY2FudmFzRGF0YS5sZWZ0ID0geDtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNOdW1iZXIoeSkpIHtcbiAgICAgICAgY2FudmFzRGF0YS50b3AgPSB5O1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQ2FudmFzKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFpvb20gdGhlIGNhbnZhcyB3aXRoIGEgcmVsYXRpdmUgcmF0aW9cbiAgICogQHBhcmFtIHtudW1iZXJ9IHJhdGlvIC0gVGhlIHRhcmdldCByYXRpby5cbiAgICogQHBhcmFtIHtFdmVudH0gX29yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgaWYgYW55LlxuICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgKi9cbiAgem9vbTogZnVuY3Rpb24gem9vbShyYXRpbywgX29yaWdpbmFsRXZlbnQpIHtcbiAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICByYXRpbyA9IE51bWJlcihyYXRpbyk7XG4gICAgaWYgKHJhdGlvIDwgMCkge1xuICAgICAgcmF0aW8gPSAxIC8gKDEgLSByYXRpbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhdGlvID0gMSArIHJhdGlvO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy56b29tVG8oY2FudmFzRGF0YS53aWR0aCAqIHJhdGlvIC8gY2FudmFzRGF0YS5uYXR1cmFsV2lkdGgsIG51bGwsIF9vcmlnaW5hbEV2ZW50KTtcbiAgfSxcbiAgLyoqXG4gICAqIFpvb20gdGhlIGNhbnZhcyB0byBhbiBhYnNvbHV0ZSByYXRpb1xuICAgKiBAcGFyYW0ge251bWJlcn0gcmF0aW8gLSBUaGUgdGFyZ2V0IHJhdGlvLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGl2b3QgLSBUaGUgem9vbSBwaXZvdCBwb2ludCBjb29yZGluYXRlLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBfb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBpZiBhbnkuXG4gICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAqL1xuICB6b29tVG86IGZ1bmN0aW9uIHpvb21UbyhyYXRpbywgcGl2b3QsIF9vcmlnaW5hbEV2ZW50KSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgIHZhciB3aWR0aCA9IGNhbnZhc0RhdGEud2lkdGgsXG4gICAgICBoZWlnaHQgPSBjYW52YXNEYXRhLmhlaWdodCxcbiAgICAgIG5hdHVyYWxXaWR0aCA9IGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoLFxuICAgICAgbmF0dXJhbEhlaWdodCA9IGNhbnZhc0RhdGEubmF0dXJhbEhlaWdodDtcbiAgICByYXRpbyA9IE51bWJlcihyYXRpbyk7XG4gICAgaWYgKHJhdGlvID49IDAgJiYgdGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCAmJiBvcHRpb25zLnpvb21hYmxlKSB7XG4gICAgICB2YXIgbmV3V2lkdGggPSBuYXR1cmFsV2lkdGggKiByYXRpbztcbiAgICAgIHZhciBuZXdIZWlnaHQgPSBuYXR1cmFsSGVpZ2h0ICogcmF0aW87XG4gICAgICBpZiAoZGlzcGF0Y2hFdmVudCh0aGlzLmVsZW1lbnQsIEVWRU5UX1pPT00sIHtcbiAgICAgICAgcmF0aW86IHJhdGlvLFxuICAgICAgICBvbGRSYXRpbzogd2lkdGggLyBuYXR1cmFsV2lkdGgsXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IF9vcmlnaW5hbEV2ZW50XG4gICAgICB9KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpZiAoX29yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgdmFyIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcbiAgICAgICAgdmFyIG9mZnNldCA9IGdldE9mZnNldCh0aGlzLmNyb3BwZXIpO1xuICAgICAgICB2YXIgY2VudGVyID0gcG9pbnRlcnMgJiYgT2JqZWN0LmtleXMocG9pbnRlcnMpLmxlbmd0aCA/IGdldFBvaW50ZXJzQ2VudGVyKHBvaW50ZXJzKSA6IHtcbiAgICAgICAgICBwYWdlWDogX29yaWdpbmFsRXZlbnQucGFnZVgsXG4gICAgICAgICAgcGFnZVk6IF9vcmlnaW5hbEV2ZW50LnBhZ2VZXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gWm9vbSBmcm9tIHRoZSB0cmlnZ2VyaW5nIHBvaW50IG9mIHRoZSBldmVudFxuICAgICAgICBjYW52YXNEYXRhLmxlZnQgLT0gKG5ld1dpZHRoIC0gd2lkdGgpICogKChjZW50ZXIucGFnZVggLSBvZmZzZXQubGVmdCAtIGNhbnZhc0RhdGEubGVmdCkgLyB3aWR0aCk7XG4gICAgICAgIGNhbnZhc0RhdGEudG9wIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpICogKChjZW50ZXIucGFnZVkgLSBvZmZzZXQudG9wIC0gY2FudmFzRGF0YS50b3ApIC8gaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwaXZvdCkgJiYgaXNOdW1iZXIocGl2b3QueCkgJiYgaXNOdW1iZXIocGl2b3QueSkpIHtcbiAgICAgICAgY2FudmFzRGF0YS5sZWZ0IC09IChuZXdXaWR0aCAtIHdpZHRoKSAqICgocGl2b3QueCAtIGNhbnZhc0RhdGEubGVmdCkgLyB3aWR0aCk7XG4gICAgICAgIGNhbnZhc0RhdGEudG9wIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpICogKChwaXZvdC55IC0gY2FudmFzRGF0YS50b3ApIC8gaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFpvb20gZnJvbSB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgICAgY2FudmFzRGF0YS5sZWZ0IC09IChuZXdXaWR0aCAtIHdpZHRoKSAvIDI7XG4gICAgICAgIGNhbnZhc0RhdGEudG9wIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICAgIH1cbiAgICAgIGNhbnZhc0RhdGEud2lkdGggPSBuZXdXaWR0aDtcbiAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogUm90YXRlIHRoZSBjYW52YXMgd2l0aCBhIHJlbGF0aXZlIGRlZ3JlZVxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVncmVlIC0gVGhlIHJvdGF0ZSBkZWdyZWUuXG4gICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAqL1xuICByb3RhdGU6IGZ1bmN0aW9uIHJvdGF0ZShkZWdyZWUpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGVUbygodGhpcy5pbWFnZURhdGEucm90YXRlIHx8IDApICsgTnVtYmVyKGRlZ3JlZSkpO1xuICB9LFxuICAvKipcbiAgICogUm90YXRlIHRoZSBjYW52YXMgdG8gYW4gYWJzb2x1dGUgZGVncmVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZWdyZWUgLSBUaGUgcm90YXRlIGRlZ3JlZS5cbiAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICovXG4gIHJvdGF0ZVRvOiBmdW5jdGlvbiByb3RhdGVUbyhkZWdyZWUpIHtcbiAgICBkZWdyZWUgPSBOdW1iZXIoZGVncmVlKTtcbiAgICBpZiAoaXNOdW1iZXIoZGVncmVlKSAmJiB0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIHRoaXMub3B0aW9ucy5yb3RhdGFibGUpIHtcbiAgICAgIHRoaXMuaW1hZ2VEYXRhLnJvdGF0ZSA9IGRlZ3JlZSAlIDM2MDtcbiAgICAgIHRoaXMucmVuZGVyQ2FudmFzKHRydWUsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFNjYWxlIHRoZSBpbWFnZSBvbiB0aGUgeC1heGlzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVYIC0gVGhlIHNjYWxlIHJhdGlvIG9uIHRoZSB4LWF4aXMuXG4gICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAqL1xuICBzY2FsZVg6IGZ1bmN0aW9uIHNjYWxlWChfc2NhbGVYKSB7XG4gICAgdmFyIHNjYWxlWSA9IHRoaXMuaW1hZ2VEYXRhLnNjYWxlWTtcbiAgICByZXR1cm4gdGhpcy5zY2FsZShfc2NhbGVYLCBpc051bWJlcihzY2FsZVkpID8gc2NhbGVZIDogMSk7XG4gIH0sXG4gIC8qKlxuICAgKiBTY2FsZSB0aGUgaW1hZ2Ugb24gdGhlIHktYXhpcy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWSAtIFRoZSBzY2FsZSByYXRpbyBvbiB0aGUgeS1heGlzLlxuICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgKi9cbiAgc2NhbGVZOiBmdW5jdGlvbiBzY2FsZVkoX3NjYWxlWSkge1xuICAgIHZhciBzY2FsZVggPSB0aGlzLmltYWdlRGF0YS5zY2FsZVg7XG4gICAgcmV0dXJuIHRoaXMuc2NhbGUoaXNOdW1iZXIoc2NhbGVYKSA/IHNjYWxlWCA6IDEsIF9zY2FsZVkpO1xuICB9LFxuICAvKipcbiAgICogU2NhbGUgdGhlIGltYWdlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVggLSBUaGUgc2NhbGUgcmF0aW8gb24gdGhlIHgtYXhpcy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzY2FsZVk9c2NhbGVYXSAtIFRoZSBzY2FsZSByYXRpbyBvbiB0aGUgeS1heGlzLlxuICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgKi9cbiAgc2NhbGU6IGZ1bmN0aW9uIHNjYWxlKHNjYWxlWCkge1xuICAgIHZhciBzY2FsZVkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHNjYWxlWDtcbiAgICB2YXIgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGE7XG4gICAgdmFyIHRyYW5zZm9ybWVkID0gZmFsc2U7XG4gICAgc2NhbGVYID0gTnVtYmVyKHNjYWxlWCk7XG4gICAgc2NhbGVZID0gTnVtYmVyKHNjYWxlWSk7XG4gICAgaWYgKHRoaXMucmVhZHkgJiYgIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5vcHRpb25zLnNjYWxhYmxlKSB7XG4gICAgICBpZiAoaXNOdW1iZXIoc2NhbGVYKSkge1xuICAgICAgICBpbWFnZURhdGEuc2NhbGVYID0gc2NhbGVYO1xuICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNOdW1iZXIoc2NhbGVZKSkge1xuICAgICAgICBpbWFnZURhdGEuc2NhbGVZID0gc2NhbGVZO1xuICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodHJhbnNmb3JtZWQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogR2V0IHRoZSBjcm9wcGVkIGFyZWEgcG9zaXRpb24gYW5kIHNpemUgZGF0YSAoYmFzZSBvbiB0aGUgb3JpZ2luYWwgaW1hZ2UpXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JvdW5kZWQ9ZmFsc2VdIC0gSW5kaWNhdGUgaWYgcm91bmQgdGhlIGRhdGEgdmFsdWVzIG9yIG5vdC5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBjcm9wcGVkIGRhdGEuXG4gICAqL1xuICBnZXREYXRhOiBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgIHZhciByb3VuZGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhLFxuICAgICAgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YSxcbiAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YTtcbiAgICB2YXIgZGF0YTtcbiAgICBpZiAodGhpcy5yZWFkeSAmJiB0aGlzLmNyb3BwZWQpIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIHg6IGNyb3BCb3hEYXRhLmxlZnQgLSBjYW52YXNEYXRhLmxlZnQsXG4gICAgICAgIHk6IGNyb3BCb3hEYXRhLnRvcCAtIGNhbnZhc0RhdGEudG9wLFxuICAgICAgICB3aWR0aDogY3JvcEJveERhdGEud2lkdGgsXG4gICAgICAgIGhlaWdodDogY3JvcEJveERhdGEuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgdmFyIHJhdGlvID0gaW1hZ2VEYXRhLndpZHRoIC8gaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aDtcbiAgICAgIGZvckVhY2goZGF0YSwgZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgICAgZGF0YVtpXSA9IG4gLyByYXRpbztcbiAgICAgIH0pO1xuICAgICAgaWYgKHJvdW5kZWQpIHtcbiAgICAgICAgLy8gSW4gY2FzZSByb3VuZGluZyBvZmYgbGVhZHMgdG8gZXh0cmEgMXB4IGluIHJpZ2h0IG9yIGJvdHRvbSBib3JkZXJcbiAgICAgICAgLy8gd2Ugc2hvdWxkIHJvdW5kIHRoZSB0b3AtbGVmdCBjb3JuZXIgYW5kIHRoZSBkaW1lbnNpb24gKCMzNDMpLlxuICAgICAgICB2YXIgYm90dG9tID0gTWF0aC5yb3VuZChkYXRhLnkgKyBkYXRhLmhlaWdodCk7XG4gICAgICAgIHZhciByaWdodCA9IE1hdGgucm91bmQoZGF0YS54ICsgZGF0YS53aWR0aCk7XG4gICAgICAgIGRhdGEueCA9IE1hdGgucm91bmQoZGF0YS54KTtcbiAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChkYXRhLnkpO1xuICAgICAgICBkYXRhLndpZHRoID0gcmlnaHQgLSBkYXRhLng7XG4gICAgICAgIGRhdGEuaGVpZ2h0ID0gYm90dG9tIC0gZGF0YS55O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5yb3RhdGFibGUpIHtcbiAgICAgIGRhdGEucm90YXRlID0gaW1hZ2VEYXRhLnJvdGF0ZSB8fCAwO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zY2FsYWJsZSkge1xuICAgICAgZGF0YS5zY2FsZVggPSBpbWFnZURhdGEuc2NhbGVYIHx8IDE7XG4gICAgICBkYXRhLnNjYWxlWSA9IGltYWdlRGF0YS5zY2FsZVkgfHwgMTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNyb3BwZWQgYXJlYSBwb3NpdGlvbiBhbmQgc2l6ZSB3aXRoIG5ldyBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG5ldyBkYXRhLlxuICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgKi9cbiAgc2V0RGF0YTogZnVuY3Rpb24gc2V0RGF0YShkYXRhKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YSxcbiAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgdmFyIGNyb3BCb3hEYXRhID0ge307XG4gICAgaWYgKHRoaXMucmVhZHkgJiYgIXRoaXMuZGlzYWJsZWQgJiYgaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgdmFyIHRyYW5zZm9ybWVkID0gZmFsc2U7XG4gICAgICBpZiAob3B0aW9ucy5yb3RhdGFibGUpIHtcbiAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEucm90YXRlKSAmJiBkYXRhLnJvdGF0ZSAhPT0gaW1hZ2VEYXRhLnJvdGF0ZSkge1xuICAgICAgICAgIGltYWdlRGF0YS5yb3RhdGUgPSBkYXRhLnJvdGF0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnNjYWxhYmxlKSB7XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLnNjYWxlWCkgJiYgZGF0YS5zY2FsZVggIT09IGltYWdlRGF0YS5zY2FsZVgpIHtcbiAgICAgICAgICBpbWFnZURhdGEuc2NhbGVYID0gZGF0YS5zY2FsZVg7XG4gICAgICAgICAgdHJhbnNmb3JtZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLnNjYWxlWSkgJiYgZGF0YS5zY2FsZVkgIT09IGltYWdlRGF0YS5zY2FsZVkpIHtcbiAgICAgICAgICBpbWFnZURhdGEuc2NhbGVZID0gZGF0YS5zY2FsZVk7XG4gICAgICAgICAgdHJhbnNmb3JtZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodHJhbnNmb3JtZWQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICB2YXIgcmF0aW8gPSBpbWFnZURhdGEud2lkdGggLyBpbWFnZURhdGEubmF0dXJhbFdpZHRoO1xuICAgICAgaWYgKGlzTnVtYmVyKGRhdGEueCkpIHtcbiAgICAgICAgY3JvcEJveERhdGEubGVmdCA9IGRhdGEueCAqIHJhdGlvICsgY2FudmFzRGF0YS5sZWZ0O1xuICAgICAgfVxuICAgICAgaWYgKGlzTnVtYmVyKGRhdGEueSkpIHtcbiAgICAgICAgY3JvcEJveERhdGEudG9wID0gZGF0YS55ICogcmF0aW8gKyBjYW52YXNEYXRhLnRvcDtcbiAgICAgIH1cbiAgICAgIGlmIChpc051bWJlcihkYXRhLndpZHRoKSkge1xuICAgICAgICBjcm9wQm94RGF0YS53aWR0aCA9IGRhdGEud2lkdGggKiByYXRpbztcbiAgICAgIH1cbiAgICAgIGlmIChpc051bWJlcihkYXRhLmhlaWdodCkpIHtcbiAgICAgICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gZGF0YS5oZWlnaHQgKiByYXRpbztcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0Q3JvcEJveERhdGEoY3JvcEJveERhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIEdldCB0aGUgY29udGFpbmVyIHNpemUgZGF0YS5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBjb250YWluZXIgZGF0YS5cbiAgICovXG4gIGdldENvbnRhaW5lckRhdGE6IGZ1bmN0aW9uIGdldENvbnRhaW5lckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhZHkgPyBhc3NpZ24oe30sIHRoaXMuY29udGFpbmVyRGF0YSkgOiB7fTtcbiAgfSxcbiAgLyoqXG4gICAqIEdldCB0aGUgaW1hZ2UgcG9zaXRpb24gYW5kIHNpemUgZGF0YS5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBpbWFnZSBkYXRhLlxuICAgKi9cbiAgZ2V0SW1hZ2VEYXRhOiBmdW5jdGlvbiBnZXRJbWFnZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZWQgPyBhc3NpZ24oe30sIHRoaXMuaW1hZ2VEYXRhKSA6IHt9O1xuICB9LFxuICAvKipcbiAgICogR2V0IHRoZSBjYW52YXMgcG9zaXRpb24gYW5kIHNpemUgZGF0YS5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBjYW52YXMgZGF0YS5cbiAgICovXG4gIGdldENhbnZhc0RhdGE6IGZ1bmN0aW9uIGdldENhbnZhc0RhdGEoKSB7XG4gICAgdmFyIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgdmFyIGRhdGEgPSB7fTtcbiAgICBpZiAodGhpcy5yZWFkeSkge1xuICAgICAgZm9yRWFjaChbJ2xlZnQnLCAndG9wJywgJ3dpZHRoJywgJ2hlaWdodCcsICduYXR1cmFsV2lkdGgnLCAnbmF0dXJhbEhlaWdodCddLCBmdW5jdGlvbiAobikge1xuICAgICAgICBkYXRhW25dID0gY2FudmFzRGF0YVtuXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfSxcbiAgLyoqXG4gICAqIFNldCB0aGUgY2FudmFzIHBvc2l0aW9uIGFuZCBzaXplIHdpdGggbmV3IGRhdGEuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG5ldyBjYW52YXMgZGF0YS5cbiAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICovXG4gIHNldENhbnZhc0RhdGE6IGZ1bmN0aW9uIHNldENhbnZhc0RhdGEoZGF0YSkge1xuICAgIHZhciBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgIHZhciBhc3BlY3RSYXRpbyA9IGNhbnZhc0RhdGEuYXNwZWN0UmF0aW87XG4gICAgaWYgKHRoaXMucmVhZHkgJiYgIXRoaXMuZGlzYWJsZWQgJiYgaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgaWYgKGlzTnVtYmVyKGRhdGEubGVmdCkpIHtcbiAgICAgICAgY2FudmFzRGF0YS5sZWZ0ID0gZGF0YS5sZWZ0O1xuICAgICAgfVxuICAgICAgaWYgKGlzTnVtYmVyKGRhdGEudG9wKSkge1xuICAgICAgICBjYW52YXNEYXRhLnRvcCA9IGRhdGEudG9wO1xuICAgICAgfVxuICAgICAgaWYgKGlzTnVtYmVyKGRhdGEud2lkdGgpKSB7XG4gICAgICAgIGNhbnZhc0RhdGEud2lkdGggPSBkYXRhLndpZHRoO1xuICAgICAgICBjYW52YXNEYXRhLmhlaWdodCA9IGRhdGEud2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoZGF0YS5oZWlnaHQpKSB7XG4gICAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgICAgIGNhbnZhc0RhdGEud2lkdGggPSBkYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogR2V0IHRoZSBjcm9wIGJveCBwb3NpdGlvbiBhbmQgc2l6ZSBkYXRhLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IGNyb3AgYm94IGRhdGEuXG4gICAqL1xuICBnZXRDcm9wQm94RGF0YTogZnVuY3Rpb24gZ2V0Q3JvcEJveERhdGEoKSB7XG4gICAgdmFyIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YTtcbiAgICB2YXIgZGF0YTtcbiAgICBpZiAodGhpcy5yZWFkeSAmJiB0aGlzLmNyb3BwZWQpIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIGxlZnQ6IGNyb3BCb3hEYXRhLmxlZnQsXG4gICAgICAgIHRvcDogY3JvcEJveERhdGEudG9wLFxuICAgICAgICB3aWR0aDogY3JvcEJveERhdGEud2lkdGgsXG4gICAgICAgIGhlaWdodDogY3JvcEJveERhdGEuaGVpZ2h0XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZGF0YSB8fCB7fTtcbiAgfSxcbiAgLyoqXG4gICAqIFNldCB0aGUgY3JvcCBib3ggcG9zaXRpb24gYW5kIHNpemUgd2l0aCBuZXcgZGF0YS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgbmV3IGNyb3AgYm94IGRhdGEuXG4gICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAqL1xuICBzZXRDcm9wQm94RGF0YTogZnVuY3Rpb24gc2V0Q3JvcEJveERhdGEoZGF0YSkge1xuICAgIHZhciBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG4gICAgdmFyIGFzcGVjdFJhdGlvID0gdGhpcy5vcHRpb25zLmFzcGVjdFJhdGlvO1xuICAgIHZhciB3aWR0aENoYW5nZWQ7XG4gICAgdmFyIGhlaWdodENoYW5nZWQ7XG4gICAgaWYgKHRoaXMucmVhZHkgJiYgdGhpcy5jcm9wcGVkICYmICF0aGlzLmRpc2FibGVkICYmIGlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICAgIGlmIChpc051bWJlcihkYXRhLmxlZnQpKSB7XG4gICAgICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBkYXRhLmxlZnQ7XG4gICAgICB9XG4gICAgICBpZiAoaXNOdW1iZXIoZGF0YS50b3ApKSB7XG4gICAgICAgIGNyb3BCb3hEYXRhLnRvcCA9IGRhdGEudG9wO1xuICAgICAgfVxuICAgICAgaWYgKGlzTnVtYmVyKGRhdGEud2lkdGgpICYmIGRhdGEud2lkdGggIT09IGNyb3BCb3hEYXRhLndpZHRoKSB7XG4gICAgICAgIHdpZHRoQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gZGF0YS53aWR0aDtcbiAgICAgIH1cbiAgICAgIGlmIChpc051bWJlcihkYXRhLmhlaWdodCkgJiYgZGF0YS5oZWlnaHQgIT09IGNyb3BCb3hEYXRhLmhlaWdodCkge1xuICAgICAgICBoZWlnaHRDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgaWYgKHdpZHRoQ2hhbmdlZCkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IGNyb3BCb3hEYXRhLndpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0Q2hhbmdlZCkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gY3JvcEJveERhdGEuaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyQ3JvcEJveCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIEdldCBhIGNhbnZhcyBkcmF3biB0aGUgY3JvcHBlZCBpbWFnZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSAtIFRoZSBjb25maWcgb3B0aW9ucy5cbiAgICogQHJldHVybnMge0hUTUxDYW52YXNFbGVtZW50fSAtIFRoZSByZXN1bHQgY2FudmFzLlxuICAgKi9cbiAgZ2V0Q3JvcHBlZENhbnZhczogZnVuY3Rpb24gZ2V0Q3JvcHBlZENhbnZhcygpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgaWYgKCF0aGlzLnJlYWR5IHx8ICF3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICB2YXIgc291cmNlID0gZ2V0U291cmNlQ2FudmFzKHRoaXMuaW1hZ2UsIHRoaXMuaW1hZ2VEYXRhLCBjYW52YXNEYXRhLCBvcHRpb25zKTtcblxuICAgIC8vIFJldHVybnMgdGhlIHNvdXJjZSBjYW52YXMgaWYgaXQgaXMgbm90IGNyb3BwZWQuXG4gICAgaWYgKCF0aGlzLmNyb3BwZWQpIHtcbiAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfVxuICAgIHZhciBfdGhpcyRnZXREYXRhID0gdGhpcy5nZXREYXRhKG9wdGlvbnMucm91bmRlZCksXG4gICAgICBpbml0aWFsWCA9IF90aGlzJGdldERhdGEueCxcbiAgICAgIGluaXRpYWxZID0gX3RoaXMkZ2V0RGF0YS55LFxuICAgICAgaW5pdGlhbFdpZHRoID0gX3RoaXMkZ2V0RGF0YS53aWR0aCxcbiAgICAgIGluaXRpYWxIZWlnaHQgPSBfdGhpcyRnZXREYXRhLmhlaWdodDtcbiAgICB2YXIgcmF0aW8gPSBzb3VyY2Uud2lkdGggLyBNYXRoLmZsb29yKGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoKTtcbiAgICBpZiAocmF0aW8gIT09IDEpIHtcbiAgICAgIGluaXRpYWxYICo9IHJhdGlvO1xuICAgICAgaW5pdGlhbFkgKj0gcmF0aW87XG4gICAgICBpbml0aWFsV2lkdGggKj0gcmF0aW87XG4gICAgICBpbml0aWFsSGVpZ2h0ICo9IHJhdGlvO1xuICAgIH1cbiAgICB2YXIgYXNwZWN0UmF0aW8gPSBpbml0aWFsV2lkdGggLyBpbml0aWFsSGVpZ2h0O1xuICAgIHZhciBtYXhTaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgd2lkdGg6IG9wdGlvbnMubWF4V2lkdGggfHwgSW5maW5pdHksXG4gICAgICBoZWlnaHQ6IG9wdGlvbnMubWF4SGVpZ2h0IHx8IEluZmluaXR5XG4gICAgfSk7XG4gICAgdmFyIG1pblNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICB3aWR0aDogb3B0aW9ucy5taW5XaWR0aCB8fCAwLFxuICAgICAgaGVpZ2h0OiBvcHRpb25zLm1pbkhlaWdodCB8fCAwXG4gICAgfSwgJ2NvdmVyJyk7XG4gICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgd2lkdGg6IG9wdGlvbnMud2lkdGggfHwgKHJhdGlvICE9PSAxID8gc291cmNlLndpZHRoIDogaW5pdGlhbFdpZHRoKSxcbiAgICAgICAgaGVpZ2h0OiBvcHRpb25zLmhlaWdodCB8fCAocmF0aW8gIT09IDEgPyBzb3VyY2UuaGVpZ2h0IDogaW5pdGlhbEhlaWdodClcbiAgICAgIH0pLFxuICAgICAgd2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplcy53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzLmhlaWdodDtcbiAgICB3aWR0aCA9IE1hdGgubWluKG1heFNpemVzLndpZHRoLCBNYXRoLm1heChtaW5TaXplcy53aWR0aCwgd2lkdGgpKTtcbiAgICBoZWlnaHQgPSBNYXRoLm1pbihtYXhTaXplcy5oZWlnaHQsIE1hdGgubWF4KG1pblNpemVzLmhlaWdodCwgaGVpZ2h0KSk7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY2FudmFzLndpZHRoID0gbm9ybWFsaXplRGVjaW1hbE51bWJlcih3aWR0aCk7XG4gICAgY2FudmFzLmhlaWdodCA9IG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIoaGVpZ2h0KTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IG9wdGlvbnMuZmlsbENvbG9yIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB2YXIgX29wdGlvbnMkaW1hZ2VTbW9vdGhpID0gb3B0aW9ucy5pbWFnZVNtb290aGluZ0VuYWJsZWQsXG4gICAgICBpbWFnZVNtb290aGluZ0VuYWJsZWQgPSBfb3B0aW9ucyRpbWFnZVNtb290aGkgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRpbWFnZVNtb290aGksXG4gICAgICBpbWFnZVNtb290aGluZ1F1YWxpdHkgPSBvcHRpb25zLmltYWdlU21vb3RoaW5nUXVhbGl0eTtcbiAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGltYWdlU21vb3RoaW5nRW5hYmxlZDtcbiAgICBpZiAoaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KSB7XG4gICAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nUXVhbGl0eSA9IGltYWdlU21vb3RoaW5nUXVhbGl0eTtcbiAgICB9XG5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELmRyYXdJbWFnZVxuICAgIHZhciBzb3VyY2VXaWR0aCA9IHNvdXJjZS53aWR0aDtcbiAgICB2YXIgc291cmNlSGVpZ2h0ID0gc291cmNlLmhlaWdodDtcblxuICAgIC8vIFNvdXJjZSBjYW52YXMgcGFyYW1ldGVyc1xuICAgIHZhciBzcmNYID0gaW5pdGlhbFg7XG4gICAgdmFyIHNyY1kgPSBpbml0aWFsWTtcbiAgICB2YXIgc3JjV2lkdGg7XG4gICAgdmFyIHNyY0hlaWdodDtcblxuICAgIC8vIERlc3RpbmF0aW9uIGNhbnZhcyBwYXJhbWV0ZXJzXG4gICAgdmFyIGRzdFg7XG4gICAgdmFyIGRzdFk7XG4gICAgdmFyIGRzdFdpZHRoO1xuICAgIHZhciBkc3RIZWlnaHQ7XG4gICAgaWYgKHNyY1ggPD0gLWluaXRpYWxXaWR0aCB8fCBzcmNYID4gc291cmNlV2lkdGgpIHtcbiAgICAgIHNyY1ggPSAwO1xuICAgICAgc3JjV2lkdGggPSAwO1xuICAgICAgZHN0WCA9IDA7XG4gICAgICBkc3RXaWR0aCA9IDA7XG4gICAgfSBlbHNlIGlmIChzcmNYIDw9IDApIHtcbiAgICAgIGRzdFggPSAtc3JjWDtcbiAgICAgIHNyY1ggPSAwO1xuICAgICAgc3JjV2lkdGggPSBNYXRoLm1pbihzb3VyY2VXaWR0aCwgaW5pdGlhbFdpZHRoICsgc3JjWCk7XG4gICAgICBkc3RXaWR0aCA9IHNyY1dpZHRoO1xuICAgIH0gZWxzZSBpZiAoc3JjWCA8PSBzb3VyY2VXaWR0aCkge1xuICAgICAgZHN0WCA9IDA7XG4gICAgICBzcmNXaWR0aCA9IE1hdGgubWluKGluaXRpYWxXaWR0aCwgc291cmNlV2lkdGggLSBzcmNYKTtcbiAgICAgIGRzdFdpZHRoID0gc3JjV2lkdGg7XG4gICAgfVxuICAgIGlmIChzcmNXaWR0aCA8PSAwIHx8IHNyY1kgPD0gLWluaXRpYWxIZWlnaHQgfHwgc3JjWSA+IHNvdXJjZUhlaWdodCkge1xuICAgICAgc3JjWSA9IDA7XG4gICAgICBzcmNIZWlnaHQgPSAwO1xuICAgICAgZHN0WSA9IDA7XG4gICAgICBkc3RIZWlnaHQgPSAwO1xuICAgIH0gZWxzZSBpZiAoc3JjWSA8PSAwKSB7XG4gICAgICBkc3RZID0gLXNyY1k7XG4gICAgICBzcmNZID0gMDtcbiAgICAgIHNyY0hlaWdodCA9IE1hdGgubWluKHNvdXJjZUhlaWdodCwgaW5pdGlhbEhlaWdodCArIHNyY1kpO1xuICAgICAgZHN0SGVpZ2h0ID0gc3JjSGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoc3JjWSA8PSBzb3VyY2VIZWlnaHQpIHtcbiAgICAgIGRzdFkgPSAwO1xuICAgICAgc3JjSGVpZ2h0ID0gTWF0aC5taW4oaW5pdGlhbEhlaWdodCwgc291cmNlSGVpZ2h0IC0gc3JjWSk7XG4gICAgICBkc3RIZWlnaHQgPSBzcmNIZWlnaHQ7XG4gICAgfVxuICAgIHZhciBwYXJhbXMgPSBbc3JjWCwgc3JjWSwgc3JjV2lkdGgsIHNyY0hlaWdodF07XG5cbiAgICAvLyBBdm9pZCBcIkluZGV4U2l6ZUVycm9yXCJcbiAgICBpZiAoZHN0V2lkdGggPiAwICYmIGRzdEhlaWdodCA+IDApIHtcbiAgICAgIHZhciBzY2FsZSA9IHdpZHRoIC8gaW5pdGlhbFdpZHRoO1xuICAgICAgcGFyYW1zLnB1c2goZHN0WCAqIHNjYWxlLCBkc3RZICogc2NhbGUsIGRzdFdpZHRoICogc2NhbGUsIGRzdEhlaWdodCAqIHNjYWxlKTtcbiAgICB9XG5cbiAgICAvLyBBbGwgdGhlIG51bWVyaWNhbCBwYXJhbWV0ZXJzIHNob3VsZCBiZSBpbnRlZ2VyIGZvciBgZHJhd0ltYWdlYFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZW5neXVhbmNoZW4vY3JvcHBlci9pc3N1ZXMvNDc2XG4gICAgY29udGV4dC5kcmF3SW1hZ2UuYXBwbHkoY29udGV4dCwgW3NvdXJjZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwYXJhbXMubWFwKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3Iobm9ybWFsaXplRGVjaW1hbE51bWJlcihwYXJhbSkpO1xuICAgIH0pKSkpO1xuICAgIHJldHVybiBjYW52YXM7XG4gIH0sXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIGFzcGVjdCByYXRpbyBvZiB0aGUgY3JvcCBib3guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3RSYXRpbyAtIFRoZSBuZXcgYXNwZWN0IHJhdGlvLlxuICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgKi9cbiAgc2V0QXNwZWN0UmF0aW86IGZ1bmN0aW9uIHNldEFzcGVjdFJhdGlvKGFzcGVjdFJhdGlvKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFpc1VuZGVmaW5lZChhc3BlY3RSYXRpbykpIHtcbiAgICAgIC8vIDAgLT4gTmFOXG4gICAgICBvcHRpb25zLmFzcGVjdFJhdGlvID0gTWF0aC5tYXgoMCwgYXNwZWN0UmF0aW8pIHx8IE5hTjtcbiAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgIHRoaXMuaW5pdENyb3BCb3goKTtcbiAgICAgICAgaWYgKHRoaXMuY3JvcHBlZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyQ3JvcEJveCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogQ2hhbmdlIHRoZSBkcmFnIG1vZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIC0gVGhlIG5ldyBkcmFnIG1vZGUuXG4gICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAqL1xuICBzZXREcmFnTW9kZTogZnVuY3Rpb24gc2V0RHJhZ01vZGUobW9kZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgZHJhZ0JveCA9IHRoaXMuZHJhZ0JveCxcbiAgICAgIGZhY2UgPSB0aGlzLmZhY2U7XG4gICAgaWYgKHRoaXMucmVhZHkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHZhciBjcm9wcGFibGUgPSBtb2RlID09PSBEUkFHX01PREVfQ1JPUDtcbiAgICAgIHZhciBtb3ZhYmxlID0gb3B0aW9ucy5tb3ZhYmxlICYmIG1vZGUgPT09IERSQUdfTU9ERV9NT1ZFO1xuICAgICAgbW9kZSA9IGNyb3BwYWJsZSB8fCBtb3ZhYmxlID8gbW9kZSA6IERSQUdfTU9ERV9OT05FO1xuICAgICAgb3B0aW9ucy5kcmFnTW9kZSA9IG1vZGU7XG4gICAgICBzZXREYXRhKGRyYWdCb3gsIERBVEFfQUNUSU9OLCBtb2RlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGRyYWdCb3gsIENMQVNTX0NST1AsIGNyb3BwYWJsZSk7XG4gICAgICB0b2dnbGVDbGFzcyhkcmFnQm94LCBDTEFTU19NT1ZFLCBtb3ZhYmxlKTtcbiAgICAgIGlmICghb3B0aW9ucy5jcm9wQm94TW92YWJsZSkge1xuICAgICAgICAvLyBTeW5jIGRyYWcgbW9kZSB0byBjcm9wIGJveCB3aGVuIGl0IGlzIG5vdCBtb3ZhYmxlXG4gICAgICAgIHNldERhdGEoZmFjZSwgREFUQV9BQ1RJT04sIG1vZGUpO1xuICAgICAgICB0b2dnbGVDbGFzcyhmYWNlLCBDTEFTU19DUk9QLCBjcm9wcGFibGUpO1xuICAgICAgICB0b2dnbGVDbGFzcyhmYWNlLCBDTEFTU19NT1ZFLCBtb3ZhYmxlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbnZhciBBbm90aGVyQ3JvcHBlciA9IFdJTkRPVy5Dcm9wcGVyO1xudmFyIENyb3BwZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IENyb3BwZXIuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSB0YXJnZXQgZWxlbWVudCBmb3IgY3JvcHBpbmcuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gLSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgKi9cbiAgZnVuY3Rpb24gQ3JvcHBlcihlbGVtZW50KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDcm9wcGVyKTtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIVJFR0VYUF9UQUdfTkFNRS50ZXN0KGVsZW1lbnQudGFnTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkIGFuZCBtdXN0IGJlIGFuIDxpbWc+IG9yIDxjYW52YXM+IGVsZW1lbnQuJyk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gYXNzaWduKHt9LCBERUZBVUxUUywgaXNQbGFpbk9iamVjdChvcHRpb25zKSAmJiBvcHRpb25zKTtcbiAgICB0aGlzLmNyb3BwZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5wb2ludGVycyA9IHt9O1xuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLnJlbG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucmVwbGFjZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNpemVkID0gZmFsc2U7XG4gICAgdGhpcy5zaXppbmcgPSBmYWxzZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKENyb3BwZXIsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgdmFyIHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHZhciB1cmw7XG4gICAgICBpZiAoZWxlbWVudFtOQU1FU1BBQ0VdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRbTkFNRVNQQUNFXSA9IHRoaXM7XG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ2ltZycpIHtcbiAgICAgICAgdGhpcy5pc0ltZyA9IHRydWU7XG5cbiAgICAgICAgLy8gZS5nLjogXCJpbWcvcGljdHVyZS5qcGdcIlxuICAgICAgICB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3JjJykgfHwgJyc7XG4gICAgICAgIHRoaXMub3JpZ2luYWxVcmwgPSB1cmw7XG5cbiAgICAgICAgLy8gU3RvcCB3aGVuIGl0J3MgYSBibGFuayBpbWFnZVxuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGUuZy46IFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9pbWcvcGljdHVyZS5qcGdcIlxuICAgICAgICB1cmwgPSBlbGVtZW50LnNyYztcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gJ2NhbnZhcycgJiYgd2luZG93LkhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIHVybCA9IGVsZW1lbnQudG9EYXRhVVJMKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWQodXJsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHVybCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgdGhpcy5pbWFnZURhdGEgPSB7fTtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYgKCFvcHRpb25zLnJvdGF0YWJsZSAmJiAhb3B0aW9ucy5zY2FsYWJsZSkge1xuICAgICAgICBvcHRpb25zLmNoZWNrT3JpZW50YXRpb24gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gT25seSBJRTEwKyBzdXBwb3J0cyBUeXBlZCBBcnJheXNcbiAgICAgIGlmICghb3B0aW9ucy5jaGVja09yaWVudGF0aW9uIHx8ICF3aW5kb3cuQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgdGhpcy5jbG9uZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIERldGVjdCB0aGUgbWltZSB0eXBlIG9mIHRoZSBpbWFnZSBkaXJlY3RseSBpZiBpdCBpcyBhIERhdGEgVVJMXG4gICAgICBpZiAoUkVHRVhQX0RBVEFfVVJMLnRlc3QodXJsKSkge1xuICAgICAgICAvLyBSZWFkIEFycmF5QnVmZmVyIGZyb20gRGF0YSBVUkwgb2YgSlBFRyBpbWFnZXMgZGlyZWN0bHkgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgICAgICBpZiAoUkVHRVhQX0RBVEFfVVJMX0pQRUcudGVzdCh1cmwpKSB7XG4gICAgICAgICAgdGhpcy5yZWFkKGRhdGFVUkxUb0FycmF5QnVmZmVyKHVybCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE9ubHkgYSBKUEVHIGltYWdlIG1heSBjb250YWlucyBFeGlmIE9yaWVudGF0aW9uIGluZm9ybWF0aW9uLFxuICAgICAgICAgIC8vIHRoZSByZXN0IHR5cGVzIG9mIERhdGEgVVJMcyBhcmUgbm90IG5lY2Vzc2FyeSB0byBjaGVjayBvcmllbnRhdGlvbiBhdCBhbGwuXG4gICAgICAgICAgdGhpcy5jbG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gMS4gRGV0ZWN0IHRoZSBtaW1lIHR5cGUgb2YgdGhlIGltYWdlIGJ5IGEgWE1MSHR0cFJlcXVlc3QuXG4gICAgICAvLyAyLiBMb2FkIHRoZSBpbWFnZSBhcyBBcnJheUJ1ZmZlciBmb3IgcmVhZGluZyBvcmllbnRhdGlvbiBpZiBpdHMgYSBKUEVHIGltYWdlLlxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgdmFyIGNsb25lID0gdGhpcy5jbG9uZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5yZWxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy54aHIgPSB4aHI7XG5cbiAgICAgIC8vIDEuIENyb3NzIG9yaWdpbiByZXF1ZXN0cyBhcmUgb25seSBzdXBwb3J0ZWQgZm9yIHByb3RvY29sIHNjaGVtZXM6XG4gICAgICAvLyBodHRwLCBodHRwcywgZGF0YSwgY2hyb21lLCBjaHJvbWUtZXh0ZW5zaW9uLlxuICAgICAgLy8gMi4gQWNjZXNzIHRvIFhNTEh0dHBSZXF1ZXN0IGZyb20gYSBEYXRhIFVSTCB3aWxsIGJlIGJsb2NrZWQgYnkgQ09SUyBwb2xpY3lcbiAgICAgIC8vIGluIHNvbWUgYnJvd3NlcnMgYXMgSUUxMSBhbmQgU2FmYXJpLlxuICAgICAgeGhyLm9uYWJvcnQgPSBjbG9uZTtcbiAgICAgIHhoci5vbmVycm9yID0gY2xvbmU7XG4gICAgICB4aHIub250aW1lb3V0ID0gY2xvbmU7XG4gICAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQWJvcnQgdGhlIHJlcXVlc3QgZGlyZWN0bHkgaWYgaXQgbm90IGEgSlBFRyBpbWFnZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgICAgIGlmICh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpICE9PSBNSU1FX1RZUEVfSlBFRykge1xuICAgICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMucmVhZCh4aHIucmVzcG9uc2UpO1xuICAgICAgfTtcbiAgICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnJlbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy54aHIgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgLy8gQnVzdCBjYWNoZSB3aGVuIHRoZXJlIGlzIGEgXCJjcm9zc09yaWdpblwiIHByb3BlcnR5IHRvIGF2b2lkIGJyb3dzZXIgY2FjaGUgZXJyb3JcbiAgICAgIGlmIChvcHRpb25zLmNoZWNrQ3Jvc3NPcmlnaW4gJiYgaXNDcm9zc09yaWdpblVSTCh1cmwpICYmIGVsZW1lbnQuY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgdXJsID0gYWRkVGltZXN0YW1wKHVybCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSB0aGlyZCBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgZm9yIGF2b2lkaW5nIHNpZGUtZWZmZWN0ICgjNjgyKVxuICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBlbGVtZW50LmNyb3NzT3JpZ2luID09PSAndXNlLWNyZWRlbnRpYWxzJztcbiAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZChhcnJheUJ1ZmZlcikge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuXG4gICAgICAvLyBSZXNldCB0aGUgb3JpZW50YXRpb24gdmFsdWUgdG8gaXRzIGRlZmF1bHQgdmFsdWUgMVxuICAgICAgLy8gYXMgc29tZSBpT1MgYnJvd3NlcnMgd2lsbCByZW5kZXIgaW1hZ2Ugd2l0aCBpdHMgb3JpZW50YXRpb25cbiAgICAgIHZhciBvcmllbnRhdGlvbiA9IHJlc2V0QW5kR2V0T3JpZW50YXRpb24oYXJyYXlCdWZmZXIpO1xuICAgICAgdmFyIHJvdGF0ZSA9IDA7XG4gICAgICB2YXIgc2NhbGVYID0gMTtcbiAgICAgIHZhciBzY2FsZVkgPSAxO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID4gMSkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBVUkwgd2hpY2ggaGFzIHRoZSBkZWZhdWx0IG9yaWVudGF0aW9uIHZhbHVlXG4gICAgICAgIHRoaXMudXJsID0gYXJyYXlCdWZmZXJUb0RhdGFVUkwoYXJyYXlCdWZmZXIsIE1JTUVfVFlQRV9KUEVHKTtcbiAgICAgICAgdmFyIF9wYXJzZU9yaWVudGF0aW9uID0gcGFyc2VPcmllbnRhdGlvbihvcmllbnRhdGlvbik7XG4gICAgICAgIHJvdGF0ZSA9IF9wYXJzZU9yaWVudGF0aW9uLnJvdGF0ZTtcbiAgICAgICAgc2NhbGVYID0gX3BhcnNlT3JpZW50YXRpb24uc2NhbGVYO1xuICAgICAgICBzY2FsZVkgPSBfcGFyc2VPcmllbnRhdGlvbi5zY2FsZVk7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5yb3RhdGFibGUpIHtcbiAgICAgICAgaW1hZ2VEYXRhLnJvdGF0ZSA9IHJvdGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnNjYWxhYmxlKSB7XG4gICAgICAgIGltYWdlRGF0YS5zY2FsZVggPSBzY2FsZVg7XG4gICAgICAgIGltYWdlRGF0YS5zY2FsZVkgPSBzY2FsZVk7XG4gICAgICB9XG4gICAgICB0aGlzLmNsb25lKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsb25lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHVybCA9IHRoaXMudXJsO1xuICAgICAgdmFyIGNyb3NzT3JpZ2luID0gZWxlbWVudC5jcm9zc09yaWdpbjtcbiAgICAgIHZhciBjcm9zc09yaWdpblVybCA9IHVybDtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2hlY2tDcm9zc09yaWdpbiAmJiBpc0Nyb3NzT3JpZ2luVVJMKHVybCkpIHtcbiAgICAgICAgaWYgKCFjcm9zc09yaWdpbikge1xuICAgICAgICAgIGNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCdXN0IGNhY2hlIHdoZW4gdGhlcmUgaXMgbm90IGEgXCJjcm9zc09yaWdpblwiIHByb3BlcnR5ICgjNTE5KVxuICAgICAgICBjcm9zc09yaWdpblVybCA9IGFkZFRpbWVzdGFtcCh1cmwpO1xuICAgICAgfVxuICAgICAgdGhpcy5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuICAgICAgdGhpcy5jcm9zc09yaWdpblVybCA9IGNyb3NzT3JpZ2luVXJsO1xuICAgICAgdmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpZiAoY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgIH1cbiAgICAgIGltYWdlLnNyYyA9IGNyb3NzT3JpZ2luVXJsIHx8IHVybDtcbiAgICAgIGltYWdlLmFsdCA9IGVsZW1lbnQuYWx0IHx8ICdUaGUgaW1hZ2UgdG8gY3JvcCc7XG4gICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICBpbWFnZS5vbmxvYWQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICBpbWFnZS5vbmVycm9yID0gdGhpcy5zdG9wLmJpbmQodGhpcyk7XG4gICAgICBhZGRDbGFzcyhpbWFnZSwgQ0xBU1NfSElERSk7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGltYWdlLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgIHZhciBpbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgICBpbWFnZS5vbmxvYWQgPSBudWxsO1xuICAgICAgaW1hZ2Uub25lcnJvciA9IG51bGw7XG4gICAgICB0aGlzLnNpemluZyA9IHRydWU7XG5cbiAgICAgIC8vIE1hdGNoIGFsbCBicm93c2VycyB0aGF0IHVzZSBXZWJLaXQgYXMgdGhlIGxheW91dCBlbmdpbmUgaW4gaU9TIGRldmljZXMsXG4gICAgICAvLyBzdWNoIGFzIFNhZmFyaSBmb3IgaU9TLCBDaHJvbWUgZm9yIGlPUywgYW5kIGluLWFwcCBicm93c2Vycy5cbiAgICAgIHZhciBpc0lPU1dlYktpdCA9IFdJTkRPVy5uYXZpZ2F0b3IgJiYgLyg/OmlQYWR8aVBob25lfGlQb2QpLio/QXBwbGVXZWJLaXQvaS50ZXN0KFdJTkRPVy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciBkb25lID0gZnVuY3Rpb24gZG9uZShuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHQpIHtcbiAgICAgICAgYXNzaWduKF90aGlzMi5pbWFnZURhdGEsIHtcbiAgICAgICAgICBuYXR1cmFsV2lkdGg6IG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiBuYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgIGFzcGVjdFJhdGlvOiBuYXR1cmFsV2lkdGggLyBuYXR1cmFsSGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpczIuaW5pdGlhbEltYWdlRGF0YSA9IGFzc2lnbih7fSwgX3RoaXMyLmltYWdlRGF0YSk7XG4gICAgICAgIF90aGlzMi5zaXppbmcgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMyLnNpemVkID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMyLmJ1aWxkKCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBNb3N0IG1vZGVybiBicm93c2VycyAoZXhjZXB0cyBpT1MgV2ViS2l0KVxuICAgICAgaWYgKGltYWdlLm5hdHVyYWxXaWR0aCAmJiAhaXNJT1NXZWJLaXQpIHtcbiAgICAgICAgZG9uZShpbWFnZS5uYXR1cmFsV2lkdGgsIGltYWdlLm5hdHVyYWxIZWlnaHQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc2l6aW5nSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB0aGlzLnNpemluZ0ltYWdlID0gc2l6aW5nSW1hZ2U7XG4gICAgICBzaXppbmdJbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbmUoc2l6aW5nSW1hZ2Uud2lkdGgsIHNpemluZ0ltYWdlLmhlaWdodCk7XG4gICAgICAgIGlmICghaXNJT1NXZWJLaXQpIHtcbiAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKHNpemluZ0ltYWdlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHNpemluZ0ltYWdlLnNyYyA9IGltYWdlLnNyYztcblxuICAgICAgLy8gaU9TIFdlYktpdCB3aWxsIGNvbnZlcnQgdGhlIGltYWdlIGF1dG9tYXRpY2FsbHlcbiAgICAgIC8vIHdpdGggaXRzIG9yaWVudGF0aW9uIG9uY2UgYXBwZW5kIGl0IGludG8gRE9NICgjMjc5KVxuICAgICAgaWYgKCFpc0lPU1dlYktpdCkge1xuICAgICAgICBzaXppbmdJbWFnZS5zdHlsZS5jc3NUZXh0ID0gJ2xlZnQ6MDsnICsgJ21heC1oZWlnaHQ6bm9uZSFpbXBvcnRhbnQ7JyArICdtYXgtd2lkdGg6bm9uZSFpbXBvcnRhbnQ7JyArICdtaW4taGVpZ2h0OjAhaW1wb3J0YW50OycgKyAnbWluLXdpZHRoOjAhaW1wb3J0YW50OycgKyAnb3BhY2l0eTowOycgKyAncG9zaXRpb246YWJzb2x1dGU7JyArICd0b3A6MDsnICsgJ3otaW5kZXg6LTE7JztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzaXppbmdJbWFnZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHZhciBpbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgICBpbWFnZS5vbmxvYWQgPSBudWxsO1xuICAgICAgaW1hZ2Uub25lcnJvciA9IG51bGw7XG4gICAgICBpbWFnZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGltYWdlKTtcbiAgICAgIHRoaXMuaW1hZ2UgPSBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJidWlsZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZCgpIHtcbiAgICAgIGlmICghdGhpcy5zaXplZCB8fCB0aGlzLnJlYWR5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBpbWFnZSA9IHRoaXMuaW1hZ2U7XG5cbiAgICAgIC8vIENyZWF0ZSBjcm9wcGVyIGVsZW1lbnRzXG4gICAgICB2YXIgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgdmFyIHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBURU1QTEFURTtcbiAgICAgIHZhciBjcm9wcGVyID0gdGVtcGxhdGUucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1jb250YWluZXJcIikpO1xuICAgICAgdmFyIGNhbnZhcyA9IGNyb3BwZXIucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1jYW52YXNcIikpO1xuICAgICAgdmFyIGRyYWdCb3ggPSBjcm9wcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItZHJhZy1ib3hcIikpO1xuICAgICAgdmFyIGNyb3BCb3ggPSBjcm9wcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItY3JvcC1ib3hcIikpO1xuICAgICAgdmFyIGZhY2UgPSBjcm9wQm94LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItZmFjZVwiKSk7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgIHRoaXMuY3JvcHBlciA9IGNyb3BwZXI7XG4gICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgIHRoaXMuZHJhZ0JveCA9IGRyYWdCb3g7XG4gICAgICB0aGlzLmNyb3BCb3ggPSBjcm9wQm94O1xuICAgICAgdGhpcy52aWV3Qm94ID0gY3JvcHBlci5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLXZpZXctYm94XCIpKTtcbiAgICAgIHRoaXMuZmFjZSA9IGZhY2U7XG4gICAgICBjYW52YXMuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgICAvLyBIaWRlIHRoZSBvcmlnaW5hbCBpbWFnZVxuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgQ0xBU1NfSElEREVOKTtcblxuICAgICAgLy8gSW5zZXJ0cyB0aGUgY3JvcHBlciBhZnRlciB0byB0aGUgY3VycmVudCBpbWFnZVxuICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShjcm9wcGVyLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcblxuICAgICAgLy8gU2hvdyB0aGUgaGlkZGVuIGltYWdlXG4gICAgICByZW1vdmVDbGFzcyhpbWFnZSwgQ0xBU1NfSElERSk7XG4gICAgICB0aGlzLmluaXRQcmV2aWV3KCk7XG4gICAgICB0aGlzLmJpbmQoKTtcbiAgICAgIG9wdGlvbnMuaW5pdGlhbEFzcGVjdFJhdGlvID0gTWF0aC5tYXgoMCwgb3B0aW9ucy5pbml0aWFsQXNwZWN0UmF0aW8pIHx8IE5hTjtcbiAgICAgIG9wdGlvbnMuYXNwZWN0UmF0aW8gPSBNYXRoLm1heCgwLCBvcHRpb25zLmFzcGVjdFJhdGlvKSB8fCBOYU47XG4gICAgICBvcHRpb25zLnZpZXdNb2RlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMywgTWF0aC5yb3VuZChvcHRpb25zLnZpZXdNb2RlKSkpIHx8IDA7XG4gICAgICBhZGRDbGFzcyhjcm9wQm94LCBDTEFTU19ISURERU4pO1xuICAgICAgaWYgKCFvcHRpb25zLmd1aWRlcykge1xuICAgICAgICBhZGRDbGFzcyhjcm9wQm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1kYXNoZWRcIikpLCBDTEFTU19ISURERU4pO1xuICAgICAgfVxuICAgICAgaWYgKCFvcHRpb25zLmNlbnRlcikge1xuICAgICAgICBhZGRDbGFzcyhjcm9wQm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1jZW50ZXJcIikpLCBDTEFTU19ISURERU4pO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZCkge1xuICAgICAgICBhZGRDbGFzcyhjcm9wcGVyLCBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWJnXCIpKTtcbiAgICAgIH1cbiAgICAgIGlmICghb3B0aW9ucy5oaWdobGlnaHQpIHtcbiAgICAgICAgYWRkQ2xhc3MoZmFjZSwgQ0xBU1NfSU5WSVNJQkxFKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmNyb3BCb3hNb3ZhYmxlKSB7XG4gICAgICAgIGFkZENsYXNzKGZhY2UsIENMQVNTX01PVkUpO1xuICAgICAgICBzZXREYXRhKGZhY2UsIERBVEFfQUNUSU9OLCBBQ1RJT05fQUxMKTtcbiAgICAgIH1cbiAgICAgIGlmICghb3B0aW9ucy5jcm9wQm94UmVzaXphYmxlKSB7XG4gICAgICAgIGFkZENsYXNzKGNyb3BCb3guZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWxpbmVcIikpLCBDTEFTU19ISURERU4pO1xuICAgICAgICBhZGRDbGFzcyhjcm9wQm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1wb2ludFwiKSksIENMQVNTX0hJRERFTik7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICB0aGlzLnNldERyYWdNb2RlKG9wdGlvbnMuZHJhZ01vZGUpO1xuICAgICAgaWYgKG9wdGlvbnMuYXV0b0Nyb3ApIHtcbiAgICAgICAgdGhpcy5jcm9wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5kYXRhKTtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMucmVhZHkpKSB7XG4gICAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX1JFQURZLCBvcHRpb25zLnJlYWR5LCB7XG4gICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgRVZFTlRfUkVBRFkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bmJ1aWxkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYnVpbGQoKSB7XG4gICAgICBpZiAoIXRoaXMucmVhZHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgICAgdGhpcy51bmJpbmQoKTtcbiAgICAgIHRoaXMucmVzZXRQcmV2aWV3KCk7XG4gICAgICB2YXIgcGFyZW50Tm9kZSA9IHRoaXMuY3JvcHBlci5wYXJlbnROb2RlO1xuICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNyb3BwZXIpO1xuICAgICAgfVxuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCBDTEFTU19ISURERU4pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bmNyZWF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmNyZWF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgIHRoaXMudW5idWlsZCgpO1xuICAgICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3JvcHBlZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNpemluZykge1xuICAgICAgICB0aGlzLnNpemluZ0ltYWdlLm9ubG9hZCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2l6aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2l6ZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yZWxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy54aHIub25hYm9ydCA9IG51bGw7XG4gICAgICAgIHRoaXMueGhyLmFib3J0KCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBubyBjb25mbGljdCBjcm9wcGVyIGNsYXNzLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSBUaGUgY3JvcHBlciBjbGFzcy5cbiAgICAgKi9cbiAgfV0sIFt7XG4gICAga2V5OiBcIm5vQ29uZmxpY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICAgIHdpbmRvdy5Dcm9wcGVyID0gQW5vdGhlckNyb3BwZXI7XG4gICAgICByZXR1cm4gQ3JvcHBlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGRlZmF1bHQgb3B0aW9ucy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBuZXcgZGVmYXVsdCBvcHRpb25zLlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInNldERlZmF1bHRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldERlZmF1bHRzKG9wdGlvbnMpIHtcbiAgICAgIGFzc2lnbihERUZBVUxUUywgaXNQbGFpbk9iamVjdChvcHRpb25zKSAmJiBvcHRpb25zKTtcbiAgICB9XG4gIH1dKTtcbn0oKTtcbmFzc2lnbihDcm9wcGVyLnByb3RvdHlwZSwgcmVuZGVyLCBwcmV2aWV3LCBldmVudHMsIGhhbmRsZXJzLCBjaGFuZ2UsIG1ldGhvZHMpO1xuXG5leHBvcnQgeyBDcm9wcGVyIGFzIGRlZmF1bHQgfTtcbiIsICJpbXBvcnQgQ3JvcHBlciBmcm9tICdjcm9wcGVyanMnXG5cbndpbmRvdy5JbWFnZUxpYnJhcnlDcm9wcGVyID0gQ3JvcHBlclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQVVBLFNBQVMsUUFBUSxHQUFHLEdBQUc7QUFDckIsTUFBSSxJQUFJLE9BQU8sS0FBSyxDQUFDO0FBQ3JCLE1BQUksT0FBTyx1QkFBdUI7QUFDaEMsUUFBSSxJQUFJLE9BQU8sc0JBQXNCLENBQUM7QUFDdEMsVUFBTSxJQUFJLEVBQUUsT0FBTyxTQUFVQSxJQUFHO0FBQzlCLGFBQU8sT0FBTyx5QkFBeUIsR0FBR0EsRUFBQyxFQUFFO0FBQUEsSUFDL0MsQ0FBQyxJQUFJLEVBQUUsS0FBSyxNQUFNLEdBQUcsQ0FBQztBQUFBLEVBQ3hCO0FBQ0EsU0FBTztBQUNUO0FBQ0EsU0FBUyxlQUFlLEdBQUc7QUFDekIsV0FBUyxJQUFJLEdBQUcsSUFBSSxVQUFVLFFBQVEsS0FBSztBQUN6QyxRQUFJLElBQUksUUFBUSxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDO0FBQy9DLFFBQUksSUFBSSxRQUFRLE9BQU8sQ0FBQyxHQUFHLElBQUUsRUFBRSxRQUFRLFNBQVVBLElBQUc7QUFDbEQsc0JBQWdCLEdBQUdBLElBQUcsRUFBRUEsRUFBQyxDQUFDO0FBQUEsSUFDNUIsQ0FBQyxJ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QUFJLFlBQVk7QUFDZCxtQkFBVyxZQUFZLEtBQUssT0FBTztBQUFBLE1BQ3JDO0FBQ0Esa0JBQVksS0FBSyxTQUFTLFlBQVk7QUFBQSxJQUN4QztBQUFBLEVBQ0YsR0FBRztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsT0FBTyxTQUFTLFdBQVc7QUFDekIsVUFBSSxLQUFLLE9BQU87QUFDZCxhQUFLLFFBQVE7QUFDYixhQUFLLFFBQVE7QUFDYixhQUFLLFVBQVU7QUFBQSxNQUNqQixXQUFXLEtBQUssUUFBUTtBQUN0QixhQUFLLFlBQVksU0FBUztBQUMxQixhQUFLLFNBQVM7QUFDZCxhQUFLLFFBQVE7QUFBQSxNQUNmLFdBQVcsS0FBSyxXQUFXO0FBQ3pCLGFBQUssSUFBSSxVQUFVO0FBQ25CLGFBQUssSUFBSSxNQUFNO0FBQUEsTUFDakIsV0FBVyxLQUFLLE9BQU87QUFDckIsYUFBSyxLQUFLO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUYsQ0FBQyxHQUFHLENBQUM7QUFBQSxJQUNILEtBQUs7QUFBQSxJQUNMLE9BQU8sU0FBUyxhQUFhO0FBQzNCLGFBQU8sVUFBVTtBQUNqQixhQUFPRDtBQUFBLElBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUYsR0FBRztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsT0FBTyxTQUFTLFlBQVksU0FBUztBQUNuQyxhQUFPLFVBQVUsY0FBYyxPQUFPLEtBQUssT0FBTztBQUFBLElBQ3BEO0FBQUEsRUFDRixDQUFDLENBQUM7QUFDSixHQUFFO0FBQ0YsT0FBTyxRQUFRLFdBQVcsUUFBUSxTQUFTLFFBQVEsVUFBVSxRQUFRLE9BQU87OztBQzVyRzVFLE9BQU8sc0JBQXNCOyIsCiAgIm5hbWVzIjogWyJyIiwgIm8iLCAiaXNQb3NpdGl2ZU51bWJlciIsICJhc3NpZ24iLCAibGlzdGVuZXIiLCAicm90YXRlIiwgInNjYWxlWCIsICJzY2FsZVkiLCAicmVuZGVyIiwgInByZXZpZXciLCAiY2hhbmdlIiwgImNoZWNrIiwgImdldERhdGEiLCAic2V0RGF0YSIsICJzY2FsZSIsICJDcm9wcGVyIiwgImRvbmUiXQp9Cg==
