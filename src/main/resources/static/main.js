(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-registration/user-registration.component */ "./src/app/user-registration/user-registration.component.ts");
/* harmony import */ var _shopboard_shopboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopboard/shopboard.component */ "./src/app/shopboard/shopboard.component.ts");






var routes = [
    { path: '', component: _shopboard_shopboard_component__WEBPACK_IMPORTED_MODULE_5__["ShopboardComponent"] },
    { path: 'home', component: _shopboard_shopboard_component__WEBPACK_IMPORTED_MODULE_5__["ShopboardComponent"] },
    { path: 'login', component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"] },
    { path: 'register', component: _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_4__["UserRegistrationComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'InventoryManagementSystem';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-registration/user-registration.component */ "./src/app/user-registration/user-registration.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shopboard_shopboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shopboard/shopboard.component */ "./src/app/shopboard/shopboard.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");






//import { NavigationComponent } from './navigation/navigation.component';








//import { DashboardComponent } from './dashboard/dashboard.component';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                //NavigationComponent,
                //DashboardComponent,
                _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_14__["UserRegistrationComponent"],
                _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_15__["UserLoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _shopboard_shopboard_component__WEBPACK_IMPORTED_MODULE_17__["ShopboardComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"footer_content\">\n      <div class=\"container\">\n        <div class=\"row\">\n\n          <!-- About -->\n          <div class=\"col-lg-4 footer_col\">\n            <div class=\"footer_about\">\n              <div class=\"footer_logo\">\n                <a href=\"#\">\n                  <div class=\"d-flex flex-row align-items-center justify-content-start\">\n                   \n                    <div>ARTDROBE</div>\n                  </div>\n                </a>\n              </div>\n              <div class=\"footer_about_text\">\n                <p>Some details for Artdrobe</p>\n              </div>\n            </div>\n          </div>\n\n          <!-- Footer Links -->\n          <div class=\"col-lg-4 footer_col\">\n            <div class=\"footer_menu\">\n              <div class=\"footer_title\">Support</div>\n              <ul class=\"footer_list\">\n                <li>\n                  <a href=\"#\">\n                    <div>Customer Service\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div>Return Policy</div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div>Size Guide\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div>Terms and Conditions</div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div>Contact</div>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <!-- Footer Contact -->\n          <div class=\"col-lg-4 footer_col\">\n            <div class=\"footer_contact\">\n              <div class=\"footer_title\">Stay in Touch</div>\n              <div class=\"footer_social\">\n                <div class=\"\">Social Links</div>\n                <ul class=\"footer_social_list d-flex flex-row align-items-start justify-content-start\">\n                  <li><a href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a></li>\n                  <li><a href=\"#\"><i class=\"fa fa-youtube-play\" aria-hidden=\"true\"></i></a></li>\n                  <li><a href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a></li>\n                  <li><a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer_bar\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"footer_bar_content d-flex flex-md-row flex-column align-items-center justify-content-start\">\n              <div class=\"copyright order-md-1 order-2\">\n                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n                Copyright &copy;{{currentYear}} All rights reserved\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********************************\n9. Footer\n*********************************/\n.footer {\n  display: block;\n  width: 100%;\n  background: #f8f8f8; }\n.footer_content {\n  padding-bottom: 37px; }\n.footer_about {\n  padding-top: 47px; }\n.footer_logo {\n  margin-left: -71px; }\n.footer_logo a {\n  display: block; }\n.footer_logo a > div > div:last-child {\n  font-size: 34.46px;\n  font-weight: 700;\n  color: #4a4a4a;\n  padding-left: 70px;\n  -webkit-transform: translateY(3px);\n  transform: translateY(3px); }\n.footer_about_text {\n  margin-top: 24px;\n  padding-right: 50px; }\n.footer_menu {\n  padding-top: 64px; }\n.footer_title {\n  font-size: 36px;\n  font-weight: 700;\n  color: #4a4a4a;\n  line-height: 0.75; }\n.footer_list {\n  display: block;\n  width: 100%;\n  margin-top: 29px;\n  list-style: none;\n  padding-left: 0px !important; }\n.footer_list li {\n  width: 100%;\n  position: relative;\n  height: 60px; }\n.footer_list li:not(:last-of-type) {\n  border-bottom: solid 2px #eeeeee; }\n.footer_list li a {\n  display: block;\n  position: relative;\n  font-size: 18px;\n  color: #4a4a4a;\n  line-height: 58px; }\n.footer_list li a:hover {\n  color: #2fce98; }\n.footer_list li a > div::after {\n  display: block;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  left: 0;\n  font-family: 'FontAwesome';\n  content: '\\f054';\n  font-size: 11px;\n  color: #969696; }\n.footer_list li a:hover > div::after {\n  color: #2fce98; }\n.footer_list li a > div {\n  display: inline-block;\n  padding-left: 22px; }\n.footer_list li a > div > div {\n  display: block;\n  position: absolute;\n  top: 0;\n  white-space: nowrap;\n  font-size: 10px;\n  color: #FFFFFF;\n  line-height: 0.75;\n  text-transform: uppercase;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  padding-left: 4px;\n  padding-right: 4px;\n  border-radius: 6px;\n  margin-top: 10px; }\n.footer_contact {\n  padding-top: 64px; }\n.newsletter {\n  margin-top: 48px; }\n.newseletter_form {\n  width: 100%; }\n.newsletter_input {\n  width: 100%;\n  height: 53px;\n  background: #FFFFFF;\n  padding-left: 28px;\n  border: none;\n  outline: none;\n  color: #4a4a4a;\n  border-radius: 27px; }\n.newsletter_input::-webkit-input-placeholder {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: #4a4a4a !important; }\n.newsletter_input:-moz-placeholder {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: #4a4a4a !important; }\n.newsletter_input::-moz-placeholder {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: #4a4a4a !important; }\n.newsletter_input:-ms-input-placeholder {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: #4a4a4a !important; }\n.newsletter_input::input-placeholder {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: #4a4a4a !important; }\n.newsletter_button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 53px;\n  height: 53px;\n  border-radius: 50%;\n  background: #2fce98;\n  border: none;\n  outline: none;\n  font-size: 24px;\n  font-weight: 500;\n  color: #FFFFFF;\n  line-height: 53px;\n  text-align: center;\n  cursor: pointer; }\n.footer_social {\n  margin-top: 42px; }\n.footer_social_list {\n  margin-top: 41px;\n  list-style: none;\n  padding-left: 0px; }\n.footer_social_list li {\n  width: 53px;\n  height: 53px;\n  border-radius: 50%;\n  border: solid 2px #6d6d6d;\n  transition: all 400ms ease; }\n.footer_social_list li:not(:last-of-type) {\n  margin-right: 17px; }\n.footer_social_list li a {\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: all 400ms ease; }\n.footer_social_list li a i {\n  line-height: 49px;\n  color: #6d6d6d;\n  font-size: 24px;\n  transition: all 400ms ease; }\n.footer_social_list li:hover {\n  border-color: #7b60c5;\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px); }\n.footer_social_list li a:hover i {\n  color: #2fce98; }\n.footer_bar {\n  width: 100%;\n  border-top: solid 2px #d5d5d5; }\n.footer_bar_content {\n  height: 74px; }\n.footer_nav ul li:not(:last-of-type) {\n  margin-right: 37px; }\n.footer_nav ul li a {\n  font-size: 16px;\n  font-weight: 400;\n  color: #4a4a4a; }\n.footer_nav ul li a:hover {\n  color: #2fce98; }\n.copyright {\n  font-size: 16px;\n  color: #969696;\n  font-weight: 300; }\n/* social media icon color*/\n.fa-facebook-official {\n  color: #3b5998 !important; }\n.fa-youtube-play {\n  color: #e52d27 !important; }\n.fa-google-plus {\n  color: #dd4b39 !important; }\n.fa-instagram {\n  color: #dd4b39 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0U6XFxBcnRkcm9iZS1tYXN0ZXIvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOztpQ0NDaUM7QURHakM7RUFFQyxjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBRXBCO0VBRUMsb0JBQW9CLEVBQUE7QUFFckI7RUFFQyxpQkFBaUIsRUFBQTtBQUVsQjtFQUVDLGtCQUFrQixFQUFBO0FBRW5CO0VBRUMsY0FBYyxFQUFBO0FBRWY7RUFFQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0NBQWtDO0VBSWxDLDBCQUEwQixFQUFBO0FBRTNCO0VBRUMsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBRXBCO0VBRUMsaUJBQWlCLEVBQUE7QUFFbEI7RUFFQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtBQUVsQjtFQUVDLGNBQWM7RUFDZCxXQUFXO0VBQ1IsZ0JBQWdCO0VBQ25CLGdCQUFnQjtFQUNoQiw0QkFBNEIsRUFBQTtBQUU3QjtFQUVDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0FBRWI7RUFFQyxnQ0FBZ0MsRUFBQTtBQUVqQztFQUVDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtBQUVsQjtFQUVDLGNBQWMsRUFBQTtBQUVmO0VBRUMsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUNBQW1DO0VBSW5DLDJCQUEyQjtFQUMzQixPQUFPO0VBQ1AsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYyxFQUFBO0FBRWY7RUFFQyxjQUFjLEVBQUE7QUFFZjtFQUVDLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTtBQUVuQjtFQUVDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTtBQVlqQjtFQUVDLGlCQUFpQixFQUFBO0FBRWxCO0VBRUMsZ0JBQWdCLEVBQUE7QUFFakI7RUFFQyxXQUFXLEVBQUE7QUFFWjtFQUVDLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTtBQUVwQjtFQUVDLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IseUJBQXlCLEVBQUE7QUFFMUI7RUFFQywwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHlCQUF5QixFQUFBO0FBRTFCO0VBRUMsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQix5QkFBeUIsRUFBQTtBQUUxQjtFQUVDLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IseUJBQXlCLEVBQUE7QUFFMUI7RUFFQywwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHlCQUF5QixFQUFBO0FBRTFCO0VBRUMsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7QUFFaEI7RUFFQyxnQkFBZ0IsRUFBQTtBQUVqQjtFQUVJLGdCQUFnQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7QUFFbEI7RUFFQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFLekIsMEJBQTBCLEVBQUE7QUFFM0I7RUFFQyxrQkFBa0IsRUFBQTtBQUVuQjtFQUVDLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUtsQiwwQkFBMEIsRUFBQTtBQUUzQjtFQUVDLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUtmLDBCQUEwQixFQUFBO0FBRTNCO0VBR0MscUJBQStCO0VBQy9CLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTtBQUU1QjtFQUVDLGNBQWMsRUFBQTtBQUdmO0VBRUMsV0FBVztFQUNYLDZCQUE2QixFQUFBO0FBRTlCO0VBRUMsWUFBWSxFQUFBO0FBRWI7RUFFQyxrQkFBa0IsRUFBQTtBQUVuQjtFQUVDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0FBRWY7RUFFQyxjQUFjLEVBQUE7QUFHZjtFQUVDLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7QUFHakIsMkJBQUE7QUFFQTtFQUNJLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0MseUJBQXlCLEVBQUE7QUFHMUI7RUFDQSx5QkFBeUIsRUFBQTtBQUd6QjtFQUNELHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuOS4gRm9vdGVyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi5mb290ZXJcbntcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuLmZvb3Rlcl9jb250ZW50XG57XG5cdHBhZGRpbmctYm90dG9tOiAzN3B4O1xufVxuLmZvb3Rlcl9hYm91dFxue1xuXHRwYWRkaW5nLXRvcDogNDdweDtcbn1cbi5mb290ZXJfbG9nb1xue1xuXHRtYXJnaW4tbGVmdDogLTcxcHg7XG59XG4uZm9vdGVyX2xvZ28gYVxue1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbi5mb290ZXJfbG9nbyBhID4gZGl2ID4gZGl2Omxhc3QtY2hpbGRcbntcblx0Zm9udC1zaXplOiAzNC40NnB4O1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRjb2xvcjogIzRhNGE0YTtcblx0cGFkZGluZy1sZWZ0OiA3MHB4O1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xuXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG5cdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cbi5mb290ZXJfYWJvdXRfdGV4dFxue1xuXHRtYXJnaW4tdG9wOiAyNHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuLmZvb3Rlcl9tZW51XG57XG5cdHBhZGRpbmctdG9wOiA2NHB4O1xufVxuLmZvb3Rlcl90aXRsZVxue1xuXHRmb250LXNpemU6IDM2cHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGNvbG9yOiAjNGE0YTRhO1xuXHRsaW5lLWhlaWdodDogMC43NTtcbn1cbi5mb290ZXJfbGlzdFxue1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjlweDtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0cGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cbi5mb290ZXJfbGlzdCBsaVxue1xuXHR3aWR0aDogMTAwJTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRoZWlnaHQ6IDYwcHg7XG59XG4uZm9vdGVyX2xpc3QgbGk6bm90KDpsYXN0LW9mLXR5cGUpXG57XG5cdGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZWVlZWVlO1xufVxuLmZvb3Rlcl9saXN0IGxpIGFcbntcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRjb2xvcjogIzRhNGE0YTtcblx0bGluZS1oZWlnaHQ6IDU4cHg7XG59XG4uZm9vdGVyX2xpc3QgbGkgYTpob3Zlclxue1xuXHRjb2xvcjogIzJmY2U5ODtcbn1cbi5mb290ZXJfbGlzdCBsaSBhID4gZGl2OjphZnRlclxue1xuXHRkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0bGVmdDogMDtcblx0Zm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG5cdGNvbnRlbnQ6ICdcXGYwNTQnO1xuXHRmb250LXNpemU6IDExcHg7XG5cdGNvbG9yOiAjOTY5Njk2O1xufVxuLmZvb3Rlcl9saXN0IGxpIGE6aG92ZXIgPiBkaXY6OmFmdGVyXG57XG5cdGNvbG9yOiAjMmZjZTk4O1xufVxuLmZvb3Rlcl9saXN0IGxpIGEgPiBkaXZcbntcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwYWRkaW5nLWxlZnQ6IDIycHg7XG59XG4uZm9vdGVyX2xpc3QgbGkgYSA+IGRpdiA+IGRpdlxue1xuXHRkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdGZvbnQtc2l6ZTogMTBweDtcblx0Y29sb3I6ICNGRkZGRkY7XG5cdGxpbmUtaGVpZ2h0OiAwLjc1O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRwYWRkaW5nLXRvcDogMnB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMnB4O1xuXHRwYWRkaW5nLWxlZnQ6IDRweDtcblx0cGFkZGluZy1yaWdodDogNHB4O1xuXHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG59XG4vLyAuZm9vdGVyX3RhZ18xXG4vLyB7XG4vLyBcdGxlZnQ6IGNhbGMoMTAwJSArIDVweCk7XG4vLyBcdGJhY2tncm91bmQ6ICMyZmNlOTg7XG4vLyB9XG4vLyAuZm9vdGVyX3RhZ18yXG4vLyB7XG4vLyBcdGxlZnQ6IGNhbGMoMTAwJSArIDI1cHgpO1xuLy8gXHRiYWNrZ3JvdW5kOiAjYmVhZjRhO1xuLy8gfVxuLmZvb3Rlcl9jb250YWN0XG57XG5cdHBhZGRpbmctdG9wOiA2NHB4O1xufVxuLm5ld3NsZXR0ZXJcbntcblx0bWFyZ2luLXRvcDogNDhweDtcbn1cbi5uZXdzZWxldHRlcl9mb3JtXG57XG5cdHdpZHRoOiAxMDAlO1xufVxuLm5ld3NsZXR0ZXJfaW5wdXRcbntcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNTNweDtcblx0YmFja2dyb3VuZDogI0ZGRkZGRjtcblx0cGFkZGluZy1sZWZ0OiAyOHB4O1xuXHRib3JkZXI6IG5vbmU7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGNvbG9yOiAjNGE0YTRhO1xuXHRib3JkZXItcmFkaXVzOiAyN3B4O1xufVxuLm5ld3NsZXR0ZXJfaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJcbntcblx0Zm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG5cdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcblx0Y29sb3I6ICM0YTRhNGEgIWltcG9ydGFudDtcbn1cbi5uZXdzbGV0dGVyX2lucHV0Oi1tb3otcGxhY2Vob2xkZXJcbntcblx0Zm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG5cdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcblx0Y29sb3I6ICM0YTRhNGEgIWltcG9ydGFudDtcbn1cbi5uZXdzbGV0dGVyX2lucHV0OjotbW96LXBsYWNlaG9sZGVyXG57XG5cdGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiAjNGE0YTRhICFpbXBvcnRhbnQ7XG59IFxuLm5ld3NsZXR0ZXJfaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyXG57IFxuXHRmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcblx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuXHRjb2xvcjogIzRhNGE0YSAhaW1wb3J0YW50O1xufVxuLm5ld3NsZXR0ZXJfaW5wdXQ6OmlucHV0LXBsYWNlaG9sZGVyXG57XG5cdGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiAjNGE0YTRhICFpbXBvcnRhbnQ7XG59XG4ubmV3c2xldHRlcl9idXR0b25cbntcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAwO1xuXHR3aWR0aDogNTNweDtcblx0aGVpZ2h0OiA1M3B4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJhY2tncm91bmQ6ICMyZmNlOTg7XG5cdGJvcmRlcjogbm9uZTtcblx0b3V0bGluZTogbm9uZTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjb2xvcjogI0ZGRkZGRjtcblx0bGluZS1oZWlnaHQ6IDUzcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuLmZvb3Rlcl9zb2NpYWxcbntcblx0bWFyZ2luLXRvcDogNDJweDtcbn1cbi5mb290ZXJfc29jaWFsX2xpc3RcbntcbiAgICBtYXJnaW4tdG9wOiA0MXB4O1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi5mb290ZXJfc29jaWFsX2xpc3QgbGlcbntcblx0d2lkdGg6IDUzcHg7XG5cdGhlaWdodDogNTNweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRib3JkZXI6IHNvbGlkIDJweCAjNmQ2ZDZkO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuXHQtbW96LXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XG5cdC1vLXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuXHR0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcbn1cbi5mb290ZXJfc29jaWFsX2xpc3QgbGk6bm90KDpsYXN0LW9mLXR5cGUpXG57XG5cdG1hcmdpbi1yaWdodDogMTdweDtcbn1cbi5mb290ZXJfc29jaWFsX2xpc3QgbGkgYVxue1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuXHQtbW96LXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XG5cdC1vLXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuXHR0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcbn1cbi5mb290ZXJfc29jaWFsX2xpc3QgbGkgYSBpXG57XG5cdGxpbmUtaGVpZ2h0OiA0OXB4O1xuXHRjb2xvcjogIzZkNmQ2ZDtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuXHQtbW96LXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XG5cdC1vLXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuXHR0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcbn1cbi5mb290ZXJfc29jaWFsX2xpc3QgbGk6aG92ZXJcbntcblx0Ly9ib3JkZXItY29sb3I6ICMyZmNlOTg7XG5cdGJvcmRlci1jb2xvcjogcmdiKDEyMywgOTYsIDE5Nyk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cbi5mb290ZXJfc29jaWFsX2xpc3QgbGkgYTpob3ZlciBpXG57XG5cdGNvbG9yOiAjMmZjZTk4O1xuXHRcbn1cbi5mb290ZXJfYmFyXG57XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXItdG9wOiBzb2xpZCAycHggI2Q1ZDVkNTtcbn1cbi5mb290ZXJfYmFyX2NvbnRlbnRcbntcblx0aGVpZ2h0OiA3NHB4O1xufVxuLmZvb3Rlcl9uYXYgdWwgbGk6bm90KDpsYXN0LW9mLXR5cGUpXG57XG5cdG1hcmdpbi1yaWdodDogMzdweDtcbn1cbi5mb290ZXJfbmF2IHVsIGxpIGFcbntcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRjb2xvcjogIzRhNGE0YTtcbn1cbi5mb290ZXJfbmF2IHVsIGxpIGE6aG92ZXJcbntcblx0Y29sb3I6ICMyZmNlOTg7XG5cdFxufVxuLmNvcHlyaWdodFxue1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiAjOTY5Njk2O1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG4vKiBzb2NpYWwgbWVkaWEgaWNvbiBjb2xvciovXG5cbi5mYS1mYWNlYm9vay1vZmZpY2lhbCB7XG4gICAgY29sb3I6ICMzYjU5OTggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mYS15b3V0dWJlLXBsYXl7XG5cdCAgY29sb3I6ICNlNTJkMjcgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mYS1nb29nbGUtcGx1c3tcblx0XHRjb2xvcjogI2RkNGIzOSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZmEtaW5zdGFncmFtIHtcblx0Y29sb3I6ICNkZDRiMzkgIWltcG9ydGFudDtcbiAgfSIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbjkuIEZvb3RlclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODsgfVxuXG4uZm9vdGVyX2NvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMzdweDsgfVxuXG4uZm9vdGVyX2Fib3V0IHtcbiAgcGFkZGluZy10b3A6IDQ3cHg7IH1cblxuLmZvb3Rlcl9sb2dvIHtcbiAgbWFyZ2luLWxlZnQ6IC03MXB4OyB9XG5cbi5mb290ZXJfbG9nbyBhIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmZvb3Rlcl9sb2dvIGEgPiBkaXYgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMzQuNDZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIHBhZGRpbmctbGVmdDogNzBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7IH1cblxuLmZvb3Rlcl9hYm91dF90ZXh0IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDsgfVxuXG4uZm9vdGVyX21lbnUge1xuICBwYWRkaW5nLXRvcDogNjRweDsgfVxuXG4uZm9vdGVyX3RpdGxlIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzRhNGE0YTtcbiAgbGluZS1oZWlnaHQ6IDAuNzU7IH1cblxuLmZvb3Rlcl9saXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyOXB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50OyB9XG5cbi5mb290ZXJfbGlzdCBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjBweDsgfVxuXG4uZm9vdGVyX2xpc3QgbGk6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNlZWVlZWU7IH1cblxuLmZvb3Rlcl9saXN0IGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICBsaW5lLWhlaWdodDogNThweDsgfVxuXG4uZm9vdGVyX2xpc3QgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMmZjZTk4OyB9XG5cbi5mb290ZXJfbGlzdCBsaSBhID4gZGl2OjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsZWZ0OiAwO1xuICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcbiAgY29udGVudDogJ1xcZjA1NCc7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM5Njk2OTY7IH1cblxuLmZvb3Rlcl9saXN0IGxpIGE6aG92ZXIgPiBkaXY6OmFmdGVyIHtcbiAgY29sb3I6ICMyZmNlOTg7IH1cblxuLmZvb3Rlcl9saXN0IGxpIGEgPiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjJweDsgfVxuXG4uZm9vdGVyX2xpc3QgbGkgYSA+IGRpdiA+IGRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbGluZS1oZWlnaHQ6IDAuNzU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxuXG4uZm9vdGVyX2NvbnRhY3Qge1xuICBwYWRkaW5nLXRvcDogNjRweDsgfVxuXG4ubmV3c2xldHRlciB7XG4gIG1hcmdpbi10b3A6IDQ4cHg7IH1cblxuLm5ld3NlbGV0dGVyX2Zvcm0ge1xuICB3aWR0aDogMTAwJTsgfVxuXG4ubmV3c2xldHRlcl9pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUzcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzRhNGE0YTtcbiAgYm9yZGVyLXJhZGl1czogMjdweDsgfVxuXG4ubmV3c2xldHRlcl9pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGE0YTRhICFpbXBvcnRhbnQ7IH1cblxuLm5ld3NsZXR0ZXJfaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGE0YTRhICFpbXBvcnRhbnQ7IH1cblxuLm5ld3NsZXR0ZXJfaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzRhNGE0YSAhaW1wb3J0YW50OyB9XG5cbi5uZXdzbGV0dGVyX2lucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGE0YTRhICFpbXBvcnRhbnQ7IH1cblxuLm5ld3NsZXR0ZXJfaW5wdXQ6OmlucHV0LXBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0YTRhNGEgIWltcG9ydGFudDsgfVxuXG4ubmV3c2xldHRlcl9idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA1M3B4O1xuICBoZWlnaHQ6IDUzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzJmY2U5ODtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsaW5lLWhlaWdodDogNTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmZvb3Rlcl9zb2NpYWwge1xuICBtYXJnaW4tdG9wOiA0MnB4OyB9XG5cbi5mb290ZXJfc29jaWFsX2xpc3Qge1xuICBtYXJnaW4tdG9wOiA0MXB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDBweDsgfVxuXG4uZm9vdGVyX3NvY2lhbF9saXN0IGxpIHtcbiAgd2lkdGg6IDUzcHg7XG4gIGhlaWdodDogNTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDJweCAjNmQ2ZDZkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTsgfVxuXG4uZm9vdGVyX3NvY2lhbF9saXN0IGxpOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1yaWdodDogMTdweDsgfVxuXG4uZm9vdGVyX3NvY2lhbF9saXN0IGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTsgfVxuXG4uZm9vdGVyX3NvY2lhbF9saXN0IGxpIGEgaSB7XG4gIGxpbmUtaGVpZ2h0OiA0OXB4O1xuICBjb2xvcjogIzZkNmQ2ZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTsgfVxuXG4uZm9vdGVyX3NvY2lhbF9saXN0IGxpOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjN2I2MGM1O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cblxuLmZvb3Rlcl9zb2NpYWxfbGlzdCBsaSBhOmhvdmVyIGkge1xuICBjb2xvcjogIzJmY2U5ODsgfVxuXG4uZm9vdGVyX2JhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiBzb2xpZCAycHggI2Q1ZDVkNTsgfVxuXG4uZm9vdGVyX2Jhcl9jb250ZW50IHtcbiAgaGVpZ2h0OiA3NHB4OyB9XG5cbi5mb290ZXJfbmF2IHVsIGxpOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1yaWdodDogMzdweDsgfVxuXG4uZm9vdGVyX25hdiB1bCBsaSBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzRhNGE0YTsgfVxuXG4uZm9vdGVyX25hdiB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICMyZmNlOTg7IH1cblxuLmNvcHlyaWdodCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM5Njk2OTY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cblxuLyogc29jaWFsIG1lZGlhIGljb24gY29sb3IqL1xuLmZhLWZhY2Vib29rLW9mZmljaWFsIHtcbiAgY29sb3I6ICMzYjU5OTggIWltcG9ydGFudDsgfVxuXG4uZmEteW91dHViZS1wbGF5IHtcbiAgY29sb3I6ICNlNTJkMjcgIWltcG9ydGFudDsgfVxuXG4uZmEtZ29vZ2xlLXBsdXMge1xuICBjb2xvcjogI2RkNGIzOSAhaW1wb3J0YW50OyB9XG5cbi5mYS1pbnN0YWdyYW0ge1xuICBjb2xvcjogI2RkNGIzOSAhaW1wb3J0YW50OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        var currDate = Date().toString();
        this.currentYear = currDate.split(' ')[3].toString();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md bg-dark navbar-dark fixed-top nav-color\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img class=\"company-logo\" src=\"./assets/images/logo-3.jpeg\"/>  \n    \n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n      <nav class=\"main_nav\">\n          <ul class=\"nav navbar-nav \">\n            <li class=\"active\"><a href=\"#\">Women</a></li>\n            <li><a href=\"#\">Home & Decorations</a></li>\n            <li><a href=\"#\"><img src=\"https://img.icons8.com/color/30/000000/new.png\">Arrival</a>\n             \n            </li>\n            \n          </ul>\n        </nav>\n        <div class=\"header_search header_right d-flex flex-row align-items-center justify-content-start ml-auto\">\n            <form action=\"#\" id=\"header_search_form\">\n              <input type=\"text\" class=\"search_input\" placeholder=\"Search Item\" required=\"required\">\n              <!-- <button class=\"header_search_button\"><img src=\"../../assets/images/search.png\" alt=\"\"></button> -->\n            </form>\n          </div>\n    <div class=\"header_right d-flex flex-row align-items-center justify-content-start ml-auto\">\n\t\t\t\n\t\t\t\t\n\t\t\t\t<!-- User -->\n        <div class=\"user\"><i class=\"fa fa-user fa-2x fa-color\" aria-hidden=\"true\" routerLink=\"/login\"></i></div>\n        <div class=\"cart\"><i class=\"fa fa-shopping-cart fa-2x fa-color\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\n\t\t\t</div>\n  </div>  \n</nav>\n\n<div class=\"container-fluid\" style=\"margin-top:80px\">\n  \n<router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".company-logo {\n  height: 35px;\n  width: 100px; }\n\n.nav-color {\n  background-color: #000 !important;\n  font-family: Georgia, 'Times New Roman', Times, serif; }\n\n.main_nav ul li.active a,\n.main_nav ul li a:hover {\n  color: #2fce98; }\n\n.header_search_form {\n  display: block; }\n\n.search_input {\n  width: 200px;\n  height: 39px;\n  border: solid 1px #4a4a4a;\n  border-radius: 20px;\n  outline: none;\n  text-align: center;\n  font-size: 16px;\n  color: #2e2e2e;\n  font-weight: 300;\n  box-shadow: 0 0 1px 0px #4a4a4a inset, 0 0 1px 0px #4a4a4a;\n  transition: all 200ms ease; }\n\n.search_input:focus,\n.search_input:hover {\n  border-color: #2fce98;\n  box-shadow: 0 0 1px 0px #2fce98 inset, 0 0 1px 0px #2fce98; }\n\n.search_input::-webkit-input-placeholder {\n  font-size: 16px !important;\n  font-weight: 300 !important;\n  color: #2e2e2e !important; }\n\n.search_input:-moz-placeholder {\n  font-size: 16px !important;\n  font-weight: 300 !important;\n  color: #2e2e2e !important; }\n\n.search_input::-moz-placeholder {\n  font-size: 16px !important;\n  font-weight: 300 !important;\n  color: #2e2e2e !important; }\n\n.search_input:-ms-input-placeholder {\n  font-size: 16px !important;\n  font-weight: 300 !important;\n  color: #2e2e2e !important; }\n\n.search_input::input-placeholder {\n  font-size: 16px !important;\n  font-weight: 300 !important;\n  color: #2e2e2e !important; }\n\n.header_search_button {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 0;\n  width: 44px;\n  height: 39px;\n  border: none;\n  outline: none;\n  background: transparent;\n  cursor: pointer; }\n\n.main_nav {\n  margin-left: 40px;\n  margin-top: 2px; }\n\n.main_nav ul li:not(:last-of-type) {\n  margin-right: 20px; }\n\n.main_nav ul li a {\n  font-size: 20px;\n  color: #ffffff;\n  font-weight: 400;\n  text-decoration: none; }\n\nul {\n  list-style-type: none; }\n\n.main_nav ul li.active a,\n.main_nav ul li a:hover {\n  color: #2fce98; }\n\n.user {\n  margin-right: 28px;\n  margin-left: 28px; }\n\n.fa-color {\n  color: #ffffff;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcQXJ0ZHJvYmUtbWFzdGVyL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFFaEI7RUFDQyxpQ0FBaUM7RUFDakMscURBQXFELEVBQUE7O0FBR3REOztFQUdDLGNBQWMsRUFBQTs7QUFPZjtFQUVDLGNBQWMsRUFBQTs7QUFFZjtFQUVDLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDBEQUEwRDtFQUsxRCwwQkFBMEIsRUFBQTs7QUFFM0I7O0VBR0MscUJBQXFCO0VBQ3JCLDBEQUEwRCxFQUFBOztBQUUzRDtFQUVDLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IseUJBQXlCLEVBQUE7O0FBRTFCO0VBRUMsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQix5QkFBeUIsRUFBQTs7QUFFMUI7RUFFQywwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHlCQUF5QixFQUFBOztBQUUxQjtFQUVDLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IseUJBQXlCLEVBQUE7O0FBRTFCO0VBRUMsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQix5QkFBeUIsRUFBQTs7QUFFMUI7RUFFQyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLG1DQUFtQztFQUluQywyQkFBMkI7RUFDM0IsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQUVoQjtFQUVJLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRW5CO0VBRUMsa0JBQWtCLEVBQUE7O0FBRW5CO0VBRUMsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCLEVBQUE7O0FBSXRCO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXpCOztFQUdDLGNBQWMsRUFBQTs7QUFFZjtFQUVJLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDQyxjQUFjO0VBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhbnktbG9nb3tcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuLm5hdi1jb2xvcntcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuXHRmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cblxuLm1haW5fbmF2IHVsIGxpLmFjdGl2ZSBhLFxuLm1haW5fbmF2IHVsIGxpIGE6aG92ZXJcbntcblx0Y29sb3I6ICMyZmNlOTg7XG59XG5cbi8vIC5oZWFkZXJfc2VhcmNoXG4vLyB7XG4vLyBcdG1hcmdpbi1yaWdodDogNjVweDtcbi8vIH1cbi5oZWFkZXJfc2VhcmNoX2Zvcm1cbntcblx0ZGlzcGxheTogYmxvY2s7XG59XG4uc2VhcmNoX2lucHV0XG57XG5cdHdpZHRoOiAyMDBweDtcblx0aGVpZ2h0OiAzOXB4O1xuXHRib3JkZXI6IHNvbGlkIDFweCAjNGE0YTRhO1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRvdXRsaW5lOiBub25lO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICMyZTJlMmU7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdGJveC1zaGFkb3c6IDAgMCAxcHggMHB4ICM0YTRhNGEgaW5zZXQsIDAgMCAxcHggMHB4ICM0YTRhNGE7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcblx0LW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG5cdHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xufVxuLnNlYXJjaF9pbnB1dDpmb2N1cyxcbi5zZWFyY2hfaW5wdXQ6aG92ZXJcbntcblx0Ym9yZGVyLWNvbG9yOiAjMmZjZTk4O1xuXHRib3gtc2hhZG93OiAwIDAgMXB4IDBweCAjMmZjZTk4IGluc2V0LCAwIDAgMXB4IDBweCAjMmZjZTk4O1xufVxuLnNlYXJjaF9pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlclxue1xuXHRmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcblx0Zm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuXHRjb2xvcjogIzJlMmUyZSAhaW1wb3J0YW50O1xufVxuLnNlYXJjaF9pbnB1dDotbW96LXBsYWNlaG9sZGVyXG57XG5cdGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuXHRmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiAjMmUyZTJlICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoX2lucHV0OjotbW96LXBsYWNlaG9sZGVyXG57XG5cdGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuXHRmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiAjMmUyZTJlICFpbXBvcnRhbnQ7XG59IFxuLnNlYXJjaF9pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXJcbnsgXG5cdGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuXHRmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiAjMmUyZTJlICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoX2lucHV0OjppbnB1dC1wbGFjZWhvbGRlclxue1xuXHRmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcblx0Zm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuXHRjb2xvcjogIzJlMmUyZSAhaW1wb3J0YW50O1xufVxuLmhlYWRlcl9zZWFyY2hfYnV0dG9uXG57XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA1MCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdHJpZ2h0OiAwO1xuXHR3aWR0aDogNDRweDtcblx0aGVpZ2h0OiAzOXB4O1xuXHRib3JkZXI6IG5vbmU7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbl9uYXZcbntcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG59XG4ubWFpbl9uYXYgdWwgbGk6bm90KDpsYXN0LW9mLXR5cGUpXG57XG5cdG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5tYWluX25hdiB1bCBsaSBhXG57XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Y29sb3I6ICNmZmZmZmY7ICAvLzJlMmUyZVxuXHRmb250LXdlaWdodDogNDAwO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgXG59XG5cbnVse1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5tYWluX25hdiB1bCBsaS5hY3RpdmUgYSxcbi5tYWluX25hdiB1bCBsaSBhOmhvdmVyXG57XG5cdGNvbG9yOiAjMmZjZTk4O1xufVxuLnVzZXJcbntcbiAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI4cHg7XG59XG4uZmEtY29sb3J7XG5cdGNvbG9yOiAjZmZmZmZmO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.redirect = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interface/user-details.ts":
/*!*******************************************!*\
  !*** ./src/app/interface/user-details.ts ***!
  \*******************************************/
/*! exports provided: UserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return UserDetails; });
var UserDetails = /** @class */ (function () {
    function UserDetails() {
    }
    return UserDetails;
}());



/***/ }),

/***/ "./src/app/services/global-variable.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/global-variable.service.ts ***!
  \*****************************************************/
/*! exports provided: GlobalVariableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVariableService", function() { return GlobalVariableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var GlobalVariableService = /** @class */ (function () {
    function GlobalVariableService() {
        // private isLoggedInSource = new BehaviorSubject<boolean>(false);
        // public _isLoggedIn: Observable<boolean> = this.isLoggedInSource.asObservable();
        this.isUserVerified = false;
        this.userDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Object.defineProperty(GlobalVariableService.prototype, "isLoggedIn", {
        get: function () {
            return this.isUserVerified;
        },
        set: function (logged) {
            this.isUserVerified = logged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalVariableService.prototype, "setloginUser", {
        set: function (user) {
            //console.log('setuser', user);
            this.userDetails.next(user);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalVariableService.prototype, "getloginUser", {
        get: function () {
            return this.userDetails.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    GlobalVariableService.prototype.logout = function () {
        this.isLoggedIn = false;
        this.userDetails.next();
    };
    GlobalVariableService.prototype.login = function () {
        this.isLoggedIn = true;
    };
    GlobalVariableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalVariableService);
    return GlobalVariableService;
}());



/***/ }),

/***/ "./src/app/services/rest-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/rest-service.service.ts ***!
  \**************************************************/
/*! exports provided: RestServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestServiceService", function() { return RestServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var RestServiceService = /** @class */ (function () {
    function RestServiceService(http) {
        this.http = http;
        this.getUserUrl = "";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    RestServiceService.prototype.getUserVerified = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].logInUrl);
    };
    RestServiceService.prototype.getEqpReqDetails = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].eqpDetailsUrl);
    };
    //post method
    RestServiceService.prototype.getUserDetails = function (id, product) {
        return this.http.put(this.getUserUrl + 'products/' + id, JSON.stringify(product), this.httpOptions).pipe(
        //catchError(this.handleError<any>('updateProduct'))
        );
    };
    RestServiceService.prototype.postUserDetails = function (userDetails) {
        console.log('register called', JSON.stringify(userDetails), _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].register);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].register, JSON.stringify(userDetails), this.httpOptions).pipe(
        //catchError(this.handleError<any>('updateProduct'))
        );
    };
    RestServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RestServiceService);
    return RestServiceService;
}());



