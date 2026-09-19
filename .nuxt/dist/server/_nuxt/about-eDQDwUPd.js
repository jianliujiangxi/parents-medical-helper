import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { u as useHead } from "./v3-CdLVj83h.js";
import "/home/lj/githubs/parents-medical-helper/node_modules/@unhead/vue/dist/index.mjs";
import "../server.mjs";
import "/home/lj/githubs/parents-medical-helper/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/lj/githubs/parents-medical-helper/node_modules/hookable/dist/index.mjs";
import "/home/lj/githubs/parents-medical-helper/node_modules/unctx/dist/index.mjs";
import "/home/lj/githubs/parents-medical-helper/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/lj/githubs/parents-medical-helper/node_modules/defu/dist/defu.mjs";
import "/home/lj/githubs/parents-medical-helper/node_modules/ufo/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "关于项目" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><h1>关于这个公益项目</h1><p class="lead">目标不是替代政府，也不是做医疗咨询，而是把跨地区民生规则翻译成普通家庭能照着执行的步骤。</p><div class="notice-box"><strong>产品边界</strong><p>官方负责资格审核、备案、结算和待遇计算；本工具只负责“理解情况 → 给出下一步 → 链接官方入口 → 生成办事卡”。</p></div><p>项目计划保持免费、无广告、尽量少收数据。后续如接受自愿支持，也不与任何核心功能绑定。</p></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-eDQDwUPd.js.map
