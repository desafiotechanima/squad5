"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}var ExtraContentProgressRequest=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"callEndpoint",value:function(e,n){$.post("/extracontentprogress/".concat(e)).done(n)}},{key:"callEndpointTask",value:function(e,n){$.post("/extracontentprogress/task/".concat(e)).done(n)}}]),e}();