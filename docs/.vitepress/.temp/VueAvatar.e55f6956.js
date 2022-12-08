"use strict";
const _pluginVue_exportHelper = require("./plugin-vue_export-helper.3a1da329.js");
const _sfc_main = /* @__PURE__ */ _pluginVue_exportHelper.defineComponent({
  __name: "VueAvatar",
  __ssrInlineRender: true,
  props: {
    username: { default: "Vue Avatar" },
    size: { default: 50 },
    borderRadius: { default: "100%" },
    backgroundColor: { default: "#1aa9bf" },
    color: null,
    customStyles: null,
    lighten: { default: 150 },
    imgSrc: null,
    imgAlt: null
  },
  setup(__props) {
    const props = __props;
    const parsedUserName = _pluginVue_exportHelper.computed(() => {
      var _a;
      return (_a = props.username.match(/[A-Z]/g)) == null ? void 0 : _a.slice(0, 3).join("");
    });
    const avatarStyles = _pluginVue_exportHelper.computed(() => {
      return {
        width: `${props.size}px`,
        height: `${props.size}px`,
        borderRadius: props.borderRadius,
        fontSize: `${props.size / 2.2}px`,
        backgroundColor: props.backgroundColor,
        color: props.color || lightenColor(props.backgroundColor, props.lighten),
        ...props.customStyles
      };
    });
    const avatarClasses = _pluginVue_exportHelper.computed(() => {
      return [
        "vue-avatar",
        {
          "vue-avatar--rounded": props.borderRadius && props.borderRadius.length > 0
        }
      ];
    });
    const lightenColor = (backgroundColor, amt) => {
      let usePound = false;
      if (backgroundColor[0] === "#") {
        backgroundColor = backgroundColor.slice(1);
        usePound = true;
      }
      const num = parseInt(backgroundColor, 16);
      let r = (num >> 16) + amt;
      if (r > 255) {
        r = 255;
      } else if (r < 0) {
        r = 0;
      }
      let b = (num >> 8 & 255) + amt;
      if (b > 255) {
        b = 255;
      } else if (b < 0) {
        b = 0;
      }
      let g = (num & 255) + amt;
      if (g > 255) {
        g = 255;
      } else if (g < 0) {
        g = 0;
      }
      return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
    };
    const slots = _pluginVue_exportHelper.useSlots();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${_pluginVue_exportHelper.ssrRenderAttrs(_pluginVue_exportHelper.mergeProps({
        style: _pluginVue_exportHelper.unref(avatarStyles),
        class: _pluginVue_exportHelper.unref(avatarClasses)
      }, _attrs))} data-v-8626fa85>`);
      if (!_pluginVue_exportHelper.unref(slots).default && !props.imgSrc) {
        _push(`<!--[-->${_pluginVue_exportHelper.ssrInterpolate(_pluginVue_exportHelper.unref(parsedUserName))}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (__props.imgSrc && __props.imgSrc.length) {
        _push(`<img${_pluginVue_exportHelper.ssrRenderAttr("src", props.imgSrc)}${_pluginVue_exportHelper.ssrRenderAttr("alt", __props.imgAlt)} data-v-8626fa85>`);
      } else {
        _push(`<!---->`);
      }
      _pluginVue_exportHelper.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VueAvatar_vue_vue_type_style_index_0_scoped_8626fa85_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = _pluginVue_exportHelper.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/VueAvatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VueAvatar = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["__scopeId", "data-v-8626fa85"]]);
exports.VueAvatar = VueAvatar;
