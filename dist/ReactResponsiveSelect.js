!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("lodash"),require("react-dom")):"function"==typeof define&&define.amd?define("ReactResponsiveSelect",["react","lodash","react-dom"],t):"object"==typeof exports?exports.ReactResponsiveSelect=t(require("react"),require("lodash"),require("react-dom")):e.ReactResponsiveSelect=t(e.react,e.lodash,e["react-dom"])}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=22)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BOOTSTRAP_STATE="BOOTSTRAP_STATE",t.SET_IS_DRAGGING="SET_IS_DRAGGING",t.SET_OPTIONS_PANEL_OPEN="SET_OPTIONS_PANEL_OPEN",t.SET_OPTIONS_PANEL_CLOSED="SET_OPTIONS_PANEL_CLOSED",t.SET_MULTISELECT_OPTIONS="SET_MULTISELECT_OPTIONS",t.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION="SET_OPTIONS_PANEL_CLOSED_NO_SELECTION",t.SET_SELECTED_INDEX="SET_SELECTED_INDEX",t.SET_NEXT_SELECTED_INDEX="SET_NEXT_SELECTED_INDEX"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(21),c=r(u),p=function(e){return function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"checkForValidity",value:function(){var e=this.props,t=e.scrollIntoViewElementSelector,n=e.scrollIntoViewScrollPaneRef;if(!n)throw"scrollIntoViewIIHOC requires a valid scrollIntoViewScrollPaneRef ref lookup function prop";if(!t)throw"crollIntoViewIIHOC requires a valid scrollIntoViewElementSelector css selector string prop"}},{key:"componentDidMount",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidMount",this)&&a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidMount",this).call(this),this.checkForValidity()}},{key:"scrollIntoView",value:function(){var e=this.props,t=e.scrollIntoViewElementSelector,n=e.scrollIntoViewScrollPaneRef,r=e.isTouchDevice;this.scrollPaneDOM=this.scrollPaneDOM||n(),this.elementDOM=this.elementDOM||c.default.findDOMNode(this);var o=this.elementDOM.classList.contains(t);if(!r&&o){var i=this.scrollPaneDOM.getBoundingClientRect().top,l=this.scrollPaneDOM.getBoundingClientRect().bottom,s=this.elementDOM.getBoundingClientRect().top,a=this.elementDOM.getBoundingClientRect().bottom;a>l&&(this.scrollPaneDOM.scrollTop+=this.elementDOM.offsetHeight),s<i&&(this.scrollPaneDOM.scrollTop-=this.elementDOM.offsetHeight),"0"===this.elementDOM.getAttribute("data-key")&&(this.scrollPaneDOM.scrollTop=0)}}},{key:"componentDidUpdate",value:function(){return a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidUpdate",this)&&a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidUpdate",this).call(this),this.scrollIntoView()}},{key:"render",value:function(){return a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"render",this).call(this)}}]),t}(e)};t.default=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=r(a),c=n(2),p=r(c),d=n(9),f=r(d),y=(0,p.default)(f.default),S=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.altered,r=t.caretIcon,o=t.customLabelText,i=t.isOptionsPanelOpen,l=t.isTouchDevice,s=t.multiSelectSelectedIndexes,a=t.multiSelectSelectedOptions,c=t.name,p=t.options,d=t.nextPotentialSelectionIndex,f=t.prefix;return u.default.createElement("div",{className:"\n          rrs__select-container\n          rrs__select-container--multiselect\n          "+(l===!0?"rrs__is-touch":"rrs__is-desktop")+"\n          "+(i===!0?"rrs__options-container--visible":"")+"\n          "+(n?"rrs__has-changed":"")+"\n        ",role:"listbox",tabIndex:"0"},o&&u.default.createElement("div",{className:"rrs__label-container"},u.default.createElement("span",{className:"rrs__label"},o),r&&r),!o&&u.default.createElement("div",{className:"rrs__label-container"},u.default.createElement("span",{className:"rrs__label"},u.default.createElement("span",{className:"rrs__multiselect__label"},u.default.createElement("span",{className:"rrs__multiselect__label-text"},""+(f?f+" ":"")+a.options[0].text),a.options.length>1&&u.default.createElement("span",{className:"rrs__multiselect__label-badge"},"+ "+(a.options.length-1)))),r&&r),u.default.createElement("div",{className:"rrs__options-container",ref:function(t){if(t)return e.optionsContainer=t}},p.length>0&&p.map(function(t,n){return u.default.createElement(y,{scrollIntoViewScrollPaneRef:function(){return e.optionsContainer},scrollIntoViewElementSelector:"rrs__option--next-selection",key:n,index:n,option:t,isTouchDevice:l,multiSelectSelectedIndexes:s,nextPotentialSelectionIndex:d})})),c&&u.default.createElement("input",{type:"hidden",name:c,value:[a.options.map(function(e){return e.value})].join(",")}))}}]),t}(a.Component);S.propTypes={altered:a.PropTypes.bool,caretIcon:a.PropTypes.oneOfType([a.PropTypes.string,a.PropTypes.element]),customLabelText:a.PropTypes.oneOfType([a.PropTypes.string,a.PropTypes.bool,a.PropTypes.element]),multiSelectInitialSelectedIndexes:a.PropTypes.arrayOf(a.PropTypes.number),multiSelectSelectedIndexes:a.PropTypes.arrayOf(a.PropTypes.number),multiSelectSelectedOptions:a.PropTypes.shape({altered:a.PropTypes.bool,options:a.PropTypes.arrayOf(a.PropTypes.shape({name:a.PropTypes.string,text:a.PropTypes.string,value:a.PropTypes.string,markup:a.PropTypes.object}))}),isTouchDevice:a.PropTypes.bool,isOptionsPanelOpen:a.PropTypes.bool,name:a.PropTypes.string,nextPotentialSelectionIndex:a.PropTypes.number,onSubmit:a.PropTypes.func,options:a.PropTypes.arrayOf(a.PropTypes.shape({text:a.PropTypes.string.isRequired,value:a.PropTypes.string.isRequired})).isRequired,prefix:a.PropTypes.string},t.default=S},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=r(a),c=n(2),p=r(c),d=n(10),f=r(d),y=(0,p.default)(f.default),S=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.altered,r=t.caretIcon,o=t.customLabelText,i=t.isOptionsPanelOpen,l=t.isTouchDevice,s=t.name,a=t.nextPotentialSelectionIndex,c=t.options,p=t.prefix,d=t.singleSelectSelectedIndex,f=t.singleSelectSelectedOption;return u.default.createElement("div",{className:"\n          rrs__select-container\n          "+(l===!0?"rrs__is-touch":"rrs__is-desktop")+"\n          "+(i===!0?"rrs__options-container--visible":"")+"\n          "+(n?"rrs__has-changed":"")+"\n        ",role:"listbox",tabIndex:"0"},o&&u.default.createElement("div",{className:"rrs__label-container"},u.default.createElement("span",{className:"rrs__label"},o),r&&r),!o&&u.default.createElement("div",{className:"rrs__label-container"},u.default.createElement("span",{className:"rrs__label"},p&&u.default.createElement("span",null,p),f.text),r&&r),u.default.createElement("div",{className:"rrs__options-container",ref:function(t){if(t)return e.optionsContainer=t}},c.length>0&&c.map(function(t,n){return u.default.createElement(y,{scrollIntoViewScrollPaneRef:function(){return e.optionsContainer},scrollIntoViewElementSelector:"rrs__option--next-selection",key:n,index:n,isTouchDevice:l,option:t,singleSelectSelectedIndex:d,nextPotentialSelectionIndex:a})})),s&&u.default.createElement("input",{type:"hidden",name:s,value:f.value}))}}]),t}(a.Component);S.propTypes={altered:a.PropTypes.bool,caretIcon:a.PropTypes.oneOfType([a.PropTypes.string,a.PropTypes.element]),customLabelText:a.PropTypes.oneOfType([a.PropTypes.string,a.PropTypes.bool,a.PropTypes.element]),singleSelectInitialIndex:a.PropTypes.number,singleSelectSelectedIndex:a.PropTypes.number,singleSelectSelectedOption:a.PropTypes.shape({text:a.PropTypes.string,value:a.PropTypes.string}),isTouchDevice:a.PropTypes.bool,isOptionsPanelOpen:a.PropTypes.bool,name:a.PropTypes.string,nextPotentialSelectionIndex:a.PropTypes.number,onSubmit:a.PropTypes.func,options:a.PropTypes.arrayOf(a.PropTypes.shape({text:a.PropTypes.string.isRequired,value:a.PropTypes.string.isRequired})).isRequired,prefix:a.PropTypes.string,selectedValue:a.PropTypes.string},t.default=S},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={TAB:9,ENTER:13,SPACE:32,ESCAPE:27,UP:38,DOWN:40}},function(e,t,n){"use strict";function r(e,t,n,r){return"increment"===e?t===!1?n:n===r-1?r-1:n+1:"decrement"===e?t===!1?n:0===n?0:n-1:void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(){return"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e){return a({},e,{multiSelectSelectedIndexes:[].concat(i(D.multiSelectSelectedIndexes)),multiSelectSelectedOptions:a({},D.multiSelectSelectedOptions)})}function s(e,t){switch(t.type){case c.BOOTSTRAP_STATE:var n=(0,d.default)(t.value.options,t.value.selectedValue),r=(0,y.default)(t.value.options,t.value.selectedValues),o=(0,_.default)(t.value.options,t.value.selectedValues,t.value.name);return a({},e,{isTouchDevice:t.value.isTouchDevice,isMultiSelect:t.value.multiselect||!1,name:t.value.name,options:t.value.options,altered:!1,singleSelectInitialIndex:n,singleSelectSelectedIndex:n,singleSelectSelectedOption:a({name:t.value.name},t.value.options[n]),nextPotentialSelectionIndex:n,multiSelectInitialSelectedIndexes:r,multiSelectSelectedIndexes:r,multiSelectSelectedOptions:{options:o}});case c.SET_IS_DRAGGING:return a({},e,{isDragging:t.boolean});case c.SET_OPTIONS_PANEL_OPEN:var i=a({},e,{isOptionsPanelOpen:!0,nextPotentialSelectionIndex:e.singleSelectSelectedIndex,singleSelectSelectedOption:a({name:e.name},e.options[e.singleSelectSelectedIndex])});return(0,x.default)(i);case c.SET_OPTIONS_PANEL_CLOSED:var s=a({},e,{isOptionsPanelOpen:!1,singleSelectSelectedIndex:e.nextPotentialSelectionIndex,singleSelectSelectedOption:a({name:e.name},e.options[e.nextPotentialSelectionIndex])});return(0,x.default)(s);case c.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION:return a({},e,{isOptionsPanelOpen:!1});case c.SET_NEXT_SELECTED_INDEX:return a({},e,{nextPotentialSelectionIndex:t.optionIndex});case c.SET_SELECTED_INDEX:return a({},e,{nextPotentialSelectionIndex:t.optionIndex,singleSelectSelectedIndex:t.optionIndex});case c.SET_MULTISELECT_OPTIONS:var u=0===e.multiSelectSelectedIndexes[0]&&1===e.multiSelectSelectedIndexes.length,p=e.multiSelectSelectedIndexes.length>0&&!u&&0===t.optionIndex,f=u&&0!==t.optionIndex;if(p){var S=(0,N.default)(e);return(0,x.default)(S)}f&&(e=l(e));var h=e.multiSelectSelectedIndexes.indexOf(t.optionIndex),P=a({},e,{nextPotentialSelectionIndex:t.optionIndex,multiSelectSelectedIndexes:h===-1?(0,O.default)(e,t.optionIndex):(0,T.default)(e,h),multiSelectSelectedOptions:h===-1?(0,v.default)(e,t.optionIndex):(0,E.default)(e,h)});return 0===P.multiSelectSelectedOptions.options.length&&(P=(0,N.default)(e)),(0,x.default)(P)}}Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=s;var u=n(1),c=o(u),p=n(15),d=r(p),f=n(16),y=r(f),S=n(13),_=r(S),h=n(11),O=r(h),P=n(18),T=r(P),m=n(12),v=r(m),b=n(19),E=r(b),I=n(17),x=r(I),g=n(14),N=r(g),D=t.initialState={isTouchDevice:!1,isMultiSelect:!1,name:void 0,options:[],isDragging:!1,isOptionsPanelOpen:!1,altered:!1,singleSelectInitialIndex:0,singleSelectSelectedIndex:0,singleSelectSelectedOption:{},nextPotentialSelectionIndex:0,multiSelectInitialSelectedIndexes:[0],multiSelectSelectedOptions:{options:[]},multiSelectSelectedIndexes:[]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=r(a),c=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.nextPotentialSelectionIndex,r=t.option,o=t.index,i=t.multiSelectSelectedIndexes;return u.default.createElement("div",{role:"option","data-key":o,ref:function(t){e["option_"+o]=t},className:"\n          rrs__option\n          "+(i.some(function(e){return e===o})?"rrs__option--selected":"")+"\n          "+(n===o?"rrs__option--next-selection":"")+"\n        "},r.markup||r.text)}}]),t}(a.Component);c.propTypes={index:a.PropTypes.number.isRequired,multiSelectSelectedIndexes:a.PropTypes.arrayOf(a.PropTypes.number),nextPotentialSelectionIndex:a.PropTypes.number,option:a.PropTypes.shape({text:a.PropTypes.string.isRequired,value:a.PropTypes.string.isRequired,markup:a.PropTypes.element}).isRequired},t.default=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=r(a),c=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.nextPotentialSelectionIndex,r=t.option,o=t.index,i=t.singleSelectSelectedIndex;return u.default.createElement("div",{role:"option","data-key":o,ref:function(t){e["option_"+o]=t},className:"\n          rrs__option\n          "+(i===o?"rrs__option--selected":"")+"\n          "+(n===o?"rrs__option--next-selection":"")+"\n        "},r.markup||r.text)}}]),t}(a.Component);c.propTypes={index:a.PropTypes.number.isRequired,singleSelectSelectedIndex:a.PropTypes.number,nextPotentialSelectionIndex:a.PropTypes.number,option:a.PropTypes.shape({text:a.PropTypes.string.isRequired,value:a.PropTypes.string.isRequired,markup:a.PropTypes.element}).isRequired},t.default=c},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){return[].concat(r(e.multiSelectSelectedIndexes),[t])}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){return{options:[].concat(r(e.multiSelectSelectedOptions.options),[i({name:e.name},e.options[t])])}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=o},function(e,t,n){"use strict";function r(e,t,n){return t?e.filter(function(e){return t.some(function(t){return t===e.value})}).map(function(e){return o({name:n},e)}):[o({name:n},e[0])]}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r},function(e,t,n){"use strict";function r(e){return o({},e,{multiSelectSelectedIndexes:[0],multiSelectSelectedOptions:{options:[o({name:e.name},e.options[0])]},nextPotentialSelectionIndex:0})}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r},function(e,t,n){"use strict";function r(e,t){var n=e.map(function(e){return e.value}).indexOf(t);return n>-1?n:0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.map(function(e,n){return t.some(function(t){return e.value===t})&&n||void 0}).filter(function(e){return void 0!==e});return n.length&&n||[0]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return e.isMultiSelect?!a.default.isEqual(e.multiSelectInitialSelectedIndexes,e.multiSelectSelectedIndexes):e.singleSelectSelectedIndex!==e.singleSelectInitialIndex}function i(e){return l({},e,{altered:o(e)})}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.isAltered=o,t.default=i;var s=n(20),a=r(s)},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){return[].concat(r(e.multiSelectSelectedIndexes.slice(0,t)),r(e.multiSelectSelectedIndexes.slice(t+1)))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){return{options:[].concat(r(e.multiSelectSelectedOptions.options.slice(0,t)),r(e.multiSelectSelectedOptions.options.slice(t+1)))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("react-dom")},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),p=o(c),d=n(1),f=r(d),y=n(5),S=o(y),_=n(8),h=o(_),O=n(7),P=o(O),T=n(6),m=o(T),v=n(4),b=o(v),E=n(3),I=o(E),x=function(e){function t(e){var n;i(this,t);var r=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state=_.initialState,r.reducer=h.default,n=r,l(r,n)}return s(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.options,n=e.selectedValue,r=e.selectedValues,o=e.name,i=e.multiselect,l=(0,P.default)();this.updateState({type:f.BOOTSTRAP_STATE,value:{options:t,selectedValue:n,selectedValues:r,name:o,isTouchDevice:l,multiselect:i}}),this.OPTION_NODES_LENGTH=t.length,this.handleBlur=this.handleBlur.bind(this),this.handleTouchMove=this.handleTouchMove.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this),this.handleClick=this.handleClick.bind(this),this.handleKeyEvent=this.handleKeyEvent.bind(this),this.listeners=l?{onBlur:this.handleBlur,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleClick}:{onBlur:this.handleBlur,onMouseDown:this.handleClick,onKeyDown:this.handleKeyEvent}}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,r=n.singleSelectSelectedOption,o=n.multiSelectSelectedOptions,i=n.isMultiSelect,l=n.altered,s=this.props.onChange;if(i){var u=t.multiSelectSelectedOptions.options,c=o.options,p=u.length&&(u.length!==c.length||u[0].value!==c[0].value);if(p)return s(a({},o,{altered:l}))}else{var d=t.singleSelectSelectedOption.value,f=r.value,y=d&&d!==f;if(y)return s(a({},r,{altered:l}))}}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefix,r=t.caretIcon,o=t.customLabelRenderer,i=this.state,l=i.altered,s=i.singleSelectInitialIndex,u=i.isOptionsPanelOpen,c=i.isTouchDevice,d=i.multiSelectInitialSelectedIndexes,f=i.multiSelectSelectedIndexes,y=i.multiSelectSelectedOptions,S=i.name,_=i.nextPotentialSelectionIndex,h=i.options,O=i.singleSelectSelectedIndex,P=i.singleSelectSelectedOption,T=i.isMultiSelect;if(T){var m=o&&o(y)||!1;return p.default.createElement("div",a({ref:function(t){e.selectBox=t}},this.listeners),p.default.createElement(I.default,{altered:l,isTouchDevice:c,caretIcon:r,customLabelText:m,prefix:n,name:S,multiSelectInitialSelectedIndexes:d,multiSelectSelectedOptions:y,multiSelectSelectedIndexes:f,nextPotentialSelectionIndex:_,isOptionsPanelOpen:u,options:h}))}var v=o&&o(P)||!1;return p.default.createElement("div",a({ref:function(t){e.selectBox=t}},this.listeners),p.default.createElement(b.default,{altered:l,isTouchDevice:c,singleSelectInitialIndex:s,caretIcon:r,prefix:n,name:S,customLabelText:v,singleSelectSelectedOption:P,singleSelectSelectedIndex:O,nextPotentialSelectionIndex:_,isOptionsPanelOpen:u,options:h}))}},{key:"updateState",value:function(e){var t=this.reducer(this.state,e);this.setState(t)}},{key:"handleTouchStart",value:function(){this.updateState({type:f.SET_IS_DRAGGING,boolean:!1})}},{key:"handleTouchMove",value:function(){this.updateState({type:f.SET_IS_DRAGGING,boolean:!0})}},{key:"handleKeyEvent",value:function(e){var t=this.state.isMultiSelect;return this.preventDefaultForKeyCodes([S.default.ENTER,S.default.SPACE,S.default.ESCAPE,S.default.UP,S.default.DOWN],e),e.keyCode===S.default.TAB?(this.state.isOptionsPanelOpen&&!t&&e.preventDefault(),e):e.keyCode===S.default.ENTER?this.enterPressed(e):e.keyCode===S.default.SPACE?this.state.isOptionsPanelOpen?this.updateState({type:f.SET_OPTIONS_PANEL_CLOSED}):this.updateState({type:f.SET_OPTIONS_PANEL_OPEN}):e.keyCode===S.default.ESC?this.selectBox.firstChild.blur():e.keyCode===S.default.UP?this.keyUpOrDownPressed("decrement"):e.keyCode===S.default.DOWN?this.keyUpOrDownPressed("increment"):void 0}},{key:"handleClick",value:function(e){var t=this,n=this.state,r=n.isMultiSelect,o=n.isOptionsPanelOpen,i=n.isDragging;if(i===!1){if(e.preventDefault(),this.selectBox.firstChild.focus(),e&&e.target.classList.contains("rrs__option")){if(r){var l=parseFloat(e.target.getAttribute("data-key"));return this.updateState({type:f.SET_MULTISELECT_OPTIONS,optionIndex:l})}return this.updateState({type:f.SET_SELECTED_INDEX,optionIndex:parseFloat(e.target.getAttribute("data-key"))}),this.forceUpdate(function(){return t.updateState({type:f.SET_OPTIONS_PANEL_CLOSED})})}return o?this.updateState({type:f.SET_OPTIONS_PANEL_CLOSED}):this.updateState({type:f.SET_OPTIONS_PANEL_OPEN})}}},{key:"handleBlur",value:function(){this.updateState({type:f.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION})}},{key:"preventDefaultForKeyCodes",value:function(e,t){e.forEach(function(e){e===t.keyCode&&t.preventDefault()})}},{key:"enterPressed",value:function(e){return this.state.isMultiSelect?this.updateState({type:f.SET_MULTISELECT_OPTIONS,optionIndex:this.state.nextPotentialSelectionIndex}):this.state.isOptionsPanelOpen===!0?(e.stopPropagation(),this.updateState({type:f.SET_OPTIONS_PANEL_CLOSED})):this.props.onSubmit()}},{key:"keyUpOrDownPressed",value:function(e){var t=this.state,n=t.isOptionsPanelOpen,r=t.nextPotentialSelectionIndex;this.updateState({type:f.SET_NEXT_SELECTED_INDEX,optionIndex:(0,m.default)(e,n,r,this.OPTION_NODES_LENGTH)}),this.state.isOptionsPanelOpen===!1&&this.updateState({type:f.SET_OPTIONS_PANEL_OPEN})}}]),t}(c.Component);x.propTypes={caretIcon:c.PropTypes.oneOfType([c.PropTypes.string,c.PropTypes.element]),customLabelRenderer:c.PropTypes.func,multiselect:c.PropTypes.bool,name:c.PropTypes.string.isRequired,onChange:c.PropTypes.func,options:c.PropTypes.arrayOf(c.PropTypes.shape({text:c.PropTypes.string.isRequired,value:c.PropTypes.string.isRequired})).isRequired,onSubmit:c.PropTypes.func,prefix:c.PropTypes.string,selectedValue:c.PropTypes.string,selectedValues:c.PropTypes.arrayOf(c.PropTypes.string.isRequired)},t.default=x}])});