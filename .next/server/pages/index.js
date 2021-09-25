module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupItem.module.css */ "./components/meetups/MeetupItem.module.css");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @firebase/firestore */ "@firebase/firestore");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase/firebase */ "./firebase/firebase.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_postsSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/postsSlice */ "./store/postsSlice.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _store_usersSlice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/usersSlice */ "./store/usersSlice.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "D:\\Udemy\\nextjs\\06-onwards-to-a-bigger-project-starting-project\\components\\meetups\\MeetupItem.js";

















function MeetupItem(props) {
  var _auth$currentUser, _auth$currentUser2, _currentUser$likes;

  const {
    0: userInfo,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("");
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("");
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const posts = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.posts.deletePostStatus); // const userInfo = useSelector((state) => state.users.user);

  async function showDetailHandler() {
    router.push(`${router.pathname}${props.id}`);
  }

  const likeStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.posts.likeStatus);
  const user = props.user;
  const currentUser = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.auth.currentUser);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    let isMounted = true;

    function getUser() {
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`/api/${user}`).then(data => isMounted && setUser(data.data)).catch(err => err);
    }

    getUser();
    return () => isMounted = false; // dispatch(getSingleUser(user));
  }, []);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();

  function handleDelete() {
    dispatch(Object(_store_postsSlice__WEBPACK_IMPORTED_MODULE_11__["deletePost"])(props.id));
  }

  function handleLike() {
    if (_firebase_firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].currentUser) // dispatch(addLike({ postId: props.id, userId: auth.currentUser.uid }));
      setStatus("loading");
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`/api/postLikes/${props.id}/${_firebase_firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].currentUser.uid}`).then(d => setStatus("success")).catch(err => setStatus(err.message));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: [((_auth$currentUser = _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].currentUser) === null || _auth$currentUser === void 0 ? void 0 : _auth$currentUser.uid) === props.user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
        justify: "space-between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
          onClick: () => router.push(`/edit/${props.id}`),
          textAlign: "left",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_15__["AiFillEdit"], {
            size: "23"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
          onClick: handleDelete,
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__["CloseIcon"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 54
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: [" ", userInfo.username, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: props.time
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.image,
          alt: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: props.details
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: showDetailHandler,
          children: "Show Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [status === "loading" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 31
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["IconButton"] // disabled={disable}
        , {
          onClick: handleLike,
          icon: (_auth$currentUser2 = _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].currentUser) !== null && _auth$currentUser2 !== void 0 && _auth$currentUser2.uid ? currentUser !== null && currentUser !== void 0 && (_currentUser$likes = currentUser.likes) !== null && _currentUser$likes !== void 0 && _currentUser$likes.includes(props.id) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_15__["AiFillHeart"], {
            color: "red",
            size: "23"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 21
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_15__["AiOutlineHeart"], {
            size: "23"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 21
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_15__["AiOutlineHeart"], {
            size: "23"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            padding: "5px"
          },
          children: props.likes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupItem);

/***/ }),

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "MeetupItem_item__3siMU",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ "./components/meetups/MeetupList.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupItem */ "./components/meetups/MeetupItem.js");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupList.module.css */ "./components/meetups/MeetupList.module.css");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Udemy\\nextjs\\06-onwards-to-a-bigger-project-starting-project\\components\\meetups\\MeetupList.js";



function MeetupList(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
    children: props.posts.map(post => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MeetupItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: post.id,
        user: post.user,
        image: post.image,
        title: post.title,
        details: post.description,
        time: post.time,
        likes: post.likes
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupList);

/***/ }),

/***/ "./components/meetups/MeetupList.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupList.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn"
};


/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Udemy\\nextjs\\06-onwards-to-a-bigger-project-starting-project\\components\\ui\\Card.js";


function Card(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/*! exports provided: db, auth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);



const firebaseConfigs = {
  apiKey: "AIzaSyAtwCgCCkp2naBWDqDj4pIClgI4VUuJOjQ",
  authDomain: "todos-6bfa5.firebaseapp.com",
  projectId: "todos-6bfa5",
  storageBucket: "todos-6bfa5.appspot.com",
  messagingSenderId: "1059043535957",
  appId: "1:1059043535957:web:e1a3db0501a5b96686b8dc"
};
const app = Object(firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"])(firebaseConfigs);
const db = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["getFirestore"])();
const auth = Object(firebase_auth__WEBPACK_IMPORTED_MODULE_2__["getAuth"])();
/* harmony default export */ __webpack_exports__["default"] = (Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["getFirestore"])());

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/firestore */ "@firebase/firestore");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/firebase */ "./firebase/firebase.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "D:\\Udemy\\nextjs\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js";





 // import { addUser } from "../store/slice";



 // const meetUps = [
//   {
//     id: "m1",
//     title: "num1",
//     image:
//       "https://www.whatsappimages.in/wp-content/uploads/2020/11/Boys-Feeling-Sad-Whatsapp-DP-Pics-Download-Free-300x169.jpg",
//     address: "some address",
//     description: "first MeetUp",
//   },
//   {
//     id: "m2",
//     title: "num2",
//     image:
//       "https://www.whatsappimages.in/wp-content/uploads/2020/11/Boys-Feeling-Sad-Whatsapp-DP-Pics-Download-Free-300x169.jpg",
//     address: "some address",
//     description: "second MeetUp",
//   },
// ];

function HomePage() {
  // const x = useSelector((state) => state.auth);
  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const logedin = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.auth.isLoggedIn);
  console.log(logedin);
  const allPosts = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.posts.realTimePosts); // useEffect(() => {
  //   const q = query(collection(db, "posts"), orderBy("time", "desc"));
  //   const unsub = onSnapshot(q, (snaap) => {
  //     const post = snaap.docs.map((doc) => {
  //       return { ...doc.data(), id: doc.id };
  //     });
  //     setPosts(post);
  //   });
  //   return () => unsub();
  // }, []);
  // useEffect(() => {
  //   async function get() {
  //     const post = await getDocs(collection(db, "posts"), limit(1)).then(
  //       (snap) =>
  //         snap.docs.map((doc) => {
  //           return { ...doc.data(), id: doc.id };
  //         })
  //     );
  //     console.log(post);
  //   }
  //   get();
  // }, []);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      posts: allPosts
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this)
  }, void 0, false);
} // export const getStaticProps = wrapper.getStaticProps((store) => async () => {
//   const docs = await getDocs(collection(db, "posts")).then((snapshot) =>
//     snapshot.docs.map((doc) => {
//       return { ...doc.data(), id: doc.id };
//     })
//   );
//   return {
//     props: { meetups: docs },
//     revalidate: 1,
//   };
// });
// export const getStaticProps = async () => {
//   try {
//     const posts = await getDocs(collection(db, "posts")).then((snap) =>
//       snap.docs.map((doc) => {
//         return { ...doc.data(), id: doc.id };
//       })
//     );
//     return {
//       props: { posts: posts },
//       revalidate: 1,
//     };
//   } catch (err) {
//     return {
//       notFound: true,
//     };
//   }
// };


/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./store/authSlice.js":
/*!****************************!*\
  !*** ./store/authSlice.js ***!
  \****************************/