/***/ }),

/***/ "./src/app/shopboard/shopboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/shopboard/shopboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12 col-sm-12 carousel-section\">\n    <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n      <!-- Indicators -->\n      <ul class=\"carousel-indicators\">\n        <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"3\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"4\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"5\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"6\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"7\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"8\"></li>\n        \n      </ul>\n\n      <!-- The slideshow -->\n      <div class=\"carousel-inner\">\n        \n          <div class=\"carousel-item active\">\n            <img src=\"./assets/images/caro_1.jpg\" alt=\"\" width=\"1000\" height=\"400\">\n          </div>\n          <div class=\"carousel-item \">\n              <img src=\"./assets/images/caro_2.jpg\" alt=\"\" width=\"1000\" height=\"400\">\n            </div>\n            <div class=\"carousel-item\">\n              <img src=\"./assets/images/caro_3.jpg\" alt=\"\" width=\"1000\" height=\"400\">\n            </div>\n            <div class=\"carousel-item\">\n              <img src=\"./assets/images/caro_4.jpg\" alt=\"\" width=\"1000\" height=\"400\">\n            </div>\n            <div class=\"carousel-item\">\n              <img src=\"./assets/images/caro_5.jpg\" alt=\"\" width=\"1000\" height=\"400\">\n            </div>\n            <div class=\"carousel-item\">\n              <img src=\"./assets/images/caro_6.jpg\" alt=\"\" width=\"1000\" height=\"400\">\n            </div>\n            <div class=\"carousel-item\">\n              <img src=\"./assets/images/caro_7.jpg\" alt=\"\" width=\"1000\" height=\"400\">\n            </div>\n            <div class=\"carousel-item\">\n              <img src=\"./assets/images/caro_8.jpg\" alt=\"\" width=\"1000\" height=\"400\">\n            </div>\n            <div class=\"carousel-item\">\n              <img src=\"./assets/images/caro_9.jpg\" alt=\"\" width=\"1000\" height=\"400\">\n            </div>\n\n      </div>\n\n      <!-- Left and right controls card-section -->\n      <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\"></span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\"></span>\n      </a>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-lg-12 col-sm-12 card-section\">\n    <div class=\"card-deck\">\n\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./assets/images/product_1.jpg\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Winter Cloths</h4>\n          <p class=\"card-text\">Cool Clothing with Brown Stripes</p>\n          <!-- <a href=\"#\" class=\"btn btn-primary\">See Profile</a> -->\n          <div class=\"row cart-button-section\">\n            <div class=\"col-lg-6 col-md-6 col-sm-6 cart-button\">\n              <i class=\"fa fa-shopping-cart fa-2x\" aria-hidden=\"true\"> </i>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-6 cart-button\">\n              <i class=\"fa fa-gratipay fa-2x\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./assets/images/product_2.jpg\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Winter Cloths</h4>\n          <p class=\"card-text\">Cool Clothing with Brown Stripes</p>\n          <!-- <a href=\"#\" class=\"btn btn-primary\">See Profile</a> -->\n          <div class=\"row cart-button-section\">\n            <div class=\"col-lg-6 col-md-6 col-sm-6 cart-button\">\n              <i class=\"fa fa-shopping-cart fa-2x\" aria-hidden=\"true\"> </i>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-6 cart-button\">\n              <i class=\"fa fa-gratipay fa-2x\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./assets/images/product_3.jpg\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Winter Cloths</h4>\n          <p class=\"card-text\">Cool Clothing with Brown Stripes</p>\n          <!-- <a href=\"#\" class=\"btn btn-primary\">See Profile</a> -->\n          <div class=\"row cart-button-section\">\n            <div class=\"col-lg-6 col-md-6 col-sm-6 cart-button\">\n              <i class=\"fa fa-shopping-cart fa-2x\" aria-hidden=\"true\"> </i>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-6 cart-button\">\n              <i class=\"fa fa-gratipay fa-2x\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/shopboard/shopboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/shopboard/shopboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-inner img {\n  width: 100%; }\n\n.card-section {\n  margin-top: 3%;\n  padding: 0% 10% 3% 10%; }\n\n.card-section .cart-button-section {\n    text-align: center;\n    cursor: pointer; }\n\n.card-section .cart-button-section .cart-button {\n      border: 2px solid #d1d8db;\n      border-radius: 5px; }\n\n.card-section .cart-button-section :hover {\n    background: #2fce98; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcGJvYXJkL0U6XFxBcnRkcm9iZS1tYXN0ZXIvc3JjXFxhcHBcXHNob3Bib2FyZFxcc2hvcGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBYztFQUNkLHNCQUFzQixFQUFBOztBQUYxQjtJQUlRLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FBTHZCO01BUVkseUJBQW9DO01BQ3BDLGtCQUFrQixFQUFBOztBQVQ5QjtJQWVTLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hvcGJvYXJkL3Nob3Bib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1pbm5lciBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vaGVpZ2h0OiAxMDAlO1xufVxuLmNhcmQtc2VjdGlvbntcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBwYWRkaW5nOiAwJSAxMCUgMyUgMTAlO1xuICAgIC5jYXJ0LWJ1dHRvbi1zZWN0aW9ue1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgXG4gICAgICAgIC5jYXJ0LWJ1dHRvbntcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDksIDIxNiwgMjE5KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgLmNhcnQtYnV0dG9uLXNlY3Rpb24gOmhvdmVyXG4gICAgICAgIHtcblx0ICAgICAgICBiYWNrZ3JvdW5kOiAjMmZjZTk4O1xuICAgICAgICB9XG59XG5cbi5jYXJvdXNlbC1zZWN0aW9ue1xuXG4gICAgLy9oZWlnaHQ6IDEwMHB4Oztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shopboard/shopboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shopboard/shopboard.component.ts ***!
  \**************************************************/
