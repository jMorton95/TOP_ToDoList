/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/content.js":
/*!*******************************!*\
  !*** ./src/assets/content.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/assets/sidebar.js");


const content = function () {
  /*Create a central content container, import our Sidebar and Project Container,
     append them to our container and return the component. */
  const content = document.createElement('div');
  content.classList.add("content");
  const projectToDos = document.createElement('div');
  projectToDos.classList.add("projectContainer");
  content.append((0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.sidebar)(), projectToDos);
  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);

/***/ }),

/***/ "./src/assets/footer.js":
/*!******************************!*\
  !*** ./src/assets/footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/github.svg */ "./src/assets/images/github.svg");


const footer = function () {
  /*Create our footer container return it with our stored elements.
  This simply gives me credit and adds a link to my GitHub Page */
  const container = document.createElement('footer');
  container.classList.add("footer");
  const credit = document.createElement('p');
  credit.classList.add("credit");
  credit.textContent = 'Copyright - Joshua Morton 2022 - ';
  const github = document.createElement('a');
  github.href = "https://github.com/jMorton95";
  const githubImg = document.createElement('img');
  githubImg.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_0__;
  github.appendChild(githubImg);
  container.append(credit, github);
  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ }),

/***/ "./src/assets/header.js":
/*!******************************!*\
  !*** ./src/assets/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_title_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/title.svg */ "./src/assets/images/title.svg");
/* harmony import */ var _images_bulb_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/bulb.svg */ "./src/assets/images/bulb.svg");



const header = function () {
  /*Return a header component with our title image, page name and our colour theme switcher button. */
  const container = document.createElement("div");
  container.classList.add("header");
  const titleImg = document.createElement("img");
  titleImg.classList.add("titleImg");
  titleImg.src = _images_title_svg__WEBPACK_IMPORTED_MODULE_0__;
  const pageName = document.createElement("h1");
  pageName.classList.add("title");
  pageName.textContent = "To Do List";
  const theme = document.createElement('button');
  const bulb = document.createElement('img');
  bulb.src = _images_bulb_svg__WEBPACK_IMPORTED_MODULE_1__;
  theme.appendChild(bulb);
  container.append(titleImg, pageName, theme);
  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/assets/projects.js":
/*!********************************!*\
  !*** ./src/assets/projects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/data.js */ "./src/functions/data.js");
/* harmony import */ var _images_sidebarIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/sidebarIcon.svg */ "./src/assets/images/sidebarIcon.svg");



const projects = function () {
  /*Return a nodelist that displays a summary of all our currently stored projects. */
  const allTodos = function () {
    const nodes = [];

    for (let x = 0; x < (0,_functions_data_js__WEBPACK_IMPORTED_MODULE_0__["default"])().length; x++) {
      const el = document.createElement('button');
      el.classList.add('projectItem');
      const icon = document.createElement('img');
      icon.src = _images_sidebarIcon_svg__WEBPACK_IMPORTED_MODULE_1__;
      const project = document.createElement('h3');
      project.textContent = (0,_functions_data_js__WEBPACK_IMPORTED_MODULE_0__["default"])()[x];
      el.append(icon, project);
      nodes.push(el);
    }

    return nodes;
  }();

  return allTodos;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);

/***/ }),

/***/ "./src/assets/sidebar.js":
/*!*******************************!*\
  !*** ./src/assets/sidebar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectButton": () => (/* binding */ addProjectButton),
/* harmony export */   "sidebar": () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/assets/projects.js");

/*Create a button used for adding projects to our sidebar.
  Individually scoped for reusability. */

const addProjectButton = function () {
  const button = document.createElement('div');
  button.classList.add("addProjectButton");
  button.textContent = "+";
  return button;
};
/*Create a small form that user's can submit new Projects through, include a cancel and enter button with
    external logic for handling the display*/


const addProjectForm = function () {
  const formContainer = document.createElement('div');
  formContainer.classList = "newProjectForm";
  formContainer.style.display = 'none';
  const textInput = document.createElement('input');
  textInput.setAttribute = ("type", "text");
  textInput.setAttribute = ("placeholder", "Enter Project");
  const cancel = document.createElement('button');
  cancel.classList.add('cancel');
  cancel.textContent = 'Cancel';
  const enter = document.createElement('button');
  enter.classList.add('enter');
  enter.textContent = 'Enter';
  formContainer.append(textInput, cancel, enter);
  return formContainer;
};
/*Called in content.js
    Create our Container Element that we return at the bottom.
    Create our Title, ProjectList and AddProject elements + append them.
    Create our ProjectItems NodeList imported from projects.js + append them.*/


const sidebar = function () {
  const container = document.createElement('div');
  container.classList.add("sidebar");
  const project = document.createElement('h3');
  project.textContent = "Projects";
  const projectList = document.createElement('div');
  projectList.classList.add("sideBarList");
  container.append(project, projectList, addProjectButton(), addProjectForm());
  projectList.append(...(0,_projects__WEBPACK_IMPORTED_MODULE_0__["default"])());
  return container;
};



/***/ }),

/***/ "./src/functions/buttons.js":
/*!**********************************!*\
  !*** ./src/functions/buttons.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonHandling": () => (/* binding */ buttonHandling)
/* harmony export */ });
const buttonHandling = function () {
  const sidebar = document.querySelector('.sidebar');
  const addProject = document.querySelector('.addProjectButton');
  const projectForm = document.querySelector('.newProjectForm');
  const closeFormButton = document.querySelector('.cancel');
  addProject.addEventListener('click', () => {
    addProject.style.display = 'none';
    projectForm.style.display = 'flex';
  });
  closeFormButton.addEventListener('click', () => {
    projectForm.style.display = 'none';
    addProject.style.display = 'flex';
  });
};



/***/ }),

/***/ "./src/functions/data.js":
/*!*******************************!*\
  !*** ./src/functions/data.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*Returns all data that we store and change as we use the To Do List */
const todoItem = function () {
  return ['Gym', 'Software', 'Study', 'Socials'];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItem);

/***/ }),

/***/ "./src/functions/pageLoad.js":
/*!***********************************!*\
  !*** ./src/functions/pageLoad.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/header */ "./src/assets/header.js");
/* harmony import */ var _assets_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/content */ "./src/assets/content.js");
/* harmony import */ var _assets_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/footer */ "./src/assets/footer.js");



/*Pulls all of our Components made in JavaScript and appends them to the page*/