/*! exports provided: handleSignUp, handleSignIn, handleForgetPass, getCurrent, googleSignin, loginHandler, setCurrentUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSignUp", function() { return handleSignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSignIn", function() { return handleSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleForgetPass", function() { return handleForgetPass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrent", function() { return getCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleSignin", function() { return googleSignin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginHandler", function() { return loginHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ "@firebase/auth");
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/firestore */ "@firebase/firestore");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/firebase */ "./firebase/firebase.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const handleSignUp = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createAsyncThunk"])("handleSignUp/auth", async user => {
  const response = await Object(_firebase_auth__WEBPACK_IMPORTED_MODULE_0__["createUserWithEmailAndPassword"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["auth"], user.email, user.password);
  await Object(_firebase_auth__WEBPACK_IMPORTED_MODULE_0__["updateProfile"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser, {
    displayName: user.username
  });
  await Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["setDoc"])(Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["doc"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["db"], "users", response.user.uid), {
    username: _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser.displayName,
    createdAt: new Date(),
    email: user.email
  });
  return user.username;
});
const handleSignIn = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createAsyncThunk"])("handleSignIn/auth", async ({
  user,
  checked
}) => {
  //   const persistance = await setPersistence(auth,checked? localStorage:sessionStorage)
  const response = await Object(_firebase_auth__WEBPACK_IMPORTED_MODULE_0__["signInWithEmailAndPassword"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["auth"], user.email, user.password); // const sentV = await sendEmailVerification(response.user);
});
const handleForgetPass = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createAsyncThunk"])("handleForgetPass/auth", async email => {
  await Object(_firebase_auth__WEBPACK_IMPORTED_MODULE_0__["sendPasswordResetEmail"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["auth"], email);
});
const getCurrent = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createAsyncThunk"])("getCurrent/auth", async () => {
  const user = (await Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["getDoc"])(Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["doc"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["db"], "users", _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser.uid))).data();
  console.log("this is someone", user);
  return user; // const sentV = await sendEmailVerification(response.user);
});
const googleSignin = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createAsyncThunk"])("googleSignin/auth", async user => {
  const googleProvider = new _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["GoogleAuthProvider"](); // const presist = await setPersistence(auth, localStorage);

  const response = await Object(_firebase_auth__WEBPACK_IMPORTED_MODULE_0__["signInWithPopup"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["auth"], googleProvider);
  const docSnap = (await Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["getDoc"])(Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["doc"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["db"], "users", response.user.uid))).data();

  if (!docSnap) {
    await Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["setDoc"])(Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["doc"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["db"], "users", response.user.uid), {
      username: response.user.displayName,
      createdAt: new Date(),
      email: response.user.email,
      likes: []
    });
  }
});
const authSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createSlice"])({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    response: "",
    currentUser: "",
    google: {
      status: ""
    },
    forgotPass: {
      status: ""
    },
    error: "",
    loggedIn: ""
  },
  reducers: {
    loginHandler(state, action) {
      state.isLoggedIn = action.payload;
    },

    setCurrentUser(state, action) {
      state.currentUser = action.payload;
      state.loggedIn = action.payload;
    }

  },
  extraReducers: {
    [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__["HYDRATE"]]: (state, action) => {
      return _objectSpread(_objectSpread({}, state), action.payload.auth);
    },
    [handleSignUp.pending]: (state, action) => {
      state.response = "loading";
    },
    [handleSignUp.fulfilled]: (state, action) => {
      state.response = "success";
    },
    [handleSignUp.rejected]: (state, action) => {
      state.response = action.error.message;
    },
    [handleSignIn.pending]: (state, action) => {
      state.response = "loading";
    },
    [handleSignIn.fulfilled]: (state, action) => {
      state.response = "success";
      state.error = "";
    },
    [handleSignIn.rejected]: (state, action) => {
      console.log(action.error.message);
      let error;

      if (action.error.message === "Firebase: Error (auth/user-not-found).") {
        error = "There is no such a user, make sure to use the correct email.";
      } else if (action.error.message === "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).") {
        error = "Too many attempts, try again later.";
      } else if (action.error.message === "Firebase: Error (auth/wrong-password).") {
        error = "Wrong password, try again.";
      }

      state.response = "error";
      state.error = error;
    },
    [googleSignin.pending]: (state, action) => {
      state.google.status = "loading";
    },
    [googleSignin.fulfilled]: (state, action) => {
      state.google.status = "success";
    },
    [googleSignin.rejected]: (state, action) => {
      state.google.status = action.error.message;
    },
    [handleForgetPass.pending]: (state, action) => {
      state.forgotPass.status = "loading";
    },
    [handleForgetPass.fulfilled]: (state, action) => {
      state.forgotPass.status = "success";
    },
    [handleForgetPass.rejected]: (state, action) => {
      state.forgotPass.status = action.error.message;
    },
    [getCurrent.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    }
  }
});
const {
  loginHandler,
  setCurrentUser
} = authSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (authSlice.reducer);

/***/ }),

/***/ "./store/postsSlice.js":
/*!*****************************!*\
  !*** ./store/postsSlice.js ***!
  \*****************************/
/*! exports provided: submitPost, deletePost, editPost, addLike, setPosts, resetEditStatus, resetPostStatus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitPost", function() { return submitPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPost", function() { return editPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLike", function() { return addLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPosts", function() { return setPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetEditStatus", function() { return resetEditStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPostStatus", function() { return resetPostStatus; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const submitPost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])("submitPost/posts", async postData => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/new-post", postData);
});
const deletePost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])("deletePost/posts", async postId => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/api/posts/${postId}`);
});
const editPost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])("editPost/posts", async ({
  postId,
  formData
}) => {
  console.log("editing...", formData);
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`/api/posts/${postId}`, formData);
});
const addLike = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])("addLike/posts", async ({
  postId,
  userId
}) => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/postLikes/${postId}/${userId}`).then(d => d.data);
});
const postsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "posts",
  initialState: {
    postStatus: "",
    deletePostStatus: "",
    realTimePosts: [],
    likeStatus: "",
    editStatus: ""
  },
  reducers: {
    setPosts(state, action) {
      state.realTimePosts = action.payload;
    },

    resetEditStatus(state, action) {
      state.editStatus = "";
    },

    resetPostStatus(state, action) {
      state.postStatus = "";
    }

  },
  extraReducers: {
    [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]]: (state, action) => {
      return _objectSpread(_objectSpread({}, state), action.payload.some);
    },
    [submitPost.pending]: (state, action) => {
      state.postStatus = "loading";
    },
    [submitPost.fulfilled]: (state, action) => {
      state.postStatus = "success";
    },
    [submitPost.rejected]: (state, action) => {
      state.postStatus = action.error.message;
    },
    [deletePost.pending]: (state, action) => {
      state.deletePostStatus = "loading";
    },
    [deletePost.fulfilled]: (state, action) => {
      state.deletePostStatus = "success";
    },
    [deletePost.rejected]: (state, action) => {
      state.deletePostStatus = action.error.message;
    },
    [addLike.pending]: (state, action) => {
      state.likeStatus = "loading";
    },
    [addLike.fulfilled]: (state, action) => {
      console.log("wewe", action.payload);
      state.likeStatus = "success";
    },
    [addLike.rejected]: (state, action) => {
      state.editStatus = action.error.message;
    },
    [editPost.pending]: (state, action) => {
      state.editStatus = "loading";
    },
    [editPost.fulfilled]: (state, action) => {
      state.editStatus = "success";
    },
    [editPost.rejected]: (state, action) => {
      state.likeStatus = action.error.message;
    }
  }
});
const {
  setPosts,
  resetEditStatus,
  resetPostStatus
} = postsSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (postsSlice.reducer);

/***/ }),