/*! exports provided: ShopboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopboardComponent", function() { return ShopboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShopboardComponent = /** @class */ (function () {
    function ShopboardComponent() {
    }
    ShopboardComponent.prototype.ngOnInit = function () {
    };
    ShopboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopboard',
            template: __webpack_require__(/*! ./shopboard.component.html */ "./src/app/shopboard/shopboard.component.html"),
            styles: [__webpack_require__(/*! ./shopboard.component.scss */ "./src/app/shopboard/shopboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShopboardComponent);
    return ShopboardComponent;
}());



/***/ }),

/***/ "./src/app/user-login/user-login.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-login/user-login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <div class=\"content\">\n <div class=\"container-fluid\">\n    <div class=\"card\">\n      <div class=\"card-header card-header-primary\">\n        <h4 class=\"card-title\">Login</h4>\n        \n      </div>\n      <div class=\"card-body\" >\n      <form [formGroup]=\"loginUserfrm\" (ngSubmit)=\"loginUser()\" > \n        <div class=\"col\">\n          <div class=\"col-md-4\">\n            <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\n              <input matInput placeholder=\"User ID\" formControlName=\"userId\">\n            </mat-form-field>\n          </div>\n        \n      \n          <div class=\"col-md-4\" >\n            <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\n              <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\">\n            </mat-form-field>\n          </div>\n       \n        <div class=\"col-md-4 \">\n            <div class=\"float-right form-buttons\"  style=\"text-align:right; width:102%; padding:0;\">\n              <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!loginUserfrm.valid\">Login</button>\n              <button mat-raised-button color=\"warn\" type=\"reset\">Cancel</button>\n          </div>\n          \n        </div>\n        <div class=\"col-md-4\"><a aria-hidden=\"true\" routerLink=\"/register\">User Register</a></div>\n      </div>\n      </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-login/user-login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/user-login/user-login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user-login/user-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-login/user-login.component.ts ***!
  \****************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_rest_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rest-service.service */ "./src/app/services/rest-service.service.ts");
