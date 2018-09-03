!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [], i = e.document, r = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, l = n.indexOf, c = {},
        u = c.toString, d = c.hasOwnProperty, f = d.toString, h = f.call(Object), p = {};

    function g(e, t) {
        var n = (t = t || i).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    var m = "3.2.1", v = function (e, t) {
        return new v.fn.init(e, t)
    }, y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, b = /^-ms-/, _ = /-([a-z])/g, C = function (e, t) {
        return t.toUpperCase()
    };

    function w(e) {
        var t = !!e && "length" in e && e.length, n = v.type(e);
        return "function" !== n && !v.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    v.fn = v.prototype = {
        jquery: m, constructor: v, length: 0, toArray: function () {
            return o.call(this)
        }, get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = v.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return v.each(this, e)
        }, map: function (e) {
            return this.pushStack(v.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(o.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: s, sort: n.sort, splice: n.splice
    }, v.extend = v.fn.extend = function () {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || v.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (i = e[t]) && (c && i && (v.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && v.isPlainObject(n) ? n : {}, a[t] = v.extend(c, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, v.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === v.type(e)
        }, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = v.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && (n = d.call(t, "constructor") && t.constructor, "function" != typeof n || f.call(n) !== h))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            g(e)
        }, camelCase: function (e) {
            return e.replace(b, "ms-").replace(_, C)
        }, each: function (e, t) {
            var n, i = 0;
            if (w(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(y, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (w(Object(e)) ? v.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
            return i
        }, map: function (e, t, n) {
            var i, r, o = 0, s = [];
            if (w(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r); else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return a.apply([], s)
        }, guid: 1, proxy: function (e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), v.isFunction(e)) return i = o.call(arguments, 2), (r = function () {
                return e.apply(t || this, i.concat(o.call(arguments)))
            }).guid = e.guid = e.guid || v.guid++, r
        }, now: Date.now, support: p
    }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = n[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var E = function (e) {
        var t, n, i, r, o, a, s, l, c, u, d, f, h, p, g, m, v, y, b, _ = "sizzle" + 1 * new Date, C = e.document, w = 0,
            E = 0, T = ae(), x = ae(), k = ae(), j = function (e, t) {
                return e === t && (d = !0), 0
            }, A = {}.hasOwnProperty, S = [], D = S.pop, N = S.push, I = S.push, O = S.slice, L = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]", Q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            R = "\\[" + P + "*(" + Q + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Q + "))|)" + P + "*\\]",
            M = ":(" + Q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            F = new RegExp(P + "+", "g"), W = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            q = new RegExp("^" + P + "*," + P + "*"), B = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            U = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"), V = new RegExp(M),
            $ = new RegExp("^" + Q + "$"), Y = {
                ID: new RegExp("^#(" + Q + ")"),
                CLASS: new RegExp("^\\.(" + Q + ")"),
                TAG: new RegExp("^(" + Q + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            }, K = /^(?:input|select|textarea|button)$/i, z = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/,
            X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), ee = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, ie = function () {
                f()
            }, re = ye(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            I.apply(S = O.call(C.childNodes), C.childNodes), S[C.childNodes.length].nodeType
        } catch (e) {
            I = {
                apply: S.length ? function (e, t) {
                    N.apply(e, O.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, i, r) {
            var o, s, c, u, d, p, v, y = t && t.ownerDocument, w = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;
            if (!r && ((t ? t.ownerDocument || t : C) !== h && f(t), t = t || h, g)) {
                if (11 !== w && (d = X.exec(e))) if (o = d[1]) {
                    if (9 === w) {
                        if (!(c = t.getElementById(o))) return i;
                        if (c.id === o) return i.push(c), i
                    } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
                } else {
                    if (d[2]) return I.apply(i, t.getElementsByTagName(e)), i;
                    if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return I.apply(i, t.getElementsByClassName(o)), i
                }
                if (n.qsa && !k[e + " "] && (!m || !m.test(e))) {
                    if (1 !== w) y = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = _), s = (p = a(e)).length; s--;) p[s] = "#" + u + " " + ve(p[s]);
                        v = p.join(","), y = J.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return I.apply(i, y.querySelectorAll(v)), i
                    } catch (e) {
                    } finally {
                        u === _ && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(W, "$1"), t, i, r)
        }

        function ae() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
        }

        function se(e) {
            return e[_] = !0, e
        }

        function le(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function ue(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function he(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function pe(e) {
            return se(function (t) {
                return t = +t, se(function (n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        for (t in n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, f = oe.setDocument = function (e) {
            var t, r, a = e ? e.ownerDocument || e : C;
            return a !== h && 9 === a.nodeType && a.documentElement ? (p = (h = a).documentElement, g = !o(h), C !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = le(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = le(function (e) {
                return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = G.test(h.getElementsByClassName), n.getById = le(function (e) {
                return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length
            }), n.getById ? (i.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (i.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], m = [], (n.qsa = G.test(h.querySelectorAll)) && (le(function (e) {
                p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]")
            }), le(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = h.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
            })), (n.matchesSelector = G.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M)
            }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = G.test(p.compareDocumentPosition), b = t || G.test(p.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, j = t ? function (e, t) {
                if (e === t) return d = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === C && b(C, e) ? -1 : t === h || t.ownerDocument === C && b(C, t) ? 1 : u ? L(u, e) - L(u, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t) return d = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!r || !o) return e === h ? -1 : t === h ? 1 : r ? -1 : o ? 1 : u ? L(u, e) - L(u, t) : 0;
                if (r === o) return ue(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[i] === s[i];) i++;
                return i ? ue(a[i], s[i]) : a[i] === C ? -1 : s[i] === C ? 1 : 0
            }, h) : h
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== h && f(e), t = t.replace(U, "='$1']"), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                var i = y.call(e, t);
                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
            }
            return oe(t, h, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== h && f(e), b(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== h && f(e);
            var r = i.attrHandle[t.toLowerCase()],
                o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, i = [], r = 0, o = 0;
            if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(j), d) {
                for (; t = e[o++];) t === e[o] && (r = i.push(o));
                for (; r--;) e.splice(i[r], 1)
            }
            return u = null, e
        }, r = oe.getText = function (e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[i++];) n += r(t);
            return n
        }, (i = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && T(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (i) {
                        var r = oe.attr(i, e);
                        return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, d, f, h, p, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                for (b = (h = (c = (u = (d = (f = m)[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === w && c[1]) && c[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (b = h = 0) || p.pop();) if (1 === f.nodeType && ++b && f === t) {
                                    u[e] = [w, h, b];
                                    break
                                }
                            } else if (y && (b = h = (c = (u = (d = (f = t)[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === w && c[1]), !1 === b) for (; (f = ++h && f && f[g] || (b = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [w, b]), f !== t));) ;
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return r[_] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        for (var i, o = r(e, t), a = o.length; a--;) e[i = L(e, o[a])] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: se(function (e) {
                    var t = [], n = [], i = s(e.replace(W, "$1"));
                    return i[_] ? se(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }), contains: se(function (e) {
                    return e = e.replace(Z, ee), function (t) {
                        return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                    }
                }), lang: se(function (e) {
                    return $.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === p
                }, focus: function (e) {
                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: he(!1), disabled: he(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !i.pseudos.empty(e)
                }, header: function (e) {
                    return z.test(e.nodeName)
                }, input: function (e) {
                    return K.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: pe(function () {
                    return [0]
                }), last: pe(function (e, t) {
                    return [t - 1]
                }), eq: pe(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: pe(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: pe(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: pe(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }), gt: pe(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[t] = de(t);
        for (t in{submit: !0, reset: !0}) i.pseudos[t] = fe(t);

        function me() {
        }

        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ye(e, t, n) {
            var i = t.dir, r = t.next, o = r || i, a = n && "parentNode" === o, s = E++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];) if (1 === t.nodeType || a) return e(t, n, r);
                return !1
            } : function (t, n, l) {
                var c, u, d, f = [w, s];
                if (l) {
                    for (; t = t[i];) if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || a) if (u = (d = t[_] || (t[_] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((c = u[o]) && c[0] === w && c[1] === s) return f[2] = c[2];
                    if (u[o] = f, f[2] = e(t, n, l)) return !0
                }
                return !1
            }
        }

        function be(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function _e(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++) (o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
            return a
        }

        function Ce(e, t, n, i, r, o) {
            return i && !i[_] && (i = Ce(i)), r && !r[_] && (r = Ce(r, o)), se(function (o, a, s, l) {
                var c, u, d, f = [], h = [], p = a.length, g = o || function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : _e(g, f, e, s, l),
                    v = n ? r || (o ? e : p || i) ? [] : a : m;
                if (n && n(m, v, s, l), i) for (c = _e(v, h), i(c, [], s, l), u = c.length; u--;) (d = c[u]) && (v[h[u]] = !(m[h[u]] = d));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = v.length; u--;) (d = v[u]) && c.push(m[u] = d);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--;) (d = v[u]) && (c = r ? L(o, d) : f[u]) > -1 && (o[c] = !(a[c] = d))
                    }
                } else v = _e(v === a ? v.splice(p, v.length) : v), r ? r(null, a, v, l) : I.apply(a, v)
            })
        }

        function we(e) {
            for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, u = ye(function (e) {
                return e === t
            }, s, !0), d = ye(function (e) {
                return L(t, e) > -1
            }, s, !0), f = [function (e, n, i) {
                var r = !a && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                return t = null, r
            }]; l < o; l++) if (n = i.relative[e[l].type]) f = [ye(be(f), n)]; else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                    for (r = ++l; r < o && !i.relative[e[r].type]; r++) ;
                    return Ce(l > 1 && be(f), l > 1 && ve(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(W, "$1"), n, l < r && we(e.slice(l, r)), r < o && we(e = e.slice(r)), r < o && ve(e))
                }
                f.push(n)
            }
            return be(f)
        }

        return me.prototype = i.filters = i.pseudos, i.setFilters = new me, a = oe.tokenize = function (e, t) {
            var n, r, o, a, s, l, c, u = x[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, l = [], c = i.preFilter; s;) {
                for (a in n && !(r = q.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = B.exec(s)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }), s = s.slice(n.length)), i.filter) !(r = Y[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : x(e, l).slice(0)
        }, s = oe.compile = function (e, t) {
            var n, r, o, s, l, u, d = [], p = [], m = k[e + " "];
            if (!m) {
                for (t || (t = a(e)), n = t.length; n--;) (m = we(t[n]))[_] ? d.push(m) : p.push(m);
                (m = k(e, (r = p, s = (o = d).length > 0, l = r.length > 0, u = function (e, t, n, a, u) {
                    var d, p, m, v = 0, y = "0", b = e && [], _ = [], C = c, E = e || l && i.find.TAG("*", u),
                        T = w += null == C ? 1 : Math.random() || .1, x = E.length;
                    for (u && (c = t === h || t || u); y !== x && null != (d = E[y]); y++) {
                        if (l && d) {
                            for (p = 0, t || d.ownerDocument === h || (f(d), n = !g); m = r[p++];) if (m(d, t || h, n)) {
                                a.push(d);
                                break
                            }
                            u && (w = T)
                        }
                        s && ((d = !m && d) && v--, e && b.push(d))
                    }
                    if (v += y, s && y !== v) {
                        for (p = 0; m = o[p++];) m(b, _, t, n);
                        if (e) {
                            if (v > 0) for (; y--;) b[y] || _[y] || (_[y] = D.call(a));
                            _ = _e(_)
                        }
                        I.apply(a, _), u && !e && _.length > 0 && v + o.length > 1 && oe.uniqueSort(a)
                    }
                    return u && (w = T, c = C), b
                }, s ? se(u) : u))).selector = e
            }
            return m
        }, l = oe.select = function (e, t, n, r) {
            var o, l, c, u, d, f = "function" == typeof e && e, h = !r && a(e = f.selector || e);
            if (n = n || [], 1 === h.length) {
                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    f && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = Y.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);) if ((d = i.find[u]) && (r = d(c.matches[0].replace(Z, ee), J.test(l[0].type) && ge(t.parentNode) || t))) {
                    if (l.splice(o, 1), !(e = r.length && ve(l))) return I.apply(n, r), n;
                    break
                }
            }
            return (f || s(e, h))(r, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = _.split("").sort(j).join("") === _, n.detectDuplicates = !!d, f(), n.sortDetached = le(function (e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        }), le(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && le(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function (e) {
            return null == e.getAttribute("disabled")
        }) || ce(H, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), oe
    }(e);
    v.find = E, v.expr = E.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = E.uniqueSort, v.text = E.getText, v.isXMLDoc = E.isXML, v.contains = E.contains, v.escapeSelector = E.escape;
    var T = function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (r && v(e).is(n)) break;
            i.push(e)
        }
        return i
    }, x = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, k = v.expr.match.needsContext;

    function j(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, S = /^.[^:#\[\.,]*$/;

    function D(e, t, n) {
        return v.isFunction(t) ? v.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? v.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? v.grep(e, function (e) {
            return l.call(t, e) > -1 !== n
        }) : S.test(t) ? v.filter(t, e, n) : (t = v.filter(t, e), v.grep(e, function (e) {
            return l.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    v.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? v.find.matchesSelector(i, e) ? [i] : [] : v.find.matches(e, v.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, v.fn.extend({
        find: function (e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e) return this.pushStack(v(e).filter(function () {
                for (t = 0; t < i; t++) if (v.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) v.find(e, r[t], n);
            return i > 1 ? v.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(D(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(D(this, e || [], !0))
        }, is: function (e) {
            return !!D(this, "string" == typeof e && k.test(e) ? v(e) : e || [], !1).length
        }
    });
    var N, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (v.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || N, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof v ? t[0] : t, v.merge(this, v.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), A.test(r[1]) && v.isPlainObject(t)) for (r in t) v.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : v.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(v) : v.makeArray(e, this)
    }).prototype = v.fn, N = v(i);
    var O = /^(?:parents|prev(?:Until|All))/, L = {children: !0, contents: !0, next: !0, prev: !0};

    function H(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    v.fn.extend({
        has: function (e) {
            var t = v(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (v.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, i = 0, r = this.length, o = [], a = "string" != typeof e && v(e);
            if (!k.test(e)) for (; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && v.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? v.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? l.call(v(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(v.uniqueSort(v.merge(this.get(), v(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return T(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return T(e, "parentNode", n)
        }, next: function (e) {
            return H(e, "nextSibling")
        }, prev: function (e) {
            return H(e, "previousSibling")
        }, nextAll: function (e) {
            return T(e, "nextSibling")
        }, prevAll: function (e) {
            return T(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return T(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return T(e, "previousSibling", n)
        }, siblings: function (e) {
            return x((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return x(e.firstChild)
        }, contents: function (e) {
            return j(e, "iframe") ? e.contentDocument : (j(e, "template") && (e = e.content || e), v.merge([], e.childNodes))
        }
    }, function (e, t) {
        v.fn[e] = function (n, i) {
            var r = v.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = v.filter(i, r)), this.length > 1 && (L[e] || v.uniqueSort(r), O.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function Q(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function M(e, t, n, i) {
        var r;
        try {
            e && v.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && v.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    v.Callbacks = function (e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, v.each(t.match(P) || [], function (e, t) {
            n[t] = !0
        }), n) : v.extend({}, e);
        var i, r, o, a, s = [], l = [], c = -1, u = function () {
            for (a = a || e.once, o = i = !0; l.length; c = -1) for (r = l.shift(); ++c < s.length;) !1 === s[c].apply(r[0], r[1]) && e.stopOnFalse && (c = s.length, r = !1);
            e.memory || (r = !1), i = !1, a && (s = r ? [] : "")
        }, d = {
            add: function () {
                return s && (r && !i && (c = s.length - 1, l.push(r)), function t(n) {
                    v.each(n, function (n, i) {
                        v.isFunction(i) ? e.unique && d.has(i) || s.push(i) : i && i.length && "string" !== v.type(i) && t(i)
                    })
                }(arguments), r && !i && u()), this
            }, remove: function () {
                return v.each(arguments, function (e, t) {
                    for (var n; (n = v.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= c && c--
                }), this
            }, has: function (e) {
                return e ? v.inArray(e, s) > -1 : s.length > 0
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return a = l = [], s = r = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return a = l = [], r || i || (s = r = ""), this
            }, locked: function () {
                return !!a
            }, fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || u()), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return d
    }, v.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2], ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", r = {
                    state: function () {
                        return i
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return r.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return v.Deferred(function (t) {
                            v.each(n, function (n, i) {
                                var r = v.isFunction(e[i[4]]) && e[i[4]];
                                o[i[1]](function () {
                                    var e = r && r.apply(this, arguments);
                                    e && v.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, i, r) {
                        var o = 0;

                        function a(t, n, i, r) {
                            return function () {
                                var s = this, l = arguments, c = function () {
                                    var e, c;
                                    if (!(t < o)) {
                                        if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        c = e && ("object" == typeof e || "function" == typeof e) && e.then, v.isFunction(c) ? r ? c.call(e, a(o, n, Q, r), a(o, n, R, r)) : (o++, c.call(e, a(o, n, Q, r), a(o, n, R, r), a(o, n, Q, n.notifyWith))) : (i !== Q && (s = void 0, l = [e]), (r || n.resolveWith)(s, l))
                                    }
                                }, u = r ? c : function () {
                                    try {
                                        c()
                                    } catch (e) {
                                        v.Deferred.exceptionHook && v.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= o && (i !== R && (s = void 0, l = [e]), n.rejectWith(s, l))
                                    }
                                };
                                t ? u() : (v.Deferred.getStackHook && (u.stackTrace = v.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }

                        return v.Deferred(function (e) {
                            n[0][3].add(a(0, e, v.isFunction(r) ? r : Q, e.notifyWith)), n[1][3].add(a(0, e, v.isFunction(t) ? t : Q)), n[2][3].add(a(0, e, v.isFunction(i) ? i : R))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? v.extend(e, r) : r
                    }
                }, o = {};
            return v.each(n, function (e, t) {
                var a = t[2], s = t[5];
                r[t[1]] = a.add, s && a.add(function () {
                    i = s
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), r.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, n = t, i = Array(n), r = o.call(arguments), a = v.Deferred(), s = function (e) {
                return function (n) {
                    i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(i, r)
                }
            };
            if (t <= 1 && (M(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || v.isFunction(r[n] && r[n].then))) return a.then();
            for (; n--;) M(r[n], s(n), a.reject);
            return a.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    v.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, v.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var W = v.Deferred();

    function q() {
        i.removeEventListener("DOMContentLoaded", q), e.removeEventListener("load", q), v.ready()
    }

    v.fn.ready = function (e) {
        return W.then(e).catch(function (e) {
            v.readyException(e)
        }), this
    }, v.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== e && --v.readyWait > 0 || W.resolveWith(i, [v]))
        }
    }), v.ready.then = W.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(v.ready) : (i.addEventListener("DOMContentLoaded", q), e.addEventListener("load", q));
    var B = function (e, t, n, i, r, o, a) {
        var s = 0, l = e.length, c = null == n;
        if ("object" === v.type(n)) for (s in r = !0, n) B(e, t, s, n[s], !0, o, a); else if (void 0 !== i && (r = !0, v.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                return c.call(v(e), n)
            })), t)) for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    }, U = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function V() {
        this.expando = v.expando + V.uid++
    }

    V.uid = 1, V.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[v.camelCase(t)] = n; else for (i in t) r[v.camelCase(i)] = t[i];
            return r
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][v.camelCase(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(v.camelCase) : t = (t = v.camelCase(t)) in i ? [t] : t.match(P) || [], n = t.length;
                    for (; n--;) delete i[t[n]]
                }
                (void 0 === t || v.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !v.isEmptyObject(t)
        }
    };
    var $ = new V, Y = new V, K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, z = /[A-Z]/g;

    function G(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
            try {
                n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : K.test(r) ? JSON.parse(r) : r)
            } catch (e) {
            }
            Y.set(e, t, n)
        } else n = void 0;
        return n
    }

    v.extend({
        hasData: function (e) {
            return Y.hasData(e) || $.hasData(e)
        }, data: function (e, t, n) {
            return Y.access(e, t, n)
        }, removeData: function (e, t) {
            Y.remove(e, t)
        }, _data: function (e, t, n) {
            return $.access(e, t, n)
        }, _removeData: function (e, t) {
            $.remove(e, t)
        }
    }), v.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Y.get(o), 1 === o.nodeType && !$.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (0 === (i = a[n].name).indexOf("data-") && (i = v.camelCase(i.slice(5)), G(o, i, r[i])));
                    $.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                Y.set(this, e)
            }) : B(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Y.get(o, e))) return n;
                    if (void 0 !== (n = G(o, e))) return n
                } else this.each(function () {
                    Y.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Y.remove(this, e)
            })
        }
    }), v.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = $.get(e, t), n && (!i || Array.isArray(n) ? i = $.access(e, t, v.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = v.queue(e, t), i = n.length, r = n.shift(), o = v._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
                v.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return $.get(e, n) || $.access(e, n, {
                empty: v.Callbacks("once memory").add(function () {
                    $.remove(e, [t + "queue", n])
                })
            })
        }
    }), v.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? v.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = v.queue(this, e, t);
                v._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && v.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                v.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, r = v.Deferred(), o = this, a = this.length, s = function () {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = $.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, J = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
        Z = ["Top", "Right", "Bottom", "Left"], ee = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && v.contains(e.ownerDocument, e) && "none" === v.css(e, "display")
        }, te = function (e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
            return r
        };

    function ne(e, t, n, i) {
        var r, o = 1, a = 20, s = i ? function () {
                return i.cur()
            } : function () {
                return v.css(e, t, "")
            }, l = s(), c = n && n[3] || (v.cssNumber[t] ? "" : "px"),
            u = (v.cssNumber[t] || "px" !== c && +l) && J.exec(v.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                u /= o = o || ".5", v.style(e, t, u + c)
            } while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    var ie = {};

    function re(e, t) {
        for (var n, i, r = [], o = 0, a = e.length; o < a; o++) (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = $.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ee(i) && (r[o] = (l = void 0, c = void 0, void 0, d = void 0, c = (s = i).ownerDocument, u = s.nodeName, (d = ie[u]) || (l = c.body.appendChild(c.createElement(u)), d = v.css(l, "display"), l.parentNode.removeChild(l), "none" === d && (d = "block"), ie[u] = d, d)))) : "none" !== n && (r[o] = "none", $.set(i, "display", n)));
        var s, l, c, u, d;
        for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }

    v.fn.extend({
        show: function () {
            return re(this, !0)
        }, hide: function () {
            return re(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ee(this) ? v(this).show() : v(this).hide()
            })
        }
    });
    var oe = /^(?:checkbox|radio)$/i, ae = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, se = /^$|\/(?:java|ecma)script/i, le = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ce(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && j(e, t) ? v.merge([e], n) : n
    }

    function ue(e, t) {
        for (var n = 0, i = e.length; n < i; n++) $.set(e[n], "globalEval", !t || $.get(t[n], "globalEval"))
    }

    le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td;
    var de, fe, he = /<|&#?\w+;/;

    function pe(e, t, n, i, r) {
        for (var o, a, s, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++) if ((o = e[h]) || 0 === o) if ("object" === v.type(o)) v.merge(f, o.nodeType ? [o] : o); else if (he.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (ae.exec(o) || ["", ""])[1].toLowerCase(), l = le[s] || le._default, a.innerHTML = l[1] + v.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
            v.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
        for (d.textContent = "", h = 0; o = f[h++];) if (i && v.inArray(o, i) > -1) r && r.push(o); else if (c = v.contains(o.ownerDocument, o), a = ce(d.appendChild(o), "script"), c && ue(a), n) for (u = 0; o = a[u++];) se.test(o.type || "") && n.push(o);
        return d
    }

    de = i.createDocumentFragment().appendChild(i.createElement("div")), (fe = i.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), de.appendChild(fe), p.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue;
    var ge = i.documentElement, me = /^key/, ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ye = /^([^.]*)(?:\.(.+)|)/;

    function be() {
        return !0
    }

    function _e() {
        return !1
    }

    function Ce() {
        try {
            return i.activeElement
        } catch (e) {
        }
    }

    function we(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in"string" != typeof n && (i = i || n, n = void 0), t) we(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = _e; else if (!r) return e;
        return 1 === o && (a = r, (r = function (e) {
            return v().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = v.guid++)), e.each(function () {
            v.event.add(this, t, r, i, n)
        })
    }

    v.event = {
        global: {}, add: function (e, t, n, i, r) {
            var o, a, s, l, c, u, d, f, h, p, g, m = $.get(e);
            if (m) for (n.handler && (n = (o = n).handler, r = o.selector), r && v.find.matchesSelector(ge, r), n.guid || (n.guid = v.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
                return void 0 !== v && v.event.triggered !== t.type ? v.event.dispatch.apply(e, arguments) : void 0
            }), c = (t = (t || "").match(P) || [""]).length; c--;) h = g = (s = ye.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h && (d = v.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = v.event.special[h] || {}, u = v.extend({
                type: h,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && v.expr.match.needsContext.test(r),
                namespace: p.join(".")
            }, o), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(h, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), v.event.global[h] = !0)
        }, remove: function (e, t, n, i, r) {
            var o, a, s, l, c, u, d, f, h, p, g, m = $.hasData(e) && $.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(P) || [""]).length; c--;) if (h = g = (s = ye.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                    for (d = v.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                    a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || v.removeEvent(e, h, m.handle), delete l[h])
                } else for (h in l) v.event.remove(e, h + t[c], n, i, !0);
                v.isEmptyObject(l) && $.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, i, r, o, a, s = v.event.fix(e), l = new Array(arguments.length),
                c = ($.get(this, "events") || {})[s.type] || [], u = v.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = v.event.handlers.call(this, s, c), t = 0; (r = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((v.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        }, handlers: function (e, t) {
            var n, i, r, o, a, s = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? v(r, this).index(c) > -1 : v.find(r, this, null, [c]).length), a[r] && o.push(i);
                o.length && s.push({elem: c, handlers: o})
            }
            return c = this, l < t.length && s.push({elem: c, handlers: t.slice(l)}), s
        }, addProp: function (e, t) {
            Object.defineProperty(v.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[v.expando] ? e : new v.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== Ce() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === Ce() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && j(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return j(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, v.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, v.Event = function (e, t) {
        return this instanceof v.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? be : _e, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), void(this[v.expando] = !0)) : new v.Event(e, t)
    }, v.Event.prototype = {
        constructor: v.Event,
        isDefaultPrevented: _e,
        isPropagationStopped: _e,
        isImmediatePropagationStopped: _e,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = be, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = be, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = be, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, v.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ve.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, v.event.addProp), v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        v.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = e.relatedTarget, r = e.handleObj;
                return i && (i === this || v.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), v.fn.extend({
        on: function (e, t, n, i) {
            return we(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return we(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = _e), this.each(function () {
                v.event.remove(this, e, n, t)
            })
        }
    });
    var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Te = /<script|<style|<link/i, xe = /checked\s*(?:[^=]|=\s*.checked.)/i, ke = /^true\/(.*)/,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ae(e, t) {
        return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && v(">tbody", e)[0] || e
    }

    function Se(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function De(e) {
        var t = ke.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Ne(e, t) {
        var n, i, r, o, a, s, l, c;
        if (1 === t.nodeType) {
            if ($.hasData(e) && (o = $.access(e), a = $.set(t, o), c = o.events)) for (r in delete a.handle, a.events = {}, c) for (n = 0, i = c[r].length; n < i; n++) v.event.add(t, r, c[r][n]);
            Y.hasData(e) && (s = Y.access(e), l = v.extend({}, s), Y.set(t, l))
        }
    }

    function Ie(e, t, n, i) {
        t = a.apply([], t);
        var r, o, s, l, c, u, d = 0, f = e.length, h = f - 1, m = t[0], y = v.isFunction(m);
        if (y || f > 1 && "string" == typeof m && !p.checkClone && xe.test(m)) return e.each(function (r) {
            var o = e.eq(r);
            y && (t[0] = m.call(this, r, o.html())), Ie(o, t, n, i)
        });
        if (f && (o = (r = pe(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (l = (s = v.map(ce(r, "script"), Se)).length; d < f; d++) c = r, d !== h && (c = v.clone(c, !0, !0), l && v.merge(s, ce(c, "script"))), n.call(e[d], c, d);
            if (l) for (u = s[s.length - 1].ownerDocument, v.map(s, De), d = 0; d < l; d++) c = s[d], se.test(c.type || "") && !$.access(c, "globalEval") && v.contains(u, c) && (c.src ? v._evalUrl && v._evalUrl(c.src) : g(c.textContent.replace(je, ""), u))
        }
        return e
    }

    function Oe(e, t, n) {
        for (var i, r = t ? v.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || v.cleanData(ce(i)), i.parentNode && (n && v.contains(i.ownerDocument, i) && ue(ce(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    v.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ee, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, r, o, a, s, l, c, u = e.cloneNode(!0), d = v.contains(e.ownerDocument, e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || v.isXMLDoc(e))) for (a = ce(u), i = 0, r = (o = ce(e)).length; i < r; i++) s = o[i], l = a[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && oe.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (t) if (n) for (o = o || ce(e), a = a || ce(u), i = 0, r = o.length; i < r; i++) Ne(o[i], a[i]); else Ne(e, u);
            return (a = ce(u, "script")).length > 0 && ue(a, !d && ce(e, "script")), u
        }, cleanData: function (e) {
            for (var t, n, i, r = v.event.special, o = 0; void 0 !== (n = e[o]); o++) if (U(n)) {
                if (t = n[$.expando]) {
                    if (t.events) for (i in t.events) r[i] ? v.event.remove(n, i) : v.removeEvent(n, i, t.handle);
                    n[$.expando] = void 0
                }
                n[Y.expando] && (n[Y.expando] = void 0)
            }
        }
    }), v.fn.extend({
        detach: function (e) {
            return Oe(this, e, !0)
        }, remove: function (e) {
            return Oe(this, e)
        }, text: function (e) {
            return B(this, function (e) {
                return void 0 === e ? v.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Ie(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Ie(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Ie(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Ie(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (v.cleanData(ce(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return v.clone(this, e, t)
            })
        }, html: function (e) {
            return B(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Te.test(e) && !le[(ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = v.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (v.cleanData(ce(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return Ie(this, arguments, function (t) {
                var n = this.parentNode;
                v.inArray(this, e) < 0 && (v.cleanData(ce(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        v.fn[e] = function (e) {
            for (var n, i = [], r = v(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), v(r[a])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Le = /^margin/, He = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"), Pe = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    };

    function Qe(e, t, n) {
        var i, r, o, a, s = e.style;
        return (n = n || Pe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || v.contains(e.ownerDocument, e) || (a = v.style(e, t)), !p.pixelMarginRight() && He.test(a) && Le.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Re(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    !function () {
        function t() {
            if (l) {
                l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", ge.appendChild(s);
                var t = e.getComputedStyle(l);
                n = "1%" !== t.top, a = "2px" === t.marginLeft, r = "4px" === t.width, l.style.marginRight = "50%", o = "4px" === t.marginRight, ge.removeChild(s), l = null
            }
        }

        var n, r, o, a, s = i.createElement("div"), l = i.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === l.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(l), v.extend(p, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return t(), r
            }, pixelMarginRight: function () {
                return t(), o
            }, reliableMarginLeft: function () {
                return t(), a
            }
        }))
    }();
    var Me = /^(none|table(?!-c[ea]).+)/, Fe = /^--/,
        We = {position: "absolute", visibility: "hidden", display: "block"},
        qe = {letterSpacing: "0", fontWeight: "400"}, Be = ["Webkit", "Moz", "ms"], Ue = i.createElement("div").style;

    function Ve(e) {
        var t = v.cssProps[e];
        return t || (t = v.cssProps[e] = function (e) {
            if (e in Ue) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Be.length; n--;) if ((e = Be[n] + t) in Ue) return e
        }(e) || e), t
    }

    function $e(e, t, n) {
        var i = J.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Ye(e, t, n, i, r) {
        var o, a = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += v.css(e, n + Z[o], !0, r)), i ? ("content" === n && (a -= v.css(e, "padding" + Z[o], !0, r)), "margin" !== n && (a -= v.css(e, "border" + Z[o] + "Width", !0, r))) : (a += v.css(e, "padding" + Z[o], !0, r), "padding" !== n && (a += v.css(e, "border" + Z[o] + "Width", !0, r)));
        return a
    }

    function Ke(e, t, n) {
        var i, r = Pe(e), o = Qe(e, t, r), a = "border-box" === v.css(e, "boxSizing", !1, r);
        return He.test(o) ? o : (i = a && (p.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + Ye(e, t, n || (a ? "border" : "content"), i, r) + "px")
    }

    function ze(e, t, n, i, r) {
        return new ze.prototype.init(e, t, n, i, r)
    }

    v.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Qe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = v.camelCase(t), l = Fe.test(t), c = e.style;
                return l || (t = Ve(s)), a = v.cssHooks[t] || v.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t] : ("string" === (o = typeof n) && (r = J.exec(n)) && r[1] && (n = ne(e, t, r), o = "number"), void(null != n && n == n && ("number" === o && (n += r && r[3] || (v.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))))
            }
        },
        css: function (e, t, n, i) {
            var r, o, a, s = v.camelCase(t);
            return Fe.test(t) || (t = Ve(s)), (a = v.cssHooks[t] || v.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = Qe(e, t, i)), "normal" === r && t in qe && (r = qe[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), v.each(["height", "width"], function (e, t) {
        v.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !Me.test(v.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, t, i) : te(e, We, function () {
                    return Ke(e, t, i)
                })
            }, set: function (e, n, i) {
                var r, o = i && Pe(e), a = i && Ye(e, t, i, "border-box" === v.css(e, "boxSizing", !1, o), o);
                return a && (r = J.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = v.css(e, t)), $e(0, n, a)
            }
        }
    }), v.cssHooks.marginLeft = Re(p.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Qe(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), v.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        v.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Z[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Le.test(e) || (v.cssHooks[e + t].set = $e)
    }), v.fn.extend({
        css: function (e, t) {
            return B(this, function (e, t, n) {
                var i, r, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (i = Pe(e), r = t.length; a < r; a++) o[t[a]] = v.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? v.style(e, t, n) : v.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), v.Tween = ze, ze.prototype = {
        constructor: ze, init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || v.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (v.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = ze.propHooks[this.prop];
            return e && e.get ? e.get(this) : ze.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = ze.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ze.propHooks._default.set(this), this
        }
    }, ze.prototype.init.prototype = ze.prototype, ze.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = v.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[v.cssProps[e.prop]] && !v.cssHooks[e.prop] ? e.elem[e.prop] = e.now : v.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, ze.propHooks.scrollTop = ze.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, v.fx = ze.prototype.init, v.fx.step = {};
    var Ge, Xe, Je, Ze, et = /^(?:toggle|show|hide)$/, tt = /queueHooks$/;

    function nt() {
        Xe && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(nt) : e.setTimeout(nt, v.fx.interval), v.fx.tick())
    }

    function it() {
        return e.setTimeout(function () {
            Ge = void 0
        }), Ge = v.now()
    }

    function rt(e, t) {
        var n, i = 0, r = {height: e};
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Z[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function ot(e, t, n) {
        for (var i, r = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, a = r.length; o < a; o++) if (i = r[o].call(n, t, e)) return i
    }

    function at(e, t, n) {
        var i, r, o = 0, a = at.prefilters.length, s = v.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r) return !1;
            for (var t = Ge || it(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(i);
            return s.notifyWith(e, [c, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
        }, c = s.promise({
            elem: e,
            props: v.extend({}, t),
            opts: v.extend(!0, {specialEasing: {}, easing: v.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ge || it(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = v.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? c.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) c.tweens[n].run(1);
                return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
            }
        }), u = c.props;
        for (function (e, t) {
            var n, i, r, o, a;
            for (n in e) if (r = t[i = v.camelCase(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = v.cssHooks[i]) && "expand" in a) for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r); else t[i] = r
        }(u, c.opts.specialEasing); o < a; o++) if (i = at.prefilters[o].call(c, e, u, c.opts)) return v.isFunction(i.stop) && (v._queueHooks(c.elem, c.opts.queue).stop = v.proxy(i.stop, i)), i;
        return v.map(u, ot, c), v.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), v.fx.timer(v.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    v.Animation = v.extend(at, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return ne(n.elem, e, J.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            v.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var i, r, o, a, s, l, c, u, d = "width" in t || "height" in t, f = this, h = {}, p = e.style,
                g = e.nodeType && ee(e), m = $.get(e, "fxshow");
            for (i in n.queue || (null == (a = v._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, f.always(function () {
                f.always(function () {
                    a.unqueued--, v.queue(e, "fx").length || a.empty.fire()
                })
            })), t) if (r = t[i], et.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    g = !0
                }
                h[i] = m && m[i] || v.style(e, i)
            }
            if ((l = !v.isEmptyObject(t)) || !v.isEmptyObject(h)) for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = $.get(e, "display")), "none" === (u = v.css(e, "display")) && (c ? u = c : (re([e], !0), c = e.style.display || c, u = v.css(e, "display"), re([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === v.css(e, "float") && (l || (f.done(function () {
                p.display = c
            }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = $.access(e, "fxshow", {display: c}), o && (m.hidden = !g), g && re([e], !0), f.done(function () {
                for (i in g || re([e]), $.remove(e, "fxshow"), h) v.style(e, i, h[i])
            })), l = ot(g ? m[i] : 0, i, f), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }], prefilter: function (e, t) {
            t ? at.prefilters.unshift(e) : at.prefilters.push(e)
        }
    }), v.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        return v.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in v.fx.speeds ? i.duration = v.fx.speeds[i.duration] : i.duration = v.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            v.isFunction(i.old) && i.old.call(this), i.queue && v.dequeue(this, i.queue)
        }, i
    }, v.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(ee).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = v.isEmptyObject(e), o = v.speed(t, n, i), a = function () {
                var t = at(this, v.extend({}, e), o);
                (r || $.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, r = null != e && e + "queueHooks", o = v.timers, a = $.get(this);
                if (r) a[r] && a[r].stop && i(a[r]); else for (r in a) a[r] && a[r].stop && tt.test(r) && i(a[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                !t && n || v.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = $.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = v.timers, a = i ? i.length : 0;
                for (n.finish = !0, v.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), v.each(["toggle", "show", "hide"], function (e, t) {
        var n = v.fn[t];
        v.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(rt(t, !0), e, i, r)
        }
    }), v.each({
        slideDown: rt("show"),
        slideUp: rt("hide"),
        slideToggle: rt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        v.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), v.timers = [], v.fx.tick = function () {
        var e, t = 0, n = v.timers;
        for (Ge = v.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || v.fx.stop(), Ge = void 0
    }, v.fx.timer = function (e) {
        v.timers.push(e), v.fx.start()
    }, v.fx.interval = 13, v.fx.start = function () {
        Xe || (Xe = !0, nt())
    }, v.fx.stop = function () {
        Xe = null
    }, v.fx.speeds = {slow: 600, fast: 200, _default: 400}, v.fn.delay = function (t, n) {
        return t = v.fx && v.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(r)
            }
        })
    }, Je = i.createElement("input"), Ze = i.createElement("select").appendChild(i.createElement("option")), Je.type = "checkbox", p.checkOn = "" !== Je.value, p.optSelected = Ze.selected, (Je = i.createElement("input")).value = "t", Je.type = "radio", p.radioValue = "t" === Je.value;
    var st, lt = v.expr.attrHandle;
    v.fn.extend({
        attr: function (e, t) {
            return B(this, v.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                v.removeAttr(this, e)
            })
        }
    }), v.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? v.prop(e, t, n) : (1 === o && v.isXMLDoc(e) || (r = v.attrHooks[t.toLowerCase()] || (v.expr.match.bool.test(t) ? st : void 0)), void 0 !== n ? null === n ? void v.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = v.find.attr(e, t)) ? void 0 : i)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!p.radioValue && "radio" === t && j(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i = 0, r = t && t.match(P);
            if (r && 1 === e.nodeType) for (; n = r[i++];) e.removeAttribute(n)
        }
    }), st = {
        set: function (e, t, n) {
            return !1 === t ? v.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, v.each(v.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = lt[t] || v.find.attr;
        lt[t] = function (e, t, i) {
            var r, o, a = t.toLowerCase();
            return i || (o = lt[a], lt[a] = r, r = null != n(e, t, i) ? a : null, lt[a] = o), r
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i, ut = /^(?:a|area)$/i;

    function dt(e) {
        return (e.match(P) || []).join(" ")
    }

    function ft(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    v.fn.extend({
        prop: function (e, t) {
            return B(this, v.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[v.propFix[e] || e]
            })
        }
    }), v.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && v.isXMLDoc(e) || (t = v.propFix[t] || t, r = v.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = v.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), p.optSelected || (v.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        v.propFix[this.toLowerCase()] = this
    }), v.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, a, s, l = 0;
            if (v.isFunction(e)) return this.each(function (t) {
                v(this).addClass(e.call(this, t, ft(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(P) || []; n = this[l++];) if (r = ft(n), i = 1 === n.nodeType && " " + dt(r) + " ") {
                for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (s = dt(i)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, o, a, s, l = 0;
            if (v.isFunction(e)) return this.each(function (t) {
                v(this).removeClass(e.call(this, t, ft(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(P) || []; n = this[l++];) if (r = ft(n), i = 1 === n.nodeType && " " + dt(r) + " ") {
                for (a = 0; o = t[a++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                r !== (s = dt(i)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : v.isFunction(e) ? this.each(function (n) {
                v(this).toggleClass(e.call(this, n, ft(this), t), t)
            }) : this.each(function () {
                var t, i, r, o;
                if ("string" === n) for (i = 0, r = v(this), o = e.match(P) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== n || ((t = ft(this)) && $.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : $.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + dt(ft(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ht = /\r/g;
    v.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = v.isFunction(e), this.each(function (n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, v(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = v.map(r, function (e) {
                    return null == e ? "" : e + ""
                })), (t = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = v.valHooks[r.type] || v.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(ht, "") : null == n ? "" : n : void 0
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = v.find.attr(e, "value");
                    return null != t ? t : dt(v.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        l = a ? o + 1 : r.length;
                    for (i = o < 0 ? l : a ? o : 0; i < l; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                        if (t = v(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, i, r = e.options, o = v.makeArray(t), a = r.length; a--;) ((i = r[a]).selected = v.inArray(v.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = v.inArray(v(e).val(), t) > -1
            }
        }, p.checkOn || (v.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var pt = /^(?:focusinfocus|focusoutblur)$/;
    v.extend(v.event, {
        trigger: function (t, n, r, o) {
            var a, s, l, c, u, f, h, p = [r || i], g = d.call(t, "type") ? t.type : t,
                m = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !pt.test(g + v.event.triggered) && (g.indexOf(".") > -1 && (g = (m = g.split(".")).shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, (t = t[v.expando] ? t : new v.Event(g, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : v.makeArray(n, [t]), h = v.event.special[g] || {}, o || !h.trigger || !1 !== h.trigger.apply(r, n))) {
                if (!o && !h.noBubble && !v.isWindow(r)) {
                    for (c = h.delegateType || g, pt.test(c + g) || (s = s.parentNode); s; s = s.parentNode) p.push(s), l = s;
                    l === (r.ownerDocument || i) && p.push(l.defaultView || l.parentWindow || e)
                }
                for (a = 0; (s = p[a++]) && !t.isPropagationStopped();) t.type = a > 1 ? c : h.bindType || g, (f = ($.get(s, "events") || {})[t.type] && $.get(s, "handle")) && f.apply(s, n), (f = u && s[u]) && f.apply && U(s) && (t.result = f.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = g, o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(p.pop(), n) || !U(r) || u && v.isFunction(r[g]) && !v.isWindow(r) && ((l = r[u]) && (r[u] = null), v.event.triggered = g, r[g](), v.event.triggered = void 0, l && (r[u] = l)), t.result
            }
        }, simulate: function (e, t, n) {
            var i = v.extend(new v.Event, n, {type: e, isSimulated: !0});
            v.event.trigger(i, null, t)
        }
    }), v.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                v.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return v.event.trigger(e, t, n, !0)
        }
    }), v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        v.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), v.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), p.focusin = "onfocusin" in e, p.focusin || v.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            v.event.simulate(t, e.target, v.event.fix(e))
        };
        v.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, r = $.access(i, t);
                r || i.addEventListener(e, n, !0), $.access(i, t, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = $.access(i, t) - 1;
                r ? $.access(i, t, r) : (i.removeEventListener(e, n, !0), $.remove(i, t))
            }
        }
    });
    var gt = e.location, mt = v.now(), vt = /\?/;
    v.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + t), n
    };
    var yt = /\[\]$/, bt = /\r?\n/g, _t = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;

    function wt(e, t, n, i) {
        var r;
        if (Array.isArray(t)) v.each(t, function (t, r) {
            n || yt.test(e) ? i(e, r) : wt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        }); else if (n || "object" !== v.type(t)) i(e, t); else for (r in t) wt(e + "[" + r + "]", t[r], n, i)
    }

    v.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            var n = v.isFunction(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function () {
            r(this.name, this.value)
        }); else for (n in e) wt(n, e[n], t, r);
        return i.join("&")
    }, v.fn.extend({
        serialize: function () {
            return v.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = v.prop(this, "elements");
                return e ? v.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !v(this).is(":disabled") && Ct.test(this.nodeName) && !_t.test(e) && (this.checked || !oe.test(e))
            }).map(function (e, t) {
                var n = v(this).val();
                return null == n ? null : Array.isArray(n) ? v.map(n, function (e) {
                    return {name: t.name, value: e.replace(bt, "\r\n")}
                }) : {name: t.name, value: n.replace(bt, "\r\n")}
            }).get()
        }
    });
    var Et = /%20/g, Tt = /#.*$/, xt = /([?&])_=[^&]*/, kt = /^(.*?):[ \t]*([^\r\n]*)$/gm, jt = /^(?:GET|HEAD)$/,
        At = /^\/\//, St = {}, Dt = {}, Nt = "*/".concat("*"), It = i.createElement("a");

    function Ot(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(P) || [];
            if (v.isFunction(n)) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Lt(e, t, n, i) {
        var r = {}, o = e === Dt;

        function a(s) {
            var l;
            return r[s] = !0, v.each(e[s] || [], function (e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
            }), l
        }

        return a(t.dataTypes[0]) || !r["*"] && a("*")
    }

    function Ht(e, t) {
        var n, i, r = v.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && v.extend(!0, e, i), e
    }

    It.href = gt.href, v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Nt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": v.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Ht(Ht(e, v.ajaxSettings), t) : Ht(v.ajaxSettings, e)
        },
        ajaxPrefilter: Ot(St),
        ajaxTransport: Ot(Dt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, a, s, l, c, u, d, f, h, p = v.ajaxSetup({}, n), g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? v(g) : v.event, y = v.Deferred(),
                b = v.Callbacks("once memory"), _ = p.statusCode || {}, C = {}, w = {}, E = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (u) {
                            if (!s) for (s = {}; t = kt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return u ? a : null
                    }, setRequestHeader: function (e, t) {
                        return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, C[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == u && (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (u) T.always(e[T.status]); else for (t in e) _[t] = [_[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || E;
                        return r && r.abort(t), x(0, t), this
                    }
                };
            if (y.promise(T), p.url = ((t || p.url || gt.href) + "").replace(At, gt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(P) || [""], null == p.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = It.protocol + "//" + It.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = v.param(p.data, p.traditional)), Lt(St, p, n, T), u) return T;
            for (f in(d = v.event && p.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !jt.test(p.type), o = p.url.replace(Tt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Et, "+")) : (h = p.url.slice(o.length), p.data && (o += (vt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(xt, "$1"), h = (vt.test(o) ? "&" : "?") + "_=" + mt++ + h), p.url = o + h), p.ifModified && (v.lastModified[o] && T.setRequestHeader("If-Modified-Since", v.lastModified[o]), v.etag[o] && T.setRequestHeader("If-None-Match", v.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : p.accepts["*"]), p.headers) T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, T, p) || u)) return T.abort();
            if (E = "abort", b.add(p.complete), T.done(p.success), T.fail(p.error), r = Lt(Dt, p, n, T)) {
                if (T.readyState = 1, d && m.trigger("ajaxSend", [T, p]), u) return T;
                p.async && p.timeout > 0 && (l = e.setTimeout(function () {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, r.send(C, x)
                } catch (e) {
                    if (u) throw e;
                    x(-1, e)
                }
            } else x(-1, "No Transport");

            function x(t, n, i, s) {
                var c, f, h, C, w, E = n;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (C = function (e, t, n) {
                    for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (r in s) if (s[r] && s[r].test(i)) {
                        l.unshift(r);
                        break
                    }
                    if (l[0] in n) o = l[0]; else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            a || (a = r)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(p, T, i)), C = function (e, t, n, i) {
                    var r, o, a, s, l, c = {}, u = e.dataTypes.slice();
                    if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(a = c[l + " " + o] || c["* " + o])) for (r in c) if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && e.throws) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o}
                        }
                    }
                    return {state: "success", data: t}
                }(p, C, T, c), c ? (p.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (v.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (v.etag[o] = w)), 204 === t || "HEAD" === p.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = C.state, f = C.data, c = !(h = C.error))) : (h = E, !t && E || (E = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || E) + "", c ? y.resolveWith(g, [f, E, T]) : y.rejectWith(g, [T, E, h]), T.statusCode(_), _ = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? f : h]), b.fireWith(g, [T, E]), d && (m.trigger("ajaxComplete", [T, p]), --v.active || v.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (e, t, n) {
            return v.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return v.get(e, void 0, t, "script")
        }
    }), v.each(["get", "post"], function (e, t) {
        v[t] = function (e, n, i, r) {
            return v.isFunction(n) && (r = r || i, i = n, n = void 0), v.ajax(v.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, v.isPlainObject(e) && e))
        }
    }), v._evalUrl = function (e) {
        return v.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, v.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (v.isFunction(e) && (e = e.call(this[0])), t = v(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return v.isFunction(e) ? this.each(function (t) {
                v(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = v(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = v.isFunction(e);
            return this.each(function (n) {
                v(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                v(this).replaceWith(this.childNodes)
            }), this
        }
    }), v.expr.pseudos.hidden = function (e) {
        return !v.expr.pseudos.visible(e)
    }, v.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, v.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var Pt = {0: 200, 1223: 204}, Qt = v.ajaxSettings.xhr();
    p.cors = !!Qt && "withCredentials" in Qt, p.ajax = Qt = !!Qt, v.ajaxTransport(function (t) {
        var n, i;
        if (p.cors || Qt && !t.crossDomain) return {
            send: function (r, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
                n = function (e) {
                    return function () {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Pt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }), v.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), v.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), v.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain) return {
            send: function (r, o) {
                t = v("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            }, abort: function () {
                n && n()
            }
        }
    });
    var Rt, Mt = [], Ft = /(=)\?(?=&|$)|\?\?/;
    v.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Mt.pop() || v.expando + "_" + mt++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, a,
            s = !1 !== t.jsonp && (Ft.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ft.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = v.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ft, "$1" + r) : !1 !== t.jsonp && (t.url += (vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return a || v.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            a = arguments
        }, i.always(function () {
            void 0 === o ? v(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Mt.push(r)), a && v.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), p.createHTMLDocument = ((Rt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Rt.childNodes.length), v.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = pe([e], t, a), a && a.length && v(a).remove(), v.merge([], o.childNodes)));
        var r, o, a
    }, v.fn.load = function (e, t, n) {
        var i, r, o, a = this, s = e.indexOf(" ");
        return s > -1 && (i = dt(e.slice(s)), e = e.slice(0, s)), v.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && v.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(i ? v("<div>").append(v.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        v.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), v.expr.pseudos.animated = function (e) {
        return v.grep(v.timers, function (t) {
            return e === t.elem
        }).length
    }, v.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, a, s, l, c = v.css(e, "position"), u = v(e), d = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), o = v.css(e, "top"), l = v.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (a = (i = u.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), v.isFunction(t) && (t = t.call(e, n, v.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, v.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                v.offset.setOffset(this, e, t)
            });
            var t, n, i, r, o = this[0];
            return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), n = (t = o.ownerDocument).documentElement, r = t.defaultView, {
                top: i.top + r.pageYOffset - n.clientTop,
                left: i.left + r.pageXOffset - n.clientLeft
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], i = {top: 0, left: 0};
                return "fixed" === v.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), j(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + v.css(e[0], "borderTopWidth", !0),
                    left: i.left + v.css(e[0], "borderLeftWidth", !0)
                }), {top: t.top - i.top - v.css(n, "marginTop", !0), left: t.left - i.left - v.css(n, "marginLeft", !0)}
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === v.css(e, "position");) e = e.offsetParent;
                return e || ge
            })
        }
    }), v.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        v.fn[e] = function (i) {
            return B(this, function (e, i, r) {
                var o;
                return v.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }), v.each(["top", "left"], function (e, t) {
        v.cssHooks[t] = Re(p.pixelPosition, function (e, n) {
            if (n) return n = Qe(e, t), He.test(n) ? v(e).position()[t] + "px" : n
        })
    }), v.each({Height: "height", Width: "width"}, function (e, t) {
        v.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            v.fn[i] = function (r, o) {
                var a = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === o ? "margin" : "border");
                return B(this, function (t, n, r) {
                    var o;
                    return v.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? v.css(t, n, s) : v.style(t, n, r, s)
                }, t, a ? r : void 0, a)
            }
        })
    }), v.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), v.holdReady = function (e) {
        e ? v.readyWait++ : v.ready(!0)
    }, v.isArray = Array.isArray, v.parseJSON = JSON.parse, v.nodeName = j, "function" == typeof define && define.amd && define("jquery", [], function () {
        return v
    });
    var Wt = e.jQuery, qt = e.$;
    return v.noConflict = function (t) {
        return e.$ === v && (e.$ = qt), t && e.jQuery === v && (e.jQuery = Wt), v
    }, t || (e.jQuery = e.$ = v), v
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t(e.bootstrap = {}, e.jQuery)
}(this, function (e, t) {
    "use strict";

    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function i(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function r() {
        return (r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }).apply(this, arguments)
    }

    for (var o, a, s, l, c, u, d, f, h, p, g, m, v, y, b, _, C, w, E, T, x = function (e) {
        var t = !1;
        var n = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            }, getSelectorFromElement: function (t) {
                var n, i = t.getAttribute("data-target");
                i && "#" !== i || (i = t.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof e.escapeSelector ? e.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                try {
                    return e(document).find(i).length > 0 ? i : null
                } catch (e) {
                    return null
                }
            }, reflow: function (e) {
                return e.offsetHeight
            }, triggerTransitionEnd: function (n) {
                e(n).trigger(t.end)
            }, supportsTransitionEnd: function () {
                return Boolean(t)
            }, isElement: function (e) {
                return (e[0] || e).nodeType
            }, typeCheckConfig: function (e, t, i) {
                for (var r in i) if (Object.prototype.hasOwnProperty.call(i, r)) {
                    var o = i[r], a = t[r],
                        s = a && n.isElement(a) ? "element" : (l = a, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + s + '" but expected type "' + o + '".')
                }
                var l
            }
        };
        return t = ("undefined" == typeof window || !window.QUnit) && {end: "transitionend"}, e.fn.emulateTransitionEnd = function (t) {
            var i = this, r = !1;
            return e(this).one(n.TRANSITION_END, function () {
                r = !0
            }), setTimeout(function () {
                r || n.triggerTransitionEnd(i)
            }, t), this
        }, n.supportsTransitionEnd() && (e.event.special[n.TRANSITION_END] = {
            bindType: t.end,
            delegateType: t.end,
            handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        }), n
    }(t = t && t.hasOwnProperty("default") ? t.default : t), k = (a = "alert", l = "." + (s = "bs.alert"), c = (o = t).fn[a], u = {
        CLOSE: "close" + l,
        CLOSED: "closed" + l,
        CLICK_DATA_API: "click" + l + ".data-api"
    }, "alert", "fade", "show", d = function () {
        function e(e) {
            this._element = e
        }

        var t = e.prototype;
        return t.close = function (e) {
            e = e || this._element;
            var t = this._getRootElement(e);
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }, t.dispose = function () {
            o.removeData(this._element, s), this._element = null
        }, t._getRootElement = function (e) {
            var t = x.getSelectorFromElement(e), n = !1;
            return t && (n = o(t)[0]), n || (n = o(e).closest(".alert")[0]), n
        }, t._triggerCloseEvent = function (e) {
            var t = o.Event(u.CLOSE);
            return o(e).trigger(t), t
        }, t._removeElement = function (e) {
            var t = this;
            o(e).removeClass("show"), x.supportsTransitionEnd() && o(e).hasClass("fade") ? o(e).one(x.TRANSITION_END, function (n) {
                return t._destroyElement(e, n)
            }).emulateTransitionEnd(150) : this._destroyElement(e)
        }, t._destroyElement = function (e) {
            o(e).detach().trigger(u.CLOSED).remove()
        }, e._jQueryInterface = function (t) {
            return this.each(function () {
                var n = o(this), i = n.data(s);
                i || (i = new e(this), n.data(s, i)), "close" === t && i[t](this)
            })
        }, e._handleDismiss = function (e) {
            return function (t) {
                t && t.preventDefault(), e.close(this)
            }
        }, i(e, null, [{
            key: "VERSION", get: function () {
                return "4.0.0"
            }
        }]), e
    }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)), o.fn[a] = d._jQueryInterface, o.fn[a].Constructor = d, o.fn[a].noConflict = function () {
        return o.fn[a] = c, d._jQueryInterface
    }, d), j = (h = "button", g = "." + (p = "bs.button"), m = ".data-api", v = (f = t).fn[h], y = "active", "btn", "focus", b = '[data-toggle^="button"]', _ = '[data-toggle="buttons"]', "input", C = ".active", w = ".btn", E = {
        CLICK_DATA_API: "click" + g + m,
        FOCUS_BLUR_DATA_API: "focus" + g + m + " blur" + g + m
    }, T = function () {
        function e(e) {
            this._element = e
        }

        var t = e.prototype;
        return t.toggle = function () {
            var e = !0, t = !0, n = f(this._element).closest(_)[0];
            if (n) {
                var i = f(this._element).find("input")[0];
                if (i) {
                    if ("radio" === i.type) if (i.checked && f(this._element).hasClass(y)) e = !1; else {
                        var r = f(n).find(C)[0];
                        r && f(r).removeClass(y)
                    }
                    if (e) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                        i.checked = !f(this._element).hasClass(y), f(i).trigger("change")
                    }
                    i.focus(), t = !1
                }
            }
            t && this._element.setAttribute("aria-pressed", !f(this._element).hasClass(y)), e && f(this._element).toggleClass(y)
        }, t.dispose = function () {
            f.removeData(this._element, p), this._element = null
        }, e._jQueryInterface = function (t) {
            return this.each(function () {
                var n = f(this).data(p);
                n || (n = new e(this), f(this).data(p, n)), "toggle" === t && n[t]()
            })
        }, i(e, null, [{
            key: "VERSION", get: function () {
                return "4.0.0"
            }
        }]), e
    }(), f(document).on(E.CLICK_DATA_API, b, function (e) {
        e.preventDefault();
        var t = e.target;
        f(t).hasClass("btn") || (t = f(t).closest(w)), T._jQueryInterface.call(f(t), "toggle")
    }).on(E.FOCUS_BLUR_DATA_API, b, function (e) {
        var t = f(e.target).closest(w)[0];
        f(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), f.fn[h] = T._jQueryInterface, f.fn[h].Constructor = T, f.fn[h].noConflict = function () {
        return f.fn[h] = v, T._jQueryInterface
    }, T), A = function (e) {
        var t = "carousel", n = "bs.carousel", o = "." + n, a = e.fn[t],
            s = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0}, l = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            }, c = "next", u = "prev", d = {
                SLIDE: "slide" + o,
                SLID: "slid" + o,
                KEYDOWN: "keydown" + o,
                MOUSEENTER: "mouseenter" + o,
                MOUSELEAVE: "mouseleave" + o,
                TOUCHEND: "touchend" + o,
                LOAD_DATA_API: "load" + o + ".data-api",
                CLICK_DATA_API: "click" + o + ".data-api"
            }, f = "active", h = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            }, p = function () {
                function a(t, n) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(h.INDICATORS)[0], this._addEventListeners()
                }

                var p = a.prototype;
                return p.next = function () {
                    this._isSliding || this._slide(c)
                }, p.nextWhenVisible = function () {
                    !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                }, p.prev = function () {
                    this._isSliding || this._slide(u)
                }, p.pause = function (t) {
                    t || (this._isPaused = !0), e(this._element).find(h.NEXT_PREV)[0] && x.supportsTransitionEnd() && (x.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, p.cycle = function (e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, p.to = function (t) {
                    var n = this;
                    this._activeElement = e(this._element).find(h.ACTIVE_ITEM)[0];
                    var i = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one(d.SLID, function () {
                        return n.to(t)
                    }); else {
                        if (i === t) return this.pause(), void this.cycle();
                        var r = t > i ? c : u;
                        this._slide(r, this._items[t])
                    }
                }, p.dispose = function () {
                    e(this._element).off(o), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, p._getConfig = function (e) {
                    return e = r({}, s, e), x.typeCheckConfig(t, e, l), e
                }, p._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard && e(this._element).on(d.KEYDOWN, function (e) {
                        return t._keydown(e)
                    }), "hover" === this._config.pause && (e(this._element).on(d.MOUSEENTER, function (e) {
                        return t.pause(e)
                    }).on(d.MOUSELEAVE, function (e) {
                        return t.cycle(e)
                    }), "ontouchstart" in document.documentElement && e(this._element).on(d.TOUCHEND, function () {
                        t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                            return t.cycle(e)
                        }, 500 + t._config.interval)
                    }))
                }, p._keydown = function (e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                        case 37:
                            e.preventDefault(), this.prev();
                            break;
                        case 39:
                            e.preventDefault(), this.next()
                    }
                }, p._getItemIndex = function (t) {
                    return this._items = e.makeArray(e(t).parent().find(h.ITEM)), this._items.indexOf(t)
                }, p._getItemByDirection = function (e, t) {
                    var n = e === c, i = e === u, r = this._getItemIndex(t), o = this._items.length - 1;
                    if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                    var a = (r + (e === u ? -1 : 1)) % this._items.length;
                    return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                }, p._triggerSlideEvent = function (t, n) {
                    var i = this._getItemIndex(t), r = this._getItemIndex(e(this._element).find(h.ACTIVE_ITEM)[0]),
                        o = e.Event(d.SLIDE, {relatedTarget: t, direction: n, from: r, to: i});
                    return e(this._element).trigger(o), o
                }, p._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        e(this._indicatorsElement).find(h.ACTIVE).removeClass(f);
                        var n = this._indicatorsElement.children[this._getItemIndex(t)];
                        n && e(n).addClass(f)
                    }
                }, p._slide = function (t, n) {
                    var i, r, o, a = this, s = e(this._element).find(h.ACTIVE_ITEM)[0], l = this._getItemIndex(s),
                        u = n || s && this._getItemByDirection(t, s), p = this._getItemIndex(u),
                        g = Boolean(this._interval);
                    if (t === c ? (i = "carousel-item-left", r = "carousel-item-next", o = "left") : (i = "carousel-item-right", r = "carousel-item-prev", o = "right"), u && e(u).hasClass(f)) this._isSliding = !1; else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && s && u) {
                        this._isSliding = !0, g && this.pause(), this._setActiveIndicatorElement(u);
                        var m = e.Event(d.SLID, {relatedTarget: u, direction: o, from: l, to: p});
                        x.supportsTransitionEnd() && e(this._element).hasClass("slide") ? (e(u).addClass(r), x.reflow(u), e(s).addClass(i), e(u).addClass(i), e(s).one(x.TRANSITION_END, function () {
                            e(u).removeClass(i + " " + r).addClass(f), e(s).removeClass(f + " " + r + " " + i), a._isSliding = !1, setTimeout(function () {
                                return e(a._element).trigger(m)
                            }, 0)
                        }).emulateTransitionEnd(600)) : (e(s).removeClass(f), e(u).addClass(f), this._isSliding = !1, e(this._element).trigger(m)), g && this.cycle()
                    }
                }, a._jQueryInterface = function (t) {
                    return this.each(function () {
                        var i = e(this).data(n), o = r({}, s, e(this).data());
                        "object" == typeof t && (o = r({}, o, t));
                        var l = "string" == typeof t ? t : o.slide;
                        if (i || (i = new a(this, o), e(this).data(n, i)), "number" == typeof t) i.to(t); else if ("string" == typeof l) {
                            if (void 0 === i[l]) throw new TypeError('No method named "' + l + '"');
                            i[l]()
                        } else o.interval && (i.pause(), i.cycle())
                    })
                }, a._dataApiClickHandler = function (t) {
                    var i = x.getSelectorFromElement(this);
                    if (i) {
                        var o = e(i)[0];
                        if (o && e(o).hasClass("carousel")) {
                            var s = r({}, e(o).data(), e(this).data()), l = this.getAttribute("data-slide-to");
                            l && (s.interval = !1), a._jQueryInterface.call(e(o), s), l && e(o).data(n).to(l), t.preventDefault()
                        }
                    }
                }, i(a, null, [{
                    key: "VERSION", get: function () {
                        return "4.0.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return s
                    }
                }]), a
            }();
        return e(document).on(d.CLICK_DATA_API, h.DATA_SLIDE, p._dataApiClickHandler), e(window).on(d.LOAD_DATA_API, function () {
            e(h.DATA_RIDE).each(function () {
                var t = e(this);
                p._jQueryInterface.call(t, t.data())
            })
        }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function () {
            return e.fn[t] = a, p._jQueryInterface
        }, p
    }(t), S = function (e) {
        var t = "collapse", n = "bs.collapse", o = "." + n, a = e.fn[t], s = {toggle: !0, parent: ""},
            l = {toggle: "boolean", parent: "(string|element)"}, c = {
                SHOW: "show" + o,
                SHOWN: "shown" + o,
                HIDE: "hide" + o,
                HIDDEN: "hidden" + o,
                CLICK_DATA_API: "click" + o + ".data-api"
            }, u = "show", d = "collapse", f = "collapsing", h = "collapsed",
            p = {ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'}, g = function () {
                function o(t, n) {
                    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                    for (var i = e(p.DATA_TOGGLE), r = 0; r < i.length; r++) {
                        var o = i[r], a = x.getSelectorFromElement(o);
                        null !== a && e(a).filter(t).length > 0 && (this._selector = a, this._triggerArray.push(o))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }

                var a = o.prototype;
                return a.toggle = function () {
                    e(this._element).hasClass(u) ? this.hide() : this.show()
                }, a.show = function () {
                    var t, i, r = this;
                    if (!(this._isTransitioning || e(this._element).hasClass(u) || (this._parent && 0 === (t = e.makeArray(e(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), t && (i = e(t).not(this._selector).data(n)) && i._isTransitioning))) {
                        var a = e.Event(c.SHOW);
                        if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
                            t && (o._jQueryInterface.call(e(t).not(this._selector), "hide"), i || e(t).data(n, null));
                            var s = this._getDimension();
                            e(this._element).removeClass(d).addClass(f), this._element.style[s] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(h).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var l = function () {
                                e(r._element).removeClass(f).addClass(d).addClass(u), r._element.style[s] = "", r.setTransitioning(!1), e(r._element).trigger(c.SHOWN)
                            };
                            if (x.supportsTransitionEnd()) {
                                var g = "scroll" + (s[0].toUpperCase() + s.slice(1));
                                e(this._element).one(x.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[s] = this._element[g] + "px"
                            } else l()
                        }
                    }
                }, a.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && e(this._element).hasClass(u)) {
                        var n = e.Event(c.HIDE);
                        if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var i = this._getDimension();
                            if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", x.reflow(this._element), e(this._element).addClass(f).removeClass(d).removeClass(u), this._triggerArray.length > 0) for (var r = 0; r < this._triggerArray.length; r++) {
                                var o = this._triggerArray[r], a = x.getSelectorFromElement(o);
                                null !== a && (e(a).hasClass(u) || e(o).addClass(h).attr("aria-expanded", !1))
                            }
                            this.setTransitioning(!0);
                            var s = function () {
                                t.setTransitioning(!1), e(t._element).removeClass(f).addClass(d).trigger(c.HIDDEN)
                            };
                            this._element.style[i] = "", x.supportsTransitionEnd() ? e(this._element).one(x.TRANSITION_END, s).emulateTransitionEnd(600) : s()
                        }
                    }
                }, a.setTransitioning = function (e) {
                    this._isTransitioning = e
                }, a.dispose = function () {
                    e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, a._getConfig = function (e) {
                    return (e = r({}, s, e)).toggle = Boolean(e.toggle), x.typeCheckConfig(t, e, l), e
                }, a._getDimension = function () {
                    return e(this._element).hasClass("width") ? "width" : "height"
                }, a._getParent = function () {
                    var t = this, n = null;
                    x.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];
                    var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return e(n).find(i).each(function (e, n) {
                        t._addAriaAndCollapsedClass(o._getTargetFromElement(n), [n])
                    }), n
                }, a._addAriaAndCollapsedClass = function (t, n) {
                    if (t) {
                        var i = e(t).hasClass(u);
                        n.length > 0 && e(n).toggleClass(h, !i).attr("aria-expanded", i)
                    }
                }, o._getTargetFromElement = function (t) {
                    var n = x.getSelectorFromElement(t);
                    return n ? e(n)[0] : null
                }, o._jQueryInterface = function (t) {
                    return this.each(function () {
                        var i = e(this), a = i.data(n), l = r({}, s, i.data(), "object" == typeof t && t);
                        if (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1), a || (a = new o(this, l), i.data(n, a)), "string" == typeof t) {
                            if (void 0 === a[t]) throw new TypeError('No method named "' + t + '"');
                            a[t]()
                        }
                    })
                }, i(o, null, [{
                    key: "VERSION", get: function () {
                        return "4.0.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return s
                    }
                }]), o
            }();
        return e(document).on(c.CLICK_DATA_API, p.DATA_TOGGLE, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var i = e(this), r = x.getSelectorFromElement(this);
            e(r).each(function () {
                var t = e(this), r = t.data(n) ? "toggle" : i.data();
                g._jQueryInterface.call(t, r)
            })
        }), e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function () {
            return e.fn[t] = a, g._jQueryInterface
        }, g
    }(t), D = "undefined" != typeof window && "undefined" != typeof document, N = ["Edge", "Trident", "Firefox"], I = 0, O = 0; O < N.length; O += 1) if (D && navigator.userAgent.indexOf(N[O]) >= 0) {
        I = 1;
        break
    }
    var L = D && window.Promise ? function (e) {
        var t = !1;
        return function () {
            t || (t = !0, window.Promise.resolve().then(function () {
                t = !1, e()
            }))
        }
    } : function (e) {
        var t = !1;
        return function () {
            t || (t = !0, setTimeout(function () {
                t = !1, e()
            }, I))
        }
    };

    function H(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function P(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function Q(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function R(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case"HTML":
            case"BODY":
                return e.ownerDocument.body;
            case"#document":
                return e.body
        }
        var t = P(e), n = t.overflow, i = t.overflowX, r = t.overflowY;
        return /(auto|scroll)/.test(n + r + i) ? e : R(Q(e))
    }

    function M(e) {
        var t = e && e.offsetParent, n = t && t.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === P(t, "position") ? M(t) : t : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function F(e) {
        return null !== e.parentNode ? F(e.parentNode) : e
    }

    function W(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? e : t, r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var a, s, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && M(a.firstElementChild) !== a ? M(l) : l;
        var c = F(e);
        return c.host ? W(c.host, t) : W(e, F(t).host)
    }

    function q(e) {
        var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }

    function B(e, t) {
        var n = "x" === t ? "Left" : "Top", i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    var U = void 0, V = function () {
        return void 0 === U && (U = -1 !== navigator.appVersion.indexOf("MSIE 10")), U
    };

    function $(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], V() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function Y() {
        var e = document.body, t = document.documentElement, n = V() && getComputedStyle(t);
        return {height: $("Height", e, t, n), width: $("Width", e, t, n)}
    }

    var K = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }, z = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), G = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }, X = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    };

    function J(e) {
        return X({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }

    function Z(e) {
        var t = {};
        if (V()) try {
            t = e.getBoundingClientRect();
            var n = q(e, "top"), i = q(e, "left");
            t.top += n, t.left += i, t.bottom += n, t.right += i
        } catch (e) {
        } else t = e.getBoundingClientRect();
        var r = {left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top},
            o = "HTML" === e.nodeName ? Y() : {}, a = o.width || e.clientWidth || r.right - r.left,
            s = o.height || e.clientHeight || r.bottom - r.top, l = e.offsetWidth - a, c = e.offsetHeight - s;
        if (l || c) {
            var u = P(e);
            l -= B(u, "x"), c -= B(u, "y"), r.width -= l, r.height -= c
        }
        return J(r)
    }

    function ee(e, t) {
        var n = V(), i = "HTML" === t.nodeName, r = Z(e), o = Z(t), a = R(e), s = P(t),
            l = parseFloat(s.borderTopWidth, 10), c = parseFloat(s.borderLeftWidth, 10),
            u = J({top: r.top - o.top - l, left: r.left - o.left - c, width: r.width, height: r.height});
        if (u.marginTop = 0, u.marginLeft = 0, !n && i) {
            var d = parseFloat(s.marginTop, 10), f = parseFloat(s.marginLeft, 10);
            u.top -= l - d, u.bottom -= l - d, u.left -= c - f, u.right -= c - f, u.marginTop = d, u.marginLeft = f
        }
        return (n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (u = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = q(t, "top"), r = q(t, "left"),
                o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }(u, t)), u
    }

    function te(e, t, n, i) {
        var r, o, a, s, l, c, u, d = {top: 0, left: 0}, f = W(e, t);
        if ("viewport" === i) o = (r = f).ownerDocument.documentElement, a = ee(r, o), s = Math.max(o.clientWidth, window.innerWidth || 0), l = Math.max(o.clientHeight, window.innerHeight || 0), c = q(o), u = q(o, "left"), d = J({
            top: c - a.top + a.marginTop,
            left: u - a.left + a.marginLeft,
            width: s,
            height: l
        }); else {
            var h = void 0;
            "scrollParent" === i ? "BODY" === (h = R(Q(t))).nodeName && (h = e.ownerDocument.documentElement) : h = "window" === i ? e.ownerDocument.documentElement : i;
            var p = ee(h, f);
            if ("HTML" !== h.nodeName || function e(t) {
                    var n = t.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === P(t, "position") || e(Q(t)))
                }(f)) d = p; else {
                var g = Y(), m = g.height, v = g.width;
                d.top += p.top - p.marginTop, d.bottom = m + p.top, d.left += p.left - p.marginLeft, d.right = v + p.left
            }
        }
        return d.left += n, d.top += n, d.right -= n, d.bottom -= n, d
    }

    function ne(e, t, n, i, r) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = te(n, i, o, r), s = {
            top: {width: a.width, height: t.top - a.top},
            right: {width: a.right - t.right, height: a.height},
            bottom: {width: a.width, height: a.bottom - t.bottom},
            left: {width: t.left - a.left, height: a.height}
        }, l = Object.keys(s).map(function (e) {
            return X({key: e}, s[e], {area: (t = s[e], t.width * t.height)});
            var t
        }).sort(function (e, t) {
            return t.area - e.area
        }), c = l.filter(function (e) {
            var t = e.width, i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
        }), u = c.length > 0 ? c[0].key : l[0].key, d = e.split("-")[1];
        return u + (d ? "-" + d : "")
    }

    function ie(e, t, n) {
        return ee(n, W(t, n))
    }

    function re(e) {
        var t = getComputedStyle(e), n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {width: e.offsetWidth + i, height: e.offsetHeight + n}
    }

    function oe(e) {
        var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function ae(e, t, n) {
        n = n.split("-")[0];
        var i = re(e), r = {width: i.width, height: i.height}, o = -1 !== ["right", "left"].indexOf(n),
            a = o ? "top" : "left", s = o ? "left" : "top", l = o ? "height" : "width", c = o ? "width" : "height";
        return r[a] = t[a] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[c] : t[oe(s)], r
    }

    function se(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function le(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function (e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e.name === n
            });
            var i = se(e, function (e) {
                return e.name === n
            });
            return e.indexOf(i)
        }(e, 0, n))).forEach(function (e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && H(n) && (t.offsets.popper = J(t.offsets.popper), t.offsets.reference = J(t.offsets.reference), t = n(t, e))
        }), t
    }

    function ce(e, t) {
        return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function ue(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
            var r = t[i], o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function de(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function fe(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function he(e, t) {
        Object.keys(t).forEach(function (n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && fe(t[n]) && (i = "px"), e.style[n] = t[n] + i
        })
    }

    function pe(e, t, n) {
        var i = se(e, function (e) {
            return e.name === t
        }), r = !!i && e.some(function (e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!r) {
            var o = "`" + t + "`", a = "`" + n + "`";
            console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    var ge = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        me = ge.slice(3);

    function ve(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = me.indexOf(e),
            i = me.slice(n + 1).concat(me.slice(0, n));
        return t ? i.reverse() : i
    }

    var ye = "flip", be = "clockwise", _e = "counterclockwise";
    var Ce = {
        placement: "bottom", eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (e) {
                    var t = e.placement, n = t.split("-")[0], i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets, o = r.reference, a = r.popper, s = -1 !== ["bottom", "top"].indexOf(n),
                            l = s ? "left" : "top", c = s ? "width" : "height",
                            u = {start: G({}, l, o[l]), end: G({}, l, o[l] + o[c] - a[c])};
                        e.offsets.popper = X({}, a, u[i])
                    }
                    return e
                }
            }, offset: {
                order: 200, enabled: !0, fn: function (e, t) {
                    var n, i = t.offset, r = e.placement, o = e.offsets, a = o.popper, s = o.reference,
                        l = r.split("-")[0];
                    return n = fe(+i) ? [+i, 0] : function (e, t, n, i) {
                        var r = [0, 0], o = -1 !== ["right", "left"].indexOf(i),
                            a = e.split(/(\+|\-)/).map(function (e) {
                                return e.trim()
                            }), s = a.indexOf(se(a, function (e) {
                                return -1 !== e.search(/,|\s/)
                            }));
                        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                        var l = /\s*,\s*|\s+/,
                            c = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
                        return (c = c.map(function (e, i) {
                            var r = (1 === i ? !o : o) ? "height" : "width", a = !1;
                            return e.reduce(function (e, t) {
                                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                            }, []).map(function (e) {
                                return function (e, t, n, i) {
                                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], a = r[2];
                                    if (!o) return e;
                                    if (0 === a.indexOf("%")) {
                                        var s = void 0;
                                        switch (a) {
                                            case"%p":
                                                s = n;
                                                break;
                                            case"%":
                                            case"%r":
                                            default:
                                                s = i
                                        }
                                        return J(s)[t] / 100 * o
                                    }
                                    return "vh" === a || "vw" === a ? ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                                }(e, r, t, n)
                            })
                        })).forEach(function (e, t) {
                            e.forEach(function (n, i) {
                                fe(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                            })
                        }), r
                    }(i, a, s, l), "left" === l ? (a.top += n[0], a.left -= n[1]) : "right" === l ? (a.top += n[0], a.left += n[1]) : "top" === l ? (a.left += n[0], a.top -= n[1]) : "bottom" === l && (a.left += n[0], a.top += n[1]), e.popper = a, e
                }, offset: 0
            }, preventOverflow: {
                order: 300, enabled: !0, fn: function (e, t) {
                    var n = t.boundariesElement || M(e.instance.popper);
                    e.instance.reference === n && (n = M(n));
                    var i = te(e.instance.popper, e.instance.reference, t.padding, n);
                    t.boundaries = i;
                    var r = t.priority, o = e.offsets.popper, a = {
                        primary: function (e) {
                            var n = o[e];
                            return o[e] < i[e] && !t.escapeWithReference && (n = Math.max(o[e], i[e])), G({}, e, n)
                        }, secondary: function (e) {
                            var n = "right" === e ? "left" : "top", r = o[n];
                            return o[e] > i[e] && !t.escapeWithReference && (r = Math.min(o[n], i[e] - ("right" === e ? o.width : o.height))), G({}, n, r)
                        }
                    };
                    return r.forEach(function (e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        o = X({}, o, a[t](e))
                    }), e.offsets.popper = o, e
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            }, keepTogether: {
                order: 400, enabled: !0, fn: function (e) {
                    var t = e.offsets, n = t.popper, i = t.reference, r = e.placement.split("-")[0], o = Math.floor,
                        a = -1 !== ["top", "bottom"].indexOf(r), s = a ? "right" : "bottom", l = a ? "left" : "top",
                        c = a ? "width" : "height";
                    return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])), e
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function (e, t) {
                    var n;
                    if (!pe(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i))) return e
                    } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var r = e.placement.split("-")[0], o = e.offsets, a = o.popper, s = o.reference,
                        l = -1 !== ["left", "right"].indexOf(r), c = l ? "height" : "width", u = l ? "Top" : "Left",
                        d = u.toLowerCase(), f = l ? "left" : "top", h = l ? "bottom" : "right", p = re(i)[c];
                    s[h] - p < a[d] && (e.offsets.popper[d] -= a[d] - (s[h] - p)), s[d] + p > a[h] && (e.offsets.popper[d] += s[d] + p - a[h]), e.offsets.popper = J(e.offsets.popper);
                    var g = s[d] + s[c] / 2 - p / 2, m = P(e.instance.popper), v = parseFloat(m["margin" + u], 10),
                        y = parseFloat(m["border" + u + "Width"], 10), b = g - e.offsets.popper[d] - v - y;
                    return b = Math.max(Math.min(a[c] - p, b), 0), e.arrowElement = i, e.offsets.arrow = (G(n = {}, d, Math.round(b)), G(n, f, ""), n), e
                }, element: "[x-arrow]"
            }, flip: {
                order: 600, enabled: !0, fn: function (e, t) {
                    if (ce(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = te(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                        i = e.placement.split("-")[0], r = oe(i), o = e.placement.split("-")[1] || "", a = [];
                    switch (t.behavior) {
                        case ye:
                            a = [i, r];
                            break;
                        case be:
                            a = ve(i);
                            break;
                        case _e:
                            a = ve(i, !0);
                            break;
                        default:
                            a = t.behavior
                    }
                    return a.forEach(function (s, l) {
                        if (i !== s || a.length === l + 1) return e;
                        i = e.placement.split("-")[0], r = oe(i);
                        var c, u = e.offsets.popper, d = e.offsets.reference, f = Math.floor,
                            h = "left" === i && f(u.right) > f(d.left) || "right" === i && f(u.left) < f(d.right) || "top" === i && f(u.bottom) > f(d.top) || "bottom" === i && f(u.top) < f(d.bottom),
                            p = f(u.left) < f(n.left), g = f(u.right) > f(n.right), m = f(u.top) < f(n.top),
                            v = f(u.bottom) > f(n.bottom),
                            y = "left" === i && p || "right" === i && g || "top" === i && m || "bottom" === i && v,
                            b = -1 !== ["top", "bottom"].indexOf(i),
                            _ = !!t.flipVariations && (b && "start" === o && p || b && "end" === o && g || !b && "start" === o && m || !b && "end" === o && v);
                        (h || y || _) && (e.flipped = !0, (h || y) && (i = a[l + 1]), _ && (o = "end" === (c = o) ? "start" : "start" === c ? "end" : c), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = X({}, e.offsets.popper, ae(e.instance.popper, e.offsets.reference, e.placement)), e = le(e.instance.modifiers, e, "flip"))
                    }), e
                }, behavior: "flip", padding: 5, boundariesElement: "viewport"
            }, inner: {
                order: 700, enabled: !1, fn: function (e) {
                    var t = e.placement, n = t.split("-")[0], i = e.offsets, r = i.popper, o = i.reference,
                        a = -1 !== ["left", "right"].indexOf(n), s = -1 === ["top", "left"].indexOf(n);
                    return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), e.placement = oe(t), e.offsets.popper = J(r), e
                }
            }, hide: {
                order: 800, enabled: !0, fn: function (e) {
                    if (!pe(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference, n = se(e.instance.modifiers, function (e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function (e, t) {
                    var n = t.x, i = t.y, r = e.offsets.popper, o = se(e.instance.modifiers, function (e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, s, l = void 0 !== o ? o : t.gpuAcceleration, c = Z(M(e.instance.popper)),
                        u = {position: r.position}, d = {
                            left: Math.floor(r.left),
                            top: Math.floor(r.top),
                            bottom: Math.floor(r.bottom),
                            right: Math.floor(r.right)
                        }, f = "bottom" === n ? "top" : "bottom", h = "right" === i ? "left" : "right", p = ue("transform");
                    if (s = "bottom" === f ? -c.height + d.bottom : d.top, a = "right" === h ? -c.width + d.right : d.left, l && p) u[p] = "translate3d(" + a + "px, " + s + "px, 0)", u[f] = 0, u[h] = 0, u.willChange = "transform"; else {
                        var g = "bottom" === f ? -1 : 1, m = "right" === h ? -1 : 1;
                        u[f] = s * g, u[h] = a * m, u.willChange = f + ", " + h
                    }
                    var v = {"x-placement": e.placement};
                    return e.attributes = X({}, v, e.attributes), e.styles = X({}, u, e.styles), e.arrowStyles = X({}, e.offsets.arrow, e.arrowStyles), e
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            }, applyStyle: {
                order: 900, enabled: !0, fn: function (e) {
                    var t, n;
                    return he(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                    }), e.arrowElement && Object.keys(e.arrowStyles).length && he(e.arrowElement, e.arrowStyles), e
                }, onLoad: function (e, t, n, i, r) {
                    var o = ie(0, t, e),
                        a = ne(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", a), he(t, {position: "absolute"}), n
                }, gpuAcceleration: void 0
            }
        }
    }, we = function () {
        function e(t, n) {
            var i = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            K(this, e), this.scheduleUpdate = function () {
                return requestAnimationFrame(i.update)
            }, this.update = L(this.update.bind(this)), this.options = X({}, e.Defaults, r), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(X({}, e.Defaults.modifiers, r.modifiers)).forEach(function (t) {
                i.options.modifiers[t] = X({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                return X({name: e}, i.options.modifiers[e])
            }).sort(function (e, t) {
                return e.order - t.order
            }), this.modifiers.forEach(function (e) {
                e.enabled && H(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
            }), this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(), this.state.eventsEnabled = o
        }

        return z(e, [{
            key: "update", value: function () {
                return function () {
                    if (!this.state.isDestroyed) {
                        var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                        e.offsets.reference = ie(this.state, this.popper, this.reference), e.placement = ne(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = ae(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = le(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }.call(this)
            }
        }, {
            key: "destroy", value: function () {
                return function () {
                    return this.state.isDestroyed = !0, ce(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[ue("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }.call(this)
            }
        }, {
            key: "enableEventListeners", value: function () {
                return function () {
                    this.state.eventsEnabled || (this.state = function (e, t, n, i) {
                        n.updateBound = i, de(e).addEventListener("resize", n.updateBound, {passive: !0});
                        var r = R(e);
                        return function e(t, n, i, r) {
                            var o = "BODY" === t.nodeName, a = o ? t.ownerDocument.defaultView : t;
                            a.addEventListener(n, i, {passive: !0}), o || e(R(a.parentNode), n, i, r), r.push(a)
                        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
                    }(this.reference, this.options, this.state, this.scheduleUpdate))
                }.call(this)
            }
        }, {
            key: "disableEventListeners", value: function () {
                return function () {
                    var e, t;
                    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, de(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
                        e.removeEventListener("scroll", t.updateBound)
                    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                }.call(this)
            }
        }]), e
    }();
    we.Utils = ("undefined" != typeof window ? window : global).PopperUtils, we.placements = ge, we.Defaults = Ce;
    var Ee, Te, xe, ke, je, Ae, Se, De, Ne, Ie, Oe, Le, He, Pe, Qe, Re, Me, Fe, We, qe, Be, Ue, Ve, $e, Ye, Ke, ze, Ge,
        Xe, Je, Ze, et, tt, nt, it, rt, ot, at, st, lt, ct, ut, dt, ft, ht, pt, gt, mt, vt, yt, bt, _t, Ct, wt, Et, Tt,
        xt, kt, jt, At, St, Dt, Nt, It, Ot, Lt, Ht, Pt, Qt, Rt, Mt, Ft, Wt,
        qt = (At = "dropdown", Dt = "." + (St = "bs.dropdown"), Nt = (jt = t).fn[At], It = new RegExp("38|40|27"), Ot = {
            HIDE: "hide" + Dt,
            HIDDEN: "hidden" + Dt,
            SHOW: "show" + Dt,
            SHOWN: "shown" + Dt,
            CLICK: "click" + Dt,
            CLICK_DATA_API: "click" + Dt + ".data-api",
            KEYDOWN_DATA_API: "keydown" + Dt + ".data-api",
            KEYUP_DATA_API: "keyup" + Dt + ".data-api"
        }, Lt = "disabled", Ht = "show", Pt = "dropdown-menu-right", Qt = '[data-toggle="dropdown"]', Rt = ".dropdown-menu", Mt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent"
        }, Ft = {offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)"}, Wt = function () {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var t = e.prototype;
            return t.toggle = function () {
                if (!this._element.disabled && !jt(this._element).hasClass(Lt)) {
                    var t = e._getParentFromElement(this._element), n = jt(this._menu).hasClass(Ht);
                    if (e._clearMenus(), !n) {
                        var i = {relatedTarget: this._element}, r = jt.Event(Ot.SHOW, i);
                        if (jt(t).trigger(r), !r.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === we) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var o = this._element;
                                jt(t).hasClass("dropup") && (jt(this._menu).hasClass("dropdown-menu-left") || jt(this._menu).hasClass(Pt)) && (o = t), "scrollParent" !== this._config.boundary && jt(t).addClass("position-static"), this._popper = new we(o, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === jt(t).closest(".navbar-nav").length && jt("body").children().on("mouseover", null, jt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), jt(this._menu).toggleClass(Ht), jt(t).toggleClass(Ht).trigger(jt.Event(Ot.SHOWN, i))
                        }
                    }
                }
            }, t.dispose = function () {
                jt.removeData(this._element, St), jt(this._element).off(Dt), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function () {
                var e = this;
                jt(this._element).on(Ot.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function (e) {
                return e = r({}, this.constructor.Default, jt(this._element).data(), e), x.typeCheckConfig(At, e, this.constructor.DefaultType), e
            }, t._getMenuElement = function () {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    this._menu = jt(t).find(Rt)[0]
                }
                return this._menu
            }, t._getPlacement = function () {
                var e = jt(this._element).parent(), t = "bottom-start";
                return e.hasClass("dropup") ? (t = "top-start", jt(this._menu).hasClass(Pt) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : jt(this._menu).hasClass(Pt) && (t = "bottom-end"), t
            }, t._detectNavbar = function () {
                return jt(this._element).closest(".navbar").length > 0
            }, t._getPopperConfig = function () {
                var e = this, t = {};
                return "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = r({}, t.offsets, e._config.offset(t.offsets) || {}), t
                } : t.offset = this._config.offset, {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: t,
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                }
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = jt(this).data(St);
                    if (n || (n = new e(this, "object" == typeof t ? t : null), jt(this).data(St, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, e._clearMenus = function (t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var n = jt.makeArray(jt(Qt)), i = 0; i < n.length; i++) {
                    var r = e._getParentFromElement(n[i]), o = jt(n[i]).data(St), a = {relatedTarget: n[i]};
                    if (o) {
                        var s = o._menu;
                        if (jt(r).hasClass(Ht) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && jt.contains(r, t.target))) {
                            var l = jt.Event(Ot.HIDE, a);
                            jt(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && jt("body").children().off("mouseover", null, jt.noop), n[i].setAttribute("aria-expanded", "false"), jt(s).removeClass(Ht), jt(r).removeClass(Ht).trigger(jt.Event(Ot.HIDDEN, a)))
                        }
                    }
                }
            }, e._getParentFromElement = function (e) {
                var t, n = x.getSelectorFromElement(e);
                return n && (t = jt(n)[0]), t || e.parentNode
            }, e._dataApiKeydownHandler = function (t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || jt(t.target).closest(Rt).length)) : It.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !jt(this).hasClass(Lt))) {
                    var n = e._getParentFromElement(this), i = jt(n).hasClass(Ht);
                    if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                        var r = jt(n).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                        if (0 !== r.length) {
                            var o = r.indexOf(t.target);
                            38 === t.which && o > 0 && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var a = jt(n).find(Qt)[0];
                            jt(a).trigger("focus")
                        }
                        jt(this).trigger("click")
                    }
                }
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0"
                }
            }, {
                key: "Default", get: function () {
                    return Mt
                }
            }, {
                key: "DefaultType", get: function () {
                    return Ft
                }
            }]), e
        }(), jt(document).on(Ot.KEYDOWN_DATA_API, Qt, Wt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API, Rt, Wt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Wt._clearMenus).on(Ot.CLICK_DATA_API, Qt, function (e) {
            e.preventDefault(), e.stopPropagation(), Wt._jQueryInterface.call(jt(this), "toggle")
        }).on(Ot.CLICK_DATA_API, ".dropdown form", function (e) {
            e.stopPropagation()
        }), jt.fn[At] = Wt._jQueryInterface, jt.fn[At].Constructor = Wt, jt.fn[At].noConflict = function () {
            return jt.fn[At] = Nt, Wt._jQueryInterface
        }, Wt), Bt = (vt = "." + (mt = "bs.modal"), yt = (gt = t).fn.modal, bt = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, _t = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, Ct = {
            HIDE: "hide" + vt,
            HIDDEN: "hidden" + vt,
            SHOW: "show" + vt,
            SHOWN: "shown" + vt,
            FOCUSIN: "focusin" + vt,
            RESIZE: "resize" + vt,
            CLICK_DISMISS: "click.dismiss" + vt,
            KEYDOWN_DISMISS: "keydown.dismiss" + vt,
            MOUSEUP_DISMISS: "mouseup.dismiss" + vt,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + vt,
            CLICK_DATA_API: "click.bs.modal.data-api"
        }, wt = "modal-open", Et = "fade", Tt = "show", xt = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }, kt = function () {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = gt(e).find(xt.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
            }

            var t = e.prototype;
            return t.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e)
            }, t.show = function (e) {
                var t = this;
                if (!this._isTransitioning && !this._isShown) {
                    x.supportsTransitionEnd() && gt(this._element).hasClass(Et) && (this._isTransitioning = !0);
                    var n = gt.Event(Ct.SHOW, {relatedTarget: e});
                    gt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), gt(document.body).addClass(wt), this._setEscapeEvent(), this._setResizeEvent(), gt(this._element).on(Ct.CLICK_DISMISS, xt.DATA_DISMISS, function (e) {
                        return t.hide(e)
                    }), gt(this._dialog).on(Ct.MOUSEDOWN_DISMISS, function () {
                        gt(t._element).one(Ct.MOUSEUP_DISMISS, function (e) {
                            gt(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return t._showElement(e)
                    }))
                }
            }, t.hide = function (e) {
                var t = this;
                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = gt.Event(Ct.HIDE);
                    if (gt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = x.supportsTransitionEnd() && gt(this._element).hasClass(Et);
                        i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), gt(document).off(Ct.FOCUSIN), gt(this._element).removeClass(Tt), gt(this._element).off(Ct.CLICK_DISMISS), gt(this._dialog).off(Ct.MOUSEDOWN_DISMISS), i ? gt(this._element).one(x.TRANSITION_END, function (e) {
                            return t._hideModal(e)
                        }).emulateTransitionEnd(300) : this._hideModal()
                    }
                }
            }, t.dispose = function () {
                gt.removeData(this._element, mt), gt(window, document, this._element, this._backdrop).off(vt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, t.handleUpdate = function () {
                this._adjustDialog()
            }, t._getConfig = function (e) {
                return e = r({}, bt, e), x.typeCheckConfig("modal", e, _t), e
            }, t._showElement = function (e) {
                var t = this, n = x.supportsTransitionEnd() && gt(this._element).hasClass(Et);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && x.reflow(this._element), gt(this._element).addClass(Tt), this._config.focus && this._enforceFocus();
                var i = gt.Event(Ct.SHOWN, {relatedTarget: e}), r = function () {
                    t._config.focus && t._element.focus(), t._isTransitioning = !1, gt(t._element).trigger(i)
                };
                n ? gt(this._dialog).one(x.TRANSITION_END, r).emulateTransitionEnd(300) : r()
            }, t._enforceFocus = function () {
                var e = this;
                gt(document).off(Ct.FOCUSIN).on(Ct.FOCUSIN, function (t) {
                    document !== t.target && e._element !== t.target && 0 === gt(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? gt(this._element).on(Ct.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || gt(this._element).off(Ct.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function () {
                var e = this;
                this._isShown ? gt(window).on(Ct.RESIZE, function (t) {
                    return e.handleUpdate(t)
                }) : gt(window).off(Ct.RESIZE)
            }, t._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    gt(document.body).removeClass(wt), e._resetAdjustments(), e._resetScrollbar(), gt(e._element).trigger(Ct.HIDDEN)
                })
            }, t._removeBackdrop = function () {
                this._backdrop && (gt(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function (e) {
                var t = this, n = gt(this._element).hasClass(Et) ? Et : "";
                if (this._isShown && this._config.backdrop) {
                    var i = x.supportsTransitionEnd() && n;
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && gt(this._backdrop).addClass(n), gt(this._backdrop).appendTo(document.body), gt(this._element).on(Ct.CLICK_DISMISS, function (e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                        }), i && x.reflow(this._backdrop), gt(this._backdrop).addClass(Tt), !e) return;
                    if (!i) return void e();
                    gt(this._backdrop).one(x.TRANSITION_END, e).emulateTransitionEnd(150)
                } else if (!this._isShown && this._backdrop) {
                    gt(this._backdrop).removeClass(Tt);
                    var r = function () {
                        t._removeBackdrop(), e && e()
                    };
                    x.supportsTransitionEnd() && gt(this._element).hasClass(Et) ? gt(this._backdrop).one(x.TRANSITION_END, r).emulateTransitionEnd(150) : r()
                } else e && e()
            }, t._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function () {
                var e = this;
                if (this._isBodyOverflowing) {
                    gt(xt.FIXED_CONTENT).each(function (t, n) {
                        var i = gt(n)[0].style.paddingRight, r = gt(n).css("padding-right");
                        gt(n).data("padding-right", i).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }), gt(xt.STICKY_CONTENT).each(function (t, n) {
                        var i = gt(n)[0].style.marginRight, r = gt(n).css("margin-right");
                        gt(n).data("margin-right", i).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    }), gt(xt.NAVBAR_TOGGLER).each(function (t, n) {
                        var i = gt(n)[0].style.marginRight, r = gt(n).css("margin-right");
                        gt(n).data("margin-right", i).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                    });
                    var t = document.body.style.paddingRight, n = gt("body").css("padding-right");
                    gt("body").data("padding-right", t).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
                }
            }, t._resetScrollbar = function () {
                gt(xt.FIXED_CONTENT).each(function (e, t) {
                    var n = gt(t).data("padding-right");
                    void 0 !== n && gt(t).css("padding-right", n).removeData("padding-right")
                }), gt(xt.STICKY_CONTENT + ", " + xt.NAVBAR_TOGGLER).each(function (e, t) {
                    var n = gt(t).data("margin-right");
                    void 0 !== n && gt(t).css("margin-right", n).removeData("margin-right")
                });
                var e = gt("body").data("padding-right");
                void 0 !== e && gt("body").css("padding-right", e).removeData("padding-right")
            }, t._getScrollbarWidth = function () {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function (t, n) {
                return this.each(function () {
                    var i = gt(this).data(mt), o = r({}, e.Default, gt(this).data(), "object" == typeof t && t);
                    if (i || (i = new e(this, o), gt(this).data(mt, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t](n)
                    } else o.show && i.show(n)
                })
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0"
                }
            }, {
                key: "Default", get: function () {
                    return bt
                }
            }]), e
        }(), gt(document).on(Ct.CLICK_DATA_API, xt.DATA_TOGGLE, function (e) {
            var t, n = this, i = x.getSelectorFromElement(this);
            i && (t = gt(i)[0]);
            var o = gt(t).data(mt) ? "toggle" : r({}, gt(t).data(), gt(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var a = gt(t).one(Ct.SHOW, function (e) {
                e.isDefaultPrevented() || a.one(Ct.HIDDEN, function () {
                    gt(n).is(":visible") && n.focus()
                })
            });
            kt._jQueryInterface.call(gt(t), o, this)
        }), gt.fn.modal = kt._jQueryInterface, gt.fn.modal.Constructor = kt, gt.fn.modal.noConflict = function () {
            return gt.fn.modal = yt, kt._jQueryInterface
        }, kt),
        Ut = (et = "tooltip", nt = "." + (tt = "bs.tooltip"), it = (Ze = t).fn[et], rt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), ot = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }, at = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, st = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, lt = "show", ct = {
            HIDE: "hide" + nt,
            HIDDEN: "hidden" + nt,
            SHOW: "show" + nt,
            SHOWN: "shown" + nt,
            INSERTED: "inserted" + nt,
            CLICK: "click" + nt,
            FOCUSIN: "focusin" + nt,
            FOCUSOUT: "focusout" + nt,
            MOUSEENTER: "mouseenter" + nt,
            MOUSELEAVE: "mouseleave" + nt
        }, ut = "fade", dt = "show", ft = "hover", ht = "focus", pt = function () {
            function e(e, t) {
                if (void 0 === we) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }

            var t = e.prototype;
            return t.enable = function () {
                this._isEnabled = !0
            }, t.disable = function () {
                this._isEnabled = !1
            }, t.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function (e) {
                if (this._isEnabled) if (e) {
                    var t = this.constructor.DATA_KEY, n = Ze(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ze(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (Ze(this.getTipElement()).hasClass(dt)) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, t.dispose = function () {
                clearTimeout(this._timeout), Ze.removeData(this.element, this.constructor.DATA_KEY), Ze(this.element).off(this.constructor.EVENT_KEY), Ze(this.element).closest(".modal").off("hide.bs.modal"), this.tip && Ze(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function () {
                var t = this;
                if ("none" === Ze(this.element).css("display")) throw new Error("Please use show on visible elements");
                var n = Ze.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    Ze(this.element).trigger(n);
                    var i = Ze.contains(this.element.ownerDocument.documentElement, this.element);
                    if (n.isDefaultPrevented() || !i) return;
                    var r = this.getTipElement(), o = x.getUID(this.constructor.NAME);
                    r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && Ze(r).addClass(ut);
                    var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        s = this._getAttachment(a);
                    this.addAttachmentClass(s);
                    var l = !1 === this.config.container ? document.body : Ze(this.config.container);
                    Ze(r).data(this.constructor.DATA_KEY, this), Ze.contains(this.element.ownerDocument.documentElement, this.tip) || Ze(r).appendTo(l), Ze(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new we(this.element, r, {
                        placement: s,
                        modifiers: {
                            offset: {offset: this.config.offset},
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: ".arrow"},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function (e) {
                            t._handlePopperPlacementChange(e)
                        }
                    }), Ze(r).addClass(dt), "ontouchstart" in document.documentElement && Ze("body").children().on("mouseover", null, Ze.noop);
                    var c = function () {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, Ze(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                    };
                    x.supportsTransitionEnd() && Ze(this.tip).hasClass(ut) ? Ze(this.tip).one(x.TRANSITION_END, c).emulateTransitionEnd(e._TRANSITION_DURATION) : c()
                }
            }, t.hide = function (e) {
                var t = this, n = this.getTipElement(), i = Ze.Event(this.constructor.Event.HIDE), r = function () {
                    t._hoverState !== lt && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), Ze(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                };
                Ze(this.element).trigger(i), i.isDefaultPrevented() || (Ze(n).removeClass(dt), "ontouchstart" in document.documentElement && Ze("body").children().off("mouseover", null, Ze.noop), this._activeTrigger.click = !1, this._activeTrigger[ht] = !1, this._activeTrigger[ft] = !1, x.supportsTransitionEnd() && Ze(this.tip).hasClass(ut) ? Ze(n).one(x.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "")
            }, t.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function () {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function (e) {
                Ze(this.getTipElement()).addClass("bs-tooltip-" + e)
            }, t.getTipElement = function () {
                return this.tip = this.tip || Ze(this.config.template)[0], this.tip
            }, t.setContent = function () {
                var e = Ze(this.getTipElement());
                this.setElementContent(e.find(".tooltip-inner"), this.getTitle()), e.removeClass(ut + " " + dt)
            }, t.setElementContent = function (e, t) {
                var n = this.config.html;
                "object" == typeof t && (t.nodeType || t.jquery) ? n ? Ze(t).parent().is(e) || e.empty().append(t) : e.text(Ze(t).text()) : e[n ? "html" : "text"](t)
            }, t.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, t._getAttachment = function (e) {
                return at[e.toUpperCase()]
            }, t._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach(function (t) {
                    if ("click" === t) Ze(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                        return e.toggle(t)
                    }); else if ("manual" !== t) {
                        var n = t === ft ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            i = t === ft ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        Ze(e.element).on(n, e.config.selector, function (t) {
                            return e._enter(t)
                        }).on(i, e.config.selector, function (t) {
                            return e._leave(t)
                        })
                    }
                    Ze(e.element).closest(".modal").on("hide.bs.modal", function () {
                        return e.hide()
                    })
                }), this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || Ze(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ze(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? ht : ft] = !0), Ze(t.getTipElement()).hasClass(dt) || t._hoverState === lt ? t._hoverState = lt : (clearTimeout(t._timeout), t._hoverState = lt, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                    t._hoverState === lt && t.show()
                }, t.config.delay.show) : t.show())
            }, t._leave = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || Ze(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ze(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? ht : ft] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                    "out" === t._hoverState && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, t._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                return !1
            }, t._getConfig = function (e) {
                return "number" == typeof(e = r({}, this.constructor.Default, Ze(this.element).data(), e)).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), x.typeCheckConfig(et, e, this.constructor.DefaultType), e
            }, t._getDelegateConfig = function () {
                var e = {};
                if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, t._cleanTipClass = function () {
                var e = Ze(this.getTipElement()), t = e.attr("class").match(rt);
                null !== t && t.length > 0 && e.removeClass(t.join(""))
            }, t._handlePopperPlacementChange = function (e) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, t._fixTransition = function () {
                var e = this.getTipElement(), t = this.config.animation;
                null === e.getAttribute("x-placement") && (Ze(e).removeClass(ut), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = Ze(this).data(tt), i = "object" == typeof t && t;
                    if ((n || !/dispose|hide/.test(t)) && (n || (n = new e(this, i), Ze(this).data(tt, n)), "string" == typeof t)) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0"
                }
            }, {
                key: "Default", get: function () {
                    return st
                }
            }, {
                key: "NAME", get: function () {
                    return et
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return tt
                }
            }, {
                key: "Event", get: function () {
                    return ct
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return nt
                }
            }, {
                key: "DefaultType", get: function () {
                    return ot
                }
            }]), e
        }(), Ze.fn[et] = pt._jQueryInterface, Ze.fn[et].Constructor = pt, Ze.fn[et].noConflict = function () {
            return Ze.fn[et] = it, pt._jQueryInterface
        }, pt),
        Vt = (Ue = "popover", $e = "." + (Ve = "bs.popover"), Ye = (Be = t).fn[Ue], Ke = new RegExp("(^|\\s)bs-popover\\S+", "g"), ze = r({}, Ut.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Ge = r({}, Ut.DefaultType, {content: "(string|element|function)"}), Xe = {
            HIDE: "hide" + $e,
            HIDDEN: "hidden" + $e,
            SHOW: "show" + $e,
            SHOWN: "shown" + $e,
            INSERTED: "inserted" + $e,
            CLICK: "click" + $e,
            FOCUSIN: "focusin" + $e,
            FOCUSOUT: "focusout" + $e,
            MOUSEENTER: "mouseenter" + $e,
            MOUSELEAVE: "mouseleave" + $e
        }, Je = function (e) {
            var t, n;

            function r() {
                return e.apply(this, arguments) || this
            }

            n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
            var o = r.prototype;
            return o.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, o.addAttachmentClass = function (e) {
                Be(this.getTipElement()).addClass("bs-popover-" + e)
            }, o.getTipElement = function () {
                return this.tip = this.tip || Be(this.config.template)[0], this.tip
            }, o.setContent = function () {
                var e = Be(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, o._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, o._cleanTipClass = function () {
                var e = Be(this.getTipElement()), t = e.attr("class").match(Ke);
                null !== t && t.length > 0 && e.removeClass(t.join(""))
            }, r._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = Be(this).data(Ve), n = "object" == typeof e ? e : null;
                    if ((t || !/destroy|hide/.test(e)) && (t || (t = new r(this, n), Be(this).data(Ve, t)), "string" == typeof e)) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, i(r, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0"
                }
            }, {
                key: "Default", get: function () {
                    return ze
                }
            }, {
                key: "NAME", get: function () {
                    return Ue
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Ve
                }
            }, {
                key: "Event", get: function () {
                    return Xe
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return $e
                }
            }, {
                key: "DefaultType", get: function () {
                    return Ge
                }
            }]), r
        }(Ut), Be.fn[Ue] = Je._jQueryInterface, Be.fn[Ue].Constructor = Je, Be.fn[Ue].noConflict = function () {
            return Be.fn[Ue] = Ye, Je._jQueryInterface
        }, Je), $t = (Ie = "scrollspy", Le = "." + (Oe = "bs.scrollspy"), He = (Ne = t).fn[Ie], Pe = {
            offset: 10,
            method: "auto",
            target: ""
        }, Qe = {offset: "number", method: "string", target: "(string|element)"}, Re = {
            ACTIVATE: "activate" + Le,
            SCROLL: "scroll" + Le,
            LOAD_DATA_API: "load" + Le + ".data-api"
        }, Me = "active", Fe = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, We = "position", qe = function () {
            function e(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + Fe.NAV_LINKS + "," + this._config.target + " " + Fe.LIST_ITEMS + "," + this._config.target + " " + Fe.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ne(this._scrollElement).on(Re.SCROLL, function (e) {
                    return n._process(e)
                }), this.refresh(), this._process()
            }

            var t = e.prototype;
            return t.refresh = function () {
                var e = this, t = this._scrollElement === this._scrollElement.window ? "offset" : We,
                    n = "auto" === this._config.method ? t : this._config.method, i = n === We ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ne.makeArray(Ne(this._selector)).map(function (e) {
                    var t, r = x.getSelectorFromElement(e);
                    if (r && (t = Ne(r)[0]), t) {
                        var o = t.getBoundingClientRect();
                        if (o.width || o.height) return [Ne(t)[n]().top + i, r]
                    }
                    return null
                }).filter(function (e) {
                    return e
                }).sort(function (e, t) {
                    return e[0] - t[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function () {
                Ne.removeData(this._element, Oe), Ne(this._scrollElement).off(Le), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function (e) {
                if ("string" != typeof(e = r({}, Pe, e)).target) {
                    var t = Ne(e.target).attr("id");
                    t || (t = x.getUID(Ie), Ne(e.target).attr("id", t)), e.target = "#" + t
                }
                return x.typeCheckConfig(Ie, e, Qe), e
            }, t._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function () {
                var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }, t._activate = function (e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",");
                t = t.map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var n = Ne(t.join(","));
                n.hasClass("dropdown-item") ? (n.closest(Fe.DROPDOWN).find(Fe.DROPDOWN_TOGGLE).addClass(Me), n.addClass(Me)) : (n.addClass(Me), n.parents(Fe.NAV_LIST_GROUP).prev(Fe.NAV_LINKS + ", " + Fe.LIST_ITEMS).addClass(Me), n.parents(Fe.NAV_LIST_GROUP).prev(Fe.NAV_ITEMS).children(Fe.NAV_LINKS).addClass(Me)), Ne(this._scrollElement).trigger(Re.ACTIVATE, {relatedTarget: e})
            }, t._clear = function () {
                Ne(this._selector).filter(Fe.ACTIVE).removeClass(Me)
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = Ne(this).data(Oe);
                    if (n || (n = new e(this, "object" == typeof t && t), Ne(this).data(Oe, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0"
                }
            }, {
                key: "Default", get: function () {
                    return Pe
                }
            }]), e
        }(), Ne(window).on(Re.LOAD_DATA_API, function () {
            for (var e = Ne.makeArray(Ne(Fe.DATA_SPY)), t = e.length; t--;) {
                var n = Ne(e[t]);
                qe._jQueryInterface.call(n, n.data())
            }
        }), Ne.fn[Ie] = qe._jQueryInterface, Ne.fn[Ie].Constructor = qe, Ne.fn[Ie].noConflict = function () {
            return Ne.fn[Ie] = He, qe._jQueryInterface
        }, qe), Yt = (Te = ".bs.tab", xe = (Ee = t).fn.tab, ke = {
            HIDE: "hide" + Te,
            HIDDEN: "hidden" + Te,
            SHOW: "show" + Te,
            SHOWN: "shown" + Te,
            CLICK_DATA_API: "click.bs.tab.data-api"
        }, je = "active", Ae = ".active", Se = "> li > .active", De = function () {
            function e(e) {
                this._element = e
            }

            var t = e.prototype;
            return t.show = function () {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && Ee(this._element).hasClass(je) || Ee(this._element).hasClass("disabled"))) {
                    var t, n, i = Ee(this._element).closest(".nav, .list-group")[0],
                        r = x.getSelectorFromElement(this._element);
                    if (i) {
                        var o = "UL" === i.nodeName ? Se : Ae;
                        n = (n = Ee.makeArray(Ee(i).find(o)))[n.length - 1]
                    }
                    var a = Ee.Event(ke.HIDE, {relatedTarget: this._element}), s = Ee.Event(ke.SHOW, {relatedTarget: n});
                    if (n && Ee(n).trigger(a), Ee(this._element).trigger(s), !s.isDefaultPrevented() && !a.isDefaultPrevented()) {
                        r && (t = Ee(r)[0]), this._activate(this._element, i);
                        var l = function () {
                            var t = Ee.Event(ke.HIDDEN, {relatedTarget: e._element}),
                                i = Ee.Event(ke.SHOWN, {relatedTarget: n});
                            Ee(n).trigger(t), Ee(e._element).trigger(i)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function () {
                Ee.removeData(this._element, "bs.tab"), this._element = null
            }, t._activate = function (e, t, n) {
                var i = this, r = ("UL" === t.nodeName ? Ee(t).find(Se) : Ee(t).children(Ae))[0],
                    o = n && x.supportsTransitionEnd() && r && Ee(r).hasClass("fade"), a = function () {
                        return i._transitionComplete(e, r, n)
                    };
                r && o ? Ee(r).one(x.TRANSITION_END, a).emulateTransitionEnd(150) : a()
            }, t._transitionComplete = function (e, t, n) {
                if (t) {
                    Ee(t).removeClass("show " + je);
                    var i = Ee(t.parentNode).find("> .dropdown-menu .active")[0];
                    i && Ee(i).removeClass(je), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (Ee(e).addClass(je), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), x.reflow(e), Ee(e).addClass("show"), e.parentNode && Ee(e.parentNode).hasClass("dropdown-menu")) {
                    var r = Ee(e).closest(".dropdown")[0];
                    r && Ee(r).find(".dropdown-toggle").addClass(je), e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = Ee(this), i = n.data("bs.tab");
                    if (i || (i = new e(this), n.data("bs.tab", i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0"
                }
            }]), e
        }(), Ee(document).on(ke.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
            e.preventDefault(), De._jQueryInterface.call(Ee(this), "show")
        }), Ee.fn.tab = De._jQueryInterface, Ee.fn.tab.Constructor = De, Ee.fn.tab.noConflict = function () {
            return Ee.fn.tab = xe, De._jQueryInterface
        }, De);
    !function (e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = x, e.Alert = k, e.Button = j, e.Carousel = A, e.Collapse = S, e.Dropdown = qt, e.Modal = Bt, e.Popover = Vt, e.Scrollspy = $t, e.Tab = Yt, e.Tooltip = Ut, Object.defineProperty(e, "__esModule", {value: !0})
}), function (e) {
    e.fn.extend({
        slimScroll: function (n) {
            var i = e.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, n);
            return this.each(function () {
                function r(t) {
                    if (c) {
                        var n = 0;
                        (t = t || window.event).wheelDelta && (n = -t.wheelDelta / 120), t.detail && (n = t.detail / 3), e(t.target || t.srcTarget || t.srcElement).closest("." + i.wrapperClass).is(y.parent()) && o(n, !0), t.preventDefault && !v && t.preventDefault(), v || (t.returnValue = !1)
                    }
                }

                function o(e, t, n) {
                    v = !1;
                    var r = y.outerHeight() - _.outerHeight();
                    t && (t = parseInt(_.css("top")) + e * parseInt(i.wheelStep) / 100 * _.outerHeight(), t = Math.min(Math.max(t, 0), r), t = 0 < e ? Math.ceil(t) : Math.floor(t), _.css({top: t + "px"})), t = (g = parseInt(_.css("top")) / (y.outerHeight() - _.outerHeight())) * (y[0].scrollHeight - y.outerHeight()), n && (e = (t = e) / y[0].scrollHeight * y.outerHeight(), e = Math.min(Math.max(e, 0), r), _.css({top: e + "px"})), y.scrollTop(t), y.trigger("slimscrolling", ~~t), s(), l()
                }

                function a() {
                    p = Math.max(y.outerHeight() / y[0].scrollHeight * y.outerHeight(), 30), _.css({height: p + "px"});
                    var e = p == y.outerHeight() ? "none" : "block";
                    _.css({display: e})
                }

                function s() {
                    a(), clearTimeout(f), g == ~~g ? (v = i.allowPageScroll, m != g && y.trigger("slimscroll", 0 == ~~g ? "top" : "bottom")) : v = !1, m = g, p >= y.outerHeight() ? v = !0 : (_.stop(!0, !0).fadeIn("fast"), i.railVisible && C.stop(!0, !0).fadeIn("fast"))
                }

                function l() {
                    i.alwaysVisible || (f = setTimeout(function () {
                        i.disableFadeOut && c || u || d || (_.fadeOut("slow"), C.fadeOut("slow"))
                    }, 1e3))
                }

                var c, u, d, f, h, p, g, m, v = !1, y = e(this);
                if (y.parent().hasClass(i.wrapperClass)) {
                    var b = y.scrollTop(), _ = y.siblings("." + i.barClass), C = y.siblings("." + i.railClass);
                    if (a(), e.isPlainObject(n)) {
                        if ("height" in n && "auto" == n.height) {
                            y.parent().css("height", "auto"), y.css("height", "auto");
                            var w = y.parent().parent().height();
                            y.parent().css("height", w), y.css("height", w)
                        } else "height" in n && (w = n.height, y.parent().css("height", w), y.css("height", w));
                        if ("scrollTo" in n) b = parseInt(i.scrollTo); else if ("scrollBy" in n) b += parseInt(i.scrollBy); else if ("destroy" in n) return _.remove(), C.remove(), void y.unwrap();
                        o(b, !1, !0)
                    }
                } else if (!(e.isPlainObject(n) && "destroy" in n)) {
                    i.height = "auto" == i.height ? y.parent().height() : i.height, b = e("<div></div>").addClass(i.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: i.width,
                        height: i.height
                    }), y.css({overflow: "hidden", width: i.width, height: i.height});
                    C = e("<div></div>").addClass(i.railClass).css({
                        width: i.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: i.alwaysVisible && i.railVisible ? "block" : "none",
                        "border-radius": i.railBorderRadius,
                        background: i.railColor,
                        opacity: i.railOpacity,
                        zIndex: 90
                    }), _ = e("<div></div>").addClass(i.barClass).css({
                        background: i.color,
                        width: i.size,
                        position: "absolute",
                        top: 0,
                        opacity: i.opacity,
                        display: i.alwaysVisible ? "block" : "none",
                        "border-radius": i.borderRadius,
                        BorderRadius: i.borderRadius,
                        MozBorderRadius: i.borderRadius,
                        WebkitBorderRadius: i.borderRadius,
                        zIndex: 99
                    }), w = "right" == i.position ? {right: i.distance} : {left: i.distance};
                    C.css(w), _.css(w), y.wrap(b), y.parent().append(_), y.parent().append(C), i.railDraggable && _.bind("mousedown", function (n) {
                        var i = e(document);
                        return d = !0, t = parseFloat(_.css("top")), pageY = n.pageY, i.bind("mousemove.slimscroll", function (e) {
                            currTop = t + e.pageY - pageY, _.css("top", currTop), o(0, _.position().top, !1)
                        }), i.bind("mouseup.slimscroll", function (e) {
                            d = !1, l(), i.unbind(".slimscroll")
                        }), !1
                    }).bind("selectstart.slimscroll", function (e) {
                        return e.stopPropagation(), e.preventDefault(), !1
                    }), C.hover(function () {
                        s()
                    }, function () {
                        l()
                    }), _.hover(function () {
                        u = !0
                    }, function () {
                        u = !1
                    }), y.hover(function () {
                        c = !0, s(), l()
                    }, function () {
                        c = !1, l()
                    }), y.bind("touchstart", function (e, t) {
                        e.originalEvent.touches.length && (h = e.originalEvent.touches[0].pageY)
                    }), y.bind("touchmove", function (e) {
                        v || e.originalEvent.preventDefault(), e.originalEvent.touches.length && (o((h - e.originalEvent.touches[0].pageY) / i.touchScrollStep, !0), h = e.originalEvent.touches[0].pageY)
                    }), a(), "bottom" === i.start ? (_.css({top: y.outerHeight() - _.outerHeight()}), o(0, !0)) : "top" !== i.start && (o(e(i.start).position().top, null, !0), i.alwaysVisible || _.hide()), window.addEventListener ? (this.addEventListener("DOMMouseScroll", r, !1), this.addEventListener("mousewheel", r, !1)) : document.attachEvent("onmousewheel", r)
                }
            }), this
        }
    }), e.fn.extend({slimscroll: e.fn.slimScroll})
}(jQuery), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
    "use strict";
    var t, n = 32, i = 33, r = 34, o = 35, a = 36, s = 38, l = 40, c = function (t, n) {
        var i, r, o = n.scrollTop(), a = n.prop("scrollHeight"), s = n.prop("clientHeight"),
            l = t.originalEvent.wheelDelta || -1 * t.originalEvent.detail || -1 * t.originalEvent.deltaY, c = 0;
        return "wheel" === t.type ? (i = n.height() / e(window).height(), c = t.originalEvent.deltaY * i) : this.options.touch && "touchmove" === t.type && (l = t.originalEvent.changedTouches[0].clientY - this.startClientY), {
            prevent: (r = l > 0 && o + c <= 0) || l < 0 && o + c >= a - s,
            top: r,
            scrollTop: o,
            deltaY: c
        }
    }, u = function (e, t) {
        var c, u, d = t.scrollTop(), f = {top: !1, bottom: !1};
        return f.top = 0 === d && (e.keyCode === i || e.keyCode === a || e.keyCode === s), f.top || (c = t.prop("scrollHeight"), u = t.prop("clientHeight"), f.bottom = c === d + u && (e.keyCode === n || e.keyCode === r || e.keyCode === o || e.keyCode === l)), f
    }, d = function (t, n) {
        this.$element = t, this.options = e.extend({}, d.DEFAULTS, this.$element.data(), n), this.enabled = !0, this.startClientY = 0, this.options.unblock && this.$element.on(d.CORE.wheelEventName + d.NAMESPACE, this.options.unblock, e.proxy(d.CORE.unblockHandler, this)), this.$element.on(d.CORE.wheelEventName + d.NAMESPACE, this.options.selector, e.proxy(d.CORE.handler, this)), this.options.touch && (this.$element.on("touchstart" + d.NAMESPACE, this.options.selector, e.proxy(d.CORE.touchHandler, this)), this.$element.on("touchmove" + d.NAMESPACE, this.options.selector, e.proxy(d.CORE.handler, this)), this.options.unblock && this.$element.on("touchmove" + d.NAMESPACE, this.options.unblock, e.proxy(d.CORE.unblockHandler, this))), this.options.keyboard && (this.$element.attr("tabindex", this.options.keyboard.tabindex || 0), this.$element.on("keydown" + d.NAMESPACE, this.options.selector, e.proxy(d.CORE.keyboardHandler, this)), this.options.unblock && this.$element.on("keydown" + d.NAMESPACE, this.options.unblock, e.proxy(d.CORE.unblockHandler, this)))
    };
    d.NAME = "ScrollLock", d.VERSION = "3.1.2", d.NAMESPACE = ".scrollLock", d.ANIMATION_NAMESPACE = d.NAMESPACE + ".effect", d.DEFAULTS = {
        strict: !1,
        strictFn: function (e) {
            return e.prop("scrollHeight") > e.prop("clientHeight")
        },
        selector: !1,
        animation: !1,
        touch: "ontouchstart" in window,
        keyboard: !1,
        unblock: !1
    }, d.CORE = {
        wheelEventName: "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll",
        animationEventName: ["webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend", "animationend"].join(d.ANIMATION_NAMESPACE + " ") + d.ANIMATION_NAMESPACE,
        unblockHandler: function (e) {
            e.__currentTarget = e.currentTarget
        },
        handler: function (t) {
            var n, i, r;
            this.enabled && !t.ctrlKey && (n = e(t.currentTarget), (!0 !== this.options.strict || this.options.strictFn(n)) && (t.stopPropagation(), i = e.proxy(c, this)(t, n), t.__currentTarget && (i.prevent &= e.proxy(c, this)(t, e(t.__currentTarget)).prevent), i.prevent && (t.preventDefault(), i.deltaY && n.scrollTop(i.scrollTop + i.deltaY), r = i.top ? "top" : "bottom", this.options.animation && setTimeout(d.CORE.animationHandler.bind(this, n, r), 0), n.trigger(e.Event(r + d.NAMESPACE)))))
        },
        touchHandler: function (e) {
            this.startClientY = e.originalEvent.touches[0].clientY
        },
        animationHandler: function (e, t) {
            var n = this.options.animation[t], i = this.options.animation.top + " " + this.options.animation.bottom;
            e.off(d.ANIMATION_NAMESPACE).removeClass(i).addClass(n).one(d.CORE.animationEventName, function () {
                e.removeClass(n)
            })
        },
        keyboardHandler: function (t) {
            var n, i = e(t.currentTarget), r = (i.scrollTop(), u(t, i));
            return t.__currentTarget && (n = u(t, e(t.__currentTarget)), r.top &= n.top, r.bottom &= n.bottom), r.top ? (i.trigger(e.Event("top" + d.NAMESPACE)), this.options.animation && setTimeout(d.CORE.animationHandler.bind(this, i, "top"), 0), !1) : r.bottom ? (i.trigger(e.Event("bottom" + d.NAMESPACE)), this.options.animation && setTimeout(d.CORE.animationHandler.bind(this, i, "bottom"), 0), !1) : void 0
        }
    }, d.prototype.toggleStrict = function () {
        this.options.strict = !this.options.strict
    }, d.prototype.enable = function () {
        this.enabled = !0
    }, d.prototype.disable = function () {
        this.enabled = !1
    }, d.prototype.destroy = function () {
        this.disable(), this.$element.off(d.NAMESPACE), this.$element = null, this.options = null
    }, t = e.fn.scrollLock, e.fn.scrollLock = function (t) {
        return this.each(function () {
            var n = e(this), i = "object" == typeof t && t, r = n.data(d.NAME);
            (r || "destroy" !== t) && (r || n.data(d.NAME, r = new d(n, i)), "string" == typeof t && r[t]())
        })
    }, e.fn.scrollLock.defaults = d.DEFAULTS, e.fn.scrollLock.noConflict = function () {
        return e.fn.scrollLock = t, this
    }
}), function (e) {
    e.fn.appear = function (t, n) {
        var i = e.extend({data: void 0, one: !0, accX: 0, accY: 0}, n);
        return this.each(function () {
            var n = e(this);
            if (n.appeared = !1, t) {
                var r = e(window), o = function () {
                    if (n.is(":visible")) {
                        var e = r.scrollLeft(), t = r.scrollTop(), o = n.offset(), a = o.left, s = o.top, l = i.accX,
                            c = i.accY, u = n.height(), d = r.height(), f = n.width(), h = r.width();
                        s + u + c >= t && t + d + c >= s && a + f + l >= e && e + h + l >= a ? n.appeared || n.trigger("appear", i.data) : n.appeared = !1
                    } else n.appeared = !1
                }, a = function () {
                    if (n.appeared = !0, i.one) {
                        r.unbind("scroll", o);
                        var a = e.inArray(o, e.fn.appear.checks);
                        a >= 0 && e.fn.appear.checks.splice(a, 1)
                    }
                    t.apply(this, arguments)
                };
                i.one ? n.one("appear", i.data, a) : n.bind("appear", i.data, a), r.scroll(o), e.fn.appear.checks.push(o), o()
            } else n.trigger("appear", i.data)
        })
    }, e.extend(e.fn.appear, {
        checks: [], timeout: null, checkAll: function () {
            var t = e.fn.appear.checks.length;
            if (t > 0) for (; t--;) e.fn.appear.checks[t]()
        }, run: function () {
            e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (t, n) {
        var i = e.fn[n];
        i && (e.fn[n] = function () {
            var t = i.apply(this, arguments);
            return e.fn.appear.run(), t
        })
    })
}(jQuery), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
    var t = function (n, i) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, this.dataOptions(), i), this.init()
    };
    t.DEFAULTS = {
        from: 0, to: 0, speed: 1e3, refreshInterval: 100, decimals: 0, formatter: function (e, t) {
            return e.toFixed(t.decimals)
        }, onUpdate: null, onComplete: null
    }, t.prototype.init = function () {
        this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
    }, t.prototype.dataOptions = function () {
        var e = {
            from: this.$element.data("from"),
            to: this.$element.data("to"),
            speed: this.$element.data("speed"),
            refreshInterval: this.$element.data("refresh-interval"),
            decimals: this.$element.data("decimals")
        }, t = Object.keys(e);
        for (var n in t) {
            var i = t[n];
            void 0 === e[i] && delete e[i]
        }
        return e
    }, t.prototype.update = function () {
        this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
    }, t.prototype.render = function () {
        var e = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(e)
    }, t.prototype.restart = function () {
        this.stop(), this.init(), this.start()
    }, t.prototype.start = function () {
        this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
    }, t.prototype.stop = function () {
        this.interval && clearInterval(this.interval)
    }, t.prototype.toggle = function () {
        this.interval ? this.stop() : this.start()
    }, e.fn.countTo = function (n) {
        return this.each(function () {
            var i = e(this), r = i.data("countTo"), o = "object" == typeof n ? n : {},
                a = "string" == typeof n ? n : "start";
            (!r || "object" == typeof n) && (r && r.stop(), i.data("countTo", r = new t(this, o))), r[a].call(r)
        })
    }
}), function (e) {
    var t = !1;
    if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
        var n = window.Cookies, i = window.Cookies = e();
        i.noConflict = function () {
            return window.Cookies = n, i
        }
    }
}(function () {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) t[i] = n[i]
        }
        return t
    }

    return function t(n) {
        function i(t, r, o) {
            var a;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof(o = e({path: "/"}, i.defaults, o)).expires) {
                        var s = new Date;
                        s.setMilliseconds(s.getMilliseconds() + 864e5 * o.expires), o.expires = s
                    }
                    o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        a = JSON.stringify(r), /^[\{\[]/.test(a) && (r = a)
                    } catch (e) {
                    }
                    r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var l = "";
                    for (var c in o) o[c] && (l += "; " + c, !0 !== o[c] && (l += "=" + o[c]));
                    return document.cookie = t + "=" + r + l
                }
                t || (a = {});
                for (var u = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, f = 0; f < u.length; f++) {
                    var h = u[f].split("="), p = h.slice(1).join("=");
                    this.json || '"' !== p.charAt(0) || (p = p.slice(1, -1));
                    try {
                        var g = h[0].replace(d, decodeURIComponent);
                        if (p = n.read ? n.read(p, g) : n(p, g) || p.replace(d, decodeURIComponent), this.json) try {
                            p = JSON.parse(p)
                        } catch (e) {
                        }
                        if (t === g) {
                            a = p;
                            break
                        }
                        t || (a[g] = p)
                    } catch (e) {
                    }
                }
                return a
            }
        }

        return i.set = i, i.get = function (e) {
            return i.call(i, e)
        }, i.getJSON = function () {
            return i.apply({json: !0}, [].slice.call(arguments))
        }, i.defaults = {}, i.remove = function (t, n) {
            i(t, "", e(n, {expires: -1}))
        }, i.withConverter = t, i
    }(function () {
    })
});
var Codebase = function () {
    var e, t, n, i, r, o, a, s, l, c, u, d, f, h, p = function () {
        e = jQuery("html"), t = jQuery("body"), n = jQuery("#page-container"), i = jQuery("#sidebar"), r = jQuery("#sidebar-scroll"), o = jQuery("#side-overlay"), a = jQuery("#side-overlay-scroll"), s = jQuery("#page-header"), l = jQuery("#page-header-search"), c = jQuery("#page-header-search-input"), u = jQuery("#page-header-loader"), d = jQuery("#main-container"), f = jQuery("#page-footer")
    }, g = function (e) {
        var t;
        // (h = T(), "init" === e) ? (jQuery(window).off("resize.cb.scroll orientationchange.cb.scroll"), jQuery(window).on("resize.cb.scroll orientationchange.cb.scroll", function () {
        //     clearTimeout(t), t = setTimeout(function () {
        //         g()
        //     }, 150)
        // }).triggerHandler("resize.cb.scroll")) : h > 991 && n.hasClass("side-scroll") ? (jQuery(i).add(o).scrollLock("disable"), r.length && !r.parent(".slimScrollDiv").length ? (r.slimScroll({
        //     height: i.outerHeight(),
        //     color: "#cdcdcd",
        //     size: "4px",
        //     opacity: .9,
        //     wheelStep: 15,
        //     distance: "0",
        //     railVisible: !1,
        //     railOpacity: 1
        // }), r.mouseover()) : (r.add(r.parent()).css("height", i.outerHeight()), r.mouseover()), a.length && !a.parent(".slimScrollDiv").length ? a.slimScroll({
        //     height: o.outerHeight(),
        //     color: "#cdcdcd",
        //     size: "4px",
        //     opacity: .9,
        //     wheelStep: 15,
        //     distance: "0",
        //     railVisible: !1,
        //     railOpacity: 1
        // }) : a.add(a.parent()).css("height", o.outerHeight())) : (jQuery(i).add(o).scrollLock("enable"), r.length && r.parent(".slimScrollDiv").length && (r.slimScroll({destroy: !0}), r.attr("style", "")), a.length && a.parent(".slimScrollDiv").length && (a.slimScroll({destroy: !0}), a.attr("style", "")))
    }, m = function () {
        var e;
        jQuery(window).off("resize.cb.main orientationchange.cb.main"), d.length && jQuery(window).on("resize.cb.main orientationchange.cb.main", function () {
            clearTimeout(e), e = setTimeout(function () {
                var e = jQuery(window).height(), t = s.outerHeight() || 0, i = f.outerHeight() || 0;
                n.hasClass("page-header-fixed") || n.hasClass("page-header-glass") ? d.css("min-height", e - i) : d.css("min-height", e - t - i), f.fadeTo(1e3, 1)
            }, 150)
        }).triggerHandler("resize.cb.main"), n.addClass("side-trans-enabled")
    }, v = function () {
        jQuery(window).off("scroll.cb.header"), n.hasClass("page-header-glass") && n.hasClass("page-header-fixed") && jQuery(window).on("scroll.cb.header", function () {
            jQuery(this).scrollTop() > 60 ? n.addClass("page-header-scroll") : n.removeClass("page-header-scroll")
        }).trigger("scroll.cb.header")
    }, y = function () {
        n.off("click.cb.menu"), n.on("click.cb.menu", '[data-toggle="nav-submenu"]', function (t) {
            var n = jQuery(this), i = n.parent("li");
            return i.hasClass("open") ? i.removeClass("open") : (n.closest("ul").children("li").removeClass("open"), i.addClass("open")), e.hasClass("no-focus") && n.blur(), !1
        })
    }, b = function () {
        jQuery(".form-material.floating > .form-control").each(function () {
            var e = jQuery(this), t = e.parent(".form-material");
            setTimeout(function () {
                e.val() && t.addClass("open")
            }, 150), e.off("change.cb.inputs").on("change.cb.inputs", function () {
                e.val() ? t.addClass("open") : t.removeClass("open")
            })
        })
    }, _ = function () {
        var e = jQuery("#css-theme"), t = !!n.hasClass("enable-cookies");
        if (t) {
            var i = Cookies.get("cbThemeName") || !1;
            i && C(e, i), e = jQuery("#css-theme")
        }
        jQuery('[data-toggle="theme"][data-theme="' + (e.length ? e.attr("href") : "default") + '"]').parent("li").addClass("active"), n.off("click.cb.themes"), n.on("click.cb.themes", '[data-toggle="theme"]', function () {
            var n = jQuery(this).data("theme");
            jQuery('[data-toggle="theme"]').parent("li").removeClass("active"), jQuery('[data-toggle="theme"][data-theme="' + n + '"]').parent("li").addClass("active"), C(e, n), e = jQuery("#css-theme"), t && Cookies.set("cbThemeName", n, {expires: 7})
        })
    }, C = function (e, t) {
        "default" === t ? e.length && e.remove() : e.length ? e.attr("href", t) : jQuery("#css-main").after('<link rel="stylesheet" id="css-theme" href="' + t + '">')
    }, w = function (t) {
        switch (
            h = T(),
                t) {
            case"init":
                n.off("click.cb.layout"), n.on("click.cb.layout", '[data-toggle="layout"]', function () {
                    var t = jQuery(this);
                    w(t.data("action")), e.hasClass("no-focus") && t.blur()
                });
                break;
            case"sidebar_pos_toggle":
                n.toggleClass("sidebar-r");
                break;
            case"sidebar_pos_left":
                n.removeClass("sidebar-r");
                break;
            case"sidebar_pos_right":
                n.addClass("sidebar-r");
                break;
            case"sidebar_toggle":
                h > 991 ? n.toggleClass("sidebar-o") : n.toggleClass("sidebar-o-xs");
                break;
            case"sidebar_open":
                h > 991 ? n.addClass("sidebar-o") : n.addClass("sidebar-o-xs");
                break;
            case"sidebar_close":
                h > 991 ? n.removeClass("sidebar-o") : n.removeClass("sidebar-o-xs");
                break;
            case"sidebar_mini_toggle":
                h > 991 && n.toggleClass("sidebar-mini");
                break;
            case"sidebar_mini_on":
                h > 991 && n.addClass("sidebar-mini");
                break;
            case"sidebar_mini_off":
                h > 991 && n.removeClass("sidebar-mini");
                break;
            case"sidebar_style_inverse_toggle":
                n.toggleClass("sidebar-inverse");
                break;
            case"sidebar_style_inverse_on":
                n.addClass("sidebar-inverse");
                break;
            case"sidebar_style_inverse_off":
                n.removeClass("sidebar-inverse");
                break;
            case"side_overlay_toggle":
                n.hasClass("side-overlay-o") ? w("side_overlay_close") : w("side_overlay_open");
                break;
            case"side_overlay_open":
                jQuery(document).on("keydown.cb.sideOverlay", function (e) {
                    27 === e.which && (e.preventDefault(), w("side_overlay_close"))
                }), n.addClass("side-overlay-o");
                break;
            case"side_overlay_close":
                jQuery(document).off("keydown.cb.sideOverlay"), n.removeClass("side-overlay-o");
                break;
            case"side_overlay_hoverable_toggle":
                n.toggleClass("side-overlay-hover");
                break;
            case"side_overlay_hoverable_on":
                n.addClass("side-overlay-hover");
                break;
            case"side_overlay_hoverable_off":
                n.removeClass("side-overlay-hover");
                break;
            case"header_fixed_toggle":
                n.toggleClass("page-header-fixed"), v(), m();
                break;
            case"header_fixed_on":
                n.addClass("page-header-fixed"), v(), m();
                break;
            case"header_fixed_off":
                n.removeClass("page-header-fixed"), v(), m();
                break;
            case"header_style_modern":
                n.removeClass("page-header-glass page-header-inverse").addClass("page-header-modern"), v(), m();
                break;
            case"header_style_classic":
                n.removeClass("page-header-glass page-header-modern"), v(), m();
                break;
            case"header_style_glass":
                n.removeClass("page-header-modern").addClass("page-header-glass"), v(), m();
                break;
            case"header_style_inverse_toggle":
                n.hasClass("page-header-modern") || n.toggleClass("page-header-inverse");
                break;
            case"header_style_inverse_on":
                n.hasClass("page-header-modern") || n.addClass("page-header-inverse");
                break;
            case"header_style_inverse_off":
                n.hasClass("page-header-modern") || n.removeClass("page-header-inverse");
                break;
            case"header_search_on":
                l.addClass("show"), c.focus(), jQuery(document).on("keydown.cb.header.search", function (e) {
                    27 === e.which && (e.preventDefault(), console.log("test"), w("header_search_off"))
                });
                break;
            case"header_search_off":
                l.removeClass("show"), c.blur(), jQuery(document).off("keydown.cb.header.search");
                break;
            case"header_loader_on":
                u.addClass("show");
                break;
            case"header_loader_off":
                u.removeClass("show");
                break;
            case"side_scroll_toggle":
                n.toggleClass("side-scroll"), g();
                break;
            case"side_scroll_on":
                n.addClass("side-scroll"), g();
                break;
            case"side_scroll_off":
                n.removeClass("side-scroll"), g();
                break;
            case"content_layout_toggle":
                n.hasClass("main-content-boxed") ? w("content_layout_narrow") : n.hasClass("main-content-narrow") ? w("content_layout_full_width") : w("content_layout_boxed");
                break;
            case"content_layout_boxed":
                n.removeClass("main-content-narrow").addClass("main-content-boxed");
                break;
            case"content_layout_narrow":
                n.removeClass("main-content-boxed").addClass("main-content-narrow");
                break;
            case"content_layout_full_width":
                n.removeClass("main-content-boxed main-content-narrow");
            default:
                return !1
        }
    }, E = function (e, t) {
        var i = "si si-size-fullscreen", r = "si si-size-actual", o = "si si-arrow-up", a = "si si-arrow-down";
        if ("init" === t) jQuery('[data-toggle="block-option"][data-action="fullscreen_toggle"]').each(function () {
            var e = jQuery(this);
            e.html('<i class="' + (jQuery(e).closest(".block").hasClass("block-mode-fullscreen") ? r : i) + '"></i>')
        }), jQuery('[data-toggle="block-option"][data-action="content_toggle"]').each(function () {
            var e = jQuery(this);
            e.html('<i class="' + (e.closest(".block").hasClass("block-mode-hidden") ? a : o) + '"></i>')
        }), n.off("click.cb.blocks"), n.on("click.cb.blocks", '[data-toggle="block-option"]', function () {
            E(jQuery(this).closest(".block"), jQuery(this).data("action"))
        }); else {
            var s = e instanceof jQuery ? e : jQuery(e);
            if (s.length) {
                var l = jQuery('[data-toggle="block-option"][data-action="fullscreen_toggle"]', s),
                    c = jQuery('[data-toggle="block-option"][data-action="content_toggle"]', s);
                switch (t) {
                    case"fullscreen_toggle":
                        s.removeClass("block-mode-pinned").toggleClass("block-mode-fullscreen"), s.hasClass("block-mode-fullscreen") ? jQuery(s).scrollLock("enable") : jQuery(s).scrollLock("disable"), l.length && (s.hasClass("block-mode-fullscreen") ? jQuery("i", l).removeClass(i).addClass(r) : jQuery("i", l).removeClass(r).addClass(i));
                        break;
                    case"fullscreen_on":
                        s.removeClass("block-mode-pinned").addClass("block-mode-fullscreen"), jQuery(s).scrollLock("enable"), l.length && jQuery("i", l).removeClass(i).addClass(r);
                        break;
                    case"fullscreen_off":
                        s.removeClass("block-mode-fullscreen"), jQuery(s).scrollLock("disable"), l.length && jQuery("i", l).removeClass(r).addClass(i);
                        break;
                    case"content_toggle":
                        s.toggleClass("block-mode-hidden"), c.length && (s.hasClass("block-mode-hidden") ? jQuery("i", c).removeClass(o).addClass(a) : jQuery("i", c).removeClass(a).addClass(o));
                        break;
                    case"content_hide":
                        s.addClass("block-mode-hidden"), c.length && jQuery("i", c).removeClass(o).addClass(a);
                        break;
                    case"content_show":
                        s.removeClass("block-mode-hidden"), c.length && jQuery("i", c).removeClass(a).addClass(o);
                        break;
                    case"state_toggle":
                        s.toggleClass("block-mode-loading"), jQuery('[data-toggle="block-option"][data-action="state_toggle"][data-action-mode="demo"]', s).length && setTimeout(function () {
                            s.removeClass("block-mode-loading")
                        }, 2e3);
                        break;
                    case"state_loading":
                        s.addClass("block-mode-loading");
                        break;
                    case"state_normal":
                        s.removeClass("block-mode-loading");
                        break;
                    case"pinned_toggle":
                        s.removeClass("block-mode-fullscreen").toggleClass("block-mode-pinned");
                        break;
                    case"pinned_on":
                        s.removeClass("block-mode-fullscreen").addClass("block-mode-pinned");
                        break;
                    case"pinned_off":
                        s.removeClass("block-mode-pinned");
                        break;
                    case"close":
                        s.hide();
                        break;
                    case"open":
                        s.show();
                        break;
                    default:
                        return !1
                }
            }
        }
    }, T = function () {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }, x = function () {
        jQuery('[data-toggle="class-toggle"]:not(.js-class-toggle-enabled)').on("click.cb.helpers.core", function () {
            var t = jQuery(this);
            t.addClass("js-class-toggle-enabled"), jQuery(t.data("target").toString()).toggleClass(t.data("class").toString()), e.hasClass("no-focus") && t.blur()
        })
    }, k = function () {
        jQuery('[data-toggle="scroll-to"]:not(.js-scroll-to-enabled)').on("click.cb.helpers.core", function (e) {
            e.stopPropagation();
            var t = jQuery(this), i = t.data("target") || t.attr("href"), r = t.data("speed") || 1e3,
                o = s.length && n.hasClass("page-header-fixed") ? s.outerHeight() : 0;
            t.addClass("js-scroll-to-enabled"), jQuery("html, body").animate({scrollTop: jQuery(i).offset().top - o}, r)
        })
    }, j = function () {
        var e = jQuery(".js-year-copy");
        if (e.length > 0) {
            var t = (new Date).getFullYear(), n = e.html().length > 0 ? e.html() : t;
            parseInt(n) >= t ? e.html(t) : e.html(n + "-" + t.toString().substr(2, 2))
        }
    }, A = function () {
        jQuery('[data-toggle="tooltip"]:not(.js-tooltip-enabled)').add(".js-tooltip:not(.js-tooltip-enabled)").each(function () {
            var e = jQuery(this);
            e.addClass("js-tooltip-enabled"), e.tooltip({
                container: e.data("container") || "body",
                animation: e.data("animation") || !1
            })
        })
    }, S = function () {
        jQuery('[data-toggle="popover"]:not(.js-popover-enabled)').add(".js-popover:not(.js-popover-enabled)").each(function () {
            var e = jQuery(this);
            e.addClass("js-popover-enabled"), e.popover({
                container: e.data("container") || "body",
                animation: e.data("animation") || !1,
                trigger: e.data("trigger") || "hover focus"
            })
        })
    }, D = function () {
        jQuery('[data-toggle="tabs"]:not(.js-tabs-enabled)').add(".js-tabs:not(.js-tabs-enabled)").each(function () {
            var e = jQuery(this);
            e.addClass("js-tabs-enabled"), e.find("a").on("click.cb.helpers.core", function (e) {
                e.preventDefault(), jQuery(this).tab("show")
            })
        })
    }, N = function () {
        jQuery('[data-toggle="appear"]:not(.js-appear-enabled)').each(function () {
            h = T();
            var t = jQuery(this), n = t.data("class") || "animated fadeIn", i = t.data("offset") || 0,
                r = e.hasClass("ie9") || h < 992 ? 0 : t.data("timeout") ? t.data("timeout") : 0;
            t.addClass("js-appear-enabled"), t.appear(function () {
                setTimeout(function () {
                    t.removeClass("invisible").addClass(n)
                }, r)
            }, {accY: i})
        })
    }, I = function () {
        jQuery('[data-toggle="countTo"]:not(.js-count-to-enabled)').each(function () {
            var e = jQuery(this), t = e.data("after"), n = e.data("before");
            e.addClass("js-count-to-enabled"), e.appear(function () {
                e.countTo({
                    speed: e.data("speed") || 1500,
                    refreshInterval: e.data("refresh-interval") || 15,
                    onComplete: function () {
                        t ? e.html(e.html() + t) : n && e.html(n + e.html())
                    }
                })
            })
        })
    }, O = function () {
        jQuery('[data-toggle="slimscroll"]:not(.js-slimscroll-enabled)').each(function () {
            var e = jQuery(this);
            e.addClass("js-slimscroll-enabled"), e.slimScroll({
                height: e.data("height") || "200px",
                size: e.data("size") || "5px",
                position: e.data("position") || "right",
                color: e.data("color") || "#000",
                opacity: e.data("opacity") || ".25",
                distance: e.data("distance") || "0",
                alwaysVisible: !!e.data("always-visible"),
                railVisible: !!e.data("rail-visible"),
                railColor: e.data("rail-color") || "#999",
                railOpacity: e.data("rail-opacity") || .3
            })
        })
    }, L = function (e, n) {
        var i = jQuery("#page-loader");
        return "show" === e ? i.length ? (n && i.removeClass().addClass(n), i.addClass("show")) : n ? t.prepend('<div id="page-loader" class="show ' + n + '"></div>') : t.prepend('<div id="page-loader" class="show"></div>') : "hide" === e && i.length && i.removeClass("show"), !1
    }, H = function () {
        jQuery('[data-toggle="click-ripple"]:not(.js-click-ripple-enabled)').each(function () {
            var e = jQuery(this);
            e.addClass("js-click-ripple-enabled"), e.css({
                overflow: "hidden",
                position: "relative",
                "z-index": 1
            }), e.on("click.cb.helpers.core", function (t) {
                var n, i, r, o, a = "click-ripple";
                0 === e.children("." + a).length ? e.prepend('<span class="' + a + '"></span>') : e.children("." + a).removeClass("animate"), (o = e.children("." + a)).height() || o.width() || (n = Math.max(e.outerWidth(), e.outerHeight()), o.css({
                    height: n,
                    width: n
                })), i = t.pageX - e.offset().left - o.width() / 2, r = t.pageY - e.offset().top - o.height() / 2, o.css({
                    top: r + "px",
                    left: i + "px"
                }).addClass("animate")
            })
        })
    }, P = function (e, t) {
        t ? e.closest("tr").addClass("table-active") : e.closest("tr").removeClass("table-active")
    };
    return {
        init: function () {
            p(), g("init"), m(), v(), y(), b(), _(), w("init"), E(!1, "init"), x(), k(), j(), A(), S(), D(), N(), I(), O(), L("hide"), H()
        }, layout: function (e) {
            w(e)
        }, blocks: function (e, t) {
            E(e, t)
        }, loader: function (e, t) {
            L(e, t)
        }, helper: function (e) {
            switch (e) {
                case"core-fn-uiInit":
                    p();
                    break;
                case"core-fn-uiHandleScrollInit":
                    g("init");
                    break;
                case"core-fn-uiHandleScroll":
                    g();
                    break;
                case"core-fn-uiHandleMain":
                    m();
                    break;
                case"core-fn-uiHandleHeader":
                    v();
                    break;
                case"core-fn-uiHandleNav":
                    y();
                    break;
                case"core-fn-uiHandleForms":
                    b();
                    break;
                case"core-fn-uiHandleTheme":
                    _();
                    break;
                case"core-fn-uiApiLayout":
                    w("init");
                    break;
                case"core-fn-uiApiBlocks":
                    E(!1, "init");
                    break;
                case"core-tooltip":
                    A();
                    break;
                case"core-popover":
                    S();
                    break;
                case"core-tab":
                    D();
                    break;
                case"core-scrollTo":
                    k();
                    break;
                case"core-toggle-class":
                    x();
                    break;
                case"core-year-copy":
                    j();
                    break;
                case"core-appear":
                    N();
                    break;
                case"core-appear-countTo":
                    I();
                    break;
                case"core-slimscroll":
                    O();
                    break;
                case"core-ripple":
                    H();
                    break;
                case"core-page-loader":
                    L("hide");
                    break;
                case"print-page":
                    t = n.prop("class"), n.prop("class", ""), window.print(), n.prop("class", t);
                    break;
                case"table-tools":
                    jQuery(".js-table-sections:not(.js-table-sections-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-table-sections-enabled"), jQuery(".js-table-sections-header > tr", e).on("click.cb.helpers", function (t) {
                            if ("checkbox" !== t.target.type && "button" !== t.target.type && "a" !== t.target.tagName.toLowerCase() && !jQuery(t.target).parent("label").length) {
                                var n = jQuery(this).parent("tbody");
                                n.hasClass("show") || jQuery("tbody", e).removeClass("show table-active"), n.toggleClass("show table-active")
                            }
                        })
                    }), jQuery(".js-table-checkable:not(.js-table-checkable-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-table-checkable-enabled"), jQuery("thead input:checkbox", e).on("click.cb.helpers", function () {
                            var t = jQuery(this).prop("checked");
                            jQuery("tbody input:checkbox", e).each(function () {
                                var e = jQuery(this);
                                e.prop("checked", t), P(e, t)
                            })
                        }), jQuery("tbody input:checkbox", e).on("click.cb.helpers", function () {
                            var e = jQuery(this);
                            P(e, e.prop("checked"))
                        }), jQuery("tbody > tr", e).on("click.cb.helpers", function (e) {
                            if ("checkbox" !== e.target.type && "button" !== e.target.type && "a" !== e.target.tagName.toLowerCase() && !jQuery(e.target).parent("label").length) {
                                var t = jQuery("input:checkbox", this), n = t.prop("checked");
                                t.prop("checked", !n), P(t, !n)
                            }
                        })
                    });
                    break;
                case"content-filter":
                    jQuery(".js-filter:not(.js-filter-enabled)").each(function () {
                        var e, t = jQuery(this), n = jQuery(".nav-pills", t), i = jQuery("a[data-category-link]", t),
                            r = jQuery("[data-category]", t), o = t.data("speed") || 200;
                        t.addClass("js-filter-enabled"), n.length && jQuery(window).on("resize.cb.helpers", function () {
                            clearTimeout(e), e = setTimeout(function () {
                                T() < 768 ? n.addClass("flex-column") : n.removeClass("flex-column")
                            }, 150)
                        }).trigger("resize.cb.helpers"), t.data("numbers") && i.each(function () {
                            var e = jQuery(this), t = e.data("category-link");
                            "all" === t ? e.append(" (" + r.length + ")") : e.append(" (" + r.filter('[data-category="' + t + '"]').length + ")")
                        }), i.on("click.cb.helpers", function () {
                            var e, t = jQuery(this);
                            return t.hasClass("active") || (i.removeClass("active"), t.addClass("active"), "all" === (e = t.data("category-link")) ? r.filter(":visible").length ? r.filter(":visible").fadeOut(o, function () {
                                r.fadeIn(o)
                            }) : r.fadeIn(o) : r.filter(":visible").length ? r.filter(":visible").fadeOut(o, function () {
                                r.filter('[data-category="' + e + '"]').fadeIn(o)
                            }) : r.filter('[data-category="' + e + '"]').fadeIn(o)), !1
                        })
                    });
                    break;
                case"slimscroll":
                    uiHelperSlimscroll();
                    break;
                case"magnific-popup":
                    jQuery(".js-gallery:not(.js-gallery-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-gallery-enabled"), e.magnificPopup({
                            delegate: "a.img-lightbox",
                            type: "image",
                            gallery: {enabled: !0}
                        })
                    });
                    break;
                case"ckeditor":
                    jQuery("#js-ckeditor-inline:not(.js-ckeditor-inline-enabled)").length && (jQuery("#js-ckeditor-inline").attr("contenteditable", "true"), CKEDITOR.inline("js-ckeditor-inline"), jQuery("#js-ckeditor-inline").addClass("js-ckeditor-inline-enabled")), jQuery("#js-ckeditor:not(.js-ckeditor-enabled)").length && (CKEDITOR.replace("js-ckeditor"), jQuery("#js-ckeditor").addClass("js-ckeditor-enabled"));
                    break;
                case"simplemde":
                    jQuery(".js-simplemde:not(.js-simplemde-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-simplemde-enabled"), new SimpleMDE({element: e[0]})
                    });
                    break;
                case"slick":
                    jQuery(".js-slider:not(.js-slider-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-slider-enabled"), e.slick({
                            arrows: e.data("arrows") || !1,
                            dots: e.data("dots") || !1,
                            slidesToShow: e.data("slides-to-show") || 1,
                            slidesToScroll: e.data("slides-to-scroll") || 1,
                            centerMode: e.data("center-mode") || !1,
                            autoplay: e.data("autoplay") || !1,
                            autoplaySpeed: e.data("autoplay-speed") || 3e3
                        })
                    });
                    break;
                case"datepicker":
                    jQuery(".js-datepicker:not(.js-datepicker-enabled)").add(".input-daterange:not(.js-datepicker-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-datepicker-enabled"), e.datepicker({
                            weekStart: e.data("week-start") || 0,
                            autoclose: e.data("autoclose") || !1,
                            todayHighlight: e.data("today-highlight") || !1,
                            orientation: "bottom"
                        })
                    });
                    break;
                case"colorpicker":
                    jQuery(".js-colorpicker:not(.js-colorpicker-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-colorpicker-enabled"), e.colorpicker()
                    });
                    break;
                case"tags-inputs":
                    jQuery(".js-tags-input:not(.js-tags-input-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-tags-input-enabled"), e.tagsInput({
                            height: e.data("height") || !1,
                            width: e.data("width") || "100%",
                            defaultText: e.data("default-text") || "Add tag",
                            removeWithBackspace: e.data("remove-with-backspace") || !0,
                            delimiter: [","]
                        })
                    });
                    break;
                case"masked-inputs":
                    jQuery(".js-masked-date:not(.js-masked-enabled)").mask("99/99/9999"), jQuery(".js-masked-date-dash:not(.js-masked-enabled)").mask("99-99-9999"), jQuery(".js-masked-phone:not(.js-masked-enabled)").mask("(999) 999-9999"), jQuery(".js-masked-phone-ext:not(.js-masked-enabled)").mask("(999) 999-9999? x99999"), jQuery(".js-masked-taxid:not(.js-masked-enabled)").mask("99-9999999"), jQuery(".js-masked-ssn:not(.js-masked-enabled)").mask("999-99-9999"), jQuery(".js-masked-pkey:not(.js-masked-enabled)").mask("a*-999-a999"), jQuery(".js-masked-time:not(.js-masked-enabled)").mask("99:99"), jQuery(".js-masked-date").add(".js-masked-date-dash").add(".js-masked-phone").add(".js-masked-phone-ext").add(".js-masked-taxid").add(".js-masked-ssn").add(".js-masked-pkey").add(".js-masked-time").addClass("js-masked-enabled");
                    break;
                case"select2":
                    jQuery(".js-select2:not(.js-select2-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-select2-enabled"), e.select2()
                    });
                    break;
                case"highlightjs":
                    hljs.isHighlighted || hljs.initHighlighting();
                    break;
                case"notify":
                    jQuery(".js-notify:not(.js-notify-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-notify-enabled"), e.on("click.cb.helpers", function () {
                            var e = jQuery(this);
                            jQuery.notify({
                                icon: e.data("icon") || "",
                                message: e.data("message"),
                                url: e.data("url") || ""
                            }, {
                                element: "body",
                                type: e.data("type") || "info",
                                allow_dismiss: !0,
                                newest_on_top: !0,
                                showProgressbar: !1,
                                placement: {from: e.data("from") || "top", align: e.data("align") || "right"},
                                offset: 20,
                                spacing: 10,
                                z_index: 1033,
                                delay: 5e3,
                                timer: 1e3,
                                template: '<div data-notify="container" class="col-11 col-sm-3 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
                                animate: {enter: "animated fadeIn", exit: "animated fadeOutDown"}
                            })
                        })
                    });
                    break;
                case"draggable-items":
                    jQuery(".js-draggable-items:not(.js-draggable-items-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-draggable-items-enabled"), e.children(".draggable-column").sortable({
                            connectWith: ".draggable-column",
                            items: ".draggable-item",
                            dropOnEmpty: !0,
                            opacity: .75,
                            handle: ".draggable-handler",
                            placeholder: "draggable-placeholder",
                            tolerance: "pointer",
                            start: function (e, t) {
                                t.placeholder.css({
                                    height: t.item.outerHeight(),
                                    "margin-bottom": t.item.css("margin-bottom")
                                })
                            }
                        })
                    });
                    break;
                case"easy-pie-chart":
                    jQuery(".js-pie-chart:not(.js-pie-chart-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-pie-chart-enabled"), e.easyPieChart({
                            barColor: e.data("bar-color") || "#777777",
                            trackColor: e.data("track-color") || "#eeeeee",
                            lineWidth: e.data("line-width") || 3,
                            size: e.data("size") || "80",
                            animate: e.data("animate") || 750,
                            scaleColor: e.data("scale-color") || !1
                        })
                    });
                    break;
                case"maxlength":
                    jQuery(".js-maxlength:not(.js-maxlength-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-maxlength-enabled"), e.maxlength({
                            alwaysShow: !!e.data("always-show"),
                            threshold: e.data("threshold") || 10,
                            warningClass: e.data("warning-class") || "badge badge-warning",
                            limitReachedClass: e.data("limit-reached-class") || "badge badge-danger",
                            placement: e.data("placement") || "bottom",
                            preText: e.data("pre-text") || "",
                            separator: e.data("separator") || "/",
                            postText: e.data("post-text") || ""
                        })
                    });
                    break;
                case"rangeslider":
                    jQuery(".js-rangeslider:not(.js-rangeslider-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-rangeslider-enabled"), e.ionRangeSlider({input_values_separator: ";"})
                    });
                    break;
                case"summernote":
                    jQuery(".js-summernote-air:not(.js-summernote-air-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-summernote-air-enabled"), e.summernote({airMode: !0, tooltip: !1})
                    }), jQuery(".js-summernote:not(.js-summernote-enabled)").each(function () {
                        var e = jQuery(this);
                        e.addClass("js-summernote-enabled"), e.summernote({
                            height: 350,
                            minHeight: null,
                            maxHeight: null
                        })
                    });
                    break;
                default:
                    return !1
            }
            var t
        }, helpers: function (e) {
            if (e instanceof Array) for (var t in e) Codebase.helper(e[t]); else Codebase.helper(e)
        }
    }
}();
jQuery(function () {
    "undefined" == typeof angular && Codebase.init()
});