/***/ "./store/repliesSlice.js":
/*!*******************************!*\
  !*** ./store/repliesSlice.js ***!
  \*******************************/
/*! exports provided: addReply, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReply", function() { return addReply; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const addReply = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])("addReply/replies", async ({
  postId,
  reply
}) => {
  console.log(reply);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/replies/${postId}`, reply);
});
const repliesSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "replies",
  initialState: {
    addReplyStatus: ""
  },
  reducers: {},
  extraReducers: {
    [addReply.pending]: (state, action) => {
      state.addReplyStatus = "loading";
    },
    [addReply.fulfilled]: (state, action) => {
      state.addReplyStatus = "success";
    },
    [addReply.rejected]: (state, action) => {
      state.addReplyStatus = action.error.message;
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (repliesSlice.reducer);

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _usersSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersSlice */ "./store/usersSlice.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_cookie_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-cookie-wrapper */ "next-redux-cookie-wrapper");
/* harmony import */ var next_redux_cookie_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_cookie_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authSlice */ "./store/authSlice.js");
/* harmony import */ var _postsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postsSlice */ "./store/postsSlice.js");
/* harmony import */ var _repliesSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repliesSlice */ "./store/repliesSlice.js");








const makeStore = () => Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: {
    users: _usersSlice__WEBPACK_IMPORTED_MODULE_1__["default"],
    auth: _authSlice__WEBPACK_IMPORTED_MODULE_4__["default"],
    posts: _postsSlice__WEBPACK_IMPORTED_MODULE_5__["default"],
    replies: _repliesSlice__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false //   ignoredActions: [
      //     "submitPost/posts/fulfilled",
      //     "getCurrent/auth/fulfilled",
      //     "posts/setPosts",
      //     "posts/getPosts",
      //     "getAllPosts/posts/fulfilled",
      //     "getSingleUser/users/fulfilled",
      //     "getSingleUser/users/pending",
      //     "auth/setCurrentUser",
      //     "auth/setCurrentUser",
      //     "addLike/posts/fulfilled",
      //     "addLike/posts/pending",
      //   ],
      // },

    });
  }
}); // const makeStore = wrapMakeStore(() =>
//   configureStore({
//     reducer: { users: usersSlice, auth: authSlice, posts: postsSlice },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({ serializableCheck: false }).prepend(
//         nextReduxCookieMiddleware({
//           subtrees: ["my.subtree"],
//         })
//       ),
//   })
// );


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(makeStore);

/***/ }),

/***/ "./store/usersSlice.js":
/*!*****************************!*\
  !*** ./store/usersSlice.js ***!
  \*****************************/
/*! exports provided: getUser, getSingleUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleUser", function() { return getSingleUser; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const getUser = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])("getUser/posts", async user => {
  console.log(user);
  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/api/${user}`);
  const data = await response.data;
  return data;
});
const getSingleUser = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])("getSingleUser/users", async id => {
  const response = await fetch(`/api/${id}`);
  const data = await response.json();
  return data;
});
const usersSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "users",
  initialState: {
    getUserStatus: "",
    user: ""
  },
  extraReducers: {
    [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]]: (state, action) => {
      return _objectSpread(_objectSpread({}, state), action.payload.users);
    },
    [getSingleUser.pending]: (state, action) => {
      state.getUserStatus = "loading";
    },
    [getSingleUser.fulfilled]: (state, action) => {
      state.getUserStatus = "success";
      state.user = action.payload;
    },
    [getSingleUser.rejected]: (state, action) => {
      state.getUserStatus = action.error.message;
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (usersSlice.reducer);

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@firebase/auth":
/*!*********************************!*\
  !*** external "@firebase/auth" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/auth");

/***/ }),