/* harmony import */ var _services_global_variable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/global-variable.service */ "./src/app/services/global-variable.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(service, UserDetailsService, router) {
        this.service = service;
        this.UserDetailsService = UserDetailsService;
        this.router = router;
        this.loginUserfrm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.loginUser();
    };
    UserLoginComponent.prototype.loginUser = function () {
        var _this = this;
        //console.log('#######-----@@@@@', this.loginUserfrm);
        this.service.getUserVerified().subscribe(function (details) {
            _this.userDetails = details;
            console.log('user details', _this.userDetails);
            if (_this.userDetails.verified) {
                _this.UserDetailsService.login();
                _this.UserDetailsService.setloginUser = _this.userDetails;
                _this.router.navigate(['dashboard']);
            }
        });
    };
    UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.scss */ "./src/app/user-login/user-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rest_service_service__WEBPACK_IMPORTED_MODULE_3__["RestServiceService"], _services_global_variable_service__WEBPACK_IMPORTED_MODULE_4__["GlobalVariableService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/user-registration/user-registration.component.html":
/*!********************************************************************!*\
  !*** ./src/app/user-registration/user-registration.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"card\">\n        <div class=\"card-header card-header-primary\">\n          <h4 class=\"card-title\">Register</h4>\n          <p class=\"card-category\">Complete your profile</p>\n        </div>\n        <div class=\"card-body\" >\n          <form class=\"example-form\" [formGroup]=\"registerFormgrp\" (ngSubmit)=\"registerUser()\" >\n            <div class=\"col\">\n  \n              \n              <div class=\"col-md-4\">\n                  <mat-form-field style=\"width: 100%\">\n                      <input matInput placeholder=\"User Id\"  formControlName=\"userId\">\n                    </mat-form-field>\n              </div>\n              <div class=\"col-md-4\">\n                  <mat-form-field style=\"width: 100%\">\n                      <input matInput placeholder=\"Password\" formControlName=\"password\">\n                    </mat-form-field>\n              </div> \n              <div class=\"col-md-4\">\n                <mat-form-field style=\"width: 100%\">\n                    <input matInput placeholder=\"First Name\" formControlName=\"firstName\">\n                  </mat-form-field>\n            </div> \n            <div class=\"col-md-4\">\n              <mat-form-field style=\"width: 100%\">\n                  <input matInput placeholder=\"Last Name\" formControlName=\"lastName\">\n                </mat-form-field>\n            </div> \n            <div class=\"col-md-4\">\n            <mat-form-field style=\"width: 100%\">\n              <input matInput placeholder=\"Address\" formControlName=\"address\">\n            </mat-form-field>\n          </div>\n          \n  \n            </div>\n           \n              <div class=\"col-md-4 \">\n\n              <div class=\"float-left form-buttons\" style=\"text-align:right; width:102%; padding:0;\">\n                \n                \n                <!-- class=\"btn btn-success\" class=\"btn btn-danger\"<button  color=\"btn btn-success\" type=\"button\" [disabled]=\"!registerFormgrp.valid\">Submit</button> -->\n                <button type=\"submit\"  mat-raised-button color=\"primary\" [disabled]=\"!registerFormgrp.valid\">Submit</button>\n                <button type=\"reset\"  mat-raised-button color=\"warn\" >Cancel</button>\n\n              </div>\n              \n           \n            </div>\n            \n          </form>\n          \n        </div>\n  \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/user-registration/user-registration.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/user-registration/user-registration.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-buttons button {\n  margin-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1yZWdpc3RyYXRpb24vRTpcXEFydGRyb2JlLW1hc3Rlci9zcmNcXGFwcFxcdXNlci1yZWdpc3RyYXRpb25cXHVzZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVEsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyLXJlZ2lzdHJhdGlvbi91c2VyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZvcm0tYnV0dG9uc3tcbiAgICBidXR0b257XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7IFxuICAgICAgIFxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/user-registration/user-registration.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/user-registration/user-registration.component.ts ***!
  \******************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interface_user_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interface/user-details */ "./src/app/interface/user-details.ts");
