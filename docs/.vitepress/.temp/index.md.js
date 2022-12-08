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
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Vue Avatar","tagline":"Simple avatar component for Vue 3","actions":[{"theme":"brand","text":"Get started","link":"/guide/install"},{"theme":"alt","text":"Github","link":"https://github.com/vaban-ru/vue-avatar"}]},"features":[{"icon":"\u26A1\uFE0F","title":"Simple","details":"Easy to use"},{"icon":"\u2696\uFE0F","title":"Light","details":"Less than 2kb"},{"icon":"\u2600\uFE0F","title":"Customize","details":"A lot of props"},{"icon":"\u2764\uFE0F","title":"Free","details":"Open Source"}]},"headers":[],"relativePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${_pluginVue_exportHelper.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = _pluginVue_exportHelper.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports.default = index;
