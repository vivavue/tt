"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Houses_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Houses.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Houses.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      houses: [],
      bedrooms: [],
      selectedBedroom: "",
      bathrooms: [],
      selectedBathroom: "",
      storeys: [],
      selectedStorey: "",
      garages: [],
      selectedGarage: "",
      loading: false,
      showData: false,
      search: "",
      prices: [200000, 600000],
      marks: {
        0: "0",
        100000: "100,000",
        200000: "200,000",
        300000: "300,000",
        400000: "400,000",
        500000: "500,000",
        600000: "600,000",
        700000: "700,000",
        800000: "800,000",
        900000: "900,000",
        1000000: "1000,000"
      },
      sort_direction: "desc",
      sort_field: "name"
    };
  },
  watch: {
    search: function search(value) {
      return this.getHouses();
    },
    prices: function prices(startPrice, endPrice) {
      return this.getHouses();
    },
    selectedBedroom: function selectedBedroom(value) {
      return this.getHouses();
    },
    selectedBathroom: function selectedBathroom(value) {
      return this.getHouses();
    },
    selectedStorey: function selectedStorey(value) {
      return this.getHouses();
    },
    selectedGarage: function selectedGarage(valus) {
      return this.getHouses();
    }
  },
  methods: {
    change_sort: function change_sort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction == "asc" ? "desc" : "asc";
      } else {
        this.sort_field = field;
      }

      this.getHouses();
    },
    getHouses: function getHouses() {
      var _this = this;

      this.loading = true;
      this.showData = false;
      this.axios.get("/api/houses?q=" + this.search + "&startPrice=" + this.prices[0] + "&endPrice=" + this.prices[1] + "&selectedBedroom=" + this.selectedBedroom + "&selectedBathroom=" + this.selectedBathroom + "&selectedStorey=" + this.selectedStorey + "&selectedGarage=" + this.selectedGarage + "&sort_direction=" + this.sort_direction + "&sort_field" + this.sort_field).then(function (response) {
        _this.showData = response.data.length == 0;
        _this.houses = response.data;
        _this.loading = false;
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.axios.get("/api/bedrooms").then(function (response) {
      return _this2.bedrooms = response.data;
    });
    this.axios.get("/api/bathrooms").then(function (response) {
      return _this2.bathrooms = response.data;
    });
    this.axios.get("/api/storeys").then(function (response) {
      return _this2.storeys = response.data;
    });
    this.axios.get("/api/garages").then(function (response) {
      return _this2.garages = response.data;
    });
    this.getHouses();
  }
});

/***/ }),

/***/ "./resources/js/pages/Houses.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Houses.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Houses_vue_vue_type_template_id_14698e9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Houses.vue?vue&type=template&id=14698e9c& */ "./resources/js/pages/Houses.vue?vue&type=template&id=14698e9c&");
/* harmony import */ var _Houses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Houses.vue?vue&type=script&lang=js& */ "./resources/js/pages/Houses.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Houses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Houses_vue_vue_type_template_id_14698e9c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Houses_vue_vue_type_template_id_14698e9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Houses.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Houses.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Houses.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Houses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Houses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Houses.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Houses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Houses.vue?vue&type=template&id=14698e9c&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Houses.vue?vue&type=template&id=14698e9c& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Houses_vue_vue_type_template_id_14698e9c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Houses_vue_vue_type_template_id_14698e9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Houses_vue_vue_type_template_id_14698e9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Houses.vue?vue&type=template&id=14698e9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Houses.vue?vue&type=template&id=14698e9c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Houses.vue?vue&type=template&id=14698e9c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Houses.vue?vue&type=template&id=14698e9c& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "my-3 col-md-2" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.search,
              expression: "search",
            },
          ],
          attrs: { type: "text", placeholder: "Name search..." },
          domProps: { value: _vm.search },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.search = $event.target.value
            },
          },
        }),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "my-3 col-md-10" },
        [
          _c("el-slider", {
            attrs: { range: "", min: 0, max: 1000000, marks: _vm.marks },
            model: {
              value: _vm.prices,
              callback: function ($$v) {
                _vm.prices = $$v
              },
              expression: "prices",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-12" }, [
        !_vm.loading && !_vm.showData
          ? _c("table", { staticClass: "table table-bordered" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", [
                    _c(
                      "a",
                      {
                        attrs: { href: "#" },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.change_sort("name")
                          },
                        },
                      },
                      [_vm._v("Name")]
                    ),
                    _vm._v(" "),
                    _vm.sort_direction == "desc" && _vm.sort_field == "name"
                      ? _c("span", [_vm._v("↑")])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.sort_direction == "asc" && _vm.sort_field == "name"
                      ? _c("span", [_vm._v("↓")])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Price")]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("\n              Bedrooms\n              "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectedBedroom,
                            expression: "selectedBedroom",
                          },
                        ],
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.selectedBedroom = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "", selected: "" } }, [
                          _vm._v("all qty."),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.bedrooms, function (bedroom) {
                          return _c(
                            "option",
                            {
                              key: bedroom.id,
                              domProps: { value: bedroom.id },
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(bedroom.quantity) +
                                  "\n                "
                              ),
                            ]
                          )
                        }),
                      ],
                      2
                    ),
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("\n              Bathrooms\n              "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectedBathroom,
                            expression: "selectedBathroom",
                          },
                        ],
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.selectedBathroom = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "", selected: "" } }, [
                          _vm._v("all qty."),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.bathrooms, function (bathroom) {
                          return _c(
                            "option",
                            {
                              key: bathroom.id,
                              domProps: { value: bathroom.id },
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(bathroom.quantity) +
                                  "\n                "
                              ),
                            ]
                          )
                        }),
                      ],
                      2
                    ),
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("\n              Storeys\n              "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectedStorey,
                            expression: "selectedStorey",
                          },
                        ],
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.selectedStorey = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "", selected: "" } }, [
                          _vm._v("all qty."),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.storeys, function (storey) {
                          return _c(
                            "option",
                            { key: storey.id, domProps: { value: storey.id } },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(storey.quantity) +
                                  "\n                "
                              ),
                            ]
                          )
                        }),
                      ],
                      2
                    ),
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("\n              Garages\n              "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectedGarage,
                            expression: "selectedGarage",
                          },
                        ],
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.selectedGarage = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "", selected: "" } }, [
                          _vm._v("all qty."),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.garages, function (garage) {
                          return _c(
                            "option",
                            { key: garage.id, domProps: { value: garage.id } },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(garage.quantity) +
                                  "\n                "
                              ),
                            ]
                          )
                        }),
                      ],
                      2
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.houses, function (house) {
                  return _c("tr", { key: house.id }, [
                    _c("td", [_vm._v(_vm._s(house.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(house.price))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(house.bedroom.quantity))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(house.bathroom.quantity))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(house.storey.quantity))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(house.garage.quantity))]),
                  ])
                }),
                0
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.loading
          ? _c("div", { staticClass: "text-center mt-5 mb-5" }, [
              _c("div", {
                staticClass: "spinner-border text-primary",
                attrs: { role: "status" },
              }),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.showData
          ? _c("div", { staticClass: "text-center mt-5 mb-5" }, [
              _c("h2", [_vm._v("No data")]),
            ])
          : _vm._e(),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);