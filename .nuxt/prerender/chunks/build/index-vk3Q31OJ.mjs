import { a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'file:///home/lj/githubs/parents-medical-helper/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///home/lj/githubs/parents-medical-helper/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-CdLVj83h.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/h3/dist/index.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/destr/dist/index.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/hookable/dist/index.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/unstorage/dist/index.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'node:fs/promises';
import 'node:path';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/ohash/dist/index.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/klona/dist/index.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/defu/dist/defu.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/scule/dist/index.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/unctx/dist/index.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/pathe/dist/index.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/devalue/index.js';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/unhead/dist/utils.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "\u9996\u9875" });
    const common = [
      { label: "\u7238\u5988\u957F\u671F\u4F4F\u5728\u5916\u5730", q: { reason: "long_term", stage: "before" } },
      { label: "\u5DF2\u7ECF\u4F4F\u9662\u4F46\u6CA1\u5907\u6848", q: { reason: "temporary", stage: "hospitalized", filingStatus: "none" } },
      { label: "\u7A81\u7136\u5728\u5916\u5730\u6025\u8BCA", q: { reason: "emergency", stage: "hospitalized" } },
      { label: "\u5DF2\u7ECF\u81EA\u8D39\u51FA\u9662\u4E86", q: { reason: "temporary", stage: "discharged" } }
    ];
    function linkFor(extra) {
      return { path: "/wizard", query: extra };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><section class="hero"><div class="trust-pill">\u53EA\u4F9D\u636E\u5B98\u65B9\u516C\u5F00\u89C4\u5219 \xB7 \u6700\u540E\u6838\u9A8C 2026-09-19</div><h1>\u7238\u5988\u53BB\u5916\u5730\u770B\u75C5\uFF0C<br>\u4E0D\u77E5\u9053\u533B\u4FDD\u4E0B\u4E00\u6B65\u600E\u4E48\u529E\uFF1F</h1><p class="lead">\u56DE\u7B54\u51E0\u4E2A\u7B80\u5355\u95EE\u9898\uFF0C\u751F\u6210\u4E00\u5F20\u53EF\u4EE5\u7167\u7740\u529E\u7406\u3001\u8F6C\u7ED9\u5BB6\u4EBA\u3001\u6253\u5370\u51FA\u6765\u7684\u529E\u4E8B\u6E05\u5355\u3002</p><div class="hero-actions">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "primary-button",
        to: "/wizard?actor=parent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5E2E\u7238\u5988\u770B\u770B\u600E\u4E48\u5904\u7406`);
          } else {
            return [
              createTextVNode("\u5E2E\u7238\u5988\u770B\u770B\u600E\u4E48\u5904\u7406")
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
            _push2(`\u6211\u81EA\u5DF1\u529E\u7406`);
          } else {
            return [
              createTextVNode("\u6211\u81EA\u5DF1\u529E\u7406")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="privacy-note">\u4E0D\u9700\u8981\u59D3\u540D\u3001\u8EAB\u4EFD\u8BC1\u53F7\u3001\u533B\u4FDD\u53F7\u3001\u75C5\u5386\u6216\u624B\u673A\u53F7\u3002</p></section><section class="section-block"><h2>\u5E38\u89C1\u60C5\u51B5</h2><div class="scenario-grid"><!--[-->`);
      ssrRenderList(common, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.label,
          class: "scenario-card",
          to: linkFor(item.q)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)} <span${_scopeId}>\u2192</span>`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label) + " ", 1),
                createVNode("span", null, "\u2192")
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section><section class="notice-box"><strong>\u5F53\u524D V0.1 \u91CD\u70B9\u9A8C\u8BC1\uFF1A</strong> \u6C5F\u897F\u53C2\u4FDD \u2192 \u5E7F\u5DDE\u5C31\u533B\u3002\u56FD\u5BB6\u7EDF\u4E00\u89C4\u5219\u53EF\u4F9B\u5176\u4ED6\u8DE8\u7701\u573A\u666F\u53C2\u8003\uFF0C\u4F46\u6D89\u53CA\u5730\u65B9\u5F85\u9047\u65F6\u4F1A\u660E\u786E\u63D0\u793A\u5411\u53C2\u4FDD\u5730\u6838\u9A8C\u3002 </section><section class="section-block"><h2>\u8FD9\u4E0D\u662F\u53E6\u4E00\u4E2A\u533B\u4FDD\u529E\u7406\u7CFB\u7EDF</h2><p>\u56FD\u5BB6\u533B\u4FDD\u5E73\u53F0\u8D1F\u8D23\u771F\u5B9E\u5907\u6848\u3001\u67E5\u8BE2\u548C\u7ED3\u7B97\uFF1B\u672C\u5DE5\u5177\u53EA\u8D1F\u8D23\u628A\u201C\u6211\u5BB6\u73B0\u5728\u8FD9\u79CD\u60C5\u51B5\u5E94\u8BE5\u5148\u505A\u4EC0\u4E48\u201D\u7FFB\u8BD1\u6210\u6E05\u6670\u6B65\u9AA4\uFF0C\u5E76\u628A\u4F60\u9001\u5230\u6B63\u786E\u7684\u5B98\u65B9\u5165\u53E3\u3002</p><div class="guide-links">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/guide/jiangxi-guangzhou-inpatient" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6C5F\u897F\u533B\u4FDD\u53BB\u5E7F\u5DDE\u4F4F\u9662\u600E\u4E48\u529E\uFF1F`);
          } else {
            return [
              createTextVNode("\u6C5F\u897F\u533B\u4FDD\u53BB\u5E7F\u5DDE\u4F4F\u9662\u600E\u4E48\u529E\uFF1F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/guide/hospitalized-without-filing" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5DF2\u7ECF\u4F4F\u9662\u6CA1\u5907\u6848\u600E\u4E48\u529E\uFF1F`);
          } else {
            return [
              createTextVNode("\u5DF2\u7ECF\u4F4F\u9662\u6CA1\u5907\u6848\u600E\u4E48\u529E\uFF1F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/guide/cross-province-emergency" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5916\u5730\u7A81\u7136\u6025\u8BCA\u600E\u4E48\u529E\uFF1F`);
          } else {
            return [
              createTextVNode("\u5916\u5730\u7A81\u7136\u6025\u8BCA\u600E\u4E48\u529E\uFF1F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/guide/discharged-self-pay" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5DF2\u7ECF\u81EA\u8D39\u51FA\u9662\u600E\u4E48\u529E\uFF1F`);
          } else {
            return [
              createTextVNode("\u5DF2\u7ECF\u81EA\u8D39\u51FA\u9662\u600E\u4E48\u529E\uFF1F")
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

export { _sfc_main as default };
//# sourceMappingURL=index-vk3Q31OJ.mjs.map
