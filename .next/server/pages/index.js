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

/***/ "./components/posts/MeetupItem.module.css":
/*!************************************************!*\
  !*** ./components/posts/MeetupItem.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "MeetupItem_item__9ww6P",
	"image": "MeetupItem_image__3HjWq",
	"content": "MeetupItem_content__Bv_cD",
	"actions": "MeetupItem_actions__f3bIl"
};


/***/ }),

/***/ "./components/posts/MeetupList.module.css":
/*!************************************************!*\
  !*** ./components/posts/MeetupList.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "MeetupList_list__-tbGo"
};


/***/ }),

/***/ "./components/posts/PostItem.js":
/*!**************************************!*\
  !*** ./components/posts/PostItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupItem.module.css */ "./components/posts/MeetupItem.module.css");
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

var _jsxFileName = "D:\\Udemy\\nextjs\\06-onwards-to-a-bigger-project-starting-project\\components\\meetups\\PostItem.js";

















function PostItem(props) {
  var _auth$currentUser2, _auth$currentUser3, _currentUser$likes;

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
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`/api/users/${user}`).then(data => isMounted && setUser(data.data)).catch(err => err);
    }

    getUser();
    return () => isMounted = false; // dispatch(getSingleUser(user));
  }, []);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();

  function handleDelete() {
    dispatch(Object(_store_postsSlice__WEBPACK_IMPORTED_MODULE_11__["deletePost"])(props.id));
  }

  function handleLike() {
    var _auth$currentUser;

    if (_firebase_firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].currentUser) // dispatch(addLike({ postId: props.id, userId: auth.currentUser.uid }));
      setStatus("loading");
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`/api/postLikes/${props.id}/${(_auth$currentUser = _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].currentUser) === null || _auth$currentUser === void 0 ? void 0 : _auth$currentUser.uid}`).then(d => {
      d.data;
      setStatus("success");
    }).catch(err => err); // setStatus("loading");
    // axios
    //   .post(`/api/postLikes/${props.id}/${auth.currentUser.uid}`)
    //   .then((d) => setStatus("success"))
    //   .catch((err) => setStatus(err.message));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: [((_auth$currentUser2 = _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].currentUser) === null || _auth$currentUser2 === void 0 ? void 0 : _auth$currentUser2.uid) === props.user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
          justify: "space-between",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
            onClick: () => router.push(`/edit/${props.id}`),
            textAlign: "left",
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_15__["AiFillEdit"], {
              size: "23"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
            onClick: handleDelete,
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__["CloseIcon"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 56
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: [" ", userInfo.username, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: props.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: props.time
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: props.image,
            alt: props.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: props.details
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: showDetailHandler,
            children: "Show Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [status === "loading" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["IconButton"] // disabled={disable}
          , {
            onClick: handleLike,
            icon: (_auth$currentUser3 = _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].currentUser) !== null && _auth$currentUser3 !== void 0 && _auth$currentUser3.uid ? currentUser !== null && currentUser !== void 0 && (_currentUser$likes = currentUser.likes) !== null && _currentUser$likes !== void 0 && _currentUser$likes.includes(props.id) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_15__["AiFillHeart"], {
              color: "red",
              size: "23"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 23
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_15__["AiOutlineHeart"], {
              size: "23"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 23
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_15__["AiOutlineHeart"], {
              size: "23"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              padding: "5px"
            },
            children: props.likes
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (PostItem);

/***/ }),

/***/ "./components/posts/PostList.js":
/*!**************************************!*\
  !*** ./components/posts/PostList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../firebase/firebase */ "./firebase/firebase.js");
/* harmony import */ var _PostItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostItem */ "./components/posts/PostItem.js");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupList.module.css */ "./components/posts/MeetupList.module.css");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/select */ "@chakra-ui/select");
/* harmony import */ var _chakra_ui_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_postsSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/postsSlice */ "./store/postsSlice.js");

var _jsxFileName = "D:\\Udemy\\nextjs\\06-onwards-to-a-bigger-project-starting-project\\components\\meetups\\PostList.js";