/***/ "@firebase/firestore":
/*!**************************************!*\
  !*** external "@firebase/firestore" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/firestore");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-redux-cookie-wrapper":
/*!********************************************!*\
  !*** external "next-redux-cookie-wrapper" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-cookie-wrapper");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maXJlYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hdXRoU2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcG9zdHNTbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZXBsaWVzU2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdXNlcnNTbGljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LWNvb2tpZS13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2FpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiTWVldHVwSXRlbSIsInByb3BzIiwidXNlckluZm8iLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0cyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJkZWxldGVQb3N0U3RhdHVzIiwic2hvd0RldGFpbEhhbmRsZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJpZCIsImxpa2VTdGF0dXMiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJhdXRoIiwidXNlRWZmZWN0IiwiaXNNb3VudGVkIiwiZ2V0VXNlciIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVEZWxldGUiLCJkZWxldGVQb3N0IiwiaGFuZGxlTGlrZSIsInBvc3QiLCJ1aWQiLCJkIiwibWVzc2FnZSIsImNsYXNzZXMiLCJpdGVtIiwiY29udGVudCIsInVzZXJuYW1lIiwidGl0bGUiLCJ0aW1lIiwiaW1hZ2UiLCJkZXRhaWxzIiwiYWN0aW9ucyIsImxpa2VzIiwiaW5jbHVkZXMiLCJwYWRkaW5nIiwiTWVldHVwTGlzdCIsImxpc3QiLCJtYXAiLCJkZXNjcmlwdGlvbiIsIkNhcmQiLCJjYXJkIiwiY2hpbGRyZW4iLCJmaXJlYmFzZUNvbmZpZ3MiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZGIiLCJnZXRGaXJlc3RvcmUiLCJnZXRBdXRoIiwiSG9tZVBhZ2UiLCJzZXRQb3N0cyIsImxvZ2VkaW4iLCJpc0xvZ2dlZEluIiwiY29uc29sZSIsImxvZyIsImFsbFBvc3RzIiwicmVhbFRpbWVQb3N0cyIsImhhbmRsZVNpZ25VcCIsImNyZWF0ZUFzeW5jVGh1bmsiLCJyZXNwb25zZSIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJ1cGRhdGVQcm9maWxlIiwiZGlzcGxheU5hbWUiLCJzZXREb2MiLCJkb2MiLCJjcmVhdGVkQXQiLCJEYXRlIiwiaGFuZGxlU2lnbkluIiwiY2hlY2tlZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiaGFuZGxlRm9yZ2V0UGFzcyIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJnZXRDdXJyZW50IiwiZ2V0RG9jIiwiZ29vZ2xlU2lnbmluIiwiZ29vZ2xlUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJkb2NTbmFwIiwiYXV0aFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiZ29vZ2xlIiwiZm9yZ290UGFzcyIsImVycm9yIiwibG9nZ2VkSW4iLCJyZWR1Y2VycyIsImxvZ2luSGFuZGxlciIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRDdXJyZW50VXNlciIsImV4dHJhUmVkdWNlcnMiLCJIWURSQVRFIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwicmVkdWNlciIsInN1Ym1pdFBvc3QiLCJwb3N0RGF0YSIsInBvc3RJZCIsImRlbGV0ZSIsImVkaXRQb3N0IiwiZm9ybURhdGEiLCJwdXQiLCJhZGRMaWtlIiwidXNlcklkIiwicG9zdHNTbGljZSIsInBvc3RTdGF0dXMiLCJlZGl0U3RhdHVzIiwicmVzZXRFZGl0U3RhdHVzIiwicmVzZXRQb3N0U3RhdHVzIiwic29tZSIsImFkZFJlcGx5IiwicmVwbHkiLCJyZXBsaWVzU2xpY2UiLCJhZGRSZXBseVN0YXR1cyIsIm1ha2VTdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwidXNlcnMiLCJ1c2Vyc1NsaWNlIiwicmVwbGllcyIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJnZXRTaW5nbGVVc2VyIiwiZmV0Y2giLCJqc29uIiwiZ2V0VXNlclN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7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Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IENhcmQgZnJvbSBcIi4uL3VpL0NhcmRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01lZXR1cEl0ZW0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBkb2MsIGdldERvYyB9IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi8uLi9maXJlYmFzZS9maXJlYmFzZVwiO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgRmxleCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBDbG9zZUljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhZGRMaWtlLCBkZWxldGVQb3N0IH0gZnJvbSBcIi4uLy4uL3N0b3JlL3Bvc3RzU2xpY2VcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgZ2V0U2luZ2xlVXNlciB9IGZyb20gXCIuLi8uLi9zdG9yZS91c2Vyc1NsaWNlXCI7XG5pbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7XG4gIEFpT3V0bGluZUhlYXJ0LFxuICBBaUZpbGxIZWFydCxcbiAgQWlPdXRsaW5lTG9hZGluZyxcbiAgQWlPdXRsaW5lTG9hZGluZzNRdWFydGVycyxcbiAgQWlGaWxsRWRpdCxcbn0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmZ1bmN0aW9uIE1lZXR1cEl0ZW0ocHJvcHMpIHtcbiAgY29uc3QgW3VzZXJJbmZvLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwb3N0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdHMuZGVsZXRlUG9zdFN0YXR1cyk7XG4gIC8vIGNvbnN0IHVzZXJJbmZvID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2Vycy51c2VyKTtcblxuICBhc3luYyBmdW5jdGlvbiBzaG93RGV0YWlsSGFuZGxlcigpIHtcbiAgICByb3V0ZXIucHVzaChgJHtyb3V0ZXIucGF0aG5hbWV9JHtwcm9wcy5pZH1gKTtcbiAgfVxuICBjb25zdCBsaWtlU3RhdHVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0cy5saWtlU3RhdHVzKTtcblxuICBjb25zdCB1c2VyID0gcHJvcHMudXNlcjtcbiAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGguY3VycmVudFVzZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XG4gICAgZnVuY3Rpb24gZ2V0VXNlcigpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoYC9hcGkvJHt1c2VyfWApXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBpc01vdW50ZWQgJiYgc2V0VXNlcihkYXRhLmRhdGEpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gZXJyKTtcbiAgICB9XG4gICAgZ2V0VXNlcigpO1xuICAgIHJldHVybiAoKSA9PiAoaXNNb3VudGVkID0gZmFsc2UpO1xuICAgIC8vIGRpc3BhdGNoKGdldFNpbmdsZVVzZXIodXNlcikpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBmdW5jdGlvbiBoYW5kbGVEZWxldGUoKSB7XG4gICAgZGlzcGF0Y2goZGVsZXRlUG9zdChwcm9wcy5pZCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTGlrZSgpIHtcbiAgICBpZiAoYXV0aC5jdXJyZW50VXNlcilcbiAgICAgIC8vIGRpc3BhdGNoKGFkZExpa2UoeyBwb3N0SWQ6IHByb3BzLmlkLCB1c2VySWQ6IGF1dGguY3VycmVudFVzZXIudWlkIH0pKTtcbiAgICAgIHNldFN0YXR1cyhcImxvYWRpbmdcIik7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAvYXBpL3Bvc3RMaWtlcy8ke3Byb3BzLmlkfS8ke2F1dGguY3VycmVudFVzZXIudWlkfWApXG4gICAgICAudGhlbigoZCkgPT4gc2V0U3RhdHVzKFwic3VjY2Vzc1wiKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBzZXRTdGF0dXMoZXJyLm1lc3NhZ2UpKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICA8Q2FyZD5cbiAgICAgICAge2F1dGguY3VycmVudFVzZXI/LnVpZCA9PT0gcHJvcHMudXNlciAmJiAoXG4gICAgICAgICAgPEZsZXgganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvZWRpdC8ke3Byb3BzLmlkfWApfVxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgaWNvbj17PEFpRmlsbEVkaXQgc2l6ZT1cIjIzXCIgLz59XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGV9IGljb249ezxDbG9zZUljb24gLz59IC8+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICA8aDE+IHt1c2VySW5mby51c2VybmFtZX0gPC9oMT5cbiAgICAgICAgICA8aDM+e3Byb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgICAgey8qIDxzcGFuPnttb21lbnQocHJvcHMudGltZS50b0RhdGUoKSkuY2FsZW5kYXIoKX08L3NwYW4+ICovfVxuICAgICAgICAgIDxzcGFuPntwcm9wcy50aW1lfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cbiAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD17cHJvcHMudGl0bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICA8aDQ+e3Byb3BzLmRldGFpbHN9PC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0RldGFpbEhhbmRsZXJ9PlNob3cgRGV0YWlsczwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj4gXG4gICAgICAgICAge3N0YXR1cyA9PT0gXCJsb2FkaW5nXCIgPyAoXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBpY29uPXs8U3Bpbm5lciAvPn0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgLy8gZGlzYWJsZWQ9e2Rpc2FibGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxpa2V9XG4gICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgIGF1dGguY3VycmVudFVzZXI/LnVpZCA/IChcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyPy5saWtlcz8uaW5jbHVkZXMocHJvcHMuaWQpID8gKFxuICAgICAgICAgICAgICAgICAgICA8QWlGaWxsSGVhcnQgY29sb3I9XCJyZWRcIiBzaXplPVwiMjNcIiAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUhlYXJ0IHNpemU9XCIyM1wiIC8+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVIZWFydCBzaXplPVwiMjNcIiAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIgfX0+e3Byb3BzLmxpa2VzfTwvc3Bhbj57XCIgXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkPlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cEl0ZW07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGVtXCI6IFwiTWVldHVwSXRlbV9pdGVtX18zc2lNVVwiLFxuXHRcImltYWdlXCI6IFwiTWVldHVwSXRlbV9pbWFnZV9fMTNyQVBcIixcblx0XCJjb250ZW50XCI6IFwiTWVldHVwSXRlbV9jb250ZW50X18zdUVrVFwiLFxuXHRcImFjdGlvbnNcIjogXCJNZWV0dXBJdGVtX2FjdGlvbnNfX0x2VDlCXCJcbn07XG4iLCJpbXBvcnQgTWVldHVwSXRlbSBmcm9tIFwiLi9NZWV0dXBJdGVtXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NZWV0dXBMaXN0Lm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gTWVldHVwTGlzdChwcm9wcykge1xuICBcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAge3Byb3BzLnBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZWV0dXBJdGVtXG4gICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XG4gICAgICAgICAgICBpZD17cG9zdC5pZH1cbiAgICAgICAgICAgIHVzZXI9e3Bvc3QudXNlcn1cbiAgICAgICAgICAgIGltYWdlPXtwb3N0LmltYWdlfVxuICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICBkZXRhaWxzPXtwb3N0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgdGltZT17cG9zdC50aW1lfVxuICAgICAgICAgICAgbGlrZXM9e3Bvc3QubGlrZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cExpc3Q7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaXN0XCI6IFwiTWVldHVwTGlzdF9saXN0X18xaWFmblwiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBDYXJkKHByb3BzKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fM0tTTE9cIlxufTtcbiIsImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmNvbnN0IGZpcmViYXNlQ29uZmlncyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QXR3Q2dDQ2twMm5hQldEcURqNHBJQ2xnSTRWVXVKT2pRXCIsXHJcblxyXG4gIGF1dGhEb21haW46IFwidG9kb3MtNmJmYTUuZmlyZWJhc2VhcHAuY29tXCIsXHJcblxyXG4gIHByb2plY3RJZDogXCJ0b2Rvcy02YmZhNVwiLFxyXG5cclxuICBzdG9yYWdlQnVja2V0OiBcInRvZG9zLTZiZmE1LmFwcHNwb3QuY29tXCIsXHJcblxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwNTkwNDM1MzU5NTdcIixcclxuXHJcbiAgYXBwSWQ6IFwiMToxMDU5MDQzNTM1OTU3OndlYjplMWEzZGIwNTAxYTViOTY2ODZiOGRjXCIsXHJcbn07XHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWdzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYiA9IGdldEZpcmVzdG9yZSgpO1xyXG5leHBvcnQgY29uc3QgYXV0aCA9IGdldEF1dGgoKTsgIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0RmlyZXN0b3JlKCk7XHJcbiIsImltcG9ydCB7XHJcbiAgY29sbGVjdGlvbixcclxuICBkb2MsXHJcbiAgZ2V0RG9jLFxyXG4gIGdldERvY3MsXHJcbiAgbGltaXQsXHJcbiAgb25TbmFwc2hvdCxcclxuICBvcmRlckJ5LFxyXG4gIHF1ZXJ5LFxyXG4gIHdoZXJlLFxyXG59IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZWV0VXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgZGIsIHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZS9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xyXG4vLyBpbXBvcnQgeyBhZGRVc2VyIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gY29uc3QgbWVldFVwcyA9IFtcclxuLy8gICB7XHJcbi8vICAgICBpZDogXCJtMVwiLFxyXG4vLyAgICAgdGl0bGU6IFwibnVtMVwiLFxyXG4vLyAgICAgaW1hZ2U6XHJcbi8vICAgICAgIFwiaHR0cHM6Ly93d3cud2hhdHNhcHBpbWFnZXMuaW4vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTEvQm95cy1GZWVsaW5nLVNhZC1XaGF0c2FwcC1EUC1QaWNzLURvd25sb2FkLUZyZWUtMzAweDE2OS5qcGdcIixcclxuLy8gICAgIGFkZHJlc3M6IFwic29tZSBhZGRyZXNzXCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogXCJmaXJzdCBNZWV0VXBcIixcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiBcIm0yXCIsXHJcbi8vICAgICB0aXRsZTogXCJudW0yXCIsXHJcbi8vICAgICBpbWFnZTpcclxuLy8gICAgICAgXCJodHRwczovL3d3dy53aGF0c2FwcGltYWdlcy5pbi93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8xMS9Cb3lzLUZlZWxpbmctU2FkLVdoYXRzYXBwLURQLVBpY3MtRG93bmxvYWQtRnJlZS0zMDB4MTY5LmpwZ1wiLFxyXG4vLyAgICAgYWRkcmVzczogXCJzb21lIGFkZHJlc3NcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcInNlY29uZCBNZWV0VXBcIixcclxuLy8gICB9LFxyXG4vLyBdO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgLy8gY29uc3QgeCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgbG9nZWRpbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5pc0xvZ2dlZEluKTtcclxuICBjb25zb2xlLmxvZyhsb2dlZGluKTtcclxuICBjb25zdCBhbGxQb3N0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdHMucmVhbFRpbWVQb3N0cyk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBxID0gcXVlcnkoY29sbGVjdGlvbihkYiwgXCJwb3N0c1wiKSwgb3JkZXJCeShcInRpbWVcIiwgXCJkZXNjXCIpKTtcclxuICAvLyAgIGNvbnN0IHVuc3ViID0gb25TbmFwc2hvdChxLCAoc25hYXApID0+IHtcclxuICAvLyAgICAgY29uc3QgcG9zdCA9IHNuYWFwLmRvY3MubWFwKChkb2MpID0+IHtcclxuICAvLyAgICAgICByZXR1cm4geyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH07XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgICBzZXRQb3N0cyhwb3N0KTtcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgcmV0dXJuICgpID0+IHVuc3ViKCk7XHJcbiAgLy8gfSwgW10pO1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBhc3luYyBmdW5jdGlvbiBnZXQoKSB7XHJcbiAgLy8gICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIFwicG9zdHNcIiksIGxpbWl0KDEpKS50aGVuKFxyXG4gIC8vICAgICAgIChzbmFwKSA9PlxyXG4gIC8vICAgICAgICAgc25hcC5kb2NzLm1hcCgoZG9jKSA9PiB7XHJcbiAgLy8gICAgICAgICAgIHJldHVybiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfTtcclxuICAvLyAgICAgICAgIH0pXHJcbiAgLy8gICAgICk7XHJcblxyXG4gIC8vICAgICBjb25zb2xlLmxvZyhwb3N0KTtcclxuICAvLyAgIH1cclxuICAvLyAgIGdldCgpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIDw+ezxNZWV0VXBMaXN0IHBvc3RzPXthbGxQb3N0c30gLz59PC8+O1xyXG59XHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IHdyYXBwZXIuZ2V0U3RhdGljUHJvcHMoKHN0b3JlKSA9PiBhc3luYyAoKSA9PiB7XHJcbi8vICAgY29uc3QgZG9jcyA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJwb3N0c1wiKSkudGhlbigoc25hcHNob3QpID0+XHJcbi8vICAgICBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiB7XHJcbi8vICAgICAgIHJldHVybiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfTtcclxuLy8gICAgIH0pXHJcbi8vICAgKTtcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IG1lZXR1cHM6IGRvY3MgfSxcclxuLy8gICAgIHJldmFsaWRhdGU6IDEsXHJcbi8vICAgfTtcclxuLy8gfSk7XHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIFwicG9zdHNcIikpLnRoZW4oKHNuYXApID0+XHJcbi8vICAgICAgIHNuYXAuZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfTtcclxuLy8gICAgICAgfSlcclxuLy8gICAgICk7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICBwcm9wczogeyBwb3N0czogcG9zdHMgfSxcclxuLy8gICAgICAgcmV2YWxpZGF0ZTogMSxcclxuLy8gICAgIH07XHJcbi8vICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICBub3RGb3VuZDogdHJ1ZSxcclxuLy8gICAgIH07XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIHNlbmRFbWFpbFZlcmlmaWNhdGlvbixcclxuICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsLFxyXG4gIHNldFBlcnNpc3RlbmNlLFxyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIHNpZ25JbldpdGhQb3B1cCxcclxuICB1cGRhdGVQcm9maWxlLFxyXG59IGZyb20gXCJAZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBhZGREb2MsIGRvYywgZ2V0RG9jLCBzZXREb2MgfSBmcm9tIFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVTaWduVXAgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwiaGFuZGxlU2lnblVwL2F1dGhcIixcclxuICBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoXHJcbiAgICAgIGF1dGgsXHJcbiAgICAgIHVzZXIuZW1haWwsXHJcbiAgICAgIHVzZXIucGFzc3dvcmRcclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgdXBkYXRlUHJvZmlsZShhdXRoLmN1cnJlbnRVc2VyLCB7XHJcbiAgICAgIGRpc3BsYXlOYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCBzZXREb2MoZG9jKGRiLCBcInVzZXJzXCIsIHJlc3BvbnNlLnVzZXIudWlkKSwge1xyXG4gICAgICB1c2VybmFtZTogYXV0aC5jdXJyZW50VXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHVzZXIudXNlcm5hbWU7XHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgY29uc3QgaGFuZGxlU2lnbkluID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcImhhbmRsZVNpZ25Jbi9hdXRoXCIsXHJcbiAgYXN5bmMgKHsgdXNlciwgY2hlY2tlZCB9KSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IHBlcnNpc3RhbmNlID0gYXdhaXQgc2V0UGVyc2lzdGVuY2UoYXV0aCxjaGVja2VkPyBsb2NhbFN0b3JhZ2U6c2Vzc2lvblN0b3JhZ2UpXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxyXG4gICAgICBhdXRoLFxyXG4gICAgICB1c2VyLmVtYWlsLFxyXG4gICAgICB1c2VyLnBhc3N3b3JkXHJcbiAgICApO1xyXG4gICAgLy8gY29uc3Qgc2VudFYgPSBhd2FpdCBzZW5kRW1haWxWZXJpZmljYXRpb24ocmVzcG9uc2UudXNlcik7XHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgY29uc3QgaGFuZGxlRm9yZ2V0UGFzcyA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJoYW5kbGVGb3JnZXRQYXNzL2F1dGhcIixcclxuICBhc3luYyAoZW1haWwpID0+IHtcclxuICAgIGF3YWl0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwoYXV0aCwgZW1haWwpO1xyXG4gIH1cclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnQgPSBjcmVhdGVBc3luY1RodW5rKFwiZ2V0Q3VycmVudC9hdXRoXCIsIGFzeW5jICgpID0+IHtcclxuICBjb25zdCB1c2VyID0gKGF3YWl0IGdldERvYyhkb2MoZGIsIFwidXNlcnNcIiwgYXV0aC5jdXJyZW50VXNlci51aWQpKSkuZGF0YSgpO1xyXG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcyBzb21lb25lXCIsIHVzZXIpO1xyXG4gIHJldHVybiB1c2VyO1xyXG5cclxuICAvLyBjb25zdCBzZW50ViA9IGF3YWl0IHNlbmRFbWFpbFZlcmlmaWNhdGlvbihyZXNwb25zZS51c2VyKTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ29vZ2xlU2lnbmluID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcImdvb2dsZVNpZ25pbi9hdXRoXCIsXHJcbiAgYXN5bmMgKHVzZXIpID0+IHtcclxuICAgIGNvbnN0IGdvb2dsZVByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gICAgLy8gY29uc3QgcHJlc2lzdCA9IGF3YWl0IHNldFBlcnNpc3RlbmNlKGF1dGgsIGxvY2FsU3RvcmFnZSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNpZ25JbldpdGhQb3B1cChhdXRoLCBnb29nbGVQcm92aWRlcik7XHJcbiAgICBjb25zdCBkb2NTbmFwID0gKGF3YWl0IGdldERvYyhkb2MoZGIsIFwidXNlcnNcIiwgcmVzcG9uc2UudXNlci51aWQpKSkuZGF0YSgpO1xyXG5cclxuICAgIGlmICghZG9jU25hcCkge1xyXG4gICAgICBhd2FpdCBzZXREb2MoZG9jKGRiLCBcInVzZXJzXCIsIHJlc3BvbnNlLnVzZXIudWlkKSwge1xyXG4gICAgICAgIHVzZXJuYW1lOiByZXNwb25zZS51c2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICBlbWFpbDogcmVzcG9uc2UudXNlci5lbWFpbCxcclxuICAgICAgICBsaWtlczogW10sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImF1dGhcIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgcmVzcG9uc2U6IFwiXCIsXHJcbiAgICBjdXJyZW50VXNlcjogXCJcIixcclxuICAgIGdvb2dsZTogeyBzdGF0dXM6IFwiXCIgfSxcclxuICAgIGZvcmdvdFBhc3M6IHsgc3RhdHVzOiBcIlwiIH0sXHJcbiAgICBlcnJvcjogXCJcIixcclxuICAgIGxvZ2dlZEluOiBcIlwiLFxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGxvZ2luSGFuZGxlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLmlzTG9nZ2VkSW4gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0Q3VycmVudFVzZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50VXNlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBzdGF0ZS5sb2dnZWRJbiA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgIFtIWURSQVRFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5hdXRoLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIFtoYW5kbGVTaWduVXAucGVuZGluZ106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnJlc3BvbnNlID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9LFxyXG4gICAgW2hhbmRsZVNpZ25VcC5mdWxmaWxsZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5yZXNwb25zZSA9IFwic3VjY2Vzc1wiO1xyXG4gICAgfSxcclxuXHJcbiAgICBbaGFuZGxlU2lnblVwLnJlamVjdGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUucmVzcG9uc2UgPSBhY3Rpb24uZXJyb3IubWVzc2FnZTtcclxuICAgIH0sXHJcbiAgICBbaGFuZGxlU2lnbkluLnBlbmRpbmddOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5yZXNwb25zZSA9IFwibG9hZGluZ1wiO1xyXG4gICAgfSxcclxuICAgIFtoYW5kbGVTaWduSW4uZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUucmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBcIlwiO1xyXG4gICAgfSxcclxuXHJcbiAgICBbaGFuZGxlU2lnbkluLnJlamVjdGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBsZXQgZXJyb3I7XHJcbiAgICAgIGlmIChhY3Rpb24uZXJyb3IubWVzc2FnZSA9PT0gXCJGaXJlYmFzZTogRXJyb3IgKGF1dGgvdXNlci1ub3QtZm91bmQpLlwiKSB7XHJcbiAgICAgICAgZXJyb3IgPSBcIlRoZXJlIGlzIG5vIHN1Y2ggYSB1c2VyLCBtYWtlIHN1cmUgdG8gdXNlIHRoZSBjb3JyZWN0IGVtYWlsLlwiO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGFjdGlvbi5lcnJvci5tZXNzYWdlID09PVxyXG4gICAgICAgIFwiRmlyZWJhc2U6IEFjY2VzcyB0byB0aGlzIGFjY291bnQgaGFzIGJlZW4gdGVtcG9yYXJpbHkgZGlzYWJsZWQgZHVlIHRvIG1hbnkgZmFpbGVkIGxvZ2luIGF0dGVtcHRzLiBZb3UgY2FuIGltbWVkaWF0ZWx5IHJlc3RvcmUgaXQgYnkgcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQgb3IgeW91IGNhbiB0cnkgYWdhaW4gbGF0ZXIuIChhdXRoL3Rvby1tYW55LXJlcXVlc3RzKS5cIlxyXG4gICAgICApIHtcclxuICAgICAgICBlcnJvciA9IFwiVG9vIG1hbnkgYXR0ZW1wdHMsIHRyeSBhZ2FpbiBsYXRlci5cIjtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBhY3Rpb24uZXJyb3IubWVzc2FnZSA9PT0gXCJGaXJlYmFzZTogRXJyb3IgKGF1dGgvd3JvbmctcGFzc3dvcmQpLlwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIGVycm9yID0gXCJXcm9uZyBwYXNzd29yZCwgdHJ5IGFnYWluLlwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdGF0ZS5yZXNwb25zZSA9IFwiZXJyb3JcIjtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBlcnJvcjtcclxuICAgIH0sXHJcbiAgICBbZ29vZ2xlU2lnbmluLnBlbmRpbmddOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5nb29nbGUuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9LFxyXG4gICAgW2dvb2dsZVNpZ25pbi5mdWxmaWxsZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5nb29nbGUuc3RhdHVzID0gXCJzdWNjZXNzXCI7XHJcbiAgICB9LFxyXG5cclxuICAgIFtnb29nbGVTaWduaW4ucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5nb29nbGUuc3RhdHVzID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XHJcbiAgICB9LFxyXG4gICAgW2hhbmRsZUZvcmdldFBhc3MucGVuZGluZ106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmZvcmdvdFBhc3Muc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9LFxyXG4gICAgW2hhbmRsZUZvcmdldFBhc3MuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuZm9yZ290UGFzcy5zdGF0dXMgPSBcInN1Y2Nlc3NcIjtcclxuICAgIH0sXHJcblxyXG4gICAgW2hhbmRsZUZvcmdldFBhc3MucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5mb3Jnb3RQYXNzLnN0YXR1cyA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xyXG4gICAgfSxcclxuICAgIFtnZXRDdXJyZW50LmZ1bGZpbGxlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnRVc2VyID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgeyBsb2dpbkhhbmRsZXIsIHNldEN1cnJlbnRVc2VyIH0gPSBhdXRoU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgYXV0aFNsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5leHBvcnQgY29uc3Qgc3VibWl0UG9zdCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJzdWJtaXRQb3N0L3Bvc3RzXCIsXHJcbiAgYXN5bmMgKHBvc3REYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbmV3LXBvc3RcIiwgcG9zdERhdGEpO1xyXG4gIH1cclxuKTtcclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvc3QgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwiZGVsZXRlUG9zdC9wb3N0c1wiLFxyXG4gIGFzeW5jIChwb3N0SWQpID0+IHtcclxuICAgIGF4aW9zLmRlbGV0ZShgL2FwaS9wb3N0cy8ke3Bvc3RJZH1gKTtcclxuICB9XHJcbik7XHJcbmV4cG9ydCBjb25zdCBlZGl0UG9zdCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJlZGl0UG9zdC9wb3N0c1wiLFxyXG4gIGFzeW5jICh7IHBvc3RJZCwgZm9ybURhdGEgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJlZGl0aW5nLi4uXCIsIGZvcm1EYXRhKTtcclxuICAgIGF4aW9zLnB1dChgL2FwaS9wb3N0cy8ke3Bvc3RJZH1gLCBmb3JtRGF0YSk7XHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgY29uc3QgYWRkTGlrZSA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJhZGRMaWtlL3Bvc3RzXCIsXHJcbiAgYXN5bmMgKHsgcG9zdElkLCB1c2VySWQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcG9zdExpa2VzLyR7cG9zdElkfS8ke3VzZXJJZH1gKS50aGVuKChkKSA9PiBkLmRhdGEpO1xyXG4gIH1cclxuKTtcclxuY29uc3QgcG9zdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInBvc3RzXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICBwb3N0U3RhdHVzOiBcIlwiLFxyXG4gICAgZGVsZXRlUG9zdFN0YXR1czogXCJcIixcclxuICAgIHJlYWxUaW1lUG9zdHM6IFtdLFxyXG4gICAgbGlrZVN0YXR1czogXCJcIixcclxuICAgIGVkaXRTdGF0dXM6IFwiXCIsXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0UG9zdHMoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS5yZWFsVGltZVBvc3RzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgcmVzZXRFZGl0U3RhdHVzKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUuZWRpdFN0YXR1cyA9IFwiXCI7XHJcbiAgICB9LFxyXG4gICAgcmVzZXRQb3N0U3RhdHVzKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUucG9zdFN0YXR1cyA9IFwiXCI7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgW0hZRFJBVEVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLnNvbWUsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIFtzdWJtaXRQb3N0LnBlbmRpbmddOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5wb3N0U3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9LFxyXG4gICAgW3N1Ym1pdFBvc3QuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUucG9zdFN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgfSxcclxuXHJcbiAgICBbc3VibWl0UG9zdC5yZWplY3RlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnBvc3RTdGF0dXMgPSBhY3Rpb24uZXJyb3IubWVzc2FnZTtcclxuICAgIH0sXHJcblxyXG4gICAgW2RlbGV0ZVBvc3QucGVuZGluZ106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmRlbGV0ZVBvc3RTdGF0dXMgPSBcImxvYWRpbmdcIjtcclxuICAgIH0sXHJcbiAgICBbZGVsZXRlUG9zdC5mdWxmaWxsZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5kZWxldGVQb3N0U3RhdHVzID0gXCJzdWNjZXNzXCI7XHJcbiAgICB9LFxyXG5cclxuICAgIFtkZWxldGVQb3N0LnJlamVjdGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuZGVsZXRlUG9zdFN0YXR1cyA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xyXG4gICAgfSxcclxuICAgIFthZGRMaWtlLnBlbmRpbmddOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5saWtlU3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9LFxyXG4gICAgW2FkZExpa2UuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJ3ZXdlXCIsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgc3RhdGUubGlrZVN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgfSxcclxuXHJcbiAgICBbYWRkTGlrZS5yZWplY3RlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmVkaXRTdGF0dXMgPSBhY3Rpb24uZXJyb3IubWVzc2FnZTtcclxuICAgIH0sXHJcbiAgICBbZWRpdFBvc3QucGVuZGluZ106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmVkaXRTdGF0dXMgPSBcImxvYWRpbmdcIjtcclxuICAgIH0sXHJcbiAgICBbZWRpdFBvc3QuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuZWRpdFN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgfSxcclxuXHJcbiAgICBbZWRpdFBvc3QucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5saWtlU3RhdHVzID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgeyBzZXRQb3N0cywgcmVzZXRFZGl0U3RhdHVzLCByZXNldFBvc3RTdGF0dXMgfSA9XHJcbiAgcG9zdHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBwb3N0c1NsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFJlcGx5ID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcImFkZFJlcGx5L3JlcGxpZXNcIixcclxuICBhc3luYyAoeyBwb3N0SWQsIHJlcGx5IH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlcGx5KTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3JlcGxpZXMvJHtwb3N0SWR9YCwgcmVwbHkpO1xyXG4gIH1cclxuKTtcclxuY29uc3QgcmVwbGllc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwicmVwbGllc1wiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgYWRkUmVwbHlTdGF0dXM6IFwiXCIsXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge30sXHJcbiAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgW2FkZFJlcGx5LnBlbmRpbmddOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5hZGRSZXBseVN0YXR1cyA9IFwibG9hZGluZ1wiO1xyXG4gICAgfSxcclxuICAgIFthZGRSZXBseS5mdWxmaWxsZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5hZGRSZXBseVN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgfSxcclxuXHJcbiAgICBbYWRkUmVwbHkucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5hZGRSZXBseVN0YXR1cyA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgcmVwbGllc1NsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBnZXREZWZhdWx0TWlkZGxld2FyZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB1c2Vyc1NsaWNlIGZyb20gXCIuL3VzZXJzU2xpY2VcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHtcclxuICBuZXh0UmVkdXhDb29raWVNaWRkbGV3YXJlLFxyXG4gIHdyYXBNYWtlU3RvcmUsXHJcbn0gZnJvbSBcIm5leHQtcmVkdXgtY29va2llLXdyYXBwZXJcIjtcclxuaW1wb3J0IGF1dGhTbGljZSBmcm9tIFwiLi9hdXRoU2xpY2VcIjtcclxuaW1wb3J0IHBvc3RzU2xpY2UgZnJvbSBcIi4vcG9zdHNTbGljZVwiO1xyXG5pbXBvcnQgcmVwbGllc1NsaWNlIGZyb20gXCIuL3JlcGxpZXNTbGljZVwiO1xyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PlxyXG4gIGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHtcclxuICAgICAgdXNlcnM6IHVzZXJzU2xpY2UsXHJcbiAgICAgIGF1dGg6IGF1dGhTbGljZSxcclxuICAgICAgcG9zdHM6IHBvc3RzU2xpY2UsXHJcbiAgICAgIHJlcGxpZXM6IHJlcGxpZXNTbGljZSxcclxuICAgIH0sXHJcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+IHtcclxuICAgICAgcmV0dXJuIGdldERlZmF1bHRNaWRkbGV3YXJlKHtcclxuICAgICAgICBzZXJpYWxpemFibGVDaGVjazogZmFsc2UsXHJcbiAgICAgICAgLy8gICBpZ25vcmVkQWN0aW9uczogW1xyXG4gICAgICAgIC8vICAgICBcInN1Ym1pdFBvc3QvcG9zdHMvZnVsZmlsbGVkXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZ2V0Q3VycmVudC9hdXRoL2Z1bGZpbGxlZFwiLFxyXG4gICAgICAgIC8vICAgICBcInBvc3RzL3NldFBvc3RzXCIsXHJcbiAgICAgICAgLy8gICAgIFwicG9zdHMvZ2V0UG9zdHNcIixcclxuICAgICAgICAvLyAgICAgXCJnZXRBbGxQb3N0cy9wb3N0cy9mdWxmaWxsZWRcIixcclxuICAgICAgICAvLyAgICAgXCJnZXRTaW5nbGVVc2VyL3VzZXJzL2Z1bGZpbGxlZFwiLFxyXG4gICAgICAgIC8vICAgICBcImdldFNpbmdsZVVzZXIvdXNlcnMvcGVuZGluZ1wiLFxyXG4gICAgICAgIC8vICAgICBcImF1dGgvc2V0Q3VycmVudFVzZXJcIixcclxuICAgICAgICAvLyAgICAgXCJhdXRoL3NldEN1cnJlbnRVc2VyXCIsXHJcbiAgICAgICAgLy8gICAgIFwiYWRkTGlrZS9wb3N0cy9mdWxmaWxsZWRcIixcclxuICAgICAgICAvLyAgICAgXCJhZGRMaWtlL3Bvc3RzL3BlbmRpbmdcIixcclxuICAgICAgICAvLyAgIF0sXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4vLyBjb25zdCBtYWtlU3RvcmUgPSB3cmFwTWFrZVN0b3JlKCgpID0+XHJcbi8vICAgY29uZmlndXJlU3RvcmUoe1xyXG4vLyAgICAgcmVkdWNlcjogeyB1c2VyczogdXNlcnNTbGljZSwgYXV0aDogYXV0aFNsaWNlLCBwb3N0czogcG9zdHNTbGljZSB9LFxyXG4vLyAgICAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxyXG4vLyAgICAgICBnZXREZWZhdWx0TWlkZGxld2FyZSh7IHNlcmlhbGl6YWJsZUNoZWNrOiBmYWxzZSB9KS5wcmVwZW5kKFxyXG4vLyAgICAgICAgIG5leHRSZWR1eENvb2tpZU1pZGRsZXdhcmUoe1xyXG4vLyAgICAgICAgICAgc3VidHJlZXM6IFtcIm15LnN1YnRyZWVcIl0sXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgICAgKSxcclxuLy8gICB9KVxyXG4vLyApO1xyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IGNyZWF0ZUFzeW5jVGh1bmsoXCJnZXRVc2VyL3Bvc3RzXCIsIGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgY29uc29sZS5sb2codXNlcik7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvJHt1c2VyfWApO1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcclxuICByZXR1cm4gZGF0YTtcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRTaW5nbGVVc2VyID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcImdldFNpbmdsZVVzZXIvdXNlcnNcIixcclxuICBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvJHtpZH1gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCB1c2Vyc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlcnNcIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIGdldFVzZXJTdGF0dXM6IFwiXCIsXHJcbiAgICB1c2VyOiBcIlwiLFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgW0hZRFJBVEVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLnVzZXJzLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIFtnZXRTaW5nbGVVc2VyLnBlbmRpbmddOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5nZXRVc2VyU3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9LFxyXG4gICAgW2dldFNpbmdsZVVzZXIuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuZ2V0VXNlclN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIFtnZXRTaW5nbGVVc2VyLnJlamVjdGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuZ2V0VXNlclN0YXR1cyA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgdXNlcnNTbGljZS5yZWR1Y2VyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtY29va2llLXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2FpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=