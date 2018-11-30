webpackHotUpdate(8,{

/***/ 1380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(535);

var _campaign = __webpack_require__(1374);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(795);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(786);

var _layout = __webpack_require__(1355);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Adam\\Desktop\\Blockchain\\kick-starter\\pages\\campaigns\\requests\\new.js?entry';


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            description: '',
            recipient: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;
                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

                            case 9:
                                _context.next = 13;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](3);

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, { onChange: function onChange(event) {
                    _this3.setState({ description: event.target.value });
                }, value: this.state.description, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Value (Ether)'), _react2.default.createElement(_semanticUiReact.Input, { onChange: function onChange(event) {
                    _this3.setState({ value: event.target.value });
                }, value: this.state.value, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, { onChange: function onChange(event) {
                    _this3.setState({ recipient: event.target.value });
                }, value: this.state.recipient, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Create!')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt('return', { address: address });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInNldFN0YXRlIiwidGFyZ2V0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFNLEFBQU8sQUFBUzs7QUFDOUIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQU8sQUFBYTs7QUFDNUIsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUNiOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFFRjttQkFBUSxBQUNHLEFBQ1A7eUJBRkksQUFFUSxBQUNaO3VCLEFBSEksQUFHTTtBQUhOLEFBQ0osaUIsQUFTSjtpR0FBVyxpQkFBQSxBQUFNLE9BQU47MEVBQUE7OzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFFQTs7QUFIQywyQ0FHVSx3QkFBUyxNQUFBLEFBQUssTUFIeEIsQUFHVSxBQUFvQjs4Q0FDSyxNQUpuQyxBQUl3QyxPQUp4QyxBQUlBLDBCQUpBLEFBSUEsYUFKQSxBQUljLG9CQUpkLEFBSWMsT0FKZCxBQUlzQix3QkFKdEIsQUFJc0I7Z0RBSnRCO2dEQUFBO3VDQU1vQixjQUFBLEFBQUssSUFOekIsQUFNb0IsQUFBUzs7aUNBQTFCO0FBTkgsb0RBQUE7Z0RBQUE7dUNBT0csU0FBQSxBQUFTLFFBQVQsQUFBaUIsY0FBakIsQUFBK0IsYUFBWSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FBNUQsQUFBMkMsQUFBdUIsVUFBbEUsQUFBNkUsV0FBN0UsQUFDTCxLQUFLLEVBQUMsTUFBSyxTQVJULEFBT0csQUFDQSxBQUFNLEFBQVM7O2lDQVJsQjtnREFBQTtBQUFBOztpQ0FBQTtnREFBQTtnRUFBQTs7aUNBQUE7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FhSDt5QkFDSjs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EscUNBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCOzhCQUFyQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsZ0NBQUEsQUFBQyx3Q0FBTSxVQUFVLHlCQUFPLEFBQUM7MkJBQUEsQUFBSyxTQUFTLEVBQUMsYUFBWSxNQUFBLEFBQU0sT0FBakMsQUFBYyxBQUEwQixBQUFRO0FBQXpFLG1CQUEyRSxPQUFTLEtBQUEsQUFBSyxNQUF6RixBQUErRjs4QkFBL0Y7Z0NBSFIsQUFDSSxBQUVJLEFBRUo7QUFGSTtpQ0FFSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxrQ0FBQSxBQUFDLHdDQUFNLFVBQVUseUJBQU8sQUFBQzsyQkFBQSxBQUFLLFNBQVMsRUFBQyxPQUFNLE1BQUEsQUFBTSxPQUEzQixBQUFjLEFBQW9CLEFBQVE7QUFBbkUsbUJBQXFFLE9BQU8sS0FBQSxBQUFLLE1BQWpGLEFBQXVGOzhCQUF2RjtnQ0FQUixBQUtJLEFBRUksQUFFSjtBQUZJO2lDQUVILGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDhCQUFBLEFBQUMsd0NBQU0sVUFBVSx5QkFBTyxBQUFDOzJCQUFBLEFBQUssU0FBUyxFQUFDLFdBQVUsTUFBQSxBQUFNLE9BQS9CLEFBQWMsQUFBd0IsQUFBUTtBQUF2RSxtQkFBeUUsT0FBUyxLQUFBLEFBQUssTUFBdkYsQUFBNkY7OEJBQTdGO2dDQVhSLEFBU0ksQUFFSSxBQUdKO0FBSEk7aUNBR0osQUFBQyx5Q0FBTyxTQUFSOzhCQUFBO2dDQUFBO0FBQUE7ZUFqQlosQUFDSSxBQUVJLEFBY0ksQUFJZjs7Ozs7bUhBeEM0QixBOzs7OztpQ0FDbEI7QSwwQ0FBVyxNQUFNLEEsTSxBQUFqQjtrRUFDQSxFQUFDLFNBQUQsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVRVLEEsQUFrRHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BZGFtL0Rlc2t0b3AvQmxvY2tjaGFpbi9raWNrLXN0YXJ0ZXIifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Adam\\Desktop\\Blockchain\\kick-starter\\pages\\campaigns\\requests\\new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Adam\\Desktop\\Blockchain\\kick-starter\\pages\\campaigns\\requests\\new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\requests\\new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC44MDAxYmQwYWQxNmZjNGE5MzVjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ldy5qcz9hYmM3MGZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3JtICxJbnB1dCwgQnV0dG9uICwgTWVzc2FnZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IHtMaW5rICwgUm91dGVyfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5jbGFzcyBSZXF1ZXN0TmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICB2YWx1ZSA6JycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246JycsXHJcbiAgICAgICAgcmVjaXBpZW50OicnXHJcbiAgICB9O1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3Qge2FkZHJlc3N9ID0gcHJvcHMucXVlcnkgOyBcclxuICAgICAgICByZXR1cm4ge2FkZHJlc3N9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gYXN5bmMgZXZlbnQgPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IHtkZXNjcmlwdGlvbiAsIHZhbHVlICwgcmVjaXBpZW50fSA9IHRoaXMuc3RhdGUgO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jcmVhdGVSZXF1ZXN0KGRlc2NyaXB0aW9uLHdlYjMudXRpbHMudG9XZWkodmFsdWUsJ2V0aGVyJykgLCByZWNpcGllbnQpXHJcbiAgICAgICAgICAgIC5zZW5kKHtmcm9tOmFjY291bnRzWzBdfSk7XHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDM+Q3JlYXRlIGEgUmVxdWVzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17ZXZlbnQ9Pnt0aGlzLnNldFN0YXRlKHtkZXNjcmlwdGlvbjpldmVudC50YXJnZXQudmFsdWV9KX19IHZhbHVlID0ge3RoaXMuc3RhdGUuZGVzY3JpcHRpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5WYWx1ZSAoRXRoZXIpPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXtldmVudD0+e3RoaXMuc2V0U3RhdGUoe3ZhbHVlOmV2ZW50LnRhcmdldC52YWx1ZX0pfX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5SZWNpcGllbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e2V2ZW50PT57dGhpcy5zZXRTdGF0ZSh7cmVjaXBpZW50OmV2ZW50LnRhcmdldC52YWx1ZX0pfX0gdmFsdWUgPSB7dGhpcy5zdGF0ZS5yZWNpcGllbnR9Lz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgPkNyZWF0ZSE8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3ROZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTs7QUFGQTtBQVNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBSUE7QUFKQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBTkE7QUFBQTtBQU9BO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7Ozs7Ozs7O0FBdkNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9