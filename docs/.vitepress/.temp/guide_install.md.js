"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const _pluginVue_exportHelper = require("./plugin-vue_export-helper.3a1da329.js");
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
const __pageData = JSON.parse('{"title":"Isntall & Usage","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install","link":"#install","children":[{"level":3,"title":"Yarn","slug":"yarn","link":"#yarn","children":[]},{"level":3,"title":"Npm","slug":"npm","link":"#npm","children":[]}]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Vue 3","slug":"vue-3","link":"#vue-3","children":[]}]}],"relativePath":"guide/install.md"}');
const _sfc_main = { name: "guide/install.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${_pluginVue_exportHelper.ssrRenderAttrs(_attrs)}><h1 id="isntall-usage" tabindex="-1">Isntall &amp; Usage <a class="header-anchor" href="#isntall-usage" aria-hidden="true">#</a></h1><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><h3 id="yarn" tabindex="-1">Yarn <a class="header-anchor" href="#yarn" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#A6ACCD" })}">yarn add @webzlodimir/vue-avatar</span></span>
<span class="line"><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#A6ACCD" })}"></span></span></code></pre></div><h3 id="npm" tabindex="-1">Npm <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#A6ACCD" })}">npm i @webzlodimir/vue-avatar</span></span>
<span class="line"><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#A6ACCD" })}"></span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="vue-3" tabindex="-1">Vue 3 <a class="header-anchor" href="#vue-3" aria-hidden="true">#</a></h3><p>Just import component where you want</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">import</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">{</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#A6ACCD" })}">VueAvatar</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">}</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">from</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#C3E88D" })}">@webzlodimir/vue-avatar</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"></span></code></pre></div><p>And use it in <code>template</code> tag</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#F07178" })}">vue-avatar</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}"> </span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#C792EA" })}">username</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#C3E88D" })}">Simple User</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${_pluginVue_exportHelper.ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = _pluginVue_exportHelper.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/install.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const install = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports.default = install;
