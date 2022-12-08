"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const _pluginVue_exportHelper = require("./plugin-vue_export-helper.3a1da329.js");
const VueAvatar = require("./VueAvatar.e55f6956.js");
(function dedupeRequire(dedupe) {
  const Module = require("node:module");
  const resolveFilename = Module._resolveFilename;
  Module._resolveFilename = function(request, parent, isMain, options) {
    if (request[0] !== "." && request[0] !== "/") {
      const parts = request.split("/");
      const pkgName = parts[0][0] === "@" ? parts[0] + "/" + parts[1] : parts[0];
      if (dedupe.includes(pkgName)) {
        parent = module;
      }
    }
    return resolveFilename(request, parent, isMain, options);
  };
})(["vue"]);
const __pageData = JSON.parse('{"title":"Lighten","description":"","frontmatter":{},"headers":[{"level":2,"title":"Code example","slug":"code-example","link":"#code-example","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]}],"relativePath":"guide/lighten.md"}');
const __default__ = { name: "guide/lighten.md" };
const _sfc_main = Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${_pluginVue_exportHelper.ssrRenderAttrs(_attrs)}><h1 id="lighten" tabindex="-1">Lighten <a class="header-anchor" href="#lighten" aria-hidden="true">#</a></h1><p>A factor by which the background color must be lightened to produce the font color.</p><table><thead><tr><th>Prop name</th><th>Type</th><th>Default value</th></tr></thead><tbody><tr><td>lighten</td><td>Number between <code>[-200,200]</code></td><td><code>150</code></td></tr></tbody></table><h2 id="code-example" tabindex="-1">Code example <a class="header-anchor" href="#code-example" aria-hidden="true">#</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#F07178" })}">vue-avatar</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}"> </span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#C792EA" })}">username</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#C3E88D" })}">Some User</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#C792EA" })}">lighten</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#F78C6C" })}">10</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#F07178" })}">vue-avatar</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}"> </span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#C792EA" })}">username</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#C3E88D" })}">Some User</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#C792EA" })}">lighten</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#F78C6C" })}">50</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#F07178" })}">vue-avatar</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}"> </span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#C792EA" })}">username</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#C3E88D" })}">Some User</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#C792EA" })}">lighten</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#F78C6C" })}">100</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div style="${_pluginVue_exportHelper.ssrRenderStyle({ "padding": "16px 0", "display": "flex", "gap": "8px" })}">`);
      _push(_pluginVue_exportHelper.ssrRenderComponent(VueAvatar.VueAvatar, {
        username: "Some User",
        lighten: 10
      }, null, _parent));
      _push(_pluginVue_exportHelper.ssrRenderComponent(VueAvatar.VueAvatar, {
        username: "Some User",
        lighten: 50
      }, null, _parent));
      _push(_pluginVue_exportHelper.ssrRenderComponent(VueAvatar.VueAvatar, {
        username: "Some User",
        lighten: 100
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = _pluginVue_exportHelper.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/lighten.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.__pageData = __pageData;
exports.default = _sfc_main;