function PostList(props) {
  const {
    0: selectValue,
    1: setSelectValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("Most Recent");
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_select__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      value: selectValue,
      onChange: e => {
        setSelectValue(e.target.value);
        dispatch(Object(_store_postsSlice__WEBPACK_IMPORTED_MODULE_7__["setSortValue"])(e.target.value));
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: "Most Recent",
        children: "Most Recent"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: "Mostly Liked",
        children: "Mostly Liked"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list,
      children: props.posts.map(post => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          id: post.id,
          user: post.user,
          image: post.image,
          title: post.title,
          details: post.description,
          time: post.time,
          likes: post.likes
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (PostList);

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
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/firebase */ "./firebase/firebase.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_posts_PostList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/posts/PostList */ "./components/posts/PostList.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_authSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/authSlice */ "./store/authSlice.js");
/* harmony import */ var _store_usersSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/usersSlice */ "./store/usersSlice.js");


var _jsxFileName = "D:\\Udemy\\nextjs\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





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
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.auth);
  console.log(auth); // const x = useSelector((state) => state.auth);

  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const sortBy = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.posts.sortValue);
  const sort = sortBy === "Mostly Liked" ? "likes" : "time";
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const q = Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["query"])(Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["collection"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["default"], "posts"), Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["orderBy"])(sort, "desc"));
    const unsub = Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["onSnapshot"])(q, snpa => {
      const posts = snpa.docs.map(doc => {
        return _objectSpread(_objectSpread({}, doc.data()), {}, {
          id: doc.id,
          time: moment__WEBPACK_IMPORTED_MODULE_9___default()(doc.data().time.toDate()).calendar()
        });
      });
      dispatch(Object(_store_usersSlice__WEBPACK_IMPORTED_MODULE_11__["getAllUsers"])());
      setPosts(posts); // dispatch(setPosts(posts));
      // if(auth.currentUser)
      // dispatch(addLike("awda"));
    });
    return () => unsub();
  }, [sort]); // useEffect(() => {
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_posts_PostList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      posts: posts
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
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
    email: user.email,
    likes: [],
    id: response.user.uid
  });
  return user.username;
});
const handleSignIn = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createAsyncThunk"])("handleSignIn/auth", async ({
  user,
  checked
}) => {
  const response = await Object(_firebase_auth__WEBPACK_IMPORTED_MODULE_0__["signInWithEmailAndPassword"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["auth"], user.email, user.password);
  await Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["updateDoc"])(Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["doc"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["db"], "users", response.user.uid), {
    isOnline: true
  }); // const sentV = await sendEmailVerification(response.user);
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
  await Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["updateDoc"])(Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["doc"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["db"], "users", response.user.uid), {
    isOnline: true
  });

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
/*! exports provided: submitPost, deletePost, editPost, addLike, setPosts, resetEditStatus, resetPostStatus, setSortValue, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSortValue", function() { return setSortValue; });
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/api/posts/${postId}`);
});
const editPost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])("editPost/posts", async ({
  postId,
  formData
}) => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`/api/posts/${postId}`, formData);
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
    editStatus: "",
    sortValue: "Most Recent"
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
    },

    setSortValue(state, action) {
      state.sortValue = action.payload;
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
      console.log(action);
      state.likeStatus = action.error.message;
    }
  }
});
const {
  setPosts,
  resetEditStatus,
  resetPostStatus,
  setSortValue
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
/*! exports provided: getUser, getSingleUser, getAllUsers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleUser", function() { return getSingleUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
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
  const response = await fetch(`/api/users/${id}`);
  const data = await response.json();
  return data;
});
const getAllUsers = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])("getAllUsers/users", async () => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/users").then(d => d.data);
});
const usersSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "users",
  initialState: {
    getUserStatus: "",
    user: "",
    users: []
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
    },
    [getAllUsers.pending]: (state, action) => {
      state.getUserStatus = "loading";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.getUserStatus = "success";
      state.users = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
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

/***/ "@chakra-ui/select":
/*!************************************!*\
  !*** external "@chakra-ui/select" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/select");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0cy9NZWV0dXBJdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0cy9NZWV0dXBMaXN0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL1Bvc3RJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVldHVwcy9Qb3N0TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYXV0aFNsaWNlLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3Bvc3RzU2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVwbGllc1NsaWNlLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3VzZXJzU2xpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3NlbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LWNvb2tpZS13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2FpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiUG9zdEl0ZW0iLCJwcm9wcyIsInVzZXJJbmZvIiwic2V0VXNlciIsInVzZVN0YXRlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZGVsZXRlUG9zdFN0YXR1cyIsInNob3dEZXRhaWxIYW5kbGVyIiwicHVzaCIsInBhdGhuYW1lIiwiaWQiLCJsaWtlU3RhdHVzIiwidXNlciIsImN1cnJlbnRVc2VyIiwiYXV0aCIsInVzZUVmZmVjdCIsImlzTW91bnRlZCIsImdldFVzZXIiLCJheGlvcyIsImdldCIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaGFuZGxlRGVsZXRlIiwiZGVsZXRlUG9zdCIsImhhbmRsZUxpa2UiLCJwb3N0IiwidWlkIiwiZCIsImNsYXNzZXMiLCJpdGVtIiwiY29udGVudCIsInVzZXJuYW1lIiwidGl0bGUiLCJ0aW1lIiwiaW1hZ2UiLCJkZXRhaWxzIiwiYWN0aW9ucyIsImxpa2VzIiwiaW5jbHVkZXMiLCJwYWRkaW5nIiwiUG9zdExpc3QiLCJzZWxlY3RWYWx1ZSIsInNldFNlbGVjdFZhbHVlIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U29ydFZhbHVlIiwibGlzdCIsIm1hcCIsImRlc2NyaXB0aW9uIiwiQ2FyZCIsImNhcmQiLCJjaGlsZHJlbiIsImZpcmViYXNlQ29uZmlncyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImluaXRpYWxpemVBcHAiLCJkYiIsImdldEZpcmVzdG9yZSIsImdldEF1dGgiLCJIb21lUGFnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRQb3N0cyIsInNvcnRCeSIsInNvcnRWYWx1ZSIsInNvcnQiLCJxIiwicXVlcnkiLCJjb2xsZWN0aW9uIiwib3JkZXJCeSIsInVuc3ViIiwib25TbmFwc2hvdCIsInNucGEiLCJkb2NzIiwiZG9jIiwibW9tZW50IiwidG9EYXRlIiwiY2FsZW5kYXIiLCJnZXRBbGxVc2VycyIsImhhbmRsZVNpZ25VcCIsImNyZWF0ZUFzeW5jVGh1bmsiLCJyZXNwb25zZSIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJ1cGRhdGVQcm9maWxlIiwiZGlzcGxheU5hbWUiLCJzZXREb2MiLCJjcmVhdGVkQXQiLCJEYXRlIiwiaGFuZGxlU2lnbkluIiwiY2hlY2tlZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXBkYXRlRG9jIiwiaXNPbmxpbmUiLCJoYW5kbGVGb3JnZXRQYXNzIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImdldEN1cnJlbnQiLCJnZXREb2MiLCJnb29nbGVTaWduaW4iLCJnb29nbGVQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsImRvY1NuYXAiLCJhdXRoU2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwiZ29vZ2xlIiwiZm9yZ290UGFzcyIsImVycm9yIiwibG9nZ2VkSW4iLCJyZWR1Y2VycyIsImxvZ2luSGFuZGxlciIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRDdXJyZW50VXNlciIsImV4dHJhUmVkdWNlcnMiLCJIWURSQVRFIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwibWVzc2FnZSIsInJlZHVjZXIiLCJzdWJtaXRQb3N0IiwicG9zdERhdGEiLCJwb3N0SWQiLCJkZWxldGUiLCJlZGl0UG9zdCIsImZvcm1EYXRhIiwicHV0IiwiYWRkTGlrZSIsInVzZXJJZCIsInBvc3RzU2xpY2UiLCJwb3N0U3RhdHVzIiwicmVhbFRpbWVQb3N0cyIsImVkaXRTdGF0dXMiLCJyZXNldEVkaXRTdGF0dXMiLCJyZXNldFBvc3RTdGF0dXMiLCJzb21lIiwiYWRkUmVwbHkiLCJyZXBseSIsInJlcGxpZXNTbGljZSIsImFkZFJlcGx5U3RhdHVzIiwibWFrZVN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJ1c2VycyIsInVzZXJzU2xpY2UiLCJyZXBsaWVzIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwic2VyaWFsaXphYmxlQ2hlY2siLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImdldFNpbmdsZVVzZXIiLCJmZXRjaCIsImpzb24iLCJnZXRVc2VyU3RhdHVzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BOztBQUNBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3ZCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUFzQkMsc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFFQSxRQUFNRyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxnRUFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0YsS0FBTixDQUFZRyxnQkFBeEIsQ0FBekIsQ0FMdUIsQ0FNdkI7O0FBRUEsaUJBQWVDLGlCQUFmLEdBQW1DO0FBQ2pDTixVQUFNLENBQUNPLElBQVAsQ0FBYSxHQUFFUCxNQUFNLENBQUNRLFFBQVMsR0FBRWQsS0FBSyxDQUFDZSxFQUFHLEVBQTFDO0FBQ0Q7O0FBQ0QsUUFBTUMsVUFBVSxHQUFHUCxnRUFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0YsS0FBTixDQUFZUSxVQUF4QixDQUE5QjtBQUVBLFFBQU1DLElBQUksR0FBR2pCLEtBQUssQ0FBQ2lCLElBQW5CO0FBQ0EsUUFBTUMsV0FBVyxHQUFHVCxnRUFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ1MsSUFBTixDQUFXRCxXQUF2QixDQUEvQjtBQUVBRSx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJQyxTQUFTLEdBQUcsSUFBaEI7O0FBQ0EsYUFBU0MsT0FBVCxHQUFtQjtBQUNqQkMsa0RBQUssQ0FDRkMsR0FESCxDQUNRLGNBQWFQLElBQUssRUFEMUIsRUFFR1EsSUFGSCxDQUVTQyxJQUFELElBQVVMLFNBQVMsSUFBSW5CLE9BQU8sQ0FBQ3dCLElBQUksQ0FBQ0EsSUFBTixDQUZ0QyxFQUdHQyxLQUhILENBR1VDLEdBQUQsSUFBU0EsR0FIbEI7QUFJRDs7QUFDRE4sV0FBTztBQUNQLFdBQU8sTUFBT0QsU0FBUyxHQUFHLEtBQTFCLENBVGMsQ0FVZDtBQUNELEdBWFEsRUFXTixFQVhNLENBQVQ7QUFZQSxRQUFNUSxRQUFRLEdBQUdDLGdFQUFXLEVBQTVCOztBQUVBLFdBQVNDLFlBQVQsR0FBd0I7QUFDdEJGLFlBQVEsQ0FBQ0cscUVBQVUsQ0FBQ2hDLEtBQUssQ0FBQ2UsRUFBUCxDQUFYLENBQVI7QUFDRDs7QUFFRCxXQUFTa0IsVUFBVCxHQUFzQjtBQUFBOztBQUNwQixRQUFJZCx1REFBSSxDQUFDRCxXQUFULEVBQ0U7QUFDQWIsZUFBUyxDQUFDLFNBQUQsQ0FBVDtBQUNGa0IsZ0RBQUssQ0FDRlcsSUFESCxDQUNTLGtCQUFpQmxDLEtBQUssQ0FBQ2UsRUFBRyxJQUEzQixxQkFBOEJJLHVEQUFJLENBQUNELFdBQW5DLHNEQUE4QixrQkFBa0JpQixHQUFJLEVBRDVELEVBRUdWLElBRkgsQ0FFU1csQ0FBRCxJQUFPO0FBQ1hBLE9BQUMsQ0FBQ1YsSUFBRjtBQUNBckIsZUFBUyxDQUFDLFNBQUQsQ0FBVDtBQUNELEtBTEgsRUFNR3NCLEtBTkgsQ0FNVUMsR0FBRCxJQUFTQSxHQU5sQixFQUpvQixDQVdwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBQSwyQkFDRTtBQUFJLGVBQVMsRUFBRVMsNkRBQU8sQ0FBQ0MsSUFBdkI7QUFBQSw2QkFDRSxxRUFBQyxnREFBRDtBQUFBLG1CQUNHLHVCQUFBbkIsdURBQUksQ0FBQ0QsV0FBTCwwRUFBa0JpQixHQUFsQixNQUEwQm5DLEtBQUssQ0FBQ2lCLElBQWhDLGlCQUNDLHFFQUFDLHFEQUFEO0FBQU0saUJBQU8sRUFBQyxlQUFkO0FBQUEsa0NBQ0UscUVBQUMsMkRBQUQ7QUFDRSxtQkFBTyxFQUFFLE1BQU1YLE1BQU0sQ0FBQ08sSUFBUCxDQUFhLFNBQVFiLEtBQUssQ0FBQ2UsRUFBRyxFQUE5QixDQURqQjtBQUVFLHFCQUFTLEVBQUMsTUFGWjtBQUdFLGdCQUFJLGVBQUUscUVBQUMsMERBQUQ7QUFBWSxrQkFBSSxFQUFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBT0UscUVBQUMsMkRBQUQ7QUFBWSxtQkFBTyxFQUFFZ0IsWUFBckI7QUFBbUMsZ0JBQUksZUFBRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBWUU7QUFBSyxtQkFBUyxFQUFFTSw2REFBTyxDQUFDRSxPQUF4QjtBQUFBLGtDQUNFO0FBQUEsNEJBQU10QyxRQUFRLENBQUN1QyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUEsc0JBQUt4QyxLQUFLLENBQUN5QztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFJRTtBQUFBLHNCQUFPekMsS0FBSyxDQUFDMEM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRixlQWtCRTtBQUFLLG1CQUFTLEVBQUVMLDZEQUFPLENBQUNNLEtBQXhCO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUUzQyxLQUFLLENBQUMyQyxLQUFoQjtBQUF1QixlQUFHLEVBQUUzQyxLQUFLLENBQUN5QztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkYsZUFxQkU7QUFBSyxtQkFBUyxFQUFFSiw2REFBTyxDQUFDRSxPQUF4QjtBQUFBLGlDQUNFO0FBQUEsc0JBQUt2QyxLQUFLLENBQUM0QztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCRixlQXdCRTtBQUFLLG1CQUFTLEVBQUVQLDZEQUFPLENBQUNRLE9BQXhCO0FBQUEsaUNBQ0U7QUFBUSxtQkFBTyxFQUFFakMsaUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4QkYsZUEyQkU7QUFBQSxxQkFDR1IsTUFBTSxLQUFLLFNBQVgsZ0JBQ0MscUVBQUMsMkRBQUQ7QUFBWSxnQkFBSSxlQUFFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxnQkFHQyxxRUFBQywyREFBRCxDQUNFO0FBREY7QUFFRSxtQkFBTyxFQUFFNkIsVUFGWDtBQUdFLGdCQUFJLEVBQ0Ysc0JBQUFkLHVEQUFJLENBQUNELFdBQUwsa0VBQWtCaUIsR0FBbEIsR0FDRWpCLFdBQVcsU0FBWCxJQUFBQSxXQUFXLFdBQVgsMEJBQUFBLFdBQVcsQ0FBRTRCLEtBQWIsa0VBQW9CQyxRQUFwQixDQUE2Qi9DLEtBQUssQ0FBQ2UsRUFBbkMsaUJBQ0UscUVBQUMsMkRBQUQ7QUFBYSxtQkFBSyxFQUFDLEtBQW5CO0FBQXlCLGtCQUFJLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixnQkFHRSxxRUFBQyw4REFBRDtBQUFnQixrQkFBSSxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkosZ0JBT0UscUVBQUMsOERBQUQ7QUFBZ0Isa0JBQUksRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWE47QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQW9CRTtBQUFNLGlCQUFLLEVBQUU7QUFBRWlDLHFCQUFPLEVBQUU7QUFBWCxhQUFiO0FBQUEsc0JBQWtDaEQsS0FBSyxDQUFDOEM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwQkYsRUFvQndELEdBcEJ4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3REQ7O0FBRWMvQyx1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU2tELFFBQVQsQ0FBa0JqRCxLQUFsQixFQUF5QjtBQUN2QixRQUFNO0FBQUEsT0FBQ2tELFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDaEQsc0RBQVEsQ0FBQyxhQUFELENBQTlDO0FBQ0EsUUFBTTBCLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHdEQUFEO0FBQ0UsV0FBSyxFQUFFb0IsV0FEVDtBQUVFLGNBQVEsRUFBR0UsQ0FBRCxJQUFPO0FBQ2ZELHNCQUFjLENBQUNDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFDQXpCLGdCQUFRLENBQUMwQixzRUFBWSxDQUFDSCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiLENBQVI7QUFDRCxPQUxIO0FBQUEsOEJBT0U7QUFBUSxhQUFLLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUU7QUFBUSxhQUFLLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBV0U7QUFBSSxlQUFTLEVBQUVqQiw2REFBTyxDQUFDbUIsSUFBdkI7QUFBQSxnQkFDR3hELEtBQUssQ0FBQ1EsS0FBTixDQUFZaUQsR0FBWixDQUFpQnZCLElBQUQsSUFBVTtBQUN6Qiw0QkFDRSxxRUFBQyxpREFBRDtBQUVFLFlBQUUsRUFBRUEsSUFBSSxDQUFDbkIsRUFGWDtBQUdFLGNBQUksRUFBRW1CLElBQUksQ0FBQ2pCLElBSGI7QUFJRSxlQUFLLEVBQUVpQixJQUFJLENBQUNTLEtBSmQ7QUFLRSxlQUFLLEVBQUVULElBQUksQ0FBQ08sS0FMZDtBQU1FLGlCQUFPLEVBQUVQLElBQUksQ0FBQ3dCLFdBTmhCO0FBT0UsY0FBSSxFQUFFeEIsSUFBSSxDQUFDUSxJQVBiO0FBUUUsZUFBSyxFQUFFUixJQUFJLENBQUNZO0FBUmQsV0FDT1osSUFBSSxDQUFDbkIsRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBWUQsT0FiQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7QUFFY2tDLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7O0FBRUEsU0FBU1UsSUFBVCxDQUFjM0QsS0FBZCxFQUFxQjtBQUNuQixzQkFBTztBQUFLLGFBQVMsRUFBRXFDLHVEQUFPLENBQUN1QixJQUF4QjtBQUFBLGNBQStCNUQsS0FBSyxDQUFDNkQ7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRWNGLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxNQUFNRyxlQUFlLEdBQUc7QUFDdEJDLFFBQU0sRUFBRSx5Q0FEYztBQUd0QkMsWUFBVSxFQUFFLDZCQUhVO0FBS3RCQyxXQUFTLEVBQUUsYUFMVztBQU90QkMsZUFBYSxFQUFFLHlCQVBPO0FBU3RCQyxtQkFBaUIsRUFBRSxlQVRHO0FBV3RCQyxPQUFLLEVBQUU7QUFYZSxDQUF4QjtBQWFBLE1BQU1DLEdBQUcsR0FBR0Msa0VBQWEsQ0FBQ1IsZUFBRCxDQUF6QjtBQUVPLE1BQU1TLEVBQUUsR0FBR0MsdUVBQVksRUFBdkI7QUFDQSxNQUFNckQsSUFBSSxHQUFHc0QsNkRBQU8sRUFBcEI7QUFFUUQsc0lBQVksRUFBM0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBV0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNFLFFBQVQsR0FBb0I7QUFDbEIsUUFBTTdDLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNWCxJQUFJLEdBQUdWLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDUyxJQUFsQixDQUF4QjtBQUNBd0QsU0FBTyxDQUFDQyxHQUFSLENBQVl6RCxJQUFaLEVBSGtCLENBSWxCOztBQUNBLFFBQU07QUFBQSxPQUFDWCxLQUFEO0FBQUEsT0FBUXFFO0FBQVIsTUFBb0IxRSxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFFQSxRQUFNMkUsTUFBTSxHQUFHckUsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNGLEtBQU4sQ0FBWXVFLFNBQXhCLENBQTFCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHRixNQUFNLEtBQUssY0FBWCxHQUE0QixPQUE1QixHQUFzQyxNQUFuRDtBQUNBMUQseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTTZELENBQUMsR0FBR0MsaUVBQUssQ0FBQ0Msc0VBQVUsQ0FBQ1osMERBQUQsRUFBSyxPQUFMLENBQVgsRUFBMEJhLG1FQUFPLENBQUNKLElBQUQsRUFBTyxNQUFQLENBQWpDLENBQWY7QUFDQSxVQUFNSyxLQUFLLEdBQUdDLHNFQUFVLENBQUNMLENBQUQsRUFBS00sSUFBRCxJQUFVO0FBQ3BDLFlBQU0vRSxLQUFLLEdBQUcrRSxJQUFJLENBQUNDLElBQUwsQ0FBVS9CLEdBQVYsQ0FBZWdDLEdBQUQsSUFBUztBQUNuQywrQ0FDS0EsR0FBRyxDQUFDL0QsSUFBSixFQURMO0FBRUVYLFlBQUUsRUFBRTBFLEdBQUcsQ0FBQzFFLEVBRlY7QUFHRTJCLGNBQUksRUFBRWdELDZDQUFNLENBQUNELEdBQUcsQ0FBQy9ELElBQUosR0FBV2dCLElBQVgsQ0FBZ0JpRCxNQUFoQixFQUFELENBQU4sQ0FBaUNDLFFBQWpDO0FBSFI7QUFLRCxPQU5hLENBQWQ7QUFPQS9ELGNBQVEsQ0FBQ2dFLHNFQUFXLEVBQVosQ0FBUjtBQUNBaEIsY0FBUSxDQUFDckUsS0FBRCxDQUFSLENBVG9DLENBV3BDO0FBQ0E7QUFDQTtBQUNELEtBZHVCLENBQXhCO0FBZUEsV0FBTyxNQUFNNkUsS0FBSyxFQUFsQjtBQUNELEdBbEJRLEVBa0JOLENBQUNMLElBQUQsQ0FsQk0sQ0FBVCxDQVRrQixDQTRCbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQU87QUFBQSwyQkFBRyxxRUFBQyxrRUFBRDtBQUFVLFdBQUssRUFBRXhFO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSCxtQkFBUDtBQUNELEMsQ0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ2VrRSx1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1vQixZQUFZLEdBQUdDLHlFQUFnQixDQUMxQyxtQkFEMEMsRUFFMUMsTUFBTzlFLElBQVAsSUFBZ0I7QUFDZCxRQUFNK0UsUUFBUSxHQUFHLE1BQU1DLHFGQUE4QixDQUNuRDlFLHVEQURtRCxFQUVuREYsSUFBSSxDQUFDaUYsS0FGOEMsRUFHbkRqRixJQUFJLENBQUNrRixRQUg4QyxDQUFyRDtBQU1BLFFBQU1DLG9FQUFhLENBQUNqRix1REFBSSxDQUFDRCxXQUFOLEVBQW1CO0FBQ3BDbUYsZUFBVyxFQUFFcEYsSUFBSSxDQUFDdUI7QUFEa0IsR0FBbkIsQ0FBbkI7QUFHQSxRQUFNOEQsa0VBQU0sQ0FBQ2IsK0RBQUcsQ0FBQ2xCLHFEQUFELEVBQUssT0FBTCxFQUFjeUIsUUFBUSxDQUFDL0UsSUFBVCxDQUFja0IsR0FBNUIsQ0FBSixFQUFzQztBQUNoREssWUFBUSxFQUFFckIsdURBQUksQ0FBQ0QsV0FBTCxDQUFpQm1GLFdBRHFCO0FBRWhERSxhQUFTLEVBQUUsSUFBSUMsSUFBSixFQUZxQztBQUdoRE4sU0FBSyxFQUFFakYsSUFBSSxDQUFDaUYsS0FIb0M7QUFJaERwRCxTQUFLLEVBQUUsRUFKeUM7QUFLaEQvQixNQUFFLEVBQUVpRixRQUFRLENBQUMvRSxJQUFULENBQWNrQjtBQUw4QixHQUF0QyxDQUFaO0FBT0EsU0FBT2xCLElBQUksQ0FBQ3VCLFFBQVo7QUFDRCxDQXBCeUMsQ0FBckM7QUFzQkEsTUFBTWlFLFlBQVksR0FBR1YseUVBQWdCLENBQzFDLG1CQUQwQyxFQUUxQyxPQUFPO0FBQUU5RSxNQUFGO0FBQVF5RjtBQUFSLENBQVAsS0FBNkI7QUFDM0IsUUFBTVYsUUFBUSxHQUFHLE1BQU1XLGlGQUEwQixDQUMvQ3hGLHVEQUQrQyxFQUUvQ0YsSUFBSSxDQUFDaUYsS0FGMEMsRUFHL0NqRixJQUFJLENBQUNrRixRQUgwQyxDQUFqRDtBQUtBLFFBQU1TLHFFQUFTLENBQUNuQiwrREFBRyxDQUFDbEIscURBQUQsRUFBSyxPQUFMLEVBQWN5QixRQUFRLENBQUMvRSxJQUFULENBQWNrQixHQUE1QixDQUFKLEVBQXNDO0FBQ25EMEUsWUFBUSxFQUFFO0FBRHlDLEdBQXRDLENBQWYsQ0FOMkIsQ0FVM0I7QUFDRCxDQWJ5QyxDQUFyQztBQWVBLE1BQU1DLGdCQUFnQixHQUFHZix5RUFBZ0IsQ0FDOUMsdUJBRDhDLEVBRTlDLE1BQU9HLEtBQVAsSUFBaUI7QUFDZixRQUFNYSw2RUFBc0IsQ0FBQzVGLHVEQUFELEVBQU8rRSxLQUFQLENBQTVCO0FBQ0QsQ0FKNkMsQ0FBekM7QUFNQSxNQUFNYyxVQUFVLEdBQUdqQix5RUFBZ0IsQ0FBQyxpQkFBRCxFQUFvQixZQUFZO0FBQ3hFLFFBQU05RSxJQUFJLEdBQUcsQ0FBQyxNQUFNZ0csa0VBQU0sQ0FBQ3hCLCtEQUFHLENBQUNsQixxREFBRCxFQUFLLE9BQUwsRUFBY3BELHVEQUFJLENBQUNELFdBQUwsQ0FBaUJpQixHQUEvQixDQUFKLENBQWIsRUFBdURULElBQXZELEVBQWI7QUFDQWlELFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCM0QsSUFBL0I7QUFDQSxTQUFPQSxJQUFQLENBSHdFLENBS3hFO0FBQ0QsQ0FOeUMsQ0FBbkM7QUFRQSxNQUFNaUcsWUFBWSxHQUFHbkIseUVBQWdCLENBQzFDLG1CQUQwQyxFQUUxQyxNQUFPOUUsSUFBUCxJQUFnQjtBQUNkLFFBQU1rRyxjQUFjLEdBQUcsSUFBSUMsaUVBQUosRUFBdkIsQ0FEYyxDQUVkOztBQUNBLFFBQU1wQixRQUFRLEdBQUcsTUFBTXFCLHNFQUFlLENBQUNsRyx1REFBRCxFQUFPZ0csY0FBUCxDQUF0QztBQUNBLFFBQU1HLE9BQU8sR0FBRyxDQUFDLE1BQU1MLGtFQUFNLENBQUN4QiwrREFBRyxDQUFDbEIscURBQUQsRUFBSyxPQUFMLEVBQWN5QixRQUFRLENBQUMvRSxJQUFULENBQWNrQixHQUE1QixDQUFKLENBQWIsRUFBb0RULElBQXBELEVBQWhCO0FBQ0EsUUFBTWtGLHFFQUFTLENBQUNuQiwrREFBRyxDQUFDbEIscURBQUQsRUFBSyxPQUFMLEVBQWN5QixRQUFRLENBQUMvRSxJQUFULENBQWNrQixHQUE1QixDQUFKLEVBQXNDO0FBQ25EMEUsWUFBUSxFQUFFO0FBRHlDLEdBQXRDLENBQWY7O0FBSUEsTUFBSSxDQUFDUyxPQUFMLEVBQWM7QUFDWixVQUFNaEIsa0VBQU0sQ0FBQ2IsK0RBQUcsQ0FBQ2xCLHFEQUFELEVBQUssT0FBTCxFQUFjeUIsUUFBUSxDQUFDL0UsSUFBVCxDQUFja0IsR0FBNUIsQ0FBSixFQUFzQztBQUNoREssY0FBUSxFQUFFd0QsUUFBUSxDQUFDL0UsSUFBVCxDQUFjb0YsV0FEd0I7QUFFaERFLGVBQVMsRUFBRSxJQUFJQyxJQUFKLEVBRnFDO0FBR2hETixXQUFLLEVBQUVGLFFBQVEsQ0FBQy9FLElBQVQsQ0FBY2lGLEtBSDJCO0FBSWhEcEQsV0FBSyxFQUFFO0FBSnlDLEtBQXRDLENBQVo7QUFNRDtBQUNGLENBbkJ5QyxDQUFyQztBQXNCUCxNQUFNeUUsU0FBUyxHQUFHQyxvRUFBVyxDQUFDO0FBQzVCQyxNQUFJLEVBQUUsTUFEc0I7QUFFNUJDLGNBQVksRUFBRTtBQUNaQyxjQUFVLEVBQUUsS0FEQTtBQUVaM0IsWUFBUSxFQUFFLEVBRkU7QUFHWjlFLGVBQVcsRUFBRSxFQUhEO0FBSVowRyxVQUFNLEVBQUU7QUFBRXhILFlBQU0sRUFBRTtBQUFWLEtBSkk7QUFLWnlILGNBQVUsRUFBRTtBQUFFekgsWUFBTSxFQUFFO0FBQVYsS0FMQTtBQU1aMEgsU0FBSyxFQUFFLEVBTks7QUFPWkMsWUFBUSxFQUFFO0FBUEUsR0FGYztBQVc1QkMsVUFBUSxFQUFFO0FBQ1JDLGdCQUFZLENBQUN2SCxLQUFELEVBQVF3SCxNQUFSLEVBQWdCO0FBQzFCeEgsV0FBSyxDQUFDaUgsVUFBTixHQUFtQk8sTUFBTSxDQUFDQyxPQUExQjtBQUNELEtBSE87O0FBS1JDLGtCQUFjLENBQUMxSCxLQUFELEVBQVF3SCxNQUFSLEVBQWdCO0FBQzVCeEgsV0FBSyxDQUFDUSxXQUFOLEdBQW9CZ0gsTUFBTSxDQUFDQyxPQUEzQjtBQUNBekgsV0FBSyxDQUFDcUgsUUFBTixHQUFpQkcsTUFBTSxDQUFDQyxPQUF4QjtBQUNEOztBQVJPLEdBWGtCO0FBcUI1QkUsZUFBYSxFQUFFO0FBQ2IsS0FBQ0MsMERBQUQsR0FBVyxDQUFDNUgsS0FBRCxFQUFRd0gsTUFBUixLQUFtQjtBQUM1Qiw2Q0FDS3hILEtBREwsR0FFS3dILE1BQU0sQ0FBQ0MsT0FBUCxDQUFlaEgsSUFGcEI7QUFJRCxLQU5ZO0FBT2IsS0FBQzJFLFlBQVksQ0FBQ3lDLE9BQWQsR0FBd0IsQ0FBQzdILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDekN4SCxXQUFLLENBQUNzRixRQUFOLEdBQWlCLFNBQWpCO0FBQ0QsS0FUWTtBQVViLEtBQUNGLFlBQVksQ0FBQzBDLFNBQWQsR0FBMEIsQ0FBQzlILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDM0N4SCxXQUFLLENBQUNzRixRQUFOLEdBQWlCLFNBQWpCO0FBQ0QsS0FaWTtBQWNiLEtBQUNGLFlBQVksQ0FBQzJDLFFBQWQsR0FBeUIsQ0FBQy9ILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDMUN4SCxXQUFLLENBQUNzRixRQUFOLEdBQWlCa0MsTUFBTSxDQUFDSixLQUFQLENBQWFZLE9BQTlCO0FBQ0QsS0FoQlk7QUFpQmIsS0FBQ2pDLFlBQVksQ0FBQzhCLE9BQWQsR0FBd0IsQ0FBQzdILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDekN4SCxXQUFLLENBQUNzRixRQUFOLEdBQWlCLFNBQWpCO0FBQ0QsS0FuQlk7QUFvQmIsS0FBQ1MsWUFBWSxDQUFDK0IsU0FBZCxHQUEwQixDQUFDOUgsS0FBRCxFQUFRd0gsTUFBUixLQUFtQjtBQUMzQ3hILFdBQUssQ0FBQ3NGLFFBQU4sR0FBaUIsU0FBakI7QUFDQXRGLFdBQUssQ0FBQ29ILEtBQU4sR0FBYyxFQUFkO0FBQ0QsS0F2Qlk7QUF5QmIsS0FBQ3JCLFlBQVksQ0FBQ2dDLFFBQWQsR0FBeUIsQ0FBQy9ILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDMUN2RCxhQUFPLENBQUNDLEdBQVIsQ0FBWXNELE1BQU0sQ0FBQ0osS0FBUCxDQUFhWSxPQUF6QjtBQUNBLFVBQUlaLEtBQUo7O0FBQ0EsVUFBSUksTUFBTSxDQUFDSixLQUFQLENBQWFZLE9BQWIsS0FBeUIsd0NBQTdCLEVBQXVFO0FBQ3JFWixhQUFLLEdBQUcsOERBQVI7QUFDRCxPQUZELE1BRU8sSUFDTEksTUFBTSxDQUFDSixLQUFQLENBQWFZLE9BQWIsS0FDQSxtTkFGSyxFQUdMO0FBQ0FaLGFBQUssR0FBRyxxQ0FBUjtBQUNELE9BTE0sTUFLQSxJQUNMSSxNQUFNLENBQUNKLEtBQVAsQ0FBYVksT0FBYixLQUF5Qix3Q0FEcEIsRUFFTDtBQUNBWixhQUFLLEdBQUcsNEJBQVI7QUFDRDs7QUFFRHBILFdBQUssQ0FBQ3NGLFFBQU4sR0FBaUIsT0FBakI7QUFDQXRGLFdBQUssQ0FBQ29ILEtBQU4sR0FBY0EsS0FBZDtBQUNELEtBM0NZO0FBNENiLEtBQUNaLFlBQVksQ0FBQ3FCLE9BQWQsR0FBd0IsQ0FBQzdILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDekN4SCxXQUFLLENBQUNrSCxNQUFOLENBQWF4SCxNQUFiLEdBQXNCLFNBQXRCO0FBQ0QsS0E5Q1k7QUErQ2IsS0FBQzhHLFlBQVksQ0FBQ3NCLFNBQWQsR0FBMEIsQ0FBQzlILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDM0N4SCxXQUFLLENBQUNrSCxNQUFOLENBQWF4SCxNQUFiLEdBQXNCLFNBQXRCO0FBQ0QsS0FqRFk7QUFtRGIsS0FBQzhHLFlBQVksQ0FBQ3VCLFFBQWQsR0FBeUIsQ0FBQy9ILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDMUN4SCxXQUFLLENBQUNrSCxNQUFOLENBQWF4SCxNQUFiLEdBQXNCOEgsTUFBTSxDQUFDSixLQUFQLENBQWFZLE9BQW5DO0FBQ0QsS0FyRFk7QUFzRGIsS0FBQzVCLGdCQUFnQixDQUFDeUIsT0FBbEIsR0FBNEIsQ0FBQzdILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDN0N4SCxXQUFLLENBQUNtSCxVQUFOLENBQWlCekgsTUFBakIsR0FBMEIsU0FBMUI7QUFDRCxLQXhEWTtBQXlEYixLQUFDMEcsZ0JBQWdCLENBQUMwQixTQUFsQixHQUE4QixDQUFDOUgsS0FBRCxFQUFRd0gsTUFBUixLQUFtQjtBQUMvQ3hILFdBQUssQ0FBQ21ILFVBQU4sQ0FBaUJ6SCxNQUFqQixHQUEwQixTQUExQjtBQUNELEtBM0RZO0FBNkRiLEtBQUMwRyxnQkFBZ0IsQ0FBQzJCLFFBQWxCLEdBQTZCLENBQUMvSCxLQUFELEVBQVF3SCxNQUFSLEtBQW1CO0FBQzlDeEgsV0FBSyxDQUFDbUgsVUFBTixDQUFpQnpILE1BQWpCLEdBQTBCOEgsTUFBTSxDQUFDSixLQUFQLENBQWFZLE9BQXZDO0FBQ0QsS0EvRFk7QUFnRWIsS0FBQzFCLFVBQVUsQ0FBQ3dCLFNBQVosR0FBd0IsQ0FBQzlILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDekN4SCxXQUFLLENBQUNRLFdBQU4sR0FBb0JnSCxNQUFNLENBQUNDLE9BQTNCO0FBQ0Q7QUFsRVk7QUFyQmEsQ0FBRCxDQUE3QjtBQTBGTyxNQUFNO0FBQUVGLGNBQUY7QUFBZ0JHO0FBQWhCLElBQW1DYixTQUFTLENBQUMxRSxPQUFuRDtBQUNRMEUsd0VBQVMsQ0FBQ29CLE9BQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BMQTtBQUNBO0FBQ0E7QUFDTyxNQUFNQyxVQUFVLEdBQUc3Qyx5RUFBZ0IsQ0FDeEMsa0JBRHdDLEVBRXhDLE1BQU84QyxRQUFQLElBQW9CO0FBQ2xCLFNBQU90SCw0Q0FBSyxDQUFDVyxJQUFOLENBQVcsZUFBWCxFQUE0QjJHLFFBQTVCLENBQVA7QUFDRCxDQUp1QyxDQUFuQztBQU1BLE1BQU03RyxVQUFVLEdBQUcrRCx5RUFBZ0IsQ0FDeEMsa0JBRHdDLEVBRXhDLE1BQU8rQyxNQUFQLElBQWtCO0FBQ2hCLFNBQU92SCw0Q0FBSyxDQUFDd0gsTUFBTixDQUFjLGNBQWFELE1BQU8sRUFBbEMsQ0FBUDtBQUNELENBSnVDLENBQW5DO0FBTUEsTUFBTUUsUUFBUSxHQUFHakQseUVBQWdCLENBQ3RDLGdCQURzQyxFQUV0QyxPQUFPO0FBQUUrQyxRQUFGO0FBQVVHO0FBQVYsQ0FBUCxLQUFnQztBQUM5QixTQUFPMUgsNENBQUssQ0FBQzJILEdBQU4sQ0FBVyxjQUFhSixNQUFPLEVBQS9CLEVBQWtDRyxRQUFsQyxDQUFQO0FBQ0QsQ0FKcUMsQ0FBakM7QUFNQSxNQUFNRSxPQUFPLEdBQUdwRCx5RUFBZ0IsQ0FDckMsZUFEcUMsRUFFckMsT0FBTztBQUFFK0MsUUFBRjtBQUFVTTtBQUFWLENBQVAsS0FBOEI7QUFDNUIsU0FBTzdILDRDQUFLLENBQUNXLElBQU4sQ0FBWSxrQkFBaUI0RyxNQUFPLElBQUdNLE1BQU8sRUFBOUMsRUFBaUQzSCxJQUFqRCxDQUF1RFcsQ0FBRCxJQUFPQSxDQUFDLENBQUNWLElBQS9ELENBQVA7QUFDRCxDQUpvQyxDQUFoQztBQU1QLE1BQU0ySCxVQUFVLEdBQUc3QixvRUFBVyxDQUFDO0FBQzdCQyxNQUFJLEVBQUUsT0FEdUI7QUFFN0JDLGNBQVksRUFBRTtBQUNaNEIsY0FBVSxFQUFFLEVBREE7QUFFWjNJLG9CQUFnQixFQUFFLEVBRk47QUFHWjRJLGlCQUFhLEVBQUUsRUFISDtBQUladkksY0FBVSxFQUFFLEVBSkE7QUFLWndJLGNBQVUsRUFBRSxFQUxBO0FBTVp6RSxhQUFTLEVBQUU7QUFOQyxHQUZlO0FBVTdCaUQsVUFBUSxFQUFFO0FBQ1JuRCxZQUFRLENBQUNuRSxLQUFELEVBQVF3SCxNQUFSLEVBQWdCO0FBQ3RCeEgsV0FBSyxDQUFDNkksYUFBTixHQUFzQnJCLE1BQU0sQ0FBQ0MsT0FBN0I7QUFDRCxLQUhPOztBQUlSc0IsbUJBQWUsQ0FBQy9JLEtBQUQsRUFBUXdILE1BQVIsRUFBZ0I7QUFDN0J4SCxXQUFLLENBQUM4SSxVQUFOLEdBQW1CLEVBQW5CO0FBQ0QsS0FOTzs7QUFPUkUsbUJBQWUsQ0FBQ2hKLEtBQUQsRUFBUXdILE1BQVIsRUFBZ0I7QUFDN0J4SCxXQUFLLENBQUM0SSxVQUFOLEdBQW1CLEVBQW5CO0FBQ0QsS0FUTzs7QUFVUi9GLGdCQUFZLENBQUM3QyxLQUFELEVBQVF3SCxNQUFSLEVBQWdCO0FBQzFCeEgsV0FBSyxDQUFDcUUsU0FBTixHQUFrQm1ELE1BQU0sQ0FBQ0MsT0FBekI7QUFDRDs7QUFaTyxHQVZtQjtBQXdCN0JFLGVBQWEsRUFBRTtBQUNiLEtBQUNDLDBEQUFELEdBQVcsQ0FBQzVILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDNUIsNkNBQ0t4SCxLQURMLEdBRUt3SCxNQUFNLENBQUNDLE9BQVAsQ0FBZXdCLElBRnBCO0FBSUQsS0FOWTtBQVFiLEtBQUNmLFVBQVUsQ0FBQ0wsT0FBWixHQUFzQixDQUFDN0gsS0FBRCxFQUFRd0gsTUFBUixLQUFtQjtBQUN2Q3hILFdBQUssQ0FBQzRJLFVBQU4sR0FBbUIsU0FBbkI7QUFDRCxLQVZZO0FBV2IsS0FBQ1YsVUFBVSxDQUFDSixTQUFaLEdBQXdCLENBQUM5SCxLQUFELEVBQVF3SCxNQUFSLEtBQW1CO0FBQ3pDeEgsV0FBSyxDQUFDNEksVUFBTixHQUFtQixTQUFuQjtBQUNELEtBYlk7QUFlYixLQUFDVixVQUFVLENBQUNILFFBQVosR0FBdUIsQ0FBQy9ILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDeEN4SCxXQUFLLENBQUM0SSxVQUFOLEdBQW1CcEIsTUFBTSxDQUFDSixLQUFQLENBQWFZLE9BQWhDO0FBQ0QsS0FqQlk7QUFtQmIsS0FBQzFHLFVBQVUsQ0FBQ3VHLE9BQVosR0FBc0IsQ0FBQzdILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDdkN4SCxXQUFLLENBQUNDLGdCQUFOLEdBQXlCLFNBQXpCO0FBQ0QsS0FyQlk7QUFzQmIsS0FBQ3FCLFVBQVUsQ0FBQ3dHLFNBQVosR0FBd0IsQ0FBQzlILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDekN4SCxXQUFLLENBQUNDLGdCQUFOLEdBQXlCLFNBQXpCO0FBQ0QsS0F4Qlk7QUEwQmIsS0FBQ3FCLFVBQVUsQ0FBQ3lHLFFBQVosR0FBdUIsQ0FBQy9ILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDeEN4SCxXQUFLLENBQUNDLGdCQUFOLEdBQXlCdUgsTUFBTSxDQUFDSixLQUFQLENBQWFZLE9BQXRDO0FBQ0QsS0E1Qlk7QUE2QmIsS0FBQ1MsT0FBTyxDQUFDWixPQUFULEdBQW1CLENBQUM3SCxLQUFELEVBQVF3SCxNQUFSLEtBQW1CO0FBQ3BDeEgsV0FBSyxDQUFDTSxVQUFOLEdBQW1CLFNBQW5CO0FBQ0QsS0EvQlk7QUFnQ2IsS0FBQ21JLE9BQU8sQ0FBQ1gsU0FBVCxHQUFxQixDQUFDOUgsS0FBRCxFQUFRd0gsTUFBUixLQUFtQjtBQUN0Q3ZELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JzRCxNQUFNLENBQUNDLE9BQTNCO0FBQ0F6SCxXQUFLLENBQUNNLFVBQU4sR0FBbUIsU0FBbkI7QUFDRCxLQW5DWTtBQXFDYixLQUFDbUksT0FBTyxDQUFDVixRQUFULEdBQW9CLENBQUMvSCxLQUFELEVBQVF3SCxNQUFSLEtBQW1CO0FBQ3JDeEgsV0FBSyxDQUFDOEksVUFBTixHQUFtQnRCLE1BQU0sQ0FBQ0osS0FBUCxDQUFhWSxPQUFoQztBQUNELEtBdkNZO0FBd0NiLEtBQUNNLFFBQVEsQ0FBQ1QsT0FBVixHQUFvQixDQUFDN0gsS0FBRCxFQUFRd0gsTUFBUixLQUFtQjtBQUNyQ3hILFdBQUssQ0FBQzhJLFVBQU4sR0FBbUIsU0FBbkI7QUFDRCxLQTFDWTtBQTJDYixLQUFDUixRQUFRLENBQUNSLFNBQVYsR0FBc0IsQ0FBQzlILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDdkN4SCxXQUFLLENBQUM4SSxVQUFOLEdBQW1CLFNBQW5CO0FBQ0QsS0E3Q1k7QUErQ2IsS0FBQ1IsUUFBUSxDQUFDUCxRQUFWLEdBQXFCLENBQUMvSCxLQUFELEVBQVF3SCxNQUFSLEtBQW1CO0FBQ3RDdkQsYUFBTyxDQUFDQyxHQUFSLENBQVlzRCxNQUFaO0FBQ0F4SCxXQUFLLENBQUNNLFVBQU4sR0FBbUJrSCxNQUFNLENBQUNKLEtBQVAsQ0FBYVksT0FBaEM7QUFDRDtBQWxEWTtBQXhCYyxDQUFELENBQTlCO0FBNkVPLE1BQU07QUFBRTdELFVBQUY7QUFBWTRFLGlCQUFaO0FBQTZCQyxpQkFBN0I7QUFBOENuRztBQUE5QyxJQUNYOEYsVUFBVSxDQUFDeEcsT0FETjtBQUVRd0cseUVBQVUsQ0FBQ1YsT0FBMUIsRTs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNaUIsUUFBUSxHQUFHN0QseUVBQWdCLENBQ3RDLGtCQURzQyxFQUV0QyxPQUFPO0FBQUUrQyxRQUFGO0FBQVVlO0FBQVYsQ0FBUCxLQUE2QjtBQUMzQixTQUFPdEksNENBQUssQ0FBQ1csSUFBTixDQUFZLGdCQUFlNEcsTUFBTyxFQUFsQyxFQUFxQ2UsS0FBckMsQ0FBUDtBQUNELENBSnFDLENBQWpDO0FBTVAsTUFBTUMsWUFBWSxHQUFHdEMsb0VBQVcsQ0FBQztBQUMvQkMsTUFBSSxFQUFFLFNBRHlCO0FBRS9CQyxjQUFZLEVBQUU7QUFDWnFDLGtCQUFjLEVBQUU7QUFESixHQUZpQjtBQUsvQi9CLFVBQVEsRUFBRSxFQUxxQjtBQU0vQkssZUFBYSxFQUFFO0FBQ2IsS0FBQ3VCLFFBQVEsQ0FBQ3JCLE9BQVYsR0FBb0IsQ0FBQzdILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDckN4SCxXQUFLLENBQUNxSixjQUFOLEdBQXVCLFNBQXZCO0FBQ0QsS0FIWTtBQUliLEtBQUNILFFBQVEsQ0FBQ3BCLFNBQVYsR0FBc0IsQ0FBQzlILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDdkN4SCxXQUFLLENBQUNxSixjQUFOLEdBQXVCLFNBQXZCO0FBQ0QsS0FOWTtBQVFiLEtBQUNILFFBQVEsQ0FBQ25CLFFBQVYsR0FBcUIsQ0FBQy9ILEtBQUQsRUFBUXdILE1BQVIsS0FBbUI7QUFDdEN4SCxXQUFLLENBQUNxSixjQUFOLEdBQXVCN0IsTUFBTSxDQUFDSixLQUFQLENBQWFZLE9BQXBDO0FBQ0Q7QUFWWTtBQU5nQixDQUFELENBQWhDO0FBbUJlb0IsMkVBQVksQ0FBQ25CLE9BQTVCLEU7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNcUIsU0FBUyxHQUFHLE1BQ2hCQyx1RUFBYyxDQUFDO0FBQ2J0QixTQUFPLEVBQUU7QUFDUHVCLFNBQUssRUFBRUMsbURBREE7QUFFUGhKLFFBQUksRUFBRW9HLGtEQUZDO0FBR1AvRyxTQUFLLEVBQUU2SSxtREFIQTtBQUlQZSxXQUFPLEVBQUVOLHFEQUFZQTtBQUpkLEdBREk7QUFPYk8sWUFBVSxFQUFHQyxvQkFBRCxJQUEwQjtBQUNwQyxXQUFPQSxvQkFBb0IsQ0FBQztBQUMxQkMsdUJBQWlCLEVBQUUsS0FETyxDQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWYwQixLQUFELENBQTNCO0FBaUJEO0FBekJZLENBQUQsQ0FEaEIsQyxDQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxNQUFNQyxPQUFPLEdBQUdDLHdFQUFhLENBQUNULFNBQUQsQ0FBN0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEUDtBQUNBO0FBQ0E7QUFFTyxNQUFNMUksT0FBTyxHQUFHeUUseUVBQWdCLENBQUMsZUFBRCxFQUFrQixNQUFPOUUsSUFBUCxJQUFnQjtBQUN2RTBELFNBQU8sQ0FBQ0MsR0FBUixDQUFZM0QsSUFBWjtBQUNBLFFBQU0rRSxRQUFRLEdBQUcsTUFBTXpFLDRDQUFLLENBQUNDLEdBQU4sQ0FBVyxRQUFPUCxJQUFLLEVBQXZCLENBQXZCO0FBRUEsUUFBTVMsSUFBSSxHQUFHLE1BQU1zRSxRQUFRLENBQUN0RSxJQUE1QjtBQUNBLFNBQU9BLElBQVA7QUFDRCxDQU5zQyxDQUFoQztBQU9BLE1BQU1nSixhQUFhLEdBQUczRSx5RUFBZ0IsQ0FDM0MscUJBRDJDLEVBRTNDLE1BQU9oRixFQUFQLElBQWM7QUFDWixRQUFNaUYsUUFBUSxHQUFHLE1BQU0yRSxLQUFLLENBQUUsY0FBYTVKLEVBQUcsRUFBbEIsQ0FBNUI7QUFDQSxRQUFNVyxJQUFJLEdBQUcsTUFBTXNFLFFBQVEsQ0FBQzRFLElBQVQsRUFBbkI7QUFDQSxTQUFPbEosSUFBUDtBQUNELENBTjBDLENBQXRDO0FBUUEsTUFBTW1FLFdBQVcsR0FBR0UseUVBQWdCLENBQUMsbUJBQUQsRUFBc0IsWUFBWTtBQUMzRSxTQUFPeEUsNENBQUssQ0FBQ0MsR0FBTixDQUFVLFlBQVYsRUFBd0JDLElBQXhCLENBQThCVyxDQUFELElBQU9BLENBQUMsQ0FBQ1YsSUFBdEMsQ0FBUDtBQUNELENBRjBDLENBQXBDO0FBSVAsTUFBTXlJLFVBQVUsR0FBRzNDLG9FQUFXLENBQUM7QUFDN0JDLE1BQUksRUFBRSxPQUR1QjtBQUU3QkMsY0FBWSxFQUFFO0FBQ1ptRCxpQkFBYSxFQUFFLEVBREg7QUFFWjVKLFFBQUksRUFBRSxFQUZNO0FBR1ppSixTQUFLLEVBQUU7QUFISyxHQUZlO0FBTzdCN0IsZUFBYSxFQUFFO0FBQ2IsS0FBQ0MsMERBQUQsR0FBVyxDQUFDNUgsS0FBRCxFQUFRd0gsTUFBUixLQUFtQjtBQUM1Qiw2Q0FDS3hILEtBREwsR0FFS3dILE1BQU0sQ0FBQ0MsT0FBUCxDQUFlK0IsS0FGcEI7QUFJRCxLQU5ZO0FBT2IsS0FBQ1EsYUFBYSxDQUFDbkMsT0FBZixHQUF5QixDQUFDN0gsS0FBRCxFQUFRd0gsTUFBUixLQUFtQjtBQUMxQ3hILFdBQUssQ0FBQ21LLGFBQU4sR0FBc0IsU0FBdEI7QUFDRCxLQVRZO0FBVWIsS0FBQ0gsYUFBYSxDQUFDbEMsU0FBZixHQUEyQixDQUFDOUgsS0FBRCxFQUFRd0gsTUFBUixLQUFtQjtBQUM1Q3hILFdBQUssQ0FBQ21LLGFBQU4sR0FBc0IsU0FBdEI7QUFDQW5LLFdBQUssQ0FBQ08sSUFBTixHQUFhaUgsTUFBTSxDQUFDQyxPQUFwQjtBQUNELEtBYlk7QUFlYixLQUFDdUMsYUFBYSxDQUFDakMsUUFBZixHQUEwQixDQUFDL0gsS0FBRCxFQUFRd0gsTUFBUixLQUFtQjtBQUMzQ3hILFdBQUssQ0FBQ21LLGFBQU4sR0FBc0IzQyxNQUFNLENBQUNKLEtBQVAsQ0FBYVksT0FBbkM7QUFDRCxLQWpCWTtBQWtCYixLQUFDN0MsV0FBVyxDQUFDMEMsT0FBYixHQUF1QixDQUFDN0gsS0FBRCxFQUFRd0gsTUFBUixLQUFtQjtBQUN4Q3hILFdBQUssQ0FBQ21LLGFBQU4sR0FBc0IsU0FBdEI7QUFDRCxLQXBCWTtBQXFCYixLQUFDaEYsV0FBVyxDQUFDMkMsU0FBYixHQUF5QixDQUFDOUgsS0FBRCxFQUFRd0gsTUFBUixLQUFtQjtBQUMxQ3ZELGFBQU8sQ0FBQ0MsR0FBUixDQUFZc0QsTUFBTSxDQUFDQyxPQUFuQjtBQUNBekgsV0FBSyxDQUFDbUssYUFBTixHQUFzQixTQUF0QjtBQUNBbkssV0FBSyxDQUFDd0osS0FBTixHQUFjaEMsTUFBTSxDQUFDQyxPQUFyQjtBQUNELEtBekJZO0FBMkJiLEtBQUN0QyxXQUFXLENBQUM0QyxRQUFiLEdBQXdCLENBQUMvSCxLQUFELEVBQVF3SCxNQUFSLEtBQW1CO0FBQ3pDeEgsV0FBSyxDQUFDbUssYUFBTixHQUFzQjNDLE1BQU0sQ0FBQ0osS0FBUCxDQUFhWSxPQUFuQztBQUNEO0FBN0JZO0FBUGMsQ0FBRCxDQUE5QjtBQXVDZXlCLHlFQUFVLENBQUN4QixPQUExQixFOzs7Ozs7Ozs7OztBQzlEQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGVtXCI6IFwiTWVldHVwSXRlbV9pdGVtX185d3c2UFwiLFxuXHRcImltYWdlXCI6IFwiTWVldHVwSXRlbV9pbWFnZV9fM0hqV3FcIixcblx0XCJjb250ZW50XCI6IFwiTWVldHVwSXRlbV9jb250ZW50X19Cdl9jRFwiLFxuXHRcImFjdGlvbnNcIjogXCJNZWV0dXBJdGVtX2FjdGlvbnNfX2YzYklsXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaXN0XCI6IFwiTWVldHVwTGlzdF9saXN0X18tdGJHb1wiXG59O1xuIiwiaW1wb3J0IENhcmQgZnJvbSBcIi4uL3VpL0NhcmRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01lZXR1cEl0ZW0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBkb2MsIGdldERvYyB9IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi8uLi9maXJlYmFzZS9maXJlYmFzZVwiO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgRmxleCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBDbG9zZUljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhZGRMaWtlLCBkZWxldGVQb3N0IH0gZnJvbSBcIi4uLy4uL3N0b3JlL3Bvc3RzU2xpY2VcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgZ2V0U2luZ2xlVXNlciB9IGZyb20gXCIuLi8uLi9zdG9yZS91c2Vyc1NsaWNlXCI7XG5pbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7XG4gIEFpT3V0bGluZUhlYXJ0LFxuICBBaUZpbGxIZWFydCxcbiAgQWlPdXRsaW5lTG9hZGluZyxcbiAgQWlPdXRsaW5lTG9hZGluZzNRdWFydGVycyxcbiAgQWlGaWxsRWRpdCxcbn0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmZ1bmN0aW9uIFBvc3RJdGVtKHByb3BzKSB7XG4gIGNvbnN0IFt1c2VySW5mbywgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwb3N0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdHMuZGVsZXRlUG9zdFN0YXR1cyk7XG4gIC8vIGNvbnN0IHVzZXJJbmZvID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2Vycy51c2VyKTtcblxuICBhc3luYyBmdW5jdGlvbiBzaG93RGV0YWlsSGFuZGxlcigpIHtcbiAgICByb3V0ZXIucHVzaChgJHtyb3V0ZXIucGF0aG5hbWV9JHtwcm9wcy5pZH1gKTtcbiAgfVxuICBjb25zdCBsaWtlU3RhdHVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0cy5saWtlU3RhdHVzKTtcblxuICBjb25zdCB1c2VyID0gcHJvcHMudXNlcjtcbiAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGguY3VycmVudFVzZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XG4gICAgZnVuY3Rpb24gZ2V0VXNlcigpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoYC9hcGkvdXNlcnMvJHt1c2VyfWApXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBpc01vdW50ZWQgJiYgc2V0VXNlcihkYXRhLmRhdGEpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gZXJyKTtcbiAgICB9XG4gICAgZ2V0VXNlcigpO1xuICAgIHJldHVybiAoKSA9PiAoaXNNb3VudGVkID0gZmFsc2UpO1xuICAgIC8vIGRpc3BhdGNoKGdldFNpbmdsZVVzZXIodXNlcikpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBmdW5jdGlvbiBoYW5kbGVEZWxldGUoKSB7XG4gICAgZGlzcGF0Y2goZGVsZXRlUG9zdChwcm9wcy5pZCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTGlrZSgpIHtcbiAgICBpZiAoYXV0aC5jdXJyZW50VXNlcilcbiAgICAgIC8vIGRpc3BhdGNoKGFkZExpa2UoeyBwb3N0SWQ6IHByb3BzLmlkLCB1c2VySWQ6IGF1dGguY3VycmVudFVzZXIudWlkIH0pKTtcbiAgICAgIHNldFN0YXR1cyhcImxvYWRpbmdcIik7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAvYXBpL3Bvc3RMaWtlcy8ke3Byb3BzLmlkfS8ke2F1dGguY3VycmVudFVzZXI/LnVpZH1gKVxuICAgICAgLnRoZW4oKGQpID0+IHtcbiAgICAgICAgZC5kYXRhO1xuICAgICAgICBzZXRTdGF0dXMoXCJzdWNjZXNzXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBlcnIpO1xuICAgIC8vIHNldFN0YXR1cyhcImxvYWRpbmdcIik7XG4gICAgLy8gYXhpb3NcbiAgICAvLyAgIC5wb3N0KGAvYXBpL3Bvc3RMaWtlcy8ke3Byb3BzLmlkfS8ke2F1dGguY3VycmVudFVzZXIudWlkfWApXG4gICAgLy8gICAudGhlbigoZCkgPT4gc2V0U3RhdHVzKFwic3VjY2Vzc1wiKSlcbiAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiBzZXRTdGF0dXMoZXJyLm1lc3NhZ2UpKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICB7YXV0aC5jdXJyZW50VXNlcj8udWlkID09PSBwcm9wcy51c2VyICYmIChcbiAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9lZGl0LyR7cHJvcHMuaWR9YCl9XG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgaWNvbj17PEFpRmlsbEVkaXQgc2l6ZT1cIjIzXCIgLz59XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlfSBpY29uPXs8Q2xvc2VJY29uIC8+fSAvPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICA8aDE+IHt1c2VySW5mby51c2VybmFtZX0gPC9oMT5cbiAgICAgICAgICAgIDxoMz57cHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgICAgIHsvKiA8c3Bhbj57bW9tZW50KHByb3BzLnRpbWUudG9EYXRlKCkpLmNhbGVuZGFyKCl9PC9zcGFuPiAqL31cbiAgICAgICAgICAgIDxzcGFuPntwcm9wcy50aW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD17cHJvcHMudGl0bGV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICA8aDQ+e3Byb3BzLmRldGFpbHN9PC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0RldGFpbEhhbmRsZXJ9PlNob3cgRGV0YWlsczwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7c3RhdHVzID09PSBcImxvYWRpbmdcIiA/IChcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gaWNvbj17PFNwaW5uZXIgLz59IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIC8vIGRpc2FibGVkPXtkaXNhYmxlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxpa2V9XG4gICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICBhdXRoLmN1cnJlbnRVc2VyPy51aWQgPyAoXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyPy5saWtlcz8uaW5jbHVkZXMocHJvcHMuaWQpID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxIZWFydCBjb2xvcj1cInJlZFwiIHNpemU9XCIyM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUhlYXJ0IHNpemU9XCIyM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVIZWFydCBzaXplPVwiMjNcIiAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiIH19Pntwcm9wcy5saWtlc308L3NwYW4+e1wiIFwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2xpPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0SXRlbTtcbiIsImltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcbmltcG9ydCBNZWV0dXBJdGVtIGZyb20gXCIuL1Bvc3RJdGVtXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NZWV0dXBMaXN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBQb3N0SXRlbSBmcm9tIFwiLi9Qb3N0SXRlbVwiO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcIkBjaGFrcmEtdWkvc2VsZWN0XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldFNvcnRWYWx1ZSB9IGZyb20gXCIuLi8uLi9zdG9yZS9wb3N0c1NsaWNlXCI7XG5cbmZ1bmN0aW9uIFBvc3RMaXN0KHByb3BzKSB7XG4gIGNvbnN0IFtzZWxlY3RWYWx1ZSwgc2V0U2VsZWN0VmFsdWVdID0gdXNlU3RhdGUoXCJNb3N0IFJlY2VudFwiKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgdmFsdWU9e3NlbGVjdFZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBzZXRTZWxlY3RWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgZGlzcGF0Y2goc2V0U29ydFZhbHVlKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJNb3N0IFJlY2VudFwiPk1vc3QgUmVjZW50PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJNb3N0bHkgTGlrZWRcIj5Nb3N0bHkgTGlrZWQ8L29wdGlvbj5cbiAgICAgIDwvU2VsZWN0PlxuICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgICAge3Byb3BzLnBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UG9zdEl0ZW1cbiAgICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxuICAgICAgICAgICAgICBpZD17cG9zdC5pZH1cbiAgICAgICAgICAgICAgdXNlcj17cG9zdC51c2VyfVxuICAgICAgICAgICAgICBpbWFnZT17cG9zdC5pbWFnZX1cbiAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIGRldGFpbHM9e3Bvc3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIHRpbWU9e3Bvc3QudGltZX1cbiAgICAgICAgICAgICAgbGlrZXM9e3Bvc3QubGlrZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX18zS1NMT1wiXG59O1xuIiwiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuY29uc3QgZmlyZWJhc2VDb25maWdzID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lBdHdDZ0NDa3AybmFCV0RxRGo0cElDbGdJNFZVdUpPalFcIixcclxuXHJcbiAgYXV0aERvbWFpbjogXCJ0b2Rvcy02YmZhNS5maXJlYmFzZWFwcC5jb21cIixcclxuXHJcbiAgcHJvamVjdElkOiBcInRvZG9zLTZiZmE1XCIsXHJcblxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidG9kb3MtNmJmYTUuYXBwc3BvdC5jb21cIixcclxuXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTA1OTA0MzUzNTk1N1wiLFxyXG5cclxuICBhcHBJZDogXCIxOjEwNTkwNDM1MzU5NTc6d2ViOmUxYTNkYjA1MDFhNWI5NjY4NmI4ZGNcIixcclxufTtcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZ3MpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKCk7XHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0RmlyZXN0b3JlKCk7XHJcbiIsImltcG9ydCB7XHJcbiAgY29sbGVjdGlvbixcclxuICBkb2MsXHJcbiAgZ2V0RG9jLFxyXG4gIGdldERvY3MsXHJcbiAgbGltaXQsXHJcbiAgb25TbmFwc2hvdCxcclxuICBvcmRlckJ5LFxyXG4gIHF1ZXJ5LFxyXG4gIHdoZXJlLFxyXG59IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkYiwgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3N0b3JlL3N0b3JlXCI7XHJcbi8vIGltcG9ydCB7IGFkZFVzZXIgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUG9zdExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMvUG9zdExpc3RcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IGxvZ2luSGFuZGxlciB9IGZyb20gXCIuLi9zdG9yZS9hdXRoU2xpY2VcIjtcclxuaW1wb3J0IHsgZ2V0QWxsVXNlcnMgfSBmcm9tIFwiLi4vc3RvcmUvdXNlcnNTbGljZVwiO1xyXG4vLyBjb25zdCBtZWV0VXBzID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGlkOiBcIm0xXCIsXHJcbi8vICAgICB0aXRsZTogXCJudW0xXCIsXHJcbi8vICAgICBpbWFnZTpcclxuLy8gICAgICAgXCJodHRwczovL3d3dy53aGF0c2FwcGltYWdlcy5pbi93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8xMS9Cb3lzLUZlZWxpbmctU2FkLVdoYXRzYXBwLURQLVBpY3MtRG93bmxvYWQtRnJlZS0zMDB4MTY5LmpwZ1wiLFxyXG4vLyAgICAgYWRkcmVzczogXCJzb21lIGFkZHJlc3NcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcImZpcnN0IE1lZXRVcFwiLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IFwibTJcIixcclxuLy8gICAgIHRpdGxlOiBcIm51bTJcIixcclxuLy8gICAgIGltYWdlOlxyXG4vLyAgICAgICBcImh0dHBzOi8vd3d3LndoYXRzYXBwaW1hZ2VzLmluL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzExL0JveXMtRmVlbGluZy1TYWQtV2hhdHNhcHAtRFAtUGljcy1Eb3dubG9hZC1GcmVlLTMwMHgxNjkuanBnXCIsXHJcbi8vICAgICBhZGRyZXNzOiBcInNvbWUgYWRkcmVzc1wiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwic2Vjb25kIE1lZXRVcFwiLFxyXG4vLyAgIH0sXHJcbi8vIF07XHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuICBjb25zb2xlLmxvZyhhdXRoKTtcclxuICAvLyBjb25zdCB4ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3Qgc29ydEJ5ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0cy5zb3J0VmFsdWUpO1xyXG4gIGNvbnN0IHNvcnQgPSBzb3J0QnkgPT09IFwiTW9zdGx5IExpa2VkXCIgPyBcImxpa2VzXCIgOiBcInRpbWVcIjtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFwicG9zdHNcIiksIG9yZGVyQnkoc29ydCwgXCJkZXNjXCIpKTtcclxuICAgIGNvbnN0IHVuc3ViID0gb25TbmFwc2hvdChxLCAoc25wYSkgPT4ge1xyXG4gICAgICBjb25zdCBwb3N0cyA9IHNucGEuZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIHRpbWU6IG1vbWVudChkb2MuZGF0YSgpLnRpbWUudG9EYXRlKCkpLmNhbGVuZGFyKCksXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKGdldEFsbFVzZXJzKCkpO1xyXG4gICAgICBzZXRQb3N0cyhwb3N0cyk7XHJcblxyXG4gICAgICAvLyBkaXNwYXRjaChzZXRQb3N0cyhwb3N0cykpO1xyXG4gICAgICAvLyBpZihhdXRoLmN1cnJlbnRVc2VyKVxyXG4gICAgICAvLyBkaXNwYXRjaChhZGRMaWtlKFwiYXdkYVwiKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB1bnN1YigpO1xyXG4gIH0sIFtzb3J0XSk7XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IHEgPSBxdWVyeShjb2xsZWN0aW9uKGRiLCBcInBvc3RzXCIpLCBvcmRlckJ5KFwidGltZVwiLCBcImRlc2NcIikpO1xyXG4gIC8vICAgY29uc3QgdW5zdWIgPSBvblNuYXBzaG90KHEsIChzbmFhcCkgPT4ge1xyXG4gIC8vICAgICBjb25zdCBwb3N0ID0gc25hYXAuZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4gIC8vICAgICAgIHJldHVybiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICAgIHNldFBvc3RzKHBvc3QpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gICByZXR1cm4gKCkgPT4gdW5zdWIoKTtcclxuICAvLyB9LCBbXSk7XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGFzeW5jIGZ1bmN0aW9uIGdldCgpIHtcclxuICAvLyAgICAgY29uc3QgcG9zdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJwb3N0c1wiKSwgbGltaXQoMSkpLnRoZW4oXHJcbiAgLy8gICAgICAgKHNuYXApID0+XHJcbiAgLy8gICAgICAgICBzbmFwLmRvY3MubWFwKChkb2MpID0+IHtcclxuICAvLyAgICAgICAgICAgcmV0dXJuIHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9O1xyXG4gIC8vICAgICAgICAgfSlcclxuICAvLyAgICAgKTtcclxuXHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHBvc3QpO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgZ2V0KCk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICByZXR1cm4gPD57PFBvc3RMaXN0IHBvc3RzPXtwb3N0c30gLz59PC8+O1xyXG59XHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IHdyYXBwZXIuZ2V0U3RhdGljUHJvcHMoKHN0b3JlKSA9PiBhc3luYyAoKSA9PiB7XHJcbi8vICAgY29uc3QgZG9jcyA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJwb3N0c1wiKSkudGhlbigoc25hcHNob3QpID0+XHJcbi8vICAgICBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiB7XHJcbi8vICAgICAgIHJldHVybiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfTtcclxuLy8gICAgIH0pXHJcbi8vICAgKTtcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IG1lZXR1cHM6IGRvY3MgfSxcclxuLy8gICAgIHJldmFsaWRhdGU6IDEsXHJcbi8vICAgfTtcclxuLy8gfSk7XHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIFwicG9zdHNcIikpLnRoZW4oKHNuYXApID0+XHJcbi8vICAgICAgIHNuYXAuZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfTtcclxuLy8gICAgICAgfSlcclxuLy8gICAgICk7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICBwcm9wczogeyBwb3N0czogcG9zdHMgfSxcclxuLy8gICAgICAgcmV2YWxpZGF0ZTogMSxcclxuLy8gICAgIH07XHJcbi8vICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICBub3RGb3VuZDogdHJ1ZSxcclxuLy8gICAgIH07XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIHNlbmRFbWFpbFZlcmlmaWNhdGlvbixcclxuICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsLFxyXG4gIHNldFBlcnNpc3RlbmNlLFxyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIHNpZ25JbldpdGhQb3B1cCxcclxuICB1cGRhdGVQcm9maWxlLFxyXG59IGZyb20gXCJAZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBhZGREb2MsIGRvYywgZ2V0RG9jLCBzZXREb2MsIHVwZGF0ZURvYyB9IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9maXJlYmFzZS9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZVNpZ25VcCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJoYW5kbGVTaWduVXAvYXV0aFwiLFxyXG4gIGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChcclxuICAgICAgYXV0aCxcclxuICAgICAgdXNlci5lbWFpbCxcclxuICAgICAgdXNlci5wYXNzd29yZFxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCB1cGRhdGVQcm9maWxlKGF1dGguY3VycmVudFVzZXIsIHtcclxuICAgICAgZGlzcGxheU5hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IHNldERvYyhkb2MoZGIsIFwidXNlcnNcIiwgcmVzcG9uc2UudXNlci51aWQpLCB7XHJcbiAgICAgIHVzZXJuYW1lOiBhdXRoLmN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBsaWtlczogW10sXHJcbiAgICAgIGlkOiByZXNwb25zZS51c2VyLnVpZCxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHVzZXIudXNlcm5hbWU7XHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgY29uc3QgaGFuZGxlU2lnbkluID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcImhhbmRsZVNpZ25Jbi9hdXRoXCIsXHJcbiAgYXN5bmMgKHsgdXNlciwgY2hlY2tlZCB9KSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxyXG4gICAgICBhdXRoLFxyXG4gICAgICB1c2VyLmVtYWlsLFxyXG4gICAgICB1c2VyLnBhc3N3b3JkXHJcbiAgICApO1xyXG4gICAgYXdhaXQgdXBkYXRlRG9jKGRvYyhkYiwgXCJ1c2Vyc1wiLCByZXNwb25zZS51c2VyLnVpZCksIHtcclxuICAgICAgaXNPbmxpbmU6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb25zdCBzZW50ViA9IGF3YWl0IHNlbmRFbWFpbFZlcmlmaWNhdGlvbihyZXNwb25zZS51c2VyKTtcclxuICB9XHJcbik7XHJcbmV4cG9ydCBjb25zdCBoYW5kbGVGb3JnZXRQYXNzID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcImhhbmRsZUZvcmdldFBhc3MvYXV0aFwiLFxyXG4gIGFzeW5jIChlbWFpbCkgPT4ge1xyXG4gICAgYXdhaXQgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChhdXRoLCBlbWFpbCk7XHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudCA9IGNyZWF0ZUFzeW5jVGh1bmsoXCJnZXRDdXJyZW50L2F1dGhcIiwgYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgZ2V0RG9jKGRvYyhkYiwgXCJ1c2Vyc1wiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZCkpKS5kYXRhKCk7XHJcbiAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHNvbWVvbmVcIiwgdXNlcik7XHJcbiAgcmV0dXJuIHVzZXI7XHJcblxyXG4gIC8vIGNvbnN0IHNlbnRWID0gYXdhaXQgc2VuZEVtYWlsVmVyaWZpY2F0aW9uKHJlc3BvbnNlLnVzZXIpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnb29nbGVTaWduaW4gPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwiZ29vZ2xlU2lnbmluL2F1dGhcIixcclxuICBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgY29uc3QgZ29vZ2xlUHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbiAgICAvLyBjb25zdCBwcmVzaXN0ID0gYXdhaXQgc2V0UGVyc2lzdGVuY2UoYXV0aCwgbG9jYWxTdG9yYWdlKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2lnbkluV2l0aFBvcHVwKGF1dGgsIGdvb2dsZVByb3ZpZGVyKTtcclxuICAgIGNvbnN0IGRvY1NuYXAgPSAoYXdhaXQgZ2V0RG9jKGRvYyhkYiwgXCJ1c2Vyc1wiLCByZXNwb25zZS51c2VyLnVpZCkpKS5kYXRhKCk7XHJcbiAgICBhd2FpdCB1cGRhdGVEb2MoZG9jKGRiLCBcInVzZXJzXCIsIHJlc3BvbnNlLnVzZXIudWlkKSwge1xyXG4gICAgICBpc09ubGluZTogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZG9jU25hcCkge1xyXG4gICAgICBhd2FpdCBzZXREb2MoZG9jKGRiLCBcInVzZXJzXCIsIHJlc3BvbnNlLnVzZXIudWlkKSwge1xyXG4gICAgICAgIHVzZXJuYW1lOiByZXNwb25zZS51c2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICBlbWFpbDogcmVzcG9uc2UudXNlci5lbWFpbCxcclxuICAgICAgICBsaWtlczogW10sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImF1dGhcIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgcmVzcG9uc2U6IFwiXCIsXHJcbiAgICBjdXJyZW50VXNlcjogXCJcIixcclxuICAgIGdvb2dsZTogeyBzdGF0dXM6IFwiXCIgfSxcclxuICAgIGZvcmdvdFBhc3M6IHsgc3RhdHVzOiBcIlwiIH0sXHJcbiAgICBlcnJvcjogXCJcIixcclxuICAgIGxvZ2dlZEluOiBcIlwiLFxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGxvZ2luSGFuZGxlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLmlzTG9nZ2VkSW4gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0Q3VycmVudFVzZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50VXNlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBzdGF0ZS5sb2dnZWRJbiA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgIFtIWURSQVRFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5hdXRoLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIFtoYW5kbGVTaWduVXAucGVuZGluZ106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnJlc3BvbnNlID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9LFxyXG4gICAgW2hhbmRsZVNpZ25VcC5mdWxmaWxsZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5yZXNwb25zZSA9IFwic3VjY2Vzc1wiO1xyXG4gICAgfSxcclxuXHJcbiAgICBbaGFuZGxlU2lnblVwLnJlamVjdGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUucmVzcG9uc2UgPSBhY3Rpb24uZXJyb3IubWVzc2FnZTtcclxuICAgIH0sXHJcbiAgICBbaGFuZGxlU2lnbkluLnBlbmRpbmddOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5yZXNwb25zZSA9IFwibG9hZGluZ1wiO1xyXG4gICAgfSxcclxuICAgIFtoYW5kbGVTaWduSW4uZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUucmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBcIlwiO1xyXG4gICAgfSxcclxuXHJcbiAgICBbaGFuZGxlU2lnbkluLnJlamVjdGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBsZXQgZXJyb3I7XHJcbiAgICAgIGlmIChhY3Rpb24uZXJyb3IubWVzc2FnZSA9PT0gXCJGaXJlYmFzZTogRXJyb3IgKGF1dGgvdXNlci1ub3QtZm91bmQpLlwiKSB7XHJcbiAgICAgICAgZXJyb3IgPSBcIlRoZXJlIGlzIG5vIHN1Y2ggYSB1c2VyLCBtYWtlIHN1cmUgdG8gdXNlIHRoZSBjb3JyZWN0IGVtYWlsLlwiO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGFjdGlvbi5lcnJvci5tZXNzYWdlID09PVxyXG4gICAgICAgIFwiRmlyZWJhc2U6IEFjY2VzcyB0byB0aGlzIGFjY291bnQgaGFzIGJlZW4gdGVtcG9yYXJpbHkgZGlzYWJsZWQgZHVlIHRvIG1hbnkgZmFpbGVkIGxvZ2luIGF0dGVtcHRzLiBZb3UgY2FuIGltbWVkaWF0ZWx5IHJlc3RvcmUgaXQgYnkgcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQgb3IgeW91IGNhbiB0cnkgYWdhaW4gbGF0ZXIuIChhdXRoL3Rvby1tYW55LXJlcXVlc3RzKS5cIlxyXG4gICAgICApIHtcclxuICAgICAgICBlcnJvciA9IFwiVG9vIG1hbnkgYXR0ZW1wdHMsIHRyeSBhZ2FpbiBsYXRlci5cIjtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBhY3Rpb24uZXJyb3IubWVzc2FnZSA9PT0gXCJGaXJlYmFzZTogRXJyb3IgKGF1dGgvd3JvbmctcGFzc3dvcmQpLlwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIGVycm9yID0gXCJXcm9uZyBwYXNzd29yZCwgdHJ5IGFnYWluLlwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdGF0ZS5yZXNwb25zZSA9IFwiZXJyb3JcIjtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBlcnJvcjtcclxuICAgIH0sXHJcbiAgICBbZ29vZ2xlU2lnbmluLnBlbmRpbmddOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5nb29nbGUuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9LFxyXG4gICAgW2dvb2dsZVNpZ25pbi5mdWxmaWxsZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5nb29nbGUuc3RhdHVzID0gXCJzdWNjZXNzXCI7XHJcbiAgICB9LFxyXG5cclxuICAgIFtnb29nbGVTaWduaW4ucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5nb29nbGUuc3RhdHVzID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XHJcbiAgICB9LFxyXG4gICAgW2hhbmRsZUZvcmdldFBhc3MucGVuZGluZ106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmZvcmdvdFBhc3Muc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9LFxyXG4gICAgW2hhbmRsZUZvcmdldFBhc3MuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuZm9yZ290UGFzcy5zdGF0dXMgPSBcInN1Y2Nlc3NcIjtcclxuICAgIH0sXHJcblxyXG4gICAgW2hhbmRsZUZvcmdldFBhc3MucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5mb3Jnb3RQYXNzLnN0YXR1cyA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xyXG4gICAgfSxcclxuICAgIFtnZXRDdXJyZW50LmZ1bGZpbGxlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnRVc2VyID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgeyBsb2dpbkhhbmRsZXIsIHNldEN1cnJlbnRVc2VyIH0gPSBhdXRoU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgYXV0aFNsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5leHBvcnQgY29uc3Qgc3VibWl0UG9zdCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJzdWJtaXRQb3N0L3Bvc3RzXCIsXHJcbiAgYXN5bmMgKHBvc3REYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbmV3LXBvc3RcIiwgcG9zdERhdGEpO1xyXG4gIH1cclxuKTtcclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvc3QgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwiZGVsZXRlUG9zdC9wb3N0c1wiLFxyXG4gIGFzeW5jIChwb3N0SWQpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9hcGkvcG9zdHMvJHtwb3N0SWR9YCk7XHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgY29uc3QgZWRpdFBvc3QgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwiZWRpdFBvc3QvcG9zdHNcIixcclxuICBhc3luYyAoeyBwb3N0SWQsIGZvcm1EYXRhIH0pID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wdXQoYC9hcGkvcG9zdHMvJHtwb3N0SWR9YCwgZm9ybURhdGEpO1xyXG4gIH1cclxuKTtcclxuZXhwb3J0IGNvbnN0IGFkZExpa2UgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwiYWRkTGlrZS9wb3N0c1wiLFxyXG4gIGFzeW5jICh7IHBvc3RJZCwgdXNlcklkIH0pID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3RMaWtlcy8ke3Bvc3RJZH0vJHt1c2VySWR9YCkudGhlbigoZCkgPT4gZC5kYXRhKTtcclxuICB9XHJcbik7XHJcbmNvbnN0IHBvc3RzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJwb3N0c1wiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgcG9zdFN0YXR1czogXCJcIixcclxuICAgIGRlbGV0ZVBvc3RTdGF0dXM6IFwiXCIsXHJcbiAgICByZWFsVGltZVBvc3RzOiBbXSxcclxuICAgIGxpa2VTdGF0dXM6IFwiXCIsXHJcbiAgICBlZGl0U3RhdHVzOiBcIlwiLFxyXG4gICAgc29ydFZhbHVlOiBcIk1vc3QgUmVjZW50XCIsXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0UG9zdHMoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS5yZWFsVGltZVBvc3RzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgcmVzZXRFZGl0U3RhdHVzKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUuZWRpdFN0YXR1cyA9IFwiXCI7XHJcbiAgICB9LFxyXG4gICAgcmVzZXRQb3N0U3RhdHVzKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUucG9zdFN0YXR1cyA9IFwiXCI7XHJcbiAgICB9LFxyXG4gICAgc2V0U29ydFZhbHVlKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUuc29ydFZhbHVlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgW0hZRFJBVEVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLnNvbWUsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIFtzdWJtaXRQb3N0LnBlbmRpbmddOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5wb3N0U3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9LFxyXG4gICAgW3N1Ym1pdFBvc3QuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUucG9zdFN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgfSxcclxuXHJcbiAgICBbc3VibWl0UG9zdC5yZWplY3RlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnBvc3RTdGF0dXMgPSBhY3Rpb24uZXJyb3IubWVzc2FnZTtcclxuICAgIH0sXHJcblxyXG4gICAgW2RlbGV0ZVBvc3QucGVuZGluZ106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmRlbGV0ZVBvc3RTdGF0dXMgPSBcImxvYWRpbmdcIjtcclxuICAgIH0sXHJcbiAgICBbZGVsZXRlUG9zdC5mdWxmaWxsZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5kZWxldGVQb3N0U3RhdHVzID0gXCJzdWNjZXNzXCI7XHJcbiAgICB9LFxyXG5cclxuICAgIFtkZWxldGVQb3N0LnJlamVjdGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuZGVsZXRlUG9zdFN0YXR1cyA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xyXG4gICAgfSxcclxuICAgIFthZGRMaWtlLnBlbmRpbmddOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5saWtlU3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9LFxyXG4gICAgW2FkZExpa2UuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJ3ZXdlXCIsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgc3RhdGUubGlrZVN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgfSxcclxuXHJcbiAgICBbYWRkTGlrZS5yZWplY3RlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmVkaXRTdGF0dXMgPSBhY3Rpb24uZXJyb3IubWVzc2FnZTtcclxuICAgIH0sXHJcbiAgICBbZWRpdFBvc3QucGVuZGluZ106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmVkaXRTdGF0dXMgPSBcImxvYWRpbmdcIjtcclxuICAgIH0sXHJcbiAgICBbZWRpdFBvc3QuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuZWRpdFN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgfSxcclxuXHJcbiAgICBbZWRpdFBvc3QucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgICBzdGF0ZS5saWtlU3RhdHVzID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgeyBzZXRQb3N0cywgcmVzZXRFZGl0U3RhdHVzLCByZXNldFBvc3RTdGF0dXMsIHNldFNvcnRWYWx1ZSB9ID1cclxuICBwb3N0c1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUmVwbHkgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwiYWRkUmVwbHkvcmVwbGllc1wiLFxyXG4gIGFzeW5jICh7IHBvc3RJZCwgcmVwbHkgfSkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcmVwbGllcy8ke3Bvc3RJZH1gLCByZXBseSk7XHJcbiAgfVxyXG4pO1xyXG5jb25zdCByZXBsaWVzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJyZXBsaWVzXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICBhZGRSZXBseVN0YXR1czogXCJcIixcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7fSxcclxuICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICBbYWRkUmVwbHkucGVuZGluZ106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmFkZFJlcGx5U3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9LFxyXG4gICAgW2FkZFJlcGx5LmZ1bGZpbGxlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmFkZFJlcGx5U3RhdHVzID0gXCJzdWNjZXNzXCI7XHJcbiAgICB9LFxyXG5cclxuICAgIFthZGRSZXBseS5yZWplY3RlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmFkZFJlcGx5U3RhdHVzID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCByZXBsaWVzU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGdldERlZmF1bHRNaWRkbGV3YXJlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHVzZXJzU2xpY2UgZnJvbSBcIi4vdXNlcnNTbGljZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQge1xyXG4gIG5leHRSZWR1eENvb2tpZU1pZGRsZXdhcmUsXHJcbiAgd3JhcE1ha2VTdG9yZSxcclxufSBmcm9tIFwibmV4dC1yZWR1eC1jb29raWUtd3JhcHBlclwiO1xyXG5pbXBvcnQgYXV0aFNsaWNlIGZyb20gXCIuL2F1dGhTbGljZVwiO1xyXG5pbXBvcnQgcG9zdHNTbGljZSBmcm9tIFwiLi9wb3N0c1NsaWNlXCI7XHJcbmltcG9ydCByZXBsaWVzU2xpY2UgZnJvbSBcIi4vcmVwbGllc1NsaWNlXCI7XHJcbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+XHJcbiAgY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjoge1xyXG4gICAgICB1c2VyczogdXNlcnNTbGljZSxcclxuICAgICAgYXV0aDogYXV0aFNsaWNlLFxyXG4gICAgICBwb3N0czogcG9zdHNTbGljZSxcclxuICAgICAgcmVwbGllczogcmVwbGllc1NsaWNlLFxyXG4gICAgfSxcclxuICAgIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT4ge1xyXG4gICAgICByZXR1cm4gZ2V0RGVmYXVsdE1pZGRsZXdhcmUoe1xyXG4gICAgICAgIHNlcmlhbGl6YWJsZUNoZWNrOiBmYWxzZSxcclxuICAgICAgICAvLyAgIGlnbm9yZWRBY3Rpb25zOiBbXHJcbiAgICAgICAgLy8gICAgIFwic3VibWl0UG9zdC9wb3N0cy9mdWxmaWxsZWRcIixcclxuICAgICAgICAvLyAgICAgXCJnZXRDdXJyZW50L2F1dGgvZnVsZmlsbGVkXCIsXHJcbiAgICAgICAgLy8gICAgIFwicG9zdHMvc2V0UG9zdHNcIixcclxuICAgICAgICAvLyAgICAgXCJwb3N0cy9nZXRQb3N0c1wiLFxyXG4gICAgICAgIC8vICAgICBcImdldEFsbFBvc3RzL3Bvc3RzL2Z1bGZpbGxlZFwiLFxyXG4gICAgICAgIC8vICAgICBcImdldFNpbmdsZVVzZXIvdXNlcnMvZnVsZmlsbGVkXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZ2V0U2luZ2xlVXNlci91c2Vycy9wZW5kaW5nXCIsXHJcbiAgICAgICAgLy8gICAgIFwiYXV0aC9zZXRDdXJyZW50VXNlclwiLFxyXG4gICAgICAgIC8vICAgICBcImF1dGgvc2V0Q3VycmVudFVzZXJcIixcclxuICAgICAgICAvLyAgICAgXCJhZGRMaWtlL3Bvc3RzL2Z1bGZpbGxlZFwiLFxyXG4gICAgICAgIC8vICAgICBcImFkZExpa2UvcG9zdHMvcGVuZGluZ1wiLFxyXG4gICAgICAgIC8vICAgXSxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbi8vIGNvbnN0IG1ha2VTdG9yZSA9IHdyYXBNYWtlU3RvcmUoKCkgPT5cclxuLy8gICBjb25maWd1cmVTdG9yZSh7XHJcbi8vICAgICByZWR1Y2VyOiB7IHVzZXJzOiB1c2Vyc1NsaWNlLCBhdXRoOiBhdXRoU2xpY2UsIHBvc3RzOiBwb3N0c1NsaWNlIH0sXHJcbi8vICAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XHJcbi8vICAgICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKHsgc2VyaWFsaXphYmxlQ2hlY2s6IGZhbHNlIH0pLnByZXBlbmQoXHJcbi8vICAgICAgICAgbmV4dFJlZHV4Q29va2llTWlkZGxld2FyZSh7XHJcbi8vICAgICAgICAgICBzdWJ0cmVlczogW1wibXkuc3VidHJlZVwiXSxcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgICApLFxyXG4vLyAgIH0pXHJcbi8vICk7XHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gY3JlYXRlQXN5bmNUaHVuayhcImdldFVzZXIvcG9zdHNcIiwgYXN5bmMgKHVzZXIpID0+IHtcclxuICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS8ke3VzZXJ9YCk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gIHJldHVybiBkYXRhO1xyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNpbmdsZVVzZXIgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwiZ2V0U2luZ2xlVXNlci91c2Vyc1wiLFxyXG4gIGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS91c2Vycy8ke2lkfWApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldEFsbFVzZXJzID0gY3JlYXRlQXN5bmNUaHVuayhcImdldEFsbFVzZXJzL3VzZXJzXCIsIGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFwiL2FwaS91c2Vyc1wiKS50aGVuKChkKSA9PiBkLmRhdGEpO1xyXG59KTtcclxuXHJcbmNvbnN0IHVzZXJzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJ1c2Vyc1wiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgZ2V0VXNlclN0YXR1czogXCJcIixcclxuICAgIHVzZXI6IFwiXCIsXHJcbiAgICB1c2VyczogW10sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICBbSFlEUkFURV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQudXNlcnMsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgW2dldFNpbmdsZVVzZXIucGVuZGluZ106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmdldFVzZXJTdGF0dXMgPSBcImxvYWRpbmdcIjtcclxuICAgIH0sXHJcbiAgICBbZ2V0U2luZ2xlVXNlci5mdWxmaWxsZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5nZXRVc2VyU3RhdHVzID0gXCJzdWNjZXNzXCI7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcblxyXG4gICAgW2dldFNpbmdsZVVzZXIucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5nZXRVc2VyU3RhdHVzID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XHJcbiAgICB9LFxyXG4gICAgW2dldEFsbFVzZXJzLnBlbmRpbmddOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5nZXRVc2VyU3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9LFxyXG4gICAgW2dldEFsbFVzZXJzLmZ1bGZpbGxlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgc3RhdGUuZ2V0VXNlclN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgICBzdGF0ZS51c2VycyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuXHJcbiAgICBbZ2V0QWxsVXNlcnMucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5nZXRVc2VyU3RhdHVzID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCB1c2Vyc1NsaWNlLnJlZHVjZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3NlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC1jb29raWUtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==