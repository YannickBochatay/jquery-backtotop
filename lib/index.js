"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _jqueryGenericPlugin = require("jquery-generic-plugin");

var _jqueryGenericPlugin2 = _interopRequireDefault(_jqueryGenericPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Affichage d'un élément pour revenir en haut de page
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Yannick Bochatay
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BackToTop = function (_Plugin) {
    _inherits(BackToTop, _Plugin);

    function BackToTop(el, opt) {
        _classCallCheck(this, BackToTop);

        var _this = _possibleConstructorReturn(this, (BackToTop.__proto__ || Object.getPrototypeOf(BackToTop)).call(this));

        _this.checkScroll = _this.checkScroll.bind(_this);
        _this.backToTop = _this.backToTop.bind(_this);

        _this.$el = (0, _jquery2.default)(el);

        _this.displayPoint = 300;

        _this.content = window;

        if (opt) _this.set(opt);

        return _this;
    }

    /**
     * Retour en haut de page
     * @returns {undefined}
     */


    _createClass(BackToTop, [{
        key: "backToTop",
        value: function backToTop() {

            (0, _jquery2.default)(this.content === window ? "html,body" : this.content).animate({ scrollTop: 0 }, 300);
        }

        /**
         * Teste si on a dépassé le point d'affichage de l'élément
         * @returns {Boolean} true si point dépassé
         */

    }, {
        key: "isScrolled",
        value: function isScrolled() {

            return (0, _jquery2.default)(this.content).scrollTop() > this.displayPoint;
        }
        /**
         * Affiche ou masque l'élément en fonction du scroll
         * @returns {undefined}
         */

    }, {
        key: "checkScroll",
        value: function checkScroll() {

            this.$el["fade" + (this.isScrolled() ? "In" : "Out")]();
        }
        /**
         * Active le plugin
         * @returns {undefined}
         */

    }, {
        key: "enable",
        value: function enable() {

            (0, _jquery2.default)(this.content).on("scroll", this.checkScroll);

            this.$el.on("click", this.backToTop);

            this.$el[this.isScrolled() ? "show" : "hide"]();
        }
        /**
         * Désactive le plugin
         * @returns {undefined}
         */

    }, {
        key: "destroy",
        value: function destroy() {

            (0, _jquery2.default)(this.content).off("scroll", this.checkScroll);

            this.$el.off("click", this.backToTop);
        }
    }]);

    return BackToTop;
}(_jqueryGenericPlugin2.default);

// transformation du constructeur en plugin jQuery


exports.default = BackToTop;
_jqueryGenericPlugin2.default.bind2jQuery(BackToTop, _jquery2.default);