/* harmony import */ var _services_rest_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest-service.service */ "./src/app/services/rest-service.service.ts");






var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent(service, router) {
        this.service = service;
        this.router = router;
        this.registerFormgrp = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.userDetails = new _interface_user_details__WEBPACK_IMPORTED_MODULE_4__["UserDetails"]();
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
    };
    UserRegistrationComponent.prototype.registerUser = function () {
        console.log("****", this.registerFormgrp);
        console.log("****", this.registerFormgrp.value.firstName);
        this.userDetails.firstName = this.registerFormgrp.value.firstName;
        this.userDetails.lastName = this.registerFormgrp.value.lastName;
        this.userDetails.address = this.registerFormgrp.value.address;
        this.userDetails.password = this.registerFormgrp.value.password;
        this.userDetails.userId = this.registerFormgrp.value.userId;
        this.service.postUserDetails(this.userDetails).subscribe(function (response) {
            console.log('kkkkkkk');
        });
    };
    UserRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-registration',
            template: __webpack_require__(/*! ./user-registration.component.html */ "./src/app/user-registration/user-registration.component.html"),
            styles: [__webpack_require__(/*! ./user-registration.component.scss */ "./src/app/user-registration/user-registration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rest_service_service__WEBPACK_IMPORTED_MODULE_5__["RestServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:8080',
    logInUrl: '/getAllUser',
    register: '/register',
    eqpDetailsUrl: '../../assets/Json/eqpDetails.JSON'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Artdrobe-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map