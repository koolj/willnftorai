/*
Licensed under Dathoc.NET license, all rights reserved 2020.
Created by koolj@
Jun 14, 2020.
*/
/*eslint-disable*/
/*jshint ignore:start*/
(function() {
  function ga(f, m) {
      f.prototype = sb(m.prototype);
      f.prototype.constructor = f;
      f.base = m.prototype
  }

  function sb(f) {
      function m() {}
      m.prototype = f;
      return new m
  }

  function eb(f, m, aa) {
      "millisecond" === aa ? f.setMilliseconds(f.getMilliseconds() + 1 * m) : "second" === aa ? f.setSeconds(f.getSeconds() + 1 * m) : "minute" === aa ? f.setMinutes(f.getMinutes() + 1 * m) : "hour" === aa ? f.setHours(f.getHours() + 1 * m) : "day" === aa ? f.setDate(f.getDate() + 1 * m) : "week" === aa ? f.setDate(f.getDate() + 7 * m) : "month" === aa ? f.setMonth(f.getMonth() + 1 * m) : "year" ===
          aa && f.setFullYear(f.getFullYear() + 1 * m);
      return f
  }

  function oa(f, m) {
      var aa = !1;
      0 > f && (aa = !0, f *= -1);
      f = "" + f;
      for (m = m ? m : 1; f.length < m;) f = "0" + f;
      return aa ? "-" + f : f
  }

  function Ra(f) {
      if (!f) return f;
      f = f.replace(/^\s\s*/, "");
      for (var m = /\s/, aa = f.length; m.test(f.charAt(--aa)););
      return f.slice(0, aa + 1)
  }

  function Ha(f) {
      f.roundRect = function(f, aa, n, x, E, A, v, y) {
          v && (this.fillStyle = v);
          y && (this.strokeStyle = y);
          "undefined" === typeof E && (E = 5);
          this.lineWidth = A;
          this.beginPath();
          this.moveTo(f + E, aa);
          this.lineTo(f + n - E, aa);
          this.quadraticCurveTo(f +
              n, aa, f + n, aa + E);
          this.lineTo(f + n, aa + x - E);
          this.quadraticCurveTo(f + n, aa + x, f + n - E, aa + x);
          this.lineTo(f + E, aa + x);
          this.quadraticCurveTo(f, aa + x, f, aa + x - E);
          this.lineTo(f, aa + E);
          this.quadraticCurveTo(f, aa, f + E, aa);
          this.closePath();
          v && this.fill();
          y && 0 < A && this.stroke()
      }
  }

  function Za(f, m) {
      return f - m
  }

  function fb(f, m, n) {
      if (f && m && n) {
          n = n + "." + m;
          var x = "image/" + m;
          f = f.toDataURL(x);
          var Ca = !1,
              E = document.createElement("a");
          E.download = n;
          E.href = f;
          if ("undefined" !== typeof Blob && new Blob) {
              for (var A = f.replace(/^data:[a-z\/]*;base64,/,
                      ""), A = atob(A), v = new ArrayBuffer(A.length), v = new Uint8Array(v), y = 0; y < A.length; y++) v[y] = A.charCodeAt(y);
              m = new Blob([v.buffer], {
                  type: "image/" + m
              });
              try {
                  window.navigator.msSaveBlob(m, n), Ca = !0
              } catch (O) {
                  E.dataset.downloadurl = [x, E.download, E.href].join(":"), E.href = window.URL.createObjectURL(m)
              }
          }
          if (!Ca) try {
              event = document.createEvent("MouseEvents"), event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), E.dispatchEvent ? E.dispatchEvent(event) : E.fireEvent && E.fireEvent("onclick")
          } catch (G) {
              m = window.open(),
                  m.document.write("<img src='" + f + "'></img><div>Please right click on the image and save it to your device</div>"), m.document.close()
          }
      }
  }

  function N(f) {
      var m = ((f & 16711680) >> 16).toString(16),
          n = ((f & 65280) >> 8).toString(16);
      f = ((f & 255) >> 0).toString(16);
      m = 2 > m.length ? "0" + m : m;
      n = 2 > n.length ? "0" + n : n;
      f = 2 > f.length ? "0" + f : f;
      return "#" + m + n + f
  }

  function tb(f, m) {
      var n = this.length >>> 0,
          x = Number(m) || 0,
          x = 0 > x ? Math.ceil(x) : Math.floor(x);
      for (0 > x && (x += n); x < n; x++)
          if (x in this && this[x] === f) return x;
      return -1
  }

  function n(f) {
      return null ===
          f || "undefined" === typeof f
  }

  function Da(f) {
      f.indexOf || (f.indexOf = tb);
      return f
  }

  function ub(f) {
      if (fa.fSDec) f[ua("`eeDwdouMhrudods")](ua("e`u`@ohl`uhnoHuds`uhnoDoe"), function() {
          fa._fTWm && fa._fTWm(f)
      })
  }

  function gb(f, m, n) {
      n = n || "normal";
      var x = f + "_" + m + "_" + n,
          Ca = hb[x];
      if (isNaN(Ca)) {
          try {
              f = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + f + "; font-size:" + m + "px; font-weight:" + n + ";";
              if (!Ea) {
                  var E = document.body;
                  Ea = document.createElement("span");
                  Ea.innerHTML = "";
                  var A = document.createTextNode("Mpgyi");
                  Ea.appendChild(A);
                  E.appendChild(Ea)
              }
              Ea.style.display = "";
              Ea.setAttribute("style", f);
              Ca = Math.round(Ea.offsetHeight);
              Ea.style.display = "none"
          } catch (v) {
              Ca = Math.ceil(1.1 * m)
          }
          Ca = Math.max(Ca, m);
          hb[x] = Ca
      }
      return Ca
  }

  function M(f, m) {
      var n = [];
      if (n = {
              solid: [],
              shortDash: [3, 1],
              shortDot: [1, 1],
              shortDashDot: [3, 1, 1, 1],
              shortDashDotDot: [3, 1, 1, 1, 1, 1],
              dot: [1, 2],
              dash: [4, 2],
              dashDot: [4, 2, 1, 2],
              longDash: [8, 2],
              longDashDot: [8, 2, 1, 2],
              longDashDotDot: [8, 2, 1, 2, 1, 2]
          } [f || "solid"])
          for (var x =
                  0; x < n.length; x++) n[x] *= m;
      else n = [];
      return n
  }

  function y(f, m, aa, x, v) {
      x = x || [];
      v = n(v) ? vb ? {
          passive: !1,
          capture: !1
      } : !1 : v;
      x.push([f, m, aa, v]);
      return f.addEventListener ? (f.addEventListener(m, aa, v), aa) : f.attachEvent ? (x = function(m) {
          m = m || window.event;
          m.preventDefault = m.preventDefault || function() {
              m.returnValue = !1
          };
          m.stopPropagation = m.stopPropagation || function() {
              m.cancelBubble = !0
          };
          aa.call(f, m)
      }, f.attachEvent("on" + m, x), x) : !1
  }

  function ib(f, m, n, x) {
      x = x || !1;
      if (f.removeEventListener) f.removeEventListener(m, n, x);
      else if (f.detachEvent) f.detachEvent("on" +
          m, n);
      else return !1
  }

  function jb(f, m) {
      if ("createEvent" in document) {
          var n = document.createEvent("HTMLEvents");
          n.initEvent(m, !1, !0);
          f.dispatchEvent(n)
      } else f.fireEvent("on" + m)
  }

  function kb(f) {
      if (f._menuButton) f.exportEnabled ? Ua(f._menuButton) : ya(f._menuButton);
      else if (f.exportEnabled && x) {
          var m = !1;
          f._menuButton = document.createElement("button");
          Ba(f, f._menuButton, "menu");
          f._toolBar.appendChild(f._menuButton);
          y(f._menuButton, "touchstart", function(f) {
              m = !0
          }, f.allDOMEventHandlers);
          y(f._menuButton, "click", function() {
              "none" !==
              f._dropdownMenu.style.display || f._dropDownCloseTime && 500 >= (new Date).getTime() - f._dropDownCloseTime.getTime() || (f._dropdownMenu.style.display = "block", f._menuButton.blur(), f._dropdownMenu.focus())
          }, f.allDOMEventHandlers, !0);
          y(f._menuButton, "mouseover", function() {
                  m || (pa(f._menuButton, {
                      backgroundColor: f.toolbar.backgroundColorOnHover,
                      color: f.toolbar.fontColorOnHover
                  }), 0 >= navigator.userAgent.search("MSIE") && pa(f._menuButton.childNodes[0], {
                      WebkitFilter: "invert(100%)",
                      filter: "invert(100%)"
                  }))
              }, f.allDOMEventHandlers,
              !0);
          y(f._menuButton, "mouseout", function() {
              m || (pa(f._menuButton, {
                  backgroundColor: f.toolbar.backgroundColor,
                  color: f.toolbar.fontColor
              }), 0 >= navigator.userAgent.search("MSIE") && pa(f._menuButton.childNodes[0], {
                  WebkitFilter: "invert(0%)",
                  filter: "invert(0%)"
              }))
          }, f.allDOMEventHandlers, !0)
      }
      if (!f._dropdownMenu && f.exportEnabled && x) {
          m = !1;
          f._dropdownMenu = document.createElement("div");
          f._dropdownMenu.setAttribute("tabindex", -1);
          var n = -1 !== f.theme.indexOf("dark") ? "black" : "#888888";
          f._dropdownMenu.style.cssText = "position: absolute; z-index: 1; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 0px;top: 25px;min-width: 120px;outline: 0;font-size: 14px; font-family: Arial, Helvetica, sans-serif;padding: 5px 0px 5px 0px;text-align: left;line-height: 10px;background-color:" +
              f.toolbar.backgroundColor + ";box-shadow: 2px 2px 10px " + n;
          f._dropdownMenu.style.display = "none";
          f._toolBar.appendChild(f._dropdownMenu);
          y(f._dropdownMenu, "blur", function() {
              ya(f._dropdownMenu);
              f._dropDownCloseTime = new Date
          }, f.allDOMEventHandlers, !0);
          n = document.createElement("div");
          n.style.cssText = "padding: 12px 8px 12px 8px";
          n.innerHTML = f._cultureInfo.printText;
          n.style.backgroundColor = f.toolbar.backgroundColor;
          n.style.color = f.toolbar.fontColor;
          f._dropdownMenu.appendChild(n);
          y(n, "touchstart", function(f) {
              m = !0
          }, f.allDOMEventHandlers);
          y(n, "mouseover", function() {
              m || (this.style.backgroundColor = f.toolbar.backgroundColorOnHover, this.style.color = f.toolbar.fontColorOnHover)
          }, f.allDOMEventHandlers, !0);
          y(n, "mouseout", function() {
              m || (this.style.backgroundColor = f.toolbar.backgroundColor, this.style.color = f.toolbar.fontColor)
          }, f.allDOMEventHandlers, !0);
          y(n, "click", function() {
              f.print();
              ya(f._dropdownMenu)
          }, f.allDOMEventHandlers, !0);
          n = document.createElement("div");
          n.style.cssText = "padding: 12px 8px 12px 8px";
          n.innerHTML =
              f._cultureInfo.saveJPGText;
          n.style.backgroundColor = f.toolbar.backgroundColor;
          n.style.color = f.toolbar.fontColor;
          f._dropdownMenu.appendChild(n);
          y(n, "touchstart", function(f) {
              m = !0
          }, f.allDOMEventHandlers);
          y(n, "mouseover", function() {
              m || (this.style.backgroundColor = f.toolbar.backgroundColorOnHover, this.style.color = f.toolbar.fontColorOnHover)
          }, f.allDOMEventHandlers, !0);
          y(n, "mouseout", function() {
                  m || (this.style.backgroundColor = f.toolbar.backgroundColor, this.style.color = f.toolbar.fontColor)
              }, f.allDOMEventHandlers,
              !0);
          y(n, "click", function() {
              f.exportChart({
                  format: "jpeg",
                  fileName: f.exportFileName
              });
              ya(f._dropdownMenu)
          }, f.allDOMEventHandlers, !0);
          n = document.createElement("div");
          n.style.cssText = "padding: 12px 8px 12px 8px";
          n.innerHTML = f._cultureInfo.savePNGText;
          n.style.backgroundColor = f.toolbar.backgroundColor;
          n.style.color = f.toolbar.fontColor;
          f._dropdownMenu.appendChild(n);
          y(n, "touchstart", function(f) {
              m = !0
          }, f.allDOMEventHandlers);
          y(n, "mouseover", function() {
              m || (this.style.backgroundColor = f.toolbar.backgroundColorOnHover,
                  this.style.color = f.toolbar.fontColorOnHover)
          }, f.allDOMEventHandlers, !0);
          y(n, "mouseout", function() {
              m || (this.style.backgroundColor = f.toolbar.backgroundColor, this.style.color = f.toolbar.fontColor)
          }, f.allDOMEventHandlers, !0);
          y(n, "click", function() {
              f.exportChart({
                  format: "png",
                  fileName: f.exportFileName
              });
              ya(f._dropdownMenu)
          }, f.allDOMEventHandlers, !0)
      }
  }

  function lb(f, m, n) {
      f *= ka;
      m *= ka;
      f = n.getImageData(f, m, 2, 2).data;
      m = !0;
      for (n = 0; 4 > n; n++)
          if (f[n] !== f[n + 4] | f[n] !== f[n + 8] | f[n] !== f[n + 12]) {
              m = !1;
              break
          } return m ? f[0] <<
          16 | f[1] << 8 | f[2] : 0
  }

  function qa(f, m, n) {
      return f in m ? m[f] : n[f]
  }

  function Va(f, m, n) {
      if (x && mb) {
          var ha = f.getContext("2d");
          Wa = ha.webkitBackingStorePixelRatio || ha.mozBackingStorePixelRatio || ha.msBackingStorePixelRatio || ha.oBackingStorePixelRatio || ha.backingStorePixelRatio || 1;
          ka = $a / Wa;
          f.width = m * ka;
          f.height = n * ka;
          $a !== Wa && (f.style.width = m + "px", f.style.height = n + "px", ha.scale(ka, ka))
      } else f.width = m, f.height = n
  }

  function wb(f) {
      if (!xb) {
          var m = !1,
              n = !1;

          /* 
"undefined"===typeof $.Chart.creditHref?(f.creditHref=ua("iuuqr;..b`ow`rkr/bnl."),
f.creditText=ua("B`ow`rKR/bnl")):(m=f.updateOption("creditText"),n=f.updateOption("creditHref"));
*/
          if (f.creditHref && f.creditText) {
              f._creditLink || (f._creditLink = document.createElement("a"), f._creditLink.setAttribute("class", "canvasjs-chart-credit"), f._creditLink.setAttribute("title", "Dathoc.Net Charts"), f._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:2px;top:" + (f.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),
                  f._creditLink.setAttribute("tabIndex", -1), f._creditLink.setAttribute("target", "_blank"));


              if (0 === f.renderCount || m || n) f._creditLink.setAttribute("href", f.creditHref), f._creditLink.innerHTML = f.creditText;
              f._creditLink && f.creditHref && f.creditText ? (f._creditLink.parentElement || f._canvasJSContainer.appendChild(f._creditLink), f._creditLink.style.top = f.height - 14 + "px") : f._creditLink.parentElement && f._canvasJSContainer.removeChild(f._creditLink)
          }
      }
  }

  function ra(f, m) {
      Na && (this.canvasCount |= 0, window.console.log(++this.canvasCount));


      var n = document.createElement("canvas");
      n.setAttribute("class", "canvasjs-chart-canvas");
      Va(n, f, m);
      x || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(n);
      return n
  }

  function pa(f, m) {
      for (var n in m) f.style[n] = m[n]
  }

  function Ba(f, m, n) {
      m.getAttribute("state") || (m.style.backgroundColor = f.toolbar.backgroundColor, m.style.color = f.toolbar.fontColor, m.style.border = "none", pa(m, {
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none"
      }));
      m.getAttribute("state") !==
          n && (m.setAttribute("state", n), m.setAttribute("type", "button"), pa(m, {
              padding: "5px 12px",
              cursor: "pointer",
              "float": "left",
              width: "40px",
              height: "25px",
              outline: "0px",
              verticalAlign: "baseline",
              lineHeight: "0"
          }), m.setAttribute("title", f._cultureInfo[n + "Text"]), m.innerHTML = "<img style='height:95%; pointer-events: none;' src='" + yb[n].image + "' alt='" + f._cultureInfo[n + "Text"] + "' />")
  }

  function Ua() {
      for (var f = null, m = 0; m < arguments.length; m++) f = arguments[m], f.style && (f.style.display = "inline")
  }

  function ya() {
      for (var f =
              null, m = 0; m < arguments.length; m++)(f = arguments[m]) && f.style && (f.style.display = "none")
  }

  function ab(f) {
      if (null === f || "object" !== typeof f) return f;
      if (f instanceof Date) return new Date(f.getTime());
      Array.isArray || (Array.isArray = function(f) {
          return "[object Array]" === Object.prototype.toString.call(f)
      });
      if (Array.isArray(f)) {
          for (var m = [], n = 0; n < f.length; n++) m.push(ab(f[n]));
          return m
      }
      m = new f.constructor;
      for (n in f) f.hasOwnProperty(n) && (m[n] = ab(f[n]));
      return m
  }



  function Xa(f, m, n, x, v) {
      if (null === f || "undefined" === typeof f) return "undefined" ===
          typeof n ? m : n;
      f = parseFloat(f.toString()) * (0 <= f.toString().indexOf("%") ? m / 100 : 1);
      "undefined" !== typeof x && (f = Math.min(x, f), "undefined" !== typeof v && (f = Math.max(v, f)));
      return !isNaN(f) && f <= m && 0 <= f ? f : "undefined" === typeof n ? m : n
  }


  function S(f, m, x, ha, v) {
      this._defaultsKey = f;
      this._themeOptionsKey = m;
      this._index = ha;
      this.parent = v;
      this._eventListeners = [];
      f = {};
      this.theme && n(this.parent) && n(m) && n(ha) ? f = n(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions &&
          this.parent.themeOptions[m]) && (null === ha ? f = this.parent.themeOptions[m] : 0 < this.parent.themeOptions[m].length && (ha = Math.min(this.parent.themeOptions[m].length - 1, ha), f = this.parent.themeOptions[m][ha]));
      this.themeOptions = f;
      this.options = x ? x : {
          _isPlaceholder: !0
      };
      this.setOptions(this.options, f)
  }

  function La(f, m, n, x, v) {
      "undefined" === typeof v && (v = 0);
      this._padding = v;
      this._x1 = f;
      this._y1 = m;
      this._x2 = n;
      this._y2 = x;
      this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
  }

  function la(f,
      m) {
      la.base.constructor.call(this, "TextBlock", null, m, null, null);
      this.ctx = f;
      this._isDirty = !0;
      this._wrappedText = null;
      this._initialize()
  }

  function Ya(f, m) {
      Ya.base.constructor.call(this, "Toolbar", "toolbar", m, null, f);
      this.chart = f;
      this.canvas = f.canvas;
      this.ctx = this.chart.ctx;
      this.optionsName = "toolbar"
  }

  function Ia(f, m) {
      Ia.base.constructor.call(this, "Title", "title", m, null, f);
      this.chart = f;
      this.canvas = f.canvas;
      this.ctx = this.chart.ctx;
      this.optionsName = "title";
      if (n(this.options.margin) && f.options.subtitles)
          for (var x =
                  f.options.subtitles, ha = 0; ha < x.length; ha++)
              if ((n(x[ha].horizontalAlign) && "center" === this.horizontalAlign || x[ha].horizontalAlign === this.horizontalAlign) && (n(x[ha].verticalAlign) && "top" === this.verticalAlign || x[ha].verticalAlign === this.verticalAlign) && !x[ha].dockInsidePlotArea === !this.dockInsidePlotArea) {
                  this.margin = 0;
                  break
              }
      "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
      this.height = this.width = null;
      this.bounds = {
          x1: null,
          y1: null,
          x2: null,
          y2: null
      }
  }

  function Oa(f,
      m, n) {
      Oa.base.constructor.call(this, "Subtitle", "subtitles", m, n, f);
      this.chart = f;
      this.canvas = f.canvas;
      this.ctx = this.chart.ctx;
      this.optionsName = "subtitles";
      this.isOptionsInArray = !0;
      "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
      this.height = this.width = null;
      this.bounds = {
          x1: null,
          y1: null,
          x2: null,
          y2: null
      }
  }

  function bb() {
      this.pool = []
  }

  function Pa(f) {
      var m;
      f && Sa[f] && (m = Sa[f]);
      Pa.base.constructor.call(this, "CultureInfo", null, m, null, null)
  }

  var Na = !1,
      fa = {},
      x = !!document.createElement("canvas").getContext,
      $ = {
          Chart: {
              width: 500,
              height: 400,
              zoomEnabled: !1,
              zoomType: "x",
              backgroundColor: "white",
              theme: "light1",
              animationEnabled: !1,
              animationDuration: 1200,
              dataPointWidth: null,
              dataPointMinWidth: null,
              dataPointMaxWidth: null,
              colorSet: "colorSet1",
              culture: "en",
              creditHref: "https://dathoc.net",
              creditText: "Dathoc.Net",
              interactivityEnabled: !0,
              exportEnabled: !1,
              exportFileName: "Chart",
              rangeChanging: null,
              rangeChanged: null,
              publicProperties: {
                  title: "readWrite",
                  subtitles: "readWrite",
                  toolbar: "readWrite",
                  toolTip: "readWrite",
                  legend: "readWrite",
                  axisX: "readWrite",
                  axisY: "readWrite",
                  axisX2: "readWrite",
                  axisY2: "readWrite",
                  data: "readWrite",
                  options: "readWrite",
                  bounds: "readOnly",
                  container: "readOnly"
              }
          },
          Title: {
              padding: 0,
              text: null,
              verticalAlign: "top",
              horizontalAlign: "center",
              fontSize: 20,
              fontFamily: "Calibri",
              fontWeight: "normal",
              fontColor: "black",
              fontStyle: "normal",
              borderThickness: 0,
              borderColor: "black",
              cornerRadius: 0,
              backgroundColor: x ? "transparent" : null,
              margin: 5,
              wrap: !0,
              maxWidth: null,
              dockInsidePlotArea: !1,
              publicProperties: {
                  options: "readWrite",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          Subtitle: {
              padding: 0,
              text: null,
              verticalAlign: "top",
              horizontalAlign: "center",
              fontSize: 14,
              fontFamily: "Calibri",
              fontWeight: "normal",
              fontColor: "black",
              fontStyle: "normal",
              borderThickness: 0,
              borderColor: "black",
              cornerRadius: 0,
              backgroundColor: null,
              margin: 2,
              wrap: !0,
              maxWidth: null,
              dockInsidePlotArea: !1,
              publicProperties: {
                  options: "readWrite",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          Toolbar: {
              backgroundColor: "white",
              backgroundColorOnHover: "#2196f3",
              borderColor: "#2196f3",
              borderThickness: 1,
              fontColor: "black",
              fontColorOnHover: "white",
              publicProperties: {
                  options: "readWrite",
                  chart: "readOnly"
              }
          },
          Legend: {
              name: null,
              verticalAlign: "center",
              horizontalAlign: "right",
              fontSize: 14,
              fontFamily: "calibri",
              fontWeight: "normal",
              fontColor: "black",
              fontStyle: "normal",
              cursor: null,
              itemmouseover: null,
              itemmouseout: null,
              itemmousemove: null,
              itemclick: null,
              dockInsidePlotArea: !1,
              reversed: !1,
              backgroundColor: x ? "transparent" : null,
              borderColor: x ? "transparent" : null,
              borderThickness: 0,
              cornerRadius: 0,
              maxWidth: null,
              maxHeight: null,
              markerMargin: null,
              itemMaxWidth: null,
              itemWidth: null,
              itemWrap: !0,
              itemTextFormatter: null,
              publicProperties: {
                  options: "readWrite",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          ToolTip: {
              enabled: !0,
              shared: !1,
              animationEnabled: !0,
              content: null,
              contentFormatter: null,
              reversed: !1,
              backgroundColor: x ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
              borderColor: null,
              borderThickness: 2,
              cornerRadius: 5,
              fontSize: 14,
              fontColor: "black",
              fontFamily: "Calibri, Arial, Georgia, serif;",
              fontWeight: "normal",
              fontStyle: "italic",
              updated: null,
              hidden: null,
              publicProperties: {
                  options: "readWrite",
                  chart: "readOnly"
              }
          },
          Axis: {
              minimum: null,
              maximum: null,
              viewportMinimum: null,
              viewportMaximum: null,
              interval: null,
              intervalType: null,
              reversed: !1,
              logarithmic: !1,
              logarithmBase: 10,
              title: null,
              titleFontColor: "black",
              titleFontSize: 20,
              titleFontFamily: "arial",
              titleFontWeight: "normal",
              titleFontStyle: "normal",
              titleWrap: !0,
              titleMaxWidth: null,
              titleBackgroundColor: x ? "transparent" : null,
              titleBorderColor: x ? "transparent" : null,
              titleBorderThickness: 0,
              titleCornerRadius: 0,
              labelAngle: 0,
              labelFontFamily: "arial",
              labelFontColor: "black",
              labelFontSize: 12,
              labelFontWeight: "normal",
              labelFontStyle: "normal",
              labelAutoFit: !0,
              labelWrap: !0,
              labelMaxWidth: null,
              labelFormatter: null,
              labelBackgroundColor: x ? "transparent" : null,
              labelBorderColor: x ? "transparent" : null,
              labelBorderThickness: 0,
              labelCornerRadius: 0,
              labelPlacement: "outside",
              labelTextAlign: "left",
              prefix: "",
              suffix: "",
              includeZero: !1,
              tickLength: 5,
              tickColor: "black",
              tickThickness: 1,
              tickPlacement: "outside",
              lineColor: "black",
              lineThickness: 1,
              lineDashType: "solid",
              gridColor: "#A0A0A0",
              gridThickness: 0,
              gridDashType: "solid",
              interlacedColor: x ? "transparent" : null,
              valueFormatString: null,
              margin: 2,
              publicProperties: {
                  options: "readWrite",
                  stripLines: "readWrite",
                  scaleBreaks: "readWrite",
                  crosshair: "readWrite",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          StripLine: {
              value: null,
              startValue: null,
              endValue: null,
              color: "orange",
              opacity: null,
              thickness: 2,
              lineDashType: "solid",
              label: "",
              labelPlacement: "inside",
              labelAlign: "far",
              labelWrap: !0,
              labelMaxWidth: null,
              labelBackgroundColor: null,
              labelBorderColor: x ? "transparent" : null,
              labelBorderThickness: 0,
              labelCornerRadius: 0,
              labelFontFamily: "arial",
              labelFontColor: "orange",
              labelFontSize: 12,
              labelFontWeight: "normal",
              labelFontStyle: "normal",
              labelFormatter: null,
              showOnTop: !1,
              publicProperties: {
                  options: "readWrite",
                  axis: "readOnly",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          ScaleBreaks: {
              autoCalculate: !1,
              collapsibleThreshold: "25%",
              maxNumberOfAutoBreaks: 2,
              spacing: 8,
              type: "straight",
              color: "#FFFFFF",
              fillOpacity: 0.9,
              lineThickness: 2,
              lineColor: "#E16E6E",
              lineDashType: "solid",
              publicProperties: {
                  options: "readWrite",
                  customBreaks: "readWrite",
                  axis: "readOnly",
                  autoBreaks: "readOnly",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          Break: {
              startValue: null,
              endValue: null,
              spacing: 8,
              type: "straight",
              color: "#FFFFFF",
              fillOpacity: 0.9,
              lineThickness: 2,
              lineColor: "#E16E6E",
              lineDashType: "solid",
              publicProperties: {
                  options: "readWrite",
                  scaleBreaks: "readOnly",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          Crosshair: {
              enabled: !1,
              snapToDataPoint: !1,
              color: "grey",
              opacity: null,
              thickness: 2,
              lineDashType: "solid",
              label: "",
              labelWrap: !0,
              labelMaxWidth: null,
              labelBackgroundColor: x ?
                  "grey" : null,
              labelBorderColor: x ? "grey" : null,
              labelBorderThickness: 0,
              labelCornerRadius: 0,
              labelFontFamily: x ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
              labelFontSize: 12,
              labelFontColor: "#fff",
              labelFontWeight: "normal",
              labelFontStyle: "normal",
              labelFormatter: null,
              valueFormatString: null,
              updated: null,
              hidden: null,
              publicProperties: {
                  options: "readWrite",
                  axis: "readOnly",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          DataSeries: {
              name: null,
              dataPoints: null,
              label: "",
              bevelEnabled: !1,
              highlightEnabled: !0,
              cursor: "default",
              indexLabel: "",
              indexLabelPlacement: "auto",
              indexLabelOrientation: "horizontal",
              indexLabelFontColor: "black",
              indexLabelFontSize: 12,
              indexLabelFontStyle: "normal",
              indexLabelFontFamily: "Arial",
              indexLabelFontWeight: "normal",
              indexLabelBackgroundColor: null,
              indexLabelLineColor: "gray",
              indexLabelLineThickness: 1,
              indexLabelLineDashType: "solid",
              indexLabelMaxWidth: null,
              indexLabelWrap: !0,
              indexLabelFormatter: null,
              lineThickness: 2,
              lineDashType: "solid",
              connectNullData: !1,
              nullDataLineDashType: "dash",
              color: null,
              lineColor: null,
              risingColor: "white",
              fallingColor: "red",
              fillOpacity: null,
              startAngle: 0,
              radius: null,
              innerRadius: null,
              neckHeight: null,
              neckWidth: null,
              reversed: !1,
              valueRepresents: null,
              linkedDataSeriesIndex: null,
              whiskerThickness: 2,
              whiskerDashType: "solid",
              whiskerColor: null,
              whiskerLength: null,
              stemThickness: 2,
              stemColor: null,
              stemDashType: "solid",
              upperBoxColor: "white",
              lowerBoxColor: "white",
              type: "column",
              xValueType: "number",
              axisXType: "primary",
              axisYType: "primary",
              axisXIndex: 0,
              axisYIndex: 0,
              xValueFormatString: null,
              yValueFormatString: null,
              zValueFormatString: null,
              percentFormatString: null,
              showInLegend: null,
              legendMarkerType: null,
              legendMarkerColor: null,
              legendText: null,
              legendMarkerBorderColor: x ? "transparent" : null,
              legendMarkerBorderThickness: 0,
              markerType: "circle",
              markerColor: null,
              markerSize: null,
              markerBorderColor: x ? "transparent" : null,
              markerBorderThickness: 0,
              mouseover: null,
              mouseout: null,
              mousemove: null,
              click: null,
              toolTipContent: null,
              visible: !0,
              publicProperties: {
                  options: "readWrite",
                  axisX: "readWrite",
                  axisY: "readWrite",
                  chart: "readOnly"
              }
          },
          TextBlock: {
              x: 0,
              y: 0,
              width: null,
              height: null,
              maxWidth: null,
              maxHeight: null,
              padding: 0,
              angle: 0,
              text: "",
              horizontalAlign: "center",
              textAlign: "left",
              fontSize: 12,
              fontFamily: "calibri",
              fontWeight: "normal",
              fontColor: "black",
              fontStyle: "normal",
              borderThickness: 0,
              borderColor: "black",
              cornerRadius: 0,
              backgroundColor: null,
              textBaseline: "top"
          },
          CultureInfo: {
              decimalSeparator: ".",
              digitGroupSeparator: ",",
              zoomText: "Zoom",
              panText: "Pan",
              resetText: "Reset",
              menuText: "More Options",
              saveJPGText: "Save as JPEG",
              savePNGText: "Save as PNG",
              printText: "Print",
              days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
              shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
              months: "January February March April May June July August September October November December".split(" "),
              shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
          }
      },
      Sa = {
          en: {}
      },
      v = x ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
      za = x ? "Impact, Charcoal, sans-serif" : "Arial",
      wa = {
          colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
          colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
          colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
      },
      J, W, L, V, sa;
  W = "#333333";
  L = "#000000";
  J = "#666666";
  sa = V = "#000000";
  var ea = 20,
      G = 14,
      Fa = {
          colorSet: "colorSet1",
          backgroundColor: "#FFFFFF",
          title: {
              fontFamily: za,
              fontSize: 32,
              fontColor: W,
              fontWeight: "normal",
              verticalAlign: "top",
              margin: 5
          },
          subtitles: [{
              fontFamily: za,
              fontSize: G,
              fontColor: W,
              fontWeight: "normal",
              verticalAlign: "top",
              margin: 5
          }],
          data: [{
              indexLabelFontFamily: v,
              indexLabelFontSize: G,
              indexLabelFontColor: W,
              indexLabelFontWeight: "normal",
              indexLabelLineThickness: 1
          }],
          axisX: [{
              titleFontFamily: v,
              titleFontSize: ea,
              titleFontColor: W,
              titleFontWeight: "normal",
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: L,
              labelFontWeight: "normal",
              lineThickness: 1,
              lineColor: J,
              tickThickness: 1,
              tickColor: J,
              gridThickness: 0,
              gridColor: J,
              stripLines: [{
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#FF7300",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FF7300",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: sa,
                  color: V,
                  thickness: 1,
                  lineDashType: "dash"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          axisX2: [{
              titleFontFamily: v,
              titleFontSize: ea,
              titleFontColor: W,
              titleFontWeight: "normal",
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: L,
              labelFontWeight: "normal",
              lineThickness: 1,
              lineColor: J,
              tickThickness: 1,
              tickColor: J,
              gridThickness: 0,
              gridColor: J,
              stripLines: [{
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#FF7300",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FF7300",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: sa,
                  color: V,
                  thickness: 1,
                  lineDashType: "dash"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          axisY: [{
              titleFontFamily: v,
              titleFontSize: ea,
              titleFontColor: W,
              titleFontWeight: "normal",
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: L,
              labelFontWeight: "normal",
              lineThickness: 1,
              lineColor: J,
              tickThickness: 1,
              tickColor: J,
              gridThickness: 1,
              gridColor: J,
              stripLines: [{
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#FF7300",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FF7300",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: sa,
                  color: V,
                  thickness: 1,
                  lineDashType: "dash"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          axisY2: [{
              titleFontFamily: v,
              titleFontSize: ea,
              titleFontColor: W,
              titleFontWeight: "normal",
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: L,
              labelFontWeight: "normal",
              lineThickness: 1,
              lineColor: J,
              tickThickness: 1,
              tickColor: J,
              gridThickness: 1,
              gridColor: J,
              stripLines: [{
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#FF7300",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FF7300",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: sa,
                  color: V,
                  thickness: 1,
                  lineDashType: "dash"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          legend: {
              fontFamily: v,
              fontSize: 14,
              fontColor: W,
              fontWeight: "bold",
              verticalAlign: "bottom",
              horizontalAlign: "center"
          },
          toolTip: {
              fontFamily: v,
              fontSize: 14,
              fontStyle: "normal",
              cornerRadius: 0,
              borderThickness: 1
          }
      };
  J = "#2A2A2A";
  L = W = "#F5F5F5";
  J = "#FFFFFF";
  V = "#40BAF1";
  sa = "#F5F5F5";
  var ea = 20,
      G = 14,
      Ja = {
          colorSet: "colorSet2",
          title: {
              fontFamily: v,
              fontSize: 33,
              fontColor: "#3A3A3A",
              fontWeight: "bold",
              verticalAlign: "top",
              margin: 5
          },
          subtitles: [{
              fontFamily: v,
              fontSize: G,
              fontColor: "#3A3A3A",
              fontWeight: "normal",
              verticalAlign: "top",
              margin: 5
          }],
          data: [{
              indexLabelFontFamily: v,
              indexLabelFontSize: G,
              indexLabelFontColor: "#666666",
              indexLabelFontWeight: "normal",
              indexLabelLineThickness: 1
          }],
          axisX: [{
              titleFontFamily: v,
              titleFontSize: ea,
              titleFontColor: "#666666",
              titleFontWeight: "normal",
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#666666",
              labelFontWeight: "normal",
              lineThickness: 1,
              lineColor: "#BBBBBB",
              tickThickness: 1,
              tickColor: "#BBBBBB",
              gridThickness: 1,
              gridColor: "#BBBBBB",
              stripLines: [{
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#FFA500",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FFA500",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: "black",
                  color: "black",
                  thickness: 1,
                  lineDashType: "dot"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          axisX2: [{
              titleFontFamily: v,
              titleFontSize: ea,
              titleFontColor: "#666666",
              titleFontWeight: "normal",
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#666666",
              labelFontWeight: "normal",
              lineThickness: 1,
              lineColor: "#BBBBBB",
              tickColor: "#BBBBBB",
              tickThickness: 1,
              gridThickness: 1,
              gridColor: "#BBBBBB",
              stripLines: [{
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#FFA500",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FFA500",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: "black",
                  color: "black",
                  thickness: 1,
                  lineDashType: "dot"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          axisY: [{
              titleFontFamily: v,
              titleFontSize: ea,
              titleFontColor: "#666666",
              titleFontWeight: "normal",
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#666666",
              labelFontWeight: "normal",
              lineThickness: 0,
              lineColor: "#BBBBBB",
              tickColor: "#BBBBBB",
              tickThickness: 1,
              gridThickness: 1,
              gridColor: "#BBBBBB",
              stripLines: [{
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#FFA500",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FFA500",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: "black",
                  color: "black",
                  thickness: 1,
                  lineDashType: "dot"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          axisY2: [{
              titleFontFamily: v,
              titleFontSize: ea,
              titleFontColor: "#666666",
              titleFontWeight: "normal",
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#666666",
              labelFontWeight: "normal",
              lineThickness: 0,
              lineColor: "#BBBBBB",
              tickColor: "#BBBBBB",
              tickThickness: 1,
              gridThickness: 1,
              gridColor: "#BBBBBB",
              stripLines: [{
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#FFA500",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FFA500",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: v,
                  labelFontSize: G,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: "black",
                  color: "black",
                  thickness: 1,
                  lineDashType: "dot"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          legend: {
              fontFamily: v,
              fontSize: 14,
              fontColor: "#3A3A3A",
              fontWeight: "bold",
              verticalAlign: "bottom",
              horizontalAlign: "center"
          },
          toolTip: {
              fontFamily: v,
              fontSize: 14,
              fontStyle: "normal",
              cornerRadius: 0,
              borderThickness: 1
          }
      };
  L = W = "#F5F5F5";
  J = "#FFFFFF";
  V = "#40BAF1";
  sa = "#F5F5F5";
  ea = 20;
  G = 14;
  za = {
      colorSet: "colorSet12",
      backgroundColor: "#2A2A2A",
      title: {
          fontFamily: za,
          fontSize: 32,
          fontColor: W,
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5
      },
      subtitles: [{
          fontFamily: za,
          fontSize: G,
          fontColor: W,
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5
      }],
      toolbar: {
          backgroundColor: "#666666",
          backgroundColorOnHover: "#FF7372",
          borderColor: "#FF7372",
          borderThickness: 1,
          fontColor: "#F5F5F5",
          fontColorOnHover: "#F5F5F5"
      },
      data: [{
          indexLabelFontFamily: v,
          indexLabelFontSize: G,
          indexLabelFontColor: L,
          indexLabelFontWeight: "normal",
          indexLabelLineThickness: 1
      }],
      axisX: [{
          titleFontFamily: v,
          titleFontSize: ea,
          titleFontColor: L,
          titleFontWeight: "normal",
          labelFontFamily: v,
          labelFontSize: G,
          labelFontColor: L,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: J,
          tickThickness: 1,
          tickColor: J,
          gridThickness: 0,
          gridColor: J,
          stripLines: [{
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1
          }],
          crosshair: {
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: sa,
              color: V,
              thickness: 1,
              lineDashType: "dash"
          },
          scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111"
          }
      }],
      axisX2: [{
          titleFontFamily: v,
          titleFontSize: ea,
          titleFontColor: L,
          titleFontWeight: "normal",
          labelFontFamily: v,
          labelFontSize: G,
          labelFontColor: L,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: J,
          tickThickness: 1,
          tickColor: J,
          gridThickness: 0,
          gridColor: J,
          stripLines: [{
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1
          }],
          crosshair: {
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: sa,
              color: V,
              thickness: 1,
              lineDashType: "dash"
          },
          scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111"
          }
      }],
      axisY: [{
          titleFontFamily: v,
          titleFontSize: ea,
          titleFontColor: L,
          titleFontWeight: "normal",
          labelFontFamily: v,
          labelFontSize: G,
          labelFontColor: L,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: J,
          tickThickness: 1,
          tickColor: J,
          gridThickness: 1,
          gridColor: J,
          stripLines: [{
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1
          }],
          crosshair: {
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: sa,
              color: V,
              thickness: 1,
              lineDashType: "dash"
          },
          scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111"
          }
      }],
      axisY2: [{
          titleFontFamily: v,
          titleFontSize: ea,
          titleFontColor: L,
          titleFontWeight: "normal",
          labelFontFamily: v,
          labelFontSize: G,
          labelFontColor: L,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: J,
          tickThickness: 1,
          tickColor: J,
          gridThickness: 1,
          gridColor: J,
          stripLines: [{
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1
          }],
          crosshair: {
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: sa,
              color: V,
              thickness: 1,
              lineDashType: "dash"
          },
          scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111"
          }
      }],
      legend: {
          fontFamily: v,
          fontSize: 14,
          fontColor: W,
          fontWeight: "bold",
          verticalAlign: "bottom",
          horizontalAlign: "center"
      },
      toolTip: {
          fontFamily: v,
          fontSize: 14,
          fontStyle: "normal",
          cornerRadius: 0,
          borderThickness: 1,
          fontColor: L,
          backgroundColor: "rgba(0, 0, 0, .7)"
      }
  };
  J = "#FFFFFF";
  L = W = "#FAFAFA";
  V = "#40BAF1";
  sa = "#F5F5F5";
  ea = 20;
  G = 14;
  V = {
      colorSet: "colorSet2",
      backgroundColor: "#32373A",
      title: {
          fontFamily: v,
          fontSize: 32,
          fontColor: W,
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5
      },
      subtitles: [{
          fontFamily: v,
          fontSize: G,
          fontColor: W,
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5
      }],
      toolbar: {
          backgroundColor: "#666666",
          backgroundColorOnHover: "#FF7372",
          borderColor: "#FF7372",
          borderThickness: 1,
          fontColor: "#F5F5F5",
          fontColorOnHover: "#F5F5F5"
      },
      data: [{
          indexLabelFontFamily: v,
          indexLabelFontSize: G,
          indexLabelFontColor: L,
          indexLabelFontWeight: "normal",
          indexLabelLineThickness: 1
      }],
      axisX: [{
          titleFontFamily: v,
          titleFontSize: ea,
          titleFontColor: L,
          titleFontWeight: "normal",
          labelFontFamily: v,
          labelFontSize: G,
          labelFontColor: L,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: J,
          tickThickness: 1,
          tickColor: J,
          gridThickness: 0,
          gridColor: J,
          stripLines: [{
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1
          }],
          crosshair: {
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: sa,
              color: V,
              thickness: 1,
              lineDashType: "dash"
          },
          scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111"
          }
      }],
      axisX2: [{
          titleFontFamily: v,
          titleFontSize: ea,
          titleFontColor: L,
          titleFontWeight: "normal",
          labelFontFamily: v,
          labelFontSize: G,
          labelFontColor: L,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: J,
          tickThickness: 1,
          tickColor: J,
          gridThickness: 0,
          gridColor: J,
          stripLines: [{
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1
          }],
          crosshair: {
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: sa,
              color: V,
              thickness: 1,
              lineDashType: "dash"
          },
          scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111"
          }
      }],
      axisY: [{
          titleFontFamily: v,
          titleFontSize: ea,
          titleFontColor: L,
          titleFontWeight: "normal",
          labelFontFamily: v,
          labelFontSize: G,
          labelFontColor: L,
          labelFontWeight: "normal",
          lineThickness: 0,
          lineColor: J,
          tickThickness: 1,
          tickColor: J,
          gridThickness: 1,
          gridColor: J,
          stripLines: [{
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1
          }],
          crosshair: {
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: sa,
              color: V,
              thickness: 1,
              lineDashType: "dash"
          },
          scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111"
          }
      }],
      axisY2: [{
          titleFontFamily: v,
          titleFontSize: ea,
          titleFontColor: L,
          titleFontWeight: "normal",
          labelFontFamily: v,
          labelFontSize: G,
          labelFontColor: L,
          labelFontWeight: "normal",
          lineThickness: 0,
          lineColor: J,
          tickThickness: 1,
          tickColor: J,
          gridThickness: 1,
          gridColor: J,
          stripLines: [{
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1
          }],
          crosshair: {
              labelFontFamily: v,
              labelFontSize: G,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: sa,
              color: V,
              thickness: 1,
              lineDashType: "dash"
          },
          scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111"
          }
      }],
      legend: {
          fontFamily: v,
          fontSize: 14,
          fontColor: W,
          fontWeight: "bold",
          verticalAlign: "bottom",
          horizontalAlign: "center"
      },
      toolTip: {
          fontFamily: v,
          fontSize: 14,
          fontStyle: "normal",
          cornerRadius: 0,
          borderThickness: 1,
          fontColor: L,
          backgroundColor: "rgba(0, 0, 0, .7)"
      }
  };
  var cb = {
          light1: Fa,
          light2: Ja,
          dark1: za,
          dark2: V,
          theme1: Fa,
          theme2: Ja,
          theme3: Fa
      },
      Y = {
          numberDuration: 1,
          yearDuration: 314496E5,
          monthDuration: 2592E6,
          weekDuration: 6048E5,
          dayDuration: 864E5,
          hourDuration: 36E5,
          minuteDuration: 6E4,
          secondDuration: 1E3,
          millisecondDuration: 1,
          dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
      };
  (function() {
      fa.fSDec = function(f) {
          for (var m = "", n = 0; n < f.length; n++) m += String.fromCharCode(Math.ceil(f.length / 57 / 5) ^ f.charCodeAt(n));
          return m
      };
      fa.obj = {
        /*
          trVs: "Ush`m!Wdsrhno",
          fntStr: "qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg",
          txtBl: "udyuC`rdmhod",
          fnt: "gnou",
          fSy: "ghmmRuxmd",
          fTx: "ghmmUdyu",
          grClr: "fsdx",
          cntx: "buy",
          tp: "unq"
          */
      };
      delete $[fa.fSDec("Bi`su")][fa.fSDec("bsdehuIsdg")];
      fa.pro = {
          sCH: $[fa.fSDec("Bi`su")][fa.fSDec("bsdehuIsdg")]
      };
      fa._fTWm = function(f) {
          if ("undefined" === typeof fa.pro.sCH && !nb) try {
              var m = f[fa.fSDec(fa.obj.cntx)];
              m[fa.fSDec(fa.obj.txtBl)] = fa.fSDec(fa.obj.tp);
              m[fa.fSDec(fa.obj.fnt)] = 11 + fa.fSDec(fa.obj.fntStr);
              m[fa.fSDec(fa.obj.fSy)] = fa.fSDec(fa.obj.grClr);
              m[fa.fSDec(fa.obj.fTx)](fa.fSDec(fa.obj.trVs), 2, f.height - 11 - 2)
          } catch (n) {}
      }
  })();
  var vb = function() {
          var f = !1;
          try {
              var m = Object.defineProperty && Object.defineProperty({}, "passive", {
                  get: function() {
                      f = !0;
                      return !1
                  }
              });
              window.addEventListener && (window.addEventListener("test", null, m), window.removeEventListener("test", null, m))
          } catch (n) {
              f = !1
          }
          return f
      }(),
      hb = {},
      Ea = null,
      ob = function(f) {
          var m = 0,
              n = 0;
          this.options.width ? m = this.width : this.width = m = 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
          this.options.height ? n = this.height : this.height = n = 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
          if (this.canvas.width !== m * ka || this.canvas.height !== n * ka) {
              for (var x = 0; x < f.length; x++) Va(f[x], m, n);
              this.bounds = {
                  x1: 0,
                  y1: 0,
                  x2: this.width,
                  y2: this.height,
                  width: this.width,
                  height: this.height
              };
              return !0
          }
          return !1
      },
      pb = function() {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
      },
      qb = function(f, m, n) {
          m = Math.min(this.width, this.height);
          return Math.max("theme4" === this.theme ? 0 : 300 <= m ? 12 : 11, Math.round(m * (f / 400)))
      },
      ma = function() {
          var f = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
              m = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
              n = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
              x = "January February March April May June July August September October November December".split(" "),
              v = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
              E = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
              A = /[^-+\dA-Z]/g;
          return function(y, G, O) {
              var J = O ? O.days : m,
                  M = O ? O.months : x,
                  L = O ? O.shortDays :
                  n,
                  N = O ? O.shortMonths : v;
              O = "";
              var d = !1;
              y = y && y.getTime ? y : y ? new Date(y) : new Date;
              if (isNaN(y)) throw SyntaxError("invalid date");
              "UTC:" === G.slice(0, 4) && (G = G.slice(4), d = !0);
              O = d ? "getUTC" : "get";
              var z = y[O + "Date"](),
                  w = y[O + "Day"](),
                  u = y[O + "Month"](),
                  a = y[O + "FullYear"](),
                  e = y[O + "Hours"](),
                  b = y[O + "Minutes"](),
                  c = y[O + "Seconds"](),
                  h = y[O + "Milliseconds"](),
                  g = d ? 0 : y.getTimezoneOffset();
              return O = G.replace(f, function(F) {
                  switch (F) {
                      case "D":
                          return z;
                      case "DD":
                          return oa(z, 2);
                      case "DDD":
                          return L[w];
                      case "DDDD":
                          return J[w];
                      case "M":
                          return u +
                              1;
                      case "MM":
                          return oa(u + 1, 2);
                      case "MMM":
                          return N[u];
                      case "MMMM":
                          return M[u];
                      case "Y":
                          return parseInt(String(a).slice(-2));
                      case "YY":
                          return oa(String(a).slice(-2), 2);
                      case "YYY":
                          return oa(String(a).slice(-3), 3);
                      case "YYYY":
                          return oa(a, 4);
                      case "h":
                          return e % 12 || 12;
                      case "hh":
                          return oa(e % 12 || 12, 2);
                      case "H":
                          return e;
                      case "HH":
                          return oa(e, 2);
                      case "m":
                          return b;
                      case "mm":
                          return oa(b, 2);
                      case "s":
                          return c;
                      case "ss":
                          return oa(c, 2);
                      case "f":
                          return String(h).slice(0, 1);
                      case "ff":
                          return oa(String(h).slice(0, 2), 2);
                      case "fff":
                          return oa(String(h).slice(0, 3), 3);
                      case "t":
                          return 12 > e ? "a" : "p";
                      case "tt":
                          return 12 > e ? "am" : "pm";
                      case "T":
                          return 12 > e ? "A" : "P";
                      case "TT":
                          return 12 > e ? "AM" : "PM";
                      case "K":
                          return d ? "UTC" : (String(y).match(E) || [""]).pop().replace(A, "");
                      case "z":
                          return (0 < g ? "-" : "+") + Math.floor(Math.abs(g) / 60);
                      case "zz":
                          return (0 < g ? "-" : "+") + oa(Math.floor(Math.abs(g) / 60), 2);
                      case "zzz":
                          return (0 < g ? "-" : "+") + oa(Math.floor(Math.abs(g) / 60), 2) + oa(Math.abs(g) % 60, 2);
                      default:
                          return F.slice(1, F.length - 1)
                  }
              })
          }
      }(),
      X = function(f, m,
          n) {
          if (null === f) return "";
          if (!isFinite(f)) return f;
          f = Number(f);
          var x = 0 > f ? !0 : !1;
          x && (f *= -1);
          var v = n ? n.decimalSeparator : ".",
              E = n ? n.digitGroupSeparator : ",",
              A = "";
          m = String(m);
          var A = 1,
              y = n = "",
              G = -1,
              O = [],
              J = [],
              M = 0,
              L = 0,
              N = 0,
              d = !1,
              z = 0,
              y = m.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
          m = null;
          for (var w = 0; y && w < y.length; w++)
              if (m = y[w], "." === m && 0 > G) G = w;
              else {
                  if ("%" === m) A *= 100;
                  else if ("\u2030" === m) {
                      A *= 1E3;
                      continue
                  } else if ("," === m[0] && "." === m[m.length - 1]) {
                      A /= Math.pow(1E3, m.length - 1);
                      G = w + m.length - 1;
                      continue
                  } else "E" !==
                      m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || (d = !0);
                  0 > G ? (O.push(m), "#" === m || "0" === m ? M++ : "," === m && N++) : (J.push(m), "#" !== m && "0" !== m || L++)
              } d && (m = Math.floor(f), y = -Math.floor(Math.log(f) / Math.LN10 + 1), z = 0 === f ? 0 : 0 === m ? -(M + y) : String(m).length - M, A /= Math.pow(10, z));
          0 > G && (G = w);
          A = (f * A).toFixed(L);
          m = A.split(".");
          A = (m[0] + "").split("");
          f = (m[1] + "").split("");
          A && "0" === A[0] && A.shift();
          for (d = y = w = L = G = 0; 0 < O.length;)
              if (m = O.pop(), "#" === m || "0" === m)
                  if (G++, G === M) {
                      var u = A,
                          A = [];
                      if ("0" === m)
                          for (m = M - L - (u ? u.length : 0); 0 < m;) u.unshift("0"),
                              m--;
                      for (; 0 < u.length;) n = u.pop() + n, d++, 0 === d % y && (w === N && 0 < u.length) && (n = E + n)
                  } else 0 < A.length ? (n = A.pop() + n, L++, d++) : "0" === m && (n = "0" + n, L++, d++), 0 === d % y && (w === N && 0 < A.length) && (n = E + n);
          else "E" !== m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || !/[eE][+-]*[0]+/.test(m) ? "," === m ? (w++, y = d, d = 0, 0 < A.length && (n = E + n)) : n = 1 < m.length && ('"' === m[0] && '"' === m[m.length - 1] || "'" === m[0] && "'" === m[m.length - 1]) ? m.slice(1, m.length - 1) + n : m + n : (m = 0 > z ? m.replace("+", "").replace("-", "") : m.replace("-", ""), n += m.replace(/[0]+/, function(a) {
              return oa(z,
                  a.length)
          }));
          E = "";
          for (O = !1; 0 < J.length;) m = J.shift(), "#" === m || "0" === m ? 0 < f.length && 0 !== Number(f.join("")) ? (E += f.shift(), O = !0) : "0" === m && (E += "0", O = !0) : 1 < m.length && ('"' === m[0] && '"' === m[m.length - 1] || "'" === m[0] && "'" === m[m.length - 1]) ? E += m.slice(1, m.length - 1) : "E" !== m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || !/[eE][+-]*[0]+/.test(m) ? E += m : (m = 0 > z ? m.replace("+", "").replace("-", "") : m.replace("-", ""), E += m.replace(/[0]+/, function(a) {
              return oa(z, a.length)
          }));
          n += (O ? v : "") + E;
          return x ? "-" + n : n
      },
      Aa = function(f) {
          var n = 0,
              x = 0;
          f =
              f || window.event;
          f.offsetX || 0 === f.offsetX ? (n = f.offsetX, x = f.offsetY) : f.layerX || 0 == f.layerX ? (n = f.layerX, x = f.layerY) : (n = f.pageX - f.target.offsetLeft, x = f.pageY - f.target.offsetTop);
          return {
              x: n,
              y: x
          }
      },
      mb = !0,
      $a = window.devicePixelRatio || 1,
      Wa = 1,
      ka = mb ? $a / Wa : 1,
      Z = function(f, n, x, v, y, E, A, G, J, O, M, L, N) {
          "undefined" === typeof N && (N = 1);
          A = A || 0;
          G = G || "black";
          var S = 15 < v - n && 15 < y - x ? 8 : 0.35 * Math.min(v - n, y - x);
          f.beginPath();
          f.moveTo(n, x);
          f.save();
          f.fillStyle = E;
          f.globalAlpha = N;
          f.fillRect(n, x, v - n, y - x);
          f.globalAlpha = 1;
          0 < A && (N = 0 === A %
              2 ? 0 : 0.5, f.beginPath(), f.lineWidth = A, f.strokeStyle = G, f.moveTo(n, x), f.rect(n - N, x - N, v - n + 2 * N, y - x + 2 * N), f.stroke());
          f.restore();
          !0 === J && (f.save(), f.beginPath(), f.moveTo(n, x), f.lineTo(n + S, x + S), f.lineTo(v - S, x + S), f.lineTo(v, x), f.closePath(), A = f.createLinearGradient((v + n) / 2, x + S, (v + n) / 2, x), A.addColorStop(0, E), A.addColorStop(1, "rgba(255, 255, 255, .4)"), f.fillStyle = A, f.fill(), f.restore());
          !0 === O && (f.save(), f.beginPath(), f.moveTo(n, y), f.lineTo(n + S, y - S), f.lineTo(v - S, y - S), f.lineTo(v, y), f.closePath(), A = f.createLinearGradient((v +
              n) / 2, y - S, (v + n) / 2, y), A.addColorStop(0, E), A.addColorStop(1, "rgba(255, 255, 255, .4)"), f.fillStyle = A, f.fill(), f.restore());
          !0 === M && (f.save(), f.beginPath(), f.moveTo(n, x), f.lineTo(n + S, x + S), f.lineTo(n + S, y - S), f.lineTo(n, y), f.closePath(), A = f.createLinearGradient(n + S, (y + x) / 2, n, (y + x) / 2), A.addColorStop(0, E), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), f.fillStyle = A, f.fill(), f.restore());
          !0 === L && (f.save(), f.beginPath(), f.moveTo(v, x), f.lineTo(v - S, x + S), f.lineTo(v - S, y - S), f.lineTo(v, y), A = f.createLinearGradient(v -
              S, (y + x) / 2, v, (y + x) / 2), A.addColorStop(0, E), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), f.fillStyle = A, A.addColorStop(0, E), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), f.fillStyle = A, f.fill(), f.closePath(), f.restore())
      },
      ua = function(f) {
          for (var n = "", x = 0; x < f.length; x++) n += String.fromCharCode(Math.ceil(f.length / 57 / 5) ^ f.charCodeAt(x));
          return n
      },
      nb = window && window[ua("mnb`uhno")] && window[ua("mnb`uhno")].href && window[ua("mnb`uhno")].href.indexOf && (-1 !== window[ua("mnb`uhno")].href.indexOf(ua("b`ow`rkr/bnl")) ||
          -1 !== window[ua("mnb`uhno")].href.indexOf(ua("gdonqhy/bnl")) || -1 !== window[ua("mnb`uhno")].href.indexOf(ua("gheemd"))),
      xb = nb && -1 === window[ua("mnb`uhno")].href.indexOf(ua("gheemd")),
      yb = {
          reset: {
              image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg=="
          },
          pan: {
              image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC"
          },
          zoom: {
              image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII="
          },
          menu: {
              image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC"
          }
      };
  S.prototype.setOptions = function(f, n) {
      if ($[this._defaultsKey]) {
          var x = $[this._defaultsKey],
              v;
          for (v in x) "publicProperties" !== v && x.hasOwnProperty(v) && (this[v] = f && v in f ? f[v] : n && v in n ? n[v] : x[v])
      } else Na && window.console && console.log("defaults not set")
  };
  S.prototype.get = function(f) {
      var n = $[this._defaultsKey];
      if ("options" === f) return this.options && this.options._isPlaceholder ? null : this.options;
      if (n.hasOwnProperty(f) || n.publicProperties && n.publicProperties.hasOwnProperty(f)) return this[f];
      window.console &&
          window.console.log('Property "' + f + "\" doesn't exist. Please check for typo.")
  };
  S.prototype.set = function(f, n, x) {
      x = "undefined" === typeof x ? !0 : x;
      var v = $[this._defaultsKey];
      if ("options" === f) this.createUserOptions(n);
      else if (v.hasOwnProperty(f) || v.publicProperties && v.publicProperties.hasOwnProperty(f) && "readWrite" === v.publicProperties[f]) this.options._isPlaceholder && this.createUserOptions(), this.options[f] = n;
      else {
          window.console && (v.publicProperties && v.publicProperties.hasOwnProperty(f) && "readOnly" === v.publicProperties[f] ?
              window.console.log('Property "' + f + '" is read-only.') : window.console.log('Property "' + f + "\" doesn't exist. Please check for typo."));
          return
      }
      x && (this.stockChart || this.chart || this).render()
  };
  S.prototype.addTo = function(f, n, x, v) {
      v = "undefined" === typeof v ? !0 : v;
      var y = $[this._defaultsKey];
      y.hasOwnProperty(f) || y.publicProperties && y.publicProperties.hasOwnProperty(f) && "readWrite" === y.publicProperties[f] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[f] && (this.options[f] = []), f = this.options[f], x = "undefined" === typeof x || null === x ? f.length : x, f.splice(x, 0, n), v && (this.stockChart || this.chart || this).render()) : window.console && (y.publicProperties && y.publicProperties.hasOwnProperty(f) && "readOnly" === y.publicProperties[f] ? window.console.log('Property "' + f + '" is read-only.') : window.console.log('Property "' + f + "\" doesn't exist. Please check for typo."))
  };
  S.prototype.createUserOptions = function(f) {
      if ("undefined" !== typeof f || this.options._isPlaceholder)
          if (this.parent.options._isPlaceholder &&
              this.parent.createUserOptions(), this.isOptionsInArray) {
              this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
              var n = this.parent.options[this.optionsName],
                  x = n.length;
              this.options._isPlaceholder || (Da(n), x = n.indexOf(this.options));
              this.options = "undefined" === typeof f ? {} : f;
              n[x] = this.options
          } else this.options = "undefined" === typeof f ? {} : f, f = this.parent.options, this.optionsName ? n = this.optionsName : (n = this._defaultsKey) && 0 !== n.length ? (x = n.charAt(0).toLowerCase(), 1 < n.length && (x = x.concat(n.slice(1))),
              n = x) : n = void 0, f[n] = this.options
  };
  S.prototype.remove = function(f) {
      f = "undefined" === typeof f ? !0 : f;
      if (this.isOptionsInArray) {
          var n = this.parent.options[this.optionsName];
          Da(n);
          var x = n.indexOf(this.options);
          0 <= x && n.splice(x, 1)
      } else delete this.parent.options[this.optionsName];
      f && (this.stockChart || this.chart || this).render()
  };
  S.prototype.updateOption = function(f) {
      !$[this._defaultsKey] && (Na && window.console) && console.log("defaults not set");
      var m = $[this._defaultsKey],
          x = {},
          v = this[f],
          y = this._themeOptionsKey,
          E =
          this._index;
      this.theme && n(this.parent) && n(y) && n(E) ? x = n(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[y]) && (null === E ? x = this.parent.themeOptions[y] : 0 < this.parent.themeOptions[y].length && (x = Math.min(this.parent.themeOptions[y].length - 1, E), x = this.parent.themeOptions[y][x]));
      this.themeOptions = x;
      f in m && (v = f in this.options ? this.options[f] : x && f in x ? x[f] : m[f]);
      if (v === this[f]) return !1;
      this[f] =
          v;
      return !0
  };
  S.prototype.trackChanges = function(f) {
      if (!this.sessionVariables) throw "Session Variable Store not set";
      this.sessionVariables[f] = this.options[f]
  };
  S.prototype.isBeingTracked = function(f) {
      this.options._oldOptions || (this.options._oldOptions = {});
      return this.options._oldOptions[f] ? !0 : !1
  };
  S.prototype.hasOptionChanged = function(f) {
      if (!this.sessionVariables) throw "Session Variable Store not set";
      return this.sessionVariables[f] !== this.options[f]
  };
  S.prototype.addEventListener = function(f, n, x) {
      f && n && (this._eventListeners[f] =
          this._eventListeners[f] || [], this._eventListeners[f].push({
              context: x || this,
              eventHandler: n
          }))
  };
  S.prototype.removeEventListener = function(f, n) {
      if (f && n && this._eventListeners[f])
          for (var x = this._eventListeners[f], v = 0; v < x.length; v++)
              if (x[v].eventHandler === n) {
                  x[v].splice(v, 1);
                  break
              }
  };
  S.prototype.removeAllEventListeners = function() {
      this._eventListeners = []
  };
  S.prototype.dispatchEvent = function(f, n, x) {
      if (f && this._eventListeners[f]) {
          n = n || {};
          for (var v = this._eventListeners[f], y = 0; y < v.length; y++) v[y].eventHandler.call(v[y].context,
              n)
      }
      "function" === typeof this[f] && this[f].call(x || this.chart, n)
  };
  La.prototype.registerSpace = function(f, n) {
      "top" === f ? this._topOccupied += n.height : "bottom" === f ? this._bottomOccupied += n.height : "left" === f ? this._leftOccupied += n.width : "right" === f && (this._rightOccupied += n.width)
  };
  La.prototype.unRegisterSpace = function(f, n) {
      "top" === f ? this._topOccupied -= n.height : "bottom" === f ? this._bottomOccupied -= n.height : "left" === f ? this._leftOccupied -= n.width : "right" === f && (this._rightOccupied -= n.width)
  };
  La.prototype.getFreeSpace =
      function() {
          return {
              x1: this._x1 + this._leftOccupied,
              y1: this._y1 + this._topOccupied,
              x2: this._x2 - this._rightOccupied,
              y2: this._y2 - this._bottomOccupied,
              width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
              height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
          }
      };
  La.prototype.reset = function() {
      this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
  };
  ga(la, S);
  la.prototype._initialize = function() {
      n(this.padding) || "object" !== typeof this.padding ? this.topPadding =
          this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = n(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = n(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = n(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = n(this.padding.left) ? 0 : Number(this.padding.left) | 0)
  };
  la.prototype.render = function(f) {
      if (0 !== this.fontSize) {
          f && this.ctx.save();
          var n = this.ctx.font;
          this.ctx.textBaseline = this.textBaseline;
          var x = 0;
          this._isDirty &&
              this.measureText(this.ctx);
          this.ctx.translate(this.x, this.y + x);
          "middle" === this.textBaseline && (x = -this._lineHeight / 2);
          this.ctx.font = this._getFontString();
          this.ctx.rotate(Math.PI / 180 * this.angle);
          var v = 0,
              y = this.topPadding,
              E = null;
          this.ctx.roundRect || Ha(this.ctx);
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, x, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
          this.ctx.fillStyle = this.fontColor;
          for (x = 0; x < this._wrappedText.lines.length; x++) {
              E =
                  this._wrappedText.lines[x];
              if ("right" === this.horizontalAlign || "right" === this.textAlign) v = this.width - E.width - this.rightPadding;
              else if ("left" === this.horizontalAlign || "left" === this.textAlign) v = this.leftPadding;
              else if ("center" === this.horizontalAlign || "center" === this.textAlign) v = (this.width - (this.leftPadding + this.rightPadding)) / 2 - E.width / 2 + this.leftPadding;
              this.ctx.fillText(E.text, v, y);
              y += E.height
          }
          this.ctx.font = n;
          f && this.ctx.restore()
      }
  };
  la.prototype.setText = function(f) {
      this.text = f;
      this._isDirty = !0;
      this._wrappedText =
          null
  };
  la.prototype.measureText = function() {
      this._lineHeight = gb(this.fontFamily, this.fontSize, this.fontWeight);
      if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
      this._wrapText(this.ctx);
      this._isDirty = !1;
      return {
          width: this.width,
          height: this.height
      }
  };
  la.prototype._getLineWithWidth = function(f, n, x) {
      f = String(f);
      if (!f) return {
          text: "",
          width: 0
      };
      var v = x = 0,
          y = f.length - 1,
          E = Infinity;
      for (this.ctx.font = this._getFontString(); v <= y;) {
          var E = Math.floor((v + y) / 2),
              A = f.substr(0, E + 1);
          x = this.ctx.measureText(A).width;
          if (x < n) v = E + 1;
          else if (x > n) y = E - 1;
          else break
      }
      x > n && 1 < A.length && (A = A.substr(0, A.length - 1), x = this.ctx.measureText(A).width);
      n = !0;
      if (A.length === f.length || " " === f[A.length]) n = !1;
      n && (f = A.split(" "), 1 < f.length && f.pop(), A = f.join(" "), x = this.ctx.measureText(A).width);
      return {
          text: A,
          width: x
      }
  };
  la.prototype._wrapText = function() {
      var n = new String(Ra(String(this.text))),
          x = [],
          v = this.ctx.font,
          y = 0,
          G = 0;
      this.ctx.font = this._getFontString();
      if (0 === this.frontSize) G = y = 0;
      else
          for (; 0 < n.length;) {
              var E = this.maxHeight - (this.topPadding +
                      this.bottomPadding),
                  A = this._getLineWithWidth(n, this.maxWidth - (this.leftPadding + this.rightPadding), !1);
              A.height = this._lineHeight;
              x.push(A);
              var J = G,
                  G = Math.max(G, A.width),
                  y = y + A.height,
                  n = Ra(n.slice(A.text.length, n.length));
              E && y > E && (A = x.pop(), y -= A.height, G = J)
          }
      this._wrappedText = {
          lines: x,
          width: G,
          height: y
      };
      this.width = G + (this.leftPadding + this.rightPadding);
      this.height = y + (this.topPadding + this.bottomPadding);
      this.ctx.font = v
  };
  la.prototype._getFontString = function() {
      var n;
      n = "" + (this.fontStyle ? this.fontStyle + " " :
          "");
      n += this.fontWeight ? this.fontWeight + " " : "";
      n += this.fontSize ? this.fontSize + "px " : "";
      var m = this.fontFamily ? this.fontFamily + "" : "";
      !x && m && (m = m.split(",")[0], "'" !== m[0] && '"' !== m[0] && (m = "'" + m + "'"));
      return n += m
  };
  ga(Ya, S);
  ga(Ia, S);
  Ia.prototype.setLayout = function() {
      if (this.text) {
          var f = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
              x = f.layoutManager.getFreeSpace(),
              v = x.x1,
              y = x.y1,
              G = 0,
              E = 0,
              A = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0,
              J, M;
          "top" === this.verticalAlign ||
              "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = x.width - 4 - A * ("center" === this.horizontalAlign ? 2 : 1)), E = 0.5 * x.height - this.margin - 2, G = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = x.height - 4), E = 0.5 * x.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = x.width - 4), E = 0.5 * x.height - 4));
          var O;
          n(this.padding) || "number" !== typeof this.padding ? n(this.padding) || "object" !==
              typeof this.padding || (O = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, O += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : O = 2 * this.padding;
          this.wrap || (E = Math.min(E, 1.5 * this.fontSize + O));
          E = new la(this.ctx, {
              fontSize: this.fontSize,
              fontFamily: this.fontFamily,
              fontColor: this.fontColor,
              fontStyle: this.fontStyle,
              fontWeight: this.fontWeight,
              horizontalAlign: this.horizontalAlign,
              verticalAlign: this.verticalAlign,
              borderColor: this.borderColor,
              borderThickness: this.borderThickness,
              backgroundColor: this.backgroundColor,
              maxWidth: this.maxWidth,
              maxHeight: E,
              cornerRadius: this.cornerRadius,
              text: this.text,
              padding: this.padding,
              textBaseline: "top"
          });
          O = E.measureText();
          "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (y = x.y1 + 2, M = "top") : "bottom" === this.verticalAlign && (y = x.y2 - 2 - O.height, M = "bottom"), "left" === this.horizontalAlign ? v = x.x1 + 2 : "center" === this.horizontalAlign ? v = x.x1 + x.width / 2 - O.width / 2 : "right" === this.horizontalAlign && (v = x.x2 - 2 - O.width - A), J = this.horizontalAlign,
              this.width = O.width, this.height = O.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (v = x.x1 + 2, y = x.y2 - 2 - (this.maxWidth / 2 - O.width / 2), G = -90, M = "left", this.width = O.height, this.height = O.width) : "right" === this.horizontalAlign ? (v = x.x2 - 2, y = x.y1 + 2 + (this.maxWidth / 2 - O.width / 2), G = 90, M = "right", this.width = O.height, this.height = O.width) : "center" === this.horizontalAlign && (y = f.y1 + (f.height / 2 - O.height / 2), v = f.x1 + (f.width / 2 - O.width / 2), M = "center", this.width = O.width, this.height = O.height), J = "center");
          E.x =
              v;
          E.y = y;
          E.angle = G;
          E.horizontalAlign = J;
          this._textBlock = E;
          f.layoutManager.registerSpace(M, {
              width: this.width + ("left" === M || "right" === M ? this.margin + 2 : 0),
              height: this.height + ("top" === M || "bottom" === M ? this.margin + 2 : 0)
          });
          this.bounds = {
              x1: v,
              y1: y,
              x2: v + this.width,
              y2: y + this.height
          };
          this.ctx.textBaseline = "top"
      }
  };
  Ia.prototype.render = function() {
      this._textBlock && this._textBlock.render(!0)
  };
  ga(Oa, S);
  Oa.prototype.setLayout = Ia.prototype.setLayout;
  Oa.prototype.render = Ia.prototype.render;
  bb.prototype.get = function(n, x) {
      var v =
          null;
      0 < this.pool.length ? (v = this.pool.pop(), Va(v, n, x)) : v = ra(n, x);
      return v
  };
  bb.prototype.release = function(n) {
      this.pool.push(n)
  };
  ga(Pa, S);
  var Ta = {
      addTheme: function(n, x) {
          cb[n] = x
      },
      addColorSet: function(n, x) {
          wa[n] = x
      },
      addCultureInfo: function(n, x) {
          Sa[n] = x
      },
      formatNumber: function(n, x, v) {
          v = v || "en";
          if (Sa[v]) return X(n, x || "#,##0.##", new Pa(v));
          throw "Unknown Culture Name";
      },
      formatDate: function(n, x, v) {
          v = v || "en";
          if (Sa[v]) return ma(n, x || "DD MMM YYYY", new Pa(v));
          throw "Unknown Culture Name";
      }
  };
  "undefined" !== typeof module &&
      "undefined" !== typeof module.exports ? module.exports = Ta : "function" === typeof define && define.amd ? define([], function() {
          return Ta
      }) : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.CanvasJS = window.CanvasJS ? window.CanvasJS : Ta);
  var Ka = Ta.Chart = function() {
      function f(a, e) {
          return a.x - e.x
      }

      function m(a, e, b) {
          e = e || {};
          n(b) ? (this.predefinedThemes = cb, this.optionsName =
              this.parent = this.index = null) : (this.parent = b.parent, this.index = b.index, this.predefinedThemes = b.predefinedThemes, this.optionsName = b.optionsName, this.stockChart = b.stockChart, this.panel = a, this.isOptionsInArray = b.isOptionsInArray);
          this.theme = n(e.theme) || n(this.predefinedThemes[e.theme]) ? "light1" : e.theme;
          m.base.constructor.call(this, "Chart", this.optionsName, e, this.index, this.parent);
          var c = this;
          this._containerId = a;
          this._objectsInitialized = !1;
          this.overlaidCanvasCtx = this.ctx = null;
          this._indexLabels = [];
          this._panTimerId =
              0;
          this._lastTouchEventType = "";
          this._lastTouchData = null;
          this.isAnimating = !1;
          this.renderCount = 0;
          this.disableToolTip = this.animatedRender = !1;
          this.canvasPool = new bb;
          this.allDOMEventHandlers = [];
          this.panEnabled = !1;
          this._defaultCursor = "default";
          this.plotArea = {
              canvas: null,
              ctx: null,
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 0,
              width: 0,
              height: 0
          };
          this._dataInRenderedOrder = [];
          (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", e = a = 0, a = this.options.width ?
              this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width, e = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height, this.width = a, this.height = e, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this._selectedColorSet = "undefined" !== typeof wa[this.colorSet] ? wa[this.colorSet] : wa.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position =
              "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", x || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = ra(a, e), this._preRenderCanvas = ra(a, e), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext &&
              (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ha(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", Ha(this._preRenderCtx), x ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ra(a, e), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")),
                  this.overlaidCanvas = ra(a, e), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline =
                      "top", Ha(this.overlaidCanvasCtx)), this._eventManager = new $(this), this.windowResizeHandler = y(window, "resize", function() {
                      c._updateSize() && c.render()
                  }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px;", this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
                      x1: 0,
                      y1: 0,
                      x2: this.width,
                      y2: this.height
                  }, y(this.overlaidCanvas, "click", function(a) {
                          c._mouseEventHandler(a)
                      },
                      this.allDOMEventHandlers), y(this.overlaidCanvas, "mousemove", function(a) {
                      c._mouseEventHandler(a)
                  }, this.allDOMEventHandlers), y(this.overlaidCanvas, "mouseup", function(a) {
                      c._mouseEventHandler(a)
                  }, this.allDOMEventHandlers), y(this.overlaidCanvas, "mousedown", function(a) {
                      c._mouseEventHandler(a);
                      ya(c._dropdownMenu)
                  }, this.allDOMEventHandlers), y(this.overlaidCanvas, "mouseout", function(a) {
                      c._mouseEventHandler(a)
                  }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" :
                      "touchstart",
                      function(a) {
                          c._touchEventHandler(a)
                      }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) {
                      c._touchEventHandler(a)
                  }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) {
                      c._touchEventHandler(a)
                  }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) {
                      c._touchEventHandler(a)
                  }, this.allDOMEventHandlers),
                  this.toolTip = new ba(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = {
                      axisX: [],
                      axisX2: [],
                      axisY: [],
                      axisY2: []
                  })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
      }

      function v(a, e) {
          for (var b = [], c, h = 0; h < a.length; h++)
              if (0 == h) b.push(a[0]);
              else {
                  var g, F, s;
                  s = h - 1;
                  g = 0 === s ? 0 : s - 1;
                  F = s === a.length - 1 ? s : s + 1;
                  c = Math.abs((a[F].x - a[g].x) / (0 === a[F].x - a[s].x ? 0.01 : a[F].x - a[s].x)) * (e - 1) /
                      2 + 1;
                  var d = (a[F].x - a[g].x) / c;
                  c = (a[F].y - a[g].y) / c;
                  b[b.length] = a[s].x > a[g].x && 0 < d || a[s].x < a[g].x && 0 > d ? {
                      x: a[s].x + d / 3,
                      y: a[s].y + c / 3
                  } : {
                      x: a[s].x,
                      y: a[s].y + c / 9
                  };
                  s = h;
                  g = 0 === s ? 0 : s - 1;
                  F = s === a.length - 1 ? s : s + 1;
                  c = Math.abs((a[F].x - a[g].x) / (0 === a[s].x - a[g].x ? 0.01 : a[s].x - a[g].x)) * (e - 1) / 2 + 1;
                  d = (a[F].x - a[g].x) / c;
                  c = (a[F].y - a[g].y) / c;
                  b[b.length] = a[s].x > a[g].x && 0 < d || a[s].x < a[g].x && 0 > d ? {
                      x: a[s].x - d / 3,
                      y: a[s].y - c / 3
                  } : {
                      x: a[s].x,
                      y: a[s].y - c / 9
                  };
                  b[b.length] = a[h]
              } return b
      }

      function G(a, e, b, c, h, g, F, s, d, l) {
          var p = 0;
          l ? (F.color = g, s.color = g) :
              l = 1;
          p = d ? Math.abs(h - b) : Math.abs(c - e);
          p = 0 < F.trimLength ? Math.abs(p * F.trimLength / 100) : Math.abs(p - F.length);
          d ? (b += p / 2, h -= p / 2) : (e += p / 2, c -= p / 2);
          var p = 1 === Math.round(F.thickness) % 2 ? 0.5 : 0,
              r = 1 === Math.round(s.thickness) % 2 ? 0.5 : 0;
          a.save();
          a.globalAlpha = l;
          a.strokeStyle = s.color || g;
          a.lineWidth = s.thickness || 2;
          a.setLineDash && a.setLineDash(M(s.dashType, s.thickness));
          a.beginPath();
          d && 0 < s.thickness ? (a.moveTo(c - F.thickness / 2, Math.round((b + h) / 2) - r), a.lineTo(e + F.thickness / 2, Math.round((b + h) / 2) - r)) : 0 < s.thickness && (a.moveTo(Math.round((e +
              c) / 2) - r, b + F.thickness / 2), a.lineTo(Math.round((e + c) / 2) - r, h - F.thickness / 2));
          a.stroke();
          a.strokeStyle = F.color || g;
          a.lineWidth = F.thickness || 2;
          a.setLineDash && a.setLineDash(M(F.dashType, F.thickness));
          a.beginPath();
          d && 0 < F.thickness ? (a.moveTo(c - p, b), a.lineTo(c - p, h), a.moveTo(e + p, b), a.lineTo(e + p, h)) : 0 < F.thickness && (a.moveTo(e, b + p), a.lineTo(c, b + p), a.moveTo(e, h - p), a.lineTo(c, h - p));
          a.stroke();
          a.restore()
      }

      function J(a, e) {
          J.base.constructor.call(this, "Legend", "legend", e, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.ghostCtx = this.chart._eventManager.ghostCtx;
          this.items = [];
          this.optionsName = "legend";
          this.height = this.width = 0;
          this.orientation = null;
          this.dataSeries = [];
          this.bounds = {
              x1: null,
              y1: null,
              x2: null,
              y2: null
          };
          "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
          this.lineHeight = gb(this.fontFamily, this.fontSize, this.fontWeight);
          this.horizontalSpacing = this.fontSize
      }

      function E(a, e, b, c) {
          E.base.constructor.call(this, "DataSeries", "data", e, b,
              a);
          this.chart = a;
          this.canvas = a.canvas;
          this._ctx = a.canvas.ctx;
          this.index = b;
          this.noDataPointsInPlotArea = 0;
          this.id = c;
          this.chart._eventManager.objectMap[c] = {
              id: c,
              objectType: "dataSeries",
              dataSeriesIndex: b
          };
          a = e.dataPoints ? e.dataPoints.length : 0;
          this.dataPointEOs = [];
          for (e = 0; e < a; e++) this.dataPointEOs[e] = {};
          this.dataPointIds = [];
          this.plotUnit = [];
          this.axisY = this.axisX = null;
          this.optionsName = "data";
          this.isOptionsInArray = !0;
          null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity =
              1);
          this.axisPlacement = this.getDefaultAxisPlacement();
          "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
      }

      function A(a, e, b, c, h, g) {
          A.base.constructor.call(this, "Axis", e, b, c, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = a.ctx;
          this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
          this.labels = [];
          this.dataSeries = [];
          this._stripLineLabels = this._ticks = this._labels = null;
          this.dataInfo = {
              min: Infinity,
              max: -Infinity,
              viewPortMin: Infinity,
              viewPortMax: -Infinity,
              minDiff: Infinity
          };
          this.isOptionsInArray = !0;
          "axisX" === h ? ("left" === g || "bottom" === g ? (this.optionsName = "axisX", n(this.chart.sessionVariables.axisX[c]) && (this.chart.sessionVariables.axisX[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[c]) : (this.optionsName = "axisX2", n(this.chart.sessionVariables.axisX2[c]) && (this.chart.sessionVariables.axisX2[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[c]), this.options.interval || (this.intervalType = null)) : "left" ===
              g || "bottom" === g ? (this.optionsName = "axisY", n(this.chart.sessionVariables.axisY[c]) && (this.chart.sessionVariables.axisY[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[c]) : (this.optionsName = "axisY2", n(this.chart.sessionVariables.axisY2[c]) && (this.chart.sessionVariables.axisY2[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[c]);
          "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
          "undefined" === typeof this.options.labelFontSize &&
              (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
          this.type = h;
          "axisX" !== h || b && "undefined" !== typeof b.gridThickness || (this.gridThickness = 0);
          this._position = g;
          this.lineCoordinates = {
              x1: null,
              y1: null,
              x2: null,
              y2: null,
              width: null
          };
          this.labelAngle = (this.labelAngle % 360 + 360) % 360;
          90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
          this.options.scaleBreaks && (this.scaleBreaks = new L(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId,
              this));
          this.stripLines = [];
          if (this.options.stripLines && 0 < this.options.stripLines.length)
              for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new O(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
          this.options.crosshair && (this.crosshair = new V(this.chart, this.options.crosshair, this));
          this._titleTextBlock = null;
          this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum =
              null);
          this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
          this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
          this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null ===
              this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
          null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
          null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
          this.trackChanges("viewportMinimum");
          this.trackChanges("viewportMaximum")
      }

      function L(a, e, b, c) {
          L.base.constructor.call(this,
              "ScaleBreaks", "scaleBreaks", e, null, c);
          this.id = b;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = c;
          this.optionsName = "scaleBreaks";
          this.isOptionsInArray = !1;
          this._appliedBreaks = [];
          this.customBreaks = [];
          this.autoBreaks = [];
          "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
          this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
          if (this.options.customBreaks &&
              0 < this.options.customBreaks.length) {
              for (a = 0; a < this.options.customBreaks.length; a++) this.customBreaks.push(new W(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
              this._appliedBreaks.sort(function(a, c) {
                  return a.startValue - c.startValue
              });
              for (a = 0; a < this._appliedBreaks.length - 1; a++) this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--)
          }
      }

      function W(a, e, b, c, h, g) {
          W.base.constructor.call(this, "Break", e, b, c, g);
          this.id = h;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.scaleBreaks = g;
          this.optionsName =
              e;
          this.isOptionsInArray = !0;
          this.type = b.type ? this.type : g.type;
          this.fillOpacity = n(b.fillOpacity) ? g.fillOpacity : this.fillOpacity;
          this.lineThickness = n(b.lineThickness) ? g.lineThickness : this.lineThickness;
          this.color = b.color ? this.color : g.color;
          this.lineColor = b.lineColor ? this.lineColor : g.lineColor;
          this.lineDashType = b.lineDashType ? this.lineDashType : g.lineDashType;
          !n(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
          !n(this.endValue) && this.endValue.getTime && (this.endValue =
              this.endValue.getTime());
          "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
          this.spacing = "undefined" === typeof b.spacing ? g.spacing : b.spacing;
          "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = g.spacing);
          this.size = g.parent.logarithmic ?
              1 : 0
      }

      function O(a, e, b, c, h) {
          O.base.constructor.call(this, "StripLine", "stripLines", e, b, h);
          this.id = c;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.label = this.label;
          this.axis = h;
          this.optionsName = "stripLines";
          this.isOptionsInArray = !0;
          this._thicknessType = "pixel";
          null !== this.startValue && null !== this.endValue && (this.value = h.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() :
              this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null)
      }

      function V(a, e, b) {
          V.base.constructor.call(this, "Crosshair", "crosshair", e, null, b);
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = b;
          this.optionsName = "crosshair";
          this._thicknessType = "pixel"
      }

      function ba(a, e) {
          ba.base.constructor.call(this, "ToolTip", "toolTip", e, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.currentDataPointIndex = this.currentSeriesIndex = -1;
          this._prevY = this._prevX =
              NaN;
          this.containerTransitionDuration = 0.1;
          this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
          this.optionsName = "toolTip";
          this._initialize()
      }

      function $(a) {
          this.chart = a;
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.ghostCanvas = ra(this.chart.width, this.chart.height);
          this.ghostCtx = this.ghostCanvas.getContext("2d");
          this.mouseoveredObjectMaps = []
      }

      function ea(a) {
          this.chart = a;
          this.ctx = this.chart.plotArea.ctx;
          this.animations = [];
          this.animationRequestId = null
      }
      ga(m, S);
      m.prototype.destroy = function() {
          var a = this.allDOMEventHandlers;
          this._animator && this._animator.cancelAllAnimations();
          this._panTimerId && clearTimeout(this._panTimerId);
          for (var e = 0; e < a.length; e++) ib(a[e][0], a[e][1], a[e][2], a[e][3]);
          this.allDOMEventHandlers = [];
          for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes();) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
          for (; this.container &&
              this.container.hasChildNodes();) this.container.removeChild(this.container.lastChild);
          for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes();) this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
          this.overlaidCanvas = this.canvas = this.container = this._canvasJSContainer = null;
          this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = this._breaksCanvas = this._preRenderCanvas = this.toolTip.container = null
      };
      m.prototype._updateOptions = function() {
          var a = this;
          this.updateOption("width");
          this.updateOption("height");
          this.updateOption("dataPointWidth");
          this.updateOption("dataPointMinWidth");
          this.updateOption("dataPointMaxWidth");
          this.updateOption("interactivityEnabled");
          this.updateOption("theme");
          this.updateOption("colorSet") && (this._selectedColorSet = "undefined" !== typeof wa[this.colorSet] ? wa[this.colorSet] : wa.colorSet1);
          this.updateOption("backgroundColor");
          this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
          this.updateOption("culture");
          this._cultureInfo = new Pa(this.options.culture);
          this.updateOption("animationEnabled");
          this.animationEnabled = this.animationEnabled && x;
          this.updateOption("animationDuration");
          this.updateOption("rangeChanging");
          this.updateOption("rangeChanged");
          this.updateOption("exportEnabled");
          this.updateOption("exportFileName");
          this.updateOption("zoomType");
          if (this.options.zoomEnabled || this.panEnabled) {
              if (!this._zoomButton) {
                  var e = !1;
                  ya(this._zoomButton = document.createElement("button"));
                  Ba(this, this._zoomButton, "pan");
                  this._toolBar.appendChild(this._zoomButton);
                  this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor;
                  y(this._zoomButton, "touchstart", function(a) {
                      e = !0
                  }, this.allDOMEventHandlers);
                  y(this._zoomButton, "click", function() {
                      a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, Ba(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, Ba(a, a._zoomButton, "pan"));
                      a.render()
                  }, this.allDOMEventHandlers);
                  y(this._zoomButton, "mouseover", function() {
                      e ? e = !1 : (pa(a._zoomButton, {
                          backgroundColor: a.toolbar.backgroundColorOnHover,
                          color: a.toolbar.fontColorOnHover,
                          transition: "0.4s",
                          WebkitTransition: "0.4s"
                      }), 0 >= navigator.userAgent.search("MSIE") && pa(a._zoomButton.childNodes[0], {
                          WebkitFilter: "invert(100%)",
                          filter: "invert(100%)"
                      }))
                  }, this.allDOMEventHandlers);
                  y(this._zoomButton, "mouseout", function() {
                          e || (pa(a._zoomButton, {
                              backgroundColor: a.toolbar.backgroundColor,
                              color: a.toolbar.fontColor,
                              transition: "0.4s",
                              WebkitTransition: "0.4s"
                          }), 0 >= navigator.userAgent.search("MSIE") && pa(a._zoomButton.childNodes[0], {
                              WebkitFilter: "invert(0%)",
                              filter: "invert(0%)"
                          }))
                      },
                      this.allDOMEventHandlers)
              }
              this._resetButton || (e = !1, ya(this._resetButton = document.createElement("button")), Ba(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness : 0) + "px solid " + this.toolbar.borderColor, this._toolBar.appendChild(this._resetButton), y(this._resetButton, "touchstart", function(a) {
                  e = !0
              }, this.allDOMEventHandlers), y(this._resetButton, "click", function() {
                  a.toolTip.hide();
                  a.toolTip.dispatchEvent("hidden", {
                          chart: a,
                          toolTip: a.toolTip
                      },
                      a.toolTip);
                  a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, Ba(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1);
                  if (a.sessionVariables.axisX)
                      for (var c = 0; c < a.sessionVariables.axisX.length; c++) a.sessionVariables.axisX[c].newViewportMinimum = null, a.sessionVariables.axisX[c].newViewportMaximum = null;
                  if (a.sessionVariables.axisX2)
                      for (c = 0; c < a.sessionVariables.axisX2.length; c++) a.sessionVariables.axisX2[c].newViewportMinimum =
                          null, a.sessionVariables.axisX2[c].newViewportMaximum = null;
                  if (a.sessionVariables.axisY)
                      for (c = 0; c < a.sessionVariables.axisY.length; c++) a.sessionVariables.axisY[c].newViewportMinimum = null, a.sessionVariables.axisY[c].newViewportMaximum = null;
                  if (a.sessionVariables.axisY2)
                      for (c = 0; c < a.sessionVariables.axisY2.length; c++) a.sessionVariables.axisY2[c].newViewportMinimum = null, a.sessionVariables.axisY2[c].newViewportMaximum = null;
                  a.resetOverlayedCanvas();
                  ya(a._zoomButton, a._resetButton);
                  a.stockChart && (a.stockChart._rangeEventParameter = {
                      stockChart: a.stockChart,
                      source: "chart",
                      index: a.stockChart.charts.indexOf(a),
                      minimum: null,
                      maximum: null
                  });
                  a._dispatchRangeEvent("rangeChanging", "reset");
                  a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
                  a.render();
                  a.syncCharts && a.syncCharts(null, null);
                  a._dispatchRangeEvent("rangeChanged", "reset");
                  a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged",
                      a.stockChart._rangeEventParameter, a.stockChart))
              }, this.allDOMEventHandlers), y(this._resetButton, "mouseover", function() {
                  e || (pa(a._resetButton, {
                      backgroundColor: a.toolbar.backgroundColorOnHover,
                      color: a.toolbar.hoverFfontColorOnHoverontColor,
                      transition: "0.4s",
                      WebkitTransition: "0.4s"
                  }), 0 >= navigator.userAgent.search("MSIE") && pa(a._resetButton.childNodes[0], {
                      WebkitFilter: "invert(100%)",
                      filter: "invert(100%)"
                  }))
              }, this.allDOMEventHandlers), y(this._resetButton, "mouseout", function() {
                  e || (pa(a._resetButton, {
                      backgroundColor: a.toolbar.backgroundColor,
                      color: a.toolbar.fontColor,
                      transition: "0.4s",
                      WebkitTransition: "0.4s"
                  }), 0 >= navigator.userAgent.search("MSIE") && pa(a._resetButton.childNodes[0], {
                      WebkitFilter: "invert(0%)",
                      filter: "invert(0%)"
                  }))
              }, this.allDOMEventHandlers), this.overlaidCanvas.style.cursor = a._defaultCursor);
              this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), Ua(a._zoomButton, a._resetButton)) :
                  (this.zoomEnabled = !0, this.panEnabled = !1))
          } else this.panEnabled = this.zoomEnabled = !1;
          kb(this);
          "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? Ba(a, a._zoomButton, "zoom") : Ba(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && Ba(a, a._resetButton, "reset"));
          this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
          for (var b in this.toolTip.options) this.toolTip.options.hasOwnProperty(b) && this.toolTip.updateOption(b)
      };
      m.prototype._updateSize = function() {
          return ob.call(this, [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas])
      };
      m.prototype._initialize = function() {
          this.isNavigator = n(this.parent) || n(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? !1 : !0;
          this.toolbar = new Ya(this, this.options.toolbar);
          this._animator ? this._animator.cancelAllAnimations() : this._animator = new ea(this);
          this.removeAllEventListeners();
          this.disableToolTip = !1;
          this._axes = [];
          this.funnelPyramidClickHandler = this.pieDoughnutClickHandler =
              null;
          this._updateOptions();
          this.animatedRender = x && this.animationEnabled && 0 === this.renderCount;
          this._updateSize();
          this.clearCanvas();
          this.ctx.beginPath();
          this.axisX = [];
          this.axisX2 = [];
          this.axisY = [];
          this.axisY2 = [];
          this._indexLabels = [];
          this._dataInRenderedOrder = [];
          this._events = [];
          this._eventManager && this._eventManager.reset();
          this.plotInfo = {
              axisPlacement: null,
              plotTypes: []
          };
          this.layoutManager = new La(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
          this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
          this.data = [];
          var a = 0,
              e = null;
          if (this.options.data) {
              for (var b = 0; b < this.options.data.length; b++)
                  if (a++, !this.options.data[b].type || 0 <= m._supportedChartTypes.indexOf(this.options.data[b].type)) {
                      var c = new E(this, this.options.data[b], a - 1, ++this._eventManager.lastObjectId);
                      "error" === c.type && (c.linkedDataSeriesIndex = n(this.options.data[b].linkedDataSeriesIndex) ? b - 1 : this.options.data[b].linkedDataSeriesIndex, 0 > c.linkedDataSeriesIndex || c.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof c.linkedDataSeriesIndex ||
                          "error" === this.options.data[c.linkedDataSeriesIndex].type) && (c.linkedDataSeriesIndex = null);
                      null === c.name && (c.name = "DataSeries " + a);
                      null === c.color ? 1 < this.options.data.length ? (c._colorSet = [this._selectedColorSet[c.index % this._selectedColorSet.length]], c.color = this._selectedColorSet[c.index % this._selectedColorSet.length]) : c._colorSet = "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type ||
                          "rangeArea" === c.type || "rangeSplineArea" === c.type || "candlestick" === c.type || "ohlc" === c.type || "waterfall" === c.type || "boxAndWhisker" === c.type ? [this._selectedColorSet[0]] : this._selectedColorSet : c._colorSet = [c.color];
                      null === c.markerSize && (("line" === c.type || "stepLine" === c.type || "spline" === c.type || 0 <= c.type.toLowerCase().indexOf("area")) && c.dataPoints && c.dataPoints.length < this.width / 16 || "scatter" === c.type) && (c.markerSize = 8);
                      "bubble" !== c.type && "scatter" !== c.type || !c.dataPoints || (c.dataPoints.some ? c.dataPoints.some(function(a) {
                              return a.x
                          }) &&
                          c.dataPoints.sort(f) : c.dataPoints.sort(f));
                      this.data.push(c);
                      var h = c.axisPlacement,
                          e = e || h,
                          g;
                      "normal" === h ? "xySwapped" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === h ? "normal" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ?
                          g = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === h ? "normal" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === h && "none" === this.plotInfo.axisPlacement && (g = 'You cannot combine "' + c.type + '" with pie chart');
                      if (g && window.console) {
                          window.console.log(g);
                          return
                      }
                  } for (b = 0; b < this.data.length; b++) {
                  if ("none" == e && "error" === this.data[b].type && window.console) {
                      window.console.log('You cannot combine "' + c.type + '" with error chart');
                      return
                  }
                  "error" === this.data[b].type && (this.data[b].axisPlacement = this.plotInfo.axisPlacement = e || "normal", this.data[b]._linkedSeries = null === this.data[b].linkedDataSeriesIndex ? null : this.data[this.data[b].linkedDataSeriesIndex])
              }
          }
          this._objectsInitialized = !0;
          this._plotAreaElements = []
      };
      m._supportedChartTypes =
          Da("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
      m.prototype.setLayout = function() {
          for (var a = this._plotAreaElements, e = 0; e < this.data.length; e++)
              if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
                  if (!this.data[e].axisYType ||
                      "primary" === this.data[e].axisYType)
                      if (this.options.axisY && 0 < this.options.axisY.length) {
                          if (!this.axisY.length)
                              for (var b = 0; b < this.options.axisY.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[b] = new A(this, "axisY", this.options.axisY[b], b, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[b] = new A(this, "axisY", this.options.axisY[b], b, "axisY", "bottom"));
                          this.data[e].axisY = this.axisY[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY.length ?
                              this.data[e].axisYIndex : 0];
                          this.axisY[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY.length ? this.data[e].axisYIndex : 0].dataSeries.push(this.data[e])
                      } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new A(this, "axisY", this.options.axisY, 0, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new A(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[e].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[e]);
                  if ("secondary" === this.data[e].axisYType)
                      if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                          if (!this.axisY2.length)
                              for (b = 0; b < this.options.axisY2.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[b] = new A(this, "axisY2", this.options.axisY2[b], b, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[b] = new A(this, "axisY2", this.options.axisY2[b], b, "axisY", "top"));
                          this.data[e].axisY = this.axisY2[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex <
                              this.axisY2.length ? this.data[e].axisYIndex : 0];
                          this.axisY2[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY2.length ? this.data[e].axisYIndex : 0].dataSeries.push(this.data[e])
                      } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new A(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new A(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[e].axisY = this.axisY2[0],
                          this.axisY2[0].dataSeries.push(this.data[e]);
                  if (!this.data[e].axisXType || "primary" === this.data[e].axisXType)
                      if (this.options.axisX && 0 < this.options.axisX.length) {
                          if (!this.axisX.length)
                              for (b = 0; b < this.options.axisX.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[b] = new A(this, "axisX", this.options.axisX[b], b, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[b] = new A(this, "axisX", this.options.axisX[b], b, "axisX", "left"));
                          this.data[e].axisX =
                              this.axisX[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX.length ? this.data[e].axisXIndex : 0];
                          this.axisX[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX.length ? this.data[e].axisXIndex : 0].dataSeries.push(this.data[e])
                      } else this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new A(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new A(this, "axisX", this.options.axisX,
                          0, "axisX", "left"))), this.data[e].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[e]);
                  if ("secondary" === this.data[e].axisXType)
                      if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                          if (!this.axisX2.length)
                              for (b = 0; b < this.options.axisX2.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[b] = new A(this, "axisX2", this.options.axisX2[b], b, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[b] = new A(this, "axisX2", this.options.axisX2[b],
                                  b, "axisX", "right"));
                          this.data[e].axisX = this.axisX2[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX2.length ? this.data[e].axisXIndex : 0];
                          this.axisX2[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX2.length ? this.data[e].axisXIndex : 0].dataSeries.push(this.data[e])
                      } else this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new A(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] =
                          new A(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[e].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[e])
              } if (this.axisY) {
              for (b = 1; b < this.axisY.length; b++) "undefined" === typeof this.axisY[b].options.gridThickness && (this.axisY[b].gridThickness = 0);
              for (b = 0; b < this.axisY.length - 1; b++) "undefined" === typeof this.axisY[b].options.margin && (this.axisY[b].margin = 10)
          }
          if (this.axisY2) {
              for (b = 1; b < this.axisY2.length; b++) "undefined" === typeof this.axisY2[b].options.gridThickness && (this.axisY2[b].gridThickness =
                  0);
              for (b = 0; b < this.axisY2.length - 1; b++) "undefined" === typeof this.axisY2[b].options.margin && (this.axisY2[b].margin = 10)
          }
          this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
          if (this.axisX)
              for (b = 0; b < this.axisX.length; b++) "undefined" === typeof this.axisX[b].options.gridThickness &&
                  (this.axisX[b].gridThickness = 0);
          if (this.axisX2)
              for (b = 0; b < this.axisX2.length; b++) "undefined" === typeof this.axisX2[b].options.gridThickness && (this.axisX2[b].gridThickness = 0);
          this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
          b = !1;
          if (0 < this._axes.length &&
              this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled))
              for (e = 0; e < this._axes.length; e++)
                  if (null !== this._axes[e].viewportMinimum || null !== this._axes[e].viewportMaximum) {
                      b = !0;
                      break
                  } b ? (Ua(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness :
              0) + "px solid " + this.toolbar.borderColor) : (ya(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1));
          ub(this);
          this._processData();
          this.options.title && (this.title = new Ia(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
          this.subtitles = [];
          if (this.options.subtitles)
              for (e = 0; e < this.options.subtitles.length; e++) b = new Oa(this, this.options.subtitles[e],
                  e), this.subtitles.push(b), b.dockInsidePlotArea ? a.push(b) : b.setLayout();
          this.legend = new J(this, this.options.legend);
          for (e = 0; e < this.data.length; e++)(this.data[e].showInLegend || "pie" === this.data[e].type || "doughnut" === this.data[e].type || "funnel" === this.data[e].type || "pyramid" === this.data[e].type) && this.legend.dataSeries.push(this.data[e]);
          this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
          for (e = 0; e < this._axes.length; e++)
              if (this._axes[e].scaleBreaks && this._axes[e].scaleBreaks._appliedBreaks.length) {
                  x ?
                      (this._breaksCanvas = ra(this.width, this.height, !0), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
                  break
              } this._preRenderCanvas = ra(this.width, this.height);
          this._preRenderCtx = this._preRenderCanvas.getContext("2d");
          "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || A.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace())
      };
      m.prototype.renderElements =
          function() {
              var a = this._plotAreaElements;
              this.title && !this.title.dockInsidePlotArea && this.title.render();
              for (var e = 0; e < this.subtitles.length; e++) this.subtitles[e].dockInsidePlotArea || this.subtitles[e].render();
              this.legend.dockInsidePlotArea || this.legend.render();
              if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) A.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
              else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
              else return;
              for (e = 0; e < a.length; e++) a[e].setLayout(), a[e].render();
              var b = [];
              if (this.animatedRender) {
                  var c = ra(this.width, this.height);
                  c.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
              }
              wb(this);
              var a = this.ctx.miterLimit,
                  h;
              this.ctx.miterLimit = 3;
              x && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                  0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
              for (e = 0; e < this.plotInfo.plotTypes.length; e++)
                  for (var g = this.plotInfo.plotTypes[e], F = 0; F < g.plotUnits.length; F++) {
                      var s = g.plotUnits[F],
                          d = null;
                      s.targetCanvas = null;
                      this.animatedRender && (s.targetCanvas = ra(this.width, this.height), s.targetCanvasCtx = s.targetCanvas.getContext("2d"), h = s.targetCanvasCtx.miterLimit, s.targetCanvasCtx.miterLimit = 3);
                      "line" === s.type ? d = this.renderLine(s) : "stepLine" === s.type ? d = this.renderStepLine(s) :
                          "spline" === s.type ? d = this.renderSpline(s) : "column" === s.type ? d = this.renderColumn(s) : "bar" === s.type ? d = this.renderBar(s) : "area" === s.type ? d = this.renderArea(s) : "stepArea" === s.type ? d = this.renderStepArea(s) : "splineArea" === s.type ? d = this.renderSplineArea(s) : "stackedColumn" === s.type ? d = this.renderStackedColumn(s) : "stackedColumn100" === s.type ? d = this.renderStackedColumn100(s) : "stackedBar" === s.type ? d = this.renderStackedBar(s) : "stackedBar100" === s.type ? d = this.renderStackedBar100(s) : "stackedArea" === s.type ? d = this.renderStackedArea(s) :
                          "stackedArea100" === s.type ? d = this.renderStackedArea100(s) : "bubble" === s.type ? d = d = this.renderBubble(s) : "scatter" === s.type ? d = this.renderScatter(s) : "pie" === s.type ? this.renderPie(s) : "doughnut" === s.type ? this.renderPie(s) : "funnel" === s.type ? d = this.renderFunnel(s) : "pyramid" === s.type ? d = this.renderFunnel(s) : "candlestick" === s.type ? d = this.renderCandlestick(s) : "ohlc" === s.type ? d = this.renderCandlestick(s) : "rangeColumn" === s.type ? d = this.renderRangeColumn(s) : "error" === s.type ? d = this.renderError(s) : "rangeBar" === s.type ?
                          d = this.renderRangeBar(s) : "rangeArea" === s.type ? d = this.renderRangeArea(s) : "rangeSplineArea" === s.type ? d = this.renderRangeSplineArea(s) : "waterfall" === s.type ? d = this.renderWaterfall(s) : "boxAndWhisker" === s.type && (d = this.renderBoxAndWhisker(s));
                      for (var l = 0; l < s.dataSeriesIndexes.length; l++) this._dataInRenderedOrder.push(this.data[s.dataSeriesIndexes[l]]);
                      this.animatedRender && (s.targetCanvasCtx.miterLimit = h, d && b.push(d))
                  }
              this.ctx.miterLimit = a;
              this.animatedRender && this._breaksCanvasCtx && b.push({
                  source: this._breaksCanvasCtx,
                  dest: this.plotArea.ctx,
                  animationCallback: w.fadeInAnimation,
                  easingFunction: w.easing.easeInQuad,
                  animationBase: 0,
                  startTimePercent: 0.7
              });
              this.animatedRender && 0 < this._indexLabels.length && (h = ra(this.width, this.height).getContext("2d"), b.push(this.renderIndexLabels(h)));
              var p = this;
              if (0 < b.length) p.disableToolTip = !0, p._animator.animate(200, p.animationDuration, function(a) {
                  p.ctx.clearRect(0, 0, p.width, p.height);
                  p.ctx.drawImage(c, 0, 0, Math.floor(p.width * ka), Math.floor(p.height * ka), 0, 0, p.width, p.height);
                  for (var e =
                          0; e < b.length; e++) d = b[e], 1 > a && "undefined" !== typeof d.startTimePercent ? a >= d.startTimePercent && d.animationCallback(d.easingFunction(a - d.startTimePercent, 0, 1, 1 - d.startTimePercent), d) : d.animationCallback(d.easingFunction(a, 0, 1, 1), d);
                  p.dispatchEvent("dataAnimationIterationEnd", {
                      chart: p
                  })
              }, function() {
                  b = [];
                  for (var a = 0; a < p.plotInfo.plotTypes.length; a++)
                      for (var e = p.plotInfo.plotTypes[a], h = 0; h < e.plotUnits.length; h++) e.plotUnits[h].targetCanvas = null;
                  c = null;
                  p.disableToolTip = !1;
                  p.dispatchEvent("dataAnimationEnd", {
                      chart: p
                  })
              });
              else {
                  if (p._breaksCanvas)
                      if (x) p.plotArea.ctx.drawImage(p._breaksCanvas, 0, 0, this.width, this.height);
                      else
                          for (l = 0; l < p._axes.length; l++) p._axes[l].createMask();
                  0 < p._indexLabels.length && p.renderIndexLabels();
                  p.dispatchEvent("dataAnimationIterationEnd", {
                      chart: p
                  });
                  p.dispatchEvent("dataAnimationEnd", {
                      chart: p
                  })
              }
              this.attachPlotAreaEventHandlers();
              this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || ya(this._zoomButton, this._resetButton);
              this.toolTip._updateToolTip();
              this.renderCount++;
              Na && (p = this, setTimeout(function() {
                  var a = document.getElementById("ghostCanvasCopy");
                  a && (Va(a, p.width, p.height), a.getContext("2d").drawImage(p._eventManager.ghostCanvas, 0, 0))
              }, 2E3));
              this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
              for (l = 0; l < this._axes.length; l++) this._axes[l].maskCanvas && (delete this._axes[l].maskCanvas, delete this._axes[l].maskCtx)
          };
      m.prototype.render = function(a) {
          a && (this.options = a);
          this._initialize();
          this.setLayout();
          this.renderElements();
          this._preRenderCanvas = null
      };
      m.prototype.attachPlotAreaEventHandlers = function() {
          this.attachEvent({
              context: this,
              chart: this,
              mousedown: this._plotAreaMouseDown,
              mouseup: this._plotAreaMouseUp,
              mousemove: this._plotAreaMouseMove,
              cursor: this.panEnabled ? "move" : "default",
              capture: !0,
              bounds: this.plotArea
          })
      };
      m.prototype.categoriseDataSeries = function() {
          for (var a = "", e = 0; e < this.data.length; e++)
              if (a = this.data[e], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= m._supportedChartTypes.indexOf(a.type)) {
                  for (var b =
                          null, c = !1, h = null, g = !1, F = 0; F < this.plotInfo.plotTypes.length; F++)
                      if (this.plotInfo.plotTypes[F].type === a.type) {
                          c = !0;
                          b = this.plotInfo.plotTypes[F];
                          break
                      } c || (b = {
                      type: a.type,
                      totalDataSeries: 0,
                      plotUnits: []
                  }, this.plotInfo.plotTypes.push(b));
                  for (F = 0; F < b.plotUnits.length; F++)
                      if (b.plotUnits[F].axisYType === a.axisYType && b.plotUnits[F].axisXType === a.axisXType && b.plotUnits[F].axisYIndex === a.axisYIndex && b.plotUnits[F].axisXIndex === a.axisXIndex) {
                          g = !0;
                          h = b.plotUnits[F];
                          break
                      } g || (h = {
                      type: a.type,
                      previousDataSeriesCount: 0,
                      index: b.plotUnits.length,
                      plotType: b,
                      axisXType: a.axisXType,
                      axisYType: a.axisYType,
                      axisYIndex: a.axisYIndex,
                      axisXIndex: a.axisXIndex,
                      axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                      axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                      dataSeriesIndexes: [],
                      yTotals: []
                  }, b.plotUnits.push(h));
                  b.totalDataSeries++;
                  h.dataSeriesIndexes.push(e);
                  a.plotUnit = h
              } for (e = 0; e < this.plotInfo.plotTypes.length; e++)
              for (b = this.plotInfo.plotTypes[e], F = a = 0; F < b.plotUnits.length; F++) b.plotUnits[F].previousDataSeriesCount = a, a += b.plotUnits[F].dataSeriesIndexes.length
      };
      m.prototype.assignIdToDataPoints = function() {
          for (var a = 0; a < this.data.length; a++) {
              var e = this.data[a];
              if (e.dataPoints)
                  for (var b = e.dataPoints.length, c = 0; c < b; c++) e.dataPointIds[c] = ++this._eventManager.lastObjectId
          }
      };
      m.prototype._processData =
          function() {
              this.assignIdToDataPoints();
              this.categoriseDataSeries();
              for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
                  for (var e = this.plotInfo.plotTypes[a], b = 0; b < e.plotUnits.length; b++) {
                      var c = e.plotUnits[b];
                      "line" === c.type || "stepLine" === c.type || "spline" === c.type || "column" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "bar" === c.type || "bubble" === c.type || "scatter" === c.type ? this._processMultiseriesPlotUnit(c) : "stackedColumn" === c.type || "stackedBar" === c.type || "stackedArea" === c.type ?
                          this._processStackedPlotUnit(c) : "stackedColumn100" === c.type || "stackedBar100" === c.type || "stackedArea100" === c.type ? this._processStacked100PlotUnit(c) : "candlestick" === c.type || "ohlc" === c.type || "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type || "boxAndWhisker" === c.type ? this._processMultiYPlotUnit(c) : "waterfall" === c.type && this._processSpecificPlotUnit(c)
                  }
              this.calculateAutoBreaks()
          };
      m.prototype._processMultiseriesPlotUnit = function(a) {
          if (a.dataSeriesIndexes &&
              !(1 > a.dataSeriesIndexes.length))
              for (var e = a.axisY.dataInfo, b = a.axisX.dataInfo, c, h, g = !1, F = 0; F < a.dataSeriesIndexes.length; F++) {
                  var s = this.data[a.dataSeriesIndexes[F]],
                      d = 0,
                      l = !1,
                      p = !1,
                      r;
                  if ("normal" === s.axisPlacement || "xySwapped" === s.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ?
                      0 : -Infinity,
                      k = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                  if (s.dataPoints[d].x && s.dataPoints[d].x.getTime || "dateTime" === s.xValueType) g = !0;
                  for (d = 0; d < s.dataPoints.length; d++) {
                      "undefined" === typeof s.dataPoints[d].x && (s.dataPoints[d].x = d + (a.axisX.logarithmic ? 1 : 0));
                      s.dataPoints[d].x.getTime ?
                          (g = !0, c = s.dataPoints[d].x.getTime()) : c = s.dataPoints[d].x;
                      h = s.dataPoints[d].y;
                      c < b.min && (b.min = c);
                      c > b.max && (b.max = c);
                      h < e.min && "number" === typeof h && (e.min = h);
                      h > e.max && "number" === typeof h && (e.max = h);
                      if (0 < d) {
                          if (a.axisX.logarithmic) {
                              var C = c / s.dataPoints[d - 1].x;
                              1 > C && (C = 1 / C);
                              b.minDiff > C && 1 !== C && (b.minDiff = C)
                          } else C = c - s.dataPoints[d - 1].x, 0 > C && (C *= -1), b.minDiff > C && 0 !== C && (b.minDiff = C);
                          null !== h && null !== s.dataPoints[d - 1].y && (a.axisY.logarithmic ? (C = h / s.dataPoints[d - 1].y, 1 > C && (C = 1 / C), e.minDiff > C && 1 !== C && (e.minDiff =
                              C)) : (C = h - s.dataPoints[d - 1].y, 0 > C && (C *= -1), e.minDiff > C && 0 !== C && (e.minDiff = C)))
                      }
                      if (c < q && !l) null !== h && (r = c);
                      else {
                          if (!l && (l = !0, 0 < d)) {
                              d -= 2;
                              continue
                          }
                          if (c > k && !p) p = !0;
                          else if (c > k && p) continue;
                          s.dataPoints[d].label && (a.axisX.labels[c] = s.dataPoints[d].label);
                          c < b.viewPortMin && (b.viewPortMin = c);
                          c > b.viewPortMax && (b.viewPortMax = c);
                          null === h ? b.viewPortMin === c && r < c && (b.viewPortMin = r) : (h < e.viewPortMin && "number" === typeof h && (e.viewPortMin = h), h > e.viewPortMax && "number" === typeof h && (e.viewPortMax = h))
                      }
                  }
                  s.axisX.valueType =
                      s.xValueType = g ? "dateTime" : "number"
              }
      };
      m.prototype._processStackedPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
              for (var e = a.axisY.dataInfo, b = a.axisX.dataInfo, c, h, g = !1, F = [], s = [], d = Infinity, l = -Infinity, p = 0; p < a.dataSeriesIndexes.length; p++) {
                  var r = this.data[a.dataSeriesIndexes[p]],
                      q = 0,
                      k = !1,
                      C = !1,
                      f;
                  if ("normal" === r.axisPlacement || "xySwapped" === r.axisPlacement) var w = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ?
                      this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                      t = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                  if (r.dataPoints[q].x && r.dataPoints[q].x.getTime || "dateTime" === r.xValueType) g = !0;
                  for (q = 0; q < r.dataPoints.length; q++) {
                      "undefined" ===
                      typeof r.dataPoints[q].x && (r.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
                      r.dataPoints[q].x.getTime ? (g = !0, c = r.dataPoints[q].x.getTime()) : c = r.dataPoints[q].x;
                      h = n(r.dataPoints[q].y) ? 0 : r.dataPoints[q].y;
                      c < b.min && (b.min = c);
                      c > b.max && (b.max = c);
                      if (0 < q) {
                          if (a.axisX.logarithmic) {
                              var D = c / r.dataPoints[q - 1].x;
                              1 > D && (D = 1 / D);
                              b.minDiff > D && 1 !== D && (b.minDiff = D)
                          } else D = c - r.dataPoints[q - 1].x, 0 > D && (D *= -1), b.minDiff > D && 0 !== D && (b.minDiff = D);
                          null !== h && null !== r.dataPoints[q - 1].y && (a.axisY.logarithmic ? 0 < h && (D = h / r.dataPoints[q -
                              1].y, 1 > D && (D = 1 / D), e.minDiff > D && 1 !== D && (e.minDiff = D)) : (D = h - r.dataPoints[q - 1].y, 0 > D && (D *= -1), e.minDiff > D && 0 !== D && (e.minDiff = D)))
                      }
                      if (c < w && !k) null !== r.dataPoints[q].y && (f = c);
                      else {
                          if (!k && (k = !0, 0 < q)) {
                              q -= 2;
                              continue
                          }
                          if (c > t && !C) C = !0;
                          else if (c > t && C) continue;
                          r.dataPoints[q].label && (a.axisX.labels[c] = r.dataPoints[q].label);
                          c < b.viewPortMin && (b.viewPortMin = c);
                          c > b.viewPortMax && (b.viewPortMax = c);
                          null === r.dataPoints[q].y ? b.viewPortMin === c && f < c && (b.viewPortMin = f) : (a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + h, 0 <= h ?
                              F[c] ? F[c] += h : (F[c] = h, d = Math.min(h, d)) : s[c] ? s[c] += h : (s[c] = h, l = Math.max(h, l)))
                      }
                  }
                  a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (e.dataPointYPositiveSums ? (e.dataPointYPositiveSums.push.apply(e.dataPointYPositiveSums, F), e.dataPointYNegativeSums.push.apply(e.dataPointYPositiveSums, s)) : (e.dataPointYPositiveSums = F, e.dataPointYNegativeSums = s));
                  r.axisX.valueType = r.xValueType = g ? "dateTime" : "number"
              }
              for (q in F) F.hasOwnProperty(q) && !isNaN(q) && (a = F[q], a <
                  e.min && (e.min = Math.min(a, d)), a > e.max && (e.max = a), q < b.viewPortMin || q > b.viewPortMax || (a < e.viewPortMin && (e.viewPortMin = Math.min(a, d)), a > e.viewPortMax && (e.viewPortMax = a)));
              for (q in s) s.hasOwnProperty(q) && !isNaN(q) && (a = s[q], a < e.min && (e.min = a), a > e.max && (e.max = Math.max(a, l)), q < b.viewPortMin || q > b.viewPortMax || (a < e.viewPortMin && (e.viewPortMin = a), a > e.viewPortMax && (e.viewPortMax = Math.max(a, l))))
          }
      };
      m.prototype._processStacked100PlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
              for (var e =
                      a.axisY.dataInfo, b = a.axisX.dataInfo, c, h, g = !1, F = !1, s = !1, d = [], l = 0; l < a.dataSeriesIndexes.length; l++) {
                  var p = this.data[a.dataSeriesIndexes[l]],
                      r = 0,
                      q = !1,
                      k = !1,
                      C;
                  if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement) var f = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                      w = a.axisX.sessionVariables.newViewportMaximum ?
                      a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                  if (p.dataPoints[r].x && p.dataPoints[r].x.getTime || "dateTime" === p.xValueType) g = !0;
                  for (r = 0; r < p.dataPoints.length; r++) {
                      "undefined" === typeof p.dataPoints[r].x && (p.dataPoints[r].x = r + (a.axisX.logarithmic ? 1 : 0));
                      p.dataPoints[r].x.getTime ? (g = !0, c = p.dataPoints[r].x.getTime()) : c = p.dataPoints[r].x;
                      h = n(p.dataPoints[r].y) ? null : p.dataPoints[r].y;
                      c < b.min && (b.min = c);
                      c > b.max && (b.max = c);
                      if (0 < r) {
                          if (a.axisX.logarithmic) {
                              var t = c / p.dataPoints[r - 1].x;
                              1 > t && (t = 1 / t);
                              b.minDiff > t && 1 !== t && (b.minDiff = t)
                          } else t = c - p.dataPoints[r - 1].x, 0 > t && (t *= -1), b.minDiff > t && 0 !== t && (b.minDiff = t);
                          n(h) || null === p.dataPoints[r - 1].y || (a.axisY.logarithmic ? 0 < h && (t = h / p.dataPoints[r - 1].y, 1 > t && (t = 1 / t), e.minDiff > t && 1 !== t && (e.minDiff = t)) : (t = h - p.dataPoints[r - 1].y, 0 > t && (t *= -1), e.minDiff > t && 0 !== t && (e.minDiff = t)))
                      }
                      if (c < f && !q) null !== h && (C = c);
                      else {
                          if (!q && (q = !0, 0 < r)) {
                              r -= 2;
                              continue
                          }
                          if (c > w && !k) k = !0;
                          else if (c > w && k) continue;
                          p.dataPoints[r].label && (a.axisX.labels[c] = p.dataPoints[r].label);
                          c < b.viewPortMin && (b.viewPortMin = c);
                          c > b.viewPortMax && (b.viewPortMax = c);
                          null === h ? b.viewPortMin === c && C < c && (b.viewPortMin = C) : (a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + h, 0 <= h ? F = !0 : 0 > h && (s = !0), d[c] = d[c] ? d[c] + Math.abs(h) : Math.abs(h))
                      }
                  }
                  p.axisX.valueType = p.xValueType = g ? "dateTime" : "number"
              }
              a.axisY.logarithmic ? (e.max = n(e.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase,
                  -0.05) : Math.max(e.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), e.min = n(e.viewPortMin) ? 1 : Math.min(e.viewPortMin, 1)) : F && !s ? (e.max = n(e.viewPortMax) ? 99 : Math.max(e.viewPortMax, 99), e.min = n(e.viewPortMin) ? 1 : Math.min(e.viewPortMin, 1)) : F && s ? (e.max = n(e.viewPortMax) ? 99 : Math.max(e.viewPortMax, 99), e.min = n(e.viewPortMin) ? -99 : Math.min(e.viewPortMin, -99)) : !F && s && (e.max = n(e.viewPortMax) ? -1 : Math.max(e.viewPortMax, -1), e.min = n(e.viewPortMin) ? -99 : Math.min(e.viewPortMin, -99));
              e.viewPortMin = e.min;
              e.viewPortMax =
                  e.max;
              a.dataPointYSums = d
          }
      };
      m.prototype._processMultiYPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
              for (var e = a.axisY.dataInfo, b = a.axisX.dataInfo, c, h, g, F, s = !1, d = 0; d < a.dataSeriesIndexes.length; d++) {
                  var l = this.data[a.dataSeriesIndexes[d]],
                      p = 0,
                      r = !1,
                      q = !1,
                      k, C, n;
                  if ("normal" === l.axisPlacement || "xySwapped" === l.axisPlacement) var f = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum :
                      this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                      t = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                  if (l.dataPoints[p].x && l.dataPoints[p].x.getTime || "dateTime" === l.xValueType) s = !0;
                  for (p = 0; p < l.dataPoints.length; p++) {
                      "undefined" === typeof l.dataPoints[p].x &&
                          (l.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
                      l.dataPoints[p].x.getTime ? (s = !0, c = l.dataPoints[p].x.getTime()) : c = l.dataPoints[p].x;
                      if ((h = l.dataPoints[p].y) && h.length) {
                          g = Math.min.apply(null, h);
                          F = Math.max.apply(null, h);
                          C = !0;
                          for (var w = 0; w < h.length; w++) null === h.k && (C = !1);
                          C && (r || (n = k), k = c)
                      }
                      c < b.min && (b.min = c);
                      c > b.max && (b.max = c);
                      g < e.min && (e.min = g);
                      F > e.max && (e.max = F);
                      0 < p && (a.axisX.logarithmic ? (C = c / l.dataPoints[p - 1].x, 1 > C && (C = 1 / C), b.minDiff > C && 1 !== C && (b.minDiff = C)) : (C = c - l.dataPoints[p - 1].x, 0 > C && (C *= -1), b.minDiff >
                          C && 0 !== C && (b.minDiff = C)), h && (null !== h[0] && l.dataPoints[p - 1].y && null !== l.dataPoints[p - 1].y[0]) && (a.axisY.logarithmic ? (C = h[0] / l.dataPoints[p - 1].y[0], 1 > C && (C = 1 / C), e.minDiff > C && 1 !== C && (e.minDiff = C)) : (C = h[0] - l.dataPoints[p - 1].y[0], 0 > C && (C *= -1), e.minDiff > C && 0 !== C && (e.minDiff = C))));
                      if (!(c < f) || r) {
                          if (!r && (r = !0, 0 < p)) {
                              p -= 2;
                              k = n;
                              continue
                          }
                          if (c > t && !q) q = !0;
                          else if (c > t && q) continue;
                          l.dataPoints[p].label && (a.axisX.labels[c] = l.dataPoints[p].label);
                          c < b.viewPortMin && (b.viewPortMin = c);
                          c > b.viewPortMax && (b.viewPortMax = c);
                          if (b.viewPortMin === c && h)
                              for (w = 0; w < h.length; w++)
                                  if (null === h[w] && k < c) {
                                      b.viewPortMin = k;
                                      break
                                  } null === h ? b.viewPortMin === c && k < c && (b.viewPortMin = k) : (g < e.viewPortMin && (e.viewPortMin = g), F > e.viewPortMax && (e.viewPortMax = F))
                      }
                  }
                  l.axisX.valueType = l.xValueType = s ? "dateTime" : "number"
              }
      };
      m.prototype._processSpecificPlotUnit = function(a) {
          if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
              for (var e = a.axisY.dataInfo, b = a.axisX.dataInfo, c, h, g = !1, F = 0; F < a.dataSeriesIndexes.length; F++) {
                  var s = this.data[a.dataSeriesIndexes[F]],
                      d = 0,
                      l = !1,
                      p = !1,
                      r = c = 0;
                  if ("normal" === s.axisPlacement || "xySwapped" === s.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                      k = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ?
                      this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                  if (s.dataPoints[d].x && s.dataPoints[d].x.getTime || "dateTime" === s.xValueType) g = !0;
                  for (d = 0; d < s.dataPoints.length; d++) "undefined" !== typeof s.dataPoints[d].isCumulativeSum && !0 === s.dataPoints[d].isCumulativeSum ? (s.dataPointEOs[d].cumulativeSumYStartValue = 0, s.dataPointEOs[d].cumulativeSum = 0 === d ? 0 : s.dataPointEOs[d - 1].cumulativeSum, s.dataPoints[d].y = 0 === d ? 0 : s.dataPointEOs[d - 1].cumulativeSum) :
                      "undefined" !== typeof s.dataPoints[d].isIntermediateSum && !0 === s.dataPoints[d].isIntermediateSum ? (s.dataPointEOs[d].cumulativeSumYStartValue = r, s.dataPointEOs[d].cumulativeSum = 0 === d ? 0 : s.dataPointEOs[d - 1].cumulativeSum, s.dataPoints[d].y = 0 === d ? 0 : c, r = 0 === d ? 0 : s.dataPointEOs[d - 1].cumulativeSum, c = 0) : (h = "number" !== typeof s.dataPoints[d].y ? 0 : s.dataPoints[d].y, s.dataPointEOs[d].cumulativeSumYStartValue = 0 === d ? 0 : s.dataPointEOs[d - 1].cumulativeSum, s.dataPointEOs[d].cumulativeSum = 0 === d ? h : s.dataPointEOs[d - 1].cumulativeSum +
                          h, c += h);
                  for (d = 0; d < s.dataPoints.length; d++)
                      if ("undefined" === typeof s.dataPoints[d].x && (s.dataPoints[d].x = d + (a.axisX.logarithmic ? 1 : 0)), s.dataPoints[d].x.getTime ? (g = !0, c = s.dataPoints[d].x.getTime()) : c = s.dataPoints[d].x, h = s.dataPoints[d].y, c < b.min && (b.min = c), c > b.max && (b.max = c), s.dataPointEOs[d].cumulativeSum < e.min && (e.min = s.dataPointEOs[d].cumulativeSum), s.dataPointEOs[d].cumulativeSum > e.max && (e.max = s.dataPointEOs[d].cumulativeSum), 0 < d && (a.axisX.logarithmic ? (r = c / s.dataPoints[d - 1].x, 1 > r && (r = 1 / r), b.minDiff >
                              r && 1 !== r && (b.minDiff = r)) : (r = c - s.dataPoints[d - 1].x, 0 > r && (r *= -1), b.minDiff > r && 0 !== r && (b.minDiff = r)), null !== h && null !== s.dataPoints[d - 1].y && (a.axisY.logarithmic ? (h = s.dataPointEOs[d].cumulativeSum / s.dataPointEOs[d - 1].cumulativeSum, 1 > h && (h = 1 / h), e.minDiff > h && 1 !== h && (e.minDiff = h)) : (h = s.dataPointEOs[d].cumulativeSum - s.dataPointEOs[d - 1].cumulativeSum, 0 > h && (h *= -1), e.minDiff > h && 0 !== h && (e.minDiff = h)))), !(c < q) || l) {
                          if (!l && (l = !0, 0 < d)) {
                              d -= 2;
                              continue
                          }
                          if (c > k && !p) p = !0;
                          else if (c > k && p) continue;
                          s.dataPoints[d].label && (a.axisX.labels[c] =
                              s.dataPoints[d].label);
                          c < b.viewPortMin && (b.viewPortMin = c);
                          c > b.viewPortMax && (b.viewPortMax = c);
                          0 < d && (s.dataPointEOs[d - 1].cumulativeSum < e.viewPortMin && (e.viewPortMin = s.dataPointEOs[d - 1].cumulativeSum), s.dataPointEOs[d - 1].cumulativeSum > e.viewPortMax && (e.viewPortMax = s.dataPointEOs[d - 1].cumulativeSum));
                          s.dataPointEOs[d].cumulativeSum < e.viewPortMin && (e.viewPortMin = s.dataPointEOs[d].cumulativeSum);
                          s.dataPointEOs[d].cumulativeSum > e.viewPortMax && (e.viewPortMax = s.dataPointEOs[d].cumulativeSum)
                      } s.axisX.valueType =
                      s.xValueType = g ? "dateTime" : "number"
              }
      };
      m.prototype.calculateAutoBreaks = function() {
          function a(a, c, b, e) {
              if (e) return b = Math.pow(Math.min(b * a / c, c / a), 0.2), 1 >= b && (b = Math.pow(1 > a ? 1 / a : Math.min(c / a, a), 0.25)), {
                  startValue: a * b,
                  endValue: c / b
              };
              b = 0.2 * Math.min(b - c + a, c - a);
              0 >= b && (b = 0.25 * Math.min(c - a, Math.abs(a)));
              return {
                  startValue: a + b,
                  endValue: c - b
              }
          }

          function e(a) {
              if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                  var c = a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks,
                      b = a.axisY.scaleBreaks && a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks;
                  if (c || b)
                      for (var e = a.axisY.dataInfo, g = a.axisX.dataInfo, k, l = g.min, d = g.max, F = e.min, p = e.max, g = g._dataRanges, e = e._dataRanges, s, q = 0, r = 0; r < a.dataSeriesIndexes.length; r++) {
                          var f = h.data[a.dataSeriesIndexes[r]];
                          if (!(4 > f.dataPoints.length))
                              for (q = 0; q < f.dataPoints.length; q++)
                                  if (c && (s = (d + 1 - l) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, k = f.dataPoints[q].x.getTime ? f.dataPoints[q].x.getTime() :
                                          f.dataPoints[q].x, s = Math.floor((k - l) / s), k < g[s].min && (g[s].min = k), k > g[s].max && (g[s].max = k)), b) {
                                      var w = (p + 1 - F) * Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                                      if ((k = "waterfall" === a.type ? f.dataPointEOs[q].cumulativeSum : f.dataPoints[q].y) && k.length)
                                          for (var Ma = 0; Ma < k.length; Ma++) s = Math.floor((k[Ma] - F) / w), k[Ma] < e[s].min && (e[s].min = k[Ma]), k[Ma] > e[s].max && (e[s].max = k[Ma]);
                                      else n(k) || (s = Math.floor((k - F) / w), k < e[s].min && (e[s].min = k), k > e[s].max && (e[s].max = k))
                                  }
                      }
              }
          }

          function b(a) {
              if (a.dataSeriesIndexes &&
                  !(1 > a.dataSeriesIndexes.length) && a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks)
                  for (var c = a.axisX.dataInfo, b = c.min, e = c.max, g = c._dataRanges, k, l = 0, d = 0; d < a.dataSeriesIndexes.length; d++) {
                      var F = h.data[a.dataSeriesIndexes[d]];
                      if (!(4 > F.dataPoints.length))
                          for (l = 0; l < F.dataPoints.length; l++) k = (e + 1 - b) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, c = F.dataPoints[l].x.getTime ? F.dataPoints[l].x.getTime() : F.dataPoints[l].x, k = Math.floor((c -
                              b) / k), c < g[k].min && (g[k].min = c), c > g[k].max && (g[k].max = c)
                  }
          }
          for (var c, h = this, g = !1, F = 0; F < this._axes.length; F++)
              if (this._axes[F].scaleBreaks && this._axes[F].scaleBreaks.autoCalculate && 1 <= this._axes[F].scaleBreaks.maxNumberOfAutoBreaks) {
                  g = !0;
                  this._axes[F].dataInfo._dataRanges = [];
                  for (var d = 0; d < 100 / Math.max(parseFloat(this._axes[F].scaleBreaks.collapsibleThreshold) || 10, 10); d++) this._axes[F].dataInfo._dataRanges.push({
                      min: Infinity,
                      max: -Infinity
                  })
              } if (g) {
              for (F = 0; F < this.plotInfo.plotTypes.length; F++)
                  for (g = this.plotInfo.plotTypes[F],
                      d = 0; d < g.plotUnits.length; d++) c = g.plotUnits[d], "line" === c.type || "stepLine" === c.type || "spline" === c.type || "column" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "bar" === c.type || "bubble" === c.type || "scatter" === c.type || "candlestick" === c.type || "ohlc" === c.type || "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "waterfall" === c.type || "error" === c.type || "boxAndWhisker" === c.type ? e(c) : 0 <= c.type.indexOf("stacked") && b(c);
              for (F = 0; F < this._axes.length; F++)
                  if (this._axes[F].dataInfo._dataRanges) {
                      var f =
                          this._axes[F].dataInfo.min;
                      c = (this._axes[F].dataInfo.max + 1 - f) * Math.max(parseFloat(this._axes[F].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                      var l = this._axes[F].dataInfo._dataRanges,
                          p, r, g = [];
                      if (this._axes[F].dataInfo.dataPointYPositiveSums) {
                          var q = this._axes[F].dataInfo.dataPointYPositiveSums;
                          p = l;
                          for (d in q)
                              if (q.hasOwnProperty(d) && !isNaN(d) && (r = q[d], !n(r))) {
                                  var k = Math.floor((r - f) / c);
                                  r < p[k].min && (p[k].min = r);
                                  r > p[k].max && (p[k].max = r)
                              } delete this._axes[F].dataInfo.dataPointYPositiveSums
                      }
                      if (this._axes[F].dataInfo.dataPointYNegativeSums) {
                          q =
                              this._axes[F].dataInfo.dataPointYNegativeSums;
                          p = l;
                          for (d in q) q.hasOwnProperty(d) && !isNaN(d) && (r = -1 * q[d], n(r) || (k = Math.floor((r - f) / c), r < p[k].min && (p[k].min = r), r > p[k].max && (p[k].max = r)));
                          delete this._axes[F].dataInfo.dataPointYNegativeSums
                      }
                      for (d = 0; d < l.length - 1; d++)
                          if (p = l[d].max, isFinite(p))
                              for (; d < l.length - 1;)
                                  if (f = l[d + 1].min, isFinite(f)) {
                                      r = f - p;
                                      r > c && g.push({
                                          diff: r,
                                          start: p,
                                          end: f
                                      });
                                      break
                                  } else d++;
                      if (this._axes[F].scaleBreaks.customBreaks)
                          for (d = 0; d < this._axes[F].scaleBreaks.customBreaks.length; d++)
                              for (c =
                                  0; c < g.length; c++)
                                  if (this._axes[F].scaleBreaks.customBreaks[d].startValue <= g[c].start && g[c].start <= this._axes[F].scaleBreaks.customBreaks[d].endValue || this._axes[F].scaleBreaks.customBreaks[d].startValue <= g[c].start && g[c].start <= this._axes[F].scaleBreaks.customBreaks[d].endValue || g[c].start <= this._axes[F].scaleBreaks.customBreaks[d].startValue && this._axes[F].scaleBreaks.customBreaks[d].startValue <= g[c].end || g[c].start <= this._axes[F].scaleBreaks.customBreaks[d].endValue && this._axes[F].scaleBreaks.customBreaks[d].endValue <=
                                      g[c].end) g.splice(c, 1), c--;
                      g.sort(function(a, c) {
                          return c.diff - a.diff
                      });
                      for (d = 0; d < Math.min(g.length, this._axes[F].scaleBreaks.maxNumberOfAutoBreaks); d++) c = a(g[d].start, g[d].end, this._axes[F].logarithmic ? this._axes[F].dataInfo.max / this._axes[F].dataInfo.min : this._axes[F].dataInfo.max - this._axes[F].dataInfo.min, this._axes[F].logarithmic), this._axes[F].scaleBreaks.autoBreaks.push(new W(this, "autoBreaks", c, d, ++this._eventManager.lastObjectId, this._axes[F].scaleBreaks)), this._axes[F].scaleBreaks._appliedBreaks.push(this._axes[F].scaleBreaks.autoBreaks[this._axes[F].scaleBreaks.autoBreaks.length -
                          1]);
                      this._axes[F].scaleBreaks._appliedBreaks.sort(function(a, c) {
                          return a.startValue - c.startValue
                      })
                  }
          }
      };
      m.prototype.renderCrosshairs = function(a) {
          for (var e = 0; e < this.axisX.length; e++) this.axisX[e] != a && (this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && !this.axisX[e].crosshair._hidden) && this.axisX[e].showCrosshair(this.axisX[e].crosshair._updatedValue);
          for (e = 0; e < this.axisX2.length; e++) this.axisX2[e] != a && (this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && !this.axisX2[e].crosshair._hidden) &&
              this.axisX2[e].showCrosshair(this.axisX2[e].crosshair._updatedValue);
          for (e = 0; e < this.axisY.length; e++) this.axisY[e] != a && (this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && !this.axisY[e].crosshair._hidden) && this.axisY[e].showCrosshair(this.axisY[e].crosshair._updatedValue);
          for (e = 0; e < this.axisY2.length; e++) this.axisY2[e] != a && (this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && !this.axisY2[e].crosshair._hidden) && this.axisY2[e].showCrosshair(this.axisY2[e].crosshair._updatedValue)
      };
      m.prototype.getDataPointAtXY =
          function(a, e, b) {
              b = b || !1;
              for (var c = [], h = this._dataInRenderedOrder.length - 1; 0 <= h; h--) {
                  var g = null;
                  (g = this._dataInRenderedOrder[h].getDataPointAtXY(a, e, b)) && c.push(g)
              }
              a = null;
              e = !1;
              for (b = 0; b < c.length; b++)
                  if ("line" === c[b].dataSeries.type || "stepLine" === c[b].dataSeries.type || "area" === c[b].dataSeries.type || "stepArea" === c[b].dataSeries.type)
                      if (h = qa("markerSize", c[b].dataPoint, c[b].dataSeries) || 8, c[b].distance <= h / 2) {
                          e = !0;
                          break
                      } for (b = 0; b < c.length; b++) e && "line" !== c[b].dataSeries.type && "stepLine" !== c[b].dataSeries.type &&
                  "area" !== c[b].dataSeries.type && "stepArea" !== c[b].dataSeries.type || (a ? c[b].distance <= a.distance && (a = c[b]) : a = c[b]);
              return a
          };
      m.prototype.getObjectAtXY = function(a, e, b) {
          var c = null;
          if (b = this.getDataPointAtXY(a, e, b || !1)) c = b.dataSeries.dataPointIds[b.dataPointIndex];
          else if (x) c = lb(a, e, this._eventManager.ghostCtx);
          else
              for (b = 0; b < this.legend.items.length; b++) {
                  var h = this.legend.items[b];
                  a >= h.x1 && (a <= h.x2 && e >= h.y1 && e <= h.y2) && (c = h.id)
              }
          return c
      };
      m.prototype.getAutoFontSize = qb;
      m.prototype.resetOverlayedCanvas =
          function() {
              this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
          };
      m.prototype.clearCanvas = pb;
      m.prototype.attachEvent = function(a) {
          this._events.push(a)
      };
      m.prototype._touchEventHandler = function(a) {
          if (a.changedTouches && this.interactivityEnabled) {
              var e = [],
                  b = a.changedTouches,
                  c = b ? b[0] : a,
                  h = null;
              switch (a.type) {
                  case "touchstart":
                  case "MSPointerDown":
                      e = ["mousemove", "mousedown"];
                      this._lastTouchData = Aa(c);
                      this._lastTouchData.time = new Date;
                      break;
                  case "touchmove":
                  case "MSPointerMove":
                      e = ["mousemove"];
                      break;
                  case "touchend":
                  case "MSPointerUp":
                      var g = this._lastTouchData && this._lastTouchData.time ? new Date - this._lastTouchData.time : 0,
                          e = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > g ? ["mouseup", "click"] : ["mouseup"];
                      break;
                  default:
                      return
              }
              if (!(b && 1 < b.length)) {
                  h = Aa(c);
                  h.time = new Date;
                  try {
                      var d = h.y - this._lastTouchData.y,
                          g = h.time - this._lastTouchData.time;
                      if (1 < Math.abs(d) && this._lastTouchData.scroll || 5 < Math.abs(d) && 250 > g) this._lastTouchData.scroll = !0
                  } catch (s) {}
                  this._lastTouchEventType =
                      a.type;
                  if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                  else
                      for (b = 0; b < e.length; b++)
                          if (h = e[b], d = document.createEvent("MouseEvent"), d.initMouseEvent(h, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), c.target.dispatchEvent(d), !n(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < g || "click" === h) a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault()
              }
          }
      };
      m.prototype._dispatchRangeEvent = function(a, e) {
          var b = {
              chart: this
          };
          b.type = a;
          b.trigger = e;
          var c = [];
          this.axisX && 0 < this.axisX.length && c.push("axisX");
          this.axisX2 && 0 < this.axisX2.length && c.push("axisX2");
          this.axisY && 0 < this.axisY.length && c.push("axisY");
          this.axisY2 && 0 < this.axisY2.length && c.push("axisY2");
          for (var h = 0; h < c.length; h++)
              if (n(b[c[h]]) && (b[c[h]] = []), "axisY" === c[h])
                  for (var g = 0; g < this.axisY.length; g++) b[c[h]].push({
                      viewportMinimum: this[c[h]][g].sessionVariables.newViewportMinimum,
                      viewportMaximum: this[c[h]][g].sessionVariables.newViewportMaximum
                  });
              else if ("axisY2" === c[h])
              for (g = 0; g < this.axisY2.length; g++) b[c[h]].push({
                  viewportMinimum: this[c[h]][g].sessionVariables.newViewportMinimum,
                  viewportMaximum: this[c[h]][g].sessionVariables.newViewportMaximum
              });
          else if ("axisX" === c[h])
              for (g = 0; g < this.axisX.length; g++) b[c[h]].push({
                  viewportMinimum: this[c[h]][g].sessionVariables.newViewportMinimum,
                  viewportMaximum: this[c[h]][g].sessionVariables.newViewportMaximum
              });
          else if ("axisX2" === c[h])
              for (g = 0; g < this.axisX2.length; g++) b[c[h]].push({
                  viewportMinimum: this[c[h]][g].sessionVariables.newViewportMinimum,
                  viewportMaximum: this[c[h]][g].sessionVariables.newViewportMaximum
              });
          this.dispatchEvent(a, b, this)
      };
      m.prototype._mouseEventHandler = function(a) {
          "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
          var e = Aa(a),
              b = a.type,
              c, h;
          a.which ? h = 3 == a.which : a.button && (h = 2 == a.button);
          m.capturedEventParam && (c = m.capturedEventParam, "mouseup" === b && (m.capturedEventParam = null, c.chart.overlaidCanvas.releaseCapture ? c.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup",
              c.chart._mouseEventHandler, !1)), c.hasOwnProperty(b) && ("mouseup" !== b || c.chart.overlaidCanvas.releaseCapture ? a.target !== c.chart.overlaidCanvas && x || c[b].call(c.context, e.x, e.y) : a.target !== c.chart.overlaidCanvas && (c.chart.isDrag = !1)));
          if (this.interactivityEnabled)
              if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
              else if (a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault(), Na && window.console && (window.console.log(b + " --\x3e x: " + e.x + "; y:" + e.y), h && window.console.log(a.which),
                  "mouseup" === b && window.console.log("mouseup")), !h) {
              if (!m.capturedEventParam && this._events) {
                  for (var g = 0; g < this._events.length; g++)
                      if (this._events[g].hasOwnProperty(b))
                          if (c = this._events[g], h = c.bounds, e.x >= h.x1 && e.x <= h.x2 && e.y >= h.y1 && e.y <= h.y2) {
                              c[b].call(c.context, e.x, e.y);
                              "mousedown" === b && !0 === c.capture ? (m.capturedEventParam = c, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === b && (c.chart.overlaidCanvas.releaseCapture ?
                                  c.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                              break
                          } else c = null;
                  a.target.style.cursor = c && c.cursor ? c.cursor : this._defaultCursor
              }
              b = this.plotArea;
              if (e.x < b.x1 || e.x > b.x2 || e.y < b.y1 || e.y > b.y2)
                  if (this.toolTip && this.toolTip.enabled) {
                      this.toolTip.hide();
                      this.toolTip.dispatchEvent("hidden", {
                          chart: this,
                          toolTip: this.toolTip
                      }, this.toolTip);
                      for (g = 0; g < this.axisX.length; g++) this.axisX[g].crosshair && this.axisX[g].crosshair.enabled && this.axisX[g].crosshair.dispatchEvent("hidden", {
                          chart: this,
                          axis: this.axisX[g].options
                      }, this.axisX[g].crosshair);
                      for (g = 0; g < this.axisX2.length; g++) this.axisX2[g].crosshair && this.axisX2[g].crosshair.enabled && this.axisX2[g].crosshair.dispatchEvent("hidden", {
                          chart: this,
                          axis: this.axisX2[g].options
                      }, this.axisX2[g].crosshair);
                      for (g = 0; g < this.axisY.length; g++) this.axisY[g].crosshair && this.axisY[g].crosshair.enabled && this.axisY[g].crosshair.dispatchEvent("hidden", {
                          chart: this,
                          axis: this.axisY[g].options
                      }, this.axisY[g].crosshair);
                      for (g = 0; g < this.axisY2.length; g++) this.axisY2[g].crosshair &&
                          this.axisY2[g].crosshair.enabled && this.axisY2[g].crosshair.dispatchEvent("hidden", {
                              chart: this,
                              axis: this.axisY2[g].options
                          }, this.axisY2[g].crosshair)
                  } else this.resetOverlayedCanvas();
              this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
          }
      };
      m.prototype._plotAreaMouseDown = function(a, e) {
          this.isDrag = !0;
          this.dragStartPoint = {
              x: a,
              y: e
          }
      };
      m.prototype._plotAreaMouseUp = function(a, e) {
          if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
              var b =
                  e - this.dragStartPoint.y,
                  c = a - this.dragStartPoint.x,
                  h = 0 <= this.zoomType.indexOf("x"),
                  g = 0 <= this.zoomType.indexOf("y"),
                  d = !1;
              this.resetOverlayedCanvas();
              if ("xySwapped" === this.plotInfo.axisPlacement) var s = g,
                  g = h,
                  h = s;
              if (this.panEnabled || this.zoomEnabled) {
                  if (this.panEnabled)
                      for (h = g = 0; h < this._axes.length; h++) b = this._axes[h], b.logarithmic ? b.viewportMinimum < b.minimum ? (g = b.minimum / b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum * g, b.sessionVariables.newViewportMaximum = b.viewportMaximum *
                          g, d = !0) : b.viewportMaximum > b.maximum && (g = b.viewportMaximum / b.maximum, b.sessionVariables.newViewportMinimum = b.viewportMinimum / g, b.sessionVariables.newViewportMaximum = b.viewportMaximum / g, d = !0) : b.viewportMinimum < b.minimum ? (g = b.minimum - b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum + g, b.sessionVariables.newViewportMaximum = b.viewportMaximum + g, d = !0) : b.viewportMaximum > b.maximum && (g = b.viewportMaximum - b.maximum, b.sessionVariables.newViewportMinimum = b.viewportMinimum - g, b.sessionVariables.newViewportMaximum =
                          b.viewportMaximum - g, d = !0);
                  else if ((!h || 2 < Math.abs(c)) && (!g || 2 < Math.abs(b)) && this.zoomEnabled) {
                      if (!this.dragStartPoint) return;
                      b = h ? this.dragStartPoint.x : this.plotArea.x1;
                      c = g ? this.dragStartPoint.y : this.plotArea.y1;
                      h = h ? a : this.plotArea.x2;
                      g = g ? e : this.plotArea.y2;
                      2 < Math.abs(b - h) && 2 < Math.abs(c - g) && this._zoomPanToSelectedRegion(b, c, h, g) && (d = !0)
                  }
                  d && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter ||
                          (this.stockChart._rangeEventParameter = {
                              stockChart: this.stockChart,
                              source: "chart",
                              index: this.stockChart.charts.indexOf(this),
                              minimum: this.stockChart.sessionVariables._axisXMin,
                              maximum: this.stockChart.sessionVariables._axisXMax
                          }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) &&
                      (this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart)), d && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (Ua(this._zoomButton, this._resetButton), Ba(this, this._zoomButton, "pan"), Ba(this, this._resetButton, "reset")))
              }
          }
          this.isDrag = !1;
          if ("none" !== this.plotInfo.axisPlacement) {
              this.resetOverlayedCanvas();
              if (this.axisX && 0 < this.axisX.length)
                  for (d = 0; d < this.axisX.length; d++) this.axisX[d].crosshair &&
                      this.axisX[d].crosshair.enabled && this.axisX[d].renderCrosshair(a, e);
              if (this.axisX2 && 0 < this.axisX2.length)
                  for (d = 0; d < this.axisX2.length; d++) this.axisX2[d].crosshair && this.axisX2[d].crosshair.enabled && this.axisX2[d].renderCrosshair(a, e);
              if (this.axisY && 0 < this.axisY.length)
                  for (d = 0; d < this.axisY.length; d++) this.axisY[d].crosshair && this.axisY[d].crosshair.enabled && this.axisY[d].renderCrosshair(a, e);
              if (this.axisY2 && 0 < this.axisY2.length)
                  for (d = 0; d < this.axisY2.length; d++) this.axisY2[d].crosshair && this.axisY2[d].crosshair.enabled &&
                      this.axisY2[d].renderCrosshair(a, e)
          }
      };
      m.prototype._plotAreaMouseMove = function(a, e) {
          if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
              var b = 0,
                  c = 0,
                  h = b = null,
                  h = 0 <= this.zoomType.indexOf("x"),
                  g = 0 <= this.zoomType.indexOf("y"),
                  d = this;
              "xySwapped" === this.plotInfo.axisPlacement && (b = g, g = h, h = b);
              b = this.dragStartPoint.x - a;
              c = this.dragStartPoint.y - e;
              2 < Math.abs(b) && 8 > Math.abs(b) && (this.panEnabled || this.zoomEnabled) ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", {
                      chart: this,
                      toolTip: this.toolTip
                  }, this.toolTip)) :
                  this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, e);
              if ((!h || 2 < Math.abs(b) || !g || 2 < Math.abs(c)) && (this.panEnabled || this.zoomEnabled))
                  if (this.panEnabled) h = {
                      x1: h ? this.plotArea.x1 + b : this.plotArea.x1,
                      y1: g ? this.plotArea.y1 + c : this.plotArea.y1,
                      x2: h ? this.plotArea.x2 + b : this.plotArea.x2,
                      y2: g ? this.plotArea.y2 + c : this.plotArea.y2
                  }, clearTimeout(d._panTimerId), d._panTimerId = setTimeout(function(c, b, h, g) {
                      return function() {
                          d._zoomPanToSelectedRegion(c, b, h, g, !0) && (d._dispatchRangeEvent("rangeChanging",
                                  "pan"), d.stockChart && (d.stockChart.navigator && d.stockChart.navigator.enabled) && (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart)), d.render(), d._dispatchRangeEvent("rangeChanged", "pan"), d.stockChart && (d.stockChart.navigator && d.stockChart.navigator.enabled) && (d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent("rangeChanged", d.stockChart._rangeEventParameter, d.stockChart)), d.dragStartPoint.x =
                              a, d.dragStartPoint.y = e)
                      }
                  }(h.x1, h.y1, h.x2, h.y2), 0);
                  else if (this.zoomEnabled) {
                  this.resetOverlayedCanvas();
                  b = this.overlaidCanvasCtx.globalAlpha;
                  this.overlaidCanvasCtx.fillStyle = "#A89896";
                  var c = h ? this.dragStartPoint.x : this.plotArea.x1,
                      s = g ? this.dragStartPoint.y : this.plotArea.y1,
                      n = h ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1,
                      l = g ? e - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                  this.validateRegion(c, s, h ? a : this.plotArea.x2 - this.plotArea.x1, g ? e : this.plotArea.y2 - this.plotArea.y1, "xy" !==
                      this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                  this.overlaidCanvasCtx.globalAlpha = 0.7;
                  this.overlaidCanvasCtx.fillRect(c, s, n, l);
                  this.overlaidCanvasCtx.globalAlpha = b
              }
          } else if (this.toolTip.mouseMoveHandler(a, e), "none" !== this.plotInfo.axisPlacement) {
              if (this.axisX && 0 < this.axisX.length)
                  for (h = 0; h < this.axisX.length; h++) this.axisX[h].crosshair && this.axisX[h].crosshair.enabled && this.axisX[h].renderCrosshair(a, e);
              if (this.axisX2 && 0 < this.axisX2.length)
                  for (h = 0; h <
                      this.axisX2.length; h++) this.axisX2[h].crosshair && this.axisX2[h].crosshair.enabled && this.axisX2[h].renderCrosshair(a, e);
              if (this.axisY && 0 < this.axisY.length)
                  for (h = 0; h < this.axisY.length; h++) this.axisY[h].crosshair && this.axisY[h].crosshair.enabled && this.axisY[h].renderCrosshair(a, e);
              if (this.axisY2 && 0 < this.axisY2.length)
                  for (h = 0; h < this.axisY2.length; h++) this.axisY2[h].crosshair && this.axisY2[h].crosshair.enabled && this.axisY2[h].renderCrosshair(a, e)
          }
      };
      m.prototype._zoomPanToSelectedRegion = function(a, e, b, c,
          h) {
          a = this.validateRegion(a, e, b, c, h);
          e = a.axesWithValidRange;
          b = a.axesRanges;
          if (a.isValid)
              for (c = 0; c < e.length; c++) h = b[c], e[c].setViewPortRange(h.val1, h.val2), this.syncCharts && "y" != this.zoomType && this.syncCharts(h.val1, h.val2), this.stockChart && (this.stockChart._rangeEventParameter = {
                  stockChart: this.stockChart,
                  source: "chart",
                  index: this.stockChart.charts.indexOf(this),
                  minimum: h.val1,
                  maximum: h.val2
              });
          return a.isValid
      };
      m.prototype.validateRegion = function(a, e, b, c, h) {
          h = h || !1;
          for (var g = 0 <= this.zoomType.indexOf("x"),
                  d = 0 <= this.zoomType.indexOf("y"), s = !1, n = [], l = [], p = [], r = 0; r < this._axes.length; r++)("axisX" === this._axes[r].type && g || "axisY" === this._axes[r].type && d) && l.push(this._axes[r]);
          for (d = 0; d < l.length; d++) {
              var r = l[d],
                  g = !1,
                  q = r.convertPixelToValue({
                      x: a,
                      y: e
                  }),
                  k = r.convertPixelToValue({
                      x: b,
                      y: c
                  });
              if (q > k) var C = k,
                  k = q,
                  q = C;
              if (r.scaleBreaks)
                  for (C = 0; !g && C < r.scaleBreaks._appliedBreaks.length; C++) g = r.scaleBreaks._appliedBreaks[C].startValue <= q && r.scaleBreaks._appliedBreaks[C].endValue >= k;
              if (isFinite(r.dataInfo.minDiff))
                  if (C =
                      r.getApparentDifference(q, k, null, !0), !(g || !(this.panEnabled && r.scaleBreaks && r.scaleBreaks._appliedBreaks.length) && (r.logarithmic && C < Math.pow(r.dataInfo.minDiff, 3) || !r.logarithmic && C < 3 * Math.abs(r.dataInfo.minDiff)) || q < r.minimum || k > r.maximum)) n.push(r), p.push({
                      val1: q,
                      val2: k
                  }), s = !0;
                  else if (!h) {
                  s = !1;
                  break
              }
          }
          return {
              isValid: s,
              axesWithValidRange: n,
              axesRanges: p
          }
      };
      m.prototype.preparePlotArea = function() {
          var a = this.plotArea;
          !x && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
          if ((this.axisX[0] || this.axisX2[0]) &&
              (this.axisY[0] || this.axisY2[0])) {
              var e = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
              if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
                  var b = this.axisY[0];
                  a.x1 = e.x1 < e.x2 ? e.x1 : b.lineCoordinates.x1;
                  a.y1 = e.y1 < b.lineCoordinates.y1 ? e.y1 : b.lineCoordinates.y1;
                  a.x2 = e.x2 > b.lineCoordinates.x2 ? e.x2 : b.lineCoordinates.x2;
                  a.y2 = e.y2 > e.y1 ? e.y2 : b.lineCoordinates.y2;
                  a.width = a.x2 - a.x1;
                  a.height = a.y2 - a.y1
              }
              this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (b = this.axisY2[0], a.x1 = e.x1 < e.x2 ?
                  e.x1 : b.lineCoordinates.x1, a.y1 = e.y1 < b.lineCoordinates.y1 ? e.y1 : b.lineCoordinates.y1, a.x2 = e.x2 > b.lineCoordinates.x2 ? e.x2 : b.lineCoordinates.x2, a.y2 = e.y2 > e.y1 ? e.y2 : b.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1)
          } else e = this.layoutManager.getFreeSpace(), a.x1 = e.x1, a.x2 = e.x2, a.y1 = e.y1, a.y2 = e.y2, a.width = e.width, a.height = e.height;
          x || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
          a.layoutManager =
              new La(a.x1, a.y1, a.x2, a.y2, 2)
      };
      m.prototype.renderIndexLabels = function(a) {
          var e = a || this.plotArea.ctx,
              b = this.plotArea,
              c = 0,
              h = 0,
              g = 0,
              d = 0,
              s = c = d = h = g = 0,
              f = 0;
          for (a = 0; a < this._indexLabels.length; a++) {
              var l = this._indexLabels[a],
                  p = l.chartType.toLowerCase(),
                  r, q, s = qa("indexLabelFontColor", l.dataPoint, l.dataSeries),
                  f = qa("indexLabelFontSize", l.dataPoint, l.dataSeries);
              r = qa("indexLabelFontFamily", l.dataPoint, l.dataSeries);
              q = qa("indexLabelFontStyle", l.dataPoint, l.dataSeries);
              var d = qa("indexLabelFontWeight", l.dataPoint,
                      l.dataSeries),
                  k = qa("indexLabelBackgroundColor", l.dataPoint, l.dataSeries),
                  h = qa("indexLabelMaxWidth", l.dataPoint, l.dataSeries),
                  g = qa("indexLabelWrap", l.dataPoint, l.dataSeries),
                  C = qa("indexLabelLineDashType", l.dataPoint, l.dataSeries),
                  rb = qa("indexLabelLineColor", l.dataPoint, l.dataSeries),
                  U = n(l.dataPoint.indexLabelLineThickness) ? n(l.dataSeries.options.indexLabelLineThickness) ? 0 : l.dataSeries.options.indexLabelLineThickness : l.dataPoint.indexLabelLineThickness,
                  c = 0 < U ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ?
                      this.plotArea.height : this.plotArea.width) << 0) : 0,
                  t = {
                      percent: null,
                      total: null
                  },
                  D = null;
              if (0 <= l.dataSeries.type.indexOf("stacked") || "pie" === l.dataSeries.type || "doughnut" === l.dataSeries.type) t = this.getPercentAndTotal(l.dataSeries, l.dataPoint);
              if (l.dataSeries.indexLabelFormatter || l.dataPoint.indexLabelFormatter) D = {
                  chart: this,
                  dataSeries: l.dataSeries,
                  dataPoint: l.dataPoint,
                  index: l.indexKeyword,
                  total: t.total,
                  percent: t.percent
              };
              var u = l.dataPoint.indexLabelFormatter ? l.dataPoint.indexLabelFormatter(D) : l.dataPoint.indexLabel ?
                  this.replaceKeywordsWithValue(l.dataPoint.indexLabel, l.dataPoint, l.dataSeries, null, l.indexKeyword) : l.dataSeries.indexLabelFormatter ? l.dataSeries.indexLabelFormatter(D) : l.dataSeries.indexLabel ? this.replaceKeywordsWithValue(l.dataSeries.indexLabel, l.dataPoint, l.dataSeries, null, l.indexKeyword) : null;
              if (null !== u && "" !== u) {
                  var t = qa("indexLabelPlacement", l.dataPoint, l.dataSeries),
                      D = qa("indexLabelOrientation", l.dataPoint, l.dataSeries),
                      m = l.direction,
                      z = l.dataSeries.axisX,
                      B = l.dataSeries.axisY,
                      v = !1,
                      k = new la(e, {
                          x: 0,
                          y: 0,
                          maxWidth: h ? h : 0.5 * this.width,
                          maxHeight: g ? 5 * f : 1.5 * f,
                          angle: "horizontal" === D ? 0 : -90,
                          text: u,
                          padding: 0,
                          backgroundColor: k,
                          horizontalAlign: "left",
                          fontSize: f,
                          fontFamily: r,
                          fontWeight: d,
                          fontColor: s,
                          fontStyle: q,
                          textBaseline: "top"
                      });
                  k.measureText();
                  l.dataSeries.indexLabelMaxWidth = k.maxWidth;
                  if ("stackedarea100" === p) {
                      if (l.point.x < b.x1 || l.point.x > b.x2 || l.point.y < b.y1 - 1 || l.point.y > b.y2 + 1) continue
                  } else if ("rangearea" === p || "rangesplinearea" === p) {
                      if (l.dataPoint.x < z.viewportMinimum || l.dataPoint.x > z.viewportMaximum ||
                          Math.max.apply(null, l.dataPoint.y) < B.viewportMinimum || Math.min.apply(null, l.dataPoint.y) > B.viewportMaximum) continue
                  } else if (0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("bubble") || 0 <= p.indexOf("scatter")) {
                      if (l.dataPoint.x < z.viewportMinimum || l.dataPoint.x > z.viewportMaximum || l.dataPoint.y < B.viewportMinimum || l.dataPoint.y > B.viewportMaximum) continue
                  } else if (0 <= p.indexOf("column") || "waterfall" === p || "error" === p && !l.axisSwapped) {
                      if (l.dataPoint.x < z.viewportMinimum || l.dataPoint.x > z.viewportMaximum ||
                          l.bounds.y1 > b.y2 || l.bounds.y2 < b.y1) continue
                  } else if (0 <= p.indexOf("bar") || "error" === p) {
                      if (l.dataPoint.x < z.viewportMinimum || l.dataPoint.x > z.viewportMaximum || l.bounds.x1 > b.x2 || l.bounds.x2 < b.x1) continue
                  } else if ("candlestick" === p || "ohlc" === p) {
                      if (l.dataPoint.x < z.viewportMinimum || l.dataPoint.x > z.viewportMaximum || Math.max.apply(null, l.dataPoint.y) < B.viewportMinimum || Math.min.apply(null, l.dataPoint.y) > B.viewportMaximum) continue
                  } else if (l.dataPoint.x < z.viewportMinimum || l.dataPoint.x > z.viewportMaximum) continue;
                  h = d = 2;
                  "horizontal" === D ? (s = k.width, f = k.height) : (f = k.width, s = k.height);
                  if ("normal" === this.plotInfo.axisPlacement) {
                      if (0 <= p.indexOf("line") || 0 <= p.indexOf("area")) t = "auto", d = 4;
                      else if (0 <= p.indexOf("stacked")) "auto" === t && (t = "inside");
                      else if ("bubble" === p || "scatter" === p) t = "inside";
                      r = l.point.x - s / 2;
                      "inside" !== t ? (h = b.y1, g = b.y2, 0 < m ? (q = l.point.y - f - d - c, q < h && (q = "auto" === t ? Math.max(l.point.y, h) + d + c : h + d + c, v = q + f > l.point.y)) : (q = l.point.y + d + c, q > g - f - d - c && (q = "auto" === t ? Math.min(l.point.y, g) - f - d - c : g - f - d - c, v = q < l.point.y))) :
                          (h = Math.max(l.bounds.y1, b.y1), g = Math.min(l.bounds.y2, b.y2), c = 0 <= p.indexOf("range") || "error" === p ? 0 < m ? Math.max(l.bounds.y1, b.y1) + f / 2 + d : Math.min(l.bounds.y2, b.y2) - f / 2 - d : (Math.max(l.bounds.y1, b.y1) + Math.min(l.bounds.y2, b.y2)) / 2, 0 < m ? (q = Math.max(l.point.y, c) - f / 2, q < h && ("bubble" === p || "scatter" === p) && (q = Math.max(l.point.y - f - d, b.y1 + d))) : (q = Math.min(l.point.y, c) - f / 2, q > g - f - d && ("bubble" === p || "scatter" === p) && (q = Math.min(l.point.y + d, b.y2 - f - d))), q = Math.min(q, g - f))
                  } else 0 <= p.indexOf("line") || 0 <= p.indexOf("area") ||
                      0 <= p.indexOf("scatter") ? (t = "auto", h = 4) : 0 <= p.indexOf("stacked") ? "auto" === t && (t = "inside") : "bubble" === p && (t = "inside"), q = l.point.y - f / 2, "inside" !== t ? (d = b.x1, g = b.x2, 0 > m ? (r = l.point.x - s - h - c, r < d && (r = "auto" === t ? Math.max(l.point.x, d) + h + c : d + h + c, v = r + s > l.point.x)) : (r = l.point.x + h + c, r > g - s - h - c && (r = "auto" === t ? Math.min(l.point.x, g) - s - h - c : g - s - h - c, v = r < l.point.x))) : (d = Math.max(l.bounds.x1, b.x1), Math.min(l.bounds.x2, b.x2), c = 0 <= p.indexOf("range") || "error" === p ? 0 > m ? Math.max(l.bounds.x1, b.x1) + s / 2 + h : Math.min(l.bounds.x2, b.x2) -
                          s / 2 - h : (Math.max(l.bounds.x1, b.x1) + Math.min(l.bounds.x2, b.x2)) / 2, r = 0 > m ? Math.max(l.point.x, c) - s / 2 : Math.min(l.point.x, c) - s / 2, r = Math.max(r, d));
                  "vertical" === D && (q += f);
                  k.x = r;
                  k.y = q;
                  k.render(!0);
                  U && ("inside" !== t && (0 > p.indexOf("bar") && ("error" !== p || !l.axisSwapped) && l.point.x > b.x1 && l.point.x < b.x2 || !v) && (0 > p.indexOf("column") && ("error" !== p || l.axisSwapped) && l.point.y > b.y1 && l.point.y < b.y2 || !v)) && (e.lineWidth = U, e.strokeStyle = rb ? rb : "gray", e.setLineDash && e.setLineDash(M(C, U)), e.beginPath(), e.moveTo(l.point.x, l.point.y),
                      0 <= p.indexOf("bar") || "error" === p && l.axisSwapped ? e.lineTo(r + (0 < l.direction ? 0 : s), q + ("horizontal" === D ? f : -f) / 2) : 0 <= p.indexOf("column") || "error" === p && !l.axisSwapped ? e.lineTo(r + s / 2, q + ((0 < l.direction ? f : -f) + ("horizontal" === D ? f : -f)) / 2) : e.lineTo(r + s / 2, q + ((q < l.point.y ? f : -f) + ("horizontal" === D ? f : -f)) / 2), e.stroke())
              }
          }
          e = {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: w.fadeInAnimation,
              easingFunction: w.easing.easeInQuad,
              animationBase: 0,
              startTimePercent: 0.7
          };
          for (a = 0; a < this._indexLabels.length; a++) l = this._indexLabels[a],
              k = qa("indexLabelBackgroundColor", l.dataPoint, l.dataSeries), l.dataSeries.indexLabelBackgroundColor = n(k) ? x ? "transparent" : null : k;
          return e
      };
      m.prototype.renderLine = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx,
              b = x ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var c = this._eventManager.ghostCtx;
              b.save();
              var h = this.plotArea;
              b.beginPath();
              b.rect(h.x1, h.y1, h.width, h.height);
              b.clip();
              for (var g = [], d, s = 0; s < a.dataSeriesIndexes.length; s++) {
                  var n = a.dataSeriesIndexes[s],
                      l = this.data[n];
                  b.lineWidth =
                      l.lineThickness;
                  var p = l.dataPoints,
                      r = "solid";
                  if (b.setLineDash) {
                      var q = M(l.nullDataLineDashType, l.lineThickness),
                          r = l.lineDashType,
                          k = M(r, l.lineThickness);
                      b.setLineDash(k)
                  }
                  var C = l.id;
                  this._eventManager.objectMap[C] = {
                      objectType: "dataSeries",
                      dataSeriesIndex: n
                  };
                  C = N(C);
                  c.strokeStyle = C;
                  c.lineWidth = 0 < l.lineThickness ? Math.max(l.lineThickness, 4) : 0;
                  var C = l._colorSet,
                      f = C = l.lineColor = l.options.lineColor ? l.options.lineColor : C[0];
                  b.strokeStyle = C;
                  var U = !0,
                      t = 0,
                      D, z;
                  b.beginPath();
                  if (0 < p.length) {
                      for (var m = !1, t = 0; t < p.length; t++)
                          if (D =
                              p[t].x.getTime ? p[t].x.getTime() : p[t].x, !(D < a.axisX.dataInfo.viewPortMin || D > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !m)))
                              if ("number" !== typeof p[t].y) 0 < t && !(l.connectNullData || m || U) && (b.stroke(), x && c.stroke()), m = !0;
                              else {
                                  D = a.axisX.convertValueToPixel(D);
                                  z = a.axisY.convertValueToPixel(p[t].y);
                                  var K = l.dataPointIds[t];
                                  this._eventManager.objectMap[K] = {
                                      id: K,
                                      objectType: "dataPoint",
                                      dataSeriesIndex: n,
                                      dataPointIndex: t,
                                      x1: D,
                                      y1: z
                                  };
                                  U || m ? (!U && l.connectNullData ? (b.setLineDash && (l.options.nullDataLineDashType ||
                                      r === l.lineDashType && l.lineDashType !== l.nullDataLineDashType) && (b.stroke(), b.beginPath(), b.moveTo(d.x, d.y), r = l.nullDataLineDashType, b.setLineDash(q)), b.lineTo(D, z), x && c.lineTo(D, z)) : (b.beginPath(), b.moveTo(D, z), x && (c.beginPath(), c.moveTo(D, z))), m = U = !1) : (b.lineTo(D, z), x && c.lineTo(D, z), 0 == t % 500 && (b.stroke(), b.beginPath(), b.moveTo(D, z), x && (c.stroke(), c.beginPath(), c.moveTo(D, z))));
                                  d = {
                                      x: D,
                                      y: z
                                  };
                                  t < p.length - 1 && (f !== (p[t].lineColor || C) || r !== (p[t].lineDashType || l.lineDashType)) && (b.stroke(), b.beginPath(), b.moveTo(D,
                                      z), f = p[t].lineColor || C, b.strokeStyle = f, b.setLineDash && (p[t].lineDashType ? (r = p[t].lineDashType, b.setLineDash(M(r, l.lineThickness))) : (r = l.lineDashType, b.setLineDash(k))));
                                  if (0 < p[t].markerSize || 0 < l.markerSize) {
                                      var B = l.getMarkerProperties(t, D, z, b);
                                      g.push(B);
                                      K = N(K);
                                      x && g.push({
                                          x: D,
                                          y: z,
                                          ctx: c,
                                          type: B.type,
                                          size: B.size,
                                          color: K,
                                          borderColor: K,
                                          borderThickness: B.borderThickness
                                      })
                                  }(p[t].indexLabel || l.indexLabel || p[t].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                      chartType: "line",
                                      dataPoint: p[t],
                                      dataSeries: l,
                                      point: {
                                          x: D,
                                          y: z
                                      },
                                      direction: 0 > p[t].y === a.axisY.reversed ? 1 : -1,
                                      color: C
                                  })
                              } b.stroke();
                      x && c.stroke()
                  }
              }
              u.drawMarkers(g);
              x && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1,
                  h.y1, h.width, h.height), c.beginPath());
              b.restore();
              b.beginPath();
              return {
                  source: e,
                  dest: this.plotArea.ctx,
                  animationCallback: w.xClipAnimation,
                  easingFunction: w.easing.linear,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderStepLine = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx,
              b = x ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var c = this._eventManager.ghostCtx;
              b.save();
              var h = this.plotArea;
              b.beginPath();
              b.rect(h.x1, h.y1, h.width, h.height);
              b.clip();
              for (var g = [], d, s = 0; s < a.dataSeriesIndexes.length; s++) {
                  var n =
                      a.dataSeriesIndexes[s],
                      l = this.data[n];
                  b.lineWidth = l.lineThickness;
                  var p = l.dataPoints,
                      r = "solid";
                  if (b.setLineDash) {
                      var q = M(l.nullDataLineDashType, l.lineThickness),
                          r = l.lineDashType,
                          k = M(r, l.lineThickness);
                      b.setLineDash(k)
                  }
                  var C = l.id;
                  this._eventManager.objectMap[C] = {
                      objectType: "dataSeries",
                      dataSeriesIndex: n
                  };
                  C = N(C);
                  c.strokeStyle = C;
                  c.lineWidth = 0 < l.lineThickness ? Math.max(l.lineThickness, 4) : 0;
                  var C = l._colorSet,
                      f = C = l.lineColor = l.options.lineColor ? l.options.lineColor : C[0];
                  b.strokeStyle = C;
                  var U = !0,
                      t = 0,
                      D, z;
                  b.beginPath();
                  if (0 < p.length) {
                      for (var m = !1, t = 0; t < p.length; t++)
                          if (D = p[t].getTime ? p[t].x.getTime() : p[t].x, !(D < a.axisX.dataInfo.viewPortMin || D > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !m)))
                              if ("number" !== typeof p[t].y) 0 < t && !(l.connectNullData || m || U) && (b.stroke(), x && c.stroke()), m = !0;
                              else {
                                  var K = z;
                                  D = a.axisX.convertValueToPixel(D);
                                  z = a.axisY.convertValueToPixel(p[t].y);
                                  var B = l.dataPointIds[t];
                                  this._eventManager.objectMap[B] = {
                                      id: B,
                                      objectType: "dataPoint",
                                      dataSeriesIndex: n,
                                      dataPointIndex: t,
                                      x1: D,
                                      y1: z
                                  };
                                  U || m ? (!U && l.connectNullData ?
                                      (b.setLineDash && (l.options.nullDataLineDashType || r === l.lineDashType && l.lineDashType !== l.nullDataLineDashType) && (b.stroke(), b.beginPath(), b.moveTo(d.x, d.y), r = l.nullDataLineDashType, b.setLineDash(q)), b.lineTo(D, K), b.lineTo(D, z), x && (c.lineTo(D, K), c.lineTo(D, z))) : (b.beginPath(), b.moveTo(D, z), x && (c.beginPath(), c.moveTo(D, z))), m = U = !1) : (b.lineTo(D, K), x && c.lineTo(D, K), b.lineTo(D, z), x && c.lineTo(D, z), 0 == t % 500 && (b.stroke(), b.beginPath(), b.moveTo(D, z), x && (c.stroke(), c.beginPath(), c.moveTo(D, z))));
                                  d = {
                                      x: D,
                                      y: z
                                  };
                                  t < p.length - 1 && (f !== (p[t].lineColor || C) || r !== (p[t].lineDashType || l.lineDashType)) && (b.stroke(), b.beginPath(), b.moveTo(D, z), f = p[t].lineColor || C, b.strokeStyle = f, b.setLineDash && (p[t].lineDashType ? (r = p[t].lineDashType, b.setLineDash(M(r, l.lineThickness))) : (r = l.lineDashType, b.setLineDash(k))));
                                  if (0 < p[t].markerSize || 0 < l.markerSize) K = l.getMarkerProperties(t, D, z, b), g.push(K), B = N(B), x && g.push({
                                      x: D,
                                      y: z,
                                      ctx: c,
                                      type: K.type,
                                      size: K.size,
                                      color: B,
                                      borderColor: B,
                                      borderThickness: K.borderThickness
                                  });
                                  (p[t].indexLabel || l.indexLabel ||
                                      p[t].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                      chartType: "stepLine",
                                      dataPoint: p[t],
                                      dataSeries: l,
                                      point: {
                                          x: D,
                                          y: z
                                      },
                                      direction: 0 > p[t].y === a.axisY.reversed ? 1 : -1,
                                      color: C
                                  })
                              } b.stroke();
                      x && c.stroke()
                  }
              }
              u.drawMarkers(g);
              x && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx &&
                  this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), c.beginPath());
              b.restore();
              b.beginPath();
              return {
                  source: e,
                  dest: this.plotArea.ctx,
                  animationCallback: w.xClipAnimation,
                  easingFunction: w.easing.linear,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderSpline = function(a) {
          function e(a) {
              a = v(a, 2);
              if (0 < a.length) {
                  c.beginPath();
                  x && h.beginPath();
                  c.moveTo(a[0].x, a[0].y);
                  a[0].newStrokeStyle && (c.strokeStyle = a[0].newStrokeStyle);
                  a[0].newLineDashArray && c.setLineDash(a[0].newLineDashArray);
                  x && h.moveTo(a[0].x, a[0].y);
                  for (var b = 0; b < a.length - 3; b += 3)
                      if (c.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), x && h.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), 0 < b && 0 === b % 3E3 || a[b + 3].newStrokeStyle || a[b + 3].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(a[b + 3].x, a[b + 3].y), a[b + 3].newStrokeStyle && (c.strokeStyle = a[b + 3].newStrokeStyle), a[b + 3].newLineDashArray && c.setLineDash(a[b + 3].newLineDashArray), x && (h.stroke(), h.beginPath(), h.moveTo(a[b + 3].x, a[b + 3].y));
                  c.stroke();
                  x && h.stroke()
              }
          }
          var b = a.targetCanvasCtx || this.plotArea.ctx,
              c = x ? this._preRenderCtx : b;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var h = this._eventManager.ghostCtx;
              c.save();
              var g = this.plotArea;
              c.beginPath();
              c.rect(g.x1, g.y1, g.width, g.height);
              c.clip();
              for (var d = [], s = 0; s < a.dataSeriesIndexes.length; s++) {
                  var n = a.dataSeriesIndexes[s],
                      l = this.data[n];
                  c.lineWidth = l.lineThickness;
                  var p = l.dataPoints,
                      r = "solid";
                  if (c.setLineDash) {
                      var q = M(l.nullDataLineDashType, l.lineThickness),
                          r = l.lineDashType,
                          k = M(r, l.lineThickness);
                      c.setLineDash(k)
                  }
                  var C = l.id;
                  this._eventManager.objectMap[C] = {
                      objectType: "dataSeries",
                      dataSeriesIndex: n
                  };
                  C = N(C);
                  h.strokeStyle = C;
                  h.lineWidth = 0 < l.lineThickness ? Math.max(l.lineThickness, 4) : 0;
                  var C = l._colorSet,
                      f = C = l.lineColor = l.options.lineColor ? l.options.lineColor : C[0];
                  c.strokeStyle = C;
                  var U = 0,
                      t, D, z = [];
                  c.beginPath();
                  if (0 < p.length)
                      for (D = !1, U = 0; U < p.length; U++)
                          if (t = p[U].getTime ? p[U].x.getTime() : p[U].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !D)))
                              if ("number" !==
                                  typeof p[U].y) 0 < U && !D && (l.connectNullData ? c.setLineDash && (0 < z.length && (l.options.nullDataLineDashType || !p[U - 1].lineDashType)) && (z[z.length - 1].newLineDashArray = q, r = l.nullDataLineDashType) : (e(z), z = [])), D = !0;
                              else {
                                  t = a.axisX.convertValueToPixel(t);
                                  D = a.axisY.convertValueToPixel(p[U].y);
                                  var m = l.dataPointIds[U];
                                  this._eventManager.objectMap[m] = {
                                      id: m,
                                      objectType: "dataPoint",
                                      dataSeriesIndex: n,
                                      dataPointIndex: U,
                                      x1: t,
                                      y1: D
                                  };
                                  z[z.length] = {
                                      x: t,
                                      y: D
                                  };
                                  U < p.length - 1 && (f !== (p[U].lineColor || C) || r !== (p[U].lineDashType || l.lineDashType)) &&
                                      (f = p[U].lineColor || C, z[z.length - 1].newStrokeStyle = f, c.setLineDash && (p[U].lineDashType ? (r = p[U].lineDashType, z[z.length - 1].newLineDashArray = M(r, l.lineThickness)) : (r = l.lineDashType, z[z.length - 1].newLineDashArray = k)));
                                  if (0 < p[U].markerSize || 0 < l.markerSize) {
                                      var K = l.getMarkerProperties(U, t, D, c);
                                      d.push(K);
                                      m = N(m);
                                      x && d.push({
                                          x: t,
                                          y: D,
                                          ctx: h,
                                          type: K.type,
                                          size: K.size,
                                          color: m,
                                          borderColor: m,
                                          borderThickness: K.borderThickness
                                      })
                                  }(p[U].indexLabel || l.indexLabel || p[U].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                      chartType: "spline",
                                      dataPoint: p[U],
                                      dataSeries: l,
                                      point: {
                                          x: t,
                                          y: D
                                      },
                                      direction: 0 > p[U].y === a.axisY.reversed ? 1 : -1,
                                      color: C
                                  });
                                  D = !1
                              } e(z)
              }
              u.drawMarkers(d);
              x && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(g.x1,
                  g.y1, g.width, g.height), h.beginPath());
              c.restore();
              c.beginPath();
              return {
                  source: b,
                  dest: this.plotArea.ctx,
                  animationCallback: w.xClipAnimation,
                  easingFunction: w.easing.linear,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderColumn = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx,
              b = x ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var c = null,
                  h = this.plotArea,
                  g = 0,
                  d, s, n, l = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                  g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ?
                  this.dataPointWidth : 1,
                  p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
                  r = a.axisX.dataInfo.minDiff;
              isFinite(r) || (r = 0.3 * Math.abs(a.axisX.range));
              r = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.width * (a.axisX.logarithmic ? Math.log(r) / Math.log(a.axisX.range) : Math.abs(r) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
              this.dataPointMaxWidth &&
                  g > p && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
              !this.dataPointMaxWidth && (this.dataPointMinWidth && p < g) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
              r < g && (r = g);
              r > p && (r = p);
              b.save();
              x && this._eventManager.ghostCtx.save();
              b.beginPath();
              b.rect(h.x1, h.y1, h.width, h.height);
              b.clip();
              x && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
              for (p = 0; p < a.dataSeriesIndexes.length; p++) {
                  var q =
                      a.dataSeriesIndexes[p],
                      k = this.data[q],
                      C = k.dataPoints;
                  if (0 < C.length)
                      for (var f = 5 < r && k.bevelEnabled ? !0 : !1, g = 0; g < C.length; g++)
                          if (C[g].getTime ? n = C[g].x.getTime() : n = C[g].x, !(n < a.axisX.dataInfo.viewPortMin || n > a.axisX.dataInfo.viewPortMax) && "number" === typeof C[g].y) {
                              d = a.axisX.convertValueToPixel(n);
                              s = a.axisY.convertValueToPixel(C[g].y);
                              d = a.axisX.reversed ? d + a.plotType.totalDataSeries * r / 2 - (a.previousDataSeriesCount + p) * r << 0 : d - a.plotType.totalDataSeries * r / 2 + (a.previousDataSeriesCount + p) * r << 0;
                              var U = a.axisX.reversed ?
                                  d - r << 0 : d + r << 0,
                                  t;
                              0 <= C[g].y ? t = l : (t = s, s = l);
                              s > t && (c = s, s = t, t = c);
                              c = C[g].color ? C[g].color : k._colorSet[g % k._colorSet.length];
                              Z(b, d, s, U, t, c, 0, null, f && 0 <= C[g].y, 0 > C[g].y && f, !1, !1, k.fillOpacity);
                              c = k.dataPointIds[g];
                              this._eventManager.objectMap[c] = {
                                  id: c,
                                  objectType: "dataPoint",
                                  dataSeriesIndex: q,
                                  dataPointIndex: g,
                                  x1: d,
                                  y1: s,
                                  x2: U,
                                  y2: t
                              };
                              c = N(c);
                              x && Z(this._eventManager.ghostCtx, d, s, U, t, c, 0, null, !1, !1, !1, !1);
                              (C[g].indexLabel || k.indexLabel || C[g].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                  chartType: "column",
                                  dataPoint: C[g],
                                  dataSeries: k,
                                  point: {
                                      x: d + (U - d) / 2,
                                      y: 0 > C[g].y === a.axisY.reversed ? s : t
                                  },
                                  direction: 0 > C[g].y === a.axisY.reversed ? 1 : -1,
                                  bounds: {
                                      x1: d,
                                      y1: Math.min(s, t),
                                      x2: U,
                                      y2: Math.max(s, t)
                                  },
                                  color: c
                              })
                          }
              }
              x && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                  0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
              b.restore();
              return {
                  source: e,
                  dest: this.plotArea.ctx,
                  animationCallback: w.yScaleAnimation,
                  easingFunction: w.easing.easeOutQuart,
                  animationBase: l < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : l > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : l
              }
          }
      };
      m.prototype.renderStackedColumn = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx,
              b = x ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var c = null,
                  h = this.plotArea,
                  g = [],
                  d = [],
                  s = [],
                  n = [],
                  l = 0,
                  p, r, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                  l = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
              p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
              var k = a.axisX.dataInfo.minDiff;
              isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
              k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.width * (a.axisX.logarithmic ? Math.log(k) /
                  Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
              this.dataPointMaxWidth && l > p && (l = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
              !this.dataPointMaxWidth && (this.dataPointMinWidth && p < l) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, l));
              k < l && (k = l);
              k > p && (k = p);
              b.save();
              x && this._eventManager.ghostCtx.save();
              b.beginPath();
              b.rect(h.x1, h.y1, h.width, h.height);
              b.clip();
              x && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1,
                  h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
              for (var C = 0; C < a.dataSeriesIndexes.length; C++) {
                  var f = a.dataSeriesIndexes[C],
                      U = this.data[f],
                      t = U.dataPoints;
                  if (0 < t.length) {
                      var D = 5 < k && U.bevelEnabled ? !0 : !1;
                      b.strokeStyle = "#4572A7 ";
                      for (l = 0; l < t.length; l++)
                          if (c = t[l].x.getTime ? t[l].x.getTime() : t[l].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[l].y) {
                              p = a.axisX.convertValueToPixel(c);
                              var z = p - a.plotType.plotUnits.length * k / 2 + a.index * k << 0,
                                  u = z + k << 0,
                                  m;
                              if (a.axisY.logarithmic ||
                                  a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[l].y) s[c] = t[l].y + (s[c] ? s[c] : 0), 0 < s[c] && (r = a.axisY.convertValueToPixel(s[c]), m = "undefined" !== typeof g[c] ? g[c] : q, g[c] = r);
                              else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[l].y) n[c] = t[l].y + (n[c] ? n[c] : 0), m = a.axisY.convertValueToPixel(n[c]), r = "undefined" !== typeof d[c] ? d[c] : q, d[c] = m;
                              else if (r = a.axisY.convertValueToPixel(t[l].y), 0 <= t[l].y) {
                                  var B = "undefined" !== typeof g[c] ? g[c] : 0;
                                  r -= B;
                                  m = q - B;
                                  g[c] = B + (m - r)
                              } else B =
                                  d[c] ? d[c] : 0, m = r + B, r = q + B, d[c] = B + (m - r);
                              c = t[l].color ? t[l].color : U._colorSet[l % U._colorSet.length];
                              Z(b, z, r, u, m, c, 0, null, D && 0 <= t[l].y, 0 > t[l].y && D, !1, !1, U.fillOpacity);
                              c = U.dataPointIds[l];
                              this._eventManager.objectMap[c] = {
                                  id: c,
                                  objectType: "dataPoint",
                                  dataSeriesIndex: f,
                                  dataPointIndex: l,
                                  x1: z,
                                  y1: r,
                                  x2: u,
                                  y2: m
                              };
                              c = N(c);
                              x && Z(this._eventManager.ghostCtx, z, r, u, m, c, 0, null, !1, !1, !1, !1);
                              (t[l].indexLabel || U.indexLabel || t[l].indexLabelFormatter || U.indexLabelFormatter) && this._indexLabels.push({
                                  chartType: "stackedColumn",
                                  dataPoint: t[l],
                                  dataSeries: U,
                                  point: {
                                      x: p,
                                      y: 0 <= t[l].y ? r : m
                                  },
                                  direction: 0 > t[l].y === a.axisY.reversed ? 1 : -1,
                                  bounds: {
                                      x1: z,
                                      y1: Math.min(r, m),
                                      x2: u,
                                      y2: Math.max(r, m)
                                  },
                                  color: c
                              })
                          }
                  }
              }
              x && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                  0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
              b.restore();
              return {
                  source: e,
                  dest: this.plotArea.ctx,
                  animationCallback: w.yScaleAnimation,
                  easingFunction: w.easing.easeOutQuart,
                  animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q
              }
          }
      };
      m.prototype.renderStackedColumn100 = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx,
              b = x ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var c = null,
                  h = this.plotArea,
                  g = [],
                  d = [],
                  s = [],
                  n = [],
                  l = 0,
                  p, r, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                  l = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
              p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
              var k = a.axisX.dataInfo.minDiff;
              isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
              k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.width * (a.axisX.logarithmic ? Math.log(k) /
                  Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
              this.dataPointMaxWidth && l > p && (l = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
              !this.dataPointMaxWidth && (this.dataPointMinWidth && p < l) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, l));
              k < l && (k = l);
              k > p && (k = p);
              b.save();
              x && this._eventManager.ghostCtx.save();
              b.beginPath();
              b.rect(h.x1, h.y1, h.width, h.height);
              b.clip();
              x && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1,
                  h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
              for (var C = 0; C < a.dataSeriesIndexes.length; C++) {
                  var f = a.dataSeriesIndexes[C],
                      U = this.data[f],
                      t = U.dataPoints;
                  if (0 < t.length)
                      for (var D = 5 < k && U.bevelEnabled ? !0 : !1, l = 0; l < t.length; l++)
                          if (c = t[l].x.getTime ? t[l].x.getTime() : t[l].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[l].y) {
                              p = a.axisX.convertValueToPixel(c);
                              r = 0 !== a.dataPointYSums[c] ? 100 * (t[l].y / a.dataPointYSums[c]) : 0;
                              var z = p - a.plotType.plotUnits.length * k /
                                  2 + a.index * k << 0,
                                  m = z + k << 0,
                                  u;
                              if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[l].y) {
                                  s[c] = r + ("undefined" !== typeof s[c] ? s[c] : 0);
                                  if (0 >= s[c]) continue;
                                  r = a.axisY.convertValueToPixel(s[c]);
                                  u = g[c] ? g[c] : q;
                                  g[c] = r
                              } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[l].y) n[c] = r + ("undefined" !== typeof n[c] ? n[c] : 0), u = a.axisY.convertValueToPixel(n[c]), r = d[c] ? d[c] : q, d[c] = u;
                              else if (r = a.axisY.convertValueToPixel(r), 0 <= t[l].y) {
                                  var B = "undefined" !== typeof g[c] ?
                                      g[c] : 0;
                                  r -= B;
                                  u = q - B;
                                  a.dataSeriesIndexes.length - 1 === C && 1 >= Math.abs(h.y1 - r) && (r = h.y1);
                                  g[c] = B + (u - r)
                              } else B = "undefined" !== typeof d[c] ? d[c] : 0, u = r + B, r = q + B, a.dataSeriesIndexes.length - 1 === C && 1 >= Math.abs(h.y2 - u) && (u = h.y2), d[c] = B + (u - r);
                              c = t[l].color ? t[l].color : U._colorSet[l % U._colorSet.length];
                              Z(b, z, r, m, u, c, 0, null, D && 0 <= t[l].y, 0 > t[l].y && D, !1, !1, U.fillOpacity);
                              c = U.dataPointIds[l];
                              this._eventManager.objectMap[c] = {
                                  id: c,
                                  objectType: "dataPoint",
                                  dataSeriesIndex: f,
                                  dataPointIndex: l,
                                  x1: z,
                                  y1: r,
                                  x2: m,
                                  y2: u
                              };
                              c = N(c);
                              x && Z(this._eventManager.ghostCtx,
                                  z, r, m, u, c, 0, null, !1, !1, !1, !1);
                              (t[l].indexLabel || U.indexLabel || t[l].indexLabelFormatter || U.indexLabelFormatter) && this._indexLabels.push({
                                  chartType: "stackedColumn100",
                                  dataPoint: t[l],
                                  dataSeries: U,
                                  point: {
                                      x: p,
                                      y: 0 <= t[l].y ? r : u
                                  },
                                  direction: 0 > t[l].y === a.axisY.reversed ? 1 : -1,
                                  bounds: {
                                      x1: z,
                                      y1: Math.min(r, u),
                                      x2: m,
                                      y2: Math.max(r, u)
                                  },
                                  color: c
                              })
                          }
              }
              x && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width,
                  this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
              b.restore();
              return {
                  source: e,
                  dest: this.plotArea.ctx,
                  animationCallback: w.yScaleAnimation,
                  easingFunction: w.easing.easeOutQuart,
                  animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q
              }
          }
      };
      m.prototype.renderBar =
          function(a) {
              var e = a.targetCanvasCtx || this.plotArea.ctx,
                  b = x ? this._preRenderCtx : e;
              if (!(0 >= a.dataSeriesIndexes.length)) {
                  var c = null,
                      h = this.plotArea,
                      g = 0,
                      d, s, n, l = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                      g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                      p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) <<
                      0,
                      r = a.axisX.dataInfo.minDiff;
                  isFinite(r) || (r = 0.3 * Math.abs(a.axisX.range));
                  r = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.height * (a.axisX.logarithmic ? Math.log(r) / Math.log(a.axisX.range) : Math.abs(r) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                  this.dataPointMaxWidth && g > p && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                  !this.dataPointMaxWidth && (this.dataPointMinWidth && p < g) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
                  r < g && (r =
                      g);
                  r > p && (r = p);
                  b.save();
                  x && this._eventManager.ghostCtx.save();
                  b.beginPath();
                  b.rect(h.x1, h.y1, h.width, h.height);
                  b.clip();
                  x && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
                  for (p = 0; p < a.dataSeriesIndexes.length; p++) {
                      var q = a.dataSeriesIndexes[p],
                          k = this.data[q],
                          C = k.dataPoints;
                      if (0 < C.length) {
                          var f = 5 < r && k.bevelEnabled ? !0 : !1;
                          b.strokeStyle = "#4572A7 ";
                          for (g = 0; g < C.length; g++)
                              if (C[g].getTime ? n = C[g].x.getTime() : n = C[g].x, !(n <
                                      a.axisX.dataInfo.viewPortMin || n > a.axisX.dataInfo.viewPortMax) && "number" === typeof C[g].y) {
                                  s = a.axisX.convertValueToPixel(n);
                                  d = a.axisY.convertValueToPixel(C[g].y);
                                  s = a.axisX.reversed ? s + a.plotType.totalDataSeries * r / 2 - (a.previousDataSeriesCount + p) * r << 0 : s - a.plotType.totalDataSeries * r / 2 + (a.previousDataSeriesCount + p) * r << 0;
                                  var z = a.axisX.reversed ? s - r << 0 : s + r << 0,
                                      t;
                                  0 <= C[g].y ? t = l : (t = d, d = l);
                                  c = C[g].color ? C[g].color : k._colorSet[g % k._colorSet.length];
                                  Z(b, t, s, d, z, c, 0, null, f, !1, !1, !1, k.fillOpacity);
                                  c = k.dataPointIds[g];
                                  this._eventManager.objectMap[c] = {
                                      id: c,
                                      objectType: "dataPoint",
                                      dataSeriesIndex: q,
                                      dataPointIndex: g,
                                      x1: t,
                                      y1: s,
                                      x2: d,
                                      y2: z
                                  };
                                  c = N(c);
                                  x && Z(this._eventManager.ghostCtx, t, s, d, z, c, 0, null, !1, !1, !1, !1);
                                  (C[g].indexLabel || k.indexLabel || C[g].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                      chartType: "bar",
                                      dataPoint: C[g],
                                      dataSeries: k,
                                      point: {
                                          x: 0 <= C[g].y ? d : t,
                                          y: s + (z - s) / 2
                                      },
                                      direction: 0 > C[g].y === a.axisY.reversed ? 1 : -1,
                                      bounds: {
                                          x1: Math.min(t, d),
                                          y1: s,
                                          x2: Math.max(t, d),
                                          y2: z
                                      },
                                      color: c
                                  })
                              }
                      }
                  }
                  x && (e.drawImage(this._preRenderCanvas,
                      0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                  b.restore();
                  return {
                      source: e,
                      dest: this.plotArea.ctx,
                      animationCallback: w.xScaleAnimation,
                      easingFunction: w.easing.easeOutQuart,
                      animationBase: l < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : l > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : l
                  }
              }
          };
      m.prototype.renderStackedBar = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx,
              b = x ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var c = null,
                  h = this.plotArea,
                  g = [],
                  d = [],
                  s = [],
                  n = [],
                  l = 0,
                  p, r, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                  l = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
              r = this.options.dataPointMaxWidth ?
                  this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
              var k = a.axisX.dataInfo.minDiff;
              isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
              k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.height * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
              this.dataPointMaxWidth && l > r && (l = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, r));
              !this.dataPointMaxWidth && (this.dataPointMinWidth &&
                  r < l) && (r = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, l));
              k < l && (k = l);
              k > r && (k = r);
              b.save();
              x && this._eventManager.ghostCtx.save();
              b.beginPath();
              b.rect(h.x1, h.y1, h.width, h.height);
              b.clip();
              x && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
              for (var C = 0; C < a.dataSeriesIndexes.length; C++) {
                  var f = a.dataSeriesIndexes[C],
                      z = this.data[f],
                      t = z.dataPoints;
                  if (0 < t.length) {
                      var D = 5 < k && z.bevelEnabled ? !0 : !1;
                      b.strokeStyle =
                          "#4572A7 ";
                      for (l = 0; l < t.length; l++)
                          if (c = t[l].x.getTime ? t[l].x.getTime() : t[l].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[l].y) {
                              r = a.axisX.convertValueToPixel(c);
                              var u = r - a.plotType.plotUnits.length * k / 2 + a.index * k << 0,
                                  m = u + k << 0,
                                  v;
                              if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[l].y) s[c] = t[l].y + (s[c] ? s[c] : 0), 0 < s[c] && (v = g[c] ? g[c] : q, g[c] = p = a.axisY.convertValueToPixel(s[c]));
                              else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                                  0 >= t[l].y) n[c] = t[l].y + (n[c] ? n[c] : 0), p = d[c] ? d[c] : q, d[c] = v = a.axisY.convertValueToPixel(n[c]);
                              else if (p = a.axisY.convertValueToPixel(t[l].y), 0 <= t[l].y) {
                                  var B = g[c] ? g[c] : 0;
                                  v = q + B;
                                  p += B;
                                  g[c] = B + (p - v)
                              } else B = d[c] ? d[c] : 0, v = p - B, p = q - B, d[c] = B + (p - v);
                              c = t[l].color ? t[l].color : z._colorSet[l % z._colorSet.length];
                              Z(b, v, u, p, m, c, 0, null, D, !1, !1, !1, z.fillOpacity);
                              c = z.dataPointIds[l];
                              this._eventManager.objectMap[c] = {
                                  id: c,
                                  objectType: "dataPoint",
                                  dataSeriesIndex: f,
                                  dataPointIndex: l,
                                  x1: v,
                                  y1: u,
                                  x2: p,
                                  y2: m
                              };
                              c = N(c);
                              x && Z(this._eventManager.ghostCtx,
                                  v, u, p, m, c, 0, null, !1, !1, !1, !1);
                              (t[l].indexLabel || z.indexLabel || t[l].indexLabelFormatter || z.indexLabelFormatter) && this._indexLabels.push({
                                  chartType: "stackedBar",
                                  dataPoint: t[l],
                                  dataSeries: z,
                                  point: {
                                      x: 0 <= t[l].y ? p : v,
                                      y: r
                                  },
                                  direction: 0 > t[l].y === a.axisY.reversed ? 1 : -1,
                                  bounds: {
                                      x1: Math.min(v, p),
                                      y1: u,
                                      x2: Math.max(v, p),
                                      y2: m
                                  },
                                  color: c
                              })
                          }
                  }
              }
              x && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                  a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
              b.restore();
              return {
                  source: e,
                  dest: this.plotArea.ctx,
                  animationCallback: w.xScaleAnimation,
                  easingFunction: w.easing.easeOutQuart,
                  animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
              }
          }
      };
      m.prototype.renderStackedBar100 =
          function(a) {
              var e = a.targetCanvasCtx || this.plotArea.ctx,
                  b = x ? this._preRenderCtx : e;
              if (!(0 >= a.dataSeriesIndexes.length)) {
                  var c = null,
                      h = this.plotArea,
                      g = [],
                      d = [],
                      s = [],
                      n = [],
                      l = 0,
                      p, r, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                      l = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                  r = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
                  var k = a.axisX.dataInfo.minDiff;
                  isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
                  k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.height * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                  this.dataPointMaxWidth && l > r && (l = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, r));
                  !this.dataPointMaxWidth && (this.dataPointMinWidth && r < l) && (r = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, l));
                  k < l && (k = l);
                  k > r && (k = r);
                  b.save();
                  x &&
                      this._eventManager.ghostCtx.save();
                  b.beginPath();
                  b.rect(h.x1, h.y1, h.width, h.height);
                  b.clip();
                  x && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
                  for (var f = 0; f < a.dataSeriesIndexes.length; f++) {
                      var z = a.dataSeriesIndexes[f],
                          u = this.data[z],
                          t = u.dataPoints;
                      if (0 < t.length) {
                          var D = 5 < k && u.bevelEnabled ? !0 : !1;
                          b.strokeStyle = "#4572A7 ";
                          for (l = 0; l < t.length; l++)
                              if (c = t[l].x.getTime ? t[l].x.getTime() : t[l].x, !(c < a.axisX.dataInfo.viewPortMin ||
                                      c > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[l].y) {
                                  r = a.axisX.convertValueToPixel(c);
                                  var m;
                                  m = 0 !== a.dataPointYSums[c] ? 100 * (t[l].y / a.dataPointYSums[c]) : 0;
                                  var v = r - a.plotType.plotUnits.length * k / 2 + a.index * k << 0,
                                      K = v + k << 0;
                                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[l].y) {
                                      s[c] = m + (s[c] ? s[c] : 0);
                                      if (0 >= s[c]) continue;
                                      m = g[c] ? g[c] : q;
                                      g[c] = p = a.axisY.convertValueToPixel(s[c])
                                  } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[l].y) n[c] =
                                      m + (n[c] ? n[c] : 0), p = d[c] ? d[c] : q, d[c] = m = a.axisY.convertValueToPixel(n[c]);
                                  else if (p = a.axisY.convertValueToPixel(m), 0 <= t[l].y) {
                                      var B = g[c] ? g[c] : 0;
                                      m = q + B;
                                      p += B;
                                      a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(h.x2 - p) && (p = h.x2);
                                      g[c] = B + (p - m)
                                  } else B = d[c] ? d[c] : 0, m = p - B, p = q - B, a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(h.x1 - m) && (m = h.x1), d[c] = B + (p - m);
                                  c = t[l].color ? t[l].color : u._colorSet[l % u._colorSet.length];
                                  Z(b, m, v, p, K, c, 0, null, D, !1, !1, !1, u.fillOpacity);
                                  c = u.dataPointIds[l];
                                  this._eventManager.objectMap[c] = {
                                      id: c,
                                      objectType: "dataPoint",
                                      dataSeriesIndex: z,
                                      dataPointIndex: l,
                                      x1: m,
                                      y1: v,
                                      x2: p,
                                      y2: K
                                  };
                                  c = N(c);
                                  x && Z(this._eventManager.ghostCtx, m, v, p, K, c, 0, null, !1, !1, !1, !1);
                                  (t[l].indexLabel || u.indexLabel || t[l].indexLabelFormatter || u.indexLabelFormatter) && this._indexLabels.push({
                                      chartType: "stackedBar100",
                                      dataPoint: t[l],
                                      dataSeries: u,
                                      point: {
                                          x: 0 <= t[l].y ? p : m,
                                          y: r
                                      },
                                      direction: 0 > t[l].y === a.axisY.reversed ? 1 : -1,
                                      bounds: {
                                          x1: Math.min(m, p),
                                          y1: v,
                                          x2: Math.max(m, p),
                                          y2: K
                                      },
                                      color: c
                                  })
                              }
                      }
                  }
                  x && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation =
                      "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                  b.restore();
                  return {
                      source: e,
                      dest: this.plotArea.ctx,
                      animationCallback: w.xScaleAnimation,
                      easingFunction: w.easing.easeOutQuart,
                      animationBase: q < a.axisY.bounds.x1 ?
                          a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
                  }
              }
          };
      m.prototype.renderArea = function(a) {
          var e, b;

          function c() {
              K && (0 < k.lineThickness && g.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? v = Qa : 0 > a.axisY.viewportMaximum ? v = s.y1 : 0 < a.axisY.viewportMinimum && (v = Qa), g.lineTo(m, v), g.lineTo(K.x, v), g.closePath(), g.globalAlpha = k.fillOpacity, g.fill(), g.globalAlpha = 1, x && (d.lineTo(m, v), d.lineTo(K.x, v), d.closePath(), d.fill()), g.beginPath(), g.moveTo(m, t), d.beginPath(), d.moveTo(m,
                  t), K = {
                  x: m,
                  y: t
              })
          }
          var h = a.targetCanvasCtx || this.plotArea.ctx,
              g = x ? this._preRenderCtx : h;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var d = this._eventManager.ghostCtx,
                  s = a.axisY.lineCoordinates,
                  n = [],
                  l = this.plotArea,
                  p;
              g.save();
              x && d.save();
              g.beginPath();
              g.rect(l.x1, l.y1, l.width, l.height);
              g.clip();
              x && (d.beginPath(), d.rect(l.x1, l.y1, l.width, l.height), d.clip());
              for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                  var q = a.dataSeriesIndexes[r],
                      k = this.data[q],
                      f = k.dataPoints,
                      n = k.id;
                  this._eventManager.objectMap[n] = {
                      objectType: "dataSeries",
                      dataSeriesIndex: q
                  };
                  n = N(n);
                  d.fillStyle = n;
                  n = [];
                  e = !0;
                  var z = 0,
                      m, t, D, Qa = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                      v, K = null;
                  if (0 < f.length) {
                      var B = k._colorSet[z % k._colorSet.length],
                          y = k.lineColor = k.options.lineColor || B,
                          A = y;
                      g.fillStyle = B;
                      g.strokeStyle = y;
                      g.lineWidth = k.lineThickness;
                      b = "solid";
                      if (g.setLineDash) {
                          var Q = M(k.nullDataLineDashType, k.lineThickness);
                          b = k.lineDashType;
                          var R = M(b, k.lineThickness);
                          g.setLineDash(R)
                      }
                      for (var da = !0; z < f.length; z++)
                          if (D = f[z].x.getTime ? f[z].x.getTime() :
                              f[z].x, !(D < a.axisX.dataInfo.viewPortMin || D > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !da)))
                              if ("number" !== typeof f[z].y) k.connectNullData || (da || e) || c(), da = !0;
                              else {
                                  m = a.axisX.convertValueToPixel(D);
                                  t = a.axisY.convertValueToPixel(f[z].y);
                                  e || da ? (!e && k.connectNullData ? (g.setLineDash && (k.options.nullDataLineDashType || b === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (e = m, b = t, m = p.x, t = p.y, c(), g.moveTo(p.x, p.y), m = e, t = b, K = p, b = k.nullDataLineDashType, g.setLineDash(Q)), g.lineTo(m, t), x && d.lineTo(m,
                                      t)) : (g.beginPath(), g.moveTo(m, t), x && (d.beginPath(), d.moveTo(m, t)), K = {
                                      x: m,
                                      y: t
                                  }), da = e = !1) : (g.lineTo(m, t), x && d.lineTo(m, t), 0 == z % 250 && c());
                                  p = {
                                      x: m,
                                      y: t
                                  };
                                  z < f.length - 1 && (A !== (f[z].lineColor || y) || b !== (f[z].lineDashType || k.lineDashType)) && (c(), A = f[z].lineColor || y, g.strokeStyle = A, g.setLineDash && (f[z].lineDashType ? (b = f[z].lineDashType, g.setLineDash(M(b, k.lineThickness))) : (b = k.lineDashType, g.setLineDash(R))));
                                  var ca = k.dataPointIds[z];
                                  this._eventManager.objectMap[ca] = {
                                      id: ca,
                                      objectType: "dataPoint",
                                      dataSeriesIndex: q,
                                      dataPointIndex: z,
                                      x1: m,
                                      y1: t
                                  };
                                  0 !== f[z].markerSize && (0 < f[z].markerSize || 0 < k.markerSize) && (D = k.getMarkerProperties(z, m, t, g), n.push(D), ca = N(ca), x && n.push({
                                      x: m,
                                      y: t,
                                      ctx: d,
                                      type: D.type,
                                      size: D.size,
                                      color: ca,
                                      borderColor: ca,
                                      borderThickness: D.borderThickness
                                  }));
                                  (f[z].indexLabel || k.indexLabel || f[z].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                      chartType: "area",
                                      dataPoint: f[z],
                                      dataSeries: k,
                                      point: {
                                          x: m,
                                          y: t
                                      },
                                      direction: 0 > f[z].y === a.axisY.reversed ? 1 : -1,
                                      color: B
                                  })
                              } c();
                      u.drawMarkers(n)
                  }
              }
              x && (h.drawImage(this._preRenderCanvas,
                  0, 0, this.width, this.height), g.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && g.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && g.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.clearRect(l.x1, l.y1, l.width, l.height), this._eventManager.ghostCtx.restore());
              g.restore();
              return {
                  source: h,
                  dest: this.plotArea.ctx,
                  animationCallback: w.xClipAnimation,
                  easingFunction: w.easing.linear,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderSplineArea = function(a) {
          function e() {
              var b = v(D, 2);
              if (0 < b.length) {
                  if (0 < p.lineThickness) {
                      c.beginPath();
                      c.moveTo(b[0].x, b[0].y);
                      b[0].newStrokeStyle && (c.strokeStyle = b[0].newStrokeStyle);
                      b[0].newLineDashArray && c.setLineDash(b[0].newLineDashArray);
                      for (var e = 0; e < b.length - 3; e += 3)
                          if (c.bezierCurveTo(b[e + 1].x, b[e + 1].y, b[e + 2].x, b[e + 2].y, b[e + 3].x, b[e + 3].y), x && h.bezierCurveTo(b[e + 1].x, b[e + 1].y, b[e + 2].x, b[e + 2].y, b[e + 3].x, b[e + 3].y), b[e + 3].newStrokeStyle || b[e + 3].newLineDashArray) c.stroke(),
                              c.beginPath(), c.moveTo(b[e + 3].x, b[e + 3].y), b[e + 3].newStrokeStyle && (c.strokeStyle = b[e + 3].newStrokeStyle), b[e + 3].newLineDashArray && c.setLineDash(b[e + 3].newLineDashArray);
                      c.stroke()
                  }
                  c.beginPath();
                  c.moveTo(b[0].x, b[0].y);
                  x && (h.beginPath(), h.moveTo(b[0].x, b[0].y));
                  for (e = 0; e < b.length - 3; e += 3) c.bezierCurveTo(b[e + 1].x, b[e + 1].y, b[e + 2].x, b[e + 2].y, b[e + 3].x, b[e + 3].y), x && h.bezierCurveTo(b[e + 1].x, b[e + 1].y, b[e + 2].x, b[e + 2].y, b[e + 3].x, b[e + 3].y);
                  a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ?
                      m = z : 0 > a.axisY.viewportMaximum ? m = g.y1 : 0 < a.axisY.viewportMinimum && (m = z);
                  t = {
                      x: b[0].x,
                      y: b[0].y
                  };
                  c.lineTo(b[b.length - 1].x, m);
                  c.lineTo(t.x, m);
                  c.closePath();
                  c.globalAlpha = p.fillOpacity;
                  c.fill();
                  c.globalAlpha = 1;
                  x && (h.lineTo(b[b.length - 1].x, m), h.lineTo(t.x, m), h.closePath(), h.fill())
              }
          }
          var b = a.targetCanvasCtx || this.plotArea.ctx,
              c = x ? this._preRenderCtx : b;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var h = this._eventManager.ghostCtx,
                  g = a.axisY.lineCoordinates,
                  d = [],
                  s = this.plotArea;
              c.save();
              x && h.save();
              c.beginPath();
              c.rect(s.x1,
                  s.y1, s.width, s.height);
              c.clip();
              x && (h.beginPath(), h.rect(s.x1, s.y1, s.width, s.height), h.clip());
              for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                  var l = a.dataSeriesIndexes[n],
                      p = this.data[l],
                      r = p.dataPoints,
                      d = p.id;
                  this._eventManager.objectMap[d] = {
                      objectType: "dataSeries",
                      dataSeriesIndex: l
                  };
                  d = N(d);
                  h.fillStyle = d;
                  var d = [],
                      q = 0,
                      k, f, z = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                      m, t = null,
                      D = [];
                  if (0 < r.length) {
                      var Qa = p._colorSet[q % p._colorSet.length],
                          ia = p.lineColor = p.options.lineColor ||
                          Qa,
                          K = ia;
                      c.fillStyle = Qa;
                      c.strokeStyle = ia;
                      c.lineWidth = p.lineThickness;
                      var B = "solid";
                      if (c.setLineDash) {
                          var y = M(p.nullDataLineDashType, p.lineThickness),
                              B = p.lineDashType,
                              A = M(B, p.lineThickness);
                          c.setLineDash(A)
                      }
                      for (f = !1; q < r.length; q++)
                          if (k = r[q].x.getTime ? r[q].x.getTime() : r[q].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax && (!p.connectNullData || !f)))
                              if ("number" !== typeof r[q].y) 0 < q && !f && (p.connectNullData ? c.setLineDash && (0 < D.length && (p.options.nullDataLineDashType || !r[q - 1].lineDashType)) &&
                                  (D[D.length - 1].newLineDashArray = y, B = p.nullDataLineDashType) : (e(), D = [])), f = !0;
                              else {
                                  k = a.axisX.convertValueToPixel(k);
                                  f = a.axisY.convertValueToPixel(r[q].y);
                                  var Q = p.dataPointIds[q];
                                  this._eventManager.objectMap[Q] = {
                                      id: Q,
                                      objectType: "dataPoint",
                                      dataSeriesIndex: l,
                                      dataPointIndex: q,
                                      x1: k,
                                      y1: f
                                  };
                                  D[D.length] = {
                                      x: k,
                                      y: f
                                  };
                                  q < r.length - 1 && (K !== (r[q].lineColor || ia) || B !== (r[q].lineDashType || p.lineDashType)) && (K = r[q].lineColor || ia, D[D.length - 1].newStrokeStyle = K, c.setLineDash && (r[q].lineDashType ? (B = r[q].lineDashType, D[D.length -
                                      1].newLineDashArray = M(B, p.lineThickness)) : (B = p.lineDashType, D[D.length - 1].newLineDashArray = A)));
                                  if (0 !== r[q].markerSize && (0 < r[q].markerSize || 0 < p.markerSize)) {
                                      var R = p.getMarkerProperties(q, k, f, c);
                                      d.push(R);
                                      Q = N(Q);
                                      x && d.push({
                                          x: k,
                                          y: f,
                                          ctx: h,
                                          type: R.type,
                                          size: R.size,
                                          color: Q,
                                          borderColor: Q,
                                          borderThickness: R.borderThickness
                                      })
                                  }(r[q].indexLabel || p.indexLabel || r[q].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({
                                      chartType: "splineArea",
                                      dataPoint: r[q],
                                      dataSeries: p,
                                      point: {
                                          x: k,
                                          y: f
                                      },
                                      direction: 0 >
                                          r[q].y === a.axisY.reversed ? 1 : -1,
                                      color: Qa
                                  });
                                  f = !1
                              } e();
                      u.drawMarkers(d)
                  }
              }
              x && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(s.x1, s.y1, s.width, s.height), this._eventManager.ghostCtx.restore());
              c.restore();
              return {
                  source: b,
                  dest: this.plotArea.ctx,
                  animationCallback: w.xClipAnimation,
                  easingFunction: w.easing.linear,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderStepArea = function(a) {
          var e, b;

          function c() {
              K && (0 < k.lineThickness && g.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? ia = v : 0 > a.axisY.viewportMaximum ? ia = s.y1 : 0 < a.axisY.viewportMinimum && (ia = v), g.lineTo(m, ia), g.lineTo(K.x, ia), g.closePath(), g.globalAlpha = k.fillOpacity, g.fill(), g.globalAlpha = 1, x && (d.lineTo(m, ia), d.lineTo(K.x,
                  ia), d.closePath(), d.fill()), g.beginPath(), g.moveTo(m, t), d.beginPath(), d.moveTo(m, t), K = {
                  x: m,
                  y: t
              })
          }
          var h = a.targetCanvasCtx || this.plotArea.ctx,
              g = x ? this._preRenderCtx : h;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var d = this._eventManager.ghostCtx,
                  s = a.axisY.lineCoordinates,
                  n = [],
                  l = this.plotArea,
                  p;
              g.save();
              x && d.save();
              g.beginPath();
              g.rect(l.x1, l.y1, l.width, l.height);
              g.clip();
              x && (d.beginPath(), d.rect(l.x1, l.y1, l.width, l.height), d.clip());
              for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                  var q = a.dataSeriesIndexes[r],
                      k = this.data[q],
                      f = k.dataPoints,
                      n = k.id;
                  this._eventManager.objectMap[n] = {
                      objectType: "dataSeries",
                      dataSeriesIndex: q
                  };
                  n = N(n);
                  d.fillStyle = n;
                  n = [];
                  e = !0;
                  var z = 0,
                      m, t, D, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                      ia, K = null;
                  b = !1;
                  if (0 < f.length) {
                      var B = k._colorSet[z % k._colorSet.length],
                          y = k.lineColor = k.options.lineColor || B,
                          A = y;
                      g.fillStyle = B;
                      g.strokeStyle = y;
                      g.lineWidth = k.lineThickness;
                      var Q = "solid";
                      if (g.setLineDash) {
                          var R = M(k.nullDataLineDashType, k.lineThickness),
                              Q = k.lineDashType,
                              da = M(Q, k.lineThickness);
                          g.setLineDash(da)
                      }
                      for (; z < f.length; z++)
                          if (D = f[z].x.getTime ? f[z].x.getTime() : f[z].x, !(D < a.axisX.dataInfo.viewPortMin || D > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !b))) {
                              var ca = t;
                              "number" !== typeof f[z].y ? (k.connectNullData || (b || e) || c(), b = !0) : (m = a.axisX.convertValueToPixel(D), t = a.axisY.convertValueToPixel(f[z].y), e || b ? (!e && k.connectNullData ? (g.setLineDash && (k.options.nullDataLineDashType || Q === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (e = m, b = t, m = p.x, t = p.y,
                                  c(), g.moveTo(p.x, p.y), m = e, t = b, K = p, Q = k.nullDataLineDashType, g.setLineDash(R)), g.lineTo(m, ca), g.lineTo(m, t), x && (d.lineTo(m, ca), d.lineTo(m, t))) : (g.beginPath(), g.moveTo(m, t), x && (d.beginPath(), d.moveTo(m, t)), K = {
                                  x: m,
                                  y: t
                              }), b = e = !1) : (g.lineTo(m, ca), x && d.lineTo(m, ca), g.lineTo(m, t), x && d.lineTo(m, t), 0 == z % 250 && c()), p = {
                                  x: m,
                                  y: t
                              }, z < f.length - 1 && (A !== (f[z].lineColor || y) || Q !== (f[z].lineDashType || k.lineDashType)) && (c(), A = f[z].lineColor || y, g.strokeStyle = A, g.setLineDash && (f[z].lineDashType ? (Q = f[z].lineDashType, g.setLineDash(M(Q,
                                  k.lineThickness))) : (Q = k.lineDashType, g.setLineDash(da)))), D = k.dataPointIds[z], this._eventManager.objectMap[D] = {
                                  id: D,
                                  objectType: "dataPoint",
                                  dataSeriesIndex: q,
                                  dataPointIndex: z,
                                  x1: m,
                                  y1: t
                              }, 0 !== f[z].markerSize && (0 < f[z].markerSize || 0 < k.markerSize) && (ca = k.getMarkerProperties(z, m, t, g), n.push(ca), D = N(D), x && n.push({
                                  x: m,
                                  y: t,
                                  ctx: d,
                                  type: ca.type,
                                  size: ca.size,
                                  color: D,
                                  borderColor: D,
                                  borderThickness: ca.borderThickness
                              })), (f[z].indexLabel || k.indexLabel || f[z].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                  chartType: "stepArea",
                                  dataPoint: f[z],
                                  dataSeries: k,
                                  point: {
                                      x: m,
                                      y: t
                                  },
                                  direction: 0 > f[z].y === a.axisY.reversed ? 1 : -1,
                                  color: B
                              }))
                          } c();
                      u.drawMarkers(n)
                  }
              }
              x && (h.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && g.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && g.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.clearRect(l.x1,
                  l.y1, l.width, l.height), this._eventManager.ghostCtx.restore());
              g.restore();
              return {
                  source: h,
                  dest: this.plotArea.ctx,
                  animationCallback: w.xClipAnimation,
                  easingFunction: w.easing.linear,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderStackedArea = function(a) {
          function e() {
              if (!(1 > l.length)) {
                  for (0 < B.lineThickness && c.stroke(); 0 < l.length;) {
                      var a = l.pop();
                      c.lineTo(a.x, a.y);
                      x && m.lineTo(a.x, a.y)
                  }
                  c.closePath();
                  c.globalAlpha = B.fillOpacity;
                  c.fill();
                  c.globalAlpha = 1;
                  c.beginPath();
                  x && (m.closePath(), m.fill(), m.beginPath());
                  l = []
              }
          }
          var b =
              a.targetCanvasCtx || this.plotArea.ctx,
              c = x ? this._preRenderCtx : b;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var h = null,
                  g = null,
                  d = [],
                  s = this.plotArea,
                  f = [],
                  l = [],
                  p = [],
                  r = [],
                  q = 0,
                  k, n, z = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                  m = this._eventManager.ghostCtx,
                  t, D, v;
              x && m.beginPath();
              c.save();
              x && m.save();
              c.beginPath();
              c.rect(s.x1, s.y1, s.width, s.height);
              c.clip();
              x && (m.beginPath(), m.rect(s.x1, s.y1, s.width, s.height), m.clip());
              for (var h = [], ia = 0; ia < a.dataSeriesIndexes.length; ia++) {
                  var K = a.dataSeriesIndexes[ia],
                      B = this.data[K],
                      y = B.dataPoints;
                  B.dataPointIndexes = [];
                  for (q = 0; q < y.length; q++) K = y[q].x.getTime ? y[q].x.getTime() : y[q].x, B.dataPointIndexes[K] = q, h[K] || (p.push(K), h[K] = !0);
                  p.sort(Za)
              }
              for (ia = 0; ia < a.dataSeriesIndexes.length; ia++) {
                  K = a.dataSeriesIndexes[ia];
                  B = this.data[K];
                  y = B.dataPoints;
                  D = !0;
                  l = [];
                  q = B.id;
                  this._eventManager.objectMap[q] = {
                      objectType: "dataSeries",
                      dataSeriesIndex: K
                  };
                  q = N(q);
                  m.fillStyle = q;
                  if (0 < p.length) {
                      var h = B._colorSet[0],
                          A = B.lineColor = B.options.lineColor || h,
                          Q = A;
                      c.fillStyle = h;
                      c.strokeStyle = A;
                      c.lineWidth =
                          B.lineThickness;
                      v = "solid";
                      if (c.setLineDash) {
                          var R = M(B.nullDataLineDashType, B.lineThickness);
                          v = B.lineDashType;
                          var da = M(v, B.lineThickness);
                          c.setLineDash(da)
                      }
                      for (var ca = !0, q = 0; q < p.length; q++) {
                          var g = p[q],
                              ja = null,
                              ja = 0 <= B.dataPointIndexes[g] ? y[B.dataPointIndexes[g]] : {
                                  x: g,
                                  y: null
                              };
                          if (!(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax && (!B.connectNullData || !ca)))
                              if ("number" !== typeof ja.y) B.connectNullData || (ca || D) || e(), ca = !0;
                              else {
                                  k = a.axisX.convertValueToPixel(g);
                                  var ta = f[g] ? f[g] : 0;
                                  if (a.axisY.logarithmic ||
                                      a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                      r[g] = ja.y + (r[g] ? r[g] : 0);
                                      if (0 >= r[g] && a.axisY.logarithmic) continue;
                                      n = a.axisY.convertValueToPixel(r[g])
                                  } else n = a.axisY.convertValueToPixel(ja.y), n -= ta;
                                  l.push({
                                      x: k,
                                      y: z - ta
                                  });
                                  f[g] = z - n;
                                  D || ca ? (!D && B.connectNullData ? (c.setLineDash && (B.options.nullDataLineDashType || v === B.lineDashType && B.lineDashType !== B.nullDataLineDashType) && (D = l.pop(), v = l[l.length - 1], e(), c.moveTo(t.x, t.y), l.push(v), l.push(D), v = B.nullDataLineDashType, c.setLineDash(R)), c.lineTo(k,
                                      n), x && m.lineTo(k, n)) : (c.beginPath(), c.moveTo(k, n), x && (m.beginPath(), m.moveTo(k, n))), ca = D = !1) : (c.lineTo(k, n), x && m.lineTo(k, n), 0 == q % 250 && (e(), c.moveTo(k, n), x && m.moveTo(k, n), l.push({
                                      x: k,
                                      y: z - ta
                                  })));
                                  t = {
                                      x: k,
                                      y: n
                                  };
                                  q < y.length - 1 && (Q !== (y[q].lineColor || A) || v !== (y[q].lineDashType || B.lineDashType)) && (e(), c.beginPath(), c.moveTo(k, n), l.push({
                                      x: k,
                                      y: z - ta
                                  }), Q = y[q].lineColor || A, c.strokeStyle = Q, c.setLineDash && (y[q].lineDashType ? (v = y[q].lineDashType, c.setLineDash(M(v, B.lineThickness))) : (v = B.lineDashType, c.setLineDash(da))));
                                  if (0 <= B.dataPointIndexes[g]) {
                                      var na = B.dataPointIds[B.dataPointIndexes[g]];
                                      this._eventManager.objectMap[na] = {
                                          id: na,
                                          objectType: "dataPoint",
                                          dataSeriesIndex: K,
                                          dataPointIndex: B.dataPointIndexes[g],
                                          x1: k,
                                          y1: n
                                      }
                                  }
                                  0 <= B.dataPointIndexes[g] && 0 !== ja.markerSize && (0 < ja.markerSize || 0 < B.markerSize) && (ta = B.getMarkerProperties(B.dataPointIndexes[g], k, n, c), d.push(ta), g = N(na), x && d.push({
                                      x: k,
                                      y: n,
                                      ctx: m,
                                      type: ta.type,
                                      size: ta.size,
                                      color: g,
                                      borderColor: g,
                                      borderThickness: ta.borderThickness
                                  }));
                                  (ja.indexLabel || B.indexLabel || ja.indexLabelFormatter ||
                                      B.indexLabelFormatter) && this._indexLabels.push({
                                      chartType: "stackedArea",
                                      dataPoint: ja,
                                      dataSeries: B,
                                      point: {
                                          x: k,
                                          y: n
                                      },
                                      direction: 0 > y[q].y === a.axisY.reversed ? 1 : -1,
                                      color: h
                                  })
                              }
                      }
                      e();
                      c.moveTo(k, n);
                      x && m.moveTo(k, n)
                  }
                  delete B.dataPointIndexes
              }
              u.drawMarkers(d);
              x && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                  this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(s.x1, s.y1, s.width, s.height), m.restore());
              c.restore();
              return {
                  source: b,
                  dest: this.plotArea.ctx,
                  animationCallback: w.xClipAnimation,
                  easingFunction: w.easing.linear,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderStackedArea100 = function(a) {
          function e() {
              for (0 < B.lineThickness && c.stroke(); 0 < l.length;) {
                  var a = l.pop();
                  c.lineTo(a.x, a.y);
                  x && v.lineTo(a.x, a.y)
              }
              c.closePath();
              c.globalAlpha = B.fillOpacity;
              c.fill();
              c.globalAlpha = 1;
              c.beginPath();
              x && (v.closePath(), v.fill(), v.beginPath());
              l = []
          }
          var b = a.targetCanvasCtx || this.plotArea.ctx,
              c = x ? this._preRenderCtx : b;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var h = null,
                  g = null,
                  d = this.plotArea,
                  s = [],
                  n = [],
                  l = [],
                  p = [],
                  r = [],
                  q = 0,
                  k, f, z, m, t, D = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                  v = this._eventManager.ghostCtx;
              c.save();
              x && v.save();
              c.beginPath();
              c.rect(d.x1, d.y1, d.width, d.height);
              c.clip();
              x && (v.beginPath(), v.rect(d.x1, d.y1, d.width, d.height), v.clip());
              for (var h = [], y = 0; y < a.dataSeriesIndexes.length; y++) {
                  var K = a.dataSeriesIndexes[y],
                      B = this.data[K],
                      A = B.dataPoints;
                  B.dataPointIndexes = [];
                  for (q = 0; q < A.length; q++) K = A[q].x.getTime ? A[q].x.getTime() : A[q].x, B.dataPointIndexes[K] = q, h[K] || (p.push(K), h[K] = !0);
                  p.sort(Za)
              }
              for (y = 0; y < a.dataSeriesIndexes.length; y++) {
                  K = a.dataSeriesIndexes[y];
                  B = this.data[K];
                  A = B.dataPoints;
                  m = !0;
                  h = B.id;
                  this._eventManager.objectMap[h] = {
                      objectType: "dataSeries",
                      dataSeriesIndex: K
                  };
                  h = N(h);
                  v.fillStyle = h;
                  l = [];
                  if (0 < p.length) {
                      var h = B._colorSet[q %
                              B._colorSet.length],
                          E = B.lineColor = B.options.lineColor || h,
                          Q = E;
                      c.fillStyle = h;
                      c.strokeStyle = E;
                      c.lineWidth = B.lineThickness;
                      t = "solid";
                      if (c.setLineDash) {
                          var R = M(B.nullDataLineDashType, B.lineThickness);
                          t = B.lineDashType;
                          var da = M(t, B.lineThickness);
                          c.setLineDash(da)
                      }
                      for (var ca = !0, q = 0; q < p.length; q++) {
                          var g = p[q],
                              ja = null,
                              ja = 0 <= B.dataPointIndexes[g] ? A[B.dataPointIndexes[g]] : {
                                  x: g,
                                  y: null
                              };
                          if (!(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax && (!B.connectNullData || !ca)))
                              if ("number" !== typeof ja.y) B.connectNullData ||
                                  (ca || m) || e(), ca = !0;
                              else {
                                  var ta;
                                  ta = 0 !== a.dataPointYSums[g] ? 100 * (ja.y / a.dataPointYSums[g]) : 0;
                                  k = a.axisX.convertValueToPixel(g);
                                  var na = n[g] ? n[g] : 0;
                                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                      r[g] = ta + (r[g] ? r[g] : 0);
                                      if (0 >= r[g] && a.axisY.logarithmic) continue;
                                      f = a.axisY.convertValueToPixel(r[g])
                                  } else f = a.axisY.convertValueToPixel(ta), f -= na;
                                  l.push({
                                      x: k,
                                      y: D - na
                                  });
                                  n[g] = D - f;
                                  m || ca ? (!m && B.connectNullData ? (c.setLineDash && (B.options.nullDataLineDashType || t === B.lineDashType &&
                                      B.lineDashType !== B.nullDataLineDashType) && (m = l.pop(), t = l[l.length - 1], e(), c.moveTo(z.x, z.y), l.push(t), l.push(m), t = B.nullDataLineDashType, c.setLineDash(R)), c.lineTo(k, f), x && v.lineTo(k, f)) : (c.beginPath(), c.moveTo(k, f), x && (v.beginPath(), v.moveTo(k, f))), ca = m = !1) : (c.lineTo(k, f), x && v.lineTo(k, f), 0 == q % 250 && (e(), c.moveTo(k, f), x && v.moveTo(k, f), l.push({
                                      x: k,
                                      y: D - na
                                  })));
                                  z = {
                                      x: k,
                                      y: f
                                  };
                                  q < A.length - 1 && (Q !== (A[q].lineColor || E) || t !== (A[q].lineDashType || B.lineDashType)) && (e(), c.beginPath(), c.moveTo(k, f), l.push({
                                      x: k,
                                      y: D -
                                          na
                                  }), Q = A[q].lineColor || E, c.strokeStyle = Q, c.setLineDash && (A[q].lineDashType ? (t = A[q].lineDashType, c.setLineDash(M(t, B.lineThickness))) : (t = B.lineDashType, c.setLineDash(da))));
                                  if (0 <= B.dataPointIndexes[g]) {
                                      var H = B.dataPointIds[B.dataPointIndexes[g]];
                                      this._eventManager.objectMap[H] = {
                                          id: H,
                                          objectType: "dataPoint",
                                          dataSeriesIndex: K,
                                          dataPointIndex: B.dataPointIndexes[g],
                                          x1: k,
                                          y1: f
                                      }
                                  }
                                  0 <= B.dataPointIndexes[g] && 0 !== ja.markerSize && (0 < ja.markerSize || 0 < B.markerSize) && (na = B.getMarkerProperties(q, k, f, c), s.push(na), g = N(H),
                                      x && s.push({
                                          x: k,
                                          y: f,
                                          ctx: v,
                                          type: na.type,
                                          size: na.size,
                                          color: g,
                                          borderColor: g,
                                          borderThickness: na.borderThickness
                                      }));
                                  (ja.indexLabel || B.indexLabel || ja.indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({
                                      chartType: "stackedArea100",
                                      dataPoint: ja,
                                      dataSeries: B,
                                      point: {
                                          x: k,
                                          y: f
                                      },
                                      direction: 0 > A[q].y === a.axisY.reversed ? 1 : -1,
                                      color: h
                                  })
                              }
                      }
                      e();
                      c.moveTo(k, f);
                      x && v.moveTo(k, f)
                  }
                  delete B.dataPointIndexes
              }
              u.drawMarkers(s);
              x && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation =
                  "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), v.restore());
              c.restore();
              return {
                  source: b,
                  dest: this.plotArea.ctx,
                  animationCallback: w.xClipAnimation,
                  easingFunction: w.easing.linear,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderBubble = function(a) {
          var e =
              a.targetCanvasCtx || this.plotArea.ctx,
              b = x ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var c = this.plotArea,
                  h = 0,
                  g, d;
              b.save();
              x && this._eventManager.ghostCtx.save();
              b.beginPath();
              b.rect(c.x1, c.y1, c.width, c.height);
              b.clip();
              x && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
              for (var s = -Infinity, f = Infinity, l = 0; l < a.dataSeriesIndexes.length; l++)
                  for (var p = a.dataSeriesIndexes[l], r = this.data[p], q = r.dataPoints,
                          k = 0, h = 0; h < q.length; h++) g = q[h].getTime ? g = q[h].x.getTime() : g = q[h].x, g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax || "undefined" === typeof q[h].z || (k = q[h].z, k > s && (s = k), k < f && (f = k));
              for (var n = 25 * Math.PI, m = Math.max(Math.pow(0.25 * Math.min(c.height, c.width) / 2, 2) * Math.PI, n), l = 0; l < a.dataSeriesIndexes.length; l++)
                  if (p = a.dataSeriesIndexes[l], r = this.data[p], q = r.dataPoints, 0 < q.length)
                      for (b.strokeStyle = "#4572A7 ", h = 0; h < q.length; h++)
                          if (g = q[h].getTime ? g = q[h].x.getTime() : g = q[h].x, !(g < a.axisX.dataInfo.viewPortMin ||
                                  g > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[h].y) {
                              g = a.axisX.convertValueToPixel(g);
                              d = a.axisY.convertValueToPixel(q[h].y);
                              var k = q[h].z,
                                  z = 2 * Math.max(Math.sqrt((s === f ? m / 2 : n + (m - n) / (s - f) * (k - f)) / Math.PI) << 0, 1),
                                  k = r.getMarkerProperties(h, b);
                              k.size = z;
                              b.globalAlpha = r.fillOpacity;
                              u.drawMarker(g, d, b, k.type, k.size, k.color, k.borderColor, k.borderThickness);
                              b.globalAlpha = 1;
                              var t = r.dataPointIds[h];
                              this._eventManager.objectMap[t] = {
                                  id: t,
                                  objectType: "dataPoint",
                                  dataSeriesIndex: p,
                                  dataPointIndex: h,
                                  x1: g,
                                  y1: d,
                                  size: z
                              };
                              z = N(t);
                              x && u.drawMarker(g, d, this._eventManager.ghostCtx, k.type, k.size, z, z, k.borderThickness);
                              (q[h].indexLabel || r.indexLabel || q[h].indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({
                                  chartType: "bubble",
                                  dataPoint: q[h],
                                  dataSeries: r,
                                  point: {
                                      x: g,
                                      y: d
                                  },
                                  direction: 1,
                                  bounds: {
                                      x1: g - k.size / 2,
                                      y1: d - k.size / 2,
                                      x2: g + k.size / 2,
                                      y2: d + k.size / 2
                                  },
                                  color: null
                              })
                          } x && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas,
                  0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.restore());
              b.restore();
              return {
                  source: e,
                  dest: this.plotArea.ctx,
                  animationCallback: w.fadeInAnimation,
                  easingFunction: w.easing.easeInQuad,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderScatter = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx,
              b = x ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var c = this.plotArea,
                  h = 0,
                  g, d;
              b.save();
              x && this._eventManager.ghostCtx.save();
              b.beginPath();
              b.rect(c.x1, c.y1, c.width, c.height);
              b.clip();
              x && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
              for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                  var f = a.dataSeriesIndexes[s],
                      l = this.data[f],
                      p = l.dataPoints;
                  if (0 < p.length) {
                      b.strokeStyle = "#4572A7 ";
                      Math.pow(0.3 * Math.min(c.height,
                          c.width) / 2, 2);
                      for (var r = 0, q = 0, h = 0; h < p.length; h++)
                          if (g = p[h].getTime ? g = p[h].x.getTime() : g = p[h].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && "number" === typeof p[h].y) {
                              g = a.axisX.convertValueToPixel(g);
                              d = a.axisY.convertValueToPixel(p[h].y);
                              var k = l.getMarkerProperties(h, g, d, b);
                              b.globalAlpha = l.fillOpacity;
                              u.drawMarker(k.x, k.y, k.ctx, k.type, k.size, k.color, k.borderColor, k.borderThickness);
                              b.globalAlpha = 1;
                              Math.sqrt((r - g) * (r - g) + (q - d) * (q - d)) < Math.min(k.size, 5) && p.length > Math.min(this.plotArea.width,
                                  this.plotArea.height) || (r = l.dataPointIds[h], this._eventManager.objectMap[r] = {
                                      id: r,
                                      objectType: "dataPoint",
                                      dataSeriesIndex: f,
                                      dataPointIndex: h,
                                      x1: g,
                                      y1: d
                                  }, r = N(r), x && u.drawMarker(k.x, k.y, this._eventManager.ghostCtx, k.type, k.size, r, r, k.borderThickness), (p[h].indexLabel || l.indexLabel || p[h].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                      chartType: "scatter",
                                      dataPoint: p[h],
                                      dataSeries: l,
                                      point: {
                                          x: g,
                                          y: d
                                      },
                                      direction: 1,
                                      bounds: {
                                          x1: g - k.size / 2,
                                          y1: d - k.size / 2,
                                          x2: g + k.size / 2,
                                          y2: d + k.size / 2
                                      },
                                      color: null
                                  }),
                                  r = g, q = d)
                          }
                  }
              }
              x && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.restore());
              b.restore();
              return {
                  source: e,
                  dest: this.plotArea.ctx,
                  animationCallback: w.fadeInAnimation,
                  easingFunction: w.easing.easeInQuad,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderCandlestick = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx,
              b = x ? this._preRenderCtx : e,
              c = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var h = null,
                  g = null,
                  d = this.plotArea,
                  s = 0,
                  f, l, p, r, q, k, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                  g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ?
                  this.dataPointWidth : 0.015 * this.width,
                  C = a.axisX.dataInfo.minDiff;
              isFinite(C) || (C = 0.3 * Math.abs(a.axisX.range));
              C = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * d.width * (a.axisX.logarithmic ? Math.log(C) / Math.log(a.axisX.range) : Math.abs(C) / Math.abs(a.axisX.range)) << 0;
              this.dataPointMaxWidth && h > g && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
              !this.dataPointMaxWidth && (this.dataPointMinWidth && g < h) && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
              C <
                  h && (C = h);
              C > g && (C = g);
              b.save();
              x && c.save();
              b.beginPath();
              b.rect(d.x1, d.y1, d.width, d.height);
              b.clip();
              x && (c.beginPath(), c.rect(d.x1, d.y1, d.width, d.height), c.clip());
              for (var z = 0; z < a.dataSeriesIndexes.length; z++) {
                  var m = a.dataSeriesIndexes[z],
                      t = this.data[m],
                      u = t.dataPoints;
                  if (0 < u.length)
                      for (var v = 5 < C && t.bevelEnabled ? !0 : !1, s = 0; s < u.length; s++)
                          if (u[s].getTime ? k = u[s].x.getTime() : k = u[s].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !n(u[s].y) && u[s].y.length && "number" === typeof u[s].y[0] &&
                              "number" === typeof u[s].y[1] && "number" === typeof u[s].y[2] && "number" === typeof u[s].y[3]) {
                              f = a.axisX.convertValueToPixel(k);
                              l = a.axisY.convertValueToPixel(u[s].y[0]);
                              p = a.axisY.convertValueToPixel(u[s].y[1]);
                              r = a.axisY.convertValueToPixel(u[s].y[2]);
                              q = a.axisY.convertValueToPixel(u[s].y[3]);
                              var y = f - C / 2 << 0,
                                  K = y + C << 0,
                                  g = t.options.fallingColor ? t.fallingColor : t._colorSet[0],
                                  h = u[s].color ? u[s].color : t._colorSet[0],
                                  B = Math.round(Math.max(1, 0.15 * C)),
                                  A = 0 === B % 2 ? 0 : 0.5,
                                  E = t.dataPointIds[s];
                              this._eventManager.objectMap[E] = {
                                  id: E,
                                  objectType: "dataPoint",
                                  dataSeriesIndex: m,
                                  dataPointIndex: s,
                                  x1: y,
                                  y1: l,
                                  x2: K,
                                  y2: p,
                                  x3: f,
                                  y3: r,
                                  x4: f,
                                  y4: q,
                                  borderThickness: B,
                                  color: h
                              };
                              b.strokeStyle = h;
                              b.beginPath();
                              b.lineWidth = B;
                              c.lineWidth = Math.max(B, 4);
                              "candlestick" === t.type ? (b.moveTo(f - A, p), b.lineTo(f - A, Math.min(l, q)), b.stroke(), b.moveTo(f - A, Math.max(l, q)), b.lineTo(f - A, r), b.stroke(), Z(b, y, Math.min(l, q), K, Math.max(l, q), u[s].y[0] <= u[s].y[3] ? t.risingColor : g, B, h, v, v, !1, !1, t.fillOpacity), x && (h = N(E), c.strokeStyle = h, c.moveTo(f - A, p), c.lineTo(f - A, Math.min(l,
                                  q)), c.stroke(), c.moveTo(f - A, Math.max(l, q)), c.lineTo(f - A, r), c.stroke(), Z(c, y, Math.min(l, q), K, Math.max(l, q), h, 0, null, !1, !1, !1, !1))) : "ohlc" === t.type && (b.moveTo(f - A, p), b.lineTo(f - A, r), b.stroke(), b.beginPath(), b.moveTo(f, l), b.lineTo(y, l), b.stroke(), b.beginPath(), b.moveTo(f, q), b.lineTo(K, q), b.stroke(), x && (h = N(E), c.strokeStyle = h, c.moveTo(f - A, p), c.lineTo(f - A, r), c.stroke(), c.beginPath(), c.moveTo(f, l), c.lineTo(y, l), c.stroke(), c.beginPath(), c.moveTo(f, q), c.lineTo(K, q), c.stroke()));
                              (u[s].indexLabel || t.indexLabel ||
                                  u[s].indexLabelFormatter || t.indexLabelFormatter) && this._indexLabels.push({
                                  chartType: t.type,
                                  dataPoint: u[s],
                                  dataSeries: t,
                                  point: {
                                      x: y + (K - y) / 2,
                                      y: a.axisY.reversed ? r : p
                                  },
                                  direction: 1,
                                  bounds: {
                                      x1: y,
                                      y1: Math.min(p, r),
                                      x2: K,
                                      y2: Math.max(p, r)
                                  },
                                  color: h
                              })
                          }
              }
              x && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                  this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(d.x1, d.y1, d.width, d.height), c.restore());
              b.restore();
              return {
                  source: e,
                  dest: this.plotArea.ctx,
                  animationCallback: w.fadeInAnimation,
                  easingFunction: w.easing.easeInQuad,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderBoxAndWhisker = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx,
              b = x ? this._preRenderCtx : e,
              c = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var h = null,
                  g = this.plotArea,
                  d = 0,
                  s, f, l, p, r, q, k, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                  d = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                  C = a.axisX.dataInfo.minDiff;
              isFinite(C) || (C = 0.3 * Math.abs(a.axisX.range));
              C = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * g.width * (a.axisX.logarithmic ? Math.log(C) / Math.log(a.axisX.range) : Math.abs(C) / Math.abs(a.axisX.range)) << 0;
              this.dataPointMaxWidth && h >
                  d && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d));
              !this.dataPointMaxWidth && (this.dataPointMinWidth && d < h) && (d = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
              C < h && (C = h);
              C > d && (C = d);
              b.save();
              x && c.save();
              b.beginPath();
              b.rect(g.x1, g.y1, g.width, g.height);
              b.clip();
              x && (c.beginPath(), c.rect(g.x1, g.y1, g.width, g.height), c.clip());
              for (var z = !1, z = !!a.axisY.reversed, m = 0; m < a.dataSeriesIndexes.length; m++) {
                  var t = a.dataSeriesIndexes[m],
                      u = this.data[t],
                      v = u.dataPoints;
                  if (0 < v.length)
                      for (var y = 5 < C && u.bevelEnabled ? !0 : !1, d = 0; d < v.length; d++)
                          if (v[d].getTime ? k = v[d].x.getTime() : k = v[d].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !n(v[d].y) && v[d].y.length && "number" === typeof v[d].y[0] && "number" === typeof v[d].y[1] && "number" === typeof v[d].y[2] && "number" === typeof v[d].y[3] && "number" === typeof v[d].y[4] && 5 === v[d].y.length) {
                              s = a.axisX.convertValueToPixel(k);
                              f = a.axisY.convertValueToPixel(v[d].y[0]);
                              l = a.axisY.convertValueToPixel(v[d].y[1]);
                              p = a.axisY.convertValueToPixel(v[d].y[2]);
                              r = a.axisY.convertValueToPixel(v[d].y[3]);
                              q = a.axisY.convertValueToPixel(v[d].y[4]);
                              var A = s - C / 2 << 0,
                                  B = s + C / 2 << 0,
                                  h = v[d].color ? v[d].color : u._colorSet[0],
                                  E = Math.round(Math.max(1, 0.15 * C)),
                                  G = 0 === E % 2 ? 0 : 0.5,
                                  Q = v[d].whiskerColor ? v[d].whiskerColor : v[d].color ? u.whiskerColor ? u.whiskerColor : v[d].color : u.whiskerColor ? u.whiskerColor : h,
                                  R = "number" === typeof v[d].whiskerThickness ? v[d].whiskerThickness : "number" === typeof u.options.whiskerThickness ? u.whiskerThickness : E,
                                  da = v[d].whiskerDashType ? v[d].whiskerDashType : u.whiskerDashType,
                                  ca = n(v[d].whiskerLength) ? n(u.options.whiskerLength) ? C : u.whiskerLength : v[d].whiskerLength,
                                  ca = "number" === typeof ca ? 0 >= ca ? 0 : ca >= C ? C : ca : "string" === typeof ca ? parseInt(ca) * C / 100 > C ? C : parseInt(ca) * C / 100 : C,
                                  ja = 1 === Math.round(R) % 2 ? 0.5 : 0,
                                  ta = v[d].stemColor ? v[d].stemColor : v[d].color ? u.stemColor ? u.stemColor : v[d].color : u.stemColor ? u.stemColor : h,
                                  na = "number" === typeof v[d].stemThickness ? v[d].stemThickness : "number" === typeof u.options.stemThickness ? u.stemThickness : E,
                                  H = 1 === Math.round(na) % 2 ? 0.5 : 0,
                                  J = v[d].stemDashType ? v[d].stemDashType :
                                  u.stemDashType,
                                  O = v[d].lineColor ? v[d].lineColor : v[d].color ? u.lineColor ? u.lineColor : v[d].color : u.lineColor ? u.lineColor : h,
                                  aa = "number" === typeof v[d].lineThickness ? v[d].lineThickness : "number" === typeof u.options.lineThickness ? u.lineThickness : E,
                                  S = v[d].lineDashType ? v[d].lineDashType : u.lineDashType,
                                  P = 1 === Math.round(aa) % 2 ? 0.5 : 0,
                                  L = u.upperBoxColor,
                                  Ga = u.lowerBoxColor,
                                  xa = n(u.options.fillOpacity) ? 1 : u.fillOpacity,
                                  T = u.dataPointIds[d];
                              this._eventManager.objectMap[T] = {
                                  id: T,
                                  objectType: "dataPoint",
                                  dataSeriesIndex: t,
                                  dataPointIndex: d,
                                  x1: A,
                                  y1: f,
                                  x2: B,
                                  y2: l,
                                  x3: s,
                                  y3: p,
                                  x4: s,
                                  y4: r,
                                  y5: q,
                                  borderThickness: E,
                                  color: h,
                                  stemThickness: na,
                                  stemColor: ta,
                                  whiskerThickness: R,
                                  whiskerLength: ca,
                                  whiskerColor: Q,
                                  lineThickness: aa,
                                  lineColor: O
                              };
                              b.save();
                              0 < na && (b.beginPath(), b.strokeStyle = ta, b.lineWidth = na, b.setLineDash && b.setLineDash(M(J, na)), b.moveTo(s - H, l), b.lineTo(s - H, f), b.stroke(), b.moveTo(s - H, r), b.lineTo(s - H, p), b.stroke());
                              b.restore();
                              c.lineWidth = Math.max(E, 4);
                              b.beginPath();
                              Z(b, A, Math.min(q, l), B, Math.max(l, q), Ga, 0, h, z ? y : !1, z ? !1 : y, !1, !1, xa);
                              b.beginPath();
                              Z(b, A, Math.min(p, q), B, Math.max(q, p), L, 0, h, z ? !1 : y, z ? y : !1, !1, !1, xa);
                              b.beginPath();
                              b.lineWidth = E;
                              b.strokeStyle = h;
                              b.rect(A - G, Math.min(l, p) - G, B - A + 2 * G, Math.max(l, p) - Math.min(l, p) + 2 * G);
                              b.stroke();
                              b.save();
                              0 < aa && (b.beginPath(), b.globalAlpha = 1, b.setLineDash && b.setLineDash(M(S, aa)), b.strokeStyle = O, b.lineWidth = aa, b.moveTo(A, q - P), b.lineTo(B, q - P), b.stroke());
                              b.restore();
                              b.save();
                              0 < R && (b.beginPath(), b.setLineDash && b.setLineDash(M(da, R)), b.strokeStyle = Q, b.lineWidth = R, b.moveTo(s - ca / 2 << 0, r - ja), b.lineTo(s + ca / 2 << 0,
                                  r - ja), b.stroke(), b.moveTo(s - ca / 2 << 0, f + ja), b.lineTo(s + ca / 2 << 0, f + ja), b.stroke());
                              b.restore();
                              x && (h = N(T), c.strokeStyle = h, c.lineWidth = na, 0 < na && (c.moveTo(s - G - H, l), c.lineTo(s - G - H, Math.max(f, r)), c.stroke(), c.moveTo(s - G - H, Math.min(f, r)), c.lineTo(s - G - H, p), c.stroke()), Z(c, A, Math.max(l, p), B, Math.min(l, p), h, 0, null, !1, !1, !1, !1), 0 < R && (c.beginPath(), c.lineWidth = R, c.moveTo(s + ca / 2, r - ja), c.lineTo(s - ca / 2, r - ja), c.stroke(), c.moveTo(s + ca / 2, f + ja), c.lineTo(s - ca / 2, f + ja), c.stroke()));
                              (v[d].indexLabel || u.indexLabel || v[d].indexLabelFormatter ||
                                  u.indexLabelFormatter) && this._indexLabels.push({
                                  chartType: u.type,
                                  dataPoint: v[d],
                                  dataSeries: u,
                                  point: {
                                      x: A + (B - A) / 2,
                                      y: a.axisY.reversed ? f : r
                                  },
                                  direction: 1,
                                  bounds: {
                                      x1: A,
                                      y1: Math.min(f, r),
                                      x2: B,
                                      y2: Math.max(f, r)
                                  },
                                  color: h
                              })
                          }
              }
              x && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                  0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), c.restore());
              b.restore();
              return {
                  source: e,
                  dest: this.plotArea.ctx,
                  animationCallback: w.fadeInAnimation,
                  easingFunction: w.easing.easeInQuad,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderRangeColumn = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx,
              b = x ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var c = null,
                  h = this.plotArea,
                  g = 0,
                  d, s, f, g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth :
                  1;
              d = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
              var l = a.axisX.dataInfo.minDiff;
              isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
              l = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.width * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
              this.dataPointMaxWidth && g > d && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d));
              !this.dataPointMaxWidth &&
                  (this.dataPointMinWidth && d < g) && (d = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
              l < g && (l = g);
              l > d && (l = d);
              b.save();
              x && this._eventManager.ghostCtx.save();
              b.beginPath();
              b.rect(h.x1, h.y1, h.width, h.height);
              b.clip();
              x && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
              for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                  var r = a.dataSeriesIndexes[p],
                      q = this.data[r],
                      k = q.dataPoints;
                  if (0 < k.length)
                      for (var C =
                              5 < l && q.bevelEnabled ? !0 : !1, g = 0; g < k.length; g++)
                          if (k[g].getTime ? f = k[g].x.getTime() : f = k[g].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !n(k[g].y) && k[g].y.length && "number" === typeof k[g].y[0] && "number" === typeof k[g].y[1]) {
                              c = a.axisX.convertValueToPixel(f);
                              d = a.axisY.convertValueToPixel(k[g].y[0]);
                              s = a.axisY.convertValueToPixel(k[g].y[1]);
                              var z = a.axisX.reversed ? c + a.plotType.totalDataSeries * l / 2 - (a.previousDataSeriesCount + p) * l << 0 : c - a.plotType.totalDataSeries * l / 2 + (a.previousDataSeriesCount +
                                      p) * l << 0,
                                  m = a.axisX.reversed ? z - l << 0 : z + l << 0,
                                  c = k[g].color ? k[g].color : q._colorSet[g % q._colorSet.length];
                              if (d > s) {
                                  var t = d;
                                  d = s;
                                  s = t
                              }
                              t = q.dataPointIds[g];
                              this._eventManager.objectMap[t] = {
                                  id: t,
                                  objectType: "dataPoint",
                                  dataSeriesIndex: r,
                                  dataPointIndex: g,
                                  x1: z,
                                  y1: d,
                                  x2: m,
                                  y2: s
                              };
                              Z(b, z, d, m, s, c, 0, c, C, C, !1, !1, q.fillOpacity);
                              c = N(t);
                              x && Z(this._eventManager.ghostCtx, z, d, m, s, c, 0, null, !1, !1, !1, !1);
                              if (k[g].indexLabel || q.indexLabel || k[g].indexLabelFormatter || q.indexLabelFormatter) this._indexLabels.push({
                                  chartType: "rangeColumn",
                                  dataPoint: k[g],
                                  dataSeries: q,
                                  indexKeyword: 0,
                                  point: {
                                      x: z + (m - z) / 2,
                                      y: k[g].y[1] >= k[g].y[0] ? s : d
                                  },
                                  direction: k[g].y[1] >= k[g].y[0] ? -1 : 1,
                                  bounds: {
                                      x1: z,
                                      y1: Math.min(d, s),
                                      x2: m,
                                      y2: Math.max(d, s)
                                  },
                                  color: c
                              }), this._indexLabels.push({
                                  chartType: "rangeColumn",
                                  dataPoint: k[g],
                                  dataSeries: q,
                                  indexKeyword: 1,
                                  point: {
                                      x: z + (m - z) / 2,
                                      y: k[g].y[1] >= k[g].y[0] ? d : s
                                  },
                                  direction: k[g].y[1] >= k[g].y[0] ? 1 : -1,
                                  bounds: {
                                      x1: z,
                                      y1: Math.min(d, s),
                                      x2: m,
                                      y2: Math.max(d, s)
                                  },
                                  color: c
                              })
                          }
              }
              x && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation =
                  "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
              b.restore();
              return {
                  source: e,
                  dest: this.plotArea.ctx,
                  animationCallback: w.fadeInAnimation,
                  easingFunction: w.easing.easeInQuad,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderError =
          function(a) {
              var e = a.targetCanvasCtx || this.plotArea.ctx,
                  b = x ? this._preRenderCtx : e,
                  c = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? !1 : !0 : !1;
              if (!(0 >= a.dataSeriesIndexes.length)) {
                  var h = null,
                      g = !1,
                      d = this.plotArea,
                      s = 0,
                      f, l, p, r, q, k, C, z = a.axisX.dataInfo.minDiff;
                  isFinite(z) || (z = 0.3 * Math.abs(a.axisX.range));
                  b.save();
                  x && this._eventManager.ghostCtx.save();
                  b.beginPath();
                  b.rect(d.x1, d.y1, d.width, d.height);
                  b.clip();
                  x && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1,
                      d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
                  for (var m = 0, t = 0; t < this.data.length; t++) !this.data[t].type.match(/(bar|column)/ig) || !this.data[t].visible || this.data[t].type.match(/(stacked)/ig) && m || m++;
                  for (var u = 0; u < a.dataSeriesIndexes.length; u++) {
                      var v = a.dataSeriesIndexes[u],
                          y = this.data[v],
                          A = y.dataPoints,
                          B = n(y._linkedSeries) ? !1 : y._linkedSeries.type.match(/(bar|column)/ig) && y._linkedSeries.visible ? !0 : !1,
                          E = 0;
                      if (B)
                          for (h = y._linkedSeries.id, t = 0; t < h; t++) !this.data[t].type.match(/(bar|column)/ig) ||
                              !this.data[t].visible || this.data[t].type.match(/(stacked)/ig) && E || (this.data[t].type.match(/(range)/ig) && (g = !0), E++);
                      h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                      s = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : c ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (B ? m : 1))) << 0 : 0.3 * this.width;
                      g && (s = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth :
                          c ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (B ? m : 1))) << 0 : 0.03 * this.width);
                      t = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((c ? d.height : d.width) * (a.axisX.logarithmic ? Math.log(z) / Math.log(a.axisX.range) : Math.abs(z) / Math.abs(a.axisX.range)) / (B ? m : 1)) << 0;
                      this.dataPointMaxWidth && h > s && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, s));
                      !this.dataPointMaxWidth && (this.dataPointMinWidth && s < h) && (s = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                      t < h &&
                          (t = h);
                      t > s && (t = s);
                      if (0 < A.length)
                          for (var J = y._colorSet, s = 0; s < A.length; s++) {
                              var h = y.lineColor = y.options.color ? y.options.color : J[0],
                                  Q = {
                                      color: A[s].whiskerColor ? A[s].whiskerColor : A[s].color ? y.whiskerColor ? y.whiskerColor : A[s].color : y.whiskerColor ? y.whiskerColor : h,
                                      thickness: n(A[s].whiskerThickness) ? y.whiskerThickness : A[s].whiskerThickness,
                                      dashType: A[s].whiskerDashType ? A[s].whiskerDashType : y.whiskerDashType,
                                      length: n(A[s].whiskerLength) ? n(y.options.whiskerLength) ? t : y.options.whiskerLength : A[s].whiskerLength,
                                      trimLength: n(A[s].whiskerLength) ? n(y.options.whiskerLength) ? 50 : 0 : 0
                                  };
                              Q.length = "number" === typeof Q.length ? 0 >= Q.length ? 0 : Q.length >= t ? t : Q.length : "string" === typeof Q.length ? parseInt(Q.length) * t / 100 > t ? t : parseInt(Q.length) * t / 100 > t : t;
                              Q.thickness = "number" === typeof Q.thickness ? 0 > Q.thickness ? 0 : Math.round(Q.thickness) : 2;
                              var R = {
                                  color: A[s].stemColor ? A[s].stemColor : A[s].color ? y.stemColor ? y.stemColor : A[s].color : y.stemColor ? y.stemColor : h,
                                  thickness: A[s].stemThickness ? A[s].stemThickness : y.stemThickness,
                                  dashType: A[s].stemDashType ?
                                      A[s].stemDashType : y.stemDashType
                              };
                              R.thickness = "number" === typeof R.thickness ? 0 > R.thickness ? 0 : Math.round(R.thickness) : 2;
                              A[s].getTime ? C = A[s].x.getTime() : C = A[s].x;
                              if (!(C < a.axisX.dataInfo.viewPortMin || C > a.axisX.dataInfo.viewPortMax) && !n(A[s].y) && A[s].y.length && "number" === typeof A[s].y[0] && "number" === typeof A[s].y[1]) {
                                  var da = a.axisX.convertValueToPixel(C);
                                  c ? l = da : f = da;
                                  da = a.axisY.convertValueToPixel(A[s].y[0]);
                                  c ? p = da : q = da;
                                  da = a.axisY.convertValueToPixel(A[s].y[1]);
                                  c ? r = da : k = da;
                                  c ? (q = a.axisX.reversed ? l + (B ? m :
                                      1) * t / 2 - (B ? E - 1 : 0) * t << 0 : l - (B ? m : 1) * t / 2 + (B ? E - 1 : 0) * t << 0, k = a.axisX.reversed ? q - t << 0 : q + t << 0) : (p = a.axisX.reversed ? f + (B ? m : 1) * t / 2 - (B ? E - 1 : 0) * t << 0 : f - (B ? m : 1) * t / 2 + (B ? E - 1 : 0) * t << 0, r = a.axisX.reversed ? p - t << 0 : p + t << 0);
                                  !c && q > k && (da = q, q = k, k = da);
                                  c && p > r && (da = p, p = r, r = da);
                                  da = y.dataPointIds[s];
                                  this._eventManager.objectMap[da] = {
                                      id: da,
                                      objectType: "dataPoint",
                                      dataSeriesIndex: v,
                                      dataPointIndex: s,
                                      x1: Math.min(p, r),
                                      y1: Math.min(q, k),
                                      x2: Math.max(r, p),
                                      y2: Math.max(k, q),
                                      isXYSwapped: c,
                                      stemProperties: R,
                                      whiskerProperties: Q
                                  };
                                  G(b, Math.min(p, r),
                                      Math.min(q, k), Math.max(r, p), Math.max(k, q), h, Q, R, c);
                                  x && G(this._eventManager.ghostCtx, p, q, r, k, h, Q, R, c);
                                  if (A[s].indexLabel || y.indexLabel || A[s].indexLabelFormatter || y.indexLabelFormatter) this._indexLabels.push({
                                          chartType: "error",
                                          dataPoint: A[s],
                                          dataSeries: y,
                                          indexKeyword: 0,
                                          point: {
                                              x: c ? A[s].y[1] >= A[s].y[0] ? p : r : p + (r - p) / 2,
                                              y: c ? q + (k - q) / 2 : A[s].y[1] >= A[s].y[0] ? k : q
                                          },
                                          direction: A[s].y[1] >= A[s].y[0] ? -1 : 1,
                                          bounds: {
                                              x1: c ? Math.min(p, r) : p,
                                              y1: c ? q : Math.min(q, k),
                                              x2: c ? Math.max(p, r) : r,
                                              y2: c ? k : Math.max(q, k)
                                          },
                                          color: h,
                                          axisSwapped: c
                                      }),
                                      this._indexLabels.push({
                                          chartType: "error",
                                          dataPoint: A[s],
                                          dataSeries: y,
                                          indexKeyword: 1,
                                          point: {
                                              x: c ? A[s].y[1] >= A[s].y[0] ? r : p : p + (r - p) / 2,
                                              y: c ? q + (k - q) / 2 : A[s].y[1] >= A[s].y[0] ? q : k
                                          },
                                          direction: A[s].y[1] >= A[s].y[0] ? 1 : -1,
                                          bounds: {
                                              x1: c ? Math.min(p, r) : p,
                                              y1: c ? q : Math.min(q, k),
                                              x2: c ? Math.max(p, r) : r,
                                              y2: c ? k : Math.max(q, k)
                                          },
                                          color: h,
                                          axisSwapped: c
                                      })
                              }
                          }
                  }
                  x && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                      a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
                  b.restore();
                  return {
                      source: e,
                      dest: this.plotArea.ctx,
                      animationCallback: w.fadeInAnimation,
                      easingFunction: w.easing.easeInQuad,
                      animationBase: 0
                  }
              }
          };
      m.prototype.renderRangeBar = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx,
              b = x ? this._preRenderCtx :
              e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var c = null,
                  h = this.plotArea,
                  g = 0,
                  d, s, f, l, g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
              d = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
              var p = a.axisX.dataInfo.minDiff;
              isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
              p = this.options.dataPointWidth ? this.dataPointWidth : 0.9 *
                  (h.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
              this.dataPointMaxWidth && g > d && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d));
              !this.dataPointMaxWidth && (this.dataPointMinWidth && d < g) && (d = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
              p < g && (p = g);
              p > d && (p = d);
              b.save();
              x && this._eventManager.ghostCtx.save();
              b.beginPath();
              b.rect(h.x1, h.y1, h.width, h.height);
              b.clip();
              x && (this._eventManager.ghostCtx.beginPath(),
                  this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
              for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                  var q = a.dataSeriesIndexes[r],
                      k = this.data[q],
                      C = k.dataPoints;
                  if (0 < C.length) {
                      var z = 5 < p && k.bevelEnabled ? !0 : !1;
                      b.strokeStyle = "#4572A7 ";
                      for (g = 0; g < C.length; g++)
                          if (C[g].getTime ? l = C[g].x.getTime() : l = C[g].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && !n(C[g].y) && C[g].y.length && "number" === typeof C[g].y[0] && "number" === typeof C[g].y[1]) {
                              d = a.axisY.convertValueToPixel(C[g].y[0]);
                              s = a.axisY.convertValueToPixel(C[g].y[1]);
                              f = a.axisX.convertValueToPixel(l);
                              f = a.axisX.reversed ? f + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + r) * p << 0 : f - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + r) * p << 0;
                              var m = a.axisX.reversed ? f - p << 0 : f + p << 0;
                              d > s && (c = d, d = s, s = c);
                              c = C[g].color ? C[g].color : k._colorSet[g % k._colorSet.length];
                              Z(b, d, f, s, m, c, 0, null, z, !1, !1, !1, k.fillOpacity);
                              c = k.dataPointIds[g];
                              this._eventManager.objectMap[c] = {
                                  id: c,
                                  objectType: "dataPoint",
                                  dataSeriesIndex: q,
                                  dataPointIndex: g,
                                  x1: d,
                                  y1: f,
                                  x2: s,
                                  y2: m
                              };
                              c = N(c);
                              x && Z(this._eventManager.ghostCtx, d, f, s, m, c, 0, null, !1, !1, !1, !1);
                              if (C[g].indexLabel || k.indexLabel || C[g].indexLabelFormatter || k.indexLabelFormatter) this._indexLabels.push({
                                  chartType: "rangeBar",
                                  dataPoint: C[g],
                                  dataSeries: k,
                                  indexKeyword: 0,
                                  point: {
                                      x: C[g].y[1] >= C[g].y[0] ? d : s,
                                      y: f + (m - f) / 2
                                  },
                                  direction: C[g].y[1] >= C[g].y[0] ? -1 : 1,
                                  bounds: {
                                      x1: Math.min(d, s),
                                      y1: f,
                                      x2: Math.max(d, s),
                                      y2: m
                                  },
                                  color: c
                              }), this._indexLabels.push({
                                  chartType: "rangeBar",
                                  dataPoint: C[g],
                                  dataSeries: k,
                                  indexKeyword: 1,
                                  point: {
                                      x: C[g].y[1] >=
                                          C[g].y[0] ? s : d,
                                      y: f + (m - f) / 2
                                  },
                                  direction: C[g].y[1] >= C[g].y[0] ? 1 : -1,
                                  bounds: {
                                      x1: Math.min(d, s),
                                      y1: f,
                                      x2: Math.max(d, s),
                                      y2: m
                                  },
                                  color: c
                              })
                          }
                  }
              }
              x && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1,
                  h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
              b.restore();
              return {
                  source: e,
                  dest: this.plotArea.ctx,
                  animationCallback: w.fadeInAnimation,
                  easingFunction: w.easing.easeInQuad,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderRangeArea = function(a) {
          function e() {
              if (D) {
                  for (var a = null, b = f.length - 1; 0 <= b; b--) a = f[b], c.lineTo(a.x, a.y2), h.lineTo(a.x, a.y2);
                  c.closePath();
                  c.globalAlpha = p.fillOpacity;
                  c.fill();
                  c.globalAlpha = 1;
                  h.fill();
                  if (0 < p.lineThickness) {
                      c.beginPath();
                      c.moveTo(a.x, a.y2);
                      for (b = 0; b < f.length; b++) a = f[b],
                          c.lineTo(a.x, a.y2);
                      c.moveTo(f[0].x, f[0].y1);
                      for (b = 0; b < f.length; b++) a = f[b], c.lineTo(a.x, a.y1);
                      c.stroke()
                  }
                  c.beginPath();
                  c.moveTo(n, m);
                  h.beginPath();
                  h.moveTo(n, m);
                  D = {
                      x: n,
                      y: m
                  };
                  f = [];
                  f.push({
                      x: n,
                      y1: m,
                      y2: z
                  })
              }
          }
          var b = a.targetCanvasCtx || this.plotArea.ctx,
              c = x ? this._preRenderCtx : b;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var h = this._eventManager.ghostCtx,
                  g = [],
                  d = this.plotArea;
              c.save();
              x && h.save();
              c.beginPath();
              c.rect(d.x1, d.y1, d.width, d.height);
              c.clip();
              x && (h.beginPath(), h.rect(d.x1, d.y1, d.width, d.height), h.clip());
              for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                  var f = [],
                      l = a.dataSeriesIndexes[s],
                      p = this.data[l],
                      r = p.dataPoints,
                      g = p.id;
                  this._eventManager.objectMap[g] = {
                      objectType: "dataSeries",
                      dataSeriesIndex: l
                  };
                  g = N(g);
                  h.fillStyle = g;
                  var g = [],
                      q = !0,
                      k = 0,
                      n, m, z, t, D = null;
                  if (0 < r.length) {
                      var v = p._colorSet[k % p._colorSet.length],
                          A = p.lineColor = p.options.lineColor || v,
                          y = A;
                      c.fillStyle = v;
                      c.strokeStyle = A;
                      c.lineWidth = p.lineThickness;
                      var B = "solid";
                      if (c.setLineDash) {
                          var E = M(p.nullDataLineDashType, p.lineThickness),
                              B = p.lineDashType,
                              G = M(B,
                                  p.lineThickness);
                          c.setLineDash(G)
                      }
                      for (var Q = !0; k < r.length; k++)
                          if (t = r[k].x.getTime ? r[k].x.getTime() : r[k].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!p.connectNullData || !Q)))
                              if (null !== r[k].y && r[k].y.length && "number" === typeof r[k].y[0] && "number" === typeof r[k].y[1]) {
                                  n = a.axisX.convertValueToPixel(t);
                                  m = a.axisY.convertValueToPixel(r[k].y[0]);
                                  z = a.axisY.convertValueToPixel(r[k].y[1]);
                                  q || Q ? (p.connectNullData && !q ? (c.setLineDash && (p.options.nullDataLineDashType || B === p.lineDashType &&
                                      p.lineDashType !== p.nullDataLineDashType) && (f[f.length - 1].newLineDashArray = G, B = p.nullDataLineDashType, c.setLineDash(E)), c.lineTo(n, m), x && h.lineTo(n, m), f.push({
                                      x: n,
                                      y1: m,
                                      y2: z
                                  })) : (c.beginPath(), c.moveTo(n, m), D = {
                                      x: n,
                                      y: m
                                  }, f = [], f.push({
                                      x: n,
                                      y1: m,
                                      y2: z
                                  }), x && (h.beginPath(), h.moveTo(n, m))), Q = q = !1) : (c.lineTo(n, m), f.push({
                                      x: n,
                                      y1: m,
                                      y2: z
                                  }), x && h.lineTo(n, m), 0 == k % 250 && e());
                                  t = p.dataPointIds[k];
                                  this._eventManager.objectMap[t] = {
                                      id: t,
                                      objectType: "dataPoint",
                                      dataSeriesIndex: l,
                                      dataPointIndex: k,
                                      x1: n,
                                      y1: m,
                                      y2: z
                                  };
                                  k < r.length -
                                      1 && (y !== (r[k].lineColor || A) || B !== (r[k].lineDashType || p.lineDashType)) && (e(), y = r[k].lineColor || A, f[f.length - 1].newStrokeStyle = y, c.strokeStyle = y, c.setLineDash && (r[k].lineDashType ? (B = r[k].lineDashType, f[f.length - 1].newLineDashArray = M(B, p.lineThickness), c.setLineDash(f[f.length - 1].newLineDashArray)) : (B = p.lineDashType, f[f.length - 1].newLineDashArray = G, c.setLineDash(G))));
                                  if (0 !== r[k].markerSize && (0 < r[k].markerSize || 0 < p.markerSize)) {
                                      var R = p.getMarkerProperties(k, n, z, c);
                                      g.push(R);
                                      var da = N(t);
                                      x && g.push({
                                          x: n,
                                          y: z,
                                          ctx: h,
                                          type: R.type,
                                          size: R.size,
                                          color: da,
                                          borderColor: da,
                                          borderThickness: R.borderThickness
                                      });
                                      R = p.getMarkerProperties(k, n, m, c);
                                      g.push(R);
                                      da = N(t);
                                      x && g.push({
                                          x: n,
                                          y: m,
                                          ctx: h,
                                          type: R.type,
                                          size: R.size,
                                          color: da,
                                          borderColor: da,
                                          borderThickness: R.borderThickness
                                      })
                                  }
                                  if (r[k].indexLabel || p.indexLabel || r[k].indexLabelFormatter || p.indexLabelFormatter) this._indexLabels.push({
                                          chartType: "rangeArea",
                                          dataPoint: r[k],
                                          dataSeries: p,
                                          indexKeyword: 0,
                                          point: {
                                              x: n,
                                              y: m
                                          },
                                          direction: r[k].y[0] > r[k].y[1] === a.axisY.reversed ? -1 : 1,
                                          color: v
                                      }),
                                      this._indexLabels.push({
                                          chartType: "rangeArea",
                                          dataPoint: r[k],
                                          dataSeries: p,
                                          indexKeyword: 1,
                                          point: {
                                              x: n,
                                              y: z
                                          },
                                          direction: r[k].y[0] > r[k].y[1] === a.axisY.reversed ? 1 : -1,
                                          color: v
                                      })
                              } else Q || q || e(), Q = !0;
                      e();
                      u.drawMarkers(g)
                  }
              }
              x && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                  0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
              c.restore();
              return {
                  source: b,
                  dest: this.plotArea.ctx,
                  animationCallback: w.xClipAnimation,
                  easingFunction: w.easing.linear,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderRangeSplineArea = function(a) {
          function e(a, b) {
              var e = v(m, 2);
              if (0 < e.length) {
                  if (0 < l.lineThickness) {
                      c.strokeStyle = b;
                      c.setLineDash && c.setLineDash(a);
                      c.beginPath();
                      c.moveTo(e[0].x, e[0].y);
                      for (var g = 0; g < e.length - 3; g += 3) {
                          if (e[g].newStrokeStyle || e[g].newLineDashArray) c.stroke(),
                              c.beginPath(), c.moveTo(e[g].x, e[g].y), e[g].newStrokeStyle && (c.strokeStyle = e[g].newStrokeStyle), e[g].newLineDashArray && c.setLineDash(e[g].newLineDashArray);
                          c.bezierCurveTo(e[g + 1].x, e[g + 1].y, e[g + 2].x, e[g + 2].y, e[g + 3].x, e[g + 3].y)
                      }
                  }
                  c.beginPath();
                  c.moveTo(e[0].x, e[0].y);
                  x && (h.beginPath(), h.moveTo(e[0].x, e[0].y));
                  for (g = 0; g < e.length - 3; g += 3) c.bezierCurveTo(e[g + 1].x, e[g + 1].y, e[g + 2].x, e[g + 2].y, e[g + 3].x, e[g + 3].y), x && h.bezierCurveTo(e[g + 1].x, e[g + 1].y, e[g + 2].x, e[g + 2].y, e[g + 3].x, e[g + 3].y);
                  e = v(z, 2);
                  c.lineTo(z[z.length -
                      1].x, z[z.length - 1].y);
                  for (g = e.length - 1; 2 < g; g -= 3) c.bezierCurveTo(e[g - 1].x, e[g - 1].y, e[g - 2].x, e[g - 2].y, e[g - 3].x, e[g - 3].y), x && h.bezierCurveTo(e[g - 1].x, e[g - 1].y, e[g - 2].x, e[g - 2].y, e[g - 3].x, e[g - 3].y);
                  c.closePath();
                  c.globalAlpha = l.fillOpacity;
                  c.fill();
                  x && (h.closePath(), h.fill());
                  c.globalAlpha = 1;
                  if (0 < l.lineThickness) {
                      c.strokeStyle = b;
                      c.setLineDash && c.setLineDash(a);
                      c.beginPath();
                      c.moveTo(e[0].x, e[0].y);
                      for (var d = g = 0; g < e.length - 3; g += 3, d++) {
                          if (m[d].newStrokeStyle || m[d].newLineDashArray) c.stroke(), c.beginPath(),
                              c.moveTo(e[g].x, e[g].y), m[d].newStrokeStyle && (c.strokeStyle = m[d].newStrokeStyle), m[d].newLineDashArray && c.setLineDash(m[d].newLineDashArray);
                          c.bezierCurveTo(e[g + 1].x, e[g + 1].y, e[g + 2].x, e[g + 2].y, e[g + 3].x, e[g + 3].y)
                      }
                      e = v(m, 2);
                      c.moveTo(e[0].x, e[0].y);
                      for (d = g = 0; g < e.length - 3; g += 3, d++) {
                          if (m[d].newStrokeStyle || m[d].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(e[g].x, e[g].y), m[d].newStrokeStyle && (c.strokeStyle = m[d].newStrokeStyle), m[d].newLineDashArray && c.setLineDash(m[d].newLineDashArray);
                          c.bezierCurveTo(e[g +
                              1].x, e[g + 1].y, e[g + 2].x, e[g + 2].y, e[g + 3].x, e[g + 3].y)
                      }
                      c.stroke()
                  }
                  c.beginPath()
              }
          }
          var b = a.targetCanvasCtx || this.plotArea.ctx,
              c = x ? this._preRenderCtx : b;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var h = this._eventManager.ghostCtx,
                  g = [],
                  d = this.plotArea;
              c.save();
              x && h.save();
              c.beginPath();
              c.rect(d.x1, d.y1, d.width, d.height);
              c.clip();
              x && (h.beginPath(), h.rect(d.x1, d.y1, d.width, d.height), h.clip());
              for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                  var f = a.dataSeriesIndexes[s],
                      l = this.data[f],
                      p = l.dataPoints,
                      g = l.id;
                  this._eventManager.objectMap[g] = {
                      objectType: "dataSeries",
                      dataSeriesIndex: f
                  };
                  g = N(g);
                  h.fillStyle = g;
                  var g = [],
                      r = 0,
                      q, k, n, m = [],
                      z = [];
                  if (0 < p.length) {
                      var t = l._colorSet[r % l._colorSet.length],
                          D = l.lineColor = l.options.lineColor || t,
                          A = D;
                      c.fillStyle = t;
                      c.lineWidth = l.lineThickness;
                      var y = "solid",
                          K;
                      if (c.setLineDash) {
                          var B = M(l.nullDataLineDashType, l.lineThickness),
                              y = l.lineDashType;
                          K = M(y, l.lineThickness)
                      }
                      for (k = !1; r < p.length; r++)
                          if (q = p[r].x.getTime ? p[r].x.getTime() : p[r].x, !(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!l.connectNullData ||
                                  !k)))
                              if (null !== p[r].y && p[r].y.length && "number" === typeof p[r].y[0] && "number" === typeof p[r].y[1]) {
                                  q = a.axisX.convertValueToPixel(q);
                                  k = a.axisY.convertValueToPixel(p[r].y[0]);
                                  n = a.axisY.convertValueToPixel(p[r].y[1]);
                                  var E = l.dataPointIds[r];
                                  this._eventManager.objectMap[E] = {
                                      id: E,
                                      objectType: "dataPoint",
                                      dataSeriesIndex: f,
                                      dataPointIndex: r,
                                      x1: q,
                                      y1: k,
                                      y2: n
                                  };
                                  m[m.length] = {
                                      x: q,
                                      y: k
                                  };
                                  z[z.length] = {
                                      x: q,
                                      y: n
                                  };
                                  r < p.length - 1 && (A !== (p[r].lineColor || D) || y !== (p[r].lineDashType || l.lineDashType)) && (A = p[r].lineColor || D, m[m.length -
                                      1].newStrokeStyle = A, c.setLineDash && (p[r].lineDashType ? (y = p[r].lineDashType, m[m.length - 1].newLineDashArray = M(y, l.lineThickness)) : (y = l.lineDashType, m[m.length - 1].newLineDashArray = K)));
                                  if (0 !== p[r].markerSize && (0 < p[r].markerSize || 0 < l.markerSize)) {
                                      var G = l.getMarkerProperties(r, q, k, c);
                                      g.push(G);
                                      var Q = N(E);
                                      x && g.push({
                                          x: q,
                                          y: k,
                                          ctx: h,
                                          type: G.type,
                                          size: G.size,
                                          color: Q,
                                          borderColor: Q,
                                          borderThickness: G.borderThickness
                                      });
                                      G = l.getMarkerProperties(r, q, n, c);
                                      g.push(G);
                                      Q = N(E);
                                      x && g.push({
                                          x: q,
                                          y: n,
                                          ctx: h,
                                          type: G.type,
                                          size: G.size,
                                          color: Q,
                                          borderColor: Q,
                                          borderThickness: G.borderThickness
                                      })
                                  }
                                  if (p[r].indexLabel || l.indexLabel || p[r].indexLabelFormatter || l.indexLabelFormatter) this._indexLabels.push({
                                      chartType: "rangeSplineArea",
                                      dataPoint: p[r],
                                      dataSeries: l,
                                      indexKeyword: 0,
                                      point: {
                                          x: q,
                                          y: k
                                      },
                                      direction: p[r].y[0] <= p[r].y[1] ? -1 : 1,
                                      color: t
                                  }), this._indexLabels.push({
                                      chartType: "rangeSplineArea",
                                      dataPoint: p[r],
                                      dataSeries: l,
                                      indexKeyword: 1,
                                      point: {
                                          x: q,
                                          y: n
                                      },
                                      direction: p[r].y[0] <= p[r].y[1] ? 1 : -1,
                                      color: t
                                  });
                                  k = !1
                              } else 0 < r && !k && (l.connectNullData ? c.setLineDash &&
                                  (0 < m.length && (l.options.nullDataLineDashType || !p[r - 1].lineDashType)) && (m[m.length - 1].newLineDashArray = B, y = l.nullDataLineDashType) : (e(K, D), m = [], z = [])), k = !0;
                      e(K, D);
                      u.drawMarkers(g)
                  }
              }
              x && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                  0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
              c.restore();
              return {
                  source: b,
                  dest: this.plotArea.ctx,
                  animationCallback: w.xClipAnimation,
                  easingFunction: w.easing.linear,
                  animationBase: 0
              }
          }
      };
      m.prototype.renderWaterfall = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx,
              b = x ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var c = this._eventManager.ghostCtx,
                  h = null,
                  g = this.plotArea,
                  d = 0,
                  s, f, l, p, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ?
                      a.axisY.viewportMinimum : 0),
                  d = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
              f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
              var q = a.axisX.dataInfo.minDiff;
              isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
              q = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (g.width * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) :
                  Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
              this.dataPointMaxWidth && d > f && (d = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
              !this.dataPointMaxWidth && (this.dataPointMinWidth && f < d) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, d));
              q < d && (q = d);
              q > f && (q = f);
              b.save();
              x && this._eventManager.ghostCtx.save();
              b.beginPath();
              b.rect(g.x1, g.y1, g.width, g.height);
              b.clip();
              x && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1,
                  g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
              for (var k = 0; k < a.dataSeriesIndexes.length; k++) {
                  var n = a.dataSeriesIndexes[k],
                      m = this.data[n],
                      z = m.dataPoints,
                      h = m._colorSet[0];
                  m.risingColor = m.options.risingColor ? m.options.risingColor : h;
                  m.fallingColor = m.options.fallingColor ? m.options.fallingColor : "#e40a0a";
                  var t = "number" === typeof m.options.lineThickness ? Math.round(m.lineThickness) : 1,
                      u = 1 === Math.round(t) % 2 ? -0.5 : 0;
                  if (0 < z.length)
                      for (var v = 5 < q && m.bevelEnabled ? !0 : !1, A = !1, y = null, B = null, d = 0; d < z.length; d++)
                          if (z[d].getTime ?
                              p = z[d].x.getTime() : p = z[d].x, "number" !== typeof z[d].y) {
                              if (0 < d && !A && m.connectNullData) var E = m.options.nullDataLineDashType || !z[d - 1].lineDashType ? m.nullDataLineDashType : z[d - 1].lineDashType;
                              A = !0
                          } else {
                              s = a.axisX.convertValueToPixel(p);
                              f = 0 === m.dataPointEOs[d].cumulativeSum ? r : a.axisY.convertValueToPixel(m.dataPointEOs[d].cumulativeSum);
                              l = 0 === m.dataPointEOs[d].cumulativeSumYStartValue ? r : a.axisY.convertValueToPixel(m.dataPointEOs[d].cumulativeSumYStartValue);
                              s = a.axisX.reversed ? s + a.plotType.totalDataSeries *
                                  q / 2 - (a.previousDataSeriesCount + k) * q << 0 : s - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount + k) * q << 0;
                              var G = a.axisX.reversed ? s - q << 0 : s + q << 0;
                              f > l && (h = f, f = l, l = h);
                              a.axisY.reversed && (h = f, f = l, l = h);
                              h = m.dataPointIds[d];
                              this._eventManager.objectMap[h] = {
                                  id: h,
                                  objectType: "dataPoint",
                                  dataSeriesIndex: n,
                                  dataPointIndex: d,
                                  x1: s,
                                  y1: f,
                                  x2: G,
                                  y2: l
                              };
                              var Q = z[d].color ? z[d].color : 0 < z[d].y ? m.risingColor : m.fallingColor;
                              Z(b, s, f, G, l, Q, 0, Q, v, v, !1, !1, m.fillOpacity);
                              h = N(h);
                              x && Z(this._eventManager.ghostCtx, s, f, G, l, h, 0, null, !1,
                                  !1, !1, !1);
                              var R, Q = s;
                              R = "undefined" !== typeof z[d].isIntermediateSum && !0 === z[d].isIntermediateSum || "undefined" !== typeof z[d].isCumulativeSum && !0 === z[d].isCumulativeSum ? 0 < z[d].y ? f : l : 0 < z[d].y ? l : f;
                              0 < d && y && (!A || m.connectNullData) && (A && b.setLineDash && b.setLineDash(M(E, t)), b.beginPath(), b.moveTo(y, B - u), b.lineTo(Q, R - u), 0 < t && b.stroke(), x && (c.beginPath(), c.moveTo(y, B - u), c.lineTo(Q, R - u), 0 < t && c.stroke()));
                              A = !1;
                              y = G;
                              B = 0 < z[d].y ? f : l;
                              Q = z[d].lineDashType ? z[d].lineDashType : m.options.lineDashType ? m.options.lineDashType :
                                  "shortDash";
                              b.strokeStyle = z[d].lineColor ? z[d].lineColor : m.options.lineColor ? m.options.lineColor : "#9e9e9e";
                              b.lineWidth = t;
                              b.setLineDash && (Q = M(Q, t), b.setLineDash(Q));
                              (z[d].indexLabel || m.indexLabel || z[d].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                  chartType: "waterfall",
                                  dataPoint: z[d],
                                  dataSeries: m,
                                  point: {
                                      x: s + (G - s) / 2,
                                      y: 0 <= z[d].y ? f : l
                                  },
                                  direction: 0 > z[d].y === a.axisY.reversed ? 1 : -1,
                                  bounds: {
                                      x1: s,
                                      y1: Math.min(f, l),
                                      x2: G,
                                      y2: Math.max(f, l)
                                  },
                                  color: h
                              })
                          }
              }
              x && (e.drawImage(this._preRenderCanvas, 0,
                  0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
              b.restore();
              return {
                  source: e,
                  dest: this.plotArea.ctx,
                  animationCallback: w.fadeInAnimation,
                  easingFunction: w.easing.easeInQuad,
                  animationBase: 0
              }
          }
      };
      var d = function(a, e, b, c, h, g, d, s, f) {
          if (!(0 > b)) {
              "undefined" === typeof s && (s = 1);
              if (!x) {
                  var l = Number((d % (2 * Math.PI)).toFixed(8));
                  Number((g % (2 * Math.PI)).toFixed(8)) === l && (d -= 1E-4)
              }
              a.save();
              a.globalAlpha = s;
              "pie" === h ? (a.beginPath(), a.moveTo(e.x, e.y), a.arc(e.x, e.y, b, g, d, !1), a.fillStyle = c, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === h && (a.beginPath(), a.arc(e.x, e.y, b, g, d, !1), 0 <= f && a.arc(e.x, e.y, f * b, d, g, !0), a.closePath(), a.fillStyle = c, a.strokeStyle = "white", a.lineWidth =
                  2, a.fill());
              a.globalAlpha = 1;
              a.restore()
          }
      };
      m.prototype.renderPie = function(a) {
          function e() {
              if (l && p) {
                  for (var a = 0, c = 0, b = 0, e = 0, h = 0; h < p.length; h++) {
                      var g = p[h],
                          d = l.dataPointIds[h];
                      k[h].id = d;
                      k[h].objectType = "dataPoint";
                      k[h].dataPointIndex = h;
                      k[h].dataSeriesIndex = 0;
                      var f = k[h],
                          s = {
                              percent: null,
                              total: null
                          },
                          r = null,
                          s = m.getPercentAndTotal(l, g);
                      if (l.indexLabelFormatter || g.indexLabelFormatter) r = {
                          chart: m.options,
                          dataSeries: l,
                          dataPoint: g,
                          total: s.total,
                          percent: s.percent
                      };
                      s = g.indexLabelFormatter ? g.indexLabelFormatter(r) :
                          g.indexLabel ? m.replaceKeywordsWithValue(g.indexLabel, g, l, h) : l.indexLabelFormatter ? l.indexLabelFormatter(r) : l.indexLabel ? m.replaceKeywordsWithValue(l.indexLabel, g, l, h) : g.label ? g.label : "";
                      m._eventManager.objectMap[d] = f;
                      f.center = {
                          x: v.x,
                          y: v.y
                      };
                      f.y = g.y;
                      f.radius = B;
                      f.percentInnerRadius = G;
                      f.indexLabelText = s;
                      f.indexLabelPlacement = l.indexLabelPlacement;
                      f.indexLabelLineColor = g.indexLabelLineColor ? g.indexLabelLineColor : l.options.indexLabelLineColor ? l.options.indexLabelLineColor : g.color ? g.color : l._colorSet[h %
                          l._colorSet.length];
                      f.indexLabelLineThickness = n(g.indexLabelLineThickness) ? l.indexLabelLineThickness : g.indexLabelLineThickness;
                      f.indexLabelLineDashType = g.indexLabelLineDashType ? g.indexLabelLineDashType : l.indexLabelLineDashType;
                      f.indexLabelFontColor = g.indexLabelFontColor ? g.indexLabelFontColor : l.indexLabelFontColor;
                      f.indexLabelFontStyle = g.indexLabelFontStyle ? g.indexLabelFontStyle : l.indexLabelFontStyle;
                      f.indexLabelFontWeight = g.indexLabelFontWeight ? g.indexLabelFontWeight : l.indexLabelFontWeight;
                      f.indexLabelFontSize =
                          n(g.indexLabelFontSize) ? l.indexLabelFontSize : g.indexLabelFontSize;
                      f.indexLabelFontFamily = g.indexLabelFontFamily ? g.indexLabelFontFamily : l.indexLabelFontFamily;
                      f.indexLabelBackgroundColor = g.indexLabelBackgroundColor ? g.indexLabelBackgroundColor : l.options.indexLabelBackgroundColor ? l.options.indexLabelBackgroundColor : l.indexLabelBackgroundColor;
                      f.indexLabelMaxWidth = g.indexLabelMaxWidth ? g.indexLabelMaxWidth : l.indexLabelMaxWidth ? l.indexLabelMaxWidth : 0.33 * q.width;
                      f.indexLabelWrap = "undefined" !== typeof g.indexLabelWrap ?
                          g.indexLabelWrap : l.indexLabelWrap;
                      f.startAngle = 0 === h ? l.startAngle ? l.startAngle / 180 * Math.PI : 0 : k[h - 1].endAngle;
                      f.startAngle = (f.startAngle + 2 * Math.PI) % (2 * Math.PI);
                      f.endAngle = f.startAngle + 2 * Math.PI / A * Math.abs(g.y);
                      g = (f.endAngle + f.startAngle) / 2;
                      g = (g + 2 * Math.PI) % (2 * Math.PI);
                      f.midAngle = g;
                      if (f.midAngle > Math.PI / 2 - t && f.midAngle < Math.PI / 2 + t) {
                          if (0 === a || k[b].midAngle > f.midAngle) b = h;
                          a++
                      } else if (f.midAngle > 3 * Math.PI / 2 - t && f.midAngle < 3 * Math.PI / 2 + t) {
                          if (0 === c || k[e].midAngle > f.midAngle) e = h;
                          c++
                      }
                      f.hemisphere = g > Math.PI / 2 &&
                          g <= 3 * Math.PI / 2 ? "left" : "right";
                      f.indexLabelTextBlock = new la(m.plotArea.ctx, {
                          fontSize: f.indexLabelFontSize,
                          fontFamily: f.indexLabelFontFamily,
                          fontColor: f.indexLabelFontColor,
                          fontStyle: f.indexLabelFontStyle,
                          fontWeight: f.indexLabelFontWeight,
                          horizontalAlign: "left",
                          backgroundColor: f.indexLabelBackgroundColor,
                          maxWidth: f.indexLabelMaxWidth,
                          maxHeight: f.indexLabelWrap ? 5 * f.indexLabelFontSize : 1.5 * f.indexLabelFontSize,
                          text: f.indexLabelText,
                          padding: 0,
                          textBaseline: "top"
                      });
                      f.indexLabelTextBlock.measureText()
                  }
                  d = g =
                      0;
                  s = !1;
                  for (h = 0; h < p.length; h++) f = k[(b + h) % p.length], 1 < a && (f.midAngle > Math.PI / 2 - t && f.midAngle < Math.PI / 2 + t) && (g <= a / 2 && !s ? (f.hemisphere = "right", g++) : (f.hemisphere = "left", s = !0));
                  s = !1;
                  for (h = 0; h < p.length; h++) f = k[(e + h) % p.length], 1 < c && (f.midAngle > 3 * Math.PI / 2 - t && f.midAngle < 3 * Math.PI / 2 + t) && (d <= c / 2 && !s ? (f.hemisphere = "left", d++) : (f.hemisphere = "right", s = !0))
              }
          }

          function b(a) {
              var c = m.plotArea.ctx;
              c.clearRect(q.x1, q.y1, q.width, q.height);
              c.fillStyle = m.backgroundColor;
              c.fillRect(q.x1, q.y1, q.width, q.height);
              for (c = 0; c <
                  p.length; c++) {
                  var b = k[c].startAngle,
                      e = k[c].endAngle;
                  if (e > b) {
                      var h = 0.07 * B * Math.cos(k[c].midAngle),
                          g = 0.07 * B * Math.sin(k[c].midAngle),
                          f = !1;
                      if (p[c].exploded) {
                          if (1E-9 < Math.abs(k[c].center.x - (v.x + h)) || 1E-9 < Math.abs(k[c].center.y - (v.y + g))) k[c].center.x = v.x + h * a, k[c].center.y = v.y + g * a, f = !0
                      } else if (0 < Math.abs(k[c].center.x - v.x) || 0 < Math.abs(k[c].center.y - v.y)) k[c].center.x = v.x + h * (1 - a), k[c].center.y = v.y + g * (1 - a), f = !0;
                      f && (h = {}, h.dataSeries = l, h.dataPoint = l.dataPoints[c], h.index = c, m.toolTip.highlightObjects([h]));
                      d(m.plotArea.ctx, k[c].center, k[c].radius, p[c].color ? p[c].color : l._colorSet[c % l._colorSet.length], l.type, b, e, l.fillOpacity, k[c].percentInnerRadius)
                  }
              }
              a = m.plotArea.ctx;
              a.save();
              a.fillStyle = "black";
              a.strokeStyle = "grey";
              a.textBaseline = "middle";
              a.lineJoin = "round";
              for (c = c = 0; c < p.length; c++) b = k[c], b.indexLabelText && (b.indexLabelTextBlock.y -= b.indexLabelTextBlock.height / 2, e = 0, e = "left" === b.hemisphere ? "inside" !== l.indexLabelPlacement ? -(b.indexLabelTextBlock.width + r) : -b.indexLabelTextBlock.width / 2 : "inside" !==
                  l.indexLabelPlacement ? r : -b.indexLabelTextBlock.width / 2, b.indexLabelTextBlock.x += e, b.indexLabelTextBlock.render(!0), b.indexLabelTextBlock.x -= e, b.indexLabelTextBlock.y += b.indexLabelTextBlock.height / 2, "inside" !== b.indexLabelPlacement && 0 < b.indexLabelLineThickness && (e = b.center.x + B * Math.cos(b.midAngle), h = b.center.y + B * Math.sin(b.midAngle), a.strokeStyle = b.indexLabelLineColor, a.lineWidth = b.indexLabelLineThickness, a.setLineDash && a.setLineDash(M(b.indexLabelLineDashType, b.indexLabelLineThickness)), a.beginPath(),
                      a.moveTo(e, h), a.lineTo(b.indexLabelTextBlock.x, b.indexLabelTextBlock.y), a.lineTo(b.indexLabelTextBlock.x + ("left" === b.hemisphere ? -r : r), b.indexLabelTextBlock.y), a.stroke()), a.lineJoin = "miter");
              a.save()
          }

          function c(a, c) {
              var b = 0,
                  b = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                  e = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
                  h = c.indexLabelTextBlock.y - c.indexLabelTextBlock.height / 2,
                  g = c.indexLabelTextBlock.y + c.indexLabelTextBlock.height / 2;
              return b = c.indexLabelTextBlock.y > a.indexLabelTextBlock.y ?
                  h - e : b - g
          }

          function h(a) {
              for (var b = null, e = 1; e < p.length; e++)
                  if (b = (a + e + k.length) % k.length, k[b].hemisphere !== k[a].hemisphere) {
                      b = null;
                      break
                  } else if (k[b].indexLabelText && b !== a && (0 > c(k[b], k[a]) || ("right" === k[a].hemisphere ? k[b].indexLabelTextBlock.y >= k[a].indexLabelTextBlock.y : k[b].indexLabelTextBlock.y <= k[a].indexLabelTextBlock.y))) break;
              else b = null;
              return b
          }

          function g(a, b, e) {
              e = (e || 0) + 1;
              if (1E3 < e) return 0;
              b = b || 0;
              var d = 0,
                  l = v.y - 1 * w,
                  f = v.y + 1 * w;
              if (0 <= a && a < p.length) {
                  var s = k[a];
                  if (0 > b && s.indexLabelTextBlock.y < l ||
                      0 < b && s.indexLabelTextBlock.y > f) return 0;
                  var q = 0,
                      r = 0,
                      r = q = q = 0;
                  0 > b ? s.indexLabelTextBlock.y - s.indexLabelTextBlock.height / 2 > l && s.indexLabelTextBlock.y - s.indexLabelTextBlock.height / 2 + b < l && (b = -(l - (s.indexLabelTextBlock.y - s.indexLabelTextBlock.height / 2 + b))) : s.indexLabelTextBlock.y + s.indexLabelTextBlock.height / 2 < l && s.indexLabelTextBlock.y + s.indexLabelTextBlock.height / 2 + b > f && (b = s.indexLabelTextBlock.y + s.indexLabelTextBlock.height / 2 + b - f);
                  b = s.indexLabelTextBlock.y + b;
                  l = 0;
                  l = "right" === s.hemisphere ? v.x + Math.sqrt(Math.pow(w,
                      2) - Math.pow(b - v.y, 2)) : v.x - Math.sqrt(Math.pow(w, 2) - Math.pow(b - v.y, 2));
                  r = v.x + B * Math.cos(s.midAngle);
                  q = v.y + B * Math.sin(s.midAngle);
                  q = Math.sqrt(Math.pow(l - r, 2) + Math.pow(b - q, 2));
                  r = Math.acos(B / w);
                  q = Math.acos((w * w + B * B - q * q) / (2 * B * w));
                  b = q < r ? b - s.indexLabelTextBlock.y : 0;
                  l = null;
                  for (f = 1; f < p.length; f++)
                      if (l = (a - f + k.length) % k.length, k[l].hemisphere !== k[a].hemisphere) {
                          l = null;
                          break
                      } else if (k[l].indexLabelText && k[l].hemisphere === k[a].hemisphere && l !== a && (0 > c(k[l], k[a]) || ("right" === k[a].hemisphere ? k[l].indexLabelTextBlock.y <=
                          k[a].indexLabelTextBlock.y : k[l].indexLabelTextBlock.y >= k[a].indexLabelTextBlock.y))) break;
                  else l = null;
                  r = l;
                  q = h(a);
                  f = l = 0;
                  0 > b ? (f = "right" === s.hemisphere ? r : q, d = b, null !== f && (r = -b, b = s.indexLabelTextBlock.y - s.indexLabelTextBlock.height / 2 - (k[f].indexLabelTextBlock.y + k[f].indexLabelTextBlock.height / 2), b - r < z && (l = -r, f = g(f, l, e + 1), +f.toFixed(x) > +l.toFixed(x) && (d = b > z ? -(b - z) : -(r - (f - l)))))) : 0 < b && (f = "right" === s.hemisphere ? q : r, d = b, null !== f && (r = b, b = k[f].indexLabelTextBlock.y - k[f].indexLabelTextBlock.height / 2 - (s.indexLabelTextBlock.y +
                      s.indexLabelTextBlock.height / 2), b - r < z && (l = r, f = g(f, l, e + 1), +f.toFixed(x) < +l.toFixed(x) && (d = b > z ? b - z : r - (l - f)))));
                  d && (e = s.indexLabelTextBlock.y + d, b = 0, b = "right" === s.hemisphere ? v.x + Math.sqrt(Math.pow(w, 2) - Math.pow(e - v.y, 2)) : v.x - Math.sqrt(Math.pow(w, 2) - Math.pow(e - v.y, 2)), s.midAngle > Math.PI / 2 - t && s.midAngle < Math.PI / 2 + t ? (l = (a - 1 + k.length) % k.length, l = k[l], a = k[(a + 1 + k.length) % k.length], "left" === s.hemisphere && "right" === l.hemisphere && b > l.indexLabelTextBlock.x ? b = l.indexLabelTextBlock.x - 15 : "right" === s.hemisphere && ("left" ===
                      a.hemisphere && b < a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x + 15)) : s.midAngle > 3 * Math.PI / 2 - t && s.midAngle < 3 * Math.PI / 2 + t && (l = (a - 1 + k.length) % k.length, l = k[l], a = k[(a + 1 + k.length) % k.length], "right" === s.hemisphere && "left" === l.hemisphere && b < l.indexLabelTextBlock.x ? b = l.indexLabelTextBlock.x + 15 : "left" === s.hemisphere && ("right" === a.hemisphere && b > a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x - 15)), s.indexLabelTextBlock.y = e, s.indexLabelTextBlock.x = b, s.indexLabelAngle = Math.atan2(s.indexLabelTextBlock.y -
                      v.y, s.indexLabelTextBlock.x - v.x))
              }
              return d
          }

          function f() {
              var a = m.plotArea.ctx;
              a.fillStyle = "grey";
              a.strokeStyle = "grey";
              a.font = "16px Arial";
              a.textBaseline = "middle";
              for (var b = a = 0, e = 0, d = !0, b = 0; 10 > b && (1 > b || 0 < e); b++) {
                  if (l.radius || !l.radius && "undefined" !== typeof l.innerRadius && null !== l.innerRadius && B - e <= E) d = !1;
                  d && (B -= e);
                  e = 0;
                  if ("inside" !== l.indexLabelPlacement) {
                      w = B * u;
                      for (a = 0; a < p.length; a++) {
                          var s = k[a];
                          s.indexLabelTextBlock.x = v.x + w * Math.cos(s.midAngle);
                          s.indexLabelTextBlock.y = v.y + w * Math.sin(s.midAngle);
                          s.indexLabelAngle =
                              s.midAngle;
                          s.radius = B;
                          s.percentInnerRadius = G
                      }
                      for (var n, t, a = 0; a < p.length; a++) {
                          var s = k[a],
                              F = h(a);
                          if (null !== F) {
                              n = k[a];
                              t = k[F];
                              var A = 0,
                                  A = c(n, t) - z;
                              if (0 > A) {
                                  for (var y = t = 0, K = 0; K < p.length; K++) K !== a && k[K].hemisphere === s.hemisphere && (k[K].indexLabelTextBlock.y < s.indexLabelTextBlock.y ? t++ : y++);
                                  t = A / (t + y || 1) * y;
                                  var y = -1 * (A - t),
                                      ia = K = 0;
                                  "right" === s.hemisphere ? (K = g(a, t), y = -1 * (A - K), ia = g(F, y), +ia.toFixed(x) < +y.toFixed(x) && +K.toFixed(x) <= +t.toFixed(x) && g(a, -(y - ia))) : (K = g(F, t), y = -1 * (A - K), ia = g(a, y), +ia.toFixed(x) < +y.toFixed(x) &&
                                      +K.toFixed(x) <= +t.toFixed(x) && g(F, -(y - ia)))
                              }
                          }
                      }
                  } else
                      for (a = 0; a < p.length; a++) s = k[a], w = "pie" === l.type ? 0.7 * B : 0.8 * B, F = v.x + w * Math.cos(s.midAngle), t = v.y + w * Math.sin(s.midAngle), s.indexLabelTextBlock.x = F, s.indexLabelTextBlock.y = t;
                  for (a = 0; a < p.length; a++)
                      if (s = k[a], F = s.indexLabelTextBlock.measureText(), 0 !== F.height && 0 !== F.width) F = F = 0, "right" === s.hemisphere ? (F = q.x2 - (s.indexLabelTextBlock.x + s.indexLabelTextBlock.width + r), F *= -1) : F = q.x1 - (s.indexLabelTextBlock.x - s.indexLabelTextBlock.width - r), 0 < F && (!d && s.indexLabelText &&
                              (t = "right" === s.hemisphere ? q.x2 - s.indexLabelTextBlock.x : s.indexLabelTextBlock.x - q.x1, 0.3 * s.indexLabelTextBlock.maxWidth > t ? s.indexLabelText = "" : s.indexLabelTextBlock.maxWidth = 0.85 * t, 0.3 * s.indexLabelTextBlock.maxWidth < t && (s.indexLabelTextBlock.x -= "right" === s.hemisphere ? 2 : -2)), Math.abs(s.indexLabelTextBlock.y - s.indexLabelTextBlock.height / 2 - v.y) < B || Math.abs(s.indexLabelTextBlock.y + s.indexLabelTextBlock.height / 2 - v.y) < B) && (F /= Math.abs(Math.cos(s.indexLabelAngle)), 9 < F && (F *= 0.3), F > e && (e = F)), F = F = 0, 0 < s.indexLabelAngle &&
                          s.indexLabelAngle < Math.PI ? (F = q.y2 - (s.indexLabelTextBlock.y + s.indexLabelTextBlock.height / 2 + 5), F *= -1) : F = q.y1 - (s.indexLabelTextBlock.y - s.indexLabelTextBlock.height / 2 - 5), 0 < F && (!d && s.indexLabelText && (t = 0 < s.indexLabelAngle && s.indexLabelAngle < Math.PI ? -1 : 1, 0 === g(a, F * t) && g(a, 2 * t)), Math.abs(s.indexLabelTextBlock.x - v.x) < B && (F /= Math.abs(Math.sin(s.indexLabelAngle)), 9 < F && (F *= 0.3), F > e && (e = F)));
                  var P = function(a, b, c) {
                      for (var e = [], h = 0; e.push(k[b]), b !== c; b = (b + 1 + p.length) % p.length);
                      e.sort(function(a, b) {
                          return a.y - b.y
                      });
                      for (b = 0; b < e.length; b++)
                          if (c = e[b], h < 0.7 * a) h += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                          else break
                  };
                  (function() {
                      for (var a = -1, b = -1, e = 0, g = !1, d = 0; d < p.length; d++)
                          if (g = !1, n = k[d], n.indexLabelText) {
                              var l = h(d);
                              if (null !== l) {
                                  var s = k[l];
                                  A = 0;
                                  A = c(n, s);
                                  var f;
                                  if (f = 0 > A) {
                                      f = n.indexLabelTextBlock.x;
                                      var q = n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2,
                                          m = n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2,
                                          z = s.indexLabelTextBlock.y - s.indexLabelTextBlock.height /
                                          2,
                                          t = s.indexLabelTextBlock.x + s.indexLabelTextBlock.width,
                                          w = s.indexLabelTextBlock.y + s.indexLabelTextBlock.height / 2;
                                      f = n.indexLabelTextBlock.x + n.indexLabelTextBlock.width < s.indexLabelTextBlock.x - r || f > t + r || q > w + r || m < z - r ? !1 : !0
                                  }
                                  f ? (0 > a && (a = d), l !== a && (b = l, e += -A), 0 === d % Math.max(p.length / 10, 3) && (g = !0)) : g = !0;
                                  g && (0 < e && 0 <= a && 0 <= b) && (P(e, a, b), b = a = -1, e = 0)
                              }
                          } 0 < e && P(e, a, b)
                  })()
              }
          }

          function s() {
              m.plotArea.layoutManager.reset();
              m.title && (m.title.dockInsidePlotArea || "center" === m.title.horizontalAlign && "center" === m.title.verticalAlign) &&
                  m.title.render();
              if (m.subtitles)
                  for (var a = 0; a < m.subtitles.length; a++) {
                      var b = m.subtitles[a];
                      (b.dockInsidePlotArea || "center" === b.horizontalAlign && "center" === b.verticalAlign) && b.render()
                  }
              m.legend && (m.legend.dockInsidePlotArea || "center" === m.legend.horizontalAlign && "center" === m.legend.verticalAlign) && (m.legend.setLayout(), m.legend.render())
          }
          var m = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var l = this.data[a.dataSeriesIndexes[0]],
                  p = l.dataPoints,
                  r = 10,
                  q = this.plotArea,
                  k = l.dataPointEOs,
                  z = 2,
                  w, u = 1.3,
                  t = 20 / 180 * Math.PI,
                  x = 6,
                  v = {
                      x: (q.x2 + q.x1) / 2,
                      y: (q.y2 + q.y1) / 2
                  },
                  A = 0;
              a = !1;
              for (var y = 0; y < p.length; y++) A += Math.abs(p[y].y), !a && ("undefined" !== typeof p[y].indexLabel && null !== p[y].indexLabel && 0 < p[y].indexLabel.toString().length) && (a = !0), !a && ("undefined" !== typeof p[y].label && null !== p[y].label && 0 < p[y].label.toString().length) && (a = !0);
              if (0 !== A) {
                  a = a || "undefined" !== typeof l.indexLabel && null !== l.indexLabel && 0 < l.indexLabel.toString().length;
                  var B = "inside" !== l.indexLabelPlacement && a ? 0.75 * Math.min(q.width, q.height) / 2 : 0.92 * Math.min(q.width,
                      q.height) / 2;
                  l.radius && (B = Xa(l.radius, B));
                  var E = "undefined" !== typeof l.innerRadius && null !== l.innerRadius ? Xa(l.innerRadius, B) : 0.7 * B;
                  l.radius = B;
                  "doughnut" === l.type && (l.innerRadius = E);
                  var G = Math.min(E / B, (B - 1) / B);
                  this.pieDoughnutClickHandler = function(a) {
                      m.isAnimating || !n(a.dataSeries.explodeOnClick) && !a.dataSeries.explodeOnClick || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && m._animator.animate(0, 500, function(a) {
                          b(a);
                          s()
                      }))
                  };
                  e();
                  f();
                  f();
                  f();
                  f();
                  this.disableToolTip = !0;
                  this._animator.animate(0,
                      this.animatedRender ? this.animationDuration : 0,
                      function(a) {
                          var b = m.plotArea.ctx;
                          b.clearRect(q.x1, q.y1, q.width, q.height);
                          b.fillStyle = m.backgroundColor;
                          b.fillRect(q.x1, q.y1, q.width, q.height);
                          a = k[0].startAngle + 2 * Math.PI * a;
                          for (b = 0; b < p.length; b++) {
                              var c = 0 === b ? k[b].startAngle : e,
                                  e = c + (k[b].endAngle - k[b].startAngle),
                                  h = !1;
                              e > a && (e = a, h = !0);
                              var g = p[b].color ? p[b].color : l._colorSet[b % l._colorSet.length];
                              e > c && d(m.plotArea.ctx, k[b].center, k[b].radius, g, l.type, c, e, l.fillOpacity, k[b].percentInnerRadius);
                              if (h) break
                          }
                          s()
                      },
                      function() {
                          m.disableToolTip = !1;
                          m._animator.animate(0, m.animatedRender ? 500 : 0, function(a) {
                              b(a);
                              s()
                          })
                      })
              }
          }
      };
      var z = function(a, e, b, c) {
          "undefined" === typeof b && (b = 1);
          0 >= Math.round(e.y4 - e.y1) || (a.save(), a.globalAlpha = b, a.beginPath(), a.moveTo(Math.round(e.x1), Math.round(e.y1)), a.lineTo(Math.round(e.x2), Math.round(e.y2)), a.lineTo(Math.round(e.x3), Math.round(e.y3)), a.lineTo(Math.round(e.x4), Math.round(e.y4)), "undefined" !== e.x5 && (a.lineTo(Math.round(e.x5), Math.round(e.y5)), a.lineTo(Math.round(e.x6), Math.round(e.y6))),
              a.closePath(), a.fillStyle = c ? c : e.color, a.fill(), a.globalAplha = 1, a.restore())
      };
      m.prototype.renderFunnel = function(a) {
          function e() {
              for (var a = 0, b = [], c = 0; c < D.length; c++) {
                  if ("undefined" === typeof D[c].y) return -1;
                  D[c].y = "number" === typeof D[c].y ? D[c].y : 0;
                  a += Math.abs(D[c].y)
              }
              if (0 === a) return -1;
              for (c = b[0] = 0; c < D.length; c++) b.push(Math.abs(D[c].y) * G / a);
              return b
          }

          function b() {
              var a = Y,
                  b = Z,
                  c = P,
                  e = X,
                  h, g;
              h = aa;
              g = S - N;
              e = Math.abs((g - h) * (b - a + (e - c)) / 2);
              c = X - P;
              h = g - h;
              g = c * (g - S);
              g = Math.abs(g);
              g = e + g;
              for (var e = [], d = 0, k = 0; k < D.length; k++) {
                  if ("undefined" ===
                      typeof D[k].y) return -1;
                  D[k].y = "number" === typeof D[k].y ? D[k].y : 0;
                  d += Math.abs(D[k].y)
              }
              if (0 === d) return -1;
              for (var l = e[0] = 0, s = 0, f, p, b = b - a, l = !1, k = 0; k < D.length; k++) a = Math.abs(D[k].y) * g / d, l ? f = 0 == Number(c.toFixed(3)) ? 0 : a / c : (p = $ * $ * b * b - 4 * Math.abs($) * a, 0 > p ? (p = c, l = (b + p) * (h - s) / 2, a -= l, f = h - s, s += h - s, f += 0 == p ? 0 : a / p, s += a / p, l = !0) : (f = (Math.abs($) * b - Math.sqrt(p)) / 2, p = b - 2 * f / Math.abs($), s += f, s > h && (s -= f, p = c, l = (b + p) * (h - s) / 2, a -= l, f = h - s, s += h - s, f += a / p, s += a / p, l = !0), b = p)), e.push(f);
              return e
          }

          function c() {
              if (t && D) {
                  for (var a, b, c, e,
                          h, g, d, l, s, f, p, q, r, m, z = [], w = [], F = {
                              percent: null,
                              total: null
                          }, C = null, u = 0; u < D.length; u++) m = T[u], m = "undefined" !== typeof m.x5 ? (m.y2 + m.y4) / 2 : (m.y2 + m.y3) / 2, m = k(m).x2 + 1, z[u] = O - m - W;
                  m = 0.5 * W;
                  for (var u = 0, y = D.length - 1; u < D.length || 0 <= y; u++, y--) {
                      b = t.reversed ? D[y] : D[u];
                      a = b.color ? b.color : t.reversed ? t._colorSet[(D.length - 1 - u) % t._colorSet.length] : t._colorSet[u % t._colorSet.length];
                      c = b.indexLabelPlacement || t.indexLabelPlacement || "outside";
                      e = b.indexLabelBackgroundColor || t.indexLabelBackgroundColor || (x ? "transparent" : null);
                      h = b.indexLabelFontColor || t.indexLabelFontColor || "#979797";
                      g = n(b.indexLabelFontSize) ? t.indexLabelFontSize : b.indexLabelFontSize;
                      d = b.indexLabelFontStyle || t.indexLabelFontStyle || "normal";
                      l = b.indexLabelFontFamily || t.indexLabelFontFamily || "arial";
                      s = b.indexLabelFontWeight || t.indexLabelFontWeight || "normal";
                      a = b.indexLabelLineColor || t.options.indexLabelLineColor || a;
                      f = "number" === typeof b.indexLabelLineThickness ? b.indexLabelLineThickness : "number" === typeof t.indexLabelLineThickness ? t.indexLabelLineThickness : 2;
                      p = b.indexLabelLineDashType || t.indexLabelLineDashType || "solid";
                      q = "undefined" !== typeof b.indexLabelWrap ? b.indexLabelWrap : "undefined" !== typeof t.indexLabelWrap ? t.indexLabelWrap : !0;
                      r = t.dataPointIds[u];
                      v._eventManager.objectMap[r] = {
                          id: r,
                          objectType: "dataPoint",
                          dataPointIndex: u,
                          dataSeriesIndex: 0,
                          funnelSection: T[t.reversed ? D.length - 1 - u : u]
                      };
                      "inside" === t.indexLabelPlacement && (z[u] = u !== ha ? t.reversed ? T[u].x2 - T[u].x1 : T[u].x3 - T[u].x4 : T[u].x3 - T[u].x6, 20 > z[u] && (z[u] = u !== ha ? t.reversed ? T[u].x3 - T[u].x4 : T[u].x2 - T[u].x1 :
                          T[u].x2 - T[u].x1, z[u] /= 2));
                      r = b.indexLabelMaxWidth ? b.indexLabelMaxWidth : t.options.indexLabelMaxWidth ? t.indexLabelMaxWidth : z[u];
                      if (r > z[u] || 0 > r) r = z[u];
                      w[u] = "inside" === t.indexLabelPlacement ? T[u].height : !1;
                      F = v.getPercentAndTotal(t, b);
                      if (t.indexLabelFormatter || b.indexLabelFormatter) C = {
                          chart: v.options,
                          dataSeries: t,
                          dataPoint: b,
                          total: F.total,
                          percent: F.percent
                      };
                      b = b.indexLabelFormatter ? b.indexLabelFormatter(C) : b.indexLabel ? v.replaceKeywordsWithValue(b.indexLabel, b, t, u) : t.indexLabelFormatter ? t.indexLabelFormatter(C) :
                          t.indexLabel ? v.replaceKeywordsWithValue(t.indexLabel, b, t, u) : b.label ? b.label : "";
                      0 >= f && (f = 0);
                      1E3 > r && 1E3 - r < m && (r += 1E3 - r);
                      L.roundRect || Ha(L);
                      c = new la(L, {
                          fontSize: g,
                          fontFamily: l,
                          fontColor: h,
                          fontStyle: d,
                          fontWeight: s,
                          horizontalAlign: c,
                          backgroundColor: e,
                          maxWidth: r,
                          maxHeight: !1 === w[u] ? q ? 4.28571429 * g : 1.5 * g : w[u],
                          text: b,
                          padding: ea
                      });
                      c.measureText();
                      I.push({
                          textBlock: c,
                          id: t.reversed ? y : u,
                          isDirty: !1,
                          lineColor: a,
                          lineThickness: f,
                          lineDashType: p,
                          height: c.height < c.maxHeight ? c.height : c.maxHeight,
                          width: c.width < c.maxWidth ?
                              c.width : c.maxWidth
                      })
                  }
              }
          }

          function h() {
              var a, b, c, e, h, g = [];
              h = !1;
              c = 0;
              for (var d, k = O - Z - W / 2, k = t.options.indexLabelMaxWidth ? t.indexLabelMaxWidth > k ? k : t.indexLabelMaxWidth : k, l = I.length - 1; 0 <= l; l--) {
                  d = D[I[l].id];
                  c = I[l];
                  e = c.textBlock;
                  b = (a = q(l) < T.length ? I[q(l)] : null) ? a.textBlock : null;
                  c = c.height;
                  a && e.y + c + ea > b.y && (h = !0);
                  c = d.indexLabelMaxWidth || k;
                  if (c > k || 0 > c) c = k;
                  g.push(c)
              }
              if (h)
                  for (l = I.length - 1; 0 <= l; l--) a = T[l], I[l].textBlock.maxWidth = g[g.length - (l + 1)], I[l].textBlock.measureText(), I[l].textBlock.x = O - k, c = I[l].textBlock.height <
                      I[l].textBlock.maxHeight ? I[l].textBlock.height : I[l].textBlock.maxHeight, h = I[l].textBlock.width < I[l].textBlock.maxWidth ? I[l].textBlock.width : I[l].textBlock.maxWidth, I[l].height = c, I[l].width = h, c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, I[l].textBlock.y = c - I[l].height / 2, t.reversed ? (I[l].textBlock.y + I[l].height > va + A && (I[l].textBlock.y = va + A - I[l].height), I[l].textBlock.y < xa - A && (I[l].textBlock.y = xa - A)) : (I[l].textBlock.y < va - A && (I[l].textBlock.y = va - A), I[l].textBlock.y + I[l].height > xa + A && (I[l].textBlock.y =
                          xa + A - I[l].height))
          }

          function g() {
              var a, b, c, e;
              if ("inside" !== t.indexLabelPlacement)
                  for (var h = 0; h < T.length; h++) 0 == I[h].textBlock.text.length ? I[h].isDirty = !0 : (a = T[h], c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, b = t.reversed ? "undefined" !== typeof a.x5 ? c > Ga ? k(c).x2 + 1 : (a.x2 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1 : "undefined" !== typeof a.x5 ? c < Ga ? k(c).x2 + 1 : (a.x4 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1, I[h].textBlock.x = b + W, I[h].textBlock.y = c - I[h].height / 2, t.reversed ? (I[h].textBlock.y + I[h].height > va + A && (I[h].textBlock.y = va + A - I[h].height),
                      I[h].textBlock.y < xa - A && (I[h].textBlock.y = xa - A)) : (I[h].textBlock.y < va - A && (I[h].textBlock.y = va - A), I[h].textBlock.y + I[h].height > xa + A && (I[h].textBlock.y = xa + A - I[h].height)));
              else
                  for (h = 0; h < T.length; h++) 0 == I[h].textBlock.text.length ? I[h].isDirty = !0 : (a = T[h], b = a.height, c = I[h].height, e = I[h].width, b >= c ? (b = h != ha ? (a.x4 + a.x3) / 2 - e / 2 : (a.x5 + a.x4) / 2 - e / 2, c = h != ha ? (a.y1 + a.y3) / 2 - c / 2 : (a.y1 + a.y4) / 2 - c / 2, I[h].textBlock.x = b, I[h].textBlock.y = c) : I[h].isDirty = !0)
          }

          function d() {
              function a(b, c) {
                  var e;
                  if (0 > b || b >= I.length) return 0;
                  var h, g = I[b].textBlock;
                  if (0 > c) {
                      c *= -1;
                      h = r(b);
                      e = s(h, b);
                      if (e >= c) return g.y -= c, c;
                      if (0 == b) return 0 < e && (g.y -= e), e;
                      e += a(h, -(c - e));
                      0 < e && (g.y -= e);
                      return e
                  }
                  h = q(b);
                  e = s(b, h);
                  if (e >= c) return g.y += c, c;
                  if (b == T.length - 1) return 0 < e && (g.y += e), e;
                  e += a(h, c - e);
                  0 < e && (g.y += e);
                  return e
              }

              function b() {
                  var a, e, h, g, d = 0,
                      k;
                  g = (S - aa + 2 * A) / p;
                  k = p;
                  for (var l, s = 1; s < k; s++) {
                      h = s * g;
                      for (var f = I.length - 1; 0 <= f; f--) !I[f].isDirty && (I[f].textBlock.y < h && I[f].textBlock.y + I[f].height > h) && (l = q(f), !(l >= I.length - 1) && I[f].textBlock.y + I[f].height + ea > I[l].textBlock.y &&
                          (I[f].textBlock.y = I[f].textBlock.y + I[f].height - h > h - I[f].textBlock.y ? h + 1 : h - I[f].height - 1))
                  }
                  for (l = T.length - 1; 0 < l; l--)
                      if (!I[l].isDirty) {
                          h = r(l);
                          if (0 > h && (h = 0, I[h].isDirty)) break;
                          if (I[l].textBlock.y < I[h].textBlock.y + I[h].height) {
                              e = e || l;
                              g = l;
                              for (k = 0; I[g].textBlock.y < I[h].textBlock.y + I[h].height + ea;) {
                                  a = a || I[g].textBlock.y + I[g].height;
                                  k += I[g].height;
                                  k += ea;
                                  g = h;
                                  if (0 >= g) {
                                      g = 0;
                                      k += I[g].height;
                                      break
                                  }
                                  h = r(g);
                                  if (0 > h) {
                                      g = 0;
                                      k += I[g].height;
                                      break
                                  }
                              }
                              if (g != l) {
                                  d = I[g].textBlock.y;
                                  a -= d;
                                  a = k - a;
                                  d = c(a, e, g);
                                  break
                              }
                          }
                      } return d
              }

              function c(a,
                  b, e) {
                  var h = [],
                      g = 0,
                      d = 0;
                  for (a = Math.abs(a); e <= b; e++) h.push(T[e]);
                  h.sort(function(a, b) {
                      return a.height - b.height
                  });
                  for (e = 0; e < h.length; e++)
                      if (b = h[e], g < a) d++, g += I[b.id].height + ea, I[b.id].textBlock.text = "", I[b.id].indexLabelText = "", I[b.id].isDirty = !0, I[b.id].textBlock.measureText();
                      else break;
                  return d
              }
              for (var e, h, g, k, l, f, p = 1, n = 0; n < 2 * p; n++) {
                  for (var m = I.length - 1; 0 <= m && !(0 <= r(m) && r(m), g = I[m], k = g.textBlock, f = (l = q(m) < T.length ? I[q(m)] : null) ? l.textBlock : null, e = +g.height.toFixed(6), h = +k.y.toFixed(6), !g.isDirty &&
                          (l && h + e + ea > +f.y.toFixed(6)) && (e = k.y + e + ea - f.y, h = a(m, -e), h < e && (0 < h && (e -= h), h = a(q(m), e), h != e))); m--);
                  b()
              }
          }

          function s(a, b) {
              return (b < T.length ? I[b].textBlock.y : t.reversed ? va + A : xa + A) - (0 > a ? t.reversed ? xa - A : va - A : I[a].textBlock.y + I[a].height + ea)
          }

          function f(a, b, c) {
              var e, h, d, k = [],
                  s = A,
                  q = []; - 1 !== b && (0 <= ba.indexOf(b) ? (h = ba.indexOf(b), ba.splice(h, 1)) : (ba.push(b), ba = ba.sort(function(a, b) {
                  return a - b
              })));
              if (0 === ba.length) k = ma;
              else {
                  h = A * (1 != ba.length || 0 != ba[0] && ba[0] != T.length - 1 ? 2 : 1) / l();
                  for (var r = 0; r < T.length; r++) {
                      if (1 ==
                          ba.length && 0 == ba[0]) {
                          if (0 === r) {
                              k.push(ma[r]);
                              e = s;
                              continue
                          }
                      } else 0 === r && (e = -1 * s);
                      k.push(ma[r] + e);
                      if (0 <= ba.indexOf(r) || r < T.length && 0 <= ba.indexOf(r + 1)) e += h
                  }
              }
              d = function() {
                  for (var a = [], b = 0; b < T.length; b++) a.push(k[b] - T[b].y1);
                  return a
              }();
              var n = {
                  startTime: (new Date).getTime(),
                  duration: c || 500,
                  easingFunction: function(a, b, c, e) {
                      return w.easing.easeOutQuart(a, b, c, e)
                  },
                  changeSection: function(a) {
                      for (var b, c, e = 0; e < T.length; e++) b = d[e], c = T[e], b *= a, "undefined" === typeof q[e] && (q[e] = 0), 0 > q && (q *= -1), c.y1 += b - q[e], c.y2 +=
                          b - q[e], c.y3 += b - q[e], c.y4 += b - q[e], c.y5 && (c.y5 += b - q[e], c.y6 += b - q[e]), q[e] = b
                  }
              };
              a._animator.animate(0, c, function(c) {
                  var e = a.plotArea.ctx || a.ctx;
                  ka = !0;
                  e.clearRect(y.x1, y.y1, y.x2 - y.x1, y.y2 - y.y1);
                  e.fillStyle = a.backgroundColor;
                  e.fillRect(y.x1, y.y1, y.width, y.height);
                  n.changeSection(c, b);
                  var h = {};
                  h.dataSeries = t;
                  h.dataPoint = t.reversed ? t.dataPoints[D.length - 1 - b] : t.dataPoints[b];
                  h.index = t.reversed ? D.length - 1 - b : b;
                  a.toolTip.highlightObjects([h]);
                  for (h = 0; h < T.length; h++) z(e, T[h], t.fillOpacity);
                  u(e);
                  Q && ("inside" !==
                      t.indexLabelPlacement ? p(e) : g(), m(e));
                  1 <= c && (ka = !1)
              }, null, w.easing.easeOutQuart)
          }

          function l() {
              for (var a = 0, b = 0; b < T.length - 1; b++)(0 <= ba.indexOf(b) || 0 <= ba.indexOf(b + 1)) && a++;
              return a
          }

          function p(a) {
              for (var b, c, e, h, g = 0; g < T.length; g++) h = 1 === I[g].lineThickness % 2 ? 0.5 : 0, c = ((T[g].y2 + T[g].y4) / 2 << 0) + h, b = k(c).x2 - 1, e = I[g].textBlock.x, h = (I[g].textBlock.y + I[g].height / 2 << 0) + h, I[g].isDirty || 0 == I[g].lineThickness || (a.strokeStyle = I[g].lineColor, a.lineWidth = I[g].lineThickness, a.setLineDash && a.setLineDash(M(I[g].lineDashType,
                  I[g].lineThickness)), a.beginPath(), a.moveTo(b, c), a.lineTo(e, h), a.stroke())
          }

          function r(a) {
              for (a -= 1; - 1 <= a && -1 != a && I[a].isDirty; a--);
              return a
          }

          function q(a) {
              for (a += 1; a <= T.length && a != T.length && I[a].isDirty; a++);
              return a
          }

          function k(a) {
              for (var b, c = 0; c < D.length; c++)
                  if (T[c].y1 < a && T[c].y4 > a) {
                      b = T[c];
                      break
                  } return b ? (a = b.y6 ? a > b.y6 ? b.x3 + (b.x4 - b.x3) / (b.y4 - b.y3) * (a - b.y3) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2), {
                  x1: a,
                  x2: a
              }) : -1
          }

          function m(a) {
              for (var b = 0; b < T.length; b++) I[b].isDirty ||
                  (a && (I[b].textBlock.ctx = a), I[b].textBlock.render(!0))
          }

          function u(a) {
              v.plotArea.layoutManager.reset();
              a.roundRect || Ha(a);
              v.title && (v.title.dockInsidePlotArea || "center" === v.title.horizontalAlign && "center" === v.title.verticalAlign) && (v.title.ctx = a, v.title.render());
              if (v.subtitles)
                  for (var b = 0; b < v.subtitles.length; b++) {
                      var c = v.subtitles[b];
                      if (c.dockInsidePlotArea || "center" === c.horizontalAlign && "center" === c.verticalAlign) v.subtitles.ctx = a, c.render()
                  }
              v.legend && (v.legend.dockInsidePlotArea || "center" === v.legend.horizontalAlign &&
                  "center" === v.legend.verticalAlign) && (v.legend.ctx = a, v.legend.setLayout(), v.legend.render());
              fa.fNg && fa.fNg(v)
          }
          var v = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              for (var t = this.data[a.dataSeriesIndexes[0]], D = t.dataPoints, y = this.plotArea, A = 0.025 * y.width, E = 0.01 * y.width, B = 0, G = y.height - 2 * A, J = Math.min(y.width - 2 * E, 2.8 * y.height), Q = !1, R = 0; R < D.length; R++)
                  if (!Q && ("undefined" !== typeof D[R].indexLabel && null !== D[R].indexLabel && 0 < D[R].indexLabel.toString().length) && (Q = !0), !Q && ("undefined" !== typeof D[R].label && null !==
                          D[R].label && 0 < D[R].label.toString().length) && (Q = !0), !Q && "function" === typeof t.indexLabelFormatter || "function" === typeof D[R].indexLabelFormatter) Q = !0;
              Q = Q || "undefined" !== typeof t.indexLabel && null !== t.indexLabel && 0 < t.indexLabel.toString().length;
              "inside" !== t.indexLabelPlacement && Q || (E = (y.width - 0.75 * J) / 2);
              var R = y.x1 + E,
                  O = y.x2 - E,
                  aa = y.y1 + A,
                  S = y.y2 - A,
                  L = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
              if (0 != t.length && (t.dataPoints && t.visible) && 0 !== D.length) {
                  var N, H;
                  a = 75 * J / 100;
                  var W = 30 * (O - a) / 100;
                  "funnel" === t.type ?
                      (N = n(t.options.neckHeight) ? 0.35 * G : t.neckHeight, H = n(t.options.neckWidth) ? 0.25 * a : t.neckWidth, "string" === typeof N && N.match(/%$/) ? (N = parseInt(N), N = N * G / 100) : N = parseInt(N), "string" === typeof H && H.match(/%$/) ? (H = parseInt(H), H = H * a / 100) : H = parseInt(H), N > G ? N = G : 0 >= N && (N = 0), H > a ? H = a - 0.5 : 0 >= H && (H = 0)) : "pyramid" === t.type && (H = N = 0, t.reversed = t.reversed ? !1 : !0);
                  var E = R + a / 2,
                      Y = R,
                      Z = R + a,
                      va = t.reversed ? S : aa,
                      P = E - H / 2,
                      X = E + H / 2,
                      Ga = t.reversed ? aa + N : S - N,
                      xa = t.reversed ? aa : S;
                  a = [];
                  var E = [],
                      T = [],
                      J = [],
                      V = aa,
                      ha, $ = (Ga - va) / (P - Y),
                      ga = -$,
                      R = "area" ===
                      (t.valueRepresents ? t.valueRepresents : "height") ? b() : e();
                  if (-1 !== R) {
                      if (t.reversed)
                          for (J.push(V), H = R.length - 1; 0 < H; H--) V += R[H], J.push(V);
                      else
                          for (H = 0; H < R.length; H++) V += R[H], J.push(V);
                      if (t.reversed)
                          for (H = 0; H < R.length; H++) J[H] < Ga ? (a.push(P), E.push(X), ha = H) : (a.push((J[H] - va + $ * Y) / $), E.push((J[H] - va + ga * Z) / ga));
                      else
                          for (H = 0; H < R.length; H++) J[H] < Ga ? (a.push((J[H] - va + $ * Y) / $), E.push((J[H] - va + ga * Z) / ga), ha = H) : (a.push(P), E.push(X));
                      for (H = 0; H < R.length - 1; H++) V = t.reversed ? D[D.length - 1 - H].color ? D[D.length - 1 - H].color : t._colorSet[(D.length -
                          1 - H) % t._colorSet.length] : D[H].color ? D[H].color : t._colorSet[H % t._colorSet.length], H === ha ? T.push({
                          x1: a[H],
                          y1: J[H],
                          x2: E[H],
                          y2: J[H],
                          x3: X,
                          y3: Ga,
                          x4: E[H + 1],
                          y4: J[H + 1],
                          x5: a[H + 1],
                          y5: J[H + 1],
                          x6: P,
                          y6: Ga,
                          id: H,
                          height: J[H + 1] - J[H],
                          color: V
                      }) : T.push({
                          x1: a[H],
                          y1: J[H],
                          x2: E[H],
                          y2: J[H],
                          x3: E[H + 1],
                          y3: J[H + 1],
                          x4: a[H + 1],
                          y4: J[H + 1],
                          id: H,
                          height: J[H + 1] - J[H],
                          color: V
                      });
                      var ea = 2,
                          I = [],
                          ka = !1,
                          ba = [],
                          ma = [],
                          R = !1;
                      a = a = 0;
                      Da(ba);
                      for (H = 0; H < D.length; H++) D[H].exploded && (R = !0, t.reversed ? ba.push(D.length - 1 - H) : ba.push(H));
                      L.clearRect(y.x1, y.y1, y.width,
                          y.height);
                      L.fillStyle = v.backgroundColor;
                      L.fillRect(y.x1, y.y1, y.width, y.height);
                      if (Q && t.visible && (c(), g(), h(), "inside" !== t.indexLabelPlacement)) {
                          d();
                          for (H = 0; H < D.length; H++) I[H].isDirty || (a = I[H].textBlock.x + I[H].width, a = (O - a) / 2, 0 == H && (B = a), B > a && (B = a));
                          for (H = 0; H < T.length; H++) T[H].x1 += B, T[H].x2 += B, T[H].x3 += B, T[H].x4 += B, T[H].x5 && (T[H].x5 += B, T[H].x6 += B), I[H].textBlock.x += B
                      }
                      for (H = 0; H < T.length; H++) B = T[H], z(L, B, t.fillOpacity), ma.push(B.y1);
                      u(L);
                      Q && t.visible && ("inside" === t.indexLabelPlacement || v.animationEnabled ||
                          p(L), v.animationEnabled || m());
                      if (!Q)
                          for (H = 0; H < D.length; H++) B = t.dataPointIds[H], a = {
                              id: B,
                              objectType: "dataPoint",
                              dataPointIndex: H,
                              dataSeriesIndex: 0,
                              funnelSection: T[t.reversed ? D.length - 1 - H : H]
                          }, v._eventManager.objectMap[B] = a;
                      !v.animationEnabled && R ? f(v, -1, 0) : v.animationEnabled && !v.animatedRender && f(v, -1, 0);
                      this.funnelPyramidClickHandler = function(a) {
                          var b = -1;
                          if (!ka && !v.isAnimating && (n(a.dataSeries.explodeOnClick) || a.dataSeries.explodeOnClick) && (b = t.reversed ? D.length - 1 - a.dataPointIndex : a.dataPointIndex, 0 <=
                                  b)) {
                              a = b;
                              if ("funnel" === t.type || "pyramid" === t.type) t.reversed ? D[D.length - 1 - a].exploded = D[D.length - 1 - a].exploded ? !1 : !0 : D[a].exploded = D[a].exploded ? !1 : !0;
                              f(v, b, 500)
                          }
                      };
                      return {
                          source: L,
                          dest: this.plotArea.ctx,
                          animationCallback: function(a, b) {
                              w.fadeInAnimation(a, b);
                              1 <= a && (f(v, -1, 500), u(v.plotArea.ctx || v.ctx))
                          },
                          easingFunction: w.easing.easeInQuad,
                          animationBase: 0
                      }
                  }
              }
          }
      };
      m.prototype.requestAnimFrame = function() {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                  window.setTimeout(a, 1E3 / 60)
              }
      }();
      m.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
      m.prototype.set = function(a, e, b) {
          b = "undefined" === typeof b ? !0 : b;
          "options" === a ? (this.options = e, b && this.render()) : m.base.set.call(this, a, e, b)
      };
      m.prototype.exportChart =
          function(a) {
              a = "undefined" === typeof a ? {} : a;
              var e = a.format ? a.format : "png",
                  b = a.fileName ? a.fileName : this.exportFileName;
              if (a.toDataURL) return this.canvas.toDataURL("image/" + e);
              fb(this.canvas, e, b)
          };
      m.prototype.print = function() {
          var a = this.exportChart({
                  toDataURL: !0
              }),
              e = document.createElement("iframe");
          e.setAttribute("class", "canvasjs-chart-print-frame");
          e.setAttribute("style", "position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
          e.style.height = this.height + "px";
          this._canvasJSContainer.appendChild(e);
          var b = this,
              c = e.contentWindow || e.contentDocument.document || e.contentDocument;
          c.document.open();
          c.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="' + a + '"/><body/></html>');
          c.document.close();
          setTimeout(function() {
              c.focus();
              c.print();
              setTimeout(function() {
                  b._canvasJSContainer.removeChild(e)
              }, 1E3)
          }, 500)
      };
      m.prototype.getPercentAndTotal = function(a, e) {
          var b = null,
              c = null,
              h = null;
          if (0 <= a.type.indexOf("stacked")) c =
              0, b = e.x.getTime ? e.x.getTime() : e.x, b in a.plotUnit.yTotals && (c = a.plotUnit.yTotals[b], h = isNaN(e.y) ? 0 : 100 * (e.y / c));
          else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
              for (b = c = 0; b < a.dataPoints.length; b++) isNaN(a.dataPoints[b].y) || (c += a.dataPoints[b].y);
              h = isNaN(e.y) ? 0 : 100 * (e.y / c)
          }
          return {
              percent: h,
              total: c
          }
      };
      m.prototype.replaceKeywordsWithValue = function(a, e, b, c, h) {
          var g = this;
          h = "undefined" === typeof h ? 0 : h;
          if ((0 <= b.type.indexOf("stacked") || "pie" === b.type || "doughnut" === b.type ||
                  "funnel" === b.type || "pyramid" === b.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
              var d = "#percent",
                  s = "#total",
                  f = this.getPercentAndTotal(b, e),
                  s = isNaN(f.total) ? s : f.total,
                  d = isNaN(f.percent) ? d : f.percent;
              do {
                  f = "";
                  if (b.percentFormatString) f = b.percentFormatString;
                  else {
                      var f = "#,##0.",
                          l = Math.max(Math.ceil(Math.log(1 / Math.abs(d)) / Math.LN10), 2);
                      if (isNaN(l) || !isFinite(l)) l = 2;
                      for (var p = 0; p < l; p++) f += "#";
                      b.percentFormatString = f
                  }
                  a = a.replace("#percent", X(d, f, g._cultureInfo));
                  a = a.replace("#total", X(s, b.yValueFormatString ?
                      b.yValueFormatString : "#,##0.########", g._cultureInfo))
              } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
          }
          return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a) {
              if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1, a.length - 1);
              a = Ra(a.slice(1, a.length - 1));
              a = a.replace("#index", h);
              var d = null;
              try {
                  var k = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                  k && 0 < k.length && (d = Ra(k[2]), a = Ra(k[1]))
              } catch (l) {}
              k = null;
              if ("color" === a) return "waterfall" === b.type ? e.color ? e.color : 0 < e.y ? b.risingColor :
                  b.fallingColor : "error" === b.type ? b.color ? b.color : b._colorSet[d % b._colorSet.length] : e.color ? e.color : b.color ? b.color : b._colorSet[c % b._colorSet.length];
              if (e.hasOwnProperty(a)) k = e;
              else if (b.hasOwnProperty(a)) k = b;
              else return "";
              k = k[a];
              null !== d && (k = k[d]);
              if ("x" === a)
                  if ("dateTime" === b.axisX.valueType || "dateTime" === b.xValueType || e.x && e.x.getTime) {
                      if (g.plotInfo.plotTypes[0].plotUnits[0].axisX && !g.plotInfo.plotTypes[0].plotUnits[0].axisX.logarithmic) return ma(k, e.xValueFormatString ? e.xValueFormatString : b.xValueFormatString ?
                          b.xValueFormatString : b.xValueFormatString = g.axisX && g.axisX.autoValueFormatString ? g.axisX.autoValueFormatString : "DD MMM YY", g._cultureInfo)
                  } else return X(k, e.xValueFormatString ? e.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : b.xValueFormatString = "#,##0.########", g._cultureInfo);
              else return "y" === a ? X(k, e.yValueFormatString ? e.yValueFormatString : b.yValueFormatString ? b.yValueFormatString : b.yValueFormatString = "#,##0.########", g._cultureInfo) : "z" === a ? X(k, e.zValueFormatString ? e.zValueFormatString :
                  b.zValueFormatString ? b.zValueFormatString : b.zValueFormatString = "#,##0.########", g._cultureInfo) : k
          })
      };
      ga(J, S);
      J.prototype.setLayout = function() {
          var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
              e = a.layoutManager.getFreeSpace(),
              b = null,
              c = 0,
              h = 0,
              g = 0,
              d = 0,
              f = this.markerMargin = this.chart.options.legend && !n(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
          this.height = 0;
          var m = [],
              l = [];
          "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation =
              "horizontal", b = this.verticalAlign, g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : e.width, d = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * e.height) : "center" === this.verticalAlign && (this.orientation = "vertical", b = this.horizontalAlign, g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * e.width, d = this.maxHeight = null !== this.maxHeight ? this.maxHeight : e.height);
          this.errorMarkerColor = [];
          for (var p = 0; p < this.dataSeries.length; p++) {
              var r = this.dataSeries[p];
              if (r.dataPoints && r.dataPoints.length)
                  if ("pie" !==
                      r.type && "doughnut" !== r.type && "funnel" !== r.type && "pyramid" !== r.type) {
                      var q = r.legendMarkerType = r.legendMarkerType ? r.legendMarkerType : "line" !== r.type && "stepLine" !== r.type && "spline" !== r.type && "scatter" !== r.type && "bubble" !== r.type || !r.markerType ? "error" === r.type && r._linkedSeries ? r._linkedSeries.legendMarkerType ? r._linkedSeries.legendMarkerType : E.getDefaultLegendMarker(r._linkedSeries.type) : E.getDefaultLegendMarker(r.type) : r.markerType,
                          k = r.legendText ? r.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                              chart: this.chart,
                              legend: this.options,
                              dataSeries: r,
                              dataPoint: null
                          }) : r.name,
                          z = r.legendMarkerColor = r.legendMarkerColor ? r.legendMarkerColor : r.markerColor ? r.markerColor : "error" === r.type ? n(r.whiskerColor) ? r._colorSet[0] : r.whiskerColor : r._colorSet[0],
                          w = r.markerSize || "line" !== r.type && "stepLine" !== r.type && "spline" !== r.type ? 0.75 * this.lineHeight : 0,
                          u = r.legendMarkerBorderColor ? r.legendMarkerBorderColor : r.markerBorderColor,
                          t = r.legendMarkerBorderThickness ? r.legendMarkerBorderThickness : r.markerBorderThickness ? Math.max(1, Math.round(0.2 *
                              w)) : 0;
                      "error" === r.type && this.errorMarkerColor.push(z);
                      k = this.chart.replaceKeywordsWithValue(k, r.dataPoints[0], r, p);
                      q = {
                          markerType: q,
                          markerColor: z,
                          text: k,
                          textBlock: null,
                          chartType: r.type,
                          markerSize: w,
                          lineColor: r._colorSet[0],
                          dataSeriesIndex: r.index,
                          dataPointIndex: null,
                          markerBorderColor: u,
                          markerBorderThickness: t
                      };
                      m.push(q)
                  } else
                      for (var x = 0; x < r.dataPoints.length; x++) {
                          var v = r.dataPoints[x],
                              q = v.legendMarkerType ? v.legendMarkerType : r.legendMarkerType ? r.legendMarkerType : E.getDefaultLegendMarker(r.type),
                              k = v.legendText ?
                              v.legendText : r.legendText ? r.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                                  chart: this.chart,
                                  legend: this.options,
                                  dataSeries: r,
                                  dataPoint: v
                              }) : v.name ? v.name : "DataPoint: " + (x + 1),
                              z = v.legendMarkerColor ? v.legendMarkerColor : r.legendMarkerColor ? r.legendMarkerColor : v.color ? v.color : r.color ? r.color : r._colorSet[x % r._colorSet.length],
                              w = 0.75 * this.lineHeight,
                              u = v.legendMarkerBorderColor ? v.legendMarkerBorderColor : r.legendMarkerBorderColor ? r.legendMarkerBorderColor : v.markerBorderColor ? v.markerBorderColor :
                              r.markerBorderColor,
                              t = v.legendMarkerBorderThickness ? v.legendMarkerBorderThickness : r.legendMarkerBorderThickness ? r.legendMarkerBorderThickness : v.markerBorderThickness || r.markerBorderThickness ? Math.max(1, Math.round(0.2 * w)) : 0,
                              k = this.chart.replaceKeywordsWithValue(k, v, r, x),
                              q = {
                                  markerType: q,
                                  markerColor: z,
                                  text: k,
                                  textBlock: null,
                                  chartType: r.type,
                                  markerSize: w,
                                  dataSeriesIndex: p,
                                  dataPointIndex: x,
                                  markerBorderColor: u,
                                  markerBorderThickness: t
                              };
                          (v.showInLegend || r.showInLegend && !1 !== v.showInLegend) && m.push(q)
                      }
          }!0 ===
              this.reversed && m.reverse();
          if (0 < m.length) {
              r = null;
              z = k = v = x = 0;
              v = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, g) : this.itemMaxWidth = Math.min(this.itemWidth, g) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, g) : this.itemMaxWidth = g;
              w = 0 === w ? 0.75 * this.lineHeight : w;
              v -= w + f;
              for (p = 0; p < m.length; p++) {
                  q = m[p];
                  u = v;
                  if ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType) u -= 2 * 0.1 * this.lineHeight;
                  if (!(0 >= d || "undefined" === typeof d || 0 >= u || "undefined" === typeof u)) {
                      if ("horizontal" ===
                          this.orientation) {
                          q.textBlock = new la(this.ctx, {
                              x: 0,
                              y: 0,
                              maxWidth: u,
                              maxHeight: this.itemWrap ? d : this.lineHeight,
                              angle: 0,
                              text: q.text,
                              horizontalAlign: "left",
                              fontSize: this.fontSize,
                              fontFamily: this.fontFamily,
                              fontWeight: this.fontWeight,
                              fontColor: this.fontColor,
                              fontStyle: this.fontStyle,
                              textBaseline: "middle"
                          });
                          q.textBlock.measureText();
                          null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (w + f + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                          if (!r || r.width +
                              Math.round(q.textBlock.width + w + f + (0 === r.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)) > g) r = {
                              items: [],
                              width: 0
                          }, l.push(r), this.height += k, k = 0;
                          k = Math.max(k, q.textBlock.height)
                      } else q.textBlock = new la(this.ctx, {
                          x: 0,
                          y: 0,
                          maxWidth: v,
                          maxHeight: !0 === this.itemWrap ? d : 1.5 * this.fontSize,
                          angle: 0,
                          text: q.text,
                          horizontalAlign: "left",
                          fontSize: this.fontSize,
                          fontFamily: this.fontFamily,
                          fontWeight: this.fontWeight,
                          fontColor: this.fontColor,
                          fontStyle: this.fontStyle,
                          textBaseline: "middle"
                      }), q.textBlock.measureText(), null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (w + f + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < d - this.lineHeight ? (r = {
                          items: [],
                          width: 0
                      }, l.push(r)) : (r = l[x], x = (x + 1) % l.length), this.height += q.textBlock.height;
                      q.textBlock.x = r.width;
                      q.textBlock.y = 0;
                      r.width += Math.round(q.textBlock.width + w + f + (0 === r.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" ===
                          q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
                      r.items.push(q);
                      this.width = Math.max(r.width, this.width);
                      z = q.textBlock.width + (w + f + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))
                  }
              }
              this.itemWidth = z;
              this.height = !1 === this.itemWrap ? l.length * this.lineHeight : this.height + k;
              this.height = Math.min(d, this.height);
              this.width = Math.min(g, this.width)
          }
          "top" === this.verticalAlign ? (h = "left" === this.horizontalAlign ? e.x1 : "right" === this.horizontalAlign ? e.x2 -
              this.width : e.x1 + e.width / 2 - this.width / 2, c = e.y1) : "center" === this.verticalAlign ? (h = "left" === this.horizontalAlign ? e.x1 : "right" === this.horizontalAlign ? e.x2 - this.width : e.x1 + e.width / 2 - this.width / 2, c = e.y1 + e.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (h = "left" === this.horizontalAlign ? e.x1 : "right" === this.horizontalAlign ? e.x2 - this.width : e.x1 + e.width / 2 - this.width / 2, c = e.y2 - this.height);
          this.items = m;
          for (p = 0; p < this.items.length; p++) q = m[p], q.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[q.id] = {
              id: q.id,
              objectType: "legendItem",
              legendItemIndex: p,
              dataSeriesIndex: q.dataSeriesIndex,
              dataPointIndex: q.dataPointIndex
          };
          this.markerSize = w;
          this.rows = l;
          0 < m.length && a.layoutManager.registerSpace(b, {
              width: this.width + 2 + 2,
              height: this.height + 5 + 5
          });
          this.bounds = {
              x1: h,
              y1: c,
              x2: h + this.width,
              y2: c + this.height
          }
      };
      J.prototype.render = function() {
          var a = this.bounds.x1,
              e = this.bounds.y1,
              b = this.markerMargin,
              c = this.maxWidth,
              h = this.maxHeight,
              g = this.markerSize,
              d = this.rows;
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) &&
          this.ctx.roundRect(a, e, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
          for (var f = 0, n = 0; n < d.length; n++) {
              for (var l = d[n], p = 0, r = 0; r < l.items.length; r++) {
                  var q = l.items[r],
                      k = q.textBlock.x + a + (0 === r ? 0.2 * g : this.horizontalSpacing),
                      m = e + f,
                      z = k;
                  this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                  this.ctx.save();
                  this.ctx.beginPath();
                  this.ctx.rect(a, e, c, Math.max(h - h % this.lineHeight, 0));
                  this.ctx.clip();
                  if ("line" === q.chartType || "stepLine" === q.chartType ||
                      "spline" === q.chartType) this.ctx.strokeStyle = q.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(k - 0.1 * this.lineHeight, m + this.lineHeight / 2), this.ctx.lineTo(k + 0.85 * this.lineHeight, m + this.lineHeight / 2), this.ctx.stroke(), z -= 0.1 * this.lineHeight;
                  if ("error" === q.chartType) {
                      this.ctx.strokeStyle = this.errorMarkerColor[0];
                      this.ctx.lineWidth = g / 8;
                      this.ctx.beginPath();
                      var w = k - 0.08 * this.lineHeight + 0.1 * this.lineHeight,
                          t = m + 0.15 * this.lineHeight,
                          x = 0.7 * this.lineHeight,
                          v = x +
                          0.02 * this.lineHeight;
                      this.ctx.moveTo(w, t);
                      this.ctx.lineTo(w + x, t);
                      this.ctx.stroke();
                      this.ctx.beginPath();
                      this.ctx.moveTo(w + x / 2, t);
                      this.ctx.lineTo(w + x / 2, t + v);
                      this.ctx.stroke();
                      this.ctx.beginPath();
                      this.ctx.moveTo(w, t + v);
                      this.ctx.lineTo(w + x, t + v);
                      this.ctx.stroke();
                      this.errorMarkerColor.shift()
                  }
                  u.drawMarker(k + g / 2, m + this.lineHeight / 2, this.ctx, q.markerType, "error" === q.chartType || "line" === q.chartType || "spline" === q.chartType ? q.markerSize / 2 : q.markerSize, q.markerColor, q.markerBorderColor, q.markerBorderThickness);
                  q.textBlock.x = k + b + g;
                  if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) q.textBlock.x += 0.1 * this.lineHeight;
                  q.textBlock.y = Math.round(m + this.lineHeight / 2);
                  q.textBlock.render(!0);
                  this.ctx.restore();
                  p = 0 < r ? Math.max(p, q.textBlock.height) : q.textBlock.height;
                  this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                  k = N(q.id);
                  this.ghostCtx.fillStyle = k;
                  this.ghostCtx.beginPath();
                  this.ghostCtx.fillRect(z, q.textBlock.y - this.lineHeight / 2, q.textBlock.x + q.textBlock.width - z, q.textBlock.height);
                  q.x1 = this.chart._eventManager.objectMap[q.id].x1 = z;
                  q.y1 = this.chart._eventManager.objectMap[q.id].y1 = q.textBlock.y - this.lineHeight / 2;
                  q.x2 = this.chart._eventManager.objectMap[q.id].x2 = q.textBlock.x + q.textBlock.width;
                  q.y2 = this.chart._eventManager.objectMap[q.id].y2 = q.textBlock.y + q.textBlock.height - this.lineHeight / 2
              }
              f += p
          }
      };
      ga(E, S);
      E.prototype.getDefaultAxisPlacement = function() {
          var a = this.type;
          if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" ===
              a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "normal";
          if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
          if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a) return "none";
          "error" !== a && window.console.log("Unknown Chart Type: " + a);
          return null
      };
      E.getDefaultLegendMarker = function(a) {
          if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "square";
          if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a) return "circle";
          if ("area" === a || "splineArea" ===
              a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a) return "triangle";
          if ("error" === a) return "none";
          window.console.log("Unknown Chart Type: " + a);
          return null
      };
      E.prototype.getDataPointAtX = function(a, e) {
          if (!this.dataPoints || 0 === this.dataPoints.length) return null;
          var b = {
                  dataPoint: null,
                  distance: Infinity,
                  index: NaN
              },
              c = null,
              h = 0,
              g = 0,
              d = 1,
              f = Infinity,
              n = 0,
              l = 0,
              p = 0;
          "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (p = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x),
              p = 1 < p ? Math.min(Math.max((this.dataPoints.length - 1) / p * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (p = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, p = 0 < p ? Math.min(Math.max((this.dataPoints.length - 1) / p * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
          for (;;) {
              g = 0 < d ? p + h : p - h;
              if (0 <= g && g < this.dataPoints.length) {
                  var c = this.dataPoints[g],
                      r = this.axisX.logarithmic ? c.x > a ? c.x / a : a / c.x : Math.abs(c.x - a);
                  r < b.distance && (b.dataPoint = c, b.distance = r, b.index = g);
                  c = r;
                  c <= f ?
                      f = c : 0 < d ? n++ : l++;
                  if (1E3 < n && 1E3 < l) break
              } else if (0 > p - h && p + h >= this.dataPoints.length) break; - 1 === d ? (h++, d = 1) : d = -1
          }
          return e || (b.dataPoint.x.getTime ? b.dataPoint.x.getTime() : b.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? e && null !== b.dataPoint ? b : null : b
      };
      E.prototype.getDataPointAtXY = function(a, e, b) {
          if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || e < this.chart.plotArea.y1 || e > this.chart.plotArea.y2) return null;
          b = b || !1;
          var c = [],
              h = 0,
              g = 0,
              d = 1,
              f = !1,
              n = Infinity,
              l = 0,
              p =
              0,
              r = 0;
          if ("none" !== this.chart.plotInfo.axisPlacement)
              if (r = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({
                      x: a,
                      y: e
                  }), this.axisX.logarithmic) var q = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x),
                  r = 1 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * Math.log(r / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
              else q = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, r = 0 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * (r - this.dataPoints[0].x) >>
                  0, 0), this.dataPoints.length) : 0;
          for (;;) {
              g = 0 < d ? r + h : r - h;
              if (0 <= g && g < this.dataPoints.length) {
                  var q = this.chart._eventManager.objectMap[this.dataPointIds[g]],
                      k = this.dataPoints[g],
                      m = null;
                  if (q) {
                      switch (this.type) {
                          case "column":
                          case "stackedColumn":
                          case "stackedColumn100":
                          case "bar":
                          case "stackedBar":
                          case "stackedBar100":
                          case "rangeColumn":
                          case "rangeBar":
                          case "waterfall":
                          case "error":
                              a >= q.x1 && (a <= q.x2 && e >= q.y1 && e <= q.y2) && (c.push({
                                  dataPoint: k,
                                  dataPointIndex: g,
                                  dataSeries: this,
                                  distance: Math.min(Math.abs(q.x1 -
                                      a), Math.abs(q.x2 - a), Math.abs(q.y1 - e), Math.abs(q.y2 - e))
                              }), f = !0);
                              break;
                          case "line":
                          case "stepLine":
                          case "spline":
                          case "area":
                          case "stepArea":
                          case "stackedArea":
                          case "stackedArea100":
                          case "splineArea":
                          case "scatter":
                              var z = qa("markerSize", k, this) || 4,
                                  w = b ? 20 : z,
                                  m = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - e, 2));
                              m <= w && c.push({
                                  dataPoint: k,
                                  dataPointIndex: g,
                                  dataSeries: this,
                                  distance: m
                              });
                              q = Math.abs(q.x1 - a);
                              q <= n ? n = q : 0 < d ? l++ : p++;
                              m <= z / 2 && (f = !0);
                              break;
                          case "rangeArea":
                          case "rangeSplineArea":
                              z = qa("markerSize", k, this) ||
                                  4;
                              w = b ? 20 : z;
                              m = Math.min(Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - e, 2)), Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y2 - e, 2)));
                              m <= w && c.push({
                                  dataPoint: k,
                                  dataPointIndex: g,
                                  dataSeries: this,
                                  distance: m
                              });
                              q = Math.abs(q.x1 - a);
                              q <= n ? n = q : 0 < d ? l++ : p++;
                              m <= z / 2 && (f = !0);
                              break;
                          case "bubble":
                              z = q.size;
                              m = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - e, 2));
                              m <= z / 2 && (c.push({
                                  dataPoint: k,
                                  dataPointIndex: g,
                                  dataSeries: this,
                                  distance: m
                              }), f = !0);
                              break;
                          case "pie":
                          case "doughnut":
                              z = q.center;
                              w = "doughnut" === this.type ? q.percentInnerRadius * q.radius :
                                  0;
                              m = Math.sqrt(Math.pow(z.x - a, 2) + Math.pow(z.y - e, 2));
                              m < q.radius && m > w && (m = Math.atan2(e - z.y, a - z.x), 0 > m && (m += 2 * Math.PI), m = Number(((180 * (m / Math.PI) % 360 + 360) % 360).toFixed(12)), z = Number(((180 * (q.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), w = Number(((180 * (q.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === w && 1 < q.endAngle && (w = 360), z >= w && 0 !== k.y && (w += 360, m < z && (m += 360)), m > z && m < w && (c.push({
                                  dataPoint: k,
                                  dataPointIndex: g,
                                  dataSeries: this,
                                  distance: 0
                              }), f = !0));
                              break;
                          case "funnel":
                          case "pyramid":
                              m = q.funnelSection;
                              e > m.y1 && e < m.y4 && (m.y6 ? e > m.y6 ? (g = m.x6 + (m.x5 - m.x6) / (m.y5 - m.y6) * (e - m.y6), m = m.x3 + (m.x4 - m.x3) / (m.y4 - m.y3) * (e - m.y3)) : (g = m.x1 + (m.x6 - m.x1) / (m.y6 - m.y1) * (e - m.y1), m = m.x2 + (m.x3 - m.x2) / (m.y3 - m.y2) * (e - m.y2)) : (g = m.x1 + (m.x4 - m.x1) / (m.y4 - m.y1) * (e - m.y1), m = m.x2 + (m.x3 - m.x2) / (m.y3 - m.y2) * (e - m.y2)), a > g && a < m && (c.push({
                                  dataPoint: k,
                                  dataPointIndex: q.dataPointIndex,
                                  dataSeries: this,
                                  distance: 0
                              }), f = !0));
                              break;
                          case "boxAndWhisker":
                              if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && e >= q.y4 - q.borderThickness / 2 && e <= q.y1 + q.borderThickness /
                                  2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && e >= q.y1 && e <= q.y4) c.push({
                                  dataPoint: k,
                                  dataPointIndex: g,
                                  dataSeries: this,
                                  distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - e), Math.abs(q.y3 - e))
                              }), f = !0;
                              break;
                          case "candlestick":
                              if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && e >= q.y2 - q.borderThickness / 2 && e <= q.y3 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && e >= q.y1 && e <= q.y4) c.push({
                                  dataPoint: k,
                                  dataPointIndex: g,
                                  dataSeries: this,
                                  distance: Math.min(Math.abs(q.x1 - a),
                                      Math.abs(q.x2 - a), Math.abs(q.y2 - e), Math.abs(q.y3 - e))
                              }), f = !0;
                              break;
                          case "ohlc":
                              if (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && e >= q.y2 && e <= q.y3 || a >= q.x1 && a <= (q.x2 + q.x1) / 2 && e >= q.y1 - q.borderThickness / 2 && e <= q.y1 + q.borderThickness / 2 || a >= (q.x1 + q.x2) / 2 && a <= q.x2 && e >= q.y4 - q.borderThickness / 2 && e <= q.y4 + q.borderThickness / 2) c.push({
                                  dataPoint: k,
                                  dataPointIndex: g,
                                  dataSeries: this,
                                  distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - e), Math.abs(q.y3 - e))
                              }), f = !0
                      }
                      if (f || 1E3 < l && 1E3 < p) break
                  }
              } else if (0 > r - h && r + h >=
                  this.dataPoints.length) break; - 1 === d ? (h++, d = 1) : d = -1
          }
          a = null;
          for (e = 0; e < c.length; e++) a ? c[e].distance <= a.distance && (a = c[e]) : a = c[e];
          return a
      };
      E.prototype.getMarkerProperties = function(a, e, b, c) {
          var h = this.dataPoints;
          return {
              x: e,
              y: b,
              ctx: c,
              type: h[a].markerType ? h[a].markerType : this.markerType,
              size: h[a].markerSize ? h[a].markerSize : this.markerSize,
              color: h[a].markerColor ? h[a].markerColor : this.markerColor ? this.markerColor : h[a].color ? h[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
              borderColor: h[a].markerBorderColor ?
                  h[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
              borderThickness: h[a].markerBorderThickness ? h[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null
          }
      };
      ga(A, S);
      A.prototype.createExtraLabelsForLog = function(a) {
          a = (a || 0) + 1;
          if (!(5 < a)) {
              var e = this.logLabelValues[0] || this.intervalStartPosition;
              if (Math.log(this.range) / Math.log(e / this.viewportMinimum) < this.noTicks - 1) {
                  for (var b = A.getNiceNumber((e - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length),
                          3), !0), c = Math.ceil(this.viewportMinimum / b) * b; c < e; c += b) c < this.viewportMinimum || this.logLabelValues.push(c);
                  this.logLabelValues.sort(Za);
                  this.createExtraLabelsForLog(a)
              }
          }
      };
      A.prototype.createLabels = function() {
          var a, e, b = 0,
              c = 0,
              h, g = 0,
              d = 0,
              c = 0,
              c = this.interval,
              f = 0,
              m, l = 0.6 * this.chart.height,
              p;
          a = !1;
          var r = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
              q = r.length ? n(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
          if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
              h =
                  this.viewportMaximum;
              if (this.labels) {
                  a = Math.ceil(c);
                  for (var c = Math.ceil(this.intervalStartPosition), k = !1, b = c; b < this.viewportMaximum; b += a)
                      if (this.labels[b]) k = !0;
                      else {
                          k = !1;
                          break
                      } k && (this.interval = a, this.intervalStartPosition = c)
              }
              if (this.logarithmic && !this.equidistantInterval)
                  for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), c = 0, k = q; c < this.logLabelValues.length; c++)
                      if (b = this.logLabelValues[c], b < this.viewportMinimum) c++;
                      else {
                          for (; k < r.length && b > r[k].endValue; k++);
                          a = k < r.length &&
                              b >= r[k].startValue && b <= r[k].endValue;
                          p = b;
                          a || (a = this.labelFormatter ? this.labelFormatter({
                              chart: this.chart,
                              axis: this.options,
                              value: p,
                              label: this.labels[p] ? this.labels[p] : null
                          }) : "axisX" === this.type && this.labels[p] ? this.labels[p] : X(p, this.valueFormatString, this.chart._cultureInfo), a = new la(this.ctx, {
                              x: 0,
                              y: 0,
                              maxWidth: g,
                              maxHeight: d,
                              angle: this.labelAngle,
                              text: this.prefix + a + this.suffix,
                              backgroundColor: this.labelBackgroundColor,
                              borderColor: this.labelBorderColor,
                              cornerRadius: this.labelCornerRadius,
                              textAlign: this.labelTextAlign,
                              fontSize: this.labelFontSize,
                              fontFamily: this.labelFontFamily,
                              fontWeight: this.labelFontWeight,
                              fontColor: this.labelFontColor,
                              fontStyle: this.labelFontStyle,
                              textBaseline: "middle",
                              borderThickness: 0
                          }), this._labels.push({
                              position: p,
                              textBlock: a,
                              effectiveHeight: null
                          }))
                      } k = q;
              for (b = this.intervalStartPosition; b <= h; b = parseFloat(1E-12 > this.interval ? this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase, this.interval) : b + this.interval : (this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase,
                      this.interval) : b + this.interval).toFixed(12))) {
                  for (; k < r.length && b > r[k].endValue; k++);
                  a = k < r.length && b >= r[k].startValue && b <= r[k].endValue;
                  p = b;
                  a || (a = this.labelFormatter ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.options,
                      value: p,
                      label: this.labels[p] ? this.labels[p] : null
                  }) : "axisX" === this.type && this.labels[p] ? this.labels[p] : X(p, this.valueFormatString, this.chart._cultureInfo), a = new la(this.ctx, {
                      x: 0,
                      y: 0,
                      maxWidth: g,
                      maxHeight: d,
                      angle: this.labelAngle,
                      text: this.prefix + a + this.suffix,
                      textAlign: this.labelTextAlign,
                      backgroundColor: this.labelBackgroundColor,
                      borderColor: this.labelBorderColor,
                      borderThickness: this.labelBorderThickness,
                      cornerRadius: this.labelCornerRadius,
                      fontSize: this.labelFontSize,
                      fontFamily: this.labelFontFamily,
                      fontWeight: this.labelFontWeight,
                      fontColor: this.labelFontColor,
                      fontStyle: this.labelFontStyle,
                      textBaseline: "middle"
                  }), this._labels.push({
                      position: p,
                      textBlock: a,
                      effectiveHeight: null
                  }))
              }
          } else
              for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType,
                      this.interval), h = eb(new Date(this.viewportMaximum), this.interval, this.intervalType), k = q, b = this.intervalStartPosition; b < h; eb(b, c, this.intervalType)) {
                  for (a = b.getTime(); k < r.length && a > r[k].endValue; k++);
                  p = a;
                  a = k < r.length && a >= r[k].startValue && a <= r[k].endValue;
                  a || (a = this.labelFormatter ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.options,
                          value: new Date(p),
                          label: this.labels[p] ? this.labels[p] : null
                      }) : "axisX" === this.type && this.labels[p] ? this.labels[p] : ma(p, this.valueFormatString, this.chart._cultureInfo),
                      a = new la(this.ctx, {
                          x: 0,
                          y: 0,
                          maxWidth: g,
                          backgroundColor: this.labelBackgroundColor,
                          borderColor: this.labelBorderColor,
                          borderThickness: this.labelBorderThickness,
                          cornerRadius: this.labelCornerRadius,
                          maxHeight: d,
                          angle: this.labelAngle,
                          text: this.prefix + a + this.suffix,
                          textAlign: this.labelTextAlign,
                          fontSize: this.labelFontSize,
                          fontFamily: this.labelFontFamily,
                          fontWeight: this.labelFontWeight,
                          fontColor: this.labelFontColor,
                          fontStyle: this.labelFontStyle,
                          textBaseline: "middle"
                      }), this._labels.push({
                          position: p,
                          textBlock: a,
                          effectiveHeight: null,
                          breaksLabelType: void 0
                      }))
              }
          if ("bottom" === this._position || "top" === this._position) f = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) *
              Y[this.intervalType + "Duration"] * this.interval, g = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (d = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
          else if ("left" === this._position || "right" === this._position) f = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position /
                  this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * Y[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (g = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), d = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >>
              0 : 1.5 * this.labelFontSize;
          for (c = 0; c < this._labels.length; c++) {
              a = this._labels[c].textBlock;
              a.maxWidth = g;
              a.maxHeight = d;
              var z = a.measureText();
              m = z.height
          }
          h = [];
          q = r = 0;
          if (this.labelAutoFit || this.options.labelAutoFit)
              if (n(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
                  if (g = 0.9 * f >> 0, q = 0, !this.chart.panEnabled && 1 <=
                      this._labels.length) {
                      this.sessionVariables.labelFontSize = this.labelFontSize;
                      this.sessionVariables.labelMaxWidth = g;
                      this.sessionVariables.labelMaxHeight = d;
                      this.sessionVariables.labelAngle = this.labelAngle;
                      this.sessionVariables.labelWrap = this.labelWrap;
                      for (b = 0; b < this._labels.length; b++)
                          if (!this._labels[b].breaksLabelType) {
                              a = this._labels[b].textBlock;
                              for (var w, k = a.text.split(" "), c = 0; c < k.length; c++) p = k[c], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, p = this.ctx.measureText(p),
                                  p.width > q && (w = b, q = p.width)
                          } b = 0;
                      for (b = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; b < this._labels.length; b++)
                          if (!this._labels[b].breaksLabelType) {
                              a = this._labels[b].textBlock;
                              z = a.measureText();
                              for (k = b + 1; k < this._labels.length; k++)
                                  if (!this._labels[k].breaksLabelType) {
                                      e = this._labels[k].textBlock;
                                      e = e.measureText();
                                      break
                                  } h.push(a.height);
                              this.sessionVariables.labelMaxHeight = Math.max.apply(Math, h);
                              Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                              Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                              c = g * Math.sin(Math.PI /
                                  180 * Math.abs(this.labelAngle)) + (d - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                              if (n(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                                  if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d : Math.min((c - g * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c), p = (l - (m + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !n(this.options.labelWrap)) this.labelWrap ? n(this.options.labelMaxWidth) ?
                                      (this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, q), p), this.sessionVariables.labelWrap = this.labelWrap, e && z.width + e.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ? -25 : this.sessionVariables.labelAngle) : n(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight =
                                          d, this.sessionVariables.labelMaxWidth = g, e && z.width + e.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = p)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelWrap = this.labelWrap);
                                  else {
                                      if (n(this.options.labelWrap))
                                          if (!n(this.options.labelMaxWidth)) this.options.labelMaxWidth < g ?
                                              (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = c) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d);
                                          else if (!n(e))
                                          if (c = z.width + e.width >> 0, k = this.labelFontSize, q < g) c - 2 * g > r && (r = c - 2 * g, c >= 2 * g && c < 2.2 * g ? (this.sessionVariables.labelMaxWidth = g, n(this.options.labelFontSize) && 12 < k && (k = Math.floor(12 / 13 * k), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ?
                                              k : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : c >= 2.2 * g && c < 2.8 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = p, this.sessionVariables.labelFontSize = k) : c >= 2.8 * g && c < 3.2 * g ? (this.sessionVariables.labelMaxWidth = Math.max(g, q), this.sessionVariables.labelWrap = !0, n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ?
                                              k : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : c >= 3.2 * g && c < 3.6 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = p, this.sessionVariables.labelFontSize = this.labelFontSize) : c > 3.6 * g && c < 5 * g ? (n(this.options.labelFontSize) && 12 < k && (k = Math.floor(12 / 13 * k), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? k : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = p) : c > 5 * g && (this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelFontSize = k, this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelAngle = this.labelAngle));
                                          else if (w === b && (0 === w && q + this._labels[w + 1].textBlock.measureText().width - 2 * g > r || w === this._labels.length - 1 && q + this._labels[w - 1].textBlock.measureText().width - 2 * g > r || 0 < w && w < this._labels.length - 1 && q + this._labels[w + 1].textBlock.measureText().width - 2 * g > r &&
                                              q + this._labels[w - 1].textBlock.measureText().width - 2 * g > r)) r = 0 === w ? q + this._labels[w + 1].textBlock.measureText().width - 2 * g : q + this._labels[w - 1].textBlock.measureText().width - 2 * g, this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? k : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = p;
                                      else if (0 === r)
                                          for (this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? k : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, q), p), z = a.measureText(), c < this._labels.length - 1 && (k = c + 1, e = this._labels[k].textBlock, e.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, q), p), e = e.measureText(), z.width + e.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25))
                                  }
                              else(this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d : Math.min((c - g * Math.cos(Math.PI /
                                  180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c), p = 0 != this.labelAngle ? (l - (m + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : g, this.sessionVariables.labelMaxHeight = d = this.labelWrap ? (l - p * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, n(this.options.labelWrap)) ? n(this.options.labelWrap) && (this.labelWrap && !n(this.options.labelMaxWidth) ?
                                  (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : p, this.sessionVariables.labelMaxHeight = d) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = p, this.sessionVariables.labelMaxHeight = c < 0.9 * f ? 0.9 * f : c, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ?
                                  this.options.labelMaxWidth : p) : (n(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : p, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = d)
                          } for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap,
                          a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                  } else
                      for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = n(this.options.labelMaxWidth) ? n(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = g : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = n(this.options.labelFontSize) ? n(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize :
                          this.options.labelFontSize, a.angle = this.labelAngle = n(this.options.labelAngle) ? n(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = n(this.options.labelWrap) ? n(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = n(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = d : this.sessionVariables.labelMaxHeight,
                          a.measureText();
          else if ("left" === this._position || "right" === this._position)
              if (g = n(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, d = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                  this.sessionVariables.labelFontSize = this.labelFontSize;
                  this.sessionVariables.labelMaxWidth = g;
                  this.sessionVariables.labelMaxHeight = d;
                  this.sessionVariables.labelAngle = n(this.sessionVariables.labelAngle) ?
                      0 : this.sessionVariables.labelAngle;
                  this.sessionVariables.labelWrap = this.labelWrap;
                  for (b = 0; b < this._labels.length; b++)
                      if (!this._labels[b].breaksLabelType) {
                          a = this._labels[b].textBlock;
                          z = a.measureText();
                          for (k = b + 1; k < this._labels.length; k++)
                              if (!this._labels[k].breaksLabelType) {
                                  e = this._labels[k].textBlock;
                                  e = e.measureText();
                                  break
                              } h.push(a.height);
                          this.sessionVariables.labelMaxHeight = Math.max.apply(Math, h);
                          c = g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                          Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                          Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                          n(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? n(this.options.labelWrap) ? n(this.options.labelWrap) && (n(this.options.labelMaxWidth) ? n(e) || (f = z.height + e.height >> 0, f - 2 * d > q && (q = f - 2 * d, f >= 2 * d && f < 2.4 * d ? (n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelFontSize =
                              n(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : f >= 2.4 * d && f < 2.8 * d ? (this.sessionVariables.labelMaxHeight = c, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = !0) : f >= 2.8 * d && f < 3.2 * d ? (this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelWrap = !0, n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ?
                              this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = n(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : f >= 3.2 * d && f < 3.6 * d ? (this.sessionVariables.labelMaxHeight = c, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelFontSize = this.labelFontSize) : f > 3.6 * d && f < 10 * d ? (n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ?
                              this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelAngle = n(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : f > 10 * d && f < 50 * d && (n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight =
                              d, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelAngle = n(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ?
                              this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : g, this.sessionVariables.labelMaxHeight = d) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? g : Math.min((c - d * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), d), n(this.options.labelWrap)) ? n(this.options.labelWrap) && (this.labelWrap && !n(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth >
                              this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = c) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : g, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d : c, n(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d : c, this.sessionVariables.labelWrap =
                              this.labelWrap, this.sessionVariables.labelMaxWidth = g) : (this.sessionVariables.labelMaxHeight = d, n(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap)
                      } for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle =
                      this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
              } else
                  for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = n(this.options.labelMaxWidth) ? n(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = g : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = n(this.options.labelFontSize) ? n(this.sessionVariables.labelFontSize) ?
                      this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = n(this.options.labelAngle) ? n(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = n(this.options.labelWrap) ? n(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = n(this.sessionVariables.labelMaxHeight) ?
                      this.sessionVariables.labelMaxHeight = d : this.sessionVariables.labelMaxHeight, a.measureText();
          for (b = 0; b < this.stripLines.length; b++) {
              var g = this.stripLines[b],
                  u;
              if ("outside" === g.labelPlacement) {
                  d = this.sessionVariables.labelMaxWidth;
                  if ("bottom" === this._position || "top" === this._position) u = n(g.options.labelWrap) ? this.sessionVariables.labelMaxHeight : g.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
                  if ("left" === this._position || "right" === this._position) u = n(g.options.labelWrap) ? this.sessionVariables.labelMaxHeight :
                      g.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
                  n(g.labelBackgroundColor) && (g.labelBackgroundColor = "#EEEEEE")
              } else d = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, u = n(g.options.labelWrap) || g.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, n(g.labelBackgroundColor) && (n(g.startValue) && 0 !== g.startValue ? g.labelBackgroundColor = x ? "transparent" : null : g.labelBackgroundColor =
                  "#EEEEEE");
              a = new la(this.ctx, {
                  x: 0,
                  y: 0,
                  backgroundColor: g.labelBackgroundColor,
                  borderColor: g.labelBorderColor,
                  borderThickness: g.labelBorderThickness,
                  cornerRadius: g.labelCornerRadius,
                  maxWidth: g.options.labelMaxWidth ? g.options.labelMaxWidth : d,
                  maxHeight: u,
                  angle: this.labelAngle,
                  text: g.labelFormatter ? g.labelFormatter({
                      chart: this.chart,
                      axis: this,
                      stripLine: g
                  }) : g.label,
                  textAlign: this.labelTextAlign,
                  fontSize: "outside" === g.labelPlacement ? g.options.labelFontSize ? g.labelFontSize : this.labelFontSize : g.labelFontSize,
                  fontFamily: "outside" === g.labelPlacement ? g.options.labelFontFamily ? g.labelFontFamily : this.labelFontFamily : g.labelFontFamily,
                  fontWeight: "outside" === g.labelPlacement ? g.options.labelFontWeight ? g.labelFontWeight : this.labelFontWeight : g.labelFontWeight,
                  fontColor: g.labelFontColor || g.color,
                  fontStyle: "outside" === g.labelPlacement ? g.options.labelFontStyle ? g.labelFontStyle : this.fontWeight : g.labelFontStyle,
                  textBaseline: "middle"
              });
              this._stripLineLabels.push({
                  position: g.value,
                  textBlock: a,
                  effectiveHeight: null,
                  stripLine: g
              })
          }
      };
      A.prototype.createLabelsAndCalculateWidth = function() {
          var a = 0,
              e = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var b = this.chart.isNavigator ? 0 : 5;
          if ("left" === this._position || "right" === this._position) {
              this.createLabels();
              if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
                  for (e = 0; e < this._labels.length; e++) {
                      var c = this._labels[e].textBlock,
                          h = c.measureText(),
                          g = 0,
                          g = 0 === this.labelAngle ? h.width : h.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (h.height - c.fontSize / 2) * Math.sin(Math.PI /
                              180 * Math.abs(this.labelAngle));
                      a < g && (a = g);
                      this._labels[e].effectiveWidth = g
                  }
              for (e = 0; e < this._stripLineLabels.length; e++) "outside" === this._stripLineLabels[e].stripLine.labelPlacement && (this._stripLineLabels[e].stripLine.value >= this.viewportMinimum && this._stripLineLabels[e].stripLine.value <= this.viewportMaximum) && (c = this._stripLineLabels[e].textBlock, h = c.measureText(), g = 0 === this.labelAngle ? h.width : h.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (h.height - c.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)),
                  a < g && (a = g), this._stripLineLabels[e].effectiveWidth = g)
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + b
      };
      A.prototype.createLabelsAndCalculateHeight = function() {
          var a = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var e, b = 0,
              c = this.chart.isNavigator ? 0 : 5;
          if ("bottom" === this._position || "top" === this._position) {
              this.createLabels();
              if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
                  for (b = 0; b < this._labels.length; b++) {
                      e =
                          this._labels[b].textBlock;
                      var h = e.measureText(),
                          g = 0,
                          g = 0 === this.labelAngle ? h.height : h.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (h.height - e.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                      a < g && (a = g);
                      this._labels[b].effectiveHeight = g
                  }
              for (b = 0; b < this._stripLineLabels.length; b++) "outside" === this._stripLineLabels[b].stripLine.labelPlacement && (this._stripLineLabels[b].stripLine.value >= this.viewportMinimum && this._stripLineLabels[b].stripLine.value <= this.viewportMaximum) && (e = this._stripLineLabels[b].textBlock,
                  h = e.measureText(), g = 0 === this.labelAngle ? h.height : h.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (h.height - e.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), a < g && (a = g), this._stripLineLabels[b].effectiveHeight = g)
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + c
      };
      A.setLayout = function(a, e, b, c, h, g) {
          var d, f, m, l, p = a[0] ? a[0].chart : e[0].chart,
              r = p.isNavigator ? 0 : 10,
              q = p._axes;
          if (a && 0 < a.length)
              for (var k = 0; k < a.length; k++) a[k] &&
                  a[k].calculateAxisParameters();
          if (e && 0 < e.length)
              for (k = 0; k < e.length; k++) e[k].calculateAxisParameters();
          if (b && 0 < b.length)
              for (k = 0; k < b.length; k++) b[k].calculateAxisParameters();
          if (c && 0 < c.length)
              for (k = 0; k < c.length; k++) c[k].calculateAxisParameters();
          for (k = 0; k < q.length; k++)
              if (q[k] && q[k].scaleBreaks && q[k].scaleBreaks._appliedBreaks.length)
                  for (var z = q[k].scaleBreaks._appliedBreaks, w = 0; w < z.length && !(z[w].startValue > q[k].viewportMaximum); w++) z[w].endValue < q[k].viewportMinimum || (n(q[k].scaleBreaks.firstBreakIndex) &&
                      (q[k].scaleBreaks.firstBreakIndex = w), z[w].startValue >= q[k].viewPortMinimum && (q[k].scaleBreaks.lastBreakIndex = w));
          for (var u = w = 0, t = 0, x = 0, v = 0, y = 0, A = 0, B, E, G = f = 0, J, R, O, z = J = R = O = !1, k = 0; k < q.length; k++) q[k] && q[k].title && (q[k]._titleTextBlock = new la(q[k].ctx, {
              text: q[k].title,
              horizontalAlign: "center",
              fontSize: q[k].titleFontSize,
              fontFamily: q[k].titleFontFamily,
              fontWeight: q[k].titleFontWeight,
              fontColor: q[k].titleFontColor,
              fontStyle: q[k].titleFontStyle,
              borderColor: q[k].titleBorderColor,
              borderThickness: q[k].titleBorderThickness,
              backgroundColor: q[k].titleBackgroundColor,
              cornerRadius: q[k].titleCornerRadius,
              textBaseline: "top"
          }));
          for (k = 0; k < q.length; k++)
              if (q[k].title) switch (q[k]._position) {
                  case "left":
                      q[k]._titleTextBlock.maxWidth = q[k].titleMaxWidth || g.height;
                      q[k]._titleTextBlock.maxHeight = q[k].titleWrap ? 0.8 * g.width : 1.5 * q[k].titleFontSize;
                      q[k]._titleTextBlock.angle = -90;
                      break;
                  case "right":
                      q[k]._titleTextBlock.maxWidth = q[k].titleMaxWidth || g.height;
                      q[k]._titleTextBlock.maxHeight = q[k].titleWrap ? 0.8 * g.width : 1.5 * q[k].titleFontSize;
                      q[k]._titleTextBlock.angle = 90;
                      break;
                  default:
                      q[k]._titleTextBlock.maxWidth = q[k].titleMaxWidth || g.width, q[k]._titleTextBlock.maxHeight = q[k].titleWrap ? 0.8 * g.height : 1.5 * q[k].titleFontSize, q[k]._titleTextBlock.angle = 0
              }
          if ("normal" === h) {
              for (var x = [], v = [], y = [], A = [], aa = [], N = [], M = [], L = []; 4 > w;) {
                  var H = 0,
                      S = 0,
                      ba = 0,
                      W = 0,
                      V = h = 0,
                      P = 0,
                      Y = 0,
                      X = 0,
                      Z = 0,
                      T = 0,
                      $ = 0;
                  if (b && 0 < b.length)
                      for (y = [], k = T = 0; k < b.length; k++) y.push(Math.ceil(b[k] ? b[k].createLabelsAndCalculateWidth() : 0)), T += y[k], P += b[k] && !p.isNavigator ? b[k].margin : 0;
                  else y.push(Math.ceil(b[0] ?
                      b[0].createLabelsAndCalculateWidth() : 0));
                  M.push(y);
                  if (c && 0 < c.length)
                      for (A = [], k = $ = 0; k < c.length; k++) A.push(Math.ceil(c[k] ? c[k].createLabelsAndCalculateWidth() : 0)), $ += A[k], Y += c[k] ? c[k].margin : 0;
                  else A.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
                  L.push(A);
                  d = Math.round(g.x1 + T + P);
                  m = Math.round(g.x2 - $ - Y > p.width - r ? p.width - r : g.x2 - $ - Y);
                  if (a && 0 < a.length)
                      for (x = [], k = X = 0; k < a.length; k++) a[k] && (a[k].lineCoordinates = {}), a[k].lineCoordinates.width = Math.abs(m - d), a[k].title && (a[k]._titleTextBlock.maxWidth =
                          0 < a[k].titleMaxWidth && a[k].titleMaxWidth < a[k].lineCoordinates.width ? a[k].titleMaxWidth : a[k].lineCoordinates.width), x.push(Math.ceil(a[k] ? a[k].createLabelsAndCalculateHeight() : 0)), X += x[k], h += a[k] && !p.isNavigator ? a[k].margin : 0;
                  else x.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
                  aa.push(x);
                  if (e && 0 < e.length)
                      for (v = [], k = Z = 0; k < e.length; k++) e[k] && (e[k].lineCoordinates = {}), e[k].lineCoordinates.width = Math.abs(m - d), e[k].title && (e[k]._titleTextBlock.maxWidth = 0 < e[k].titleMaxWidth && e[k].titleMaxWidth <
                          e[k].lineCoordinates.width ? e[k].titleMaxWidth : e[k].lineCoordinates.width), v.push(Math.ceil(e[k] ? e[k].createLabelsAndCalculateHeight() : 0)), Z += v[k], V += e[k] && !p.isNavigator ? e[k].margin : 0;
                  else v.push(Math.ceil(e[0] ? e[0].createLabelsAndCalculateHeight() : 0));
                  N.push(v);
                  if (a && 0 < a.length)
                      for (k = 0; k < a.length; k++) a[k] && (a[k].lineCoordinates.x1 = d, m = Math.round(g.x2 - $ - Y > p.width - r ? p.width - r : g.x2 - $ - Y), a[k]._labels && 1 < a[k]._labels.length && (f = l = 0, l = a[k]._labels[1], f = "dateTime" === a[k].valueType ? a[k]._labels[a[k]._labels.length -
                          2] : a[k]._labels[a[k]._labels.length - 1], u = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - f.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)), t = f.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(f.textBlock.angle)) + (f.textBlock.height - f.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(f.textBlock.angle))), !a[k] || (!a[k].labelAutoFit || n(B) || n(E) || p.isNavigator || p.stockChart) || (f = 0, 0 < a[k].labelAngle ? E + t > m && (f += 0 < a[k].labelAngle ? E + t - m - $ : 0) :
                          0 > a[k].labelAngle ? B - u < d && B - u < a[k].viewportMinimum && (G = d - (P + a[k].tickLength + y + B - u + a[k].labelFontSize / 2)) : 0 === a[k].labelAngle && (E + t > m && (f = E + t / 2 - m - $), B - u < d && B - u < a[k].viewportMinimum && (G = d - P - a[k].tickLength - y - B + u / 2)), a[k].viewportMaximum === a[k].maximum && a[k].viewportMinimum === a[k].minimum && 0 < a[k].labelAngle && 0 < f ? m -= f : a[k].viewportMaximum === a[k].maximum && a[k].viewportMinimum === a[k].minimum && 0 > a[k].labelAngle && 0 < G ? d += G : a[k].viewportMaximum === a[k].maximum && a[k].viewportMinimum === a[k].minimum && 0 === a[k].labelAngle &&
                          (0 < G && (d += G), 0 < f && (m -= f))), p.panEnabled ? X = n(p.sessionVariables.axisX.height) ? p.sessionVariables.axisX.height = X : p.sessionVariables.axisX.height : p.sessionVariables.axisX.height = X, f = Math.round(g.y2 - X - h + H), l = Math.round(g.y2), a[k].lineCoordinates.x2 = m, a[k].lineCoordinates.width = m - d, a[k].lineCoordinates.y1 = f, a[k].lineCoordinates.y2 = f + a[k].lineThickness / 2, "inside" === a[k].labelPlacement && 0 < k && (a[k].lineCoordinates.y1 = a[k].lineCoordinates.y1 + x[k] - (a[k]._titleTextBlock ? a[k]._titleTextBlock.height : 0) - ("inside" ===
                          a[k].tickPlacement ? a[k].tickLength : 0), a[k].lineCoordinates.y2 = a[k].lineCoordinates.y1 + a[k].lineThickness / 2), a[k].bounds = {
                          x1: d,
                          y1: f,
                          x2: m,
                          y2: l - (X + h - x[k] - H),
                          width: m - d,
                          height: l - f
                      }), H += x[k] + a[k].margin;
                  if (e && 0 < e.length)
                      for (k = 0; k < e.length; k++) e[k].lineCoordinates.x1 = Math.round(g.x1 + T + P), e[k].lineCoordinates.x2 = Math.round(g.x2 - $ - Y > p.width - r ? p.width - r : g.x2 - $ - Y), e[k].lineCoordinates.width = Math.abs(m - d), e[k]._labels && 1 < e[k]._labels.length && (l = e[k]._labels[1], f = "dateTime" === e[k].valueType ? e[k]._labels[e[k]._labels.length -
                              2] : e[k]._labels[e[k]._labels.length - 1], u = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - f.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)), t = f.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(f.textBlock.angle)) + (f.textBlock.height - f.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(f.textBlock.angle))), p.panEnabled ? Z = n(p.sessionVariables.axisX2.height) ? p.sessionVariables.axisX2.height = Z : p.sessionVariables.axisX2.height : p.sessionVariables.axisX2.height =
                          Z, f = Math.round(g.y1), l = Math.round(g.y2 + e[k].margin), e[k].lineCoordinates.y1 = f + Z + V - S, e[k].lineCoordinates.y2 = f, "inside" === e[k].labelPlacement && 0 < k && (e[k].lineCoordinates.y1 = e[k - 1].bounds.y1 - v[k] + (e[k]._titleTextBlock ? e[k]._titleTextBlock.height : 0)), e[k].bounds = {
                              x1: d,
                              y1: f + (Z + V - v[k] - S),
                              x2: m,
                              y2: l,
                              width: m - d,
                              height: l - f
                          }, S += v[k] + e[k].margin;
                  if (b && 0 < b.length)
                      for (k = 0; k < b.length; k++) P = p.isNavigator ? 0 : 10, b[k] && (d = Math.round(a[0] ? a[0].lineCoordinates.x1 : e[0].lineCoordinates.x1), P = b[k]._labels && 0 < b[k]._labels.length ?
                          b[k]._labels[b[k]._labels.length - 1].textBlock.height / 2 : r, f = Math.round(g.y1 + Z + V < Math.max(P, r) ? Math.max(P, r) : g.y1 + Z + V), m = Math.round(a[0] ? a[0].lineCoordinates.x1 : e[0].lineCoordinates.x1), P = 0 < a.length ? 0 : b[k]._labels && 0 < b[k]._labels.length ? b[k]._labels[0].textBlock.height / 2 : r, l = Math.round(g.y2 - X - h - P), b[k].lineCoordinates = {
                              x1: d - ba,
                              y1: f,
                              x2: m - ba,
                              y2: l,
                              height: Math.abs(l - f)
                          }, "inside" === b[k].labelPlacement && 0 < k && (b[k].lineCoordinates.x1 = b[k].lineCoordinates.x1 - (y[k] - b[k]._titleTextBlock ? b[k]._titleTextBlock.height :
                              0) + ("outside" === b[k].tickPlacement ? b[k].tickLength : 0), b[k].lineCoordinates.x2 = b[k].lineCoordinates.x1 + b[k].lineThickness / 2), b[k].bounds = {
                              x1: d - (y[k] + ba),
                              y1: f,
                              x2: m,
                              y2: l,
                              width: m - d,
                              height: l - f
                          }, b[k].title && (b[k]._titleTextBlock.maxWidth = 0 < b[k].titleMaxWidth && b[k].titleMaxWidth < b[k].lineCoordinates.height ? b[k].titleMaxWidth : b[k].lineCoordinates.height), ba += y[k] + b[k].margin);
                  if (c && 0 < c.length)
                      for (k = 0; k < c.length; k++) c[k] && (d = Math.round(a[0] ? a[0].lineCoordinates.x2 : e[0].lineCoordinates.x2), m = Math.round(d),
                          P = c[k]._labels && 0 < c[k]._labels.length ? c[k]._labels[c[k]._labels.length - 1].textBlock.height / 2 : 0, f = Math.round(g.y1 + Z + V < Math.max(P, r) ? Math.max(P, r) : g.y1 + Z + V), P = 0 < a.length ? 0 : c[k]._labels && 0 < c[k]._labels.length ? c[k]._labels[0].textBlock.height / 2 : 0, l = Math.round(g.y2 - (X + h + P)), c[k].lineCoordinates = {
                              x1: d + W,
                              y1: f,
                              x2: d + W,
                              y2: l,
                              height: Math.abs(l - f)
                          }, "inside" === c[k].labelPlacement && 0 < k && (c[k].lineCoordinates.x1 = c[k].lineCoordinates.x1 + (A[k] - c[k]._titleTextBlock ? c[k]._titleTextBlock.height : 0) - ("outside" === c[k].tickPlacement ?
                              c[k].tickLength : 0) - 2, c[k].lineCoordinates.x2 = c[k].lineCoordinates.x1 + c[k].lineThickness / 2), c[k].bounds = {
                              x1: d,
                              y1: f,
                              x2: m + (A[k] + W),
                              y2: l,
                              width: m - d,
                              height: l - f
                          }, c[k].title && (c[k]._titleTextBlock.maxWidth = 0 < c[k].titleMaxWidth && c[k].titleMaxWidth < c[k].lineCoordinates.height ? c[k].titleMaxWidth : c[k].lineCoordinates.height), W += A[k] + c[k].margin);
                  if (a && 0 < a.length)
                      for (k = 0; k < a.length; k++) a[k] && (a[k].calculateValueToPixelConversionParameters(), a[k].calculateBreaksSizeInValues(), a[k]._labels && 1 < a[k]._labels.length &&
                          (B = (a[k].logarithmic ? Math.log(a[k]._labels[1].position / a[k].viewportMinimum) / a[k].conversionParameters.lnLogarithmBase : a[k]._labels[1].position - a[k].viewportMinimum) * Math.abs(a[k].conversionParameters.pixelPerUnit) + a[k].lineCoordinates.x1, d = a[k]._labels[a[k]._labels.length - ("dateTime" === a[k].valueType ? 2 : 1)].position, d = a[k].getApparentDifference(a[k].viewportMinimum, d), E = a[k].logarithmic ? (1 < d ? Math.log(d) / a[k].conversionParameters.lnLogarithmBase * Math.abs(a[k].conversionParameters.pixelPerUnit) : 0) +
                              a[k].lineCoordinates.x1 : (0 < d ? d * Math.abs(a[k].conversionParameters.pixelPerUnit) : 0) + a[k].lineCoordinates.x1));
                  if (e && 0 < e.length)
                      for (k = 0; k < e.length; k++) e[k].calculateValueToPixelConversionParameters(), e[k].calculateBreaksSizeInValues(), e[k]._labels && 1 < e[k]._labels.length && (B = (e[k].logarithmic ? Math.log(e[k]._labels[1].position / e[k].viewportMinimum) / e[k].conversionParameters.lnLogarithmBase : e[k]._labels[1].position - e[k].viewportMinimum) * Math.abs(e[k].conversionParameters.pixelPerUnit) + e[k].lineCoordinates.x1,
                          d = e[k]._labels[e[k]._labels.length - ("dateTime" === e[k].valueType ? 2 : 1)].position, d = e[k].getApparentDifference(e[k].viewportMinimum, d), E = e[k].logarithmic ? (1 < d ? Math.log(d) / e[k].conversionParameters.lnLogarithmBase * Math.abs(e[k].conversionParameters.pixelPerUnit) : 0) + e[k].lineCoordinates.x1 : (0 < d ? d * Math.abs(e[k].conversionParameters.pixelPerUnit) : 0) + e[k].lineCoordinates.x1);
                  for (k = 0; k < q.length; k++) "axisY" === q[k].type && (q[k].calculateValueToPixelConversionParameters(), q[k].calculateBreaksSizeInValues());
                  if (0 <
                      w) {
                      if (a && 0 < a.length)
                          for (k = 0; k < a.length; k++) z = aa[w - 1][k] === aa[w][k] ? !0 : !1;
                      else z = !0;
                      if (e && 0 < e.length)
                          for (k = 0; k < e.length; k++) J = N[w - 1][k] === N[w][k] ? !0 : !1;
                      else J = !0;
                      if (b && 0 < b.length)
                          for (k = 0; k < b.length; k++) R = M[w - 1][k] === M[w][k] ? !0 : !1;
                      else R = !0;
                      if (c && 0 < c.length)
                          for (k = 0; k < c.length; k++) O = L[w - 1][k] === L[w][k] ? !0 : !1;
                      else O = !0
                  }
                  if (z && J && R && O) break;
                  w++
              }
              if (a && 0 < a.length)
                  for (k = 0; k < a.length; k++) a[k].calculateStripLinesThicknessInValues(), a[k].calculateBreaksInPixels();
              if (e && 0 < e.length)
                  for (k = 0; k < e.length; k++) e[k].calculateStripLinesThicknessInValues(),
                      e[k].calculateBreaksInPixels();
              if (b && 0 < b.length)
                  for (k = 0; k < b.length; k++) b[k].calculateStripLinesThicknessInValues(), b[k].calculateBreaksInPixels();
              if (c && 0 < c.length)
                  for (k = 0; k < c.length; k++) c[k].calculateStripLinesThicknessInValues(), c[k].calculateBreaksInPixels()
          } else {
              r = [];
              B = [];
              G = [];
              u = [];
              E = [];
              t = [];
              aa = [];
              for (N = []; 4 > w;) {
                  X = W = S = ba = Y = P = V = h = L = M = H = Z = 0;
                  if (a && 0 < a.length)
                      for (G = [], k = W = 0; k < a.length; k++) G.push(Math.ceil(a[k] ? a[k].createLabelsAndCalculateWidth() : 0)), W += G[k], h += a[k] && !p.isNavigator ? a[k].margin : 0;
                  else G.push(Math.ceil(a[0] ?
                      a[0].createLabelsAndCalculateWidth() : 0));
                  aa.push(G);
                  if (e && 0 < e.length)
                      for (u = [], k = X = 0; k < e.length; k++) u.push(Math.ceil(e[k] ? e[k].createLabelsAndCalculateWidth() : 0)), X += u[k], V += e[k] ? e[k].margin : 0;
                  else u.push(Math.ceil(e[0] ? e[0].createLabelsAndCalculateWidth() : 0));
                  N.push(u);
                  if (b && 0 < b.length)
                      for (k = 0; k < b.length; k++) b[k].lineCoordinates = {}, d = Math.round(g.x1 + W + h), m = Math.round(g.x2 - X - V > p.width - 10 ? p.width - 10 : g.x2 - X - V), b[k].labelAutoFit && !n(x) && (0 < !a.length && (d = 0 > b[k].labelAngle ? Math.max(d, x) : 0 === b[k].labelAngle ?
                          Math.max(d, x / 2) : d), 0 < !e.length && (m = 0 < b[k].labelAngle ? m - v / 2 : 0 === b[k].labelAngle ? m - v / 2 : m)), b[k].lineCoordinates.x1 = d, b[k].lineCoordinates.x2 = m, b[k].lineCoordinates.width = Math.abs(m - d), b[k].title && (b[k]._titleTextBlock.maxWidth = 0 < b[k].titleMaxWidth && b[k].titleMaxWidth < b[k].lineCoordinates.width ? b[k].titleMaxWidth : b[k].lineCoordinates.width);
                  if (c && 0 < c.length)
                      for (k = 0; k < c.length; k++) c[k].lineCoordinates = {}, d = Math.round(g.x1 + W + h), m = Math.round(g.x2 - X - V > c[k].chart.width - 10 ? c[k].chart.width - 10 : g.x2 - X - V), c[k] &&
                          c[k].labelAutoFit && !n(y) && (0 < !a.length && (d = 0 < c[k].labelAngle ? Math.max(d, y) : 0 === c[k].labelAngle ? Math.max(d, y / 2) : d), 0 < !e.length && (m -= A / 2)), c[k].lineCoordinates.x1 = d, c[k].lineCoordinates.x2 = m, c[k].lineCoordinates.width = Math.abs(m - d), c[k].title && (c[k]._titleTextBlock.maxWidth = 0 < c[k].titleMaxWidth && c[k].titleMaxWidth < c[k].lineCoordinates.width ? c[k].titleMaxWidth : c[k].lineCoordinates.width);
                  if (b && 0 < b.length)
                      for (r = [], k = ba = 0; k < b.length; k++) r.push(Math.ceil(b[k] ? b[k].createLabelsAndCalculateHeight() : 0)), ba +=
                          r[k] + b[k].margin, P += b[k].margin;
                  else r.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
                  E.push(r);
                  if (c && 0 < c.length)
                      for (B = [], k = S = 0; k < c.length; k++) B.push(Math.ceil(c[k] ? c[k].createLabelsAndCalculateHeight() : 0)), S += B[k], Y += c[k].margin;
                  else B.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
                  t.push(B);
                  if (b && 0 < b.length)
                      for (k = 0; k < b.length; k++) 0 < b[k]._labels.length && (l = b[k]._labels[0], f = b[k]._labels[b[k]._labels.length - 1], x = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) +
                          (l.textBlock.height - f.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)), v = f.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(f.textBlock.angle)) + (f.textBlock.height - f.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(f.textBlock.angle)));
                  if (c && 0 < c.length)
                      for (k = 0; k < c.length; k++) c[k] && 0 < c[k]._labels.length && (l = c[k]._labels[0], f = c[k]._labels[c[k]._labels.length - 1], y = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - f.textBlock.fontSize / 2) * Math.sin(Math.PI /
                          180 * Math.abs(l.textBlock.angle)), A = f.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(f.textBlock.angle)) + (f.textBlock.height - f.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(f.textBlock.angle)));
                  if (p.panEnabled)
                      for (k = 0; k < b.length; k++) r[k] = n(p.sessionVariables.axisY.height) ? p.sessionVariables.axisY.height = r[k] : p.sessionVariables.axisY.height;
                  else
                      for (k = 0; k < b.length; k++) p.sessionVariables.axisY.height = r[k];
                  if (b && 0 < b.length)
                      for (k = b.length - 1; 0 <= k; k--) f = Math.round(g.y2), l = Math.round(g.y2 > b[k].chart.height ?
                          b[k].chart.height : g.y2), b[k].lineCoordinates.y1 = f - (r[k] + b[k].margin + Z), b[k].lineCoordinates.y2 = f - (r[k] + b[k].margin + Z), "inside" === b[k].labelPlacement && 0 < k && (b[k].lineCoordinates.y1 = b[k].lineCoordinates.y1 + r[k] - (b[k]._titleTextBlock ? b[k]._titleTextBlock.height : 0) - ("inside" === b[k].tickPlacement ? b[k].tickLength : 0), b[k].lineCoordinates.y2 = b[k].lineCoordinates.y1 + b[k].lineThickness / 2), b[k].bounds = {
                          x1: d,
                          y1: f - (r[k] + Z + b[k].margin),
                          x2: m,
                          y2: l - (Z + b[k].margin),
                          width: m - d,
                          height: r[k]
                      }, b[k].title && (b[k]._titleTextBlock.maxWidth =
                          0 < b[k].titleMaxWidth && b[k].titleMaxWidth < b[k].lineCoordinates.width ? b[k].titleMaxWidth : b[k].lineCoordinates.width), Z += r[k] + b[k].margin;
                  if (c && 0 < c.length)
                      for (k = c.length - 1; 0 <= k; k--) c[k] && (f = Math.round(g.y1), l = Math.round(g.y1 + (B[k] + c[k].margin + H)), c[k].lineCoordinates.y1 = l, c[k].lineCoordinates.y2 = l, "inside" === c[k].labelPlacement && 0 < k && (c[k].lineCoordinates.y1 = l - B[k] + (c[k]._titleTextBlock ? c[k]._titleTextBlock.height : 0)), c[k].bounds = {
                          x1: d,
                          y1: f + (c[k].margin + H),
                          x2: m,
                          y2: l,
                          width: m - d,
                          height: S
                      }, c[k].title && (c[k]._titleTextBlock.maxWidth =
                          0 < c[k].titleMaxWidth && c[k].titleMaxWidth < c[k].lineCoordinates.width ? c[k].titleMaxWidth : c[k].lineCoordinates.width), H += B[k] + c[k].margin);
                  if (a && 0 < a.length)
                      for (k = 0; k < a.length; k++) {
                          P = a[k]._labels && 0 < a[k]._labels.length ? a[k]._labels[0].textBlock.fontSize / 2 : 0;
                          d = Math.round(g.x1 + h);
                          f = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : g.y1 < Math.max(P, 10) ? Math.max(P, 10) : g.y1) : g.y1 < Math.max(P, 10) ? Math.max(P, 10) : g.y1;
                          m = Math.round(g.x1 + W + h);
                          l = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 : g.y2 - ba > p.height -
                              Math.max(P, 10) ? p.height - Math.max(P, 10) : g.y2 - ba) : g.y2 > p.height - Math.max(P, 10) ? p.height - Math.max(P, 10) : g.y2;
                          if (b && 0 < b.length)
                              for (P = 0; P < b.length; P++) b[P] && b[P].labelAutoFit && (m = 0 > b[P].labelAngle ? Math.max(m, x) : 0 === b[P].labelAngle ? Math.max(m, x / 2) : m, d = 0 > b[P].labelAngle || 0 === b[P].labelAngle ? m - W : d);
                          if (c && 0 < c.length)
                              for (P = 0; P < c.length; P++) c[P] && c[P].labelAutoFit && (m = c[P].lineCoordinates.x1, d = m - W);
                          a[k].lineCoordinates = {
                              x1: m - M,
                              y1: f,
                              x2: m - M,
                              y2: l,
                              height: Math.abs(l - f)
                          };
                          "inside" === a[k].labelPlacement && 0 < k && (a[k].lineCoordinates.x1 =
                              a[k].lineCoordinates.x1 - (G[k] - (a[k]._titleTextBlock ? a[k]._titleTextBlock.height : 0)) + ("outside" === a[k].tickPlacement ? a[k].tickLength : 0), a[k].lineCoordinates.x2 = a[k].lineCoordinates.x1 + a[k].lineThickness / 2);
                          a[k].bounds = {
                              x1: m - (G[k] + M),
                              y1: f,
                              x2: m,
                              y2: l,
                              width: m - d,
                              height: l - f
                          };
                          a[k].title && (a[k]._titleTextBlock.maxWidth = 0 < a[k].titleMaxWidth && a[k].titleMaxWidth < a[k].lineCoordinates.height ? a[k].titleMaxWidth : a[k].lineCoordinates.height);
                          a[k].calculateValueToPixelConversionParameters();
                          a[k].calculateBreaksSizeInValues();
                          M += G[k] + a[k].margin
                      }
                  if (e && 0 < e.length)
                      for (k = 0; k < e.length; k++) {
                          P = e[k]._labels && 0 < e[k]._labels.length ? e[k]._labels[0].textBlock.fontSize / 2 : 0;
                          d = Math.round(g.x1 - h);
                          f = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : g.y1 < Math.max(P, 10) ? Math.max(P, 10) : g.y1) : g.y1 < Math.max(P, 10) ? Math.max(P, 10) : g.y1;
                          m = Math.round(g.x2 - X - V);
                          l = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 : g.y2 - ba > p.height - Math.max(P, 10) ? p.height - Math.max(P, 10) : g.y2 - ba) : g.y2 > p.height - Math.max(P, 10) ? p.height - Math.max(P, 10) : g.y2;
                          if (b &&
                              0 < b.length)
                              for (P = 0; P < b.length; P++) b[P] && b[P].labelAutoFit && (m = 0 > b[P].labelAngle ? Math.max(m, x) : 0 === b[P].labelAngle ? Math.max(m, x / 2) : m, d = 0 > b[P].labelAngle || 0 === b[P].labelAngle ? m - X : d);
                          if (c && 0 < c.length)
                              for (P = 0; P < c.length; P++) c[P] && c[P].labelAutoFit && (m = c[P].lineCoordinates.x2, d = m - X);
                          e[k].lineCoordinates = {
                              x1: m + L,
                              y1: f,
                              x2: m + L,
                              y2: l,
                              height: Math.abs(l - f)
                          };
                          "inside" === e[k].labelPlacement && 0 < k && (e[k].lineCoordinates.x1 = e[k].lineCoordinates.x1 + (u[k] - (e[k]._titleTextBlock ? e[k]._titleTextBlock.height : 0) - 2) - ("outside" ===
                              e[k].tickPlacement ? e[k].tickLength : 0), e[k].lineCoordinates.x2 = e[k].lineCoordinates.x1 + e[k].lineThickness / 2);
                          e[k].bounds = {
                              x1: e[k].lineCoordinates.x1,
                              y1: f,
                              x2: m + u[k] + L,
                              y2: l,
                              width: m - d,
                              height: l - f
                          };
                          e[k].title && (e[k]._titleTextBlock.maxWidth = 0 < e[k].titleMaxWidth && e[k].titleMaxWidth < e[k].lineCoordinates.height ? e[k].titleMaxWidth : e[k].lineCoordinates.height);
                          e[k].calculateValueToPixelConversionParameters();
                          e[k].calculateBreaksSizeInValues();
                          L += u[k] + e[k].margin
                      }
                  for (k = 0; k < q.length; k++) "axisY" === q[k].type && (q[k].calculateValueToPixelConversionParameters(),
                      q[k].calculateBreaksSizeInValues());
                  if (0 < w) {
                      if (a && 0 < a.length)
                          for (k = 0; k < a.length; k++) z = aa[w - 1][k] === aa[w][k] ? !0 : !1;
                      else z = !0;
                      if (e && 0 < e.length)
                          for (k = 0; k < e.length; k++) J = N[w - 1][k] === N[w][k] ? !0 : !1;
                      else J = !0;
                      if (b && 0 < b.length)
                          for (k = 0; k < b.length; k++) R = E[w - 1][k] === E[w][k] ? !0 : !1;
                      else R = !0;
                      if (c && 0 < c.length)
                          for (k = 0; k < c.length; k++) O = t[w - 1][k] === t[w][k] ? !0 : !1;
                      else O = !0
                  }
                  if (z && J && R && O) break;
                  w++
              }
              if (b && 0 < b.length)
                  for (k = 0; k < b.length; k++) b[k].calculateStripLinesThicknessInValues(), b[k].calculateBreaksInPixels();
              if (c &&
                  0 < c.length)
                  for (k = 0; k < c.length; k++) c[k].calculateStripLinesThicknessInValues(), c[k].calculateBreaksInPixels();
              if (a && 0 < a.length)
                  for (k = 0; k < a.length; k++) a[k].calculateStripLinesThicknessInValues(), a[k].calculateBreaksInPixels();
              if (e && 0 < e.length)
                  for (k = 0; k < e.length; k++) e[k].calculateStripLinesThicknessInValues(), e[k].calculateBreaksInPixels()
          }
      };
      A.render = function(a, e, b, c, h) {
          var d = a[0] ? a[0].chart : e[0].chart;
          h = d.ctx;
          var f = d._axes;
          d.alignVerticalAxes && d.alignVerticalAxes();
          h.save();
          h.beginPath();
          a[0] && h.rect(5,
              a[0].bounds.y1, a[0].chart.width - 10, a[0].bounds.height);
          e[0] && h.rect(5, e[e.length - 1].bounds.y1, e[0].chart.width - 10, e[0].bounds.height);
          h.clip();
          if (a && 0 < a.length)
              for (var s = 0; s < a.length; s++) a[s].renderLabelsTicksAndTitle();
          if (e && 0 < e.length)
              for (s = 0; s < e.length; s++) e[s].renderLabelsTicksAndTitle();
          h.restore();
          if (b && 0 < b.length)
              for (s = 0; s < b.length; s++) b[s].renderLabelsTicksAndTitle();
          if (c && 0 < c.length)
              for (s = 0; s < c.length; s++) c[s].renderLabelsTicksAndTitle();
          d.preparePlotArea();
          d = d.plotArea;
          h.save();
          h.beginPath();
          h.rect(d.x1, d.y1, Math.abs(d.x2 - d.x1), Math.abs(d.y2 - d.y1));
          h.clip();
          if (a && 0 < a.length)
              for (s = 0; s < f.length; s++) f[s].renderStripLinesOfThicknessType("value");
          if (e && 0 < e.length)
              for (s = 0; s < e.length; s++) e[s].renderStripLinesOfThicknessType("value");
          if (b && 0 < b.length)
              for (s = 0; s < b.length; s++) b[s].renderStripLinesOfThicknessType("value");
          if (c && 0 < c.length)
              for (s = 0; s < c.length; s++) c[s].renderStripLinesOfThicknessType("value");
          if (a && 0 < a.length)
              for (s = 0; s < a.length; s++) a[s].renderInterlacedColors();
          if (e && 0 < e.length)
              for (s =
                  0; s < e.length; s++) e[s].renderInterlacedColors();
          if (b && 0 < b.length)
              for (s = 0; s < b.length; s++) b[s].renderInterlacedColors();
          if (c && 0 < c.length)
              for (s = 0; s < c.length; s++) c[s].renderInterlacedColors();
          h.restore();
          if (a && 0 < a.length)
              for (s = 0; s < a.length; s++) a[s].renderGrid(), x && (a[s].createMask(), a[s].renderBreaksBackground());
          if (e && 0 < e.length)
              for (s = 0; s < e.length; s++) e[s].renderGrid(), x && (e[s].createMask(), e[s].renderBreaksBackground());
          if (b && 0 < b.length)
              for (s = 0; s < b.length; s++) b[s].renderGrid(), x && (b[s].createMask(),
                  b[s].renderBreaksBackground());
          if (c && 0 < c.length)
              for (s = 0; s < c.length; s++) c[s].renderGrid(), x && (c[s].createMask(), c[s].renderBreaksBackground());
          if (a && 0 < a.length)
              for (s = 0; s < a.length; s++) a[s].renderAxisLine();
          if (e && 0 < e.length)
              for (s = 0; s < e.length; s++) e[s].renderAxisLine();
          if (b && 0 < b.length)
              for (s = 0; s < b.length; s++) b[s].renderAxisLine();
          if (c && 0 < c.length)
              for (s = 0; s < c.length; s++) c[s].renderAxisLine();
          if (a && 0 < a.length)
              for (s = 0; s < a.length; s++) a[s].renderStripLinesOfThicknessType("pixel");
          if (e && 0 < e.length)
              for (s = 0; s <
                  e.length; s++) e[s].renderStripLinesOfThicknessType("pixel");
          if (b && 0 < b.length)
              for (s = 0; s < b.length; s++) b[s].renderStripLinesOfThicknessType("pixel");
          if (c && 0 < c.length)
              for (s = 0; s < c.length; s++) c[s].renderStripLinesOfThicknessType("pixel")
      };
      A.prototype.calculateStripLinesThicknessInValues = function() {
          for (var a = 0; a < this.stripLines.length; a++)
              if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
                  var e = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue),
                      b = Math.max(this.stripLines[a].startValue,
                          this.stripLines[a].endValue),
                      e = this.getApparentDifference(e, b);
                  this.stripLines[a].value = this.logarithmic ? this.stripLines[a].value * Math.sqrt(Math.log(this.stripLines[a].endValue / this.stripLines[a].startValue) / Math.log(e)) : this.stripLines[a].value + (Math.abs(this.stripLines[a].endValue - this.stripLines[a].startValue) - e) / 2;
                  this.stripLines[a].thickness = e;
                  this.stripLines[a]._thicknessType = "value"
              }
      };
      A.prototype.calculateBreaksSizeInValues = function() {
          for (var a = "left" === this._position || "right" === this._position ?
                  this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], b = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), c = this.scaleBreaks && !n(this.scaleBreaks.options.spacing), h, d = 0; d < e.length; d++) h = c || !n(e[d].options.spacing), e[d].spacing = Xa(e[d].spacing, a, 8, h ? 0.1 * a : 8, h ? 0 : 3) <<
              0, e[d].size = 0 > e[d].spacing ? 0 : Math.abs(e[d].spacing / b), this.logarithmic && (e[d].size = Math.pow(this.logarithmBase, e[d].size))
      };
      A.prototype.calculateBreaksInPixels = function() {
          if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
              var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
              a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
              for (var e = 0; e < a.length && !(a[e].startValue > this.conversionParameters.maximum); e++) a[e].endValue < this.conversionParameters.minimum ||
                  (n(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = e), a[e].startValue >= this.conversionParameters.minimum && (a[e].startPixel = this.convertValueToPixel(a[e].startValue), this.scaleBreaks.lastBreakIndex = e), a[e].endValue <= this.conversionParameters.maximum && (a[e].endPixel = this.convertValueToPixel(a[e].endValue)))
          }
      };
      A.prototype.renderLabelsTicksAndTitle = function() {
          var a = this,
              e = !1,
              b = 0,
              c = 0,
              h = 1,
              d = 0;
          0 !== this.labelAngle && 360 !== this.labelAngle && (h = 1.2);
          if ("undefined" === typeof this.options.interval) {
              if ("bottom" ===
                  this._position || "top" === this._position)
                  if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                      for (var b = [], h = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, f, s = this.viewportMaximum, m = this.lineCoordinates.width / Math.log(this.range), l = this._labels.length - 1; 0 <= l; l--) {
                          r = this._labels[l];
                          if (r.position < this.viewportMinimum) break;
                          r.position > this.viewportMaximum || !(l === this._labels.length - 1 || f < Math.log(s / r.position) * m / h) || (b.push(r), s = r.position, f = r.textBlock.width * Math.abs(Math.cos(Math.PI /
                              180 * this.labelAngle)) + r.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                      }
                      this._labels = b
                  } else {
                      for (l = 0; l < this._labels.length; l++) r = this._labels[l], r.position < this.viewportMinimum || (f = r.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + r.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += f);
                      b > this.lineCoordinates.width * h && this.labelAutoFit && (e = !0)
                  } if ("left" === this._position || "right" === this._position)
                  if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                      for (var b = [], p, s = this.viewportMaximum, m = this.lineCoordinates.height / Math.log(this.range), l = this._labels.length - 1; 0 <= l; l--) {
                          r = this._labels[l];
                          if (r.position < this.viewportMinimum) break;
                          r.position > this.viewportMaximum || !(l === this._labels.length - 1 || p < Math.log(s / r.position) * m) || (b.push(r), s = r.position, p = r.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + r.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                      }
                      this._labels = b
                  } else {
                      for (l = 0; l < this._labels.length; l++) r = this._labels[l], r.position <
                          this.viewportMinimum || (p = r.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + r.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += p);
                      c > this.lineCoordinates.height * h && this.labelAutoFit && (e = !0)
                  }
          }
          this.logarithmic && (!this.equidistantInterval && this.labelAutoFit) && this._labels.sort(function(a, b) {
              return a.position - b.position
          });
          var l = 0,
              r, q;
          if ("bottom" === this._position) {
              for (l = 0; l < this._labels.length; l++) r = this._labels[l], r.position < this.viewportMinimum || r.position > this.viewportMaximum ||
                  (q = this.getPixelCoordinatesOnAxis(r.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c, q.y << 0), this.ctx.lineTo(c, q.y + this.tickLength << 0), this.ctx.stroke()), e && 0 !== d++ % 2 && this.labelAutoFit || (0 === r.textBlock.angle ? (q.x -= r.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + r.textBlock.height -
                      r.textBlock.fontSize / 2) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + r.textBlock.fontSize / 2 + 5) : (q.x = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.x : q.x - r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x - (0 > this.labelAngle ? r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - Math.abs(r.textBlock.width * Math.sin(Math.PI /
                      180 * this.labelAngle) + 5) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + Math.abs(0 > this.labelAngle ? r.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), r.textBlock.x = q.x, r.textBlock.y = q.y));
              "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                  for (l = 0; l < a._labels.length; l++)
                      if (r = a._labels[l], !(r.position < a.viewportMinimum || r.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(r.position), a.tickThickness)) {
                          a.ctx.lineWidth = a.tickThickness;
                          a.ctx.strokeStyle =
                              a.tickColor;
                          var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                          a.ctx.save();
                          a.ctx.beginPath();
                          a.ctx.moveTo(b, q.y << 0);
                          a.ctx.lineTo(b, q.y - a.tickLength << 0);
                          a.ctx.stroke();
                          a.ctx.restore()
                      }
              }, this);
              this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height - 3, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
          } else if ("top" ===
              this._position) {
              for (l = 0; l < this._labels.length; l++) r = this._labels[l], r.position < this.viewportMinimum || r.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(r.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c, q.y << 0), this.ctx.lineTo(c, q.y - this.tickLength << 0), this.ctx.stroke()), e && 0 !== d++ % 2 && this.labelAutoFit || (0 === r.textBlock.angle ?
                  (q.x -= r.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + r.textBlock.height - r.textBlock.fontSize / 2)) : (q.x = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.x : q.x - r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x + (r.textBlock.height - this.labelFontSize) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) :
                      0), q.y = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - r.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + ((r.textBlock.height - r.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? r.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))), r.textBlock.x = q.x, r.textBlock.y = q.y));
              "inside" === this.tickPlacement &&
                  this.chart.addEventListener("dataAnimationEnd", function() {
                      for (l = 0; l < a._labels.length; l++)
                          if (r = a._labels[l], !(r.position < a.viewportMinimum || r.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(r.position), a.tickThickness)) {
                              a.ctx.lineWidth = a.tickThickness;
                              a.ctx.strokeStyle = a.tickColor;
                              var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                              a.ctx.save();
                              a.ctx.beginPath();
                              a.ctx.moveTo(b, q.y << 0);
                              a.ctx.lineTo(b, q.y + a.tickLength << 0);
                              a.ctx.stroke();
                              a.ctx.restore()
                          }
                  }, this);
              this.title && (this._titleTextBlock.measureText(),
                  this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
          } else if ("left" === this._position) {
              for (l = 0; l < this._labels.length; l++) r = this._labels[l], r.position < this.viewportMinimum || r.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(r.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness,
                  this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, c), this.ctx.lineTo(q.x - this.tickLength << 0, c), this.ctx.stroke()), e && 0 !== d++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (r.textBlock.y = q.y, r.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (r.textBlock.y = "inside" ===
                  this.labelPlacement ? q.y : q.y - r.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), r.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : 0 < this.labelAngle ? q.x - r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5 : q.x - r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (r.textBlock.height - r.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength))));
              "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                  for (l = 0; l < a._labels.length; l++)
                      if (r = a._labels[l], !(r.position < a.viewportMinimum || r.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(r.position), a.tickThickness)) {
                          a.ctx.lineWidth = a.tickThickness;
                          a.ctx.strokeStyle = a.tickColor;
                          var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                          a.ctx.save();
                          a.ctx.beginPath();
                          a.ctx.moveTo(q.x << 0, b);
                          a.ctx.lineTo(q.x + a.tickLength << 0, b);
                          a.ctx.stroke();
                          a.ctx.restore()
                      }
              }, this);
              this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
          } else if ("right" === this._position) {
              for (l = 0; l < this._labels.length; l++) r = this._labels[l], r.position < this.viewportMinimum || r.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(r.position), this.tickThickness && "inside" !=
                  this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, c), this.ctx.lineTo(q.x + this.tickLength << 0, c), this.ctx.stroke()), e && 0 !== d++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (r.textBlock.y = q.y, r.textBlock.x = "inside" === this.labelPlacement ? q.x - r.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (r.textBlock.y =
                      "inside" === this.labelPlacement ? q.y - r.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0 > this.labelAngle ? q.y : q.y - (r.textBlock.height - r.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), r.textBlock.x = "inside" === this.labelPlacement ? q.x - r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : 0 < this.labelAngle ? q.x + (r.textBlock.height - r.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) :
                      q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
              "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                  for (l = 0; l < a._labels.length; l++)
                      if (r = a._labels[l], !(r.position < a.viewportMinimum || r.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(r.position), a.tickThickness)) {
                          a.ctx.lineWidth = a.tickThickness;
                          a.ctx.strokeStyle = a.tickColor;
                          var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                          a.ctx.save();
                          a.ctx.beginPath();
                          a.ctx.moveTo(q.x << 0, b);
                          a.ctx.lineTo(q.x -
                              a.tickLength << 0, b);
                          a.ctx.stroke();
                          a.ctx.restore()
                      }
              }, this);
              this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
          }
          d = 0;
          if ("inside" === this.labelPlacement) this.chart.addEventListener("dataAnimationEnd", function() {
              for (l = 0; l < a._labels.length; l++) r = a._labels[l], r.position < a.viewportMinimum ||
                  (r.position > a.viewportMaximum || e && 0 !== d++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), r.textBlock.render(!0), a.ctx.restore())
          }, this);
          else
              for (l = 0; l < this._labels.length; l++) r = this._labels[l], r.position < this.viewportMinimum || (r.position > this.viewportMaximum || e && 0 !== d++ % 2 && this.labelAutoFit) || r.textBlock.render(!0)
      };
      A.prototype.renderInterlacedColors = function() {
          var a = this.chart.plotArea.ctx,
              e, b, c = this.chart.plotArea,
              h = 0;
          e = !0;
          if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
              for (a.fillStyle =
                  this.interlacedColor, h = 0; h < this._labels.length; h++) e ? (e = this.getPixelCoordinatesOnAxis(this._labels[h].position), b = h + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[h + 1].position), a.fillRect(Math.min(b.x, e.x), c.y1, Math.abs(b.x - e.x), Math.abs(c.y1 - c.y2)), e = !1) : e = !0;
          else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
              for (a.fillStyle = this.interlacedColor, h = 0; h < this._labels.length; h++) e ? (b = this.getPixelCoordinatesOnAxis(this._labels[h].position),
                  e = h + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[h + 1].position), a.fillRect(c.x1, Math.min(b.y, e.y), Math.abs(c.x1 - c.x2), Math.abs(e.y - b.y)), e = !1) : e = !0;
          a.beginPath()
      };
      A.prototype.renderStripLinesOfThicknessType = function(a) {
          if (this.stripLines && 0 < this.stripLines.length && a) {
              for (var e = this, b, c = 0, h = 0, d = !1, f = !1, s = [], m = [], f = !1, c = 0; c < this.stripLines.length; c++) {
                  var l = this.stripLines[c];
                  l._thicknessType === a && ("pixel" === a && (l.value < this.viewportMinimum ||
                      l.value > this.viewportMaximum || n(l.value) || isNaN(this.range)) || s.push(l))
              }
              for (c = 0; c < this._stripLineLabels.length; c++)
                  if (l = this.stripLines[c], b = this._stripLineLabels[c], !(b.position < this.viewportMinimum || b.position > this.viewportMaximum || isNaN(this.range))) {
                      a = this.getPixelCoordinatesOnAxis(b.position);
                      if ("outside" === b.stripLine.labelPlacement)
                          if (l && (this.ctx.strokeStyle = l.color, "pixel" === l._thicknessType && (this.ctx.lineWidth = l.thickness)), "bottom" === this._position) {
                              var p = 1 === this.ctx.lineWidth % 2 ? (a.x <<
                                  0) + 0.5 : a.x << 0;
                              this.ctx.beginPath();
                              this.ctx.moveTo(p, a.y << 0);
                              this.ctx.lineTo(p, a.y + this.tickLength << 0);
                              this.ctx.stroke();
                              0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y += this.tickLength + b.textBlock.fontSize / 2) : (a.x -= 0 > this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5))
                          } else "top" === this._position ? (p = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, this.ctx.beginPath(), this.ctx.moveTo(p,
                                  a.y << 0), this.ctx.lineTo(p, a.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y -= this.tickLength + b.textBlock.height) : (a.x += (b.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), a.y -= this.tickLength + (b.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" ===
                              this._position ? (p = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, p), this.ctx.lineTo(a.x - this.tickLength << 0, p), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (a.y -= b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (b.textBlock.height -
                                  b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" === this._position && (p = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, p), this.ctx.lineTo(a.x + this.tickLength << 0, p), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI /
                                  180 * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5));
                      else b.textBlock.angle = -90, "bottom" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? n(l.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, n(l.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize /
                              2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y1 + b.textBlock.width + 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ?
                          (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? n(l.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, n(l.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ?
                              this.chart.plotArea.y1 + b.textBlock.width + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y2 - b.textBlock.width - 3) : "left" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth :
                              this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - b.textBlock.height > this.chart.plotArea.y1 ? n(l.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : n(l.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === b.stripLine.labelAlign ?
                              (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x2 - b.textBlock.width - 3) : "right" === this._position && (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - +b.textBlock.height > this.chart.plotArea.y1 ? n(l.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 - 3 : a.y - b.textBlock.height <
                              this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : n(l.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x1 + 3);
                      b.textBlock.x = a.x;
                      b.textBlock.y = a.y;
                      m.push(b)
                  } if (!f) {
                  f = !1;
                  this.ctx.save();
                  this.ctx.beginPath();
                  this.ctx.rect(this.chart.plotArea.x1,
                      this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                  this.ctx.clip();
                  for (c = 0; c < s.length; c++) l = s[c], l.showOnTop ? d || (d = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                      this.ctx.save();
                      this.ctx.beginPath();
                      this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                      this.ctx.clip();
                      for (h = 0; h < s.length; h++) l = s[h], l.showOnTop && l.render();
                      this.ctx.restore()
                  }, l)) : l.render();
                  for (c = 0; c < m.length; c++) b = m[c], b.stripLine.showOnTop ?
                      f || (f = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                          for (h = 0; h < m.length; h++) b = m[h], "inside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && (e.ctx.save(), e.ctx.beginPath(), e.ctx.rect(e.chart.plotArea.x1, e.chart.plotArea.y1, e.chart.plotArea.width, e.chart.plotArea.height), e.ctx.clip(), b.textBlock.render(!0), e.ctx.restore())
                      }, b.textBlock)) : "inside" === b.stripLine.labelPlacement && b.textBlock.render(!0);
                  this.ctx.restore();
                  f = !0
              }
              if (f)
                  for (f = !1, c = 0; c < m.length; c++) b = m[c], b.stripLine.showOnTop ?
                      f || (f = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                          for (h = 0; h < m.length; h++) b = m[h], "outside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && b.textBlock.render(!0)
                      }, b.textBlock)) : "outside" === b.stripLine.labelPlacement && b.textBlock.render(!0)
          }
      };
      A.prototype.renderBreaksBackground = function() {
          this.chart._breaksCanvas && (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1,
              this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore())
      };
      A.prototype.createMask = function() {
          if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
              var a = this.scaleBreaks._appliedBreaks;
              x ? (this.maskCanvas = ra(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas =
                  this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
              this.maskCtx.save();
              this.maskCtx.beginPath();
              this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
              this.maskCtx.clip();
              for (var e = 0; e < a.length; e++) a[e].endValue < this.viewportMinimum || (a[e].startValue > this.viewportMaximum || isNaN(this.range)) || a[e].render(this.maskCtx);
              this.maskCtx.restore()
          }
      };
      A.prototype.renderCrosshair = function(a, e) {
          isFinite(this.minimum) && isFinite(this.maximum) &&
              (this.crosshair.render(a, e), this.crosshair.dispatchEvent("updated", {
                  chart: this.chart,
                  crosshair: this.options,
                  axis: this,
                  value: this.crosshair.value
              }, this))
      };
      A.prototype.showCrosshair = function(a) {
          n(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a), null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a))
      };
      A.prototype.renderGrid = function() {
          if (this.gridThickness && 0 < this.gridThickness) {
              var a =
                  this.chart.ctx;
              a.save();
              var e, b = this.chart.plotArea;
              a.lineWidth = this.gridThickness;
              a.strokeStyle = this.gridColor;
              a.setLineDash && a.setLineDash(M(this.gridDashType, this.gridThickness));
              if ("bottom" === this._position || "top" === this._position)
                  for (c = 0; c < this._labels.length; c++) this._labels[c].position < this.viewportMinimum || (this._labels[c].position > this.viewportMaximum || this._labels[c].breaksLabelType) || (a.beginPath(), e = this.getPixelCoordinatesOnAxis(this._labels[c].position), e = 1 === a.lineWidth % 2 ? (e.x << 0) +
                      0.5 : e.x << 0, a.moveTo(e, b.y1 << 0), a.lineTo(e, b.y2 << 0), a.stroke());
              else if ("left" === this._position || "right" === this._position)
                  for (var c = 0; c < this._labels.length; c++) this._labels[c].position < this.viewportMinimum || (this._labels[c].position > this.viewportMaximum || this._labels[c].breaksLabelType) || (a.beginPath(), e = this.getPixelCoordinatesOnAxis(this._labels[c].position), e = 1 === a.lineWidth % 2 ? (e.y << 0) + 0.5 : e.y << 0, a.moveTo(b.x1 << 0, e), a.lineTo(b.x2 << 0, e), a.stroke());
              a.restore()
          }
      };
      A.prototype.renderAxisLine = function() {
          var a =
              this.chart.ctx,
              e = x ? this.chart._preRenderCtx : a,
              b = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)),
              c = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)),
              h, d;
          e.save();
          if ("bottom" === this._position || "top" === this._position) {
              if (this.lineThickness) {
                  this.reversed ? (h = this.lineCoordinates.x2, d = this.lineCoordinates.x1) : (h = this.lineCoordinates.x1, d = this.lineCoordinates.x2);
                  e.lineWidth = this.lineThickness;
                  e.strokeStyle = this.lineColor ? this.lineColor : "black";
                  e.setLineDash && e.setLineDash(M(this.lineDashType, this.lineThickness));
                  var f = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                  e.beginPath();
                  if (this.scaleBreaks && !n(this.scaleBreaks.firstBreakIndex))
                      if (n(this.scaleBreaks.lastBreakIndex)) h = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
                      else
                          for (var s = this.scaleBreaks.firstBreakIndex; s <= this.scaleBreaks.lastBreakIndex; s++) e.moveTo(h, f), e.lineTo(this.scaleBreaks._appliedBreaks[s].startPixel + b, f), h = this.scaleBreaks._appliedBreaks[s].endPixel + c;
                  h && (e.moveTo(h,
                      f), e.lineTo(d, f));
                  e.stroke()
              }
          } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
              this.reversed ? (h = this.lineCoordinates.y1, d = this.lineCoordinates.y2) : (h = this.lineCoordinates.y2, d = this.lineCoordinates.y1);
              e.lineWidth = this.lineThickness;
              e.strokeStyle = this.lineColor;
              e.setLineDash && e.setLineDash(M(this.lineDashType, this.lineThickness));
              f = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
              e.beginPath();
              if (this.scaleBreaks && !n(this.scaleBreaks.firstBreakIndex))
                  if (n(this.scaleBreaks.lastBreakIndex)) h =
                      this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                  else
                      for (s = this.scaleBreaks.firstBreakIndex; s <= this.scaleBreaks.lastBreakIndex; s++) e.moveTo(f, h), e.lineTo(f, this.scaleBreaks._appliedBreaks[s].startPixel + c), h = this.scaleBreaks._appliedBreaks[s].endPixel + b;
              h && (e.moveTo(f, h), e.lineTo(f, d));
              e.stroke()
          }
          x && (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas,
              0, 0, this.chart.width, this.chart.height), e.clearRect(0, 0, this.chart.width, this.chart.height));
          e.restore()
      };
      A.prototype.getPixelCoordinatesOnAxis = function(a) {
          var e = {};
          if ("bottom" === this._position || "top" === this._position) e.x = this.convertValueToPixel(a), e.y = this.lineCoordinates.y1;
          if ("left" === this._position || "right" === this._position) e.y = this.convertValueToPixel(a), e.x = this.lineCoordinates.x2;
          return e
      };
      A.prototype.convertPixelToValue = function(a) {
          if ("undefined" === typeof a) return null;
          var e = 0,
              b = 0,
              c, e = !0,
              h = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
              b = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
          if (this.logarithmic) {
              a = c = Math.pow(this.logarithmBase, (b - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
              if (b <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
                  for (b = 0; b < h.length; b++) {
                      if (!(h[b].endValue < this.conversionParameters.minimum))
                          if (e)
                              if (h[b].startValue < this.conversionParameters.minimum) {
                                  if (1 <
                                      h[b].size && this.conversionParameters.minimum * Math.pow(h[b].endValue / h[b].startValue, Math.log(c) / Math.log(h[b].size)) < h[b].endValue) {
                                      a = Math.pow(h[b].endValue / h[b].startValue, Math.log(c) / Math.log(h[b].size));
                                      break
                                  } else a *= h[b].endValue / this.conversionParameters.minimum / Math.pow(h[b].size, Math.log(h[b].endValue / this.conversionParameters.minimum) / Math.log(h[b].endValue / h[b].startValue)), c /= Math.pow(h[b].size, Math.log(h[b].endValue / this.conversionParameters.minimum) / Math.log(h[b].endValue / h[b].startValue));
                                  e = !1
                              } else if (c > h[b].startValue / this.conversionParameters.minimum) {
                          c /= h[b].startValue / this.conversionParameters.minimum;
                          if (c < h[b].size) {
                              a *= Math.pow(h[b].endValue / h[b].startValue, 1 === h[b].size ? 1 : Math.log(c) / Math.log(h[b].size)) / c;
                              break
                          } else a *= h[b].endValue / h[b].startValue / h[b].size;
                          c /= h[b].size;
                          e = !1
                      } else break;
                      else if (c > h[b].startValue / h[b - 1].endValue) {
                          c /= h[b].startValue / h[b - 1].endValue;
                          if (c < h[b].size) {
                              a *= Math.pow(h[b].endValue / h[b].startValue, 1 === h[b].size ? 1 : Math.log(c) / Math.log(h[b].size)) / c;
                              break
                          } else a *=
                              h[b].endValue / h[b].startValue / h[b].size;
                          c /= h[b].size
                      } else break
                  } else
                      for (b = h.length - 1; 0 <= b; b--)
                          if (!(h[b].startValue > this.conversionParameters.minimum))
                              if (e)
                                  if (h[b].endValue > this.conversionParameters.minimum) {
                                      if (1 < h[b].size && this.conversionParameters.minimum * Math.pow(h[b].endValue / h[b].startValue, Math.log(c) / Math.log(h[b].size)) > h[b].startValue) {
                                          a = Math.pow(h[b].endValue / h[b].startValue, Math.log(c) / Math.log(h[b].size));
                                          break
                                      } else a *= h[b].startValue / this.conversionParameters.minimum * Math.pow(h[b].size,
                                          Math.log(h[b].startValue / this.conversionParameters.minimum) / Math.log(h[b].endValue / h[b].startValue)) * c, c *= Math.pow(h[b].size, Math.log(this.conversionParameters.minimum / h[b].startValue) / Math.log(h[b].endValue / h[b].startValue));
                                      e = !1
                                  } else if (c < h[b].endValue / this.conversionParameters.minimum) {
                  c /= h[b].endValue / this.conversionParameters.minimum;
                  if (c > 1 / h[b].size) {
                      a *= Math.pow(h[b].endValue / h[b].startValue, 1 >= h[b].size ? 1 : Math.log(c) / Math.log(h[b].size)) * c;
                      break
                  } else a /= h[b].endValue / h[b].startValue / h[b].size;
                  c *= h[b].size;
                  e = !1
              } else break;
              else if (c < h[b].endValue / h[b + 1].startValue) {
                  c /= h[b].endValue / h[b + 1].startValue;
                  if (c > 1 / h[b].size) {
                      a *= Math.pow(h[b].endValue / h[b].startValue, 1 >= h[b].size ? 1 : Math.log(c) / Math.log(h[b].size)) * c;
                      break
                  } else a /= h[b].endValue / h[b].startValue / h[b].size;
                  c *= h[b].size
              } else break;
              e = a * this.viewportMinimum
          } else {
              a = c = (b - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
              if (b <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !==
                  this.reversed)
                  for (b = 0; b < h.length; b++) {
                      if (!(h[b].endValue < this.conversionParameters.minimum))
                          if (e)
                              if (h[b].startValue < this.conversionParameters.minimum) {
                                  if (h[b].size && this.conversionParameters.minimum + c * (h[b].endValue - h[b].startValue) / h[b].size < h[b].endValue) {
                                      a = 0 >= h[b].size ? 0 : c * (h[b].endValue - h[b].startValue) / h[b].size;
                                      break
                                  } else a += h[b].endValue - this.conversionParameters.minimum - h[b].size * (h[b].endValue - this.conversionParameters.minimum) / (h[b].endValue - h[b].startValue), c -= h[b].size * (h[b].endValue -
                                      this.conversionParameters.minimum) / (h[b].endValue - h[b].startValue);
                                  e = !1
                              } else if (c > h[b].startValue - this.conversionParameters.minimum) {
                          c -= h[b].startValue - this.conversionParameters.minimum;
                          if (c < h[b].size) {
                              a += (h[b].endValue - h[b].startValue) * (0 === h[b].size ? 1 : c / h[b].size) - c;
                              break
                          } else a += h[b].endValue - h[b].startValue - h[b].size;
                          c -= h[b].size;
                          e = !1
                      } else break;
                      else if (c > h[b].startValue - h[b - 1].endValue) {
                          c -= h[b].startValue - h[b - 1].endValue;
                          if (c < h[b].size) {
                              a += (h[b].endValue - h[b].startValue) * (0 === h[b].size ? 1 : c / h[b].size) -
                                  c;
                              break
                          } else a += h[b].endValue - h[b].startValue - h[b].size;
                          c -= h[b].size
                      } else break
                  } else
                      for (b = h.length - 1; 0 <= b; b--)
                          if (!(h[b].startValue > this.conversionParameters.minimum))
                              if (e)
                                  if (h[b].endValue > this.conversionParameters.minimum)
                                      if (h[b].size && this.conversionParameters.minimum + c * (h[b].endValue - h[b].startValue) / h[b].size > h[b].startValue) {
                                          a = 0 >= h[b].size ? 0 : c * (h[b].endValue - h[b].startValue) / h[b].size;
                                          break
                                      } else a += h[b].startValue - this.conversionParameters.minimum + h[b].size * (this.conversionParameters.minimum -
                                          h[b].startValue) / (h[b].endValue - h[b].startValue), c += h[b].size * (this.conversionParameters.minimum - h[b].startValue) / (h[b].endValue - h[b].startValue), e = !1;
              else if (c < h[b].endValue - this.conversionParameters.minimum) {
                  c -= h[b].endValue - this.conversionParameters.minimum;
                  if (c > -1 * h[b].size) {
                      a += (h[b].endValue - h[b].startValue) * (0 === h[b].size ? 1 : c / h[b].size) + c;
                      break
                  } else a -= h[b].endValue - h[b].startValue - h[b].size;
                  c += h[b].size;
                  e = !1
              } else break;
              else if (c < h[b].endValue - h[b + 1].startValue) {
                  c -= h[b].endValue - h[b + 1].startValue;
                  if (c > -1 * h[b].size) {
                      a += (h[b].endValue - h[b].startValue) * (0 === h[b].size ? 1 : c / h[b].size) + c;
                      break
                  } else a -= h[b].endValue - h[b].startValue - h[b].size;
                  c += h[b].size
              } else break;
              e = this.conversionParameters.minimum + a
          }
          return e
      };
      A.prototype.convertValueToPixel = function(a) {
          a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
          return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase +
              0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5
      };
      A.prototype.getApparentDifference = function(a, e, b, c) {
          var h = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          if (this.logarithmic) {
              b = n(b) ? e / a : b;
              for (var d = 0; d < h.length && !(e < h[d].startValue); d++) a > h[d].endValue || (a <= h[d].startValue && e >= h[d].endValue ?
                  b = b / h[d].endValue * h[d].startValue * h[d].size : a >= h[d].startValue && e >= h[d].endValue ? b = b / h[d].endValue * a * Math.pow(h[d].size, Math.log(h[d].endValue / a) / Math.log(h[d].endValue / h[d].startValue)) : a <= h[d].startValue && e <= h[d].endValue ? b = b / e * h[d].startValue * Math.pow(h[d].size, Math.log(e / h[d].startValue) / Math.log(h[d].endValue / h[d].startValue)) : !c && (a > h[d].startValue && e < h[d].endValue) && (b = a * Math.pow(h[d].size, Math.log(e / a) / Math.log(h[d].endValue / h[d].startValue))))
          } else
              for (b = n(b) ? Math.abs(e - a) : b, d = 0; d < h.length &&
                  !(e < h[d].startValue); d++) a > h[d].endValue || (a <= h[d].startValue && e >= h[d].endValue ? b = b - h[d].endValue + h[d].startValue + h[d].size : a > h[d].startValue && e >= h[d].endValue ? b = b - h[d].endValue + a + h[d].size * (h[d].endValue - a) / (h[d].endValue - h[d].startValue) : a <= h[d].startValue && e < h[d].endValue ? b = b - e + h[d].startValue + h[d].size * (e - h[d].startValue) / (h[d].endValue - h[d].startValue) : !c && (a > h[d].startValue && e < h[d].endValue) && (b = a + h[d].size * (e - a) / (h[d].endValue - h[d].startValue)));
          return b
      };
      A.prototype.setViewPortRange = function(a,
          e) {
          this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, e);
          this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, e)
      };
      A.prototype.getXValueAt = function(a) {
          if (!a) return null;
          var e = null;
          "left" === this._position ? e = this.convertPixelToValue(a.y) : "bottom" === this._position && (e = this.convertPixelToValue(a.x));
          return e
      };
      A.prototype.calculateValueToPixelConversionParameters = function(a) {
          a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          var e = {
                  pixelPerUnit: null,
                  minimum: null,
                  reference: null
              },
              b = this.lineCoordinates.width,
              c = this.lineCoordinates.height,
              b = "bottom" === this._position || "top" === this._position ? b : c,
              c = Math.abs(this.range);
          if (this.logarithmic)
              for (var d = 0; d < a.length && !(this.viewportMaximum < a[d].startValue); d++) this.viewportMinimum > a[d].endValue || (this.viewportMinimum >= a[d].startValue && this.viewportMaximum <= a[d].endValue ? b = 0 : this.viewportMinimum <= a[d].startValue && this.viewportMaximum >= a[d].endValue ? (c = c / a[d].endValue * a[d].startValue, b = 0 < a[d].spacing.toString().indexOf("%") ?
                      b * (1 - parseFloat(a[d].spacing) / 100) : b - Math.min(a[d].spacing, 0.1 * b)) : this.viewportMinimum > a[d].startValue && this.viewportMaximum >= a[d].endValue ? (c = c / a[d].endValue * this.viewportMinimum, b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100 * Math.log(a[d].endValue / this.viewportMinimum) / Math.log(a[d].endValue / a[d].startValue)) : b - Math.min(a[d].spacing, 0.1 * b) * Math.log(a[d].endValue / this.viewportMinimum) / Math.log(a[d].endValue / a[d].startValue)) : this.viewportMinimum <= a[d].startValue && this.viewportMaximum <
                  a[d].endValue && (c = c / this.viewportMaximum * a[d].startValue, b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100 * Math.log(this.viewportMaximum / a[d].startValue) / Math.log(a[d].endValue / a[d].startValue)) : b - Math.min(a[d].spacing, 0.1 * b) * Math.log(this.viewportMaximum / a[d].startValue) / Math.log(a[d].endValue / a[d].startValue)));
          else
              for (d = 0; d < a.length && !(this.viewportMaximum < a[d].startValue); d++) this.viewportMinimum > a[d].endValue || (this.viewportMinimum >= a[d].startValue && this.viewportMaximum <=
                  a[d].endValue ? b = 0 : this.viewportMinimum <= a[d].startValue && this.viewportMaximum >= a[d].endValue ? (c = c - a[d].endValue + a[d].startValue, b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100) : b - Math.min(a[d].spacing, 0.1 * b)) : this.viewportMinimum > a[d].startValue && this.viewportMaximum >= a[d].endValue ? (c = c - a[d].endValue + this.viewportMinimum, b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100 * (a[d].endValue - this.viewportMinimum) / (a[d].endValue - a[d].startValue)) : b - Math.min(a[d].spacing,
                      0.1 * b) * (a[d].endValue - this.viewportMinimum) / (a[d].endValue - a[d].startValue)) : this.viewportMinimum <= a[d].startValue && this.viewportMaximum < a[d].endValue && (c = c - this.viewportMaximum + a[d].startValue, b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100 * (this.viewportMaximum - a[d].startValue) / (a[d].endValue - a[d].startValue)) : b - Math.min(a[d].spacing, 0.1 * b) * (this.viewportMaximum - a[d].startValue) / (a[d].endValue - a[d].startValue)));
          e.minimum = this.viewportMinimum;
          e.maximum = this.viewportMaximum;
          e.range = c;
          if ("bottom" === this._position || "top" === this._position) this.logarithmic ? (e.lnLogarithmBase = Math.log(this.logarithmBase), e.pixelPerUnit = (this.reversed ? -1 : 1) * b * e.lnLogarithmBase / Math.log(Math.abs(c))) : e.pixelPerUnit = (this.reversed ? -1 : 1) * b / Math.abs(c), e.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
          if ("left" === this._position || "right" === this._position) this.logarithmic ? (e.lnLogarithmBase = Math.log(this.logarithmBase), e.pixelPerUnit = (this.reversed ? 1 : -1) * b * e.lnLogarithmBase /
              Math.log(Math.abs(c))) : e.pixelPerUnit = (this.reversed ? 1 : -1) * b / Math.abs(c), e.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
          this.conversionParameters = e
      };
      A.prototype.calculateAxisParameters = function() {
          if (this.logarithmic) this.calculateLogarithmicAxisParameters();
          else {
              var a = this.chart.layoutManager.getFreeSpace(),
                  e = !1,
                  b = !1;
              "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
              var a = "axisX" ===
                  this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40,
                  c = 4;
              "axisX" === this.type && (c = 600 > this.maxWidth ? 8 : 6);
              var a = Math.max(c, Math.floor(this.maxWidth / a)),
                  d, g, f, c = 0;
              !n(this.options.viewportMinimum) && (!n(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
              if (n(this.options.viewportMinimum) && !n(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum =
                  this.sessionVariables.newViewportMinimum;
              else if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
              if (n(this.options.viewportMaximum) && !n(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
              else if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
              if (this.scaleBreaks)
                  for (c = 0; c < this.scaleBreaks._appliedBreaks.length; c++)
                      if ((!n(this.sessionVariables.newViewportMinimum) &&
                              this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[c].startValue || !n(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[c].startValue || !n(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[c].startValue) && (!n(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[c].endValue || !n(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[c].endValue ||
                              !n(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[c].endValue)) {
                          this.scaleBreaks._appliedBreaks.splice(c, 1);
                          break
                      } if ("axisX" === this.type) {
                  if (this.dataSeries && 0 < this.dataSeries.length)
                      for (d = 0; d < this.dataSeries.length; d++) "dateTime" === this.dataSeries[d].xValueType && (b = !0);
                  d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
                  g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
                  0 === g - d && (c = "undefined" === typeof this.options.interval ?
                      0.4 : this.options.interval, g += c, d -= c);
                  Infinity !== this.dataInfo.minDiff ? f = this.dataInfo.minDiff : 1 < g - d ? f = 0.5 * Math.abs(g - d) : (f = 1, b && (e = !0))
              } else "axisY" === this.type && (d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(d) || isFinite(g) ? isFinite(d) ? isFinite(g) || (g = d) : d = g : (g = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, d = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ?
                  0 : Infinity), 0 === d && 0 === g ? (g += 9, d = 0) : 0 === g - d ? (c = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += c, d -= c) : d > g ? (c = Math.min(0.01 * Math.abs(this.getApparentDifference(g, d, null, !0)), 5), 0 <= g ? d = g - c : g = isFinite(d) ? d + c : 0) : (c = Math.min(0.01 * Math.abs(this.getApparentDifference(d, g, null, !0)), 0.05), 0 !== g && (g += c), 0 !== d && (d -= c)), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - d ? 0.5 * Math.abs(g - d) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < d && (d = 0), this.includeZero && (null ===
                  this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > g && (g = 0));
              c = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? d : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? g : this.viewportMaximum, null, !0);
              if ("axisX" === this.type && b) {
                  this.intervalType || (c / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : c / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : c / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : c / 10 <= a ? (this.interval =
                      10, this.intervalType = "millisecond") : c / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : c / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : c / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : c / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : c / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : c / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : c / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : c / 500 <= a ? (this.interval = 500, this.intervalType =
                      "millisecond") : c / (1 * Y.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : c / (2 * Y.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : c / (5 * Y.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : c / (10 * Y.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : c / (15 * Y.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : c / (20 * Y.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : c / (30 * Y.secondDuration) <= a ? (this.interval = 30, this.intervalType =
                      "second") : c / (1 * Y.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : c / (2 * Y.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : c / (5 * Y.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : c / (10 * Y.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : c / (15 * Y.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : c / (20 * Y.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : c / (30 * Y.minuteDuration) <= a ? (this.interval = 30, this.intervalType =
                      "minute") : c / (1 * Y.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : c / (2 * Y.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : c / (3 * Y.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : c / (6 * Y.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : c / (1 * Y.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : c / (2 * Y.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : c / (4 * Y.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : c / (1 * Y.weekDuration) <= a ? (this.interval =
                      1, this.intervalType = "week") : c / (2 * Y.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : c / (3 * Y.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : c / (1 * Y.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : c / (2 * Y.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : c / (3 * Y.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : c / (6 * Y.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = c / (1 * Y.yearDuration) <= a ? 1 : c / (2 * Y.yearDuration) <=
                      a ? 2 : c / (4 * Y.yearDuration) <= a ? 4 : Math.floor(A.getNiceNumber(c / (a - 1), !0) / Y.yearDuration), this.intervalType = "year"));
                  if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = d - f / 2;
                  if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = g + f / 2;
                  e ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString =
                      "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
                  this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
              } else {
                  this.intervalType = "number";
                  c = A.getNiceNumber(c, !1);
                  this.interval =
                      this.options && 0 < this.options.interval ? this.options.interval : A.getNiceNumber(c / (a - 1), !0);
                  if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? d - f / 2 : Math.floor(d / this.interval) * this.interval;
                  if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? g + f / 2 : Math.ceil(g / this.interval) * this.interval;
                  0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum &&
                      (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))
              }
              if (null === this.minimum || null === this.maximum)
                  if ("axisX" === this.type ? (d = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === g - d && (c = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, g += c, d -= c), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - d ?
                          0.5 * Math.abs(g - d) : 1) : "axisY" === this.type && (d = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(d) || isFinite(g) ? 0 === d && 0 === g ? (g += 9, d = 0) : 0 === g - d ? (c = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += c, d -= c) : d > g ? (c = Math.min(0.01 * Math.abs(this.getApparentDifference(g, d, null, !0)), 5), 0 <= g ? d = g - c : g = isFinite(d) ? d + c : 0) : (c = Math.min(0.01 * Math.abs(this.getApparentDifference(d, g, null, !0)), 0.05), 0 !== g && (g += c), 0 !== d && (d -= c)) : (g = "undefined" === typeof this.options.interval ?
                          -Infinity : this.options.interval, d = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - d ? 0.5 * Math.abs(g - d) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < d && (d = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > g && (g = 0)), Math.abs(this.getApparentDifference(d, g, null, !0)), "axisX" === this.type && b) {
                      this.valueType = "dateTime";
                      if (null === this.minimum || isNaN(this.minimum)) this.minimum =
                          d - f / 2;
                      if (null === this.maximum || isNaN(this.maximum)) this.maximum = g + f / 2
                  } else this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? d - f / 2 : Math.floor(d / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? g + f / 2 : Math.ceil(g / this.interval) * this.interval, this.maximum =
                      Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
              n(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
              n(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
              this.range = this.viewportMaximum - this.viewportMinimum;
              this.intervalStartPosition = "axisX" === this.type && b ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
              this.valueFormatString || (this.valueFormatString = A.generateValueFormatString(this.range, 2))
          }
      };
      A.prototype.calculateLogarithmicAxisParameters = function() {
          var a = this.chart.layoutManager.getFreeSpace(),
              e = Math.log(this.logarithmBase),
              b;
          "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
          var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3),
              c, d, g, f;
          f = 1;
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
          if (this.scaleBreaks)
              for (f =
                  0; f < this.scaleBreaks._appliedBreaks.length; f++)
                  if ((!n(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[f].startValue || !n(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[f].startValue || !n(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[f].startValue) && (!n(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[f].endValue ||
                          !n(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[f].endValue || !n(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[f].endValue)) {
                      this.scaleBreaks._appliedBreaks.splice(f, 1);
                      break
                  }
          "axisX" === this.type ? (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, d = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === d / c && (f = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ?
              0.4 : this.options.interval), d *= f, c /= f), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / c > this.logarithmBase ? d / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, d = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= c && !isFinite(d) ? (d = "undefined" === typeof this.options.interval ? 0 : this.options.interval, c = 1) : 0 >= c ? c = d : isFinite(d) || (d = c), 1 === c && 1 === d ? (d *= this.logarithmBase -
              1 / this.logarithmBase, c = 1) : 1 === d / c ? (f = Math.min(d * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), d *= f, c /= f) : c > d ? (f = Math.min(c / d * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= d ? c = d / f : d = c * f) : (f = Math.min(d / c * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== d && (d *= f), 1 !== c && (c /= f)), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / c > this.logarithmBase ? d / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null ===
              this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < c && (c = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > d && (d = 1));
          f = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? d : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
          var s = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? d : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
          this.intervalType =
              "number";
          f = Math.pow(this.logarithmBase, A.getNiceNumber(Math.abs(Math.log(f) / e), !1));
          this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = A.getNiceExponent(Math.log(f) / e / (a - 1), !0), b = A.getNiceNumber(s / (a - 1), !0));
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? c / Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(c) / e / this.interval));
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum =
              "axisX" === this.type ? d * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(d) / e / this.interval));
          1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = A.getNiceExponent(Math.ceil(Math.log(f) / e) / (a - 1)), b = A.getNiceNumber((this.viewportMaximum -
              this.viewportMinimum) / (a - 1), !0)));
          if (null === this.minimum || null === this.maximum) "axisX" === this.type ? (c = null !== this.minimum ? this.minimum : this.dataInfo.min, d = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === d / c && (f = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), d *= f, c /= f), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / c > this.logarithmBase ? d / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (c = null !== this.minimum ?
              this.minimum : this.dataInfo.min, d = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(c) || isFinite(d) ? 1 === c && 1 === d ? (d *= this.logarithmBase, c /= this.logarithmBase) : 1 === d / c ? (f = Math.pow(this.logarithmBase, this.interval), d *= f, c /= f) : c > d ? (f = Math.min(0.01 * (c / d), 5), 1 <= d ? c = d / f : d = c * f) : (f = Math.min(d / c * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== d && (d *= f), 1 !== c && (c /= f)) : (d = "undefined" === typeof this.options.interval ? 0 : this.options.interval, c = 1), g = Infinity !== this.dataInfo.minDiff ?
              this.dataInfo.minDiff : d / c > this.logarithmBase ? d / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < c && (c = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > d && (d = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? c / Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(c) / e / this.interval)), this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum ||
              isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? d * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(d) / e / this.interval)), this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ?
              0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum)), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
          this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
          this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
          this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum ||
              this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
          c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (e * this.interval) + 0.2) * this.interval);
          this.range =
              this.viewportMaximum / this.viewportMinimum;
          this.noTicks = a;
          if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
              for (e = Math.floor(this.viewportMinimum / b + 0.5) * b; e < this.viewportMinimum;) e += b;
              this.equidistantInterval = !1;
              this.intervalStartPosition = e;
              this.interval = b
          } else this.options.interval || (b = Math.ceil(this.interval), this.range > this.interval && (this.interval = b, c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (e * this.interval) + 0.2) * this.interval))),
              this.equidistantInterval = !0, this.intervalStartPosition = c;
          if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
              e = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
              if (isNaN(e) || !isFinite(e)) e = 2;
              if (2 < e)
                  for (f = 0; f < e - 2; f++) this.valueFormatString += "#"
          }
      };
      A.generateValueFormatString = function(a, d) {
          var b = "#,##0.",
              c = d;
          1 > a && (c += Math.floor(Math.abs(Math.log(a) / Math.LN10)), isNaN(c) || !isFinite(c)) && (c = d);
          for (var h = 0; h < c; h++) b += "#";
          return b
      };
      A.getNiceExponent = function(a,
          d) {
          var b = Math.floor(Math.log(a) / Math.LN10),
              c = a / Math.pow(10, b),
              c = 0 > b ? 1 >= c ? 1 : 5 >= c ? 5 : 10 : Math.max(Math.floor(c), 1);
          return -20 > b ? Number(c * Math.pow(10, b)) : Number((c * Math.pow(10, b)).toFixed(20))
      };
      A.getNiceNumber = function(a, d) {
          var b = Math.floor(Math.log(a) / Math.LN10),
              c = a / Math.pow(10, b),
              c = d ? 1.5 > c ? 1 : 3 > c ? 2 : 7 > c ? 5 : 10 : 1 >= c ? 1 : 2 >= c ? 2 : 5 >= c ? 5 : 10;
          return -20 > b ? Number(c * Math.pow(10, b)) : Number((c * Math.pow(10, b)).toFixed(20))
      };
      A.prototype.getLabelStartPoint = function() {
          var a = Y[this.intervalType + "Duration"] * this.interval,
              a =
              new Date(Math.floor(this.viewportMinimum / a) * a);
          if ("millisecond" !== this.intervalType)
              if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
              else if ("minute" === this.intervalType) {
              if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0)
          } else if ("hour" === this.intervalType) {
              if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
          } else if ("day" ===
              this.intervalType) {
              if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
          } else if ("week" === this.intervalType) {
              if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
          } else if ("month" === this.intervalType) {
              if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() ||
                  0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
          } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
          return a
      };
      ga(L, S);
      ga(W, S);
      W.prototype.createUserOptions = function(a) {
          if ("undefined" !==
              typeof a || this.options._isPlaceholder) {
              var d = 0;
              this.parent.options._isPlaceholder && this.parent.createUserOptions();
              this.options._isPlaceholder || (Da(this.parent[this.optionsName]), d = this.parent.options[this.optionsName].indexOf(this.options));
              this.options = "undefined" === typeof a ? {} : a;
              this.parent.options[this.optionsName][d] = this.options
          }
      };
      W.prototype.render = function(a) {
          if (0 !== this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
              var d =
                  this.ctx,
                  b = this.ctx.globalAlpha;
              this.ctx = a || this.ctx;
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
              this.ctx.clip();
              var c = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue),
                  h = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
              this.ctx.strokeStyle = this.lineColor;
              this.ctx.fillStyle = this.color;
              this.ctx.beginPath();
              this.ctx.globalAlpha = 1;
              N(this.id);
              var g, f, s, m, l, p;
              a = Math.max(this.spacing,
                  3);
              var r = Math.max(0, this.lineThickness);
              this.ctx.lineWidth = r;
              this.ctx.setLineDash && this.ctx.setLineDash(M(this.lineDashType, r));
              if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
                  if (c = 1 === r % 2 ? (c.x << 0) + 0.5 : c.x << 0, f = 1 === r % 2 ? (h.x << 0) + 0.5 : h.x << 0, "top" === this.scaleBreaks.parent._position ? (h = this.chart.plotArea.y1, s = this.chart.plotArea.y2 + r / 2 + 0.5 << 0) : (h = this.chart.plotArea.y2, s = this.chart.plotArea.y1 - r / 2 + 0.5 << 0, a *= -1), this.bounds = {
                          x1: c - r / 2,
                          y1: h,
                          x2: f + r / 2,
                          y2: s
                      }, this.ctx.moveTo(c,
                          h), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(c, s), this.ctx.lineTo(f, s), this.ctx.lineTo(f, h);
                  else if ("wavy" === this.type) {
                  m = c;
                  l = h;
                  g = 0.5;
                  p = (s - l) / a / 3;
                  for (var q = 0; q < p; q++) this.ctx.bezierCurveTo(m + g * a, l + a, m + g * a, l + 2 * a, m, l + 3 * a), l += 3 * a, g *= -1;
                  this.ctx.bezierCurveTo(m + g * a, l + a, m + g * a, l + 2 * a, m, l + 3 * a);
                  m = f;
                  g *= -1;
                  this.ctx.lineTo(m, l);
                  for (q = 0; q < p; q++) this.ctx.bezierCurveTo(m + g * a, l - a, m + g * a, l - 2 * a, m, l - 3 * a), l -= 3 * a, g *= -1
              } else {
                  if ("zigzag" ===
                      this.type) {
                      g = -1;
                      l = h + a;
                      m = c + a;
                      p = (s - l) / a / 2;
                      for (q = 0; q < p; q++) this.ctx.lineTo(m, l), m += 2 * g * a, l += 2 * a, g *= -1;
                      this.ctx.lineTo(m, l);
                      m += f - c;
                      for (q = 0; q < p + 1; q++) this.ctx.lineTo(m, l), m += 2 * g * a, l -= 2 * a, g *= -1;
                      this.ctx.lineTo(m + g * a, l + a)
                  }
              } else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position)
                  if (h = 1 === r % 2 ? (h.y << 0) + 0.5 : h.y << 0, s = 1 === r % 2 ? (c.y << 0) + 0.5 : c.y << 0, "left" === this.scaleBreaks.parent._position ? (c = this.chart.plotArea.x1, f = this.chart.plotArea.x2 + r / 2 + 0.5 << 0) : (c = this.chart.plotArea.x2,
                          f = this.chart.plotArea.x1 - r / 2 + 0.5 << 0, a *= -1), this.bounds = {
                          x1: c,
                          y1: h - r / 2,
                          x2: f,
                          y2: s + r / 2
                      }, this.ctx.moveTo(c, h), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(f, h), this.ctx.lineTo(f, s), this.ctx.lineTo(c, s);
                  else if ("wavy" === this.type) {
                  m = c;
                  l = h;
                  g = 0.5;
                  p = (f - m) / a / 3;
                  for (q = 0; q < p; q++) this.ctx.bezierCurveTo(m + a, l + g * a, m + 2 * a, l + g * a, m + 3 * a, l), m += 3 * a, g *= -1;
                  this.ctx.bezierCurveTo(m + a, l + g * a, m + 2 * a, l + g * a, m + 3 * a, l);
                  l = s;
                  g *= -1;
                  this.ctx.lineTo(m,
                      l);
                  for (q = 0; q < p; q++) this.ctx.bezierCurveTo(m - a, l + g * a, m - 2 * a, l + g * a, m - 3 * a, l), m -= 3 * a, g *= -1
              } else if ("zigzag" === this.type) {
                  g = 1;
                  l = h - a;
                  m = c + a;
                  p = (f - m) / a / 2;
                  for (q = 0; q < p; q++) this.ctx.lineTo(m, l), l += 2 * g * a, m += 2 * a, g *= -1;
                  this.ctx.lineTo(m, l);
                  l += s - h;
                  for (q = 0; q < p + 1; q++) this.ctx.lineTo(m, l), l += 2 * g * a, m -= 2 * a, g *= -1;
                  this.ctx.lineTo(m + a, l + g * a)
              }
              0 < r && this.ctx.stroke();
              this.ctx.closePath();
              this.ctx.globalAlpha = this.fillOpacity;
              this.ctx.globalCompositeOperation = "destination-over";
              this.ctx.fill();
              this.ctx.restore();
              this.ctx.globalAlpha =
                  b;
              this.ctx = d
          }
      };
      ga(O, S);
      O.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
              var d = 0;
              this.parent.options._isPlaceholder && this.parent.createUserOptions();
              this.options._isPlaceholder || (Da(this.parent.stripLines), d = this.parent.options.stripLines.indexOf(this.options));
              this.options = "undefined" === typeof a ? {} : a;
              this.parent.options.stripLines[d] = this.options
          }
      };
      O.prototype.render = function() {
          this.ctx.save();
          var a = this.parent.getPixelCoordinatesOnAxis(this.value),
              d = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness);
          if (0 < d) {
              var b = null === this.opacity ? 1 : this.opacity;
              this.ctx.strokeStyle = this.color;
              this.ctx.beginPath();
              var c = this.ctx.globalAlpha;
              this.ctx.globalAlpha = b;
              N(this.id);
              var h, g, f, m;
              this.ctx.lineWidth = d;
              this.ctx.setLineDash && this.ctx.setLineDash(M(this.lineDashType, d));
              if ("bottom" === this.parent._position || "top" === this.parent._position) h = g = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, f = this.chart.plotArea.y1,
                  m = this.chart.plotArea.y2, this.bounds = {
                      x1: h - d / 2,
                      y1: f,
                      x2: g + d / 2,
                      y2: m
                  };
              else if ("left" === this.parent._position || "right" === this.parent._position) f = m = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, h = this.chart.plotArea.x1, g = this.chart.plotArea.x2, this.bounds = {
                  x1: h,
                  y1: f - d / 2,
                  x2: g,
                  y2: m + d / 2
              };
              this.ctx.moveTo(h, f);
              this.ctx.lineTo(g, m);
              this.ctx.stroke();
              this.ctx.globalAlpha = c
          }
          this.ctx.restore()
      };
      ga(V, S);
      V.prototype.showAt = function(a) {
          if (!this.enabled) return !1;
          var d = this.chart,
              b = !1;
          d.resetOverlayedCanvas();
          d.clearedOverlayedCanvas =
              this.parent.type;
          if ("xySwapped" === d.plotInfo.axisPlacement)
              if ("bottom" === this.parent._position)
                  for (var c = 0; c < d.axisY.length; c++) this.parent === d.axisY[c] && (d.axisY[c]._crosshairValue = a >= d.axisY[c].viewportMinimum && a <= d.axisY[c].viewportMaximum ? a : null);
              else if ("top" === this.parent._position)
              for (c = 0; c < d.axisY2.length; c++) this.parent === d.axisY2[c] && (d.axisY2[c]._crosshairValue = a >= d.axisY2[c].viewportMinimum && a <= d.axisY2[c].viewportMaximum ? a : null);
          else if ("left" === this.parent._position)
              for (c = 0; c < d.axisX.length; c++) this.parent ===
                  d.axisX[c] && (d.axisX[c]._crosshairValue = a >= d.axisX[c].viewportMinimum && a <= d.axisX[c].viewportMaximum ? a : null);
          else {
              if ("right" === this.parent._position)
                  for (c = 0; c < d.axisX2.length; c++) this.parent === d.axisX2[c] && (d.axisX2[c]._crosshairValue = a >= d.axisX2[c].viewportMinimum && a <= d.axisX2[c].viewportMaximum ? a : null)
          } else if ("bottom" === this.parent._position)
              for (c = 0; c < d.axisX.length; c++) this.parent === d.axisX[c] && (d.axisX[c]._crosshairValue = a >= d.axisX[c].viewportMinimum && a <= d.axisX[c].viewportMaximum ? a : null);
          else if ("top" ===
              this.parent._position)
              for (c = 0; c < d.axisX2.length; c++) this.parent === d.axisX2[c] && (d.axisX2[c]._crosshairValue = a >= d.axisX2[c].viewportMinimum && a <= d.axisX2[c].viewportMaximum ? a : null);
          else if ("left" === this.parent._position)
              for (c = 0; c < d.axisY.length; c++) this.parent === d.axisY[c] && (d.axisY[c]._crosshairValue = a >= d.axisY[c].viewportMinimum && a <= d.axisY[c].viewportMaximum ? a : null);
          else if ("right" === this.parent._position)
              for (c = 0; c < d.axisY2.length; c++) this.parent === d.axisY2[c] && (d.axisY2[c]._crosshairValue = a >= d.axisY2[c].viewportMinimum &&
                  a <= d.axisY2[c].viewportMaximum ? a : null);
          for (c = 0; c < d.axisX.length; c++) a = d.axisX[c]._crosshairValue, d.axisX[c].crosshair && (d.axisX[c].crosshair.enabled && !n(a) && a >= d.axisX[c].viewportMinimum && a <= d.axisX[c].viewportMaximum) && (d.axisX[c].showCrosshair(a), d.axisX[c].crosshair._updatedValue = a, this === d.axisX[c].crosshair && (b = !0));
          for (c = 0; c < d.axisX2.length; c++) a = d.axisX2[c]._crosshairValue, d.axisX2[c].crosshair && (d.axisX2[c].crosshair.enabled && !n(a) && a >= d.axisX2[c].viewportMinimum && a <= d.axisX2[c].viewportMaximum) &&
              (d.axisX2[c].showCrosshair(a), d.axisX2[c].crosshair._updatedValue = a, this === d.axisX2[c].crosshair && (b = !0));
          for (c = 0; c < d.axisY.length; c++) a = d.axisY[c]._crosshairValue, d.axisY[c].crosshair && (d.axisY[c].crosshair.enabled && !n(a) && a >= d.axisY[c].viewportMinimum && a <= d.axisY[c].viewportMaximum) && (d.axisY[c].showCrosshair(a), d.axisY[c].crosshair._updatedValue = a, this === d.axisY[c].crosshair && (b = !0));
          for (c = 0; c < d.axisY2.length; c++) a = d.axisY2[c]._crosshairValue, d.axisY2[c].crosshair && (d.axisY2[c].crosshair.enabled &&
              !n(a) && d._crosshairY2Value >= d.axisY2[c].viewportMinimum && d._crosshairY2Value <= d.axisY2[c].viewportMaximum) && (d.axisY2[c].showCrosshair(a), d.axisY2[c].crosshair._updatedValue = a, this === d.axisY2[c].crosshair && (b = !0));
          this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
          return b
      };
      V.prototype.hide = function() {
          this.chart.resetOverlayedCanvas();
          this.chart.renderCrosshairs(this.parent);
          this._hidden = !0
      };
      V.prototype.render = function(a, d, b) {
          var c, h,
              g, f, m = null,
              z = null,
              l = null,
              p = "";
          if (!this.valueFormatString)
              if ("dateTime" === this.parent.valueType) this.valueFormatString = this.parent.valueFormatString;
              else {
                  var r = 0,
                      r = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ?
                          1 : 0);
                  this.valueFormatString = A.generateValueFormatString(this.parent.range, r)
              } var l = null === this.opacity ? 1 : this.opacity,
              r = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness),
              q = this.chart.overlaidCanvasCtx,
              k = q.globalAlpha;
          q.globalAlpha = l;
          q.beginPath();
          q.strokeStyle = this.color;
          q.lineWidth = r;
          q.save();
          this.labelFontSize = n(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize;
          this.labelMaxWidth = n(this.options.labelMaxWidth) ?
              0.3 * this.chart.width : this.labelMaxWidth;
          this.labelMaxHeight = n(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
          0 < r && q.setLineDash && q.setLineDash(M(this.lineDashType, r));
          l = new la(q, {
              x: 0,
              y: 0,
              padding: {
                  top: 2,
                  right: 3,
                  bottom: 2,
                  left: 4
              },
              backgroundColor: this.labelBackgroundColor,
              borderColor: this.labelBorderColor,
              borderThickness: this.labelBorderThickness,
              cornerRadius: this.labelCornerRadius,
              maxWidth: this.labelMaxWidth,
              maxHeight: this.labelMaxHeight,
              angle: this.labelAngle,
              text: p,
              horizontalAlign: "left",
              fontSize: this.labelFontSize,
              fontFamily: this.labelFontFamily,
              fontWeight: this.labelFontWeight,
              fontColor: this.labelFontColor,
              fontStyle: this.labelFontStyle,
              textBaseline: "middle"
          });
          if (this.snapToDataPoint) {
              var w = 0,
                  p = [];
              if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                  var u = null;
                  if ("bottom" === this.parent._position || "top" === this.parent._position) w = this.parent.dataSeries[0].axisX.convertPixelToValue({
                      y: d
                  });
                  else if ("left" === this.parent._position || "right" === this.parent._position) w =
                      this.parent.convertPixelToValue({
                          y: d
                      });
                  for (var x = 0; x < this.parent.dataSeries.length; x++)(u = this.parent.dataSeries[x].getDataPointAtX(w, !0)) && 0 <= u.index && (u.dataSeries = this.parent.dataSeries[x], null !== u.dataPoint.y && u.dataSeries.visible && p.push(u));
                  u = null;
                  if (0 === p.length) return;
                  p.sort(function(a, b) {
                      return a.distance - b.distance
                  });
                  u = Math.abs(a - this.parent.convertValueToPixel(p[0].dataPoint.y));
                  x = 0;
                  if ("rangeBar" === p[0].dataSeries.type || "error" === p[0].dataSeries.type)
                      for (var u = Math.abs(a - this.parent.convertValueToPixel(p[x].dataPoint.y[0])),
                              t = 0, w = 0; w < p.length; w++)
                          if (p[w].dataPoint.y && p[w].dataPoint.y.length)
                              for (var v = 0; v < p[w].dataPoint.y.length; v++) t = Math.abs(a - this.parent.convertValueToPixel(p[w].dataPoint.y[v])), t < u && (u = t, x = w);
                          else t = Math.abs(a - this.parent.convertValueToPixel(p[w].dataPoint.y)), t < u && (u = t, x = w);
                  else if ("stackedBar" === p[0].dataSeries.type)
                      for (var u = Math.abs(a - this.parent.convertValueToPixel(p[0].dataPoint.y)), y = t = 0, w = x = 0; w < p.length; w++)
                          if (p[w].dataPoint.y && p[w].dataPoint.y.length)
                              for (v = 0; v < p[w].dataPoint.y.length; v++) t =
                                  Math.abs(a - this.parent.convertValueToPixel(p[w].dataPoint.y[v])), t < u && (u = t, x = w);
                          else y += p[w].dataPoint.y, t = Math.abs(a - this.parent.convertValueToPixel(y)), t < u && (u = t, x = w);
                  else if ("stackedBar100" === p[0].dataSeries.type)
                      for (var u = Math.abs(a - this.parent.convertValueToPixel(p[0].dataPoint.y)), E = y = t = 0, w = 0; w < p.length; w++)
                          if (p[w].dataPoint.y && p[w].dataPoint.y.length)
                              for (v = 0; v < p[w].dataPoint.y.length; v++) t = Math.abs(a - this.parent.convertValueToPixel(p[w].dataPoint.y[v])), t < u && (u = t, x = w);
                          else y += p[w].dataPoint.y,
                              E = p[w].dataPoint.x.getTime ? p[w].dataPoint.x.getTime() : p[w].dataPoint.x, E = 100 * (y / p[w].dataSeries.plotUnit.dataPointYSums[E]), t = Math.abs(a - this.parent.convertValueToPixel(E)), t < u && (u = t, x = w);
                  else
                      for (u = Math.abs(a - this.parent.convertValueToPixel(p[0].dataPoint.y)), w = x = t = 0; w < p.length; w++)
                          if (p[w].dataPoint.y && p[w].dataPoint.y.length)
                              for (v = 0; v < p[w].dataPoint.y.length; v++) t = Math.abs(a - this.parent.convertValueToPixel(p[w].dataPoint.y[v])), t < u && (u = t, x = w);
                          else t = Math.abs(a - this.parent.convertValueToPixel(p[w].dataPoint.y)),
                              t < u && (u = t, x = w);
                  v = p[x];
                  if ("bottom" === this.parent._position || "top" === this.parent._position) {
                      c = 0;
                      if ("rangeBar" === this.parent.dataSeries[x].type || "error" === this.parent.dataSeries[x].type) {
                          u = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                          for (w = t = 0; w < v.dataPoint.y.length; w++) t = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[w])), t < u && (u = t, c = w);
                          m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[c]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[c]) << 0;
                          l.text =
                              this.labelFormatter ? this.labelFormatter({
                                  chart: this.chart,
                                  axis: this.parent.options,
                                  crosshair: this.options,
                                  value: b ? b : v.dataPoint.y[c]
                              }) : n(this.options.label) ? X(b ? b : v.dataPoint.y[c], this.valueFormatString, this.chart._cultureInfo) : this.label
                      } else if ("stackedBar" === this.parent.dataSeries[x].type) {
                          u = Math.abs(a - this.parent.convertValueToPixel(p[0].dataPoint.y));
                          y = t = 0;
                          for (w = x; 0 <= w; w--) y += p[w].dataPoint.y, t = Math.abs(a - this.parent.convertValueToPixel(y)), t < u && (u = t, c = w);
                          m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(y) <<
                              0) + 0.5 : this.parent.convertValueToPixel(y) << 0;
                          l.text = this.labelFormatter ? this.labelFormatter({
                              chart: this.chart,
                              axis: this.parent.options,
                              crosshair: this.options,
                              value: b ? b : v.dataPoint.y
                          }) : n(this.options.label) ? X(b ? b : v.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label
                      } else if ("stackedBar100" === this.parent.dataSeries[x].type) {
                          u = Math.abs(a - this.parent.convertValueToPixel(p[0].dataPoint.y));
                          E = y = t = 0;
                          for (w = x; 0 <= w; w--) y += p[w].dataPoint.y, E = p[w].dataPoint.x.getTime ? p[w].dataPoint.x.getTime() :
                              p[w].dataPoint.x, E = 100 * (y / p[w].dataSeries.plotUnit.dataPointYSums[E]), t = Math.abs(a - this.parent.convertValueToPixel(E)), t < u && (u = t, c = w);
                          m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(E) << 0) + 0.5 : this.parent.convertValueToPixel(E) << 0;
                          l.text = this.labelFormatter ? this.labelFormatter({
                              chart: this.chart,
                              axis: this.parent.options,
                              crosshair: this.options,
                              value: b ? b : E
                          }) : n(this.options.label) ? X(b ? b : E, this.valueFormatString, this.chart._cultureInfo) : this.label
                      } else m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y) <<
                          0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y) << 0, l.text = this.labelFormatter ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.parent.options,
                          crosshair: this.options,
                          value: b ? b : v.dataPoint.y
                      }) : n(this.options.label) ? X(b ? b : v.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                      c = h = m;
                      g = this.chart.plotArea.y1;
                      f = this.chart.plotArea.y2;
                      this.bounds = {
                          x1: c - r / 2,
                          y1: g,
                          x2: h + r / 2,
                          y2: f
                      };
                      l.x = c - l.measureText().width / 2;
                      l.x + l.width > this.chart.bounds.x2 ? l.x = this.chart.bounds.x2 - l.width : l.x < this.chart.bounds.x1 &&
                          (l.x = this.chart.bounds.x1);
                      l.y = this.parent.lineCoordinates.y2 + l.fontSize / 2 + 2;
                      l.y + l.height > this.chart.bounds.y2 ? l.y = this.chart.bounds.y2 - l.height : l.y < this.chart.bounds.y1 && (l.y = this.chart.bounds.y1)
                  } else if ("left" === this.parent._position || "right" === this.parent._position) {
                      g = f = z = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
                      c = this.chart.plotArea.x1;
                      h = this.chart.plotArea.x2;
                      this.bounds = {
                          x1: c,
                          y1: g - r / 2,
                          x2: h,
                          y2: f + r / 2
                      };
                      E = !1;
                      if (this.parent.labels)
                          for (p =
                              Math.ceil(this.parent.interval), w = 0; w < this.parent.viewportMaximum; w += p)
                              if (this.parent.labels[w]) E = !0;
                              else {
                                  E = !1;
                                  break
                              } if (E) {
                          if ("axisX" === this.parent.type)
                              for (w = this.parent.convertPixelToValue({
                                      y: d
                                  }), u = null, x = 0; x < this.parent.dataSeries.length; x++)(u = this.parent.dataSeries[x].getDataPointAtX(w, !0)) && 0 <= u.index && (l.text = this.labelFormatter ? this.labelFormatter({
                                  chart: this.chart,
                                  axis: this.parent.options,
                                  crosshair: this.options,
                                  value: v.dataPoint.x
                              }) : n(this.options.label) ? u.dataPoint.label : this.label)
                      } else "dateTime" ===
                          this.parent.valueType ? l.text = this.labelFormatter ? this.labelFormatter({
                              chart: this.chart,
                              axis: this.parent.options,
                              crosshair: this.options,
                              value: b ? b : v.dataPoint.x
                          }) : n(this.options.label) ? ma(b ? b : v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (l.text = this.labelFormatter ? this.labelFormatter({
                              chart: this.chart,
                              axis: this.parent.options,
                              crosshair: this.options,
                              value: b ? b : v.dataPoint.x
                          }) : n(this.options.label) ? X(b ? b : v.dataPoint.x, this.valueFormatString,
                              this.chart._cultureInfo) : this.label);
                      l.y = f + l.fontSize / 2 - l.measureText().height / 2 + 2;
                      l.y - l.fontSize / 2 < this.chart.bounds.y1 ? l.y = this.chart.bounds.y1 + l.fontSize / 2 + 2 : l.y + l.measureText().height - l.fontSize / 2 > this.chart.bounds.y2 && (l.y = this.chart.bounds.y2 - l.measureText().height + l.fontSize / 2);
                      "left" === this.parent._position ? l.x = this.parent.lineCoordinates.x2 - l.measureText().width : "right" === this.parent._position && (l.x = this.parent.lineCoordinates.x2)
                  }
              } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                  w =
                      this.parent.convertPixelToValue({
                          x: a
                      });
                  for (x = 0; x < this.parent.dataSeries.length; x++)(u = this.parent.dataSeries[x].getDataPointAtX(w, !0)) && 0 <= u.index && (u.dataSeries = this.parent.dataSeries[x], null !== u.dataPoint.y && u.dataSeries.visible && p.push(u));
                  if (0 === p.length) return;
                  p.sort(function(a, b) {
                      return a.distance - b.distance
                  });
                  v = p[0];
                  c = h = m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
                  g = this.chart.plotArea.y1;
                  f = this.chart.plotArea.y2;
                  this.bounds = {
                      x1: c - r / 2,
                      y1: g,
                      x2: h + r / 2,
                      y2: f
                  };
                  E = !1;
                  if (this.parent.labels)
                      for (p = Math.ceil(this.parent.interval), w = 0; w < this.parent.viewportMaximum; w += p)
                          if (this.parent.labels[w]) E = !0;
                          else {
                              E = !1;
                              break
                          } if (E) {
                      if ("axisX" === this.parent.type)
                          for (w = this.parent.convertPixelToValue({
                                  x: a
                              }), u = null, x = 0; x < this.parent.dataSeries.length; x++)(u = this.parent.dataSeries[x].getDataPointAtX(w, !0)) && 0 <= u.index && (l.text = this.labelFormatter ? this.labelFormatter({
                                  chart: this.chart,
                                  axis: this.parent.options,
                                  crosshair: this.options,
                                  value: v.dataPoint.x
                              }) :
                              n(this.options.label) ? u.dataPoint.label : this.label)
                  } else "dateTime" === this.parent.valueType ? l.text = this.labelFormatter ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: v.dataPoint.x
                  }) : n(this.options.label) ? ma(b ? b : v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (l.text = this.labelFormatter ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.parent.options,
                          crosshair: this.options,
                          value: v.dataPoint.x
                      }) : n(this.options.label) ?
                      X(b ? b : v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
                  this.value = v.dataPoint.x;
                  l.x = c - l.measureText().width / 2;
                  l.x + l.width > this.chart.bounds.x2 && (l.x = this.chart.bounds.x2 - l.width);
                  l.x < this.chart.bounds.x1 && (l.x = this.chart.bounds.x1);
                  "bottom" === this.parent._position ? l.y = this.parent.lineCoordinates.y2 + l.fontSize / 2 + 2 : "top" === this.parent._position && (l.y = this.parent.lineCoordinates.y1 - l.height + l.fontSize / 2 + 2)
              } else if ("left" === this.parent._position || "right" === this.parent._position) {
                  !n(this.parent.dataSeries) &&
                      0 < this.parent.dataSeries.length && (w = this.parent.dataSeries[0].axisX.convertPixelToValue({
                          x: a
                      }));
                  for (x = 0; x < this.parent.dataSeries.length; x++)(u = this.parent.dataSeries[x].getDataPointAtX(w, !0)) && 0 <= u.index && (u.dataSeries = this.parent.dataSeries[x], null !== u.dataPoint.y && u.dataSeries.visible && p.push(u));
                  if (0 === p.length) return;
                  p.sort(function(a, b) {
                      return a.distance - b.distance
                  });
                  x = 0;
                  if ("rangeColumn" === p[0].dataSeries.type || "rangeArea" === p[0].dataSeries.type || "error" === p[0].dataSeries.type || "rangeSplineArea" ===
                      p[0].dataSeries.type || "candlestick" === p[0].dataSeries.type || "ohlc" === p[0].dataSeries.type || "boxAndWhisker" === p[0].dataSeries.type)
                      for (u = Math.abs(d - this.parent.convertValueToPixel(p[0].dataPoint.y[0])), w = t = 0; w < p.length; w++)
                          if (p[w].dataPoint.y && p[w].dataPoint.y.length)
                              for (v = 0; v < p[w].dataPoint.y.length; v++) t = Math.abs(d - this.parent.convertValueToPixel(p[w].dataPoint.y[v])), t < u && (u = t, x = w);
                          else t = Math.abs(d - this.parent.convertValueToPixel(p[w].dataPoint.y)), t < u && (u = t, x = w);
                  else if ("stackedColumn" === p[0].dataSeries.type ||
                      "stackedArea" === p[0].dataSeries.type)
                      for (u = Math.abs(d - this.parent.convertValueToPixel(p[0].dataPoint.y)), w = y = t = 0; w < p.length; w++)
                          if (p[w].dataPoint.y && p[w].dataPoint.y.length)
                              for (v = 0; v < p[w].dataPoint.y.length; v++) t = Math.abs(d - this.parent.convertValueToPixel(p[w].dataPoint.y[v])), t < u && (u = t, x = w);
                          else y += p[w].dataPoint.y, t = Math.abs(d - this.parent.convertValueToPixel(y)), t < u && (u = t, x = w);
                  else if ("stackedColumn100" === p[0].dataSeries.type || "stackedArea100" === p[0].dataSeries.type)
                      for (u = Math.abs(d - this.parent.convertValueToPixel(p[0].dataPoint.y)),
                          w = E = y = t = 0; w < p.length; w++)
                          if (p[w].dataPoint.y && p[w].dataPoint.y.length)
                              for (v = 0; v < p[w].dataPoint.y.length; v++) t = Math.abs(d - this.parent.convertValueToPixel(p[w].dataPoint.y[v])), t < u && (u = t, x = w);
                          else y += p[w].dataPoint.y, E = p[w].dataPoint.x.getTime ? p[w].dataPoint.x.getTime() : p[w].dataPoint.x, E = 100 * (y / p[w].dataSeries.plotUnit.dataPointYSums[E]), t = Math.abs(d - this.parent.convertValueToPixel(E)), t < u && (u = t, x = w);
                  else
                      for (u = Math.abs(d - this.parent.convertValueToPixel(p[0].dataPoint.y)), w = t = 0; w < p.length; w++)
                          if (p[w].dataPoint.y &&
                              p[w].dataPoint.y.length)
                              for (v = 0; v < p[w].dataPoint.y.length; v++) t = Math.abs(d - this.parent.convertValueToPixel(p[w].dataPoint.y[v])), t < u && (u = t, x = w);
                          else t = Math.abs(d - this.parent.convertValueToPixel(p[w].dataPoint.y)), t < u && (u = t, x = w);
                  v = p[x];
                  c = 0;
                  if ("rangeColumn" === this.parent.dataSeries[x].type || "rangeArea" === this.parent.dataSeries[x].type || "error" === this.parent.dataSeries[x].type || "rangeSplineArea" === this.parent.dataSeries[x].type || "candlestick" === this.parent.dataSeries[x].type || "ohlc" === this.parent.dataSeries[x].type ||
                      "boxAndWhisker" === this.parent.dataSeries[x].type) {
                      u = Math.abs(d - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                      for (w = t = 0; w < v.dataPoint.y.length; w++) t = Math.abs(d - this.parent.convertValueToPixel(v.dataPoint.y[w])), t < u && (u = t, c = w);
                      z = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[c]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[c]) << 0;
                      l.text = this.labelFormatter ? this.labelFormatter({
                              chart: this.chart,
                              axis: this.parent.options,
                              crosshair: this.options,
                              value: b ? b : v.dataPoint.y[c]
                          }) :
                          n(this.options.label) ? X(b ? b : v.dataPoint.y[c], this.valueFormatString, this.chart._cultureInfo) : this.label;
                      this.value = v.dataPoint.y[c]
                  } else if ("stackedColumn" === this.parent.dataSeries[x].type || "stackedArea" === this.parent.dataSeries[x].type) {
                      u = Math.abs(d - this.parent.convertValueToPixel(p[0].dataPoint.y));
                      y = t = 0;
                      for (w = x; 0 <= w; w--) y += p[w].dataPoint.y, t = Math.abs(d - this.parent.convertValueToPixel(y)), t < u && (u = t, c = w);
                      z = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(y) << 0) + 0.5 : this.parent.convertValueToPixel(y) <<
                          0;
                      l.text = this.labelFormatter ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.parent.options,
                          crosshair: this.options,
                          value: b ? b : v.dataPoint.y
                      }) : n(this.options.label) ? X(b ? b : v.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                      this.value = y
                  } else if ("stackedColumn100" === this.parent.dataSeries[x].type || "stackedArea100" === this.parent.dataSeries[x].type) {
                      u = Math.abs(d - this.parent.convertValueToPixel(p[0].dataPoint.y));
                      y = t = 0;
                      for (w = x; 0 <= w; w--) y += p[w].dataPoint.y, E = p[w].dataPoint.x.getTime ?
                          p[w].dataPoint.x.getTime() : p[w].dataPoint.x, E = 100 * (y / p[w].dataSeries.plotUnit.dataPointYSums[E]), t = Math.abs(d - this.parent.convertValueToPixel(E)), t < u && (u = t, c = w);
                      z = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(E) << 0) + 0.5 : this.parent.convertValueToPixel(E) << 0;
                      l.text = this.labelFormatter ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.parent.options,
                          crosshair: this.options,
                          value: b ? b : E
                      }) : n(this.options.label) ? X(b ? b : E, this.valueFormatString, this.chart._cultureInfo) : this.label;
                      this.value = E
                  } else "waterfall" ===
                      this.parent.dataSeries[x].type ? (z = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0, l.text = this.labelFormatter ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.parent.options,
                          crosshair: this.options,
                          value: b ? b : v.dataSeries.dataPointEOs[v.index].cumulativeSum
                      }) : n(this.options.label) ? X(b ? b : v.dataSeries.dataPointEOs[v.index].cumulativeSum, this.valueFormatString,
                          this.chart._cultureInfo) : this.label, this.value = v.dataSeries.dataPointEOs[v.index].cumulativeSum) : (z = 1 === q.lineWidth % 2 ? (n(a) ? d : this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : n(a) ? d : this.parent.convertValueToPixel(v.dataPoint.y) << 0, l.text = this.labelFormatter ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.parent.options,
                          crosshair: this.options,
                          value: v.dataPoint.y
                      }) : n(this.options.label) ? X(b ? b : v.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = v.dataPoint.y);
                  g =
                      f = z;
                  c = this.chart.plotArea.x1;
                  h = this.chart.plotArea.x2;
                  this.bounds = {
                      x1: c,
                      y1: g - r / 2,
                      x2: h,
                      y2: f + r / 2
                  };
                  l.y = f + l.fontSize / 2 - l.measureText().height / 2 + 2;
                  l.y - l.fontSize / 2 < this.chart.bounds.y1 ? l.y = this.chart.bounds.y1 + l.fontSize / 2 + 2 : l.y + l.measureText().height - l.fontSize / 2 > this.chart.bounds.y2 && (l.y = this.chart.bounds.y2 - l.measureText().height + l.fontSize / 2);
                  "left" === this.parent._position ? l.x = this.parent.lineCoordinates.x2 - l.measureText().width : "right" === this.parent._position && (l.x = this.parent.lineCoordinates.x2)
              }
              p =
                  null;
              if ("bottom" === this.parent._position || "top" === this.parent._position) "top" === this.parent._position && l.y - l.fontSize / 2 < this.chart.bounds.y1 && (l.y = this.chart.bounds.y1 + l.fontSize / 2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - l.fontSize / 2 + l.measureText().height > this.chart.bounds.y2 && (l.y = this.chart.bounds.y2 - l.height + l.fontSize / 2 + 2), c >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && h <= this.parent.convertValueToPixel(this.parent.reversed ?
                  this.parent.viewportMinimum : this.parent.viewportMaximum) && (0 < r && (q.moveTo(c, g), q.lineTo(h, f), q.stroke(), this._hidden = !1), q.restore(), !n(l.text) && ("number" === typeof l.text.valueOf() || 0 < l.text.length) && l.render(!0));
              if ("left" === this.parent._position || "right" === this.parent._position) "left" === this.parent._position && l.x < this.chart.bounds.x1 && (l.x = this.chart.bounds.x1), "right" === this.parent._position && l.x + l.measureText().width > this.chart.bounds.x2 && (l.x = this.chart.bounds.x2 - l.measureText().width), f >= this.parent.convertValueToPixel(this.parent.reversed ?
                  this.parent.viewportMinimum : this.parent.viewportMaximum) && g <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && (0 < r && (q.moveTo(c, g), q.lineTo(h, f), q.stroke(), this._hidden = !1), q.restore(), !n(l.text) && ("number" === typeof l.text.valueOf() || 0 < l.text.length) && l.render(!0))
          } else {
              if ("bottom" === this.parent._position || "top" === this.parent._position) c = h = m = 1 === q.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, g = this.chart.plotArea.y1, f = this.chart.plotArea.y2, this.bounds = {
                  x1: c - r / 2,
                  y1: g,
                  x2: h + r / 2,
                  y2: f
              };
              else if ("left" === this.parent._position || "right" === this.parent._position) g = f = z = 1 === q.lineWidth % 2 ? (d << 0) + 0.5 : d << 0, c = this.chart.plotArea.x1, h = this.chart.plotArea.x2, this.bounds = {
                  x1: c,
                  y1: g - r / 2,
                  x2: h,
                  y2: f + r / 2
              };
              if ("xySwapped" === this.chart.plotInfo.axisPlacement)
                  if ("left" === this.parent._position || "right" === this.parent._position) {
                      E = !1;
                      if (this.parent.labels)
                          for (p = Math.ceil(this.parent.interval), w = 0; w < this.parent.viewportMaximum; w += p)
                              if (this.parent.labels[w]) E = !0;
                              else {
                                  E = !1;
                                  break
                              } if (E) {
                          if ("axisX" ===
                              this.parent.type)
                              for (w = this.parent.convertPixelToValue({
                                      y: d
                                  }), u = null, x = 0; x < this.parent.dataSeries.length; x++)(u = this.parent.dataSeries[x].getDataPointAtX(w, !0)) && 0 <= u.index && (l.text = this.labelFormatter ? this.labelFormatter({
                                  chart: this.chart,
                                  axis: this.parent.options,
                                  crosshair: this.options,
                                  value: b ? b : this.parent.convertPixelToValue(a)
                              }) : n(this.options.label) ? u.dataPoint.label : this.label)
                      } else "dateTime" === this.parent.valueType ? l.text = this.labelFormatter ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.parent.options,
                          crosshair: this.options,
                          value: b ? b : this.parent.convertPixelToValue(d)
                      }) : n(this.options.label) ? ma(b ? b : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (l.text = this.labelFormatter ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.parent.options,
                          crosshair: this.options,
                          value: b ? b : this.parent.convertPixelToValue(d)
                      }) : n(this.options.label) ? X(b ? b : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label);
                      l.y = d + l.fontSize / 2 - l.measureText().height / 2 + 2;
                      l.y - l.fontSize / 2 < this.chart.bounds.y1 ? l.y = this.chart.bounds.y1 + l.fontSize / 2 + 2 : l.y + l.measureText().height - l.fontSize / 2 > this.chart.bounds.y2 && (l.y = this.chart.bounds.y2 - l.measureText().height + l.fontSize / 2);
                      "left" === this.parent._position ? l.x = this.parent.lineCoordinates.x1 - l.measureText().width : "right" === this.parent._position && (l.x = this.parent.lineCoordinates.x2)
                  } else {
                      if ("bottom" === this.parent._position || "top" === this.parent._position) l.text = this.labelFormatter ?
                          this.labelFormatter({
                              chart: this.chart,
                              axis: this.parent.options,
                              crosshair: this.options,
                              value: b ? b : this.parent.convertPixelToValue(a)
                          }) : n(this.options.label) ? X(b ? b : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label, l.x = c - l.measureText().width / 2, l.x + l.width > this.chart.bounds.x2 && (l.x = this.chart.bounds.x2 - l.width), l.x < this.chart.bounds.x1 && (l.x = this.chart.bounds.x1), "bottom" === this.parent._position ? l.y = this.parent.lineCoordinates.y2 + l.fontSize / 2 + 2 : "top" === this.parent._position &&
                          (l.y = this.parent.lineCoordinates.y1 - l.height + l.fontSize / 2 + 2)
                  }
              else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                  E = !1;
                  p = "";
                  if (this.parent.labels)
                      for (p = Math.ceil(this.parent.interval), w = 0; w < this.parent.viewportMaximum; w += p)
                          if (this.parent.labels[w]) E = !0;
                          else {
                              E = !1;
                              break
                          } if (E) {
                      if ("axisX" === this.parent.type)
                          for (w = this.parent.convertPixelToValue({
                                  x: a
                              }), u = null, x = 0; x < this.parent.dataSeries.length; x++)(u = this.parent.dataSeries[x].getDataPointAtX(w, !0)) && 0 <= u.index && (l.text = this.labelFormatter ?
                              this.labelFormatter({
                                  chart: this.chart,
                                  axis: this.parent.options,
                                  crosshair: this.options,
                                  value: b ? b : this.parent.convertPixelToValue(a)
                              }) : n(this.options.label) ? b ? b : u.dataPoint.label : this.label)
                  } else "dateTime" === this.parent.valueType ? l.text = this.labelFormatter ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.parent.options,
                          crosshair: this.options,
                          value: b ? b : this.parent.convertPixelToValue(a)
                      }) : n(this.options.label) ? ma(b ? b : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label :
                      "number" === this.parent.valueType && (l.text = this.labelFormatter ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.parent.options,
                          crosshair: this.options,
                          value: b ? b : 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : ""
                      }) : n(this.options.label) ? X(b ? b : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label);
                  l.x = c - l.measureText().width / 2;
                  l.x + l.width > this.chart.bounds.x2 && (l.x = this.chart.bounds.x2 - l.width);
                  l.x < this.chart.bounds.x1 && (l.x = this.chart.bounds.x1);
                  "bottom" === this.parent._position ? l.y = this.parent.lineCoordinates.y2 + l.fontSize / 2 + 2 : "top" === this.parent._position && (l.y = this.parent.lineCoordinates.y1 - l.height + l.fontSize / 2 + 2)
              } else if ("left" === this.parent._position || "right" === this.parent._position) l.text = this.labelFormatter ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: b ? b : this.parent.convertPixelToValue(d)
                  }) : n(this.options.label) ? X(b ? b : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) :
                  this.label, l.y = d + l.fontSize / 2 - l.measureText().height / 2 + 2, l.y - l.fontSize / 2 < this.chart.bounds.y1 ? l.y = this.chart.bounds.y1 + l.fontSize / 2 + 2 : l.y + l.measureText().height - l.fontSize / 2 > this.chart.bounds.y2 && (l.y = this.chart.bounds.y2 - l.measureText().height + l.fontSize / 2), "left" === this.parent._position ? l.x = this.parent.lineCoordinates.x2 - l.measureText().width : "right" === this.parent._position && (l.x = this.parent.lineCoordinates.x2);
              "left" === this.parent._position && l.x < this.chart.bounds.x1 ? l.x = this.chart.bounds.x1 : "right" ===
                  this.parent._position && l.x + l.measureText().width > this.chart.bounds.x2 ? l.x = this.chart.bounds.x2 - l.measureText().width : "top" === this.parent._position && l.y - l.fontSize / 2 < this.chart.bounds.y1 ? l.y = this.chart.bounds.y1 + l.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - l.fontSize / 2 + l.measureText().height > this.chart.bounds.y2 && (l.y = this.chart.bounds.y2 - l.height + l.fontSize / 2 + 2);
              0 < r && (q.moveTo(c, g), q.lineTo(h, f), q.stroke(), this._hidden = !1);
              q.restore();
              !n(l.text) && ("number" === typeof l.text.valueOf() ||
                  0 < l.text.length) && l.render(!0);
              this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(d)
          }
          if ("bottom" === this.parent._position || "top" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(m);
          if ("left" === this.parent._position || "right" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(z);
          q.globalAlpha = k
      };
      ga(ba, S);
      ba.prototype._initialize = function() {
          this.updateOption("updated");
          this.updateOption("hidden");
          if (this.enabled) {
              this.container = document.createElement("div");
              this.container.setAttribute("class", "canvasjs-chart-tooltip");
              this.container.style.position = "absolute";
              this.container.style.height = "auto";
              this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
              this.container.style.zIndex = "1000";
              this.container.style.pointerEvents = "none";
              this.container.style.display = "none";
              var a;
              a = '<div style=" width: auto;height: auto;min-width: 50px;';
              a += "line-height: auto;";
              a += "margin: 0px 0px 0px 0px;";
              a += "padding: 5px;";
              a += "font-family: Calibri, Arial, Georgia, serif;";
              a += "font-weight: normal;";
              a += "font-style: " + (x ? "italic;" : "normal;");
              a += "font-size: 14px;";
              a += "color: #000000;";
              a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
              a += "text-align: left;";
              a += "border: 2px solid gray;";
              a += x ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
              a += "text-indent: 0px;";
              a += "white-space: nowrap;";
              a += "border-radius: 5px;";
              a += "-moz-user-select:none;";
              a += "-khtml-user-select: none;";
              a += "-webkit-user-select: none;";
              a += "-ms-user-select: none;";
              a += "user-select: none;";
              x || (a += "filter: alpha(opacity = 90);", a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
              a += '} "> Sample Tooltip</div>';
              this.container.innerHTML = a;
              this.contentDiv = this.container.firstChild;
              this.container.style.borderRadius = this.contentDiv.style.borderRadius;
              this.chart._canvasJSContainer.appendChild(this.container)
          }
      };
      ba.prototype.mouseMoveHandler = function(a, d) {
          this._lastUpdated && 4 > (new Date).getTime() -
              this._lastUpdated || (this._lastUpdated = (new Date).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, d))
      };
      ba.prototype._updateToolTip = function(a, d, b) {
          b = "undefined" === typeof b ? !0 : b;
          this.container || this._initialize();
          this.enabled || (this.hide(), this.dispatchEvent("hidden", {
              chart: this.chart,
              toolTip: this
          }, this));
          if (!this.chart.disableToolTip) {
              if ("undefined" === typeof a || "undefined" === typeof d) {
                  if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                  a = this._prevX;
                  d = this._prevY
              } else this._prevX = a,
                  this._prevY = d;
              var c = null,
                  h = null,
                  g = [],
                  f = 0;
              if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                  if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                      var m = [];
                      if (this.chart.axisX)
                          for (var w = 0; w < this.chart.axisX.length; w++) {
                              for (var f = this.chart.axisX[w].convertPixelToValue({
                                      y: d
                                  }), l = null, c = 0; c < this.chart.axisX[w].dataSeries.length; c++)(l = this.chart.axisX[w].dataSeries[c].getDataPointAtX(f, b)) && 0 <= l.index && (l.dataSeries = this.chart.axisX[w].dataSeries[c], null !== l.dataPoint.y && m.push(l));
                              l = null
                          }
                      if (this.chart.axisX2)
                          for (w = 0; w < this.chart.axisX2.length; w++) {
                              f = this.chart.axisX2[w].convertPixelToValue({
                                  y: d
                              });
                              l = null;
                              for (c = 0; c < this.chart.axisX2[w].dataSeries.length; c++)(l = this.chart.axisX2[w].dataSeries[c].getDataPointAtX(f, b)) && 0 <= l.index && (l.dataSeries = this.chart.axisX2[w].dataSeries[c], null !== l.dataPoint.y && m.push(l));
                              l = null
                          }
                  } else {
                      m = [];
                      if (this.chart.axisX)
                          for (w = 0; w < this.chart.axisX.length; w++)
                              for (f = this.chart.axisX[w].convertPixelToValue({
                                      x: a
                                  }), l = null, c = 0; c < this.chart.axisX[w].dataSeries.length; c++)(l =
                                  this.chart.axisX[w].dataSeries[c].getDataPointAtX(f, b)) && 0 <= l.index && (l.dataSeries = this.chart.axisX[w].dataSeries[c], null !== l.dataPoint.y && m.push(l));
                      if (this.chart.axisX2)
                          for (w = 0; w < this.chart.axisX2.length; w++)
                              for (f = this.chart.axisX2[w].convertPixelToValue({
                                      x: a
                                  }), l = null, c = 0; c < this.chart.axisX2[w].dataSeries.length; c++)(l = this.chart.axisX2[w].dataSeries[c].getDataPointAtX(f, b)) && 0 <= l.index && (l.dataSeries = this.chart.axisX2[w].dataSeries[c], null !== l.dataPoint.y && m.push(l))
                  }
                  if (0 === m.length) return;
                  m.sort(function(a,
                      b) {
                      return a.distance - b.distance
                  });
                  b = m[0];
                  for (c = 0; c < m.length; c++) m[c].dataPoint.x.valueOf() === b.dataPoint.x.valueOf() && g.push(m[c]);
                  m = null
              } else {
                  if (l = this.chart.getDataPointAtXY(a, d, b)) this.currentDataPointIndex = l.dataPointIndex, this.currentSeriesIndex = l.dataSeries.index;
                  else if (x)
                      if (l = lb(a, d, this.chart._eventManager.ghostCtx), 0 < l && "undefined" !== typeof this.chart._eventManager.objectMap[l]) {
                          l = this.chart._eventManager.objectMap[l];
                          if ("legendItem" === l.objectType) return;
                          this.currentSeriesIndex = l.dataSeriesIndex;
                          this.currentDataPointIndex = 0 <= l.dataPointIndex ? l.dataPointIndex : -1
                      } else this.currentDataPointIndex = -1;
                  else this.currentDataPointIndex = -1;
                  if (0 <= this.currentSeriesIndex) {
                      h = this.chart.data[this.currentSeriesIndex];
                      l = {};
                      if (0 <= this.currentDataPointIndex) c = h.dataPoints[this.currentDataPointIndex], l.dataSeries = h, l.dataPoint = c, l.index = this.currentDataPointIndex, l.distance = Math.abs(c.x - f), "waterfall" === h.type && (l.cumulativeSumYStartValue = h.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue,
                          l.cumulativeSum = h.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                      else {
                          if (!this.enabled || "line" !== h.type && "stepLine" !== h.type && "spline" !== h.type && "area" !== h.type && "stepArea" !== h.type && "splineArea" !== h.type && "stackedArea" !== h.type && "stackedArea100" !== h.type && "rangeArea" !== h.type && "rangeSplineArea" !== h.type && "candlestick" !== h.type && "ohlc" !== h.type && "boxAndWhisker" !== h.type) return;
                          f = h.axisX.convertPixelToValue({
                              x: a
                          });
                          l = h.getDataPointAtX(f, b);
                          n(l) || (l.dataSeries = h, this.currentDataPointIndex = l.index,
                              c = l.dataPoint)
                      }
                      if (!n(l) && !n(l.dataPoint) && !n(l.dataPoint.y))
                          if (l.dataSeries.axisY)
                              if (0 < l.dataPoint.y.length) {
                                  for (c = b = 0; c < l.dataPoint.y.length; c++) l.dataPoint.y[c] < l.dataSeries.axisY.viewportMinimum ? b-- : l.dataPoint.y[c] > l.dataSeries.axisY.viewportMaximum && b++;
                                  b < l.dataPoint.y.length && b > -l.dataPoint.y.length && g.push(l)
                              } else "column" === h.type || "bar" === h.type ? 0 > l.dataPoint.y ? 0 > l.dataSeries.axisY.viewportMinimum && l.dataSeries.axisY.viewportMaximum >= l.dataPoint.y && g.push(l) : l.dataSeries.axisY.viewportMinimum <=
                                  l.dataPoint.y && 0 <= l.dataSeries.axisY.viewportMaximum && g.push(l) : "bubble" === h.type ? (b = this.chart._eventManager.objectMap[h.dataPointIds[l.index]].size / 2, l.dataPoint.y >= l.dataSeries.axisY.viewportMinimum - b && l.dataPoint.y <= l.dataSeries.axisY.viewportMaximum + b && g.push(l)) : "waterfall" === h.type ? (b = 0, l.cumulativeSumYStartValue < l.dataSeries.axisY.viewportMinimum ? b-- : l.cumulativeSumYStartValue > l.dataSeries.axisY.viewportMaximum && b++, l.cumulativeSum < l.dataSeries.axisY.viewportMinimum ? b-- : l.cumulativeSum > l.dataSeries.axisY.viewportMaximum &&
                                      b++, 2 > b && -2 < b && g.push(l)) : (0 <= l.dataSeries.type.indexOf("100") || "stackedColumn" === h.type || "stackedBar" === h.type || l.dataPoint.y >= l.dataSeries.axisY.viewportMinimum && l.dataPoint.y <= l.dataSeries.axisY.viewportMaximum) && g.push(l);
                      else g.push(l)
                  }
              }
              if (0 < g.length) {
                  this.highlightObjects(g);
                  if (this.enabled) {
                      var p = "",
                          p = this.getToolTipInnerHTML({
                              entries: g
                          });
                      if (null !== p) {
                          this.contentDiv.innerHTML = p;
                          b = !1;
                          "none" === this.container.style.display && (b = !0, this.container.style.display = "block");
                          try {
                              this.contentDiv.style.background =
                                  this.backgroundColor ? this.backgroundColor : x ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : 0 < g[0].dataPoint.y ? g[0].dataSeries.risingColor : g[0].dataSeries.fallingColor : "error" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor =
                                  this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[h.index % g[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[g[0].index % g[0].dataSeries._colorSet.length],
                                  this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily :
                                  "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : x ? "italic" : "normal"
                          } catch (r) {}
                          "pie" === g[0].dataSeries.type || "doughnut" === g[0].dataSeries.type || "funnel" === g[0].dataSeries.type || "pyramid" === g[0].dataSeries.type || "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? a = a - 10 - this.container.clientWidth :
                              (a = g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                          0 > a && (a += this.container.clientWidth + 20);
                          a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                          d = 1 !== g.length || this.shared || "line" !== g[0].dataSeries.type && "stepLine" !== g[0].dataSeries.type && "spline" !== g[0].dataSeries.type && "area" !== g[0].dataSeries.type && "stepArea" !==
                              g[0].dataSeries.type && "splineArea" !== g[0].dataSeries.type ? "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) : d : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);
                          d = -d + 10;
                          0 < d + this.container.clientHeight + 5 && (d -= d + this.container.clientHeight + 5 - 0);
                          this.fixMozTransitionDelay(a, d);
                          !this.animationEnabled || b ? this.disableAnimation() : (this.enableAnimation(),
                              this.container.style.MozTransition = this.mozContainerTransition);
                          this.positionLeft = a;
                          this.positionBottom = d;
                          this.container.style.left = a + "px";
                          this.container.style.bottom = d + "px"
                      } else this.hide(!1), this.dispatchEvent("hidden", {
                          chart: this.chart,
                          toolTip: this
                      }, this)
                  }
                  d = [];
                  for (c = 0; c < g.length; c++) d.push({
                      xValue: g[c].dataPoint.x,
                      dataPoint: g[c].dataPoint,
                      dataSeries: g[c].dataSeries,
                      dataPointIndex: g[c].index,
                      dataSeriesIndex: g[c].dataSeries._index
                  });
                  p = {
                      chart: this.chart,
                      toolTip: this.options,
                      content: p,
                      entries: d
                  };
                  this._entries =
                      g;
                  this.dispatchEvent("updated", p, this)
              } else this.hide()
          }
      };
      ba.prototype.highlightObjects = function(a) {
          var e = this.chart.overlaidCanvasCtx;
          if (n(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas) this.chart.resetOverlayedCanvas(), e.clearRect(0, 0, this.chart.width, this.chart.height), this.chart.clearedOverlayedCanvas = "toolTip";
          e.save();
          var b = this.chart.plotArea,
              c = 0;
          e.beginPath();
          e.rect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1);
          e.clip();
          for (b = 0; b < a.length; b++) {
              var h = a[b];
              if ((h = this.chart._eventManager.objectMap[h.dataSeries.dataPointIds[h.index]]) &&
                  h.objectType && "dataPoint" === h.objectType) {
                  var c = this.chart.data[h.dataSeriesIndex],
                      g = c.dataPoints[h.dataPointIndex],
                      f = h.dataPointIndex;
                  !1 === g.highlightEnabled || !0 !== c.highlightEnabled && !0 !== g.highlightEnabled || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "scatter" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type ? (g = c.getMarkerProperties(f, h.x1, h.y1, this.chart.overlaidCanvasCtx),
                          g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), u.drawMarkers([g]), "undefined" !== typeof h.y2 && (g = c.getMarkerProperties(f, h.x1, h.y2, this.chart.overlaidCanvasCtx), g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), u.drawMarkers([g]))) : "bubble" === c.type ? (g = c.getMarkerProperties(f, h.x1, h.y1, this.chart.overlaidCanvasCtx), g.size = h.size, g.color =
                          "white", g.borderColor = "white", e.globalAlpha = 0.3, u.drawMarkers([g]), e.globalAlpha = 1) : "column" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "bar" === c.type || "rangeBar" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "rangeColumn" === c.type || "waterfall" === c.type ? Z(e, h.x1, h.y1, h.x2, h.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === c.type || "doughnut" === c.type ? d(e, h.center, h.radius, "white", c.type, h.startAngle, h.endAngle, 0.3, h.percentInnerRadius) : "funnel" === c.type || "pyramid" === c.type ?
                      z(e, h.funnelSection, 0.3, "white") : "candlestick" === c.type ? (e.globalAlpha = 1, e.strokeStyle = h.color, e.lineWidth = 2 * h.borderThickness, c = 0 === e.lineWidth % 2 ? 0 : 0.5, e.beginPath(), e.moveTo(h.x3 - c, Math.min(h.y2, h.y3)), e.lineTo(h.x3 - c, Math.min(h.y1, h.y4)), e.stroke(), e.beginPath(), e.moveTo(h.x3 - c, Math.max(h.y1, h.y4)), e.lineTo(h.x3 - c, Math.max(h.y2, h.y3)), e.stroke(), Z(e, h.x1, Math.min(h.y1, h.y4), h.x2, Math.max(h.y1, h.y4), "transparent", 2 * h.borderThickness, h.color, !1, !1, !1, !1), e.globalAlpha = 1) : "ohlc" === c.type ? (e.globalAlpha =
                          1, e.strokeStyle = h.color, e.lineWidth = 2 * h.borderThickness, c = 0 === e.lineWidth % 2 ? 0 : 0.5, e.beginPath(), e.moveTo(h.x3 - c, h.y2), e.lineTo(h.x3 - c, h.y3), e.stroke(), e.beginPath(), e.moveTo(h.x3, h.y1), e.lineTo(h.x1, h.y1), e.stroke(), e.beginPath(), e.moveTo(h.x3, h.y4), e.lineTo(h.x2, h.y4), e.stroke(), e.globalAlpha = 1) : "boxAndWhisker" === c.type ? (e.save(), e.globalAlpha = 1, e.strokeStyle = h.stemColor, e.lineWidth = 2 * h.stemThickness, 0 < h.stemThickness && (e.beginPath(), e.moveTo(h.x3, h.y2 + h.borderThickness / 2), e.lineTo(h.x3, h.y1 + h.whiskerThickness /
                          2), e.stroke(), e.beginPath(), e.moveTo(h.x3, h.y4 - h.whiskerThickness / 2), e.lineTo(h.x3, h.y3 - h.borderThickness / 2), e.stroke()), e.beginPath(), Z(e, h.x1 - h.borderThickness / 2, Math.max(h.y2 + h.borderThickness / 2, h.y3 + h.borderThickness / 2), h.x2 + h.borderThickness / 2, Math.min(h.y2 - h.borderThickness / 2, h.y3 - h.borderThickness / 2), "transparent", h.borderThickness, h.color, !1, !1, !1, !1), e.globalAlpha = 1, e.strokeStyle = h.whiskerColor, e.lineWidth = 2 * h.whiskerThickness, 0 < h.whiskerThickness && (e.beginPath(), e.moveTo(Math.floor(h.x3 -
                          h.whiskerLength / 2), h.y4), e.lineTo(Math.ceil(h.x3 + h.whiskerLength / 2), h.y4), e.stroke(), e.beginPath(), e.moveTo(Math.floor(h.x3 - h.whiskerLength / 2), h.y1), e.lineTo(Math.ceil(h.x3 + h.whiskerLength / 2), h.y1), e.stroke()), e.globalAlpha = 1, e.strokeStyle = h.lineColor, e.lineWidth = 2 * h.lineThickness, 0 < h.lineThickness && (e.beginPath(), e.moveTo(h.x1, h.y5), e.lineTo(h.x2, h.y5), e.stroke()), e.restore(), e.globalAlpha = 1) : "error" === c.type && G(e, h.x1, h.y1, h.x2, h.y2, "white", h.whiskerProperties, h.stemProperties, h.isXYSwapped, 0.3))
              }
          }
          e.restore();
          e.globalAlpha = 1;
          e.beginPath()
      };
      ba.prototype.getToolTipInnerHTML = function(a) {
          a = a.entries;
          for (var d = null, b = null, c = null, h = 0, g = "", f = !0, m = 0; m < a.length; m++)
              if (a[m].dataSeries.toolTipContent || a[m].dataPoint.toolTipContent) {
                  f = !1;
                  break
              } if (f && (this.content && "function" === typeof this.content || this.contentFormatter)) a = {
              chart: this.chart,
              toolTip: this.options,
              entries: a
          }, d = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
          else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
              for (var w = null,
                      l = "", m = 0; m < a.length; m++) b = a[m].dataSeries, c = a[m].dataPoint, h = a[m].index, g = "", 0 === m && (f && !this.content) && (this.chart.axisX && 0 < this.chart.axisX.length ? l += "undefined" !== typeof this.chart.axisX[0].labels[c.x] ? this.chart.axisX[0].labels[c.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (l += "undefined" !== typeof this.chart.axisX2[0].labels[c.x] ? this.chart.axisX2[0].labels[c.x] : "{x}"), l += "</br>", l = this.chart.replaceKeywordsWithValue(l, c, b, h)), null === c.toolTipContent || "undefined" === typeof c.toolTipContent &&
                  null === b.options.toolTipContent || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "waterfall" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += w != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" :
                          ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}", w = b.axisXIndex) : "bubble" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += w != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ?
                          this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}") : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += w != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content :
                          "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}") : "candlestick" === b.type || "ohlc" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += w != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}") :
                      "boxAndWhisker" === b.type && (this.chart.axisX && 1 < this.chart.axisX.length && (g += w != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"),
                      null === d && (d = ""), !0 === this.reversed ? (d = this.chart.replaceKeywordsWithValue(g, c, b, h) + d, m < a.length - 1 && (d = "</br>" + d)) : (d += this.chart.replaceKeywordsWithValue(g, c, b, h), m < a.length - 1 && (d += "</br>")));
              null !== d && (d = l + d)
          } else {
              b = a[0].dataSeries;
              c = a[0].dataPoint;
              h = a[0].index;
              if (null === c.toolTipContent || "undefined" === typeof c.toolTipContent && null === b.options.toolTipContent) return null;
              "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" ===
                  b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "waterfall" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === b.type ? g = c.toolTipContent ?
                  c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === b.type || "doughnut" === b.type || "funnel" === b.type || "pyramid" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" :
                      "'color:{color};'") + "\"'>" + (c.name ? "{name}:</span>&nbsp;&nbsp;" : c.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" :
                  "candlestick" === b.type || "ohlc" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === b.type && (g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent :
                      this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
              null === d && (d = "");
              d += this.chart.replaceKeywordsWithValue(g, c, b, h)
          }
          return d
      };
      ba.prototype.enableAnimation = function() {
          if (!this.container.style.WebkitTransition) {
              var a = this.getContainerTransition(this.containerTransitionDuration);
              this.container.style.WebkitTransition = a;
              this.container.style.MsTransition = a;
              this.container.style.transition = a;
              this.container.style.MozTransition = this.mozContainerTransition
          }
      };
      ba.prototype.disableAnimation = function() {
          this.container.style.WebkitTransition && (this.container.style.WebkitTransition =
              "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
      };
      ba.prototype.hide = function(a) {
          this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas())
      };
      ba.prototype.show = function(a, d, b) {
          this._updateToolTip(a, d, "undefined" === typeof b ? !1 : b)
      };
      ba.prototype.showAtIndex = function(a, d) {};
      ba.prototype.showAtX = function(a, d) {
          if (!this.enabled) return !1;
          this.chart.clearedOverlayedCanvas = null;
          var b, c, h, g = [];
          h = !1;
          d = !n(d) && 0 <= d && d < this.chart.data.length ? d : 0;
          if (this.shared)
              for (var f = 0; f < this.chart.data.length; f++) b = this.chart.data[f], (c = b.getDataPointAtX(a, !1)) && (c.dataPoint && !n(c.dataPoint.y) && b.visible) && (c.dataSeries = b, g.push(c));
          else b = this.chart.data[d], (c = b.getDataPointAtX(a, !1)) && (c.dataPoint && !n(c.dataPoint.y) && b.visible) && (c.dataSeries = b, g.push(c));
          if (0 < g.length) {
              for (f = 0; f < g.length; f++)
                  if (c = g[f], c.dataPoint.x < c.dataSeries.axisX.viewportMinimum ||
                      c.dataPoint.x > c.dataSeries.axisX.viewportMaximum || c.dataPoint.y < c.dataSeries.axisY.viewportMinimum || c.dataPoint.y > c.dataSeries.axisY.viewportMaximum) h = !0;
                  else {
                      h = !1;
                      break
                  } if (h) return this.hide(), !1;
              this.highlightObjects(g);
              this._entries = g;
              c = "";
              c = this.getToolTipInnerHTML({
                  entries: g
              });
              if (null !== c) {
                  this.contentDiv.innerHTML = c;
                  c = !1;
                  "none" === this.container.style.display && (c = !0, this.container.style.display = "block");
                  try {
                      this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : x ? "rgba(255,255,255,.9)" :
                          "rgb(255,255,255)", this.borderColor = "waterfall" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : 0 < g[0].dataPoint.y ? g[0].dataSeries.risingColor : g[0].dataSeries.fallingColor : "error" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ?
                          this.options.borderColor : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[b.index % g[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[g[0].index % g[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness ||
                          0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight =
                          this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : x ? "italic" : "normal"
                  } catch (m) {}
                  "pie" === g[0].dataSeries.type || "doughnut" === g[0].dataSeries.type || "funnel" === g[0].dataSeries.type || "pyramid" === g[0].dataSeries.type ? b = mouseX - 10 - this.container.clientWidth : (b = "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y) -
                      this.container.clientWidth << 0 : g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) - this.container.clientWidth << 0, b -= 10);
                  0 > b && (b += this.container.clientWidth + 20);
                  b + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (b = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                  g = 1 !== g.length || this.shared || "line" !== g[0].dataSeries.type && "stepLine" !== g[0].dataSeries.type && "spline" !== g[0].dataSeries.type && "area" !== g[0].dataSeries.type &&
                      "stepArea" !== g[0].dataSeries.type && "splineArea" !== g[0].dataSeries.type ? "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y) : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);
                  g = -g + 10;
                  0 < g + this.container.clientHeight + 5 && (g -= g + this.container.clientHeight + 5 - 0);
                  this.fixMozTransitionDelay(b,
                      g);
                  !this.animationEnabled || c ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                  this.container.style.left = b + "px";
                  this.container.style.bottom = g + "px"
              } else return this.hide(!1), !1
          } else return this.hide(), !1;
          return !0
      };
      ba.prototype.fixMozTransitionDelay = function(a, d) {
          if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition = this.getContainerTransition(0);
          else {
              var b = parseFloat(this.container.style.left),
                  b = isNaN(b) ? 0 : b,
                  c = parseFloat(this.container.style.bottom),
                  c = isNaN(c) ? 0 : c;
              10 < Math.sqrt(Math.pow(b - a, 2) + Math.pow(c - d, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0)
          }
      };
      ba.prototype.getContainerTransition = function(a) {
          return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s"
      };
      $.prototype.reset = function() {
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.eventObjects = [];
          x && (this.ghostCtx.clearRect(0, 0, this.chart.width,
              this.chart.height), this.ghostCtx.beginPath())
      };
      $.prototype.getNewObjectTrackingId = function() {
          return ++this.lastObjectId
      };
      $.prototype.mouseEventHandler = function(a) {
          if ("mousemove" === a.type || "click" === a.type) {
              var d = [],
                  b = Aa(a),
                  c = null;
              if ((c = this.chart.getObjectAtXY(b.x, b.y, !1)) && "undefined" !== typeof this.objectMap[c])
                  if (c = this.objectMap[c], "dataPoint" === c.objectType) {
                      var h = this.chart.data[c.dataSeriesIndex],
                          g = h.dataPoints[c.dataPointIndex],
                          f = c.dataPointIndex;
                      c.eventParameter = {
                          x: b.x,
                          y: b.y,
                          dataPoint: g,
                          dataSeries: h.options,
                          dataPointIndex: f,
                          dataSeriesIndex: h.index,
                          chart: this.chart
                      };
                      c.eventContext = {
                          context: g,
                          userContext: g,
                          mouseover: "mouseover",
                          mousemove: "mousemove",
                          mouseout: "mouseout",
                          click: "click"
                      };
                      d.push(c);
                      c = this.objectMap[h.id];
                      c.eventParameter = {
                          x: b.x,
                          y: b.y,
                          dataPoint: g,
                          dataSeries: h.options,
                          dataPointIndex: f,
                          dataSeriesIndex: h.index,
                          chart: this.chart
                      };
                      c.eventContext = {
                          context: h,
                          userContext: h.options,
                          mouseover: "mouseover",
                          mousemove: "mousemove",
                          mouseout: "mouseout",
                          click: "click"
                      };
                      d.push(this.objectMap[h.id])
                  } else "legendItem" ===
                      c.objectType && (h = this.chart.data[c.dataSeriesIndex], g = null !== c.dataPointIndex ? h.dataPoints[c.dataPointIndex] : null, c.eventParameter = {
                          x: b.x,
                          y: b.y,
                          dataSeries: h.options,
                          dataPoint: g,
                          dataPointIndex: c.dataPointIndex,
                          dataSeriesIndex: c.dataSeriesIndex,
                          chart: this.chart
                      }, c.eventContext = {
                          context: this.chart.legend,
                          userContext: this.chart.legend.options,
                          mouseover: "itemmouseover",
                          mousemove: "itemmousemove",
                          mouseout: "itemmouseout",
                          click: "itemclick"
                      }, d.push(c));
              h = [];
              for (b = 0; b < this.mouseoveredObjectMaps.length; b++) {
                  g = !0;
                  for (c = 0; c < d.length; c++)
                      if (d[c].id === this.mouseoveredObjectMaps[b].id) {
                          g = !1;
                          break
                      } g ? this.fireEvent(this.mouseoveredObjectMaps[b], "mouseout", a) : h.push(this.mouseoveredObjectMaps[b])
              }
              this.mouseoveredObjectMaps = h;
              for (b = 0; b < d.length; b++) {
                  h = !1;
                  for (c = 0; c < this.mouseoveredObjectMaps.length; c++)
                      if (d[b].id === this.mouseoveredObjectMaps[c].id) {
                          h = !0;
                          break
                      } h || (this.fireEvent(d[b], "mouseover", a), this.mouseoveredObjectMaps.push(d[b]));
                  "click" === a.type ? this.fireEvent(d[b], "click", a) : "mousemove" === a.type && this.fireEvent(d[b],
                      "mousemove", a)
              }
          }
      };
      $.prototype.fireEvent = function(a, d, b) {
          if (a && d) {
              var c = a.eventParameter,
                  h = a.eventContext,
                  g = a.eventContext.userContext;
              g && (h && g[h[d]]) && g[h[d]].call(g, c);
              "mouseout" !== d ? g.cursor && g.cursor !== b.target.style.cursor && (b.target.style.cursor = g.cursor) : (b.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
              "click" === d && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex],
                  c);
              "click" === d && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], c)
          }
      };
      ea.prototype.animate = function(a, d, b, c, h) {
          var g = this;
          this.chart.isAnimating = !0;
          h = h || w.easing.linear;
          b && this.animations.push({
              startTime: (new Date).getTime() + (a ? a : 0),
              duration: d,
              animationCallback: b,
              onComplete: c
          });
          for (a = []; 0 < this.animations.length;)
              if (d = this.animations.shift(), b = (new Date).getTime(), c = 0, d.startTime <= b && (c = h(Math.min(b - d.startTime,
                      d.duration), 0, 1, d.duration), c = Math.min(c, 1), isNaN(c) || !isFinite(c)) && (c = 1), 1 > c && a.push(d), d.animationCallback(c), 1 <= c && d.onComplete) d.onComplete();
          this.animations = a;
          0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
              g.animate.call(g)
          }) : this.chart.isAnimating = !1
      };
      ea.prototype.cancelAllAnimations = function() {
          this.animations = [];
          this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
          this.animationRequestId = null;
          this.chart.isAnimating = !1
      };
      var w = {
              yScaleAnimation: function(a, d) {
                  if (0 !== a) {
                      var b = d.dest,
                          c = d.source.canvas,
                          h = d.animationBase;
                      b.drawImage(c, 0, 0, c.width, c.height, 0, h - h * a, b.canvas.width / ka, a * b.canvas.height / ka)
                  }
              },
              xScaleAnimation: function(a, d) {
                  if (0 !== a) {
                      var b = d.dest,
                          c = d.source.canvas,
                          h = d.animationBase;
                      b.drawImage(c, 0, 0, c.width, c.height, h - h * a, 0, a * b.canvas.width / ka, b.canvas.height / ka)
                  }
              },
              xClipAnimation: function(a, d) {
                  if (0 !== a) {
                      var b = d.dest,
                          c = d.source.canvas;
                      b.save();
                      0 < a && b.drawImage(c, 0, 0, c.width * a, c.height, 0, 0, c.width * a / ka, c.height /
                          ka);
                      b.restore()
                  }
              },
              fadeInAnimation: function(a, d) {
                  if (0 !== a) {
                      var b = d.dest,
                          c = d.source.canvas;
                      b.save();
                      b.globalAlpha = a;
                      b.drawImage(c, 0, 0, c.width, c.height, 0, 0, b.canvas.width / ka, b.canvas.height / ka);
                      b.restore()
                  }
              },
              easing: {
                  linear: function(a, d, b, c) {
                      return b * a / c + d
                  },
                  easeOutQuad: function(a, d, b, c) {
                      return -b * (a /= c) * (a - 2) + d
                  },
                  easeOutQuart: function(a, d, b, c) {
                      return -b * ((a = a / c - 1) * a * a * a - 1) + d
                  },
                  easeInQuad: function(a, d, b, c) {
                      return b * (a /= c) * a + d
                  },
                  easeInQuart: function(a, d, b, c) {
                      return b * (a /= c) * a * a * a + d
                  }
              }
          },
          u = {
              drawMarker: function(a,
                  d, b, c, h, g, f, m) {
                  if (b) {
                      var w = 1;
                      b.fillStyle = g ? g : "#000000";
                      b.strokeStyle = f ? f : "#000000";
                      b.lineWidth = m ? m : 0;
                      b.setLineDash && b.setLineDash(M("solid", m));
                      "circle" === c ? (b.moveTo(a, d), b.beginPath(), b.arc(a, d, h / 2, 0, 2 * Math.PI, !1), g && b.fill(), m && (f ? b.stroke() : (w = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = w))) : "square" === c ? (b.beginPath(), b.rect(a - h / 2, d - h / 2, h, h), g && b.fill(), m && (f ? b.stroke() : (w = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = w))) :
                          "triangle" === c ? (b.beginPath(), b.moveTo(a - h / 2, d + h / 2), b.lineTo(a + h / 2, d + h / 2), b.lineTo(a, d - h / 2), b.closePath(), g && b.fill(), m && (f ? b.stroke() : (w = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = w)), b.beginPath()) : "cross" === c && (b.strokeStyle = g, b.lineWidth = h / 4, b.beginPath(), b.moveTo(a - h / 2, d - h / 2), b.lineTo(a + h / 2, d + h / 2), b.stroke(), b.moveTo(a + h / 2, d - h / 2), b.lineTo(a - h / 2, d + h / 2), b.stroke())
                  }
              },
              drawMarkers: function(a) {
                  for (var d = 0; d < a.length; d++) {
                      var b = a[d];
                      u.drawMarker(b.x, b.y, b.ctx, b.type,
                          b.size, b.color, b.borderColor, b.borderThickness)
                  }
              }
          };
      return m
  }();
  Ka.version = "v3.2 GA";
  window.CanvasJS && (Ka && !window.CanvasJS.Chart) && (window.CanvasJS.Chart = Ka);
  $.StockChart = {
      width: 500,
      height: 600,
      backgroundColor: "white",
      theme: "light1",
      animationEnabled: !1,
      animationDuration: 1200,
      culture: "en",
      creditHref: "https://dathoc.net",
      creditText: "Dathoc.Net",
      exportEnabled: !1,
      exportFileName: "StockChart",
      colorSet: "colorSet1",
      rangeChanging: null,
      rangeChanged: null,
      publicProperties: {
          title: "readWrite",
          subtitles: "readWrite",
          navigator: "readWrite",
          rangeSelector: "readWrite",
          charts: "readWrite",
          options: "readWrite",
          bounds: "readOnly",
          container: "readOnly"
      }
  };
  $.Navigator = {
      enabled: !0,
      width: 500,
      height: 70,
      verticalAlign: "bottom",
      horizontalAlign: "center",
      dynamicUpdate: !0,
      backgroundColor: "#fff",
      animationEnabled: !1,
      animationDuration: 1200,
      theme: "light1",
      publicProperties: {
          slider: "readWrite",
          backgroundColor: "readWrite",
          animationEnabled: "readWrite",
          animationDuration: "readWrite",
          theme: "readWrite",
          axisX: "readWrite",
          axisY: "readWrite",
          axisX2: "readWrite",
          axisY2: "readWrite",
          data: "readWrite",
          options: "readWrite",
          bounds: "readOnly"
      }
  };
  $.RangeSelector = {
      enabled: !0,
      width: 500,
      height: 35,
      label: "Khoảng",
      verticalAlign: "top",
      horizontalAlign: "center",
      selectedRangeButtonIndex: null,
      publicProperties: {
          options: "readWrite",
          buttons: "readWrite",
          inputFields: "readWrite",
          buttonStyle: "readWrite",
          bounds: "readOnly"
      }
  };
  $.RangeButton = {
      range: null,
      rangeType: null,
      label: null,
      style: "position: inline; margin: 5px 0;text-align:center;cursor: pointer;",
      backgroundColorDisabled: "#ddd",
      publicProperties: {
          options: "readWrite",
          bounds: "readOnly"
      }
  };
  $.ButtonStyle = {
      backgroundColor: "#fff",
      backgroundColorOnHover: "#2196f3",
      backgroundColorOnSelect: "#2196f3",
      borderColor: "#2196f3",
      borderThickness: 2,
      labelFontColor: "#000",
      labelFontColorOnHover: "#fff",
      labelFontSize: 14,
      labelFontStyle: "normal",
      labelFontFamily: x ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
      labelFontWeight: "normal",
      width: null,
      maxWidth: null,
      padding: {
          left: 5,
          right: 5,
          top: 2,
          bottom: 2
      },
      spacing: 5,
      cursor: "pointer",
      publicProperties: {
          options: "readWrite"
      }
  };
  $.InputFields = {
      enabled: !0,
      startValue: null,
      endValue: null,
      valueType: "dateTime",
      valueFormatString: "MMM DD YYYY",
      publicProperties: {
          style: "readWrite",
          options: "readWrite"
      }
  };
  $.Style = {
      backgroundColor: "#fff",
      borderColor: "#2196f3",
      borderColorOnFocus: "#008eff",
      borderThickness: 2,
      fontColor: "#000",
      fontSize: 12,
      fontStyle: "normal",
      fontFamily: x ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
      fontWeight: "normal",
      width: null,
      maxWidth: null,
      padding: {
          left: 5,
          right: 5,
          top: 2,
          bottom: 2
      },
      spacing: 5,
      cursor: "text",
      publicProperties: {
          options: "readWrite"
      }
  };
  $.Slider = {
      maskColor: "#d9e8f9",
      maskInverted: !1,
      maskOpacity: 0.7,
      handleColor: "#ddd",
      handleBorderColor: "#aaa",
      handleBorderThickness: 1,
      handleWidth: 8,
      handleHeight: 18,
      minimum: null,
      maximum: null,
      outlineThickness: 1,
      outlineColor: "#666",
      outlineInverted: !1,
      publicProperties: {
          options: "readWrite"
      }
  };
  $.CultureInfo.rangeSelector = {
      fromText: "Từ",
      toText: "Đến",
      rangeText: "Khoảng"
  };
  J = "#FFFFFF";
  W = "#333333";
  L = "#000000";
  Fa = {
      colorSet: "colorSet1",
      backgroundColor: J,
      title: Fa.title,
      subtitles: Fa.subtitles,
      charts: [Fa],
      rangeSelector: {
          buttonStyle: {
              backgroundColor: "#FEFEFE",
              backgroundColorOnHover: "#41a5f5",
              backgroundColorOnSelect: "#2196f3",
              borderColor: "#2196f3",
              borderThickness: 1,
              labelFontColor: L,
              labelFontColorOnHover: "#ffffff",
              labelFontSize: 14,
              labelFontStyle: "normal",
              labelFontFamily: v,
              labelFontWeight: "normal",
              spacing: 0
          },
          inputFields: {
              style: {
                  backgroundColor: "#ffffff",
                  borderColor: "#2196f3",
                  borderColorOnFocus: "#2196f3",
                  borderThickness: 1,
                  fontColor: L,
                  fontSize: 14,
                  fontStyle: "normal",
                  fontFamily: v,
                  fontWeight: "normal"
              }
          }
      },
      navigator: {
          backgroundColor: J,
          slider: {
              maskColor: "#d9e8f9",
              maskOpacity: 0.6,
              handleColor: "#efefef",
              handleBorderColor: "#666666",
              handleBorderThickness: 1,
              outlineColor: "#666666",
              outlineThickness: 1
          }
      },
      toolbar: Fa.toolbar
  };
  J = "#FFFFFF";
  W = "#3A3A3A";
  L = "#666666";
  Ja = {
      colorSet: "colorSet2",
      backgroundColor: J,
      title: Ja.title,
      subtitles: Ja.subtitles,
      charts: [Ja],
      rangeSelector: {
          buttonStyle: {
              backgroundColor: "#FEFEFE",
              backgroundColorOnHover: "#41a5f5",
              backgroundColorOnSelect: "#2196f3",
              borderColor: "#2196f3",
              borderThickness: 1,
              labelFontColor: L,
              labelFontColorOnHover: "#ffffff",
              labelFontSize: 14,
              labelFontStyle: "normal",
              labelFontFamily: v,
              labelFontWeight: "normal",
              spacing: 0
          },
          inputFields: {
              style: {
                  backgroundColor: "#ffffff",
                  borderColor: "#2196f3",
                  borderColorOnFocus: "#2196f3",
                  borderThickness: 1,
                  fontColor: L,
                  fontSize: 14,
                  fontStyle: "normal",
                  fontFamily: v,
                  fontWeight: "normal"
              }
          }
      },
      navigator: {
          backgroundColor: J,
          slider: {
              maskColor: "#D9E8F9",
              maskOpacity: 0.6,
              handleColor: "#EFEFEF",
              handleBorderColor: "#BBBBBB",
              handleBorderThickness: 1,
              outlineColor: "#BBBBBB",
              outlineThickness: 1
          }
      },
      toolbar: Ja.toolbar
  };
  J = "#2A2A2A";
  L = W = "#F5F5F5";
  za = {
      colorSet: "colorSet1",
      backgroundColor: J,
      title: za.title,
      subtitles: za.subtitles,
      charts: [za],
      rangeSelector: {
          buttonStyle: {
              backgroundColor: "#666666",
              backgroundColorOnHover: "#FF7372",
              backgroundColorOnSelect: "#FF7372",
              borderColor: "#FF7372",
              borderThickness: 1,
              labelFontColor: L,
              labelFontColorOnHover: "#F5F5F5",
              labelFontSize: 14,
              labelFontStyle: "normal",
              labelFontFamily: v,
              labelFontWeight: "normal",
              spacing: 0
          },
          inputFields: {
              style: {
                  backgroundColor: "#666666",
                  borderColor: "#FF7372",
                  borderColorOnFocus: "#FF7372",
                  borderThickness: 1,
                  fontColor: L,
                  fontSize: 14,
                  fontStyle: "normal",
                  fontFamily: v,
                  fontWeight: "normal"
              }
          }
      },
      navigator: {
          backgroundColor: J,
          slider: {
              maskColor: "#d9e8f9",
              maskOpacity: 0.6,
              handleColor: "#efefef",
              handleBorderColor: "#666666",
              handleBorderThickness: 1,
              outlineColor: "#FFFFFF",
              outlineThickness: 1
          }
      },
      toolbar: za.toolbar
  };
  J = "#32373A";
  L = W = "#FAFAFA";
  var db = {
      light1: Fa,
      light2: Ja,
      dark1: za,
      dark2: {
          colorSet: "colorSet2",
          backgroundColor: J,
          title: V.title,
          subtitles: V.subtitles,
          charts: [V],
          rangeSelector: {
              buttonStyle: {
                  backgroundColor: "#666666",
                  backgroundColorOnHover: "#FF7372",
                  backgroundColorOnSelect: "#FF7372",
                  borderColor: "#FF7372",
                  borderThickness: 1,
                  labelFontColor: L,
                  labelFontColorOnHover: "#F5F5F5",
                  labelFontSize: 14,
                  labelFontStyle: "normal",
                  labelFontFamily: v,
                  labelFontWeight: "normal",
                  spacing: 0
              },
              inputFields: {
                  style: {
                      backgroundColor: "#666666",
                      borderColor: "#FF7372",
                      borderColorOnFocus: "#FF7372",
                      borderThickness: 1,
                      fontColor: L,
                      fontSize: 14,
                      fontStyle: "normal",
                      fontFamily: v,
                      fontWeight: "normal"
                  }
              }
          },
          navigator: {
              backgroundColor: J,
              slider: {
                  maskColor: "#d9e8f9",
                  maskOpacity: 0.6,
                  handleColor: "#efefef",
                  handleBorderColor: "#666666",
                  handleBorderThickness: 1,
                  outlineColor: "#FFFFFF",
                  outlineThickness: 1
              }
          },
          toolbar: V.toolbar
      }
  };
  W = Ta.StockChart = function() {
      function f(d) {
          var f;
          f = document.createElement("div");
          f.setAttribute("class", d);
          pa(f, {
              position: "absolute",
              textAlign: "left",
              cursor: "auto",
              webkitTapHighlightColor: "transparent"
          });
          return f
      }

      function m(d, f, m) {
          d = document.createElement(d);
          d.setAttribute("class", f);
          pa(d, {
              webkitTapHighlightColor: "transparent"
          });
          n(m) || d.setAttribute("type", m);
          return d
      }

      function G(d, f) {
          f =
              f || {};
          this.theme = n(f.theme) || n(cb[f.theme]) ? "light1" : f.theme;
          this.predefinedThemes = db;
          G.base.constructor.call(this, "StockChart", null, f, null, null);
          this.optionsName = "stockChart";
          var m = this;
          this.sessionVariables = {};
          this._axisXMax = this._axisXMin = null;
          this._containerId = d;
          this._objectsInitialized = !1;
          this.ctx = null;
          this.plotArea = {
              canvas: null,
              ctx: null,
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 0,
              width: 0,
              height: 0
          };
          this._dataInRenderedOrder = [];
          this.allDOMEventHandlers = [];
          if (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) :
              this._containerId) {
              this.container.innerHTML = "";
              var u = 0,
                  a = 0;
              this._defaultCursor = "default";
              u = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
              a = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
              this.width = u;
              this.height = a;
              this.x1 = this.y1 = 0;
              this.x2 = this.width;
              this.y2 = this.height;
              this._selectedColorSet = "undefined" !== typeof wa[this.colorSet] ? wa[this.colorSet] : wa.colorSet1;
              this._canvasJSContainer = document.createElement("div");
              this._canvasJSContainer.setAttribute("class", "canvasjs-stock-container");
              this._canvasJSContainer.style.position = "relative";
              this._canvasJSContainer.style.userSelect = this._canvasJSContainer.style.WebkitUserSelect = this._canvasJSContainer.style.MozUserSelect = this._canvasJSContainer.style.msUserSelect = "none";
              this._canvasJSContainer.style.textAlign = "left";
              this._canvasJSContainer.style.cursor = "auto";
              this._canvasJSContainer.style.direction = "ltr";
              this._canvasJSContainer.style.fontFamily = v;
              x || (this._canvasJSContainer.style.height =
                  "0px");
              this.container.appendChild(this._canvasJSContainer);
              this.canvas = ra(u, a);
              this.canvas.style.position = "absolute";
              this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ha(this.ctx), this.overlaidCanvas = ra(u, a), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx =
                      this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", Ha(this.overlaidCanvasCtx)), x ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ra(u, a), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), this._toolBar.style.cssText =
                  "position: absolute; right: 1px; top: 1px; z-index: 999;", this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
                      x1: 0,
                      y1: 0,
                      x2: this.width,
                      y2: this.height
                  }, this.charts = [], Da(this.charts), this._eventManager = new E(this), y(this.overlaidCanvas, "click", function(a) {
                      m._mouseEventHandler(a)
                  }, this.allDOMEventHandlers), y(this.overlaidCanvas, "mousemove", function(a) {
                      m._mouseEventHandler(a)
                  }, this.allDOMEventHandlers), y(this.overlaidCanvas, "mouseup", function(a) {
                      m._mouseEventHandler(a)
                  }, this.allDOMEventHandlers),
                  y(this.overlaidCanvas, "mousedown", function(a) {
                      m._mouseEventHandler(a);
                      ya(m._dropdownMenu)
                  }, this.allDOMEventHandlers), y(this.overlaidCanvas, "mouseout", function(a) {
                      m._mouseEventHandler(a)
                  }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a) {
                      m._touchEventHandler(a)
                  }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) {
                      m._touchEventHandler(a)
                  }, this.allDOMEventHandlers),
                  y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) {
                      m._touchEventHandler(a)
                  }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) {
                      m._touchEventHandler(a)
                  }, this.allDOMEventHandlers), this.windowResizeHandler = y(window, "resize", function() {
                      m._updateSize() && m.render()
                  }, this.allDOMEventHandlers))
          } else window.console && window.console.log('CanvasJS Error: StockChart Container with id "' + this._containerId +
              '" was not found')
      }

      function J(d, f) {
          J.base.constructor.call(this, d, f);
          this.options = f;
          this.dockInsidePlotArea = !1
      }

      function N(d, f, m) {
          N.base.constructor.call(this, d, f, m);
          this.options = f;
          this.dockInsidePlotArea = !1
      }

      function E(d) {
          this.stockChart = d;
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.ghostCanvas = ra(this.stockChart.width, this.stockChart.height);
          this.ghostCtx = this.ghostCanvas.getContext("2d");
          this.mouseoveredObjectMaps = []
      }

      function A(d, f) {
          f = f || {};
          this.optionsName =
              "navigator";
          A.base.constructor.call(this, "Navigator", "navigator", f, null, d);
          this.parent = this.stockChart = d
      }

      function M(d, m) {
          this.panel = f("canvasjs-slider-panel");
          this.parent = this.navigator = d;
          this.stockChart = d.stockChart;
          this.navigator.panel.appendChild(this.panel);
          M.base.constructor.call(this, "Slider", "slider", m, null, d);
          this.options = n(m.navigator) || n(m.navigator.slider) ? {} : m.navigator.slider;
          this.optionsName = "slider";
          this.panMode = !1;
          this.sessionVariables = {}
      }

      function L(d, f) {
          L.base.constructor.call(this,
              "RangeSelector", "rangeSelector", f, null, d);
          this.parent = this.stockChart = d;
          this.options = n(f) || n(f.rangeSelector) ? {} : f.rangeSelector;
          this.optionsName = "rangeSelector";
          this.ctx = d.ctx;
          this._label = {};
          this.buttons = []
      }

      function O(d, f, m) {
          O.base.constructor.call(this, "RangeButton", "rangeButton", m, f, d.rangeSelector);
          this.stockChart = d;
          this.parent = this.rangeSelector = d.rangeSelector;
          this.options = n(m) ? {} : m;
          this.optionsName = "rangeButton";
          this.enabled = !1;
          this.state = "off"
      }

      function V(d, f) {
          V.base.constructor.call(this,
              "InputFields", "inputFields", f, null, d.rangeSelector);
          this.stockChart = d;
          this.options = n(f) || n(f.inputFields) ? {} : f.inputFields;
          this.parent = this.rangeSelector = d.rangeSelector;
          this.elements = [];
          this._textBlocks = [];
          this.optionsName = "inputFields";
          this.elements.push(m("input", "canvasjs-input-field", "text"));
          this.elements.push(m("input", "canvasjs-input-field", "text"));
          for (var w = 0; w < this.elements.length; w++) this.stockChart._canvasJSContainer.appendChild(this.elements[w]);
          var u = this,
              a = null,
              e = null;
          y(this.elements[0],
              "focus",
              function() {
                  u.elements[0].focused = !0;
                  u._textBlocks[0].borderColor = u.style.borderColorOnFocus;
                  u._textBlocks[0].render(!0)
              }, this.rangeSelector.stockChart.allDOMEventHandlers);
          y(this.elements[0], "focusout", function() {
              u.elements[0].focused = !1;
              var a;
              u.stockChart.charts && u.stockChart.charts.length && (a = u.stockChart.charts[0].axisX && u.stockChart.charts[0].axisX.length ? u.stockChart.charts[0].axisX[0] : u.stockChart.charts[0].axisX2[0]);
              this.value = "dateTime" === u.valueType ? ma(a ? a.viewportMinimum : null, "YYYY-MM-DD",
                  u.stockChart._cultureInfo) : X(a ? a.viewportMinimum : null, u.valueFormatString, u.stockChart._cultureInfo);
              this.style.display = "none";
              u._textBlocks[0].borderColor = u.style.borderColor;
              u._textBlocks[0].render(!0)
          }, this.rangeSelector.stockChart.allDOMEventHandlers);
          y(this.elements[1], "focus", function() {
              u.elements[1].focused = !0;
              u._textBlocks[1].borderColor = u.style.borderColorOnFocus;
              u._textBlocks[1].render(!0)
          }, this.rangeSelector.stockChart.allDOMEventHandlers);
          y(this.elements[1], "focusout", function() {
              u.elements[1].focused = !1;
              var a;
              u.stockChart.charts && u.stockChart.charts.length && (a = u.stockChart.charts[0].axisX && u.stockChart.charts[0].axisX.length ? u.stockChart.charts[0].axisX[0] : u.stockChart.charts[0].axisX2[0]);
              this.value = "dateTime" === u.valueType ? ma(a ? a.viewportMaximum : null, "YYYY-MM-DD", u.stockChart._cultureInfo) : X(a ? a.viewportMaximum : null, u.valueFormatString, u.stockChart._cultureInfo);
              this.style.display = "none";
              u._textBlocks[1].borderColor = u.style.borderColor;
              u._textBlocks[1].render(!0)
          }, this.rangeSelector.stockChart.allDOMEventHandlers);
          y(this.elements[0], "change", function(b) {
              var c;
              if (u.stockChart.charts && u.stockChart.charts.length) {
                  var d = u.stockChart.navigator && u.stockChart.navigator.chart && u.stockChart.navigator.chart.axisX ? u.stockChart.navigator.chart.axisX[0] : u.stockChart.navigator.chart.axisX2[0];
                  c = u.stockChart.charts[0].axisX && u.stockChart.charts[0].axisX.length ? u.stockChart.charts[0].axisX[0] : u.stockChart.charts[0].axisX2[0]
              }
              b = "dateTime" === u.valueType ? isNaN((new Date(this.value.replace(/-/g, "/"))).getTime()) ? null : (new Date(this.value.replace(/-/g,
                  "/"))).getTime() : this.value;
              a = !n(b) && b < (n(d) ? null : d.maximum) ? Math.max(n(d) ? null : d.minimum, b) : n(d) ? null : d.minimum;
              e = n(c) ? null : c.viewportMaximum;
              u.stockChart._rangeEventParameter = {
                  stockChart: u.stockChart,
                  source: "inputFields",
                  index: null,
                  minimum: a,
                  maximum: e
              };
              u.stockChart._rangeEventParameter.type = "rangeChanging";
              u.stockChart.dispatchEvent("rangeChanging", u.stockChart._rangeEventParameter, u.stockChart);
              u.stockChart.sessionVariables._axisXMin = a;
              u.stockChart.sessionVariables._axisXMax = e;
              u.stockChart._syncCharts(a,
                  e);
              u.stockChart._rangeEventParameter.type = "rangeChanged";
              u.stockChart.dispatchEvent("rangeChanged", u.stockChart._rangeEventParameter, u.stockChart);
              u.stockChart.rangeSelector && u.stockChart.rangeSelector.resetRangeButtons()
          }, this.rangeSelector.stockChart.allDOMEventHandlers);
          y(this.elements[1], "change", function(b) {
                  var c;
                  if (u.stockChart.charts && u.stockChart.charts.length) {
                      var d = u.stockChart.navigator && u.stockChart.navigator.chart && u.stockChart.navigator.chart.axisX ? u.stockChart.navigator.chart.axisX[0] :
                          u.stockChart.navigator.chart.axisX2[0];
                      c = u.stockChart.charts[0].axisX && u.stockChart.charts[0].axisX.length ? u.stockChart.charts[0].axisX[0] : u.stockChart.charts[0].axisX2[0]
                  }
                  b = "dateTime" === u.valueType ? isNaN((new Date(this.value.replace(/-/g, "/"))).getTime()) ? null : (new Date(this.value.replace(/-/g, "/"))).getTime() : this.value;
                  a = c ? c.viewportMinimum : null;
                  e = !n(b) && b > (d ? d.minimum : null) ? Math.min(d ? d.maximum : null, b) : d ? d.maximum : null;
                  u.stockChart._rangeEventParameter = {
                      stockChart: u.stockChart,
                      source: "inputFields",
                      index: null,
                      minimum: a,
                      maximum: e
                  };
                  u.stockChart._rangeEventParameter.type = "rangeChanging";
                  u.stockChart.dispatchEvent("rangeChanging", u.stockChart._rangeEventParameter, u.stockChart);
                  u.stockChart.sessionVariables._axisXMin = a;
                  u.stockChart.sessionVariables._axisXMax = e;
                  u.stockChart._syncCharts(a, e);
                  u.stockChart._rangeEventParameter.type = "rangeChanged";
                  u.stockChart.dispatchEvent("rangeChanged", u.stockChart._rangeEventParameter, u.stockChart);
                  u.stockChart.rangeSelector && u.stockChart.rangeSelector.resetRangeButtons()
              },
              this.rangeSelector.stockChart.allDOMEventHandlers);
          y(this.elements[0], "keydown", function(a) {
              if (13 === a.keyCode) {
                  var c = "dateTime" === u.valueType ? ma(u.startValue, "YYYY-MM-DD") : X(u.startValue, this.inputFields.valueFormatString);
                  this.value != c && jb(this, "change");
                  this.blur();
                  a.preventDefault && a.preventDefault()
              }
          }, this.rangeSelector.stockChart.allDOMEventHandlers);
          y(this.elements[1], "keydown", function(a) {
              if (13 === a.keyCode) {
                  var c = "dateTime" === u.valueType ? ma(u.endValue, "YYYY-MM-DD") : X(u.endValue, this.inputFields.valueFormatString);
                  this.value != c && jb(this, "change");
                  this.blur();
                  a.preventDefault && a.preventDefault()
              }
          }, this.rangeSelector.stockChart.allDOMEventHandlers)
      }

      function W(d, f) {
          W.base.constructor.call(this, "ButtonStyle", "buttonStyle", f, null, d.rangeSelector);
          this.stockChart = d;
          this.parent = this.rangeSelector = d.rangeSelector;
          this.options = n(f) || n(f.buttonStyle) ? {} : f.buttonStyle;
          this.optionsName = "buttonStyle"
      }

      function Y(d, f) {
          Y.base.constructor.call(this, "Style", "style", f, null, d.rangeSelector.inputFields);
          this.stockChart = d;
          this.parent =
              this.inputFields = d.rangeSelector.inputFields;
          this.options = n(f) || n(f.style) ? {} : f.style;
          this.optionsName = "style"
      }
      var $ = !0;
      ga(G, S);
      G.prototype._updateOptions = function() {
          this.updateOption("width");
          this.updateOption("height");
          this.updateOption("theme");
          this.updateOption("colorSet") && (this._selectedColorSet = "undefined" !== typeof wa[this.colorSet] ? wa[this.colorSet] : wa.colorSet1);
          this.updateOption("backgroundColor");
          this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
          this.updateOption("exportEnabled");
          this.updateOption("exportFileName");
          this.updateOption("creditHref");
          this.updateOption("creditHref");
          this.updateOption("culture");
          this._cultureInfo = new Pa(this.options.culture);
          this.updateOption("animationEnabled");
          this.updateOption("animationDuration");
          this.updateOption("rangeChanging");
          this.updateOption("rangeChanged");
          kb(this)
      };
      G._supportedChartTypes = Da("line stepLine spline column area stepArea splineArea bubble scatter stackedColumn stackedColumn100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeArea rangeSplineArea waterfall".split(" "));
      G.prototype._initialize = function() {
          this.toolbar = new Ya(this, this.options.toolbar);
          this._updateOptions();
          this.animationEnabled = this.animationEnabled && x;
          this._updateSize();
          this.clearCanvas();
          this.ctx.beginPath();
          var d, m = n(this.options.charts) ? [] : this.options.charts;
          Da(m);
          for (var w = 0; w < this.charts.length; w++) d = this.charts[w], 0 > m.indexOf(d.options) && (this.charts.splice(w, 1), d.destroy(), this._canvasJSContainer.removeChild(d.panel), w--);
          this.layoutManager = new La(0, 0, this.width, this.height, 2);
          this.plotArea.layoutManager &&
              this.plotArea.layoutManager.reset();
          this.options.title && (this.title = new J(this, this.options.title), this.title.setLayout());
          if (this.options.subtitles)
              for (this.subtitles = [], w = 0; w < this.options.subtitles.length; w++) d = new N(this, this.options.subtitles[w], w), this.subtitles.push(d), d.setLayout();
          this.navigator = this.navigator || new A(this, this.options.navigator);
          this.navigator._initialize();
          if (this.navigator.enabled) {
              d = {
                  theme: this.options.navigator && this.options.navigator.theme ? this.options.navigator.theme : this.theme,
                  animationEnabled: this.options.navigator && !n(this.options.navigator.animationEnabled) ? this.options.navigator.animationEnabled : this.animationEnabled,
                  animationDuration: this.options.navigator && this.options.navigator.animationDuration ? this.options.navigator.animationDuration : this.animationDuration,
                  culture: this.options.navigator && this.options.navigator.culture ? this.options.navigator.culture : this.culture,
                  zoomEnabled: !1,
                  data: this.options.navigator && this.options.navigator.data ? this.options.navigator.data : this.options.charts && this.options.charts[0] && this.options.charts[0].data ? ab(this.options.charts[0].data) : [],
                  axisX: this.options.navigator && this.options.navigator.axisX ? this.options.navigator.axisX : {},
                  axisY: this.options.navigator && this.options.navigator.axisY ? this.options.navigator.axisY : {},
                  axisX2: this.options.navigator && this.options.navigator.axisX2 ? this.options.navigator.axisX2 : {},
                  axisY2: this.options.navigator && this.options.navigator.axisY2 ? this.options.navigator.axisY2 : {},
                  interactivityEnabled: !1,
                  exportEnabled: !1
              };
              for (w = 0; w < d.data.length; w++) !n(this.navigator.options.data) || !n(d.data[w].type) && (n(d.data[w].type) || 0 <= d.data[w].type.indexOf("range") || 0 <= d.data[w].type.indexOf("ohlc") || 0 <= d.data[w].type.indexOf("candlestick") || 0 <= d.data[w].type.indexOf("error")) ? this.navigator.options.data && n(this.navigator.options.data[w].type) && (d.data[w].type = "splineArea") : d.data[w].type = "splineArea";
              if (d.axisX.length)
                  for (w = 0; w < d.axisX.length; w++) d.axisX[w].titleFontSize = n(d.axisX[w].titleFontSize) ? 1 : d.axisX[w].titleFontSize,
                      d.axisX[w].labelFontSize = n(d.axisX[w].labelFontSize) ? 12 : d.axisX[w].labelFontSize, d.axisX[w].labelAngle = n(d.axisX[w].labelAngle) ? 0 : d.axisX[w].labelAngle, d.axisX[w].labelPlacement = n(d.axisX[w].labelPlacement) ? "inside" : d.axisX[w].labelPlacement, d.axisX[w].tickLength = n(d.axisX[w].tickLength) ? 0 : d.axisX[w].tickLength, d.axisX[w].lineThickness = n(d.axisX[w].lineThickness) ? 0 : d.axisX[w].lineThickness, d.axisX[w].tickThickness = n(d.axisX[w].tickThickness) ? 0 : d.axisX[w].tickThickness, d.axisX[w].gridThickness = n(d.axisX[w].gridThickness) ?
                      1 : d.axisX[w].gridThickness;
              else d.axisX.titleFontSize = this.options.navigator && this.options.navigator.axisX && !n(this.options.navigator.axisX.titleFontSize) ? this.options.navigator.axisX.titleFontSize : x ? 0 : 1, d.axisX.labelFontSize = this.options.navigator && this.options.navigator.axisX && !n(this.options.navigator.axisX.labelFontSize) ? this.options.navigator.axisX.labelFontSize : 12, d.axisX.labelAngle = this.options.navigator && this.options.navigator.axisX && !n(this.options.navigator.axisX.labelAngle) ? this.options.navigator.axisX.labelAngle :
                  0, d.axisX.labelPlacement = this.options.navigator && this.options.navigator.axisX && !n(this.options.navigator.axisX.labelPlacement) ? this.options.navigator.axisX.labelPlacement : "inside", d.axisX.tickLength = this.options.navigator && this.options.navigator.axisX && !n(this.options.navigator.axisX.tickLength) ? this.options.navigator.axisX.tickLength : 0, d.axisX.lineThickness = this.options.navigator && this.options.navigator.axisX && !n(this.options.navigator.axisX.lineThickness) ? this.options.navigator.axisX.lineThickness :
                  0, d.axisX.tickThickness = this.options.navigator && this.options.navigator.axisX && !n(this.options.navigator.axisX.tickThickness) ? this.options.navigator.axisX.tickThickness : 0, d.axisX.gridThickness = this.options.navigator && this.options.navigator.axisX && !n(this.options.navigator.axisX.gridThickness) ? this.options.navigator.axisX.gridThickness : 1;
              if (d.axisY.length)
                  for (w = 0; w < d.axisY.length; w++) d.axisY[w].titleFontSize = d.axisY[w].titleFontSize ? d.axisY[w].titleFontSize : x ? 0 : 1, d.axisY[w].labelFontSize = d.axisY[w].labelFontSize ?
                      d.axisY[w].labelFontSize : x ? 0 : 1, d.axisY[w].labelPlacement = d.axisY[w].labelPlacement ? d.axisY[w].labelPlacement : "inside", d.axisY[w].includeZero = !1, d.axisY[w].lineThickness = 0, d.axisY[w].tickThickness = 0, d.axisY[w].tickLength = 0, d.axisY[w].gridThickness = 0;
              else d.axisY.titleFontSize = this.options.navigator && this.options.navigator.axisY && this.options.navigator.axisY.titleFontSize ? this.options.navigator.axisY.titleFontSize : x ? 0 : 1, d.axisY.labelFontSize = this.options.navigator && this.options.navigator.axisY && this.options.navigator.axisY.labelFontSize ?
                  this.options.navigator.axisY.labelFontSize : x ? 0 : 1, d.axisY.labelPlacement = this.options.navigator && this.options.navigator.axisY && this.options.navigator.axisY.labelPlacement ? this.options.navigator.axisY.labelPlacement : "inside", d.axisY.includeZero = !1, d.axisY.lineThickness = 0, d.axisY.tickThickness = 0, d.axisY.tickLength = 0, d.axisY.gridThickness = 0;
              if (d.axisX2.length)
                  for (w = 0; w < d.axisX2.length; w++) d.axisX2[w].titleFontSize = d.axisX2[w].titleFontSize ? d.axisX2[w].titleFontSize : x ? 0 : 1, d.axisX2[w].labelFontSize = d.axisX2[w].labelFontSize ?
                      d.axisX2[w].labelFontSize : 12, d.axisX2[w].labelAngle = n(d.axisX2[w].labelAngle) ? 0 : d.axisX2[w].labelAngle, d.axisX2[w].labelPlacement = d.axisX2[w].labelPlacement ? d.axisX2[w].labelPlacement : "inside", d.axisX2[w].tickLength = n(d.axisX2[w].tickLength) ? 0 : d.axisX2[w].tickLength, d.axisX2[w].lineThickness = d.axisX2[w].lineThickness ? d.axisX2[w].lineThickness : 0, d.axisX2[w].tickThickness = d.axisX2[w].tickThickness ? d.axisX2[w].tickThickness : 1, d.axisX2[w].gridThickness = n(d.axisX2[w].gridThickness) ? 1 : d.axisX2[w].gridThickness;
              else d.axisX2.titleFontSize = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.titleFontSize ? this.options.navigator.axisX2.titleFontSize : x ? 0 : 1, d.axisX2.labelFontSize = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.labelFontSize ? this.options.navigator.axisX2.labelFontSize : 12, d.axisX2.labelAngle = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.labelAngle ? this.options.navigator.axisX2.labelAngle :
                  0, d.axisX2.labelPlacement = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.labelPlacement ? this.options.navigator.axisX2.labelPlacement : "inside", d.axisX2.tickLength = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.tickLength ? this.options.navigator.axisX2.tickLength : 0, d.axisX2.lineThickness = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.lineThickness ? this.options.navigator.axisX2.lineThickness :
                  0, d.axisX2.tickThickness = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.tickThickness ? this.options.navigator.axisX2.tickThickness : 1, d.axisX2.gridThickness = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.gridThickness ? this.options.navigator.axisX2.gridThickness : 1;
              if (d.axisY2.length)
                  for (w = 0; w < d.axisY2.length; w++) d.axisY2[w].titleFontSize = d.axisY2[w].titleFontSize ? d.axisY2[w].titleFontSize : x ? 0 : 1, d.axisY2[w].labelFontSize = d.axisY2[w].labelFontSize ?
                      d.axisY2[w].labelFontSize : x ? 0 : 1, d.axisY2[w].labelPlacement = d.axisY2[w].labelPlacement ? d.axisY2[w].labelPlacement : "inside", d.axisY2[w].includeZero = !1, d.axisY2[w].lineThickness = 0, d.axisY2[w].margin = 0, d.axisY2[w].tickLength = 0, d.axisY2[w].tickThickness = 0, d.axisY2[w].gridThickness = 0;
              else d.axisY2.titleFontSize = this.options.navigator && this.options.navigator.axisY2 && this.options.navigator.axisY2.titleFontSize ? this.options.navigator.axisY2.titleFontSize : x ? 0 : 1, d.axisY2.labelFontSize = this.options.navigator &&
                  this.options.navigator.axisY2 && this.options.navigator.axisY2.labelFontSize ? this.options.navigator.axisY2.labelFontSize : x ? 0 : 1, d.axisY2.labelPlacement = this.options.navigator && this.options.navigator.axisY2 && this.options.navigator.axisY2.labelPlacement ? this.options.navigator.axisY2.labelPlacement : "inside", d.axisY2.includeZero = !1, d.axisY2.lineThickness = 0, d.axisY2.margin = 0, d.axisY2.tickLength = 0, d.axisY2.tickThickness = 0, d.axisY2.gridThickness = 0;
              d.backgroundColor = this.navigator.backgroundColor;
              for (w = 0; w <
                  d.data.length; w++) d.data[w].markerSize = d.data[w].markerSize ? d.data[w].markerSize : 0;
              if (!this.navigator.chart) {
                  var u = f("canvasjs-chart-panel");
                  this.navigator.panel.appendChild(u);
                  u.style.height = this.navigator.height + "px";
                  u.style.width = this.navigator.width + "px"
              }
              this.navigator.chart && (this.navigator.chart.panel.style.width = this.navigator.width + "px");
              this.navigator.chart = this.navigator.chart || new Ka(u, d, {
                  parent: this.navigator,
                  isOptionsInArray: !1,
                  index: null,
                  predefinedThemes: db,
                  optionsName: "navigator",
                  stockChart: this
              });
              this.navigator.chart._initialize();
              this.navigator.chart.setLayout();
              this.navigator.chart._selectedColorSet = this._selectedColorSet;
              this.navigator._chartOptions = d;
              this.navigator.slider = this.navigator.slider || new M(this.navigator, this.options);
              this.navigator.slider._initialize()
          }
          this.rangeSelector = this.rangeSelector || new L(this, this.options);
          this.rangeSelector.buttonStyle = this.rangeSelector.buttonStyle || new W(this, this.rangeSelector.options);
          this.rangeSelector.inputFields = this.rangeSelector.inputFields ||
              new V(this, this.rangeSelector.options);
          this.rangeSelector.inputFields.style = new Y(this, this.rangeSelector.inputFields.options);
          this.rangeSelector.inputFields.style._updateOptions();
          this.rangeSelector.inputFields._initialize();
          if (this.rangeSelector.inputFields && this.rangeSelector.inputFields.enabled)
              for (this.rangeSelector.inputFields._textBlocks = [], this.rangeSelector.inputFields._labels = [], this.rangeSelector.inputFieldsWidth = 0, u = this.rangeSelector.inputFields.style.maxWidth = this.rangeSelector.inputFields.style.options.maxWidth ?
                  this.rangeSelector.inputFields.style.options.maxWidth : this.rangeSelector.stockChart.width / 2, w = 0; w < this.rangeSelector.inputFields.elements.length; w++) {
                  d = new la(this.rangeSelector.ctx, {
                      x: 0,
                      y: 0,
                      backgroundColor: this.rangeSelector.inputFields.style.backgroundColor,
                      borderColor: this.rangeSelector.inputFields.style.borderColor,
                      borderThickness: this.rangeSelector.inputFields.style.borderThickness,
                      cornerRadius: 0,
                      maxWidth: n(this.rangeSelector.inputFields.style.options.width) ? u : this.rangeSelector.inputFields.style.width,
                      maxHeight: 2 * this.rangeSelector.inputFields.style.fontSize,
                      angle: 0,
                      padding: this.rangeSelector.inputFields.style.padding,
                      text: this.rangeSelector.inputFields.valueFormatString,
                      horizontalAlign: "center",
                      textAlign: "center",
                      fontSize: this.rangeSelector.inputFields.style.fontSize,
                      fontFamily: this.rangeSelector.inputFields.style.fontFamily,
                      fontWeight: this.rangeSelector.inputFields.style.fontWeight,
                      fontColor: this.rangeSelector.inputFields.style.fontColor,
                      fontStyle: this.rangeSelector.inputFields.style.fontStyle,
                      textBaseline: "middle"
                  });
                  var m = d.measureText(),
                      a = new la(this.rangeSelector.ctx, {
                          x: 0,
                          y: 0,
                          backgroundColor: x ? "transparent" : null,
                          borderColor: this.rangeSelector.inputFields.style.borderColor,
                          borderThickness: 0,
                          cornerRadius: 0,
                          maxWidth: this.rangeSelector.inputFields.style.maxWidth,
                          maxHeight: 2 * this.rangeSelector.inputFields.style.fontSize,
                          angle: 0,
                          padding: this.rangeSelector.inputFields.style.padding,
                          text: "From",
                          horizontalAlign: "left",
                          fontSize: this.rangeSelector.inputFields.style.fontSize,
                          fontFamily: this.rangeSelector.inputFields.style.fontFamily,
                          fontWeight: this.rangeSelector.inputFields.style.fontWeight,
                          fontColor: this.rangeSelector.inputFields.style.fontColor,
                          fontStyle: this.rangeSelector.inputFields.style.fontStyle,
                          textBaseline: "middle"
                      });
                  this.rangeSelector.inputFields._textBlocks.push(d);
                  this.rangeSelector.inputFields._labels.push(a);
                  this.rangeSelector.inputFields._textBlocks[w].bounds = {
                      x1: null,
                      x2: null,
                      y1: null,
                      y2: null,
                      width: null,
                      height: null
                  };
                  this.rangeSelector.inputFields._labels[w].bounds = {
                      x1: null,
                      x2: null,
                      y1: null,
                      y2: null,
                      width: null,
                      height: null
                  };
                  this.rangeSelector.inputFieldsWidth += m.width + this.rangeSelector.inputFields.style.spacing + a.measureText().width;
                  this.rangeSelector.inputFieldsHeight = this.rangeSelector.inputFieldsHeight < m.height ? m.height : this.rangeSelector.inputFieldsHeight;
                  d = this.rangeSelector.inputFields._textBlocks[w];
                  d.id = ++this.rangeSelector.stockChart._eventManager.lastObjectId;
                  this.rangeSelector.stockChart._eventManager.objectMap[d.id] = {
                      id: d.id,
                      objectType: "inputFields",
                      inputFieldIndex: w
                  }
              }
          this.rangeSelector.buttonStyle._updateOptions();
          this.rangeSelector._initialize();
          this._objectsInitialized = !0
      };
      G.prototype.render = function(d) {
          var m = this;
          d && (this.options = d);
          this._initialize();
          this.title && this.title.render();
          if (this.subtitles)
              for (d = 0; d < this.subtitles.length; d++) this.subtitles[d].render();
          var w;
          if (this.options.charts) {
              w = Array(this.options.charts.length);
              var u = this.layoutManager.getFreeSpace(),
                  a = u.height,
                  u = u.height,
                  e = this.options.charts.length;
              for (d = 0; d < this.options.charts.length; d++) n(this.options.charts[d].height) || (w[d] = 0 <= this.options.charts[d].height.toString().indexOf("%") ?
                  Xa(this.options.charts[d].height, a, Math.floor(u / e), this.height, 0) : this.options.charts[d].height, u -= w[d], e--);
              u = Math.floor(u / e);
              for (d = 0; d < this.options.charts.length; d++) n(w[d]) && (w[d] = u);
              var b, e = this.options.charts,
                  c = this.charts;
              this.charts = [];
              for (d = 0; d < e.length; d++) {
                  u = this.layoutManager.getFreeSpace();
                  a = e[d];
                  a.theme = e[d].theme ? e[d].theme : this.options.theme ? this.options.theme : this.theme;
                  a.animationEnabled = n(e[d].animationEnabled) ? this.animationEnabled : e[d].animationEnabled;
                  a.animationDuration = e[d].animationDuration ?
                      e[d].animationDuration : this.animationDuration;
                  a.culture = e[d].culture ? e[d].culture : this.culture;
                  a.height = e[d].height ? w[d] : null;
                  n(e.backgroundColor) ? n(this.options.backgroundColor) || (a.backgroundColor = this.backgroundColor) : a.backgroundColor = this.options.charts[d].backgroundColor;
                  for (b = c.length; 0 < b-- && c[b].options !== a;);
                  0 <= b ? (this.charts[d] = c[b], this.charts[d].options = a) : (b = f("canvasjs-chart-panel"), b.style.height = w[d] + "px", this._canvasJSContainer.appendChild(b), this.charts[d] = new Ka(b, a, {
                      parent: this,
                      isOptionsInArray: !0,
                      index: d,
                      predefinedThemes: db,
                      optionsName: "charts",
                      stockChart: this
                  }));
                  this.charts[d].panEnabled = this.charts[d].options.zoomEnabled ? !1 : !0;
                  this.charts[d].panel.style.width = u.width + "px";
                  this.charts[d].panel.style.top = u.y1 + "px";
                  this.charts[d].panel.style.left = u.x1 + "px";
                  this.charts[d].panel.style.height = w[d] + "px";
                  this.charts[d].height = a.height ? a.height : w[d];
                  this.layoutManager.registerSpace("top", {
                      width: u.width,
                      height: w[d]
                  })
              }
              c = null;
              for (d = 0; d < this.charts.length; d++)
                  if (!n(this.options.charts[d].data))
                      for (b =
                          0; b < this.options.charts[d].data.length; b++) w = this.options.charts[d].data[b], 0 <= G._supportedChartTypes.indexOf(w.type) || n(w.type) || ($ = !1, window.console && window.console.log("CanvasJS Error: " + w.type + " Chart is not Supported in StockChart"));
              if (!$) return;
              this.setChartsLayout();
              for (d = w = 0; d < this.charts.length; d++)
                  if (n(this.charts[d].options.colorSet)) {
                      this.charts[d]._selectedColorSet = [];
                      for (b = w; b < w + this.charts[d].data.length; b++) this.charts[d]._selectedColorSet.push(this._selectedColorSet[b % this._selectedColorSet.length]);
                      w += this.charts[d].data.length
                  } if (this.navigator && this.navigator.enabled)
                  if (this.navigator.options.data) {
                      this.navigator.chart._selectedColorSet = [];
                      for (b = w; b < w + this.navigator.chart.data.length; b++) this.navigator.chart._selectedColorSet.push(this._selectedColorSet[b % this._selectedColorSet.length]);
                      w += this.navigator.chart.data.length
                  } else this.navigator.chart._selectedColorSet = this.charts[0]._selectedColorSet
          }
          if (this.navigator && this.navigator.enabled) {
              for (d = 0; d < this.navigator.chart.data.length; d++) 0 <=
                  G._supportedChartTypes.indexOf(this.navigator.chart.data[d].type) || ($ = !1, window.console && window.console.log("CanvasJS Error: " + this.navigator.chart.data[d].type + " Chart is not Supported in Navigator"));
              if ($) {
                  var h = this.navigator.chart.axisX && this.navigator.chart.axisX.length ? this.navigator.chart.axisX[0] : this.navigator.chart.axisX2[0];
                  h.bounds.x1 > this._chartsPlotAreaX1 && (this._chartsPlotAreaX1 = h.bounds.x1);
                  this.navigator.width = this.navigator.chart.width = this.navigator.slider.fullWidth = this.navigator.options.width ?
                      this.navigator.options.width : this._chartsPlotAreaX2 - this._chartsPlotAreaX1 + h.bounds.x1;
                  this.navigator.panel.style.left = this._chartsPlotAreaX1 + this.layoutManager.getFreeSpace().x1 - h.bounds.x1 + "px";
                  this.navigator.panel.style.width = this.navigator.chart.panel.style.width = this.navigator.options.width ? this.navigator.options.width : this._chartsPlotAreaX2 - this._chartsPlotAreaX1 + h.bounds.x1 + "px";
                  this.navigator.chart.render(this.navigator._chartOptions);
                  this.navigator.backgroundColor = this.navigator.chart.backgroundColor;
                  this.navigator.animationEnabled = this.navigator.chart.animationEnabled;
                  this.navigator.animationDuration = this.navigator.chart.animationDuration;
                  this.navigator.theme = this.navigator.chart.theme;
                  this.navigator.axisX = this.navigator.chart.axisX;
                  this.navigator.axisX2 = this.navigator.chart.axisX2;
                  this.navigator.axisY = this.navigator.chart.axisY;
                  this.navigator.axisY2 = this.navigator.chart.axisY2;
                  this.navigator.data = this.navigator.chart.data
              }
          }
          u = w = null;
          b = 0;
          e = a = null;
          for (d = 0; d < this.charts.length; d++)
              for (c = this.charts[d].axisX &&
                  this.charts[d].axisX.length ? this.charts[d].axisX : this.charts[d].axisX2, w = w || (c && 0 < c.length ? c[0].minimum : null), u = u || (c && 0 < c.length ? c[0].maximum : null), b = 0; b < c.length; b++) h = c[b], h.minimum < w && (w = h.minimum), h.maximum > u && (u = h.maximum);
          var g;
          this.navigator && (this.navigator.chart && $) && (g = this.navigator.chart.axisX && 0 < this.navigator.chart.axisX.length ? this.navigator.chart.axisX[0] : this.navigator.chart.axisX2[0], this._axisXMin = this.navigator.slider.minimum = n(this.navigator.options.slider) || n(this.navigator.options.slider.minimum) ?
              null : Math.max(g.minimum, this.navigator.slider.minimum), this._axisXMax = this.navigator.slider.maximum = n(this.navigator.options.slider) || n(this.navigator.options.slider.maximum) ? null : Math.min(g.maximum, this.navigator.slider.maximum));
          if (this.rangeSelector && this.rangeSelector.enabled) {
              b = g ? g.maximum - g.minimum : u - w;
              this.charts && this.charts.length && (h = this.charts[0].axisX && this.charts[0].axisX.length ? this.charts[0].axisX[0] : this.charts[0].axisX2[0]);
              for (d = 0; d < this.rangeSelector.buttons.length; d++) {
                  var v =
                      null,
                      c = this.rangeSelector.buttons[d];
                  "year" === c.rangeType ? v = 31104E6 * c.range : "ytd" === c.rangeType ? v = "ytd" : "month" === c.rangeType ? v = 2592E6 * c.range : "week" === c.rangeType ? v = 6048E5 * c.range : "day" === c.rangeType ? v = 864E5 * c.range : "hour" === c.rangeType ? v = 36E5 * c.range : "minute" === c.rangeType ? v = 6E4 * c.range : "second" === c.rangeType ? v = 1E3 * c.range : "millisecond" === c.rangeType ? v = c.range : "all" === c.rangeType ? v = null : "number" === c.rangeType && (v = c.range);
                  if ("ytd" === c.rangeType || v < b) c.enabled = !0;
                  c.enabled ? (c.cursor = this.rangeSelector.buttonStyle.cursor,
                      "on" === c.state && ((n(this._axisXMin) && n(this._axisXMax) && (c.textBlock.fontWeight = "bold", c.textBlock.fontColor = this.rangeSelector.buttonStyle.labelFontColorOnHover, c.textBlock.backgroundColor = this.rangeSelector.buttonStyle.backgroundColorOnSelect), "ytd" === c.rangeType && h) ? (a = new Date(h.viewportMaximum), a.setDate(1), a.setMonth(0), a = a.getTime()) : n(v) ? g ? (a = g.minimum, e = g.maximum) : h && (a = h.minimum, e = h.maximum) : h.viewportMaximum - v < (g ? g.minimum : h.minimum) ? (e = g.minimum - (h.viewportMaximum - v), a = g.minimum, e = Math.min(g.maximum,
                          h.viewportMaximum + e)) : (a = h.viewportMaximum - v, e = h.viewportMaximum)), n(this._axisXMin) && n(this._axisXMax) || (c.state = "off"), this._axisXMin = n(this._axisXMin) ? a : this._axisXMin, this._axisXMax = n(this._axisXMax) ? e : this._axisXMax) : c.cursor = "not-allowed";
                  c.mousemove = function(a) {
                      this.enabled && "off" === this.state && (this.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnHover, this.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover, this.textBlock.render(!0))
                  };
                  c.mouseover = function(a) {
                      this.enabled && "off" === this.state && (this.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnHover, this.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover, this.textBlock.render(!0))
                  };
                  c.mouseout = function(a) {
                      this.enabled && "off" === this.state && (this.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColor, this.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColor, this.textBlock.render(!0))
                  };
                  c.click = function(a) {
                      if (this.enabled) {
                          for (var b = 0, c = null, d = null, e = 0; e < m.rangeSelector.buttons.length; e++) m.rangeSelector.buttons[e] != this && (m.rangeSelector.buttons[e].state = "off"), m.rangeSelector.buttons[e].textBlock.fontWeight = m.rangeSelector.buttonStyle.labelFontWeight, m.rangeSelector.buttons[e].textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColor, m.rangeSelector.buttons[e].textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColor, m.rangeSelector.buttons[e].textBlock.render(!0);
                          var g;
                          m.charts && m.charts.length && (g = m.charts[0].axisX && m.charts[0].axisX.length ? m.charts[0].axisX[0] : m.charts[0].axisX2[0]);
                          var h;
                          m.navigator && m.navigator.chart && (h = m.navigator.chart.axisX ? m.navigator.chart.axisX[0] : m.navigator.chart.axisX2[0]);
                          "year" === this.rangeType ? b = 31104E6 * this.range : "month" === this.rangeType ? b = 2592E6 * this.range : "week" === this.rangeType ? b = 6048E5 * this.range : "day" === this.rangeType ? b = 864E5 * this.range : "hour" === this.rangeType ? b = 36E5 * this.range : "minute" === this.rangeType ? b = 6E4 * this.range :
                              "second" === this.rangeType ? b = 1E3 * this.range : "millisecond" === this.rangeType ? b = this.range : "all" === this.rangeType ? b = null : "number" === this.rangeType && (b = this.range);
                          "ytd" === this.rangeType && g ? (c = new Date(g.viewportMaximum), c.setDate(1), c.setMonth(0), b = c.getTime(), c = Math.max(b, h ? h.minimum : g.minimum), d = g.viewportMaximum) : n(b) ? h ? (c = h.minimum, d = h.maximum) : g && (c = g.minimum, d = g.maximum) : h && g.viewportMaximum - b < (h ? h.minimum : g.minimum) ? (h = m.navigator.chart.axisX[0].minimum - (g.viewportMaximum - b), c = m.navigator.chart.axisX[0].minimum,
                              d = Math.min(m.navigator.chart.axisX[0].maximum, g.viewportMaximum + h)) : (c = g.viewportMaximum - b, d = g.viewportMaximum);
                          m._rangeEventParameter = {
                              stockChart: m,
                              source: "buttons",
                              index: this._index,
                              minimum: c,
                              maximum: d
                          };
                          "on" != this.state && (m._rangeEventParameter.type = "rangeChanging", m.dispatchEvent("rangeChanging", m._rangeEventParameter, m), m._syncCharts(c, d), m.sessionVariables._axisXMin = c, m.sessionVariables._axisXMax = d, m._rangeEventParameter.type = "rangeChanged", m.dispatchEvent("rangeChanged", m._rangeEventParameter,
                              m), this.state = "on");
                          this.textBlock.fontWeight = "bold";
                          this.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover;
                          this.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnSelect;
                          this.textBlock.render(!0)
                      }
                  }
              }
              if (this.rangeSelector.inputFields && this.rangeSelector.inputFields.enabled) {
                  this.rangeSelector.inputFields.valueType = this.options.rangeSelector && this.options.rangeSelector.inputFields && this.options.rangeSelector.inputFields.valueType ? this.options.rangeSelector.inputFields.valueType :
                      this.isDateTime ? "dateTime" : "number";
                  for (d = 0; d < this.rangeSelector.inputFields._textBlocks.length; d++) h = this.rangeSelector.inputFields._textBlocks[d], h.mousemove = function(a) {
                      a.inputField.cursor = a.stockChart.rangeSelector.inputFields.style.cursor
                  }, h.mouseover = function(a) {
                      a.inputField.cursor = a.stockChart.rangeSelector.inputFields.style.cursor
                  }, h.mouseout = function(a) {
                      a.inputField.cursor = "auto"
                  }, h.click = function(a) {
                      a.stockChart.rangeSelector.inputFields.elements[a.inputFieldIndex].style.display = "inline";
                      a.stockChart.rangeSelector.inputFields.elements[a.inputFieldIndex].focus()
                  };
                  if (isFinite(w) && isFinite(u)) {
                      "dateTime" === this.rangeSelector.inputFields.valueType ? (this.rangeSelector.inputFields.valueFormatString = this.options.rangeSelector && this.options.rangeSelector.inputFields && this.options.rangeSelector.inputFields.valueFormatString ? this.options.rangeSelector.inputFields.valueFormatString : "MMM DD YYYY", this.rangeSelector.inputFields.startValue = n(this.rangeSelector.inputFields.options.startValue) ? n(a) ?
                          w : a : ma(this.rangeSelector.inputFields.options.startValue, this.rangeSelector.inputFields.valueFormatString), this.rangeSelector.inputFields.endValue = n(this.rangeSelector.inputFields.options.endValue) ? n(e) ? u : e : ma(this.rangeSelector.inputFields.options.endValue, this.rangeSelector.inputFields.valueFormatString)) : (this.rangeSelector.inputFields.valueFormatString = this.options.rangeSelector && this.options.rangeSelector.inputFields && this.options.rangeSelector.inputFields.valueFormatString ? this.options.rangeSelector.inputFields.valueFormatString :
                          "#,##0.##", this.rangeSelector.inputFields.startValue = n(this.rangeSelector.inputFields.options.startValue) ? n(a) ? w : a : this.rangeSelector.inputFields.options.startValue, this.rangeSelector.inputFields.endValue = n(this.rangeSelector.inputFields.options.endValue) ? n(e) ? u : e : this.rangeSelector.inputFields.options.endValue);
                      if (!(n(this._axisXMin) && n(this._axisXMax) && n(this.rangeSelector.inputFields.options.startValue) && n(this.rangeSelector.inputFields.options.endValue)))
                          for (b = 0; b < this.rangeSelector.buttons.length; b++) c =
                              this.rangeSelector.buttons[b];
                      d = ma(this.rangeSelector.inputFields.startValue, "YYYY-MM-DD'T'HH:mm:ssZ");
                      h = ma(this.rangeSelector.inputFields.endValue, "YYYY-MM-DD'T'HH:mm:ssZ");
                      x || (d = d.replace(/-/g, "/"), h = h.replace(/-/g, "/"), d = d.replace("T", " "), h = h.replace("T", " "), d = d.replace(/(\+[0-9]{2})(\:)([0-9]{2}$)/, " UTC$1$3"), h = h.replace(/(\+[0-9]{2})(\:)([0-9]{2}$)/, " UTC$1$3"));
                      this._axisXMin = n(this._axisXMin) ? "dateTime" === this.rangeSelector.inputFields.valueType ? (new Date(d)).getTime() : this.rangeSelector.inputFields.startValue :
                          this._axisXMin;
                      this._axisXMax = n(this._axisXMax) ? "dateTime" === this.rangeSelector.inputFields.valueType ? (new Date(h)).getTime() : this.rangeSelector.inputFields.endValue : this._axisXMax
                  }
                  for (d = 0; d < this.rangeSelector.inputFields.elements.length; d++) this.rangeSelector.inputFields.elements[d].title = "dateTime" === this.rangeSelector.inputFields.valueType ? "YYYY-MM-DD" : this.rangeSelector.inputFields.valueFormatString
              }
              this.rangeSelector.render()
          }
          n(this._axisXMin) && (this._axisXMin = w);
          n(this._axisXMax) && (this._axisXMax =
              u);
          this._axisXMin = !n(this.sessionVariables._axisXMin) && this.navigator && this.navigator.slider && !this.navigator.slider.hasOptionChanged("minimum") ? this.sessionVariables._axisXMin : this._axisXMin;
          this._axisXMax = !n(this.sessionVariables._axisXMax) && this.navigator && this.navigator.slider && !this.navigator.slider.hasOptionChanged("maximum") ? this.sessionVariables._axisXMax : this._axisXMax;
          if (!n(g)) {
              this.navigator.slider.hasOptionChanged("minimum") && (this._axisXMin = this.sessionVariables._axisXMin = this.navigator.slider.sessionVariables.minimum =
                  this.navigator.slider.minimum = this.navigator.slider.options.minimum);
              this.navigator.slider.hasOptionChanged("maximum") && (this._axisXMax = this.sessionVariables._axisXMax = this.navigator.slider.sessionVariables.maximum = this.navigator.slider.maximum = this.navigator.slider.options.maximum);
              if (this._axisXMin < g.minimum || this._axisXMin > g.maximum) this._axisXMin = g.minimum;
              if (this._axisXMax < g.minimum || this._axisXMax > g.maximum) this._axisXMax = g.maximum
          }!n(g) && g.reversed ? this._syncCharts(this._axisXMax, this._axisXMin) :
              this._syncCharts(this._axisXMin, this._axisXMax)
      };
      G.prototype.setChartsLayout = function() {
          var d, f, m = 0,
              n = this.width;
          this.isPlotAreaSet = this.isDateTime = !1;
          for (var a = 0; a < this.charts.length; a++) {
              d = this.charts[a];
              d._initialize();
              d.setLayout();
              f = {};
              if ((d.axisX[0] || d.axisX2[0]) && (d.axisY[0] || d.axisY2[0])) {
                  var e = d.axisX[0] ? d.axisX[0].lineCoordinates : d.axisX2[0].lineCoordinates;
                  if (d.axisY && 0 < d.axisY.length && d.axisY[0]) {
                      var b = d.axisY[0];
                      f.x1 = e.x1 < e.x2 ? e.x1 : b.lineCoordinates.x1;
                      f.x2 = e.x2 > b.lineCoordinates.x2 ?
                          e.x2 : b.lineCoordinates.x2
                  }
                  d.axisY2 && 0 < d.axisY2.length && d.axisY2[0] && (b = d.axisY2[0], f.x1 = e.x1 < e.x2 ? e.x1 : b.lineCoordinates.x1, f.x2 = e.x2 > b.lineCoordinates.x2 ? e.x2 : b.lineCoordinates.x2)
              }
              for (e = 0; e < d.data.length; e++) "dateTime" === d.data[e].xValueType && (this.isDateTime = !0);
              m = Math.max(m, f.x1);
              n = Math.min(n, f.x2);
              d.sessionVariables.plotAreaBounds = f
          }
          this._chartsPlotAreaX1 = m;
          this._chartsPlotAreaX2 = n
      };
      G.prototype._updateSize = function() {
          return ob.call(this, [this.canvas, this.overlaidCanvas])
      };
      G.prototype._syncCharts =
          function(d, f) {
              for (var m = this, u = null, a = Math.min(d, f), e = Math.max(d, f), b = 0; b < this.charts.length; b++) {
                  u = this.charts[b];
                  u.toolTip && u.toolTip.enabled && u.toolTip.hide();
                  for (var c = 0; c < u.axisX.length; c++) u.axisX[c].setViewPortRange(d, f);
                  for (c = 0; c < u.axisX2.length; c++) u.axisX2[c].setViewPortRange(d, f);
                  u.render();
                  (n(this.charts[b].options.toolTip) || !n(this.charts[b].options.toolTip) && n(this.charts[b].options.toolTip.updated)) && this.charts[b].toolTip && (this.charts[b].toolTip.updated = function(a) {
                      for (var b = 0; b <
                          m.charts.length; b++) m.charts[b] != a.chart && m.charts[b].toolTip.showAtX(a.entries[0].xValue, a.entries[0].dataSeriesIndex)
                  });
                  (n(this.charts[b].options.toolTip) || !n(this.charts[b].options.toolTip) && n(this.charts[b].options.toolTip.hidden)) && this.charts[b].toolTip && (this.charts[b].toolTip.hidden = function(a) {
                      for (var b = 0; b < m.charts.length; b++) m.charts[b] != a.chart && m.charts[b].toolTip.hide()
                  });
                  for (c = 0; c < this.charts[b].axisX.length; c++) this.charts[b].axisX[c].crosshair && this.charts[b].axisX[c].crosshair.enabled &&
                      (this.charts[b].axisX[c].crosshair.options.updated || this.charts[b].axisX[c].crosshair.set("updated", function(a) {
                          for (var b = 0; b < m.charts.length; b++)
                              if (m.charts[b] != a.chart)
                                  for (var c = 0; c < m.charts[b].axisX.length; c++) m.charts[b].axisX[c].crosshair && m.charts[b].axisX[c].crosshair.showAt(a.value)
                      }));
                  for (c = 0; c < this.charts[b].axisX2.length; c++) this.charts[b].axisX2[c].crosshair && this.charts[b].axisX2[c].crosshair.enabled && (this.charts[b].axisX2[c].crosshair.options.updated || this.charts[b].axisX2[c].crosshair.set("updated",
                      function(a) {
                          for (var b = 0; b < m.charts.length; b++)
                              if (m.charts[b] != a.chart)
                                  for (var c = 0; c < m.charts[b].axisX2.length; c++) m.charts[b].axisX2[c].crosshair && m.charts[b].axisX2[c].crosshair.showAt(a.value)
                      }))
              }
              this.rangeSelector && (this.rangeSelector.enabled && this.rangeSelector.inputFields && this.rangeSelector.inputFields.enabled) && this.rangeSelector._updateInputFields(a, e);
              this.navigator && this.navigator.enabled && this.navigator._updateSlider(a, e)
          };
      G.prototype.destroy = function() {
          for (var d = this.allDOMEventHandlers,
                  f = 0; f < this.charts.length; f++) this.charts[f].destroy();
          this.navigator && this.navigator.enabled && this.navigator.chart.destroy();
          for (f = 0; f < d.length; f++) ib(d[f][0], d[f][1], d[f][2], d[f][3]);
          for (this.allDOMEventHandlers = []; this.navigator && this.navigator.enabled && this.navigator.panel.hasChildNodes();) this.navigator.panel.removeChild(this.navigator.panel.lastChild);
          for (; this._canvasJSContainer && this._canvasJSContainer.hasChildNodes();) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
          for (; this.container && this.container.hasChildNodes();) this.container.removeChild(this.container.lastChild);
          this.canvas = this.container = this._canvasJSContainer = null;
          this.navigator.panel = null;
          this.rangeSelector.panel = null
      };
      G.prototype.exportChart = function(d) {
          d = "undefined" === typeof d ? {} : d;
          var f = d.format ? d.format : "png",
              m = d.fileName ? d.fileName : this.exportFileName,
              n = this.canvas.cloneNode();
          n.setAttribute("class", n.getAttribute("class") + "-clone");
          var a = n.getContext("2d");
          a.drawImage(this.canvas, 0, 0);
          for (var e = [], b = 0; b < this.charts.length; b++) {
              var c = this.charts[b];
              e.push({
                  canvas: c.canvas,
                  position: {
                      x: c.container.offsetLeft,
                      y: c.container.offsetTop
                  }
              });
              e.push({
                  canvas: c.overlaidCanvas,
                  position: {
                      x: c.container.offsetLeft,
                      y: c.container.offsetTop
                  }
              })
          }
          this.navigator && this.navigator.enabled && (b = this.navigator, e.push({
              canvas: b.chart.canvas,
              position: {
                  x: b.panel.offsetLeft,
                  y: b.panel.offsetTop
              }
          }), e.push({
              canvas: b.chart.overlaidCanvas,
              position: {
                  x: b.panel.offsetLeft,
                  y: b.panel.offsetTop
              }
          }));
          for (b = 0; b < e.length; b++) a.drawImage(e[b].canvas,
              e[b].position.x * ka, e[b].position.y * ka);
          if (d.toDataURL) return n.toDataURL("image/" + f);
          fb(n, f, m)
      };
      G.prototype.print = function() {
          var d = this.exportChart({
                  toDataURL: !0
              }),
              f = document.createElement("iframe");
          f.setAttribute("class", "canvasjs-chart-print-frame");
          f.setAttribute("style", "position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
          f.style.height = this.height + "px";
          this._canvasJSContainer.appendChild(f);
          var m = this,
              n = f.contentWindow || f.contentDocument.document ||
              f.contentDocument;
          n.document.open();
          n.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="' + d + '"/><body/></html>');
          n.document.close();
          setTimeout(function() {
              n.focus();
              n.print();
              setTimeout(function() {
                  m._canvasJSContainer.removeChild(f)
              }, 1E3)
          }, 500)
      };
      G.prototype.getObjectAtXY = function(d, f, m) {
          m = null;
          if (!n(this.rangeSelector)) {
              for (var u = 0; u < this.rangeSelector.buttons.length; u++) {
                  var a = this.rangeSelector.buttons[u];
                  d >= a.bounds.x1 && (d <= a.bounds.x2 &&
                      f >= a.bounds.y1 && f <= a.bounds.y2) && (m = a.id)
              }
              for (u = 0; u < this.rangeSelector.inputFields._textBlocks.length; u++) a = this.rangeSelector.inputFields._textBlocks[u], d >= a.bounds.x1 && (d <= a.bounds.x2 && f >= a.bounds.y1 && f <= a.bounds.y2) && (m = a.id)
          }
          return m
      };
      G.prototype._touchEventHandler = function(d) {
          if (d.changedTouches) {
              var f = [],
                  m = d.changedTouches,
                  u = m ? m[0] : d,
                  a = null;
              switch (d.type) {
                  case "touchstart":
                  case "MSPointerDown":
                      f = ["mousemove", "mousedown"];
                      this._lastTouchData = Aa(u);
                      this._lastTouchData.time = new Date;
                      break;
                  case "touchmove":
                  case "MSPointerMove":
                      f = ["mousemove"];
                      break;
                  case "touchend":
                  case "MSPointerUp":
                      var e = this._lastTouchData && this._lastTouchData.time ? new Date - this._lastTouchData.time : 0,
                          f = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > e ? ["mouseup", "click"] : ["mouseup"];
                      break;
                  default:
                      return
              }
              if (!(m && 1 < m.length)) {
                  a = Aa(u);
                  a.time = new Date;
                  try {
                      var b = a.y - this._lastTouchData.y,
                          e = a.time - this._lastTouchData.time;
                      if (1 < Math.abs(b) && this._lastTouchData.scroll || 5 < Math.abs(b) && 250 > e) this._lastTouchData.scroll = !0
                  } catch (c) {}
                  this._lastTouchEventType =
                      d.type;
                  if (this._lastTouchData && this._lastTouchData.scroll) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                  else
                      for (m = 0; m < f.length; m++)
                          if (a = f[m], b = document.createEvent("MouseEvent"), b.initMouseEvent(a, !0, !0, window, 1, u.screenX, u.screenY, u.clientX, u.clientY, !1, !1, !1, !1, 0, null), u.target.dispatchEvent(b), this._lastTouchData && !n(this._lastTouchData.scroll) && !this._lastTouchData.scroll || this._lastTouchData && !this._lastTouchData.scroll && 250 < e || "click" === a) d.preventManipulation && d.preventManipulation(),
                              d.preventDefault && d.cancelable && d.preventDefault()
              }
          }
      };
      G.prototype._mouseEventHandler = function(d) {
          "undefined" === typeof d.target && d.srcElement && (d.target = d.srcElement);
          var f = Aa(d),
              m = d.type,
              n, a;
          d.which ? a = 3 == d.which : d.button && (a = 2 == d.button);
          G.capturedEventParam && (n = G.capturedEventParam, "mouseup" === m && (G.capturedEventParam = null, n.stockChart.overlaidCanvas.releaseCapture ? n.stockChart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", n.stockChart._mouseEventHandler,
              !1)), n.hasOwnProperty(m) && ("mouseup" !== m || n.stockChart.overlaidCanvas.releaseCapture ? d.target !== n.stockChart.overlaidCanvas && x || n[m].call(n.context, f.x, f.y) : d.target !== n.stockChart.overlaidCanvas && (n.stockChart.isDrag = !1)));
          if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
          else if (d.preventManipulation && d.preventManipulation(), d.preventDefault && d.preventDefault(), Na && window.console && (window.console.log(m + " --\x3e x: " + f.x + "; y:" + f.y), a && window.console.log(d.which), "mouseup" === m && window.console.log("mouseup")),
              !a) {
              if (!G.capturedEventParam && this._events) {
                  for (var e = 0; e < this._events.length; e++)
                      if (this._events[e].hasOwnProperty(m))
                          if (n = this._events[e], a = n.bounds, f.x >= a.x1 && f.x <= a.x2 && f.y >= a.y1 && f.y <= a.y2) {
                              n[m].call(n.context, f.x, f.y);
                              "mousedown" === m && !0 === n.capture ? (Chart.capturedEventParam = n, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === m && (n.stockChart.overlaidCanvas.releaseCapture ? n.stockChart.overlaidCanvas.releaseCapture() :
                                  document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                              break
                          } else n = null;
                  d.target.style.cursor = n && n.cursor ? n.cursor : this._defaultCursor
              }
              m = this.bounds;
              (f.x < m.x1 || f.x > m.x2 || f.y < m.y1 || f.y > m.y2) && this.resetOverlayedCanvas();
              !this.isDrag && this._eventManager && this._eventManager.mouseEventHandler(d)
          }
      };
      G.prototype.resetOverlayedCanvas = function() {
          this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
      };
      G.prototype.clearCanvas = pb;
      G.prototype.getAutoFontSize = qb;
      ga(J, Ia);
      ga(N,
          Oa);
      Ka.prototype.alignVerticalAxes = function() {
          if (!this.isNavigator && this.stockChart) {
              for (var d = this.sessionVariables.plotAreaBounds, f = this.stockChart._chartsPlotAreaX1 - d.x1, d = d.x2 - this.stockChart._chartsPlotAreaX2, m = 0; m < this.axisX.length; m++) this.axisX[m].lineCoordinates.x1 += f, this.axisX[m].lineCoordinates.x2 -= d, this.axisX[m].lineCoordinates.width = this.axisX[m].lineCoordinates.x2 - this.axisX[m].lineCoordinates.x1, this.axisX[m].bounds.x1 += f, this.axisX[m].bounds.x2 -= d, this.axisX[m].calculateValueToPixelConversionParameters();
              for (m = 0; m < this.axisX2.length; m++) this.axisX2[m].lineCoordinates.x1 += f, this.axisX2[m].lineCoordinates.x2 -= d, this.axisX2[m].lineCoordinates.width = this.axisX2[m].lineCoordinates.x2 - this.axisX2[m].lineCoordinates.x1, this.axisX2[m].bounds.x1 += f, this.axisX2[m].bounds.x2 -= d, this.axisX2[m].calculateValueToPixelConversionParameters();
              for (m = 0; m < this.axisY.length; m++) this.axisY[m].lineCoordinates.x1 += f, this.axisY[m].lineCoordinates.x2 += f, this.axisY[m].bounds.x1 += f, this.axisY[m].bounds.x2 += f;
              for (m = 0; m < this.axisY2.length; m++) this.axisY2[m].lineCoordinates.x1 -=
                  d, this.axisY2[m].lineCoordinates.x2 -= d, this.axisY2[m].bounds.x1 -= d, this.axisY2[m].bounds.x2 -= d
          }
      };
      Ka.prototype.syncCharts = function(d, f) {
          this.stockChart && (d = n(d) ? this.stockChart._axisXMin : d, f = n(f) ? this.stockChart._axisXMax : f, this.stockChart._syncCharts(d, f), this.stockChart.sessionVariables._axisXMin = d, this.stockChart.sessionVariables._axisXMax = f, this.stockChart.rangeSelector && "zoom" !== this._zoomButton.getAttribute("state") && this.stockChart.rangeSelector.resetRangeButtons())
      };
      E.prototype.reset = function() {
          this.lastObjectId =
              0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.eventObjects = [];
          x && (this.ghostCtx.clearRect(0, 0, this.stockChart.width, this.stockChart.height), this.ghostCtx.beginPath())
      };
      E.prototype.getNewObjectTrackingId = function() {
          return ++this.lastObjectId
      };
      E.prototype.mouseEventHandler = function(d) {
          if ("mousemove" === d.type || "click" === d.type) {
              var f = [],
                  m = Aa(d),
                  n = null;
              if ((n = this.stockChart.getObjectAtXY(m.x, m.y, !1)) && "undefined" !== typeof this.objectMap[n])
                  if (n = this.objectMap[n], "rangeButton" ===
                      n.objectType) {
                      var a = this.stockChart.rangeSelector.buttons[n.rangeButtonIndex];
                      n.eventParameter = {
                          x: m.x,
                          y: m.y,
                          rangeButton: a,
                          rangeButtonIndex: n.rangeButtonIndex,
                          stockChart: this.stockChart
                      };
                      n.eventContext = {
                          context: this.stockChart.rangeSelector,
                          userContext: a,
                          mouseover: "mouseover",
                          mousemove: "mousemove",
                          mouseout: "mouseout",
                          click: "click"
                      };
                      f.push(n)
                  } else "inputFields" === n.objectType && (a = this.stockChart.rangeSelector.inputFields._textBlocks[n.inputFieldIndex], n.eventParameter = {
                      x: m.x,
                      y: m.y,
                      inputField: a,
                      inputFieldIndex: n.inputFieldIndex,
                      stockChart: this.stockChart
                  }, n.eventContext = {
                      context: this.stockChart.rangeSelector,
                      userContext: a,
                      mouseover: "mouseover",
                      mousemove: "mousemove",
                      mouseout: "mouseout",
                      click: "click"
                  }, f.push(n));
              a = [];
              for (m = 0; m < this.mouseoveredObjectMaps.length; m++) {
                  for (var e = !0, n = 0; n < f.length; n++)
                      if (f[n].id === this.mouseoveredObjectMaps[m].id) {
                          e = !1;
                          break
                      } e ? this.fireEvent(this.mouseoveredObjectMaps[m], "mouseout", d) : a.push(this.mouseoveredObjectMaps[m])
              }
              this.mouseoveredObjectMaps = a;
              for (m = 0; m < f.length; m++) {
                  a = !1;
                  for (n = 0; n < this.mouseoveredObjectMaps.length; n++)
                      if (f[m].id ===
                          this.mouseoveredObjectMaps[n].id) {
                          a = !0;
                          break
                      } a || (this.fireEvent(f[m], "mouseover", d), this.mouseoveredObjectMaps.push(f[m]));
                  "click" === d.type ? this.fireEvent(f[m], "click", d) : "mousemove" === d.type && this.fireEvent(f[m], "mousemove", d)
              }
          }
      };
      E.prototype.fireEvent = function(d, f, m) {
          if (d && f) {
              var n = d.eventParameter,
                  a = d.eventContext,
                  e = d.eventContext.userContext;
              e && (a && e[a[f]]) && e[a[f]].call(e, n);
              "mouseout" !== f ? e.cursor && e.cursor !== m.target.style.cursor && (m.target.style.cursor = e.cursor) : (m.target.style.cursor = this.stockChart._defaultCursor,
                  delete d.eventParameter, delete d.eventContext)
          }
      };
      ga(A, S);
      A.prototype._updateOptions = function() {
          this.updateOption("enabled");
          this.updateOption("backgroundColor");
          this.options.backgroundColor || (this.backgroundColor = this.stockChart.backgroundColor);
          this.updateOption("animationEnabled");
          this.animationEnabled = this.animationEnabled && x;
          this.updateOption("animationDuration");
          this.updateOption("theme");
          this.updateOption("verticalAlign");
          this.updateOption("horizontalAlign");
          this.updateOption("width");
          this.updateOption("height");
          this.updateOption("dynamicUpdate")
      };
      A.prototype._initialize = function() {
          this._updateOptions();
          var d;
          this.enabled && !this.panel && (this.panel = f("canvasjs-navigator-panel"), (d = !n(this.panel) && this.stockChart._canvasJSContainer.contains(this.panel)) || this.stockChart._canvasJSContainer.appendChild(this.panel));
          d = !n(this.panel) && this.stockChart._canvasJSContainer.contains(this.panel);
          if (this.enabled) {
              this.height = this.options.height ? parseInt(this.options.height) : 0.14 * this.stockChart.height;
              d || this.stockChart._canvasJSContainer.appendChild(this.panel);
              var m = this.stockChart.layoutManager.getFreeSpace(),
                  w = m.x1,
                  u = m.y1;
              this.width = this.options.width ? this.width : m.width;
              "top" === this.verticalAlign ? (u = m.y1 + 2, d = "top") : (u = m.y2 - this.height - 2, d = "bottom");
              "left" === this.horizontalAlign ? w = m.x1 + 2 : "center" === this.horizontalAlign ? w = m.x1 + m.width / 2 - this.width / 2 : "right" === this.horizontalAlign && (w = m.x2 - 2 - this.width);
              this.panel.style.top = u + "px";
              this.panel.style.left = w + "px";
              this.panel.style.height = this.height + "px";
              this.panel.style.width = this.width + "px";
              this.stockChart.layoutManager.registerSpace(d, {
                  width: this.width,
                  height: this.height + 2
              });
              this.bounds = {
                  x1: w,
                  y1: u,
                  x2: w + this.width,
                  y2: u + this.height
              }
          } else d && this.stockChart._canvasJSContainer.removeChild(this.panel)
      };
      A.prototype._updateSlider = function(d, f) {
          var m = this.chart.axisX && this.chart.axisX.length ? this.chart.axisX[0] : this.chart.axisX2[0];
          if (!n(m)) {
              var u = Math.max(m.bounds.x1, m.convertValueToPixel(m.reversed ? Math.max(d, Math.min(m.maximum, f)) : Math.min(d, Math.min(m.maximum, f)))),
                  a = m.convertValueToPixel(m.reversed ? Math.min(d, Math.min(m.maximum, f)) :
                      Math.max(d, Math.min(m.maximum, f)));
              this.slider.panel.style.left = u + "px";
              this.slider.left = u;
              this.slider.panel.style.width = a - u + "px";
              this.slider.width = a - u;
              this.slider.minimum = d;
              this.slider.maximum = f;
              this.chart.resetOverlayedCanvas();
              this.slider.maskInverted ? Z(this.chart.overlaidCanvasCtx, u, 0, a, this.height, this.slider.maskColor, 0, this.slider.outlineColor, 0, 0, 0, 0, this.slider.maskOpacity) : (Z(this.chart.overlaidCanvasCtx, m.bounds.x1, 0, u, this.height, this.slider.maskColor, 0, this.slider.outlineColor, !1, !1, !1,
                  !1, this.slider.maskOpacity), Z(this.chart.overlaidCanvasCtx, a, 0, this.width, this.height, this.slider.maskColor, 0, this.slider.outlineColor, !1, !1, !1, !1, this.slider.maskOpacity));
              this.chart.overlaidCanvasCtx.lineWidth = this.slider.outlineThickness;
              this.chart.overlaidCanvasCtx.strokeStyle = this.slider.outlineColor;
              this.chart.overlaidCanvasCtx.save();
              this.chart.overlaidCanvasCtx.beginPath();
              0 < this.slider.outlineThickness && (this.slider.outlineInverted ? (this.chart.overlaidCanvasCtx.moveTo(m.bounds.x1, this.height -
                  this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (u - this.slider.outlineThickness / 2 << 0) + 0.5 : u, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (u - this.slider.outlineThickness / 2 << 0) + 0.5 : u, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 ===
                  this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(this.width, this.height - this.slider.outlineThickness)) : (this.chart.overlaidCanvasCtx.moveTo(m.bounds.x1, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (u - this.slider.outlineThickness / 2 << 0) + 0.5 : u, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness %
                  2 ? (u - this.slider.outlineThickness / 2 << 0) + 0.5 : u, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(this.width, this.slider.outlineThickness / 2)));
              this.chart.overlaidCanvasCtx.stroke();
              this.chart.overlaidCanvasCtx.restore();
              Z(this.chart.overlaidCanvasCtx, 1 === this.slider.handleBorderThickness % 2 ? u - this.slider.handleWidth / 2 << 0.5 : u - this.slider.handleWidth / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 - this.slider.handleHeight / 2 << 0.5 : this.height / 2 - this.slider.handleHeight / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? u + this.slider.handleWidth / 2 << 0.5 : u + this.slider.handleWidth / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 + this.slider.handleHeight / 2 << 0.5 : this.height /
                  2 + this.slider.handleHeight / 2 << 0, this.slider.handleColor, this.slider.handleBorderThickness, this.slider.handleBorderColor, !1, !1, !1, !1, 1);
              Z(this.chart.overlaidCanvasCtx, 1 === this.slider.handleBorderThickness % 2 ? a - this.slider.handleWidth / 2 << 0.5 : a - this.slider.handleWidth / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 - this.slider.handleHeight / 2 << 0.5 : this.height / 2 - this.slider.handleHeight / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? a + this.slider.handleWidth / 2 << 0.5 : a + this.slider.handleWidth / 2 <<
                  0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 + this.slider.handleHeight / 2 << 0.5 : this.height / 2 + this.slider.handleHeight / 2 << 0, this.slider.handleColor, this.slider.handleBorderThickness, this.slider.handleBorderColor, !1, !1, !1, !1, 1);
              this.chart.overlaidCanvasCtx.lineWidth = this.slider.handleBorderThickness;
              this.chart.overlaidCanvasCtx.strokeStyle = this.slider.handleBorderColor;
              this.chart.overlaidCanvasCtx.save();
              this.chart.overlaidCanvasCtx.beginPath();
              this.chart.overlaidCanvasCtx.moveTo((1 === this.slider.handleBorderThickness %
                  2 ? (u - this.slider.handleBorderThickness / 2 << 0) + 0.5 : u) - Math.round(this.slider.handleBorderThickness), this.height / 2 - this.slider.handleHeight / 4);
              this.chart.overlaidCanvasCtx.lineTo((1 === this.slider.handleBorderThickness % 2 ? (u - this.slider.handleBorderThickness / 2 << 0) + 0.5 : u) - Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
              this.chart.overlaidCanvasCtx.moveTo((1 === this.slider.handleBorderThickness % 2 ? (u + this.slider.handleBorderThickness / 2 << 0) + 0.5 : u) + Math.round(this.slider.handleBorderThickness),
                  this.height / 2 - this.slider.handleHeight / 4);
              this.chart.overlaidCanvasCtx.lineTo((1 === this.slider.handleBorderThickness % 2 ? (u + this.slider.handleBorderThickness / 2 << 0) + 0.5 : u) + Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
              this.chart.overlaidCanvasCtx.moveTo((1 === this.slider.handleBorderThickness % 2 ? (a - this.slider.handleBorderThickness / 2 << 0) + 0.5 : a) - Math.round(this.slider.handleBorderThickness), this.height / 2 - this.slider.handleHeight / 4);
              this.chart.overlaidCanvasCtx.lineTo((1 ===
                  this.slider.handleBorderThickness % 2 ? (a - this.slider.handleBorderThickness / 2 << 0) + 0.5 : a) - Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
              this.chart.overlaidCanvasCtx.moveTo((1 === this.slider.handleBorderThickness % 2 ? (a + this.slider.handleBorderThickness / 2 << 0) + 0.5 : a) + Math.round(this.slider.handleBorderThickness), this.height / 2 - this.slider.handleHeight / 4);
              this.chart.overlaidCanvasCtx.lineTo((1 === this.slider.handleBorderThickness % 2 ? (a + this.slider.handleBorderThickness /
                  2 << 0) + 0.5 : a) + Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
              this.chart.overlaidCanvasCtx.stroke();
              this.chart.overlaidCanvasCtx.restore()
          }
      };
      ga(M, S);
      M.prototype._updateOptions = function() {
          this.updateOption("maskColor");
          this.updateOption("maskInverted");
          this.updateOption("maskOpacity");
          this.updateOption("handleColor");
          this.updateOption("handleBorderColor");
          this.updateOption("handleBorderThickness");
          this.updateOption("handleWidth");
          this.updateOption("handleHeight");
          this.updateOption("outlineColor");
          this.updateOption("outlineThickness");
          this.updateOption("outlineInverted");
          this.updateOption("minimum");
          this.updateOption("maximum")
      };
      M.prototype._attachEvents = function() {
          var d = this;
          y(this.panel, "mousedown", function(f) {
              d.stockChart.isDrag = !0;
              f.target !== d.leftHandle && f.target !== d.rightHandle && (d.stockChart.navigatorClicked = !0, d.currentHandle = d.leftHandle, d.panMode = !0, d.startPosition = Aa(f), f.target === d.currentHandle ? d.startPosition.x += d.currentHandle.offsetLeft + d.currentHandle.clientWidth /
                  2 + d.panel.offsetLeft : f.target === d.panel && (d.startPosition.x += d.panel.offsetLeft), d.startWidth = d.panel.clientWidth, d.startLeft = d.panel.offsetLeft)
          }, this.stockChart.allDOMEventHandlers);
          y(this.panel, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(f) {
              d.stockChart._touchEventHandler(f)
          }, this.stockChart.allDOMEventHandlers);
          y(this.navigator.panel, "mousedown", function(f) {
              if (f.target !== d.navigator.slider.panel && f.target !== d.leftHandle && f.target !== d.rightHandle) {
                  d.stockChart.navigatorClicked = !0;
                  var m = Aa(f),
                      u, a;
                  u = 0;
                  var e = d.navigator.chart.axisX && d.navigator.chart.axisX.length ? d.navigator.chart.axisX[0] : d.navigator.chart.axisX2[0];
                  f = d.navigator.slider.left;
                  n(d.startLeft) && (d.startLeft = f);
                  u = f + d.navigator.slider.width;
                  a = m.x - (f + u) / 2;
                  if (m.x < f || m.x > u) {
                      var m = Math.max(0, f + a),
                          b = Math.min(u + a, d.navigator.width);
                      u + a > d.navigator.width && (u = u + a - d.navigator.width, m -= u);
                      0 > f + a && (u = Math.abs(f + a), b += u);
                      d.stockChart._rangeEventParameter = {
                          stockChart: d.stockChart,
                          source: "navigator",
                          index: null,
                          minimum: e.convertPixelToValue(m),
                          maximum: e.convertPixelToValue(b)
                      };
                      d.stockChart.sessionVariables._axisXMin = e.convertPixelToValue(m);
                      d.stockChart.sessionVariables._axisXMax = e.convertPixelToValue(b);
                      d.navigator.dynamicUpdate ? (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart), d.stockChart._syncCharts(e.convertPixelToValue(m), e.convertPixelToValue(b)), d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent("rangeChanged",
                          d.stockChart._rangeEventParameter, d.stockChart)) : d.navigator._updateSlider(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax)
                  }
              }
          }, this.navigator.stockChart.allDOMEventHandlers);
          y(this.navigator.panel, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(f) {
              d.stockChart._touchEventHandler(f)
          }, this.navigator.stockChart.allDOMEventHandlers);
          y(this.navigator.stockChart.container, "mousemove", function(f) {
              var m = d.navigator.chart.axisX && d.navigator.chart.axisX.length ?
                  d.navigator.chart.axisX[0] : d.navigator.chart.axisX2[0];
              if (!n(d.currentHandle) && d.startPosition) {
                  d.navigator.chart.overlaidCanvas.style.cursor = d.navigator.chart.container.style.cursor = d.navigator.panel.style.cursor = "ew-resize";
                  var u;
                  u = d.currentHandle === d.leftHandle ? 1 : -1;
                  var a = Aa(f);
                  f = f.target || f.srcElement;
                  a.x = f === d.currentHandle ? a.x + (d.currentHandle.offsetLeft + d.currentHandle.clientWidth / 2 + d.panel.offsetLeft) : f === d.mask || f === d.panel ? a.x + d.panel.offsetLeft : f === d.rightHandle && d.currentHandle === d.leftHandle ?
                      a.x + (d.rightHandle.offsetLeft + d.rightHandle.clientWidth / 2 + d.panel.offsetLeft) : f === d.leftHandle && d.currentHandle === d.rightHandle ? a.x + d.panel.offsetLeft : a.x + ("canvasjs-chart-toolbar" === f.parentElement.className ? f.offsetParent.offsetLeft + f.offsetLeft - d.stockChart._chartsPlotAreaX1 : f.parentElement.parentElement.parentElement === d.navigator.panel ? f.offsetLeft : f.offsetLeft - d.stockChart._chartsPlotAreaX1);
                  var e = a.x - d.startPosition.x;
                  if (0 !== e) {
                      f = d.panel.offsetLeft;
                      var b = d.panel.clientWidth;
                      0 < u && (f = Math.max(d.startLeft +
                          u * e, d._left));
                      d.panMode || (b = Math.min(d.startWidth - u * e, d.fullWidth), u * e > d.startWidth ? (f = 0 < u ? d.startLeft + d.startWidth : Math.max(a.x, d._left), b = (0 < u ? a.x : d.startLeft) - parseFloat(f)) : 0 > u && (f = d.startLeft));
                      f + b <= d._left + d.fullWidth && (2 < Math.abs(d.startLeft - f) || 2 < Math.abs(d.startWidth - parseFloat(b))) && (0 < u && (d.left = f, d.panel.style.left = d.left + "px"), d.panMode || (d.panel.style.width = d.width = b + "px"), n(m) || (u = m.convertPixelToValue(Math.max(m.bounds.x1, parseFloat(f))), m = m.convertPixelToValue(parseFloat(f) + parseFloat(b)),
                          d.stockChart.sessionVariables._axisXMin = u, d.stockChart.sessionVariables._axisXMax = m, d.stockChart.rangeSelector && !d.panMode && d.stockChart.rangeSelector.resetRangeButtons(), d.stockChart._rangeEventParameter = {
                              stockChart: d.stockChart,
                              source: "navigator",
                              index: null,
                              minimum: u,
                              maximum: m
                          }, d.navigator.dynamicUpdate ? (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart), d.stockChart._syncCharts(u, m), d.stockChart._rangeEventParameter.type =
                              "rangeChanged", d.stockChart.dispatchEvent("rangeChanged", d.stockChart._rangeEventParameter, d.stockChart)) : d.navigator._updateSlider(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax)))
                  }
              } else d.navigator.chart.overlaidCanvas.style.cursor = d.navigator.chart.container.style.cursor = d.navigator.panel.style.cursor = "auto"
          }, this.navigator.stockChart.allDOMEventHandlers);
          y(this.navigator.stockChart.container, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(f) {
                  d.stockChart._touchEventHandler(f)
              },
              this.navigator.stockChart.allDOMEventHandlers)
      };
      M.prototype._initialize = function() {
          var d = this,
              f;
          this._updateOptions();
          $ && (this.eventsAttached || (this._attachEvents(), this.eventsAttached = !0), this.handleWidth = this.options.handleWidth ? this.handleWidth : 8, this.handleHeight = this.options.handleHeight ? Math.min(this.navigator.height, this.options.handleHeight) : 0.25 * this.navigator.height, this.leftHandle || (this.leftHandle = m("button", "canvasjs-slider-handle", "button"), this.leftHandle.innerHTML = "||", this.leftHandle.style.cssText =
              "height: " + this.navigator.height + "px; width: " + this.handleWidth + "px; position:absolute; left: -" + this.handleWidth / 2 + "px; top: 0; cursor:ew-resize;border-style: solid; border-width:" + this.handleBorderThickness + "px; border-color: transparent; outline:none; padding:0px; background-color: transparent; color: transparent;font-size:12px;font-family:Arial;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;user-select: none; opacity: 0;", this.panel.appendChild(this.leftHandle), this.initHandle(this.leftHandle,
                  1)), this.rightHandle || (this.rightHandle = m("button", "canvasjs-slider-handle", "button"), this.rightHandle.innerHTML = "||", this.rightHandle.style.cssText = "height: " + this.navigator.height + "px; width: " + this.handleWidth + "px; position:absolute; right: -" + this.handleWidth / 2 + "px; top: 0; cursor:ew-resize;border-style: solid; border-width:" + this.handleBorderThickness + "px; border-color: transparent; outline:none; padding:0px; background-color: transparent; color: transparent;font-size:12px;font-family:Arial;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;user-select: none; opacity: 0;",
              this.panel.appendChild(this.rightHandle), this.initHandle(this.rightHandle, -1)), this.panel.style.cssText = "height: " + this.navigator.height + "px; width: 100%; position: absolute; cursor: move;", this.fullWidth = this.panel.clientWidth, this._left = this.panel.offsetLeft, y(document, "mousedown", function(f) {
              if (d.stockChart.rangeSelector && d.stockChart.rangeSelector.inputFields && d.stockChart.rangeSelector.inputFields.enabled)
                  for (var m = 0; m < d.stockChart.rangeSelector.inputFields.elements.length; m++) f.target != d.stockChart.rangeSelector.inputFields.elements[m] &&
                      d.stockChart.rangeSelector.inputFields.elements[m].focused && d.stockChart.rangeSelector.inputFields.elements[m].blur()
          }, this.navigator.stockChart.allDOMEventHandlers), y(document, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(d) {
              a: {
                  var f = d.changedTouches,
                      f = f ? f[0] : d,
                      a = "";
                  switch (d.type) {
                      case "touchstart":
                      case "MSPointerDown":
                          a = "mousedown";
                          break;
                      case "touchmove":
                      case "MSPointerMove":
                          a = "mousemove";
                          break;
                      case "touchend":
                      case "MSPointerUp":
                          a = "mouseup";
                          break;
                      default:
                          break a
                  }
                  d = document.createEvent("MouseEvent");
                  d.initMouseEvent(a, !0, !0, window, 1, f.screenX, f.screenY, f.clientX, f.clientY, !1, !1, !1, !1, 0, null);f.target.dispatchEvent(d)
              }
          }, this.navigator.stockChart.allDOMEventHandlers), y(document, "mouseup", function(m) {
              d.panMode = !1;
              d.navigator.stockChart.isDrag = !1;
              if (d.stockChart.navigatorClicked) {
                  m = Math.min(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
                  var u = Math.max(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
                  n(d.stockChart._rangeEventParameter) &&
                      (d.stockChart._rangeEventParameter = {
                          stockChart: d.stockChart,
                          source: "navigator",
                          index: null,
                          minimum: m,
                          maximum: u
                      });
                  if (2 < Math.abs(d.startLeft - d.left) || 2 < Math.abs(d.startWidth - parseFloat(d.width))) {
                      d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart));
                      for (var a = 0; a < d.stockChart.charts.length; a++) {
                          f = d.stockChart.charts[a];
                          f.toolTip && f.toolTip.enabled && f.toolTip.hide();
                          for (var e = 0; e < f.axisX.length; e++) f.axisX[e].setViewPortRange(m,
                              u);
                          for (e = 0; e < f.axisX2.length; e++) f.axisX2[e].setViewPortRange(m, u);
                          f.render()
                      }
                      d.stockChart.rangeSelector && (d.stockChart.rangeSelector.enabled && d.stockChart.rangeSelector.inputFields && d.stockChart.rangeSelector.inputFields.enabled) && d.stockChart.rangeSelector._updateInputFields(m, u);
                      d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent("rangeChanged", d.stockChart._rangeEventParameter, d.stockChart))
                  }
              }
              d.stockChart.navigatorClicked = d.currentHandle =
                  d.startPosition = d.startWidth = d.startLeft = null
          }, this.navigator.stockChart.allDOMEventHandlers), y(document, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(m) {
              d.panMode = !1;
              d.navigator.stockChart.isDrag = !1;
              if (d.stockChart.navigatorClicked) {
                  m = Math.min(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
                  var u = Math.max(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
                  n(d.stockChart._rangeEventParameter) && (d.stockChart._rangeEventParameter = {
                      stockChart: d.stockChart,
                      source: "navigator",
                      index: null,
                      minimum: m,
                      maximum: u
                  });
                  d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart));
                  for (var a = 0; a < d.stockChart.charts.length; a++) {
                      f = d.stockChart.charts[a];
                      f.toolTip && f.toolTip.enabled && f.toolTip.hide();
                      for (var e = 0; e < f.axisX.length; e++) f.axisX[e].setViewPortRange(m, u);
                      for (e = 0; e < f.axisX2.length; e++) f.axisX2[e].setViewPortRange(m, u);
                      f.render()
                  }
                  d.stockChart.rangeSelector &&
                      (d.stockChart.rangeSelector.enabled && d.stockChart.rangeSelector.inputFields && d.stockChart.rangeSelector.inputFields.enabled) && d.stockChart.rangeSelector._updateInputFields(m, u);
                  d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent("rangeChanged", d.stockChart._rangeEventParameter, d.stockChart))
              }
              d.stockChart.navigatorClicked = d.currentHandle = d.startPosition = d.startWidth = d.startLeft = null
          }, this.navigator.stockChart.allDOMEventHandlers))
      };
      M.prototype.initHandle =
          function(d, f) {
              var m = this;
              d && (y(d, "mousedown", function(d) {
                  m.stockChart.navigatorClicked = !0;
                  d.preventDefault();
                  m.currentHandle = this;
                  m.startPosition = Aa(d);
                  d.target === m.currentHandle ? m.startPosition.x += m.currentHandle.offsetLeft + m.currentHandle.clientWidth / 2 + m.panel.offsetLeft : d.target === m.panel && (m.startPosition.x += m.panel.offsetLeft);
                  m.startWidth = m.panel.clientWidth;
                  m.startLeft = m.panel.offsetLeft
              }, this.navigator.stockChart.allDOMEventHandlers), y(d, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart",
                  function(d) {
                      m.stockChart._touchEventHandler(d)
                  }, this.navigator.stockChart.allDOMEventHandlers))
          };
      ga(L, S);
      L.prototype._updateOptions = function() {
          this.updateOption("enabled");
          this.updateOption("verticalAlign");
          this.updateOption("horizontalAlign");
          this.updateOption("width");
          this.updateOption("height");
          this.updateOption("label");
          this.updateOption("selectedRangeButtonIndex")
      };
      L.prototype._initialize = function() {
          var d = 0;
          this._updateOptions();
          this.buttons = [];
          if ($ && this.enabled) {
              if (this.options.buttons)
                  for (var f =
                          0; f < this.options.buttons.length; f++) this.buttons.push(new O(this.stockChart, f, this.options.buttons[f]));
              else {
                  for (f = 0; 6 > f; f++) this.buttons.push(new O(this.stockChart, f));
                  this.buttonLabels = "1m 3m 6m YTD 1y All".split(" ")
              }
              this._wrapElements = !1;
              var m = this.stockChart.layoutManager.getFreeSpace(),
                  u = m.x1,
                  f = m.y1;
              this.width = this.options.width ? this.width : m.width;
              n(this.buttonStyle.options.labelFontSize) && (this.buttonStyle.labelFontSize = this.stockChart.getAutoFontSize(this.buttonStyle.labelFontSize));
              this.rangeButtonsWidth =
                  0;
              this.buttonStyle.maxWidth = this.buttonStyle.options.maxWidth ? this.buttonStyle.options.maxWidth : this.stockChart.width / this.buttons.length;
              if (this.buttons && 0 < this.buttons.length) {
                  var a = new la(this.ctx, {
                      x: 0,
                      y: 0,
                      backgroundColor: this.stockChart.backgroundColor,
                      borderThickness: 0,
                      cornerRadius: 0,
                      maxWidth: 0.2 * this.stockChart.width,
                      maxHeight: 2 * this.buttonStyle.labelFontSize,
                      angle: 0,
                      padding: {
                          left: 5,
                          right: 5,
                          top: 2,
                          bottom: 2
                      },
                      text: n(this.stockChart.options.culture) || n(this.stockChart._cultureInfo.rangeSelector.rangeText) ?
                          this.label : this.stockChart._cultureInfo.rangeSelector.rangeText,
                      horizontalAlign: "left",
                      fontSize: this.buttonStyle.labelFontSize,
                      fontFamily: this.buttonStyle.labelFontFamily,
                      fontWeight: this.buttonStyle.labelFontWeight,
                      fontColor: this.buttonStyle.labelFontColor,
                      fontStyle: this.buttonStyle.labelFontStyle,
                      textBaseline: "middle"
                  });
                  this._label.textBlock = a
              }
              for (f = 0; f < this.buttons.length; f++) {
                  var e = this.buttons[f];
                  e._index = f;
                  a = new la(this.ctx, {
                      x: 0,
                      y: 0,
                      backgroundColor: this.buttonStyle.backgroundColor,
                      borderColor: this.buttonStyle.borderColor,
                      borderThickness: this.buttonStyle.borderThickness,
                      cornerRadius: 0,
                      maxWidth: this.buttonStyle.options.width ? this.buttonStyle.width : this.buttonStyle.maxWidth,
                      maxHeight: 2 * this.buttonStyle.labelFontSize,
                      angle: 0,
                      padding: this.buttonStyle.padding,
                      text: this.options.buttons && this.options.buttons.length ? n(e.label) ? "" : e.label : this.buttonLabels[f],
                      horizontalAlign: "center",
                      textAlign: "center",
                      fontSize: this.buttonStyle.labelFontSize,
                      fontFamily: this.buttonStyle.labelFontFamily,
                      fontWeight: this.buttonStyle.labelFontWeight,
                      fontColor: this.buttonStyle.labelFontColor,
                      fontStyle: this.buttonStyle.labelFontStyle,
                      textBaseline: "middle"
                  });
                  e.state = n(this.selectedRangeButtonIndex) || this.selectedRangeButtonIndex !== f ? "off" : "on";
                  e.textBlock = a;
                  e.bounds = {
                      x1: null,
                      x2: null,
                      y1: null,
                      y2: null,
                      width: null,
                      height: null
                  };
                  a.measureText();
                  this.rangeButtonsWidth += a.width + this.buttonStyle.spacing;
                  this.rangeButtonsHeight = a.height;
                  d = d < a.height ? a.height : d;
                  e = this.buttons[f];
                  e.id = ++this.stockChart._eventManager.lastObjectId;
                  this.stockChart._eventManager.objectMap[e.id] = {
                      id: e.id,
                      objectType: "rangeButton",
                      rangeButtonIndex: f
                  }
              }
              this.height < this.inputFieldsHeight + 2 * this.inputFields.style.borderThickness && (this.height = this.inputFieldsHeight + 2 * this.inputFields.style.borderThickness);
              this.height < d + 2 * this.buttonStyle.borderThickness + 5 && (this.height = d + 2 * this.buttonStyle.borderThickness + 5);
              this.rangeButtonsWidth + this._label.textBlock.measureText().width + this.inputFieldsWidth >= this.stockChart.width && (this.height = this.options.height ? this.height : 2 * this.height, this._wrapElements = !0);
              "bottom" === this.verticalAlign ? (f = m.y2 - this.height, d = "bottom") : (f = m.y1, d = "top");
              "left" === this.horizontalAlign ? u = m.x1 + 2 : "center" === this.horizontalAlign ? u = m.x1 + m.width / 2 - this.width / 2 : "right" === this.horizontalAlign && (u = m.x2 - 2 - this.width);
              this.stockChart.layoutManager.registerSpace(d, {
                  width: this.width,
                  height: this.height
              });
              this.bounds = {
                  x1: u,
                  y1: f,
                  x2: u + this.width,
                  y2: f + this.height,
                  width: this.width,
                  height: this.height
              };
              for (f = 0; f < this.buttons.length; f++) this.buttons[f]._initialize(f)
          }
      };
      L.prototype.render =
          function() {
              var d;
              this.setButtonsLayout();
              Z(this.ctx, this.bounds.x1, this.bounds.y1, this.bounds.x2, this.bounds.y2, this.stockChart.backgroundColor, 0, null, 0, 0, 0, 0, 1);
              this._label && this._label.textBlock && this._label.textBlock.render(!0);
              for (d = 0; d < this.buttons.length; d++) this.buttons[d].enabled || (this.buttons[d].textBlock.backgroundColor = this.buttons[d].backgroundColorDisabled, this.buttons[d].textBlock.borderColor = this.buttons[d].backgroundColorDisabled), this.buttons[d].render(!0);
              this.inputFields && this.inputFields.enabled &&
                  this.renderInputFields(!0)
          };
      L.prototype.setButtonsLayout = function() {
          var d, f, m = this.bounds.x1 + 5,
              n, a;
          this._label && (this._label.textBlock && 0 < this.buttons.length) && (this._label.textBlock.x = m, this._label.textBlock.y = a = this.bounds.y1 + this._label.textBlock.measureText().height / 2 + 2 * this.buttons[0].textBlock.borderThickness, this._label.bounds = {
              x1: m,
              y1: a - this._label.textBlock.fontSize / 2,
              x2: m + this._label.textBlock.measureText().width,
              y2: a + this._label.textBlock.measureText().height,
              width: this._label.textBlock.measureText().width,
              height: this._label.textBlock.measureText().height
          }, m += this._label.bounds.width);
          for (d = 0; d < this.buttons.length; d++) f = this.buttons[d], f.textBlock.width = f.textBlock.maxWidth = this.buttonStyle.width = this.buttonStyle.options.width ? this.buttonStyle.width : f.textBlock.width, n = m + f.textBlock.width, f.textBlock.x = f.bounds.x1 = 1 === f.textBlock.borderThickness % 2 ? (m << 0) + 0.5 : m, f.bounds.x2 = n, a = 1 === f.textBlock.borderThickness % 2 ? this.bounds.y1 + f.textBlock.height / 2 + 2 * f.textBlock.borderThickness << 0.5 : this.bounds.y1 + f.textBlock.height /
              2 + 2 * f.textBlock.borderThickness, f.textBlock.y = a, f.bounds.y1 = a - f.textBlock.height / 2, f.bounds.y2 = f.bounds.y1 + f.textBlock.height, f.bounds.width = n - m, f.bounds.height = f.bounds.y2 - f.bounds.y1, m = n + this.buttonStyle.spacing, f.textBlock.maxWidth = this.buttonStyle.maxWidth
      };
      L.prototype.resetRangeButtons = function() {
          for (var d = 0; d < this.buttons.length; d++) this.buttons[d].enabled && (this.buttons[d].state = "off", this.buttons[d].textBlock.backgroundColor = this.buttonStyle.backgroundColor, this.buttons[d].textBlock.fontColor =
              this.buttonStyle.labelFontColor, this.buttons[d].textBlock.fontWeight = this.buttonStyle.labelFontWeight, this.buttons[d].textBlock.render(!0))
      };
      L.prototype.renderInputFields = function() {
          this.inputFields._textBlocks[0].text = "dateTime" === this.inputFields.valueType ? ma(this.inputFields.startValue, this.inputFields.valueFormatString, this.stockChart._cultureInfo) : X(this.inputFields.startValue, this.inputFields.valueFormatString, this.stockChart._cultureInfo);
          this.inputFields._textBlocks[1].text = "dateTime" === this.inputFields.valueType ?
              ma(this.inputFields.endValue, this.inputFields.valueFormatString, this.stockChart._cultureInfo) : X(this.inputFields.endValue, this.inputFields.valueFormatString, this.stockChart._cultureInfo);
          this.inputFields._labels[0].text = n(this.stockChart._cultureInfo.rangeSelector.fromText) ? "From" : this.stockChart._cultureInfo.rangeSelector.fromText;
          this.inputFields._labels[1].text = n(this.stockChart._cultureInfo.rangeSelector.toText) ? "To" : this.stockChart._cultureInfo.rangeSelector.toText;
          var d = 0,
              f = !0;
          if (this.stockChart.title &&
              this.stockChart.title.text && "top" === this.stockChart.title.verticalAlign || "bottom" === this.verticalAlign) f = !1;
          if (this.stockChart.subtitles)
              for (var m = 0; m < this.stockChart.subtitles.length; m++) this.stockChart.subtitles[m] && (this.stockChart.subtitles[m].text && "top" === this.stockChart.subtitles[m].verticalAlign) && (f = !1);
          for (m = this.inputFields._textBlocks.length - 1; 0 <= m; m--) {
              var u = this.inputFields._textBlocks[m],
                  a = u.measureText();
              u._width = this.inputFields.style.options.width ? this.inputFields.style.width : Math.abs(a.width -
                  u._width) <= ("dateTime" === this.inputFields.valueType ? 10 : 5) ? u._width : a.width + 10;
              d += u._width + this.inputFields.style.spacing;
              this.inputFields.elements[m].style.width = u._width - this.inputFields.style.spacing - 2 * this.inputFields.style.borderThickness - 5 + "px";
              u.x = u.bounds.x1 = 1 === u.borderThickness % 2 ? (this.bounds.x2 - d - (this.stockChart.exportEnabled && f ? 40 : 0) << 0) + 0.5 : this.bounds.x2 - d - (this.stockChart.exportEnabled && f ? 40 : 0);
              u.bounds.x2 = u.bounds.x1 + u._width;
              this.inputFields.elements[m].style.left = this.bounds.x2 -
                  d - (this.stockChart.exportEnabled && f ? 40 : 0) + this.inputFields.style.borderThickness + "px";
              d += this.inputFields._labels[m].measureText().width;
              this.inputFields._labels[m].x = this.inputFields._labels[m].bounds.x1 = this.bounds.x2 - d - (this.stockChart.exportEnabled && f ? 40 : 0);
              this.inputFields._labels[m].bounds.x2 = this.inputFields._labels[m].bounds.x1 + this.inputFields._labels[m].measureText().width;
              u.width = u._width;
              u.y = 1 === u.borderThickness % 2 ? (this._wrapElements ? this.bounds.y1 + this.rangeButtonsHeight + 10 : this.bounds.y1) +
                  a.height / 2 + 2 * u.borderThickness << 0.5 : (this._wrapElements ? this.bounds.y1 + this.rangeButtonsHeight + 10 : this.bounds.y1) + a.height / 2 + 2 * u.borderThickness;
              this.inputFields._labels[m].y = (this._wrapElements ? this.bounds.y1 + this.rangeButtonsHeight + 10 : this.bounds.y1) + a.height / 2 + 2 * u.borderThickness;
              u.bounds.y1 = this.inputFields._labels[m].bounds.y1 = u.y - a.height / 2 + 2 * u.borderThickness;
              u.bounds.y2 = this.inputFields._labels[m].bounds.y2 = u.bounds.y1 + a.height;
              this.inputFields.elements[m].style.top = this.inputFields._labels[m].bounds.y1 +
                  "px";
              u.render(!0);
              this.inputFields._labels[m].render(!0)
          }
      };
      L.prototype._updateInputFields = function(d, f) {
          this.inputFields.elements[0].focused || (this.inputFields.elements[0].value = "dateTime" === this.inputFields.valueType ? ma(d, "YYYY-MM-DD") : X(d, this.inputFields.valueFormatString));
          this.inputFields.elements[1].focused || (this.inputFields.elements[1].value = "dateTime" === this.inputFields.valueType ? ma(f, "YYYY-MM-DD") : X(f, this.inputFields.valueFormatString));
          for (var m = 0; m < this.inputFields.elements.length; m++) this.inputFields.elements[m].focused &&
              this.inputFields.elements[m].focus();
          this.inputFields.startValue = d;
          this.inputFields.endValue = f;
          this.render()
      };
      ga(O, S);
      O.prototype._updateOptions = function() {
          this.updateOption("style");
          this.updateOption("label");
          this.updateOption("range");
          this.updateOption("rangeType")
      };
      O.prototype._initialize = function(d) {
          this._updateOptions();
          var f = "1m 3m 6m YTD 1y All".split(" "),
              m = [1, 3, 6, null, 1, null],
              u = "month month month ytd year all".split(" ");
          this.range = "undefined" !== typeof this.options.range ? this.range : n(m[d]) ?
              null : m[d];
          this.rangeType = "undefined" !== typeof this.options.rangeType ? this.rangeType : u[d];
          this.label = this.textBlock.text = n(this.options.label) ? f[d] : this.label
      };
      O.prototype.render = function() {
          this.textBlock.render(!0)
      };
      ga(V, S);
      V.prototype._updateOptions = function() {
          this.updateOption("enabled");
          this.updateOption("startValue");
          this.updateOption("endValue");
          this.updateOption("valueType");
          this.updateOption("valueFormatString")
      };
      V.prototype._initialize = function() {
          this._updateOptions();
          n(this.style.options.fontSize) &&
              (this.style.fontSize = this.stockChart.getAutoFontSize(this.style.fontSize));
          if (this.enabled) {
              for (var d = 0; d < this.elements.length; d++) this.elements[d].style.position = "absolute", this.elements[d].style.display = this.elements[d].focused ? "inline" : "none", this.elements[d].style.backgroundColor = this.style.backgroundColor, this.elements[d].style.border = "none", this.elements[d].style.outline = "none", this.elements[d].style.outlineOffset = 0, this.elements[d].style.textAlign = "center", this.elements[d].style.color = this.style.fontColor,
                  this.elements[d].style.fontSize = this.elements[d].style.height = this.style.fontSize + "px", this.elements[d].style.fontStyle = this.style.fontStyle, this.elements[d].style.fontFamily = this.style.fontFamily, this.elements[d].style.fontWeight = this.style.fontWeight, this.elements[d].style.lineHeight = 1, isNaN(this.style.padding) ? (this.elements[d].style.paddingTop = this.style.padding.top + "px", this.elements[d].style.paddingRight = this.style.padding.right + "px", this.elements[d].style.paddingBottom = this.style.padding.bottom +
                      "px", this.elements[d].style.paddingLeft = this.style.padding.left + "px") : this.elements[d].style.padding = this.style.padding + "px", this.elements[d].style.mozAppearance = this.elements[d].style.webkitAppearance = this.elements[d].style.appearance = "none", this.elements[d].style.webkitBorderRadius = 0, this.elements[d].style.mozBorderRadius = 0, this.elements[d].style.borderRadius = 0, this.elements[d].style.boxSizing = "content-box";
              this.parent = this.rangeSelector = this.stockChart.rangeSelector
          }
      };
      ga(W, S);
      W.prototype._updateOptions =
          function() {
              this.updateOption("backgroundColor");
              this.updateOption("backgroundColorOnHover");
              this.updateOption("backgroundColorOnSelect");
              this.updateOption("borderColor");
              this.updateOption("borderThickness");
              this.updateOption("labelFontColor");
              this.updateOption("labelFontColorOnHover");
              this.updateOption("labelFontSize");
              this.updateOption("labelFontStyle");
              this.updateOption("labelFontFamily");
              this.updateOption("labelFontWeight");
              this.updateOption("width");
              this.updateOption("maxWidth");
              this.updateOption("padding");
              this.updateOption("spacing");
              this.updateOption("cursor")
          };
      ga(Y, S);
      Y.prototype._updateOptions = function() {
          this.updateOption("backgroundColor");
          this.updateOption("borderColor");
          this.updateOption("borderThickness");
          this.updateOption("borderColorOnFocus");
          this.updateOption("fontColor");
          this.updateOption("fontSize");
          this.updateOption("fontStyle");
          this.updateOption("fontFamily");
          this.updateOption("fontWeight");
          this.updateOption("width");
          this.updateOption("maxWidth");
          this.updateOption("padding");
          this.updateOption("spacing");
          this.updateOption("cursor")
      };
      return G
  }();
  W.version = "v1.2 GA";
  window.CanvasJS && (W && (!window.CanvasJS.StockChart && window.CanvasJS.Chart) && (window.CanvasJS.StockChart = W), W && !window.CanvasJS.Chart && (window.CanvasJS.Chart = Ka, window.CanvasJS.StockChart = W))
})();

/*
excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext || function() {
  function V() {
      return this.context_ || (this.context_ = new C(this))
  }

  function W(a, b, c) {
      var g = M.call(arguments, 2);
      return function() {
          return a.apply(b, g.concat(M.call(arguments)))
      }
  }

  function N(a) {
      return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
  }

  function O(a) {
      a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
      a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
      a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
  }

  function X(a) {
      var b = a.srcElement;
      switch (a.propertyName) {
          case "width":
              b.getContext().clearRect();
              b.style.width = b.attributes.width.nodeValue + "px";
              b.firstChild.style.width = b.clientWidth + "px";
              break;
          case "height":
              b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
                  "px"
      }
  }

  function Y(a) {
      a = a.srcElement;
      a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
  }

  function D() {
      return [
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1]
      ]
  }

  function t(a, b) {
      for (var c = D(), g = 0; 3 > g; g++)
          for (var e = 0; 3 > e; e++) {
              for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
              c[g][e] = f
          }
      return c
  }

  function P(a, b) {
      b.fillStyle = a.fillStyle;
      b.lineCap = a.lineCap;
      b.lineJoin = a.lineJoin;
      b.lineWidth = a.lineWidth;
      b.miterLimit = a.miterLimit;
      b.shadowBlur = a.shadowBlur;
      b.shadowColor = a.shadowColor;
      b.shadowOffsetX =
          a.shadowOffsetX;
      b.shadowOffsetY = a.shadowOffsetY;
      b.strokeStyle = a.strokeStyle;
      b.globalAlpha = a.globalAlpha;
      b.font = a.font;
      b.textAlign = a.textAlign;
      b.textBaseline = a.textBaseline;
      b.arcScaleX_ = a.arcScaleX_;
      b.arcScaleY_ = a.arcScaleY_;
      b.lineScale_ = a.lineScale_
  }

  function Q(a) {
      var b = a.indexOf("(", 3),
          c = a.indexOf(")", b + 1),
          b = a.substring(b + 1, c).split(",");
      if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
      return b
  }

  function E(a, b, c) {
      return Math.min(c, Math.max(b, a))
  }

  function F(a, b, c) {
      0 > c && c++;
      1 < c && c--;
      return 1 > 6 * c ? a + 6 * (b - a) * c :
          1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
  }

  function G(a) {
      if (a in H) return H[a];
      var b, c = 1;
      a = String(a);
      if ("#" == a.charAt(0)) b = a;
      else if (/^rgb/.test(a)) {
          c = Q(a);
          b = "#";
          for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
          c = +c[3]
      } else if (/^hsl/.test(a)) {
          e = c = Q(a);
          b = parseFloat(e[0]) / 360 % 360;
          0 > b && b++;
          g = E(parseFloat(e[1]) / 100, 0, 1);
          e = E(parseFloat(e[2]) / 100, 0, 1);
          if (0 == g) g = e = b = e;
          else {
              var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                  d = 2 * e - f;
              g = F(d, f, b + 1 / 3);
              e = F(d, f, b);
              b = F(d, f, b - 1 / 3)
          }
          b = "#" +
              v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
          c = c[3]
      } else b = Z[a] || a;
      return H[a] = {
          color: b,
          alpha: c
      }
  }

  function C(a) {
      this.m_ = D();
      this.mStack_ = [];
      this.aStack_ = [];
      this.currentPath_ = [];
      this.fillStyle = this.strokeStyle = "#000";
      this.lineWidth = 1;
      this.lineJoin = "miter";
      this.lineCap = "butt";
      this.miterLimit = 1 * q;
      this.globalAlpha = 1;
      this.font = "10px sans-serif";
      this.textAlign = "left";
      this.textBaseline = "alphabetic";
      this.canvas = a;
      var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
          c = a.ownerDocument.createElement("div");
      c.style.cssText = b;
      a.appendChild(c);
      b = c.cloneNode(!1);
      b.style.backgroundColor = "red";
      b.style.filter = "alpha(opacity=0)";
      a.appendChild(b);
      this.element_ = c;
      this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
  }

  function R(a, b, c, g) {
      a.currentPath_.push({
          type: "bezierCurveTo",
          cp1x: b.x,
          cp1y: b.y,
          cp2x: c.x,
          cp2y: c.y,
          x: g.x,
          y: g.y
      });
      a.currentX_ = g.x;
      a.currentY_ = g.y
  }

  function S(a, b) {
      var c = G(a.strokeStyle),
          g = c.color,
          c = c.alpha * a.globalAlpha,
          e = a.lineScale_ * a.lineWidth;
      1 > e && (c *= e);
      b.push("<g_vml_:stroke",
          ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
  }

  function T(a, b, c, g) {
      var e = a.fillStyle,
          f = a.arcScaleX_,
          d = a.arcScaleY_,
          k = g.x - c.x,
          n = g.y - c.y;
      if (e instanceof w) {
          var h = 0,
              l = g = 0,
              u = 0,
              m = 1;
          if ("gradient" == e.type_) {
              h = e.x1_ / f;
              c = e.y1_ / d;
              var p = s(a, e.x0_ / f, e.y0_ / d),
                  h = s(a, h, c),
                  h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
              0 > h && (h += 360);
              1E-6 > h && (h = 0)
          } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
              n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
          f = e.colors_;
          f.sort(function(a, b) {
              return a.offset - b.offset
          });
          d = f.length;
          p = f[0].color;
          c = f[d - 1].color;
          k = f[0].alpha * a.globalAlpha;
          a = f[d - 1].alpha * a.globalAlpha;
          for (var n = [], r = 0; r < d; r++) {
              var t = f[r];
              n.push(t.offset * m + u + " " + t.color)
          }
          b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
      } else e instanceof
      I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
  }

  function s(a, b, c) {
      a = a.m_;
      return {
          x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
          y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r
      }
  }

  function z(a, b, c) {
      isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
          b[1][0]))))
  }

  function w(a) {
      this.type_ = a;
      this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
      this.colors_ = []
  }

  function I(a, b) {
      if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
      if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
      switch (b) {
          case "repeat":
          case null:
          case "":
              this.repetition_ = "repeat";
              break;
          case "repeat-x":
          case "repeat-y":
          case "no-repeat":
              this.repetition_ = b;
              break;
          default:
              throw new A("SYNTAX_ERR");
      }
      this.src_ = a.src;
      this.width_ = a.width;
      this.height_ = a.height
  }

  function A(a) {
      this.code = this[a];
      this.message = a + ": DOM Exception " + this.code
  }
  var x = Math,
      k = x.round,
      J = x.sin,
      K = x.cos,
      ba = x.abs,
      aa = x.sqrt,
      q = 10,
      r = q / 2;
  navigator.userAgent.match(/MSIE ([\d.]+)?/);
  var M = Array.prototype.slice;
  O(document);
  var U = {
      init: function(a) {
          a = a || document;
          a.createElement("canvas");
          a.attachEvent("onreadystatechange", W(this.init_, this, a))
      },
      init_: function(a) {
          a = a.getElementsByTagName("canvas");
          for (var b = 0; b < a.length; b++) this.initElement(a[b])
      },
      initElement: function(a) {
          if (!a.getContext) {
              a.getContext =
                  V;
              O(a.ownerDocument);
              a.innerHTML = "";
              a.attachEvent("onpropertychange", X);
              a.attachEvent("onresize", Y);
              var b = a.attributes;
              b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
              b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
          }
          return a
      }
  };
  U.init();
  for (var v = [], d = 0; 16 > d; d++)
      for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
  var Z = {
          aliceblue: "#F0F8FF",
          antiquewhite: "#FAEBD7",
          aquamarine: "#7FFFD4",
          azure: "#F0FFFF",
          beige: "#F5F5DC",
          bisque: "#FFE4C4",
          black: "#000000",
          blanchedalmond: "#FFEBCD",
          blueviolet: "#8A2BE2",
          brown: "#A52A2A",
          burlywood: "#DEB887",
          cadetblue: "#5F9EA0",
          chartreuse: "#7FFF00",
          chocolate: "#D2691E",
          coral: "#FF7F50",
          cornflowerblue: "#6495ED",
          cornsilk: "#FFF8DC",
          crimson: "#DC143C",
          cyan: "#00FFFF",
          darkblue: "#00008B",
          darkcyan: "#008B8B",
          darkgoldenrod: "#B8860B",
          darkgray: "#A9A9A9",
          darkgreen: "#006400",
          darkgrey: "#A9A9A9",
          darkkhaki: "#BDB76B",
          darkmagenta: "#8B008B",
          darkolivegreen: "#556B2F",
          darkorange: "#FF8C00",
          darkorchid: "#9932CC",
          darkred: "#8B0000",
          darksalmon: "#E9967A",
          darkseagreen: "#8FBC8F",
          darkslateblue: "#483D8B",
          darkslategray: "#2F4F4F",
          darkslategrey: "#2F4F4F",
          darkturquoise: "#00CED1",
          darkviolet: "#9400D3",
          deeppink: "#FF1493",
          deepskyblue: "#00BFFF",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1E90FF",
          firebrick: "#B22222",
          floralwhite: "#FFFAF0",
          forestgreen: "#228B22",
          gainsboro: "#DCDCDC",
          ghostwhite: "#F8F8FF",
          gold: "#FFD700",
          goldenrod: "#DAA520",
          grey: "#808080",
          greenyellow: "#ADFF2F",
          honeydew: "#F0FFF0",
          hotpink: "#FF69B4",
          indianred: "#CD5C5C",
          indigo: "#4B0082",
          ivory: "#FFFFF0",
          khaki: "#F0E68C",
          lavender: "#E6E6FA",
          lavenderblush: "#FFF0F5",
          lawngreen: "#7CFC00",
          lemonchiffon: "#FFFACD",
          lightblue: "#ADD8E6",
          lightcoral: "#F08080",
          lightcyan: "#E0FFFF",
          lightgoldenrodyellow: "#FAFAD2",
          lightgreen: "#90EE90",
          lightgrey: "#D3D3D3",
          lightpink: "#FFB6C1",
          lightsalmon: "#FFA07A",
          lightseagreen: "#20B2AA",
          lightskyblue: "#87CEFA",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#B0C4DE",
          lightyellow: "#FFFFE0",
          limegreen: "#32CD32",
          linen: "#FAF0E6",
          magenta: "#FF00FF",
          mediumaquamarine: "#66CDAA",
          mediumblue: "#0000CD",
          mediumorchid: "#BA55D3",
          mediumpurple: "#9370DB",
          mediumseagreen: "#3CB371",
          mediumslateblue: "#7B68EE",
          mediumspringgreen: "#00FA9A",
          mediumturquoise: "#48D1CC",
          mediumvioletred: "#C71585",
          midnightblue: "#191970",
          mintcream: "#F5FFFA",
          mistyrose: "#FFE4E1",
          moccasin: "#FFE4B5",
          navajowhite: "#FFDEAD",
          oldlace: "#FDF5E6",
          olivedrab: "#6B8E23",
          orange: "#FFA500",
          orangered: "#FF4500",
          orchid: "#DA70D6",
          palegoldenrod: "#EEE8AA",
          palegreen: "#98FB98",
          paleturquoise: "#AFEEEE",
          palevioletred: "#DB7093",
          papayawhip: "#FFEFD5",
          peachpuff: "#FFDAB9",
          peru: "#CD853F",
          pink: "#FFC0CB",
          plum: "#DDA0DD",
          powderblue: "#B0E0E6",
          rosybrown: "#BC8F8F",
          royalblue: "#4169E1",
          saddlebrown: "#8B4513",
          salmon: "#FA8072",
          sandybrown: "#F4A460",
          seagreen: "#2E8B57",
          seashell: "#FFF5EE",
          sienna: "#A0522D",
          skyblue: "#87CEEB",
          slateblue: "#6A5ACD",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#FFFAFA",
          springgreen: "#00FF7F",
          steelblue: "#4682B4",
          tan: "#D2B48C",
          thistle: "#D8BFD8",
          tomato: "#FF6347",
          turquoise: "#40E0D0",
          violet: "#EE82EE",
          wheat: "#F5DEB3",
          whitesmoke: "#F5F5F5",
          yellowgreen: "#9ACD32"
      },
      H = {},
      L = {},
      $ = {
          butt: "flat",
          round: "round"
      },
      d = C.prototype;
  d.clearRect = function() {
      this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
      this.element_.innerHTML = ""
  };
  d.beginPath = function() {
      this.currentPath_ = []
  };
  d.moveTo = function(a, b) {
      var c = s(this, a, b);
      this.currentPath_.push({
          type: "moveTo",
          x: c.x,
          y: c.y
      });
      this.currentX_ = c.x;
      this.currentY_ = c.y
  };
  d.lineTo = function(a, b) {
      var c = s(this, a, b);
      this.currentPath_.push({
          type: "lineTo",
          x: c.x,
          y: c.y
      });
      this.currentX_ = c.x;
      this.currentY_ = c.y
  };
  d.bezierCurveTo =
      function(a, b, c, g, e, f) {
          e = s(this, e, f);
          a = s(this, a, b);
          c = s(this, c, g);
          R(this, a, c, e)
      };
  d.quadraticCurveTo = function(a, b, c, g) {
      a = s(this, a, b);
      c = s(this, c, g);
      g = {
          x: this.currentX_ + 2 / 3 * (a.x - this.currentX_),
          y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)
      };
      R(this, g, {
          x: g.x + (c.x - this.currentX_) / 3,
          y: g.y + (c.y - this.currentY_) / 3
      }, c)
  };
  d.arc = function(a, b, c, g, e, f) {
      c *= q;
      var d = f ? "at" : "wa",
          k = a + K(g) * c - r,
          n = b + J(g) * c - r;
      g = a + K(e) * c - r;
      e = b + J(e) * c - r;
      k != g || f || (k += 0.125);
      a = s(this, a, b);
      k = s(this, k, n);
      g = s(this, g, e);
      this.currentPath_.push({
          type: d,
          x: a.x,
          y: a.y,
          radius: c,
          xStart: k.x,
          yStart: k.y,
          xEnd: g.x,
          yEnd: g.y
      })
  };
  d.rect = function(a, b, c, g) {
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a + c, b + g);
      this.lineTo(a, b + g);
      this.closePath()
  };
  d.strokeRect = function(a, b, c, g) {
      var e = this.currentPath_;
      this.beginPath();
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a + c, b + g);
      this.lineTo(a, b + g);
      this.closePath();
      this.stroke();
      this.currentPath_ = e
  };
  d.fillRect = function(a, b, c, g) {
      var e = this.currentPath_;
      this.beginPath();
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a +
          c, b + g);
      this.lineTo(a, b + g);
      this.closePath();
      this.fill();
      this.currentPath_ = e
  };
  d.createLinearGradient = function(a, b, c, g) {
      var e = new w("gradient");
      e.x0_ = a;
      e.y0_ = b;
      e.x1_ = c;
      e.y1_ = g;
      return e
  };
  d.createRadialGradient = function(a, b, c, g, e, f) {
      var d = new w("gradientradial");
      d.x0_ = a;
      d.y0_ = b;
      d.r0_ = c;
      d.x1_ = g;
      d.y1_ = e;
      d.r1_ = f;
      return d
  };
  d.drawImage = function(a, b) {
      var c, g, e, d, r, y, n, h;
      e = a.runtimeStyle.width;
      d = a.runtimeStyle.height;
      a.runtimeStyle.width = "auto";
      a.runtimeStyle.height = "auto";
      var l = a.width,
          u = a.height;
      a.runtimeStyle.width =
          e;
      a.runtimeStyle.height = d;
      if (3 == arguments.length) c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
      else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
      else if (9 == arguments.length) r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
      else throw Error("Invalid number of arguments");
      var m = s(this, c, g),
          p = [];
      p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
          10, "px;height:", 10, "px;position:absolute;");
      if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
          var t = [];
          t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
          var v = s(this, c + e, g),
              w = s(this, c, g + d);
          c = s(this, c + e, g + d);
          m.x = x.max(m.x, v.x, w.x, c.x);
          m.y = x.max(m.y, v.y, w.y, c.y);
          p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
      } else p.push("top:",
          k(m.y / q), "px;left:", k(m.x / q), "px;");
      p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
      this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
  };
  d.stroke = function(a) {
      var b = [];
      b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
          ' stroked="', !a, '"', ' path="');
      for (var c = {
              x: null,
              y: null
          }, d = {
              x: null,
              y: null
          }, e = 0; e < this.currentPath_.length; e++) {
          var f = this.currentPath_[e];
          switch (f.type) {
              case "moveTo":
                  b.push(" m ", k(f.x), ",", k(f.y));
                  break;
              case "lineTo":
                  b.push(" l ", k(f.x), ",", k(f.y));
                  break;
              case "close":
                  b.push(" x ");
                  f = null;
                  break;
              case "bezierCurveTo":
                  b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                  break;
              case "at":
              case "wa":
                  b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
                      f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
          }
          if (f) {
              if (null == c.x || f.x < c.x) c.x = f.x;
              if (null == d.x || f.x > d.x) d.x = f.x;
              if (null == c.y || f.y < c.y) c.y = f.y;
              if (null == d.y || f.y > d.y) d.y = f.y
          }
      }
      b.push(' ">');
      a ? T(this, b, c, d) : S(this, b);
      b.push("</g_vml_:shape>");
      this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
  };
  d.fill = function() {
      this.stroke(!0)
  };
  d.closePath = function() {
      this.currentPath_.push({
          type: "close"
      })
  };
  d.save = function() {
      var a = {};
      P(this, a);
      this.aStack_.push(a);
      this.mStack_.push(this.m_);
      this.m_ = t(D(), this.m_)
  };
  d.restore = function() {
      this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
  };
  d.translate = function(a, b) {
      z(this, t([
          [1, 0, 0],
          [0, 1, 0],
          [a, b, 1]
      ], this.m_), !1)
  };
  d.rotate = function(a) {
      var b = K(a);
      a = J(a);
      z(this, t([
          [b, a, 0],
          [-a, b, 0],
          [0, 0, 1]
      ], this.m_), !1)
  };
  d.scale = function(a, b) {
      this.arcScaleX_ *= a;
      this.arcScaleY_ *= b;
      z(this, t([
          [a, 0, 0],
          [0, b, 0],
          [0, 0, 1]
      ], this.m_), !0)
  };
  d.transform = function(a, b, c, d, e, f) {
      z(this, t([
          [a,
              b, 0
          ],
          [c, d, 0],
          [e, f, 1]
      ], this.m_), !0)
  };
  d.setTransform = function(a, b, c, d, e, f) {
      z(this, [
          [a, b, 0],
          [c, d, 0],
          [e, f, 1]
      ], !0)
  };
  d.drawText_ = function(a, b, c, d, e) {
      var f = this.m_;
      d = 0;
      var r = 1E3,
          t = 0,
          n = [],
          h;
      h = this.font;
      if (L[h]) h = L[h];
      else {
          var l = document.createElement("div").style;
          try {
              l.font = h
          } catch (u) {}
          h = L[h] = {
              style: l.fontStyle || "normal",
              variant: l.fontVariant || "normal",
              weight: l.fontWeight || "normal",
              size: l.fontSize || 10,
              family: l.fontFamily || "sans-serif"
          }
      }
      var l = h,
          m = this.element_;
      h = {};
      for (var p in l) h[p] = l[p];
      p = parseFloat(m.currentStyle.fontSize);
      m = parseFloat(l.size);
      "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
      h.size *= 0.981;
      p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
      m = this.element_.currentStyle;
      l = this.textAlign.toLowerCase();
      switch (l) {
          case "left":
          case "center":
          case "right":
              break;
          case "end":
              l = "ltr" == m.direction ? "right" : "left";
              break;
          case "start":
              l = "rtl" == m.direction ? "right" :
                  "left";
              break;
          default:
              l = "left"
      }
      switch (this.textBaseline) {
          case "hanging":
          case "top":
              t = h.size / 1.75;
              break;
          case "middle":
              break;
          default:
          case null:
          case "alphabetic":
          case "ideographic":
          case "bottom":
              t = -h.size / 2.25
      }
      switch (l) {
          case "right":
              d = 1E3;
              r = 0.05;
              break;
          case "center":
              d = r = 500
      }
      b = s(this, b + 0, c + t);
      n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
      e ? S(this, n) : T(this, n, {
          x: -d,
          y: 0
      }, {
          x: r,
          y: h.size
      });
      e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
      b = k(b.x / q) + "," + k(b.y / q);
      n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
      this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
  };
  d.fillText = function(a, b, c, d) {
      this.drawText_(a, b, c, d, !1)
  };
  d.strokeText = function(a,
      b, c, d) {
      this.drawText_(a, b, c, d, !0)
  };
  d.measureText = function(a) {
      this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
      var b = this.element_.ownerDocument;
      this.textMeasureEl_.innerHTML = "";
      this.textMeasureEl_.style.font = this.font;
      this.textMeasureEl_.appendChild(b.createTextNode(a));
      return {
          width: this.textMeasureEl_.offsetWidth
      }
  };
  d.clip = function() {};
  d.arcTo = function() {};
  d.createPattern = function(a, b) {
      return new I(a, b)
  };
  w.prototype.addColorStop = function(a, b) {
      b = G(b);
      this.colors_.push({
          offset: a,
          color: b.color,
          alpha: b.alpha
      })
  };
  d = A.prototype = Error();
  d.INDEX_SIZE_ERR = 1;
  d.DOMSTRING_SIZE_ERR = 2;
  d.HIERARCHY_REQUEST_ERR = 3;
  d.WRONG_DOCUMENT_ERR = 4;
  d.INVALID_CHARACTER_ERR = 5;
  d.NO_DATA_ALLOWED_ERR = 6;
  d.NO_MODIFICATION_ALLOWED_ERR = 7;
  d.NOT_FOUND_ERR = 8;
  d.NOT_SUPPORTED_ERR = 9;
  d.INUSE_ATTRIBUTE_ERR = 10;
  d.INVALID_STATE_ERR = 11;
  d.SYNTAX_ERR = 12;
  d.INVALID_MODIFICATION_ERR =
      13;
  d.NAMESPACE_ERR = 14;
  d.INVALID_ACCESS_ERR = 15;
  d.VALIDATION_ERR = 16;
  d.TYPE_MISMATCH_ERR = 17;
  G_vmlCanvasManager = U;
  CanvasRenderingContext2D = C;
  CanvasGradient = w;
  CanvasPattern = I;
  DOMException = A
}();
/*eslint-enable*/
/*jshint ignore:end*/