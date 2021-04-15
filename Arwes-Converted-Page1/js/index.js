window.__NEXT_REGISTER_PAGE("/", function () {
  var comp = (module.exports = webpackJsonp(
    [3],
    {
      115: function (e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e, t) {
          var n = {};
          for (var a in e)
            t.indexOf(a) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]));
          return n;
        }
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function l(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var u =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            },
          s = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var a = t[n];
                (a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  "value" in a && (a.writable = !0),
                  Object.defineProperty(e, a.key, a);
              }
            }
            return function (t, n, a) {
              return n && e(t.prototype, n), a && e(t, a), t;
            };
          })(),
          d = n(0),
          c = a(d),
          f = n(1),
          m = a(f),
          p = n(3),
          h = a(p),
          b = n(6),
          y = a(b),
          g = n(67),
          v = a(g),
          w = n(33),
          E = a(w),
          _ = (function (e) {
            function t() {
              var e, n, a, o;
              r(this, t);
              for (var l = arguments.length, u = Array(l), s = 0; s < l; s++)
                u[s] = arguments[s];
              return (
                (n = a = i(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(u)
                  )
                )),
                (a.onClick = function (e) {
                  var t = a.props,
                    n = t.disabled,
                    o = t.onClick,
                    r = t.animate,
                    i = t.sounds;
                  n || (o && o(e), r && i.click && i.click.play());
                }),
                (o = n),
                i(a, o)
              );
            }
            return (
              l(t, e),
              s(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props,
                      n = t.Animation,
                      a = t.Highlight,
                      r = t.Frame,
                      i = t.theme,
                      l = t.classes,
                      s = (t.sounds, t.animation),
                      d = t.animate,
                      f = t.show,
                      m = t.layer,
                      p = t.level,
                      b = t.disabled,
                      y = t.active,
                      g = t.className,
                      v = t.buttonProps,
                      w = t.children,
                      E = o(t, [
                        "Animation",
                        "Highlight",
                        "Frame",
                        "theme",
                        "classes",
                        "sounds",
                        "animation",
                        "animate",
                        "show",
                        "layer",
                        "level",
                        "disabled",
                        "active",
                        "className",
                        "buttonProps",
                        "children"
                      ]),
                      _ = (0, h.default)(l.root, g);
                    return c.default.createElement(
                      n,
                      u({ show: f, animate: d, timeout: i.animTime }, s),
                      function (t) {
                        return c.default.createElement(
                          "div",
                          u({ className: _ }, E, { onClick: e.onClick }),
                          c.default.createElement(
                            r,
                            {
                              hover: !0,
                              animate: d,
                              show: f,
                              corners: 1,
                              level: p,
                              layer: b ? "disabled" : m,
                              disabled: b,
                              active: y
                            },
                            c.default.createElement(
                              a,
                              { animate: !b, layer: m },
                              c.default.createElement(
                                "button",
                                u({ className: l.button, disabled: b }, v),
                                "function" == typeof w ? w(t) : w
                              )
                            )
                          )
                        );
                      }
                    );
                  }
                }
              ]),
              t
            );
          })(d.Component);
        (_.propTypes = {
          Animation: m.default.any.isRequired,
          Highlight: m.default.any.isRequired,
          Frame: m.default.any.isRequired,
          theme: m.default.any.isRequired,
          classes: m.default.any.isRequired,
          animate: m.default.bool,
          show: m.default.bool,
          animation: m.default.object,
          sounds: m.default.object,
          layer: m.default.oneOf([
            "primary",
            "secondary",
            "header",
            "control",
            "success",
            "alert",
            "disabled"
          ]),
          disabled: m.default.bool,
          active: m.default.bool,
          level: m.default.number,
          buttonProps: m.default.object,
          children: m.default.any
        }),
          (_.defaultProps = {
            Animation: y.default,
            Highlight: v.default,
            Frame: E.default,
            sounds: {},
            show: !0,
            layer: "control",
            level: 2
          }),
          (t.default = _);
      },
      116: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return {
              root: {
                display: "inline-block",
                position: "relative",
                lineHeight: 1,
                verticalAlign: "middle"
              },
              button: {
                position: "relative",
                zIndex: 2,
                display: "inline-block",
                margin: 0,
                border: "none",
                padding: [e.padding / 2, e.padding],
                background: "transparent",
                color: function (t) {
                  return e.color[t.disabled ? "disabled" : t.layer].base;
                },
                fontSize: 0.75 * e.typography.fontSize,
                lineHeight: 1,
                verticalAlign: "middle",
                transition: "all " + e.animTime + "ms ease-out",
                userSelect: "none",
                outline: "none",
                cursor: function (e) {
                  return e.disabled ? "auto" : "pointer";
                },
                "&:focus": { outline: "none" },
                "&::-moz-focus-inner": { border: "none" },
                "& .mdi, & .icon": {
                  lineHeight: 0,
                  fontSize: "140%",
                  verticalAlign: "middle"
                }
              }
            };
          });
      },
      117: function (e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          );
        }
        function r(e, t) {
          var n = {};
          for (var a in e)
            t.indexOf(a) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]));
          return n;
        }
        function i(e) {
          var t,
            n = e.theme,
            a = e.classes,
            i = e.animation,
            u = e.Animation,
            d = e.animate,
            c = e.show,
            f = (e.layer, e.small),
            p = e.full,
            h = e.className,
            b = r(e, [
              "theme",
              "classes",
              "animation",
              "Animation",
              "animate",
              "show",
              "layer",
              "small",
              "full",
              "className"
            ]),
            y = (0, m.default)(
              a.root,
              ((t = {}), o(t, a.isSmall, f), o(t, a.isFull, p), t),
              h
            );
          return s.default.createElement(
            u,
            l({ animate: d, show: c, timeout: n.animTime }, i),
            function (e) {
              return s.default.createElement(
                "div",
                l({ className: (0, m.default)(y, a[e.status]) }, b),
                !f &&
                  s.default.createElement("div", {
                    className: (0, m.default)(a.circle, a.circle1)
                  }),
                s.default.createElement("div", {
                  className: (0, m.default)(a.circle, a.circle2)
                })
              );
            }
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          };
        t.default = i;
        var u = n(0),
          s = a(u),
          d = n(1),
          c = a(d),
          f = n(3),
          m = a(f),
          p = n(6),
          h = a(p);
        (i.propTypes = {
          Animation: c.default.any.isRequired,
          theme: c.default.any.isRequired,
          classes: c.default.any.isRequired,
          animate: c.default.bool,
          show: c.default.bool,
          animation: c.default.object,
          layer: c.default.oneOf([
            "primary",
            "secondary",
            "header",
            "control",
            "success",
            "alert",
            "disabled"
          ]),
          small: c.default.bool,
          full: c.default.bool
        }),
          (i.defaultProps = {
            Animation: h.default,
            show: !0,
            layer: "primary"
          });
      },
      118: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return {
              root: {
                zIndex: 1e3,
                position: "relative",
                display: "block",
                minHeight: 50 + 2 * e.padding,
                transition: "all " + e.animTime + "ms ease-out",
                opacity: 1,
                "&$exiting, &$exited": { opacity: 0 }
              },
              circle: {
                position: "absolute",
                left: "50%",
                top: "50%",
                display: "block",
                borderTop: function (t) {
                  return "5px solid " + e.color[t.layer].base;
                },
                borderBottom: function (t) {
                  return "5px solid " + e.color[t.layer].base;
                },
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderRadius: "50%",
                backgroundColor: "transparent",
                boxShadow: function (t) {
                  return (
                    "0 0 " + 2 * e.shadowLength + "px " + e.color[t.layer].base
                  );
                },
                transition: "all " + e.animTime + "ms ease-out"
              },
              circle1: {
                marginLeft: -25,
                marginTop: -25,
                width: 50,
                height: 50,
                animation:
                  "arwes-loading-circle1 " +
                  3 * e.animTime +
                  "ms infinite linear"
              },
              circle2: {
                marginLeft: -15,
                marginTop: -15,
                width: 30,
                height: 30,
                animation:
                  "arwes-loading-circle2 " +
                  3 * e.animTime +
                  "ms infinite linear"
              },
              isSmall: {
                display: "inline-block",
                minWidth: 16,
                minHeight: 16,
                verticalAlign: "middle",
                "& $circle2": {
                  marginLeft: -8,
                  marginTop: -8,
                  width: 16,
                  height: 16,
                  borderTop: function (t) {
                    return "3px solid " + e.color[t.layer].base;
                  },
                  borderBottom: function (t) {
                    return "3px solid " + e.color[t.layer].base;
                  },
                  borderLeft: "3px solid transparent",
                  borderRight: "3px solid transparent"
                }
              },
              isFull: {
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              },
              entering: {},
              entered: {},
              exiting: {},
              exited: {},
              "@keyframes arwes-loading-circle1": {
                "0%": { transform: "rotate(160deg)", opacity: 0 },
                "50%": { transform: "rotate(145deg)", opacity: 1 },
                "100%": { transform: "rotate(-320deg)", opacity: 0 }
              },
              "@keyframes arwes-loading-circle2": {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" }
              }
            };
          });
      },
      486: function (e, t, n) {
        e.exports = n(487);
      },
      487: function (e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function i(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var l = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var a = t[n];
                (a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  "value" in a && (a.writable = !0),
                  Object.defineProperty(e, a.key, a);
              }
            }
            return function (t, n, a) {
              return n && e(t.prototype, n), a && e(t, a), t;
            };
          })(),
          u = n(0),
          s = a(u),
          d = n(2),
          c = a(d),
          f = n(45),
          m = n(64),
          p = a(m),
          h = n(65),
          b = a(h),
          y = n(44),
          g = a(y),
          v = n(46),
          w = a(v),
          E = n(20),
          _ = a(E),
          k = n(68),
          O = a(k),
          x = n(112),
          j = a(x),
          P = n(69),
          L = a(P),
          T = n(66),
          A = a(T),
          N = n(102),
          R = n(27),
          S = a(R),
          M = n(113),
          C = a(M),
          F = n(114),
          H = a(F),
          q = function (e) {
            return {
              root: {
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                flexDirection: "column",
                "& h1": { margin: [0, 0, e.margin / 2], fontSize: 40 },
                "& p": { margin: [0, 0, e.margin], maxWidth: 500 },
                "& $option + $option": { marginLeft: e.padding / 2 }
              },
              main: { flex: 1, display: "flex" },
              content: {
                margin: "auto",
                padding: [0, e.padding],
                textAlign: "center"
              },
              option: { display: "inline-block" },
              footer: { opacity: e.alpha / 2 },
              footerContent: {
                display: "flex",
                padding: e.padding / 2,
                fontSize: "80%"
              },
              footerLeft: { flex: "1 1 auto" },
              footerRight: {
                flex: "1 1 auto",
                textAlign: "right",
                "& a": { textAlign: "left" }
              }
            };
          },
          z = (function (e) {
            function t() {
              o(this, t);
              var e = r(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              );
              return (
                (e.onLink = function () {
                  e.setState({ show: !1 });
                }),
                (e.state = { show: !1, loaded: !1 }),
                (e.loader = (0, p.default)()),
                (e.responsive = (0, b.default)({
                  getTheme: function () {
                    return e.props.theme;
                  }
                })),
                e
              );
            }
            return (
              i(t, e),
              l(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    (window.document.title = (0, N.getTitle)(
                      window.location.pathname
                    )),
                      this.startLoading();
                  }
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props,
                      n = t.classes,
                      a = t.resources,
                      o = this.state,
                      r = o.show,
                      i = o.loaded;
                    return s.default.createElement(
                      "div",
                      null,
                      s.default.createElement(L.default, {
                        full: !0,
                        animate: !0,
                        show: !r && !i,
                        animation: { unmountOnExit: !0 }
                      }),
                      s.default.createElement(
                        g.default,
                        {
                          animate: !0,
                          show: r,
                          showResources: r,
                          background: a.background,
                          pattern: a.pattern
                        },
                        function (t) {
                          return s.default.createElement(
                            w.default,
                            { className: n.root },
                            s.default.createElement(
                              "div",
                              { className: n.main },
                              s.default.createElement(
                                "div",
                                { className: n.content },
                                s.default.createElement(j.default, {
                                  animate: !0,
                                  show: t.entered,
                                  layer: "header"
                                }),
                                s.default.createElement(
                                  "header",
                                  null,
                                  s.default.createElement(
                                    "h1",
                                    null,
                                    s.default.createElement(
                                      _.default,
                                      { animate: !0, show: t.entered },
                                      "UNSC"
                                    )
                                  )
                                ),
                                s.default.createElement(
                                  "main",
                                  null,
                                  s.default.createElement(
                                    "p",
                                    { style: { marginBottom: "10px" } },
                                    s.default.createElement(
                                      _.default,
                                      { animate: !0, show: t.entered },
                                      "UNSC SECURE UPLINK & EMPLOYEE PORTAL LOGIN TO BEGIN CONNECTION"
                                    )
                                  ),
                                  s.default.createElement(
                                    "p",
                                    null,
                                    s.default.createElement(
                                      "small",
                                      null,
                                      s.default.createElement(
                                        "a",
                                        {
                                          href:
                                            "https://docs.google.com/document/d/e/2PACX-1vRXy7srcSVEnhGYnDPxOM9DJhzUwD-njY68NgfIsreaBvX5wwUZcSHAHVWn_opm7L06mmaAgaNt9HMO/pub"
                                        },
                                        s.default.createElement(
                                          _.default,
                                          { animate: !0, show: t.entered },
                                          "*ALL [SC-3] EMPLOYEES MUST VERIFY CREDENTIALS HERE*"
                                        )
                                      )
                                    )
                                  )
                                ),
                                s.default.createElement(
                                  "nav",
                                  null,
                                  s.default.createElement(
                                    S.default,
                                    {
                                      className: n.option,
                                      href: "/Docs",
                                      onLink: e.onLink
                                    },
                                    s.default.createElement(
                                      O.default,
                                      { animate: !0, show: t.entered },
                                      function (e) {
                                        return s.default.createElement(
                                          _.default,
                                          { animate: !0, show: e.entered },
                                          "[SC-3]"
                                        );
                                      }
                                    )
                                  ),
                                  " ",
                                  s.default.createElement(
                                    S.default,
                                    {
                                      className: n.option,
                                      href: "/api",
                                      onLink: e.onLink
                                    },
                                    s.default.createElement(
                                      O.default,
                                      { animate: !0, show: t.entered },
                                      function (e) {
                                        return s.default.createElement(
                                          _.default,
                                          { animate: !0, show: e.entered },
                                          "[SC-2]"
                                        );
                                      }
                                    )
                                  ),
                                  " ",
                                  s.default.createElement(
                                    S.default,
                                    {
                                      className: n.option,
                                      href: "/play",
                                      onLink: e.onLink
                                    },
                                    s.default.createElement(
                                      O.default,
                                      { animate: !0, show: t.entered },
                                      function (e) {
                                        return s.default.createElement(
                                          _.default,
                                          { animate: !0, show: e.entered },
                                          "[SC-1]"
                                        );
                                      }
                                    )
                                  )
                                )
                              )
                            ),
                            s.default.createElement(
                              "footer",
                              { className: n.footer },
                              s.default.createElement(
                                "div",
                                { className: n.footerContent },
                                s.default.createElement(
                                  "div",
                                  { className: n.footerLeft },
                                  s.default.createElement(C.default, {
                                    show: t.entered,
                                    onLink: e.onLink
                                  })
                                ),
                                s.default.createElement(
                                  "div",
                                  { className: n.footerRight },
                                  s.default.createElement(H.default, {
                                    show: t.entered,
                                    onLink: e.onLink
                                  })
                                )
                              )
                            )
                          );
                        }
                      )
                    );
                  }
                },
                {
                  key: "startLoading",
                  value: function () {
                    var e = this,
                      t = this.responsive.get(),
                      n = (0, f.getResponsiveResource)(
                        this.props.resources.background,
                        t
                      );
                    this.loader
                      .load({ images: [n] }, { timeout: 5e3 })
                      .then(
                        function () {},
                        function () {}
                      )
                      .then(function () {
                        return e.setState({ show: !0, loaded: !0 });
                      });
                  }
                }
              ]),
              t
            );
          })(s.default.Component);
        t.default = (0, A.default)((0, c.default)(q)(z));
      },
      68: function (e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = n(2),
          r = a(o),
          i = n(21),
          l = a(i),
          u = n(115),
          s = a(u),
          d = n(116),
          c = a(d);
        t.default = (0, r.default)(c.default)((0, l.default)()(s.default));
      },
      69: function (e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = n(2),
          r = a(o),
          i = n(117),
          l = a(i),
          u = n(118),
          s = a(u);
        t.default = (0, r.default)(s.default)(l.default);
      }
    },
    [486]
  ));
  return { page: comp.default };
});