const pageLoad = function () {
  document.body.append((0,_assets_header__WEBPACK_IMPORTED_MODULE_0__["default"])(), (0,_assets_content__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_assets_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad());

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/body.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/body.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/FantasqueSansMono-Regular.woff2 */ "./src/assets/fonts/FantasqueSansMono-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/FantasqueSansMono-Regular.woff */ "./src/assets/fonts/FantasqueSansMono-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"FantasqueSansMono\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n/*Apply our whole page styling, CSS reset, Font, forced size and position our main components in a grid*/\nbody {\n  font-family: \"FantasqueSansMono\";\n  margin: 0px;\n  padding: 0px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-rows: 64px 1fr 40px;\n}", "",{"version":3,"sources":["webpack://./src/styles/body.scss"],"names":[],"mappings":"AAAA;EACI,gCAAA;EACA,oHAAA;AACJ;AAGA,wGAAA;AACA;EACI,gCAAA;EACA,WAAA;EACA,YAAA;EACA,8BAAA;EACA,2BAAA;EACA,yBAAA;EACA,iBAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,iCAAA;AADJ","sourcesContent":["@font-face {\r\n    font-family: 'FantasqueSansMono';\r\n    src: url('../assets/fonts/FantasqueSansMono-Regular.woff2') format('woff2'),\r\n      url('../assets/fonts/FantasqueSansMono-Regular.woff') format('woff');\r\n}\r\n\r\n/*Apply our whole page styling, CSS reset, Font, forced size and position our main components in a grid*/;\r\nbody {\r\n    font-family: 'FantasqueSansMono';\r\n    margin: 0px;\r\n    padding: 0px;\r\n    -webkit-box-sizing: border-box; \r\n    -moz-box-sizing: border-box;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n    box-sizing: border-box; \r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: grid;\r\n    grid-template-rows: 64px 1fr 40px;\r\n   \r\n}\r\n\r\n.content{\r\n\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/content.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/content.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sidebar {\n  display: grid;\n  grid-template-rows: 75px max-content 100px;\n  justify-items: center;\n  width: 150px;\n  height: 100%;\n  background-color: #dddddd;\n}\n.sidebar h3 {\n  font-size: 1.5rem;\n  padding-left: 16px;\n  justify-self: left;\n}\n.sidebar .sideBarList {\n  display: grid;\n  gap: 10px;\n  align-content: start;\n}\n.sidebar .sideBarList button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 100ms ease-in;\n  cursor: pointer;\n  border: none;\n  background: none;\n  border-radius: 6px;\n  height: 50px;\n  width: 135px;\n  justify-content: left;\n}\n.sidebar .sideBarList button:hover {\n  background: rgba(113, 113, 122, 0.2705882353);\n}\n.sidebar .sideBarList button:active {\n  scale: 0.9;\n}\n.sidebar .sideBarList button img {\n  height: 32px;\n  width: 32px;\n}\n.sidebar .sideBarList button h3 {\n  font-weight: 300;\n  font-size: 0.8rem;\n}\n.sidebar .addProjectButton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 100ms ease-in;\n  cursor: pointer;\n  border: none;\n  background: none;\n  border-radius: 6px;\n  width: 80%;\n  margin-bottom: 8px;\n  font-size: 3rem;\n}\n.sidebar .addProjectButton:hover {\n  background: rgba(113, 113, 122, 0.2705882353);\n}\n.sidebar .addProjectButton:active {\n  scale: 0.9;\n}", "",{"version":3,"sources":["webpack://./src/styles/content.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,0CAAA;EACA,qBAAA;EACA,YAAA;EACA,YAAA;EC0CA,yBAAA;AD1CJ;AAGQ;EACI,iBAAA;EACA,kBAAA;EACA,kBAAA;AADZ;AAIQ;EACI,aAAA;EACA,SAAA;EACA,oBAAA;AAFZ;AAKY;ECrBR,aAAA;EACA,uBAAA;EACA,mBAAA;EAIA,6BAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EDaY,YAAA;EACA,YAAA;EACA,qBAAA;AAIhB;ACjBI;EACI,6CAAA;ADmBR;AChBI;EACI,UAAA;ADkBR;AARgB;ECFZ,YAAA;EACA,WAAA;ADaJ;AARgB;EACI,gBAAA;EACA,iBAAA;AAUpB;AALQ;ECtCJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAIA,6BAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;ED8BQ,UAAA;EACA,kBAAA;EACA,eAAA;AAcZ;AC5CI;EACI,6CAAA;AD8CR;AC3CI;EACI,UAAA;AD6CR","sourcesContent":["@import \"./mixins.scss\";\r\n\r\n.sidebar{\r\n    display: grid;\r\n    grid-template-rows: 75px max-content 100px;\r\n    justify-items: center;\r\n    width: 150px;\r\n    height: 100%;\r\n    @include sidebarLight;\r\n\r\n        h3{\r\n            font-size: 1.5rem;\r\n            padding-left: 16px;\r\n            justify-self: left;\r\n        }\r\n\r\n        .sideBarList{\r\n            display: grid;\r\n            gap: 10px;\r\n            align-content: start;\r\n            \r\n\r\n            button{\r\n                @include buttonBase;\r\n                height: 50px;\r\n                width: 135px;\r\n                justify-content: left;\r\n\r\n                img{\r\n                    @include imageBase;\r\n                }\r\n\r\n                h3{\r\n                    font-weight: 300;\r\n                    font-size: 0.8rem;\r\n                }\r\n            }\r\n        }\r\n\r\n        .addProjectButton{\r\n            @include buttonBase;\r\n            width: 80%;\r\n            margin-bottom: 8px;\r\n            font-size: 3rem;\r\n        }\r\n}\r\n\r\n.projectContainer{\r\n    \r\n}","@mixin flexCenter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@mixin buttonBase {\r\n    @include flexCenter;\r\n    transition: all 100ms ease-in;\r\n    cursor: pointer;\r\n    border: none;\r\n    background: none;\r\n    border-radius: 6px;\r\n\r\n    &:hover{\r\n        background:#71717a45;\r\n    }\r\n\r\n    &:active{\r\n        scale: 0.9;\r\n    }\r\n}\r\n@mixin projectBase{\r\n\r\n}\r\n\r\n@mixin imageBase {\r\n    height: 32px;\r\n    width: 32px;\r\n}\r\n\r\n@mixin headFootBase{\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    gap: 25px;\r\n    padding-left: 15px;\r\n}\r\n\r\n@mixin themeLight {\r\n    background-color: #71717a;\r\n    color: black;\r\n}\r\n@mixin themeDark {\r\n    @include headFootBase;\r\n    background-color: #71717A;\r\n    color: black;\r\n}\r\n\r\n@mixin sidebarLight {\r\n    background-color: #dddddd;\r\n}\r\n@mixin sidebarDark {\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "footer {\n  background-color: #71717a;\n  color: black;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  gap: 25px;\n  padding-left: 15px;\n  justify-content: center;\n}\nfooter img {\n  height: 32px;\n  width: 32px;\n}", "",{"version":3,"sources":["webpack://./src/styles/footer.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;ECqCI,yBAAA;EACA,YAAA;EATA,aAAA;EACA,qBAAA;EACA,mBAAA;EACA,SAAA;EACA,kBAAA;ED9BA,uBAAA;AAIJ;AACI;ECgBA,YAAA;EACA,WAAA;ADdJ","sourcesContent":["@import \"./mixins.scss\";\r\n\r\nfooter{\r\n    @include themeLight;\r\n    @include headFootBase;\r\n    justify-content: center;\r\n\r\n    p{\r\n\r\n    }\r\n    img{\r\n        @include imageBase;\r\n    }\r\n}","@mixin flexCenter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@mixin buttonBase {\r\n    @include flexCenter;\r\n    transition: all 100ms ease-in;\r\n    cursor: pointer;\r\n    border: none;\r\n    background: none;\r\n    border-radius: 6px;\r\n\r\n    &:hover{\r\n        background:#71717a45;\r\n    }\r\n\r\n    &:active{\r\n        scale: 0.9;\r\n    }\r\n}\r\n@mixin projectBase{\r\n\r\n}\r\n\r\n@mixin imageBase {\r\n    height: 32px;\r\n    width: 32px;\r\n}\r\n\r\n@mixin headFootBase{\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    gap: 25px;\r\n    padding-left: 15px;\r\n}\r\n\r\n@mixin themeLight {\r\n    background-color: #71717a;\r\n    color: black;\r\n}\r\n@mixin themeDark {\r\n    @include headFootBase;\r\n    background-color: #71717A;\r\n    color: black;\r\n}\r\n\r\n@mixin sidebarLight {\r\n    background-color: #dddddd;\r\n}\r\n@mixin sidebarDark {\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n  background-color: #71717a;\n  color: black;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  gap: 25px;\n  padding-left: 15px;\n}\n.header img {\n  height: 32px;\n  width: 32px;\n}\n.header button {\n  margin-left: auto;\n  margin-right: 25px;\n  height: 56px;\n  width: 128px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 100ms ease-in;\n  cursor: pointer;\n  border: none;\n  background: none;\n  border-radius: 6px;\n}\n.header button:hover {\n  background: rgba(113, 113, 122, 0.2705882353);\n}\n.header button:active {\n  scale: 0.9;\n}\n.header button:hover {\n  background-color: #dddddd;\n}", "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;ECqCI,yBAAA;EACA,YAAA;EATA,aAAA;EACA,qBAAA;EACA,mBAAA;EACA,SAAA;EACA,kBAAA;AD3BJ;AAFI;ECoBA,YAAA;EACA,WAAA;ADfJ;AAEI;EACI,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;ECjBJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAIA,6BAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;ADeJ;ACbI;EACI,6CAAA;ADeR;ACZI;EACI,UAAA;ADcR;AAVI;EACI,yBAAA;AAYR","sourcesContent":["@import \"./mixins.scss\";\r\n\r\n.header{\r\n    @include themeLight;\r\n    @include headFootBase;\r\n\r\n    img{\r\n        @include imageBase;\r\n    }\r\n\r\n    .pageName{\r\n\r\n    }\r\n\r\n    button{\r\n        margin-left: auto;\r\n        margin-right: 25px;\r\n        height: 56px;\r\n        width: 128px;\r\n        @include buttonBase;  \r\n    }\r\n\r\n    button:hover{\r\n        background-color: #dddddd;\r\n    }\r\n}","@mixin flexCenter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@mixin buttonBase {\r\n    @include flexCenter;\r\n    transition: all 100ms ease-in;\r\n    cursor: pointer;\r\n    border: none;\r\n    background: none;\r\n    border-radius: 6px;\r\n\r\n    &:hover{\r\n        background:#71717a45;\r\n    }\r\n\r\n    &:active{\r\n        scale: 0.9;\r\n    }\r\n}\r\n@mixin projectBase{\r\n\r\n}\r\n\r\n@mixin imageBase {\r\n    height: 32px;\r\n    width: 32px;\r\n}\r\n\r\n@mixin headFootBase{\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    gap: 25px;\r\n    padding-left: 15px;\r\n}\r\n\r\n@mixin themeLight {\r\n    background-color: #71717a;\r\n    color: black;\r\n}\r\n@mixin themeDark {\r\n    @include headFootBase;\r\n    background-color: #71717A;\r\n    color: black;\r\n}\r\n\r\n@mixin sidebarLight {\r\n    background-color: #dddddd;\r\n}\r\n@mixin sidebarDark {\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/body.scss":
/*!******************************!*\
  !*** ./src/styles/body.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./body.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/body.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/content.scss":
/*!*********************************!*\
  !*** ./src/styles/content.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./content.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/content.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/footer.scss":
/*!********************************!*\
  !*** ./src/styles/footer.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/header.scss":
/*!********************************!*\
  !*** ./src/styles/header.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/FantasqueSansMono-Regular.woff":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/FantasqueSansMono-Regular.woff ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5aa6c3091130f8e0312.woff";

/***/ }),

/***/ "./src/assets/fonts/FantasqueSansMono-Regular.woff2":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/FantasqueSansMono-Regular.woff2 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c511db2b7313e1c9362.woff2";

/***/ }),

/***/ "./src/assets/images/bulb.svg":
/*!************************************!*\
  !*** ./src/assets/images/bulb.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cc69f105a1d39010f96.svg";

/***/ }),

/***/ "./src/assets/images/github.svg":
/*!**************************************!*\
  !*** ./src/assets/images/github.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04be58c17b3d5e974442.svg";

/***/ }),

