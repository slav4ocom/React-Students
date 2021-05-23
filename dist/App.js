'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Main = /*#__PURE__*/function (_React$Component) {
  _inherits(Main, _React$Component);

  var _super = _createSuper(Main);

  function Main() {
    _classCallCheck(this, Main);

    return _super.apply(this, arguments);
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Page, null));
    }
  }]);

  return Main;
}(React.Component);

var NavBar = /*#__PURE__*/function (_React$Component2) {
  _inherits(NavBar, _React$Component2);

  var _super2 = _createSuper(NavBar);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _super2.apply(this, arguments);
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        onClick: function onClick() {
          return SetPage('Home');
        }
      }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        onClick: function onClick() {
          return SetPage('Students');
        }
      }, "Students")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        onClick: function onClick() {
          return SetPage('Homeworks');
        }
      }, "Homeworks")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        onClick: function onClick() {
          return SetPage('About');
        }
      }, "About"))));
    }
  }]);

  return NavBar;
}(React.Component);

var page = "Home";

function SetPage(pagename) {
  page = pagename;
  ReactDOM.render( /*#__PURE__*/React.createElement(Main, null), document.getElementById('root'));
}

var Page = /*#__PURE__*/function (_React$Component3) {
  _inherits(Page, _React$Component3);

  var _super3 = _createSuper(Page);

  function Page(props) {
    var _this;

    _classCallCheck(this, Page);

    _this = _super3.call(this, props);
    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      switch (page) {
        case "Home":
          return /*#__PURE__*/React.createElement(Home, null);
          break;

        case "Students":
          return /*#__PURE__*/React.createElement(Students, null);
          break;

        case "Homeworks":
          return /*#__PURE__*/React.createElement(Homeworks, null);
          break;

        case "About":
          return /*#__PURE__*/React.createElement(About, null);
          break;

        default:
          return /*#__PURE__*/React.createElement("div", null, "No page");
      }
    }
  }]);

  return Page;
}(React.Component);

function loadDoc(documentName, returnObject, updateElement) {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && (this.status == 200 || this.status == 304)) {
      returnObject.value = this.responseText;
      document.getElementById(updateElement).innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", documentName, true);
  xhttp.send();
}

var Home = /*#__PURE__*/function (_React$Component4) {
  _inherits(Home, _React$Component4);

  var _super4 = _createSuper(Home);

  function Home() {
    _classCallCheck(this, Home);

    return _super4.apply(this, arguments);
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h1", null, "Welcome to Web students React platform !")));
    }
  }]);

  return Home;
}(React.Component);

var studentsTable = {
  value: ""
};

function GetArray() {
  //var json = tablica.value;
  var json = '{"proba": "rezultat", "proba2": "rezultat2"}';
  var obj = JSON.parse(json);
  var res = [];

  for (var i in obj) {
    res.push(obj[i]);
  }

  return res; //return tablica.value;
}

var Students = /*#__PURE__*/function (_React$Component5) {
  _inherits(Students, _React$Component5);

  var _super5 = _createSuper(Students);

  function Students() {
    _classCallCheck(this, Students);

    return _super5.apply(this, arguments);
  }

  _createClass(Students, [{
    key: "render",
    value: function render() {
      var studentsElement = "studentsDiv";
      loadDoc("students.txt", studentsTable, studentsElement);
      return /*#__PURE__*/React.createElement("div", {
        id: studentsElement
      }, "This is students", /*#__PURE__*/React.createElement("br", null), studentsTable.value, /*#__PURE__*/React.createElement("br", null), GetArray());
    }
  }]);

  return Students;
}(React.Component);

var tablica = {
  value: "таблица"
}; //tablica = "dsadsadsasda";

var Homeworks = /*#__PURE__*/function (_React$Component6) {
  _inherits(Homeworks, _React$Component6);

  var _super6 = _createSuper(Homeworks);

  function Homeworks() {
    _classCallCheck(this, Homeworks);

    return _super6.apply(this, arguments);
  }

  _createClass(Homeworks, [{
    key: "render",
    value: function render() {
      var homeWorksElement = "homeworksDiv";
      loadDoc("homeworks", tablica, homeWorksElement);
      return /*#__PURE__*/React.createElement("div", null, "\u043A\u0443\u0440\u0435\u0446", /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("th", null, "No."), /*#__PURE__*/React.createElement("th", null, "\u0423\u0447\u0435\u043D\u0438\u043A"), /*#__PURE__*/React.createElement("th", null, "\u0417\u0430\u043D\u044F\u0442\u0438\u0435"), /*#__PURE__*/React.createElement("th", null, "\u0414\u043E\u043C\u0430\u0448\u043D\u043E")), /*#__PURE__*/React.createElement("div", {
        id: homeWorksElement
      }, "This is homeworks", /*#__PURE__*/React.createElement("br", null), tablica.value));
    }
  }]);

  return Homeworks;
}(React.Component);

var About = /*#__PURE__*/function (_React$Component7) {
  _inherits(About, _React$Component7);

  var _super7 = _createSuper(About);

  function About() {
    _classCallCheck(this, About);

    return _super7.apply(this, arguments);
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This project is created by slav4o.com for online working with students.");
    }
  }]);

  return About;
}(React.Component);

var Reakciq = /*#__PURE__*/function (_React$Component8) {
  _inherits(Reakciq, _React$Component8);

  var _super8 = _createSuper(Reakciq);

  function Reakciq() {
    _classCallCheck(this, Reakciq);

    return _super8.apply(this, arguments);
  }

  _createClass(Reakciq, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "\u0440\u0435\u0430\u043A\u0442\u0432\u0430\u0448 \u043B\u0438, \u0440\u0435\u0430\u043A\u0442\u0432\u0430\u0448 \u043B\u0438 \u0434\u044F\u0434\u043E \u043F\u043E\u043F\u0435 ?");
    }
  }]);

  return Reakciq;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(Main, null), document.getElementById('root'));