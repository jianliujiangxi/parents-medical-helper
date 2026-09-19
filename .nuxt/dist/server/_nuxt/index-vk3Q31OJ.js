import { a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useHead } from "./v3-CdLVj83h.js";
import "/home/lj/githubs/parents-medical-helper/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/lj/githubs/parents-medical-helper/node_modules/hookable/dist/index.mjs";
import "/home/lj/githubs/parents-medical-helper/node_modules/unctx/dist/index.mjs";
import "/home/lj/githubs/parents-medical-helper/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/lj/githubs/parents-medical-helper/node_modules/defu/dist/defu.mjs";
import "/home/lj/githubs/parents-medical-helper/node_modules/ufo/dist/index.mjs";
import "/home/lj/githubs/parents-medical-helper/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "首页" });
    const common = [
      { label: "爸妈长期住在外地", q: { reason: "long_term", stage: "before" } },
      { label: "已经住院但没备案", q: { reason: "temporary", stage: "hospitalized", filingStatus: "none" } },
      { label: "突然在外地急诊", q: { reason: "emergency", stage: "hospitalized" } },
      { label: "已经自费出院了", q: { reason: "temporary", stage: "discharged" } }
    ];
    function linkFor(extra) {
      return { path: "/wizard", query: extra };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="hero"><div class="trust-pill">只依据官方公开规则 · 最后核验 2026-09-19</div><h1>爸妈去外地看病，<br>不知道医保下一步怎么办？</h1><p class="lead">回答几个简单问题，生成一张可以照着办理、转给家人、打印出来的办事清单。</p><div class="hero-actions">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "primary-button",
        to: "/wizard?actor=parent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`帮爸妈看看怎么处理`);
          } else {
            return [
              createTextVNode("帮爸妈看看怎么处理")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "secondary-button",
        to: "/wizard?actor=self"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`我自己办理`);
          } else {
            return [
              createTextVNode("我自己办理")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="privacy-note">不需要姓名、身份证号、医保号、病历或手机号。</p></section><section class="section-block"><h2>常见情况</h2><div class="scenario-grid"><!--[-->`);
      ssrRenderList(common, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.label,
          class: "scenario-card",
          to: linkFor(item.q)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)} <span${_scopeId}>→</span>`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label) + " ", 1),
                createVNode("span", null, "→")
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section><section class="notice-box"><strong>当前 V0.1 重点验证：</strong> 江西参保 → 广州就医。国家统一规则可供其他跨省场景参考，但涉及地方待遇时会明确提示向参保地核验。 </section><section class="section-block"><h2>这不是另一个医保办理系统</h2><p>国家医保平台负责真实备案、查询和结算；本工具只负责把“我家现在这种情况应该先做什么”翻译成清晰步骤，并把你送到正确的官方入口。</p><div class="guide-links">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/guide/jiangxi-guangzhou-inpatient" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`江西医保去广州住院怎么办？`);
          } else {
            return [
              createTextVNode("江西医保去广州住院怎么办？")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/guide/hospitalized-without-filing" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`已经住院没备案怎么办？`);
          } else {
            return [
              createTextVNode("已经住院没备案怎么办？")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/guide/cross-province-emergency" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`外地突然急诊怎么办？`);
          } else {
            return [
              createTextVNode("外地突然急诊怎么办？")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/guide/discharged-self-pay" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`已经自费出院怎么办？`);
          } else {
            return [
              createTextVNode("已经自费出院怎么办？")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-vk3Q31OJ.js.map