/***/ "./src/assets/images/sidebarIcon.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/sidebarIcon.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cb05a5c59c5673d4390.svg";

/***/ }),

/***/ "./src/assets/images/title.svg":
/*!*************************************!*\
  !*** ./src/assets/images/title.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19e4f3c2d6b69458e2aa.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/pageLoad */ "./src/functions/pageLoad.js");
/* harmony import */ var _functions_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/buttons */ "./src/functions/buttons.js");
/* harmony import */ var _styles_body_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/body.scss */ "./src/styles/body.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/header.scss */ "./src/styles/header.scss");
/* harmony import */ var _styles_content_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/content.scss */ "./src/styles/content.scss");
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/footer.scss */ "./src/styles/footer.scss");






/*Run our PageLoad Function, creating all of our initial assets and appending them to the Body*/

_functions_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"];
/*Now our elements are created in our DOM, apply our event handling to them. */

(0,_functions_buttons__WEBPACK_IMPORTED_MODULE_1__.buttonHandling)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsWUFBVztFQUMxQjtBQUNEO0VBQ0ksTUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7RUFDQUYsT0FBTyxDQUFDRyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixTQUF0QjtFQUVBLE1BQU1DLFlBQVksR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXJCO0VBQ0FHLFlBQVksQ0FBQ0YsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsa0JBQTNCO0VBQ0FKLE9BQU8sQ0FBQ00sTUFBUixDQUFlUCxpREFBTyxFQUF0QixFQUEwQk0sWUFBMUI7RUFDQSxPQUFPTCxPQUFQO0FBQ0gsQ0FWRDs7QUFZQSxpRUFBZUEsT0FBZjs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7O0FBRUEsTUFBTVEsTUFBTSxHQUFHLFlBQVc7RUFDdEI7QUFDSjtFQUNJLE1BQU1DLFNBQVMsR0FBR1IsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWxCO0VBQ0FPLFNBQVMsQ0FBQ04sU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsUUFBeEI7RUFFQSxNQUFNTSxNQUFNLEdBQUlULFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFoQjtFQUNBUSxNQUFNLENBQUNQLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCO0VBQ0FNLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixtQ0FBckI7RUFFQSxNQUFNQyxNQUFNLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFmO0VBQ0FVLE1BQU0sQ0FBQ0MsSUFBUCxHQUFjLDhCQUFkO0VBRUEsTUFBTUMsU0FBUyxHQUFJYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7RUFDQVksU0FBUyxDQUFDQyxHQUFWLEdBQWdCUiwrQ0FBaEI7RUFDQUssTUFBTSxDQUFDSSxXQUFQLENBQW1CRixTQUFuQjtFQUVBTCxTQUFTLENBQUNILE1BQVYsQ0FBaUJJLE1BQWpCLEVBQXlCRSxNQUF6QjtFQUVBLE9BQU9ILFNBQVA7QUFDSCxDQXBCRDs7QUFzQkEsaUVBQWVELE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTs7QUFFQSxNQUFNVyxNQUFNLEdBQUcsWUFBVztFQUN0QjtFQUNBLE1BQU1WLFNBQVMsR0FBR1IsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWxCO0VBQ0FPLFNBQVMsQ0FBQ04sU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsUUFBeEI7RUFFQSxNQUFNZ0IsUUFBUSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWpCO0VBQ0FrQixRQUFRLENBQUNqQixTQUFULENBQW1CQyxHQUFuQixDQUF1QixVQUF2QjtFQUNBZ0IsUUFBUSxDQUFDTCxHQUFULEdBQWVFLDhDQUFmO0VBRUEsTUFBTUksUUFBUSxHQUFHcEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWpCO0VBQ0FtQixRQUFRLENBQUNsQixTQUFULENBQW1CQyxHQUFuQixDQUF1QixPQUF2QjtFQUNBaUIsUUFBUSxDQUFDVixXQUFULEdBQXVCLFlBQXZCO0VBRUEsTUFBTVcsS0FBSyxHQUFHckIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7RUFDQSxNQUFNcUIsSUFBSSxHQUFHdEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWI7RUFDQXFCLElBQUksQ0FBQ1IsR0FBTCxHQUFXRyw2Q0FBWDtFQUNBSSxLQUFLLENBQUNOLFdBQU4sQ0FBa0JPLElBQWxCO0VBRUFkLFNBQVMsQ0FBQ0gsTUFBVixDQUFpQmMsUUFBakIsRUFBMkJDLFFBQTNCLEVBQXFDQyxLQUFyQztFQUNBLE9BQU9iLFNBQVA7QUFDSCxDQXBCRDs7QUFzQkEsaUVBQWVVLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7QUFFQSxNQUFNTSxRQUFRLEdBQUcsWUFBVTtFQUN2QjtFQUNBLE1BQU1DLFFBQVEsR0FBSSxZQUFXO0lBQ3pCLE1BQU1DLEtBQUssR0FBRyxFQUFkOztJQUVBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osOERBQVksR0FBR0ssTUFBbkMsRUFBMkNELENBQUMsRUFBNUMsRUFBK0M7TUFDM0MsTUFBTUUsRUFBRSxHQUFHN0IsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQVg7TUFDQTRCLEVBQUUsQ0FBQzNCLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixhQUFqQjtNQUVBLE1BQU0yQixJQUFJLEdBQUc5QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtNQUNBNkIsSUFBSSxDQUFDaEIsR0FBTCxHQUFXRSxvREFBWDtNQUVBLE1BQU1lLE9BQU8sR0FBRy9CLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFoQjtNQUNBOEIsT0FBTyxDQUFDckIsV0FBUixHQUFzQmEsOERBQVksR0FBR0ksQ0FBSCxDQUFsQztNQUVBRSxFQUFFLENBQUN4QixNQUFILENBQVV5QixJQUFWLEVBQWdCQyxPQUFoQjtNQUVBTCxLQUFLLENBQUNNLElBQU4sQ0FBV0gsRUFBWDtJQUNGOztJQUNGLE9BQU9ILEtBQVA7RUFDSCxDQWxCZ0IsRUFBakI7O0VBb0JKLE9BQU9ELFFBQVA7QUFDQyxDQXZCRDs7QUF5QkEsaUVBQWVELFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFFQTtBQUNBOztBQUVBLE1BQU1TLGdCQUFnQixHQUFHLFlBQVc7RUFDaEMsTUFBTUMsTUFBTSxHQUFHbEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWY7RUFDQWlDLE1BQU0sQ0FBQ2hDLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGtCQUFyQjtFQUNBK0IsTUFBTSxDQUFDeEIsV0FBUCxHQUFxQixHQUFyQjtFQUVBLE9BQU93QixNQUFQO0FBQ0gsQ0FORDtBQVFBO0FBQ0E7OztBQUVBLE1BQU1DLGNBQWMsR0FBRyxZQUFVO0VBQzdCLE1BQU1DLGFBQWEsR0FBR3BDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtFQUNBbUMsYUFBYSxDQUFDbEMsU0FBZCxHQUEwQixnQkFBMUI7RUFDQWtDLGFBQWEsQ0FBQ0MsS0FBZCxDQUFvQkMsT0FBcEIsR0FBOEIsTUFBOUI7RUFFQSxNQUFNQyxTQUFTLEdBQUd2QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbEI7RUFDQXNDLFNBQVMsQ0FBQ0MsWUFBVixJQUEwQixRQUFRLE1BQWxDO0VBQ0FELFNBQVMsQ0FBQ0MsWUFBVixJQUEwQixlQUFlLGVBQXpDO0VBRUEsTUFBTUMsTUFBTSxHQUFHekMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7RUFDQXdDLE1BQU0sQ0FBQ3ZDLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCO0VBQ0FzQyxNQUFNLENBQUMvQixXQUFQLEdBQXFCLFFBQXJCO0VBRUEsTUFBTWdDLEtBQUssR0FBRzFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0VBQ0F5QyxLQUFLLENBQUN4QyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixPQUFwQjtFQUNBdUMsS0FBSyxDQUFDaEMsV0FBTixHQUFvQixPQUFwQjtFQUdBMEIsYUFBYSxDQUFDL0IsTUFBZCxDQUFxQmtDLFNBQXJCLEVBQWdDRSxNQUFoQyxFQUF3Q0MsS0FBeEM7RUFFQSxPQUFPTixhQUFQO0FBQ0gsQ0FyQkQ7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU10QyxPQUFPLEdBQUcsWUFBVztFQUV2QixNQUFNVSxTQUFTLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtFQUNBTyxTQUFTLENBQUNOLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFNBQXhCO0VBRUEsTUFBTTRCLE9BQU8sR0FBRy9CLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFoQjtFQUNBOEIsT0FBTyxDQUFDckIsV0FBUixHQUFzQixVQUF0QjtFQUVBLE1BQU1pQyxXQUFXLEdBQUczQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7RUFDQTBDLFdBQVcsQ0FBQ3pDLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLGFBQTFCO0VBRUFLLFNBQVMsQ0FBQ0gsTUFBVixDQUFpQjBCLE9BQWpCLEVBQTBCWSxXQUExQixFQUF1Q1YsZ0JBQWdCLEVBQXZELEVBQTJERSxjQUFjLEVBQXpFO0VBQ0FRLFdBQVcsQ0FBQ3RDLE1BQVosQ0FBbUIsR0FBR21CLHFEQUFRLEVBQTlCO0VBRUEsT0FBT2hCLFNBQVA7QUFDSCxDQWZEOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBLE1BQU1vQyxjQUFjLEdBQUcsWUFBVztFQUM5QixNQUFNOUMsT0FBTyxHQUFHRSxRQUFRLENBQUM2QyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0VBQ0EsTUFBTUMsVUFBVSxHQUFHOUMsUUFBUSxDQUFDNkMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBbkI7RUFDQSxNQUFNRSxXQUFXLEdBQUcvQyxRQUFRLENBQUM2QyxhQUFULENBQXVCLGlCQUF2QixDQUFwQjtFQUNBLE1BQU1HLGVBQWUsR0FBR2hELFFBQVEsQ0FBQzZDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBeEI7RUFFQUMsVUFBVSxDQUFDRyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxNQUFNO0lBQ3ZDSCxVQUFVLENBQUNULEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE1BQTNCO0lBQ0FTLFdBQVcsQ0FBQ1YsS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsTUFBNUI7RUFDSCxDQUhEO0VBS0FVLGVBQWUsQ0FBQ0MsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLE1BQU07SUFDNUNGLFdBQVcsQ0FBQ1YsS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsTUFBNUI7SUFDQVEsVUFBVSxDQUFDVCxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixNQUEzQjtFQUNILENBSEQ7QUFJSCxDQWZEOzs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQSxNQUFNWSxRQUFRLEdBQUcsWUFBVztFQUN4QixPQUFPLENBQUMsS0FBRCxFQUFRLFVBQVIsRUFBb0IsT0FBcEIsRUFBNkIsU0FBN0IsQ0FBUDtBQUNILENBRkQ7O0FBSUEsaUVBQWVBLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFlBQVc7RUFDeEJuRCxRQUFRLENBQUNvRCxJQUFULENBQWMvQyxNQUFkLENBQXFCYSwwREFBTSxFQUEzQixFQUErQm5CLDJEQUFPLEVBQXRDLEVBQTBDUSwwREFBTSxFQUFoRDtBQUNILENBRkQ7O0FBSUEsaUVBQWU0QyxRQUFRLEVBQXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDBLQUFrRTtBQUM5Ryw0Q0FBNEMsd0tBQWlFO0FBQzdHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esc0RBQXNELHVDQUF1Qyw2SUFBNkksR0FBRyxtSEFBbUgsdUNBQXVDLGdCQUFnQixpQkFBaUIsbUNBQW1DLGdDQUFnQyw4QkFBOEIsc0JBQXNCLDJCQUEyQixrQkFBa0IsaUJBQWlCLGtCQUFrQixzQ0FBc0MsR0FBRyxPQUFPLHVGQUF1RixXQUFXLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcscUNBQXFDLHlDQUF5QyxtS0FBbUssS0FBSyxrSEFBa0gsVUFBVSx5Q0FBeUMsb0JBQW9CLHFCQUFxQix3Q0FBd0Msb0NBQW9DLGtDQUFrQywwQkFBMEIsZ0NBQWdDLHNCQUFzQixxQkFBcUIsc0JBQXNCLDBDQUEwQyxZQUFZLGlCQUFpQixTQUFTLDJCQUEyQjtBQUN4ckQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esb0RBQW9ELGtCQUFrQiwrQ0FBK0MsMEJBQTBCLGlCQUFpQixpQkFBaUIsOEJBQThCLEdBQUcsZUFBZSxzQkFBc0IsdUJBQXVCLHVCQUF1QixHQUFHLHlCQUF5QixrQkFBa0IsY0FBYyx5QkFBeUIsR0FBRyxnQ0FBZ0Msa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0NBQWtDLG9CQUFvQixpQkFBaUIscUJBQXFCLHVCQUF1QixpQkFBaUIsaUJBQWlCLDBCQUEwQixHQUFHLHNDQUFzQyxrREFBa0QsR0FBRyx1Q0FBdUMsZUFBZSxHQUFHLG9DQUFvQyxpQkFBaUIsZ0JBQWdCLEdBQUcsbUNBQW1DLHFCQUFxQixzQkFBc0IsR0FBRyw4QkFBOEIsa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0NBQWtDLG9CQUFvQixpQkFBaUIscUJBQXFCLHVCQUF1QixlQUFlLHVCQUF1QixvQkFBb0IsR0FBRyxvQ0FBb0Msa0RBQWtELEdBQUcscUNBQXFDLGVBQWUsR0FBRyxPQUFPLCtIQUErSCxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsb0RBQW9ELGlCQUFpQixzQkFBc0IsbURBQW1ELDhCQUE4QixxQkFBcUIscUJBQXFCLDhCQUE4QixtQkFBbUIsa0NBQWtDLG1DQUFtQyxtQ0FBbUMsYUFBYSw2QkFBNkIsOEJBQThCLDBCQUEwQixxQ0FBcUMsMkNBQTJDLHdDQUF3QyxpQ0FBaUMsaUNBQWlDLDBDQUEwQyw0QkFBNEIsMkNBQTJDLHFCQUFxQiwyQkFBMkIseUNBQXlDLDBDQUEwQyxxQkFBcUIsaUJBQWlCLGFBQWEsa0NBQWtDLG9DQUFvQywyQkFBMkIsbUNBQW1DLGdDQUFnQyxhQUFhLEtBQUssMEJBQTBCLGFBQWEsc0JBQXNCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLEtBQUssdUJBQXVCLDRCQUE0QixzQ0FBc0Msd0JBQXdCLHFCQUFxQix5QkFBeUIsMkJBQTJCLG9CQUFvQixpQ0FBaUMsU0FBUyxxQkFBcUIsdUJBQXVCLFNBQVMsS0FBSyx1QkFBdUIsU0FBUywwQkFBMEIscUJBQXFCLG9CQUFvQixLQUFLLDRCQUE0QixzQkFBc0IsOEJBQThCLDRCQUE0QixrQkFBa0IsMkJBQTJCLEtBQUssMkJBQTJCLGtDQUFrQyxxQkFBcUIsS0FBSyxzQkFBc0IsOEJBQThCLGtDQUFrQyxxQkFBcUIsS0FBSyw2QkFBNkIsa0NBQWtDLEtBQUssd0JBQXdCLFNBQVMsbUJBQW1CO0FBQzlvSTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxrREFBa0QsOEJBQThCLGlCQUFpQixrQkFBa0IsMEJBQTBCLHdCQUF3QixjQUFjLHVCQUF1Qiw0QkFBNEIsR0FBRyxjQUFjLGlCQUFpQixnQkFBZ0IsR0FBRyxPQUFPLDhIQUE4SCxZQUFZLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFlBQVksS0FBSyxLQUFLLFdBQVcsVUFBVSxtREFBbUQsZUFBZSw0QkFBNEIsOEJBQThCLGdDQUFnQyxjQUFjLGFBQWEsWUFBWSwrQkFBK0IsU0FBUyxLQUFLLHNCQUFzQixzQkFBc0IsZ0NBQWdDLDRCQUE0QixLQUFLLHVCQUF1Qiw0QkFBNEIsc0NBQXNDLHdCQUF3QixxQkFBcUIseUJBQXlCLDJCQUEyQixvQkFBb0IsaUNBQWlDLFNBQVMscUJBQXFCLHVCQUF1QixTQUFTLEtBQUssdUJBQXVCLFNBQVMsMEJBQTBCLHFCQUFxQixvQkFBb0IsS0FBSyw0QkFBNEIsc0JBQXNCLDhCQUE4Qiw0QkFBNEIsa0JBQWtCLDJCQUEyQixLQUFLLDJCQUEyQixrQ0FBa0MscUJBQXFCLEtBQUssc0JBQXNCLDhCQUE4QixrQ0FBa0MscUJBQXFCLEtBQUssNkJBQTZCLGtDQUFrQyxLQUFLLHdCQUF3QixTQUFTLG1CQUFtQjtBQUMxdUQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsbURBQW1ELDhCQUE4QixpQkFBaUIsa0JBQWtCLDBCQUEwQix3QkFBd0IsY0FBYyx1QkFBdUIsR0FBRyxlQUFlLGlCQUFpQixnQkFBZ0IsR0FBRyxrQkFBa0Isc0JBQXNCLHVCQUF1QixpQkFBaUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGtDQUFrQyxvQkFBb0IsaUJBQWlCLHFCQUFxQix1QkFBdUIsR0FBRyx3QkFBd0Isa0RBQWtELEdBQUcseUJBQXlCLGVBQWUsR0FBRyx3QkFBd0IsOEJBQThCLEdBQUcsT0FBTyw4SEFBOEgsWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxtREFBbUQsZ0JBQWdCLDRCQUE0Qiw4QkFBOEIsZ0JBQWdCLCtCQUErQixTQUFTLHNCQUFzQixhQUFhLG1CQUFtQiw4QkFBOEIsK0JBQStCLHlCQUF5Qix5QkFBeUIsa0NBQWtDLFNBQVMseUJBQXlCLHNDQUFzQyxTQUFTLEtBQUssc0JBQXNCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLEtBQUssdUJBQXVCLDRCQUE0QixzQ0FBc0Msd0JBQXdCLHFCQUFxQix5QkFBeUIsMkJBQTJCLG9CQUFvQixpQ0FBaUMsU0FBUyxxQkFBcUIsdUJBQXVCLFNBQVMsS0FBSyx1QkFBdUIsU0FBUywwQkFBMEIscUJBQXFCLG9CQUFvQixLQUFLLDRCQUE0QixzQkFBc0IsOEJBQThCLDRCQUE0QixrQkFBa0IsMkJBQTJCLEtBQUssMkJBQTJCLGtDQUFrQyxxQkFBcUIsS0FBSyxzQkFBc0IsOEJBQThCLGtDQUFrQyxxQkFBcUIsS0FBSyw2QkFBNkIsa0NBQWtDLEtBQUssd0JBQXdCLFNBQVMsbUJBQW1CO0FBQzdqRjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFpSjtBQUNqSjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDJIQUFPOzs7O0FBSTJGO0FBQ25ILE9BQU8saUVBQWUsMkhBQU8sSUFBSSxrSUFBYyxHQUFHLGtJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQW9KO0FBQ3BKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsOEhBQU87Ozs7QUFJOEY7QUFDdEgsT0FBTyxpRUFBZSw4SEFBTyxJQUFJLHFJQUFjLEdBQUcscUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBbUo7QUFDbko7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw2SEFBTzs7OztBQUk2RjtBQUNySCxPQUFPLGlFQUFlLDZIQUFPLElBQUksb0lBQWMsR0FBRyxvSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFtSjtBQUNuSjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDZIQUFPOzs7O0FBSTZGO0FBQ3JILE9BQU8saUVBQWUsNkhBQU8sSUFBSSxvSUFBYyxHQUFHLG9JQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBQSwyREFBUTtBQUVSOztBQUNBUCxrRUFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL2Fzc2V0cy9jb250ZW50LmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9hc3NldHMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9hc3NldHMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9hc3NldHMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL2Fzc2V0cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvc3R5bGVzL2JvZHkuc2NzcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvc3R5bGVzL2NvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvc3R5bGVzL2Zvb3Rlci5zY3NzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9zdHlsZXMvYm9keS5zY3NzP2RiOTMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9jb250ZW50LnNjc3M/NTdlOCIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvc3R5bGVzL2Zvb3Rlci5zY3NzP2Q1YWUiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9oZWFkZXIuc2Nzcz8zMjkwIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcF90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcF90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXJcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbigpIHtcclxuIC8qQ3JlYXRlIGEgY2VudHJhbCBjb250ZW50IGNvbnRhaW5lciwgaW1wb3J0IG91ciBTaWRlYmFyIGFuZCBQcm9qZWN0IENvbnRhaW5lcixcclxuICAgIGFwcGVuZCB0aGVtIHRvIG91ciBjb250YWluZXIgYW5kIHJldHVybiB0aGUgY29tcG9uZW50LiAqL1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0VG9Eb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RUb0Rvcy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdENvbnRhaW5lclwiKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kKHNpZGViYXIoKSwgcHJvamVjdFRvRG9zKTtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250ZW50OyIsImltcG9ydCBHaXRIdWIgZnJvbSBcIi4vaW1hZ2VzL2dpdGh1Yi5zdmdcIjtcclxuXHJcbmNvbnN0IGZvb3RlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLypDcmVhdGUgb3VyIGZvb3RlciBjb250YWluZXIgcmV0dXJuIGl0IHdpdGggb3VyIHN0b3JlZCBlbGVtZW50cy5cclxuICAgIFRoaXMgc2ltcGx5IGdpdmVzIG1lIGNyZWRpdCBhbmQgYWRkcyBhIGxpbmsgdG8gbXkgR2l0SHViIFBhZ2UgKi9cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XHJcblxyXG4gICAgY29uc3QgY3JlZGl0ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNyZWRpdC5jbGFzc0xpc3QuYWRkKFwiY3JlZGl0XCIpO1xyXG4gICAgY3JlZGl0LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCAtIEpvc2h1YSBNb3J0b24gMjAyMiAtICc7XHJcblxyXG4gICAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgZ2l0aHViLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9qTW9ydG9uOTVcIjtcclxuXHJcbiAgICBjb25zdCBnaXRodWJJbWcgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBnaXRodWJJbWcuc3JjID0gR2l0SHViO1xyXG4gICAgZ2l0aHViLmFwcGVuZENoaWxkKGdpdGh1YkltZyk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZChjcmVkaXQsIGdpdGh1Yik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyOyIsImltcG9ydCBJY29uIGZyb20gXCIuL2ltYWdlcy90aXRsZS5zdmdcIjtcclxuaW1wb3J0IEJ1bGIgZnJvbSBcIi4vaW1hZ2VzL2J1bGIuc3ZnXCI7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIC8qUmV0dXJuIGEgaGVhZGVyIGNvbXBvbmVudCB3aXRoIG91ciB0aXRsZSBpbWFnZSwgcGFnZSBuYW1lIGFuZCBvdXIgY29sb3VyIHRoZW1lIHN3aXRjaGVyIGJ1dHRvbi4gKi9cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICB0aXRsZUltZy5jbGFzc0xpc3QuYWRkKFwidGl0bGVJbWdcIik7XHJcbiAgICB0aXRsZUltZy5zcmMgPSBJY29uO1xyXG5cclxuICAgIGNvbnN0IHBhZ2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgcGFnZU5hbWUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgcGFnZU5hbWUudGV4dENvbnRlbnQgPSBcIlRvIERvIExpc3RcIjtcclxuXHJcbiAgICBjb25zdCB0aGVtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgYnVsYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYnVsYi5zcmMgPSBCdWxiO1xyXG4gICAgdGhlbWUuYXBwZW5kQ2hpbGQoYnVsYik7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aXRsZUltZywgcGFnZU5hbWUsIHRoZW1lKTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjsiLCJpbXBvcnQgZGF0YUhhbmRsaW5nIGZyb20gJy4uL2Z1bmN0aW9ucy9kYXRhLmpzJztcclxuaW1wb3J0IEljb24gZnJvbSBcIi4vaW1hZ2VzL3NpZGViYXJJY29uLnN2Z1wiO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSBmdW5jdGlvbigpe1xyXG4gICAgLypSZXR1cm4gYSBub2RlbGlzdCB0aGF0IGRpc3BsYXlzIGEgc3VtbWFyeSBvZiBhbGwgb3VyIGN1cnJlbnRseSBzdG9yZWQgcHJvamVjdHMuICovXHJcbiAgICBjb25zdCBhbGxUb2RvcyA9IChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGRhdGFIYW5kbGluZygpLmxlbmd0aDsgeCsrKXtcclxuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdEl0ZW0nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaWNvbi5zcmMgPSBJY29uO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBkYXRhSGFuZGxpbmcoKVt4XTtcclxuXHJcbiAgICAgICAgICAgIGVsLmFwcGVuZChpY29uLCBwcm9qZWN0KTtcclxuXHJcbiAgICAgICAgICAgIG5vZGVzLnB1c2goZWwpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGVzO1xyXG4gICAgfSkoKTtcclxuICAgIFxyXG5yZXR1cm4gYWxsVG9kb3M7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzOyIsImltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5cclxuLypDcmVhdGUgYSBidXR0b24gdXNlZCBmb3IgYWRkaW5nIHByb2plY3RzIHRvIG91ciBzaWRlYmFyLlxyXG4gIEluZGl2aWR1YWxseSBzY29wZWQgZm9yIHJldXNhYmlsaXR5LiAqL1xyXG5cclxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RCdXR0b25cIik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIitcIjtcclxuXHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG59XHJcblxyXG4vKkNyZWF0ZSBhIHNtYWxsIGZvcm0gdGhhdCB1c2VyJ3MgY2FuIHN1Ym1pdCBuZXcgUHJvamVjdHMgdGhyb3VnaCwgaW5jbHVkZSBhIGNhbmNlbCBhbmQgZW50ZXIgYnV0dG9uIHdpdGhcclxuICAgIGV4dGVybmFsIGxvZ2ljIGZvciBoYW5kbGluZyB0aGUgZGlzcGxheSovXHJcblxyXG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwibmV3UHJvamVjdEZvcm1cIjtcclxuICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSA9IChcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSA9IChcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgUHJvamVjdFwiKTtcclxuXHJcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKCdjYW5jZWwnKTtcclxuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG5cclxuICAgIGNvbnN0IGVudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBlbnRlci5jbGFzc0xpc3QuYWRkKCdlbnRlcicpO1xyXG4gICAgZW50ZXIudGV4dENvbnRlbnQgPSAnRW50ZXInO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kKHRleHRJbnB1dCwgY2FuY2VsLCBlbnRlcik7XHJcbiAgICBcclxuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xyXG59XHJcblxyXG4vKkNhbGxlZCBpbiBjb250ZW50LmpzXHJcbiAgICBDcmVhdGUgb3VyIENvbnRhaW5lciBFbGVtZW50IHRoYXQgd2UgcmV0dXJuIGF0IHRoZSBib3R0b20uXHJcbiAgICBDcmVhdGUgb3VyIFRpdGxlLCBQcm9qZWN0TGlzdCBhbmQgQWRkUHJvamVjdCBlbGVtZW50cyArIGFwcGVuZCB0aGVtLlxyXG4gICAgQ3JlYXRlIG91ciBQcm9qZWN0SXRlbXMgTm9kZUxpc3QgaW1wb3J0ZWQgZnJvbSBwcm9qZWN0cy5qcyArIGFwcGVuZCB0aGVtLiovXHJcblxyXG5jb25zdCBzaWRlYmFyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKFwic2lkZUJhckxpc3RcIik7XHJcbiAgICBcclxuICAgIGNvbnRhaW5lci5hcHBlbmQocHJvamVjdCwgcHJvamVjdExpc3QsIGFkZFByb2plY3RCdXR0b24oKSwgYWRkUHJvamVjdEZvcm0oKSk7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoLi4ucHJvamVjdHMoKSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IHtzaWRlYmFyLCBhZGRQcm9qZWN0QnV0dG9ufTsiLCJjb25zdCBidXR0b25IYW5kbGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdEJ1dHRvbicpO1xyXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdEZvcm0nKTtcclxuICAgIGNvbnN0IGNsb3NlRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcclxuICAgIFxyXG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBhZGRQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjbG9zZUZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBhZGRQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtidXR0b25IYW5kbGluZ307IiwiXHJcbi8qUmV0dXJucyBhbGwgZGF0YSB0aGF0IHdlIHN0b3JlIGFuZCBjaGFuZ2UgYXMgd2UgdXNlIHRoZSBUbyBEbyBMaXN0ICovXHJcbmNvbnN0IHRvZG9JdGVtID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gWydHeW0nLCAnU29mdHdhcmUnLCAnU3R1ZHknLCAnU29jaWFscyddO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvSXRlbTsiLCJpbXBvcnQgaGVhZGVyIGZyb20gXCIuLi9hc3NldHMvaGVhZGVyXCI7XHJcbmltcG9ydCBjb250ZW50IGZyb20gXCIuLi9hc3NldHMvY29udGVudFwiO1xyXG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuLi9hc3NldHMvZm9vdGVyXCI7XHJcblxyXG4vKlB1bGxzIGFsbCBvZiBvdXIgQ29tcG9uZW50cyBtYWRlIGluIEphdmFTY3JpcHQgYW5kIGFwcGVuZHMgdGhlbSB0byB0aGUgcGFnZSovXHJcbmNvbnN0IHBhZ2VMb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIoKSwgY29udGVudCgpLCBmb290ZXIoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkKCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9GYW50YXNxdWVTYW5zTW9uby1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL0ZhbnRhc3F1ZVNhbnNNb25vLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmFudGFzcXVlU2Fuc01vbm9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuLypBcHBseSBvdXIgd2hvbGUgcGFnZSBzdHlsaW5nLCBDU1MgcmVzZXQsIEZvbnQsIGZvcmNlZCBzaXplIGFuZCBwb3NpdGlvbiBvdXIgbWFpbiBjb21wb25lbnRzIGluIGEgZ3JpZCovXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkZhbnRhc3F1ZVNhbnNNb25vXFxcIjtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NHB4IDFmciA0MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JvZHkuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGdDQUFBO0VBQ0Esb0hBQUE7QUFDSjtBQUdBLHdHQUFBO0FBQ0E7RUFDSSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0FBREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRmFudGFzcXVlU2Fuc01vbm8nO1xcclxcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0ZhbnRhc3F1ZVNhbnNNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxyXFxuICAgICAgdXJsKCcuLi9hc3NldHMvZm9udHMvRmFudGFzcXVlU2Fuc01vbm8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxufVxcclxcblxcclxcbi8qQXBwbHkgb3VyIHdob2xlIHBhZ2Ugc3R5bGluZywgQ1NTIHJlc2V0LCBGb250LCBmb3JjZWQgc2l6ZSBhbmQgcG9zaXRpb24gb3VyIG1haW4gY29tcG9uZW50cyBpbiBhIGdyaWQqLztcXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGYW50YXNxdWVTYW5zTW9ubyc7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjRweCAxZnIgNDBweDtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnR7XFxyXFxuXFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDc1cHggbWF4LWNvbnRlbnQgMTAwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcbn1cXG4uc2lkZWJhciBoMyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXG59XFxuLnNpZGViYXIgLnNpZGVCYXJMaXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG59XFxuLnNpZGViYXIgLnNpZGVCYXJMaXN0IGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDEzNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbn1cXG4uc2lkZWJhciAuc2lkZUJhckxpc3QgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTEzLCAxMTMsIDEyMiwgMC4yNzA1ODgyMzUzKTtcXG59XFxuLnNpZGViYXIgLnNpZGVCYXJMaXN0IGJ1dHRvbjphY3RpdmUge1xcbiAgc2NhbGU6IDAuOTtcXG59XFxuLnNpZGViYXIgLnNpZGVCYXJMaXN0IGJ1dHRvbiBpbWcge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxufVxcbi5zaWRlYmFyIC5zaWRlQmFyTGlzdCBidXR0b24gaDMge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4uc2lkZWJhciAuYWRkUHJvamVjdEJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuLnNpZGViYXIgLmFkZFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMTMsIDExMywgMTIyLCAwLjI3MDU4ODIzNTMpO1xcbn1cXG4uc2lkZWJhciAuYWRkUHJvamVjdEJ1dHRvbjphY3RpdmUge1xcbiAgc2NhbGU6IDAuOTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb250ZW50LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VDMENBLHlCQUFBO0FEMUNKO0FBR1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFEWjtBQUlRO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQUZaO0FBS1k7RUNyQlIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFJQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFRGFZLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFJaEI7QUNqQkk7RUFDSSw2Q0FBQTtBRG1CUjtBQ2hCSTtFQUNJLFVBQUE7QURrQlI7QUFSZ0I7RUNGWixZQUFBO0VBQ0EsV0FBQTtBRGFKO0FBUmdCO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQVVwQjtBQUxRO0VDdENKLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBSUEsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUQ4QlEsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWNaO0FDNUNJO0VBQ0ksNkNBQUE7QUQ4Q1I7QUMzQ0k7RUFDSSxVQUFBO0FENkNSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4vbWl4aW5zLnNjc3NcXFwiO1xcclxcblxcclxcbi5zaWRlYmFye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDc1cHggbWF4LWNvbnRlbnQgMTAwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIEBpbmNsdWRlIHNpZGViYXJMaWdodDtcXHJcXG5cXHJcXG4gICAgICAgIGgze1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuc2lkZUJhckxpc3R7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxyXFxuICAgICAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICAgICAgYnV0dG9ue1xcclxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBidXR0b25CYXNlO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMzVweDtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBpbWd7XFxyXFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBpbWFnZUJhc2U7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaDN7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYWRkUHJvamVjdEJ1dHRvbntcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBidXR0b25CYXNlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RDb250YWluZXJ7XFxyXFxuICAgIFxcclxcbn1cIixcIkBtaXhpbiBmbGV4Q2VudGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbkBtaXhpbiBidXR0b25CYXNlIHtcXHJcXG4gICAgQGluY2x1ZGUgZmxleENlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuXFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiM3MTcxN2E0NTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmFjdGl2ZXtcXHJcXG4gICAgICAgIHNjYWxlOiAwLjk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1peGluIHByb2plY3RCYXNle1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gaW1hZ2VCYXNlIHtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgICB3aWR0aDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGhlYWRGb290QmFzZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHRoZW1lTGlnaHQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE3MTdhO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbkBtaXhpbiB0aGVtZURhcmsge1xcclxcbiAgICBAaW5jbHVkZSBoZWFkRm9vdEJhc2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MTcxN0E7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHNpZGViYXJMaWdodCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxyXFxufVxcclxcbkBtaXhpbiBzaWRlYmFyRGFyayB7XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE3MTdhO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9vdGVyIGltZyB7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQ3FDSSx5QkFBQTtFQUNBLFlBQUE7RUFUQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFRDlCQSx1QkFBQTtBQUlKO0FBQ0k7RUNnQkEsWUFBQTtFQUNBLFdBQUE7QURkSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL21peGlucy5zY3NzXFxcIjtcXHJcXG5cXHJcXG5mb290ZXJ7XFxyXFxuICAgIEBpbmNsdWRlIHRoZW1lTGlnaHQ7XFxyXFxuICAgIEBpbmNsdWRlIGhlYWRGb290QmFzZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHB7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gICAgaW1ne1xcclxcbiAgICAgICAgQGluY2x1ZGUgaW1hZ2VCYXNlO1xcclxcbiAgICB9XFxyXFxufVwiLFwiQG1peGluIGZsZXhDZW50ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuQG1peGluIGJ1dHRvbkJhc2Uge1xcclxcbiAgICBAaW5jbHVkZSBmbGV4Q2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG5cXHJcXG4gICAgJjpob3ZlcntcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IzcxNzE3YTQ1O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6YWN0aXZle1xcclxcbiAgICAgICAgc2NhbGU6IDAuOTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWl4aW4gcHJvamVjdEJhc2V7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBpbWFnZUJhc2Uge1xcclxcbiAgICBoZWlnaHQ6IDMycHg7XFxyXFxuICAgIHdpZHRoOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gaGVhZEZvb3RCYXNle1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdGhlbWVMaWdodCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MTcxN2E7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuQG1peGluIHRoZW1lRGFyayB7XFxyXFxuICAgIEBpbmNsdWRlIGhlYWRGb290QmFzZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxNzE3QTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gc2lkZWJhckxpZ2h0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXHJcXG59XFxyXFxuQG1peGluIHNpZGViYXJEYXJrIHtcXHJcXG5cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE3MTdhO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcbi5oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogMzJweDtcXG4gIHdpZHRoOiAzMnB4O1xcbn1cXG4uaGVhZGVyIGJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMjVweDtcXG4gIGhlaWdodDogNTZweDtcXG4gIHdpZHRoOiAxMjhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTEzLCAxMTMsIDEyMiwgMC4yNzA1ODgyMzUzKTtcXG59XFxuLmhlYWRlciBidXR0b246YWN0aXZlIHtcXG4gIHNjYWxlOiAwLjk7XFxufVxcbi5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUNxQ0kseUJBQUE7RUFDQSxZQUFBO0VBVEEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUQzQko7QUFGSTtFQ29CQSxZQUFBO0VBQ0EsV0FBQTtBRGZKO0FBRUk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUNqQkosYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFJQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRGVKO0FDYkk7RUFDSSw2Q0FBQTtBRGVSO0FDWkk7RUFDSSxVQUFBO0FEY1I7QUFWSTtFQUNJLHlCQUFBO0FBWVJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi9taXhpbnMuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuLmhlYWRlcntcXHJcXG4gICAgQGluY2x1ZGUgdGhlbWVMaWdodDtcXHJcXG4gICAgQGluY2x1ZGUgaGVhZEZvb3RCYXNlO1xcclxcblxcclxcbiAgICBpbWd7XFxyXFxuICAgICAgICBAaW5jbHVkZSBpbWFnZUJhc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBhZ2VOYW1le1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJ1dHRvbntcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEyOHB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uQmFzZTsgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJ1dHRvbjpob3ZlcntcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxyXFxuICAgIH1cXHJcXG59XCIsXCJAbWl4aW4gZmxleENlbnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5AbWl4aW4gYnV0dG9uQmFzZSB7XFxyXFxuICAgIEBpbmNsdWRlIGZsZXhDZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcblxcclxcbiAgICAmOmhvdmVye1xcclxcbiAgICAgICAgYmFja2dyb3VuZDojNzE3MTdhNDU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjphY3RpdmV7XFxyXFxuICAgICAgICBzY2FsZTogMC45O1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBtaXhpbiBwcm9qZWN0QmFzZXtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGltYWdlQmFzZSB7XFxyXFxuICAgIGhlaWdodDogMzJweDtcXHJcXG4gICAgd2lkdGg6IDMycHg7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBoZWFkRm9vdEJhc2V7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiB0aGVtZUxpZ2h0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxNzE3YTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5AbWl4aW4gdGhlbWVEYXJrIHtcXHJcXG4gICAgQGluY2x1ZGUgaGVhZEZvb3RCYXNlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE3MTdBO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBzaWRlYmFyTGlnaHQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcclxcbn1cXHJcXG5AbWl4aW4gc2lkZWJhckRhcmsge1xcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvZHkuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvZHkuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4vZnVuY3Rpb25zL3BhZ2VMb2FkXCI7XHJcbmltcG9ydCB7IGJ1dHRvbkhhbmRsaW5nIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2J1dHRvbnNcIjtcclxuXHJcbmltcG9ydCBcIi4vc3R5bGVzL2JvZHkuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9oZWFkZXIuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9jb250ZW50LnNjc3NcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvZm9vdGVyLnNjc3NcIjtcclxuXHJcbi8qUnVuIG91ciBQYWdlTG9hZCBGdW5jdGlvbiwgY3JlYXRpbmcgYWxsIG9mIG91ciBpbml0aWFsIGFzc2V0cyBhbmQgYXBwZW5kaW5nIHRoZW0gdG8gdGhlIEJvZHkqL1xyXG5wYWdlTG9hZDtcclxuXHJcbi8qTm93IG91ciBlbGVtZW50cyBhcmUgY3JlYXRlZCBpbiBvdXIgRE9NLCBhcHBseSBvdXIgZXZlbnQgaGFuZGxpbmcgdG8gdGhlbS4gKi9cclxuYnV0dG9uSGFuZGxpbmcoKTtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbInNpZGViYXIiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicHJvamVjdFRvRG9zIiwiYXBwZW5kIiwiR2l0SHViIiwiZm9vdGVyIiwiY29udGFpbmVyIiwiY3JlZGl0IiwidGV4dENvbnRlbnQiLCJnaXRodWIiLCJocmVmIiwiZ2l0aHViSW1nIiwic3JjIiwiYXBwZW5kQ2hpbGQiLCJJY29uIiwiQnVsYiIsImhlYWRlciIsInRpdGxlSW1nIiwicGFnZU5hbWUiLCJ0aGVtZSIsImJ1bGIiLCJkYXRhSGFuZGxpbmciLCJwcm9qZWN0cyIsImFsbFRvZG9zIiwibm9kZXMiLCJ4IiwibGVuZ3RoIiwiZWwiLCJpY29uIiwicHJvamVjdCIsInB1c2giLCJhZGRQcm9qZWN0QnV0dG9uIiwiYnV0dG9uIiwiYWRkUHJvamVjdEZvcm0iLCJmb3JtQ29udGFpbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwidGV4dElucHV0Iiwic2V0QXR0cmlidXRlIiwiY2FuY2VsIiwiZW50ZXIiLCJwcm9qZWN0TGlzdCIsImJ1dHRvbkhhbmRsaW5nIiwicXVlcnlTZWxlY3RvciIsImFkZFByb2plY3QiLCJwcm9qZWN0Rm9ybSIsImNsb3NlRm9ybUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2RvSXRlbSIsInBhZ2VMb2FkIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=