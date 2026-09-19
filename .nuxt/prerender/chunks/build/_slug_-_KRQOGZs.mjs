import { u as useRoute, c as createError, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, computed, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///home/lj/githubs/parents-medical-helper/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'file:///home/lj/githubs/parents-medical-helper/node_modules/vue/server-renderer/index.mjs';
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

const GUIDES = {
  "jiangxi-guangzhou-inpatient": {
    title: "\u6C5F\u897F\u533B\u4FDD\u8001\u4EBA\u53BB\u5E7F\u5DDE\u4F4F\u9662\u600E\u4E48\u529E\uFF1F",
    description: "\u6700\u7B80\u5355\u7684\u987A\u5E8F\u662F\uFF1A\u5148\u67E5\u5907\u6848 \u2192 \u6309\u5B9E\u9645\u60C5\u5F62\u5907\u6848 \u2192 \u67E5\u76EE\u6807\u533B\u9662\u662F\u5426\u8054\u7F51 \u2192 \u6301\u533B\u4FDD\u7801/\u793E\u4FDD\u5361\u5C31\u533B\u3002\u5177\u4F53\u5F85\u9047\u770B\u6C5F\u897F\u53C2\u4FDD\u5730\u653F\u7B56\u3002",
    points: ["\u5148\u67E5\u8BE2\u73B0\u6709\u5F02\u5730\u5C31\u533B\u5907\u6848\u662F\u5426\u6709\u6548\u3002", "\u6CA1\u6709\u6709\u6548\u5907\u6848\u65F6\uFF0C\u6309\u8001\u4EBA\u771F\u5B9E\u60C5\u51B5\u9009\u62E9\u957F\u671F\u5C45\u4F4F\u3001\u8F6C\u8BCA\u6216\u4E34\u65F6\u5916\u51FA\u7B49\u5907\u6848\u7C7B\u578B\u3002", "\u901A\u8FC7\u56FD\u5BB6\u533B\u4FDD\u5B98\u65B9\u6E20\u9053\u786E\u8BA4\u76EE\u6807\u533B\u9662\u652F\u6301\u8DE8\u7701\u4F4F\u9662\u76F4\u63A5\u7ED3\u7B97\u3002", "\u5165\u9662\u65F6\u4E3B\u52A8\u8BF4\u660E\u53C2\u4FDD\u5730\u5E76\u8981\u6C42\u6309\u8DE8\u7701\u533B\u4FDD\u7ED3\u7B97\u6D41\u7A0B\u529E\u7406\u3002", "\u62A5\u9500\u6BD4\u4F8B\u3001\u8D77\u4ED8\u7EBF\u7B49\u4E0D\u8981\u7528\u7F51\u4E0A\u901A\u7528\u6570\u5B57\u4EE3\u66FF\u6C5F\u897F\u53C2\u4FDD\u5730\u89C4\u5219\u3002"],
    query: { reason: "long_term", careType: "inpatient", stage: "before", filingStatus: "unknown" }
  },
  "hospitalized-without-filing": {
    title: "\u5DF2\u7ECF\u5728\u5916\u7701\u4F4F\u9662\uFF0C\u5374\u6CA1\u529E\u5F02\u5730\u5907\u6848\u600E\u4E48\u529E\uFF1F",
    description: "\u5982\u679C\u4ECD\u672A\u51FA\u9662\uFF0C\u5148\u786E\u8BA4\u533B\u9662\u662F\u5426\u4E3A\u8DE8\u7701\u8054\u7F51\u5B9A\u70B9\uFF0C\u518D\u5C3D\u5FEB\u5728\u51FA\u9662\u7ED3\u7B97\u524D\u8865\u5907\u6848\uFF0C\u5E76\u8BA9\u533B\u9662\u533B\u4FDD\u529E\u91CD\u65B0\u6838\u9A8C\u3002",
    points: ["\u5148\u786E\u8BA4\u6240\u5728\u533B\u9662\u662F\u5426\u652F\u6301\u5BF9\u5E94\u8DE8\u7701\u4F4F\u9662\u76F4\u63A5\u7ED3\u7B97\u3002", "\u5982\u679C\u8FD8\u6CA1\u51FA\u9662\uFF0C\u5C3D\u5FEB\u901A\u8FC7\u5B98\u65B9\u6E20\u9053\u8865\u529E\u5F02\u5730\u5907\u6848\u3002", "\u5907\u6848\u5B8C\u6210\u540E\u8054\u7CFB\u533B\u9662\u533B\u4FDD\u529E\u91CD\u65B0\u6838\u9A8C\uFF0C\u4E0D\u8981\u7B49\u5230\u6700\u540E\u4E00\u523B\u3002", "\u82E5\u7CFB\u7EDF\u4ECD\u65E0\u6CD5\u7ED3\u7B97\uFF0C\u5148\u8BA9\u533B\u9662\u660E\u786E\u5931\u8D25\u539F\u56E0\uFF0C\u518D\u8054\u7CFB\u53C2\u4FDD\u5730\u533B\u4FDD\u7ECF\u529E\u673A\u6784\u3002"],
    query: { reason: "temporary", careType: "inpatient", stage: "hospitalized", filingStatus: "none" }
  },
  "cross-province-emergency": {
    title: "\u8001\u4EBA\u5728\u5916\u7701\u7A81\u7136\u6025\u8BCA\uFF0C\u533B\u4FDD\u600E\u4E48\u529E\uFF1F",
    description: "\u6025\u8BCA\u62A2\u6551\u5148\u5C31\u533B\u3002\u56FD\u5BB6\u89C4\u5219\u660E\u786E\u5F02\u5730\u6025\u8BCA\u62A2\u6551\u4EBA\u5458\u89C6\u540C\u5DF2\u5907\u6848\uFF0C\u4F46\u5177\u4F53\u6025\u8BCA\u6807\u8BC6\u548C\u7ED3\u7B97\u7531\u533B\u7597\u673A\u6784\u4E0E\u533B\u4FDD\u7CFB\u7EDF\u786E\u8BA4\u3002",
    points: ["\u4E0D\u8981\u4E3A\u4E86\u5148\u529E\u5907\u6848\u803D\u8BEF\u6025\u8BCA\u6551\u6CBB\u3002", "\u5C31\u8BCA/\u5165\u9662\u65F6\u4E3B\u52A8\u8BF4\u660E\u5F02\u5730\u533B\u4FDD\u8EAB\u4EFD\u5E76\u51FA\u793A\u533B\u4FDD\u7801\u6216\u793E\u4FDD\u5361\u3002", "\u5411\u533B\u9662\u533B\u4FDD\u529E\u786E\u8BA4\u7CFB\u7EDF\u662F\u5426\u6309\u6025\u8BCA\u60C5\u5F62\u4E0A\u4F20\u5E76\u80FD\u5426\u76F4\u63A5\u7ED3\u7B97\u3002", "\u7ED3\u7B97\u5F02\u5E38\u65F6\u518D\u8054\u7CFB\u53C2\u4FDD\u5730\u533B\u4FDD\u7ECF\u529E\u673A\u6784\u6838\u9A8C\u5F85\u9047\u548C\u4E1A\u52A1\u72B6\u6001\u3002"],
    query: { reason: "emergency", careType: "inpatient", stage: "hospitalized", filingStatus: "none" }
  },
  "discharged-self-pay": {
    title: "\u8001\u4EBA\u5DF2\u7ECF\u81EA\u8D39\u51FA\u9662\uFF0C\u5F02\u5730\u533B\u4FDD\u8FD8\u80FD\u600E\u4E48\u529E\uFF1F",
    description: "\u5148\u4FDD\u5B58\u5B8C\u6574\u7968\u636E\u548C\u533B\u7597\u8D44\u6599\uFF0C\u518D\u6309\u6C5F\u897F\u5177\u4F53\u53C2\u4FDD\u7EDF\u7B79\u5730\u533A\u89C4\u5219\u786E\u8BA4\u624B\u5DE5/\u96F6\u661F\u62A5\u9500\u8D44\u683C\u3001\u6750\u6599\u3001\u65F6\u9650\u548C\u6E20\u9053\u3002",
    points: ["\u4FDD\u5B58\u6536\u8D39\u7968\u636E\u3001\u8D39\u7528\u6E05\u5355\u3001\u51FA\u9662\u8BB0\u5F55\u7B49\u8D44\u6599\u3002", "\u4E0D\u8981\u6839\u636E\u7B2C\u4E09\u65B9\u6587\u7AE0\u5224\u65AD\u201C\u4E00\u5B9A\u80FD\u62A5\u201D\u6216\u56FA\u5B9A\u6BD4\u4F8B\u3002", "\u901A\u8FC7\u6C5F\u897F\u533B\u4FDD\u5B98\u65B9\u6E20\u9053\u627E\u5230\u53C2\u4FDD\u5730\u5177\u4F53\u529E\u7406\u89C4\u5219\u3002", "\u5FC5\u8981\u65F6\u8054\u7CFB\u53C2\u4FDD\u5730\u533B\u4FDD\u7ECF\u529E\u673A\u6784\u786E\u8BA4\u6750\u6599\u3001\u65F6\u9650\u548C\u529E\u7406\u65B9\u5F0F\u3002"],
    query: { reason: "temporary", careType: "inpatient", stage: "discharged", filingStatus: "none" }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const guide = computed(() => GUIDES[String(route.params.slug)]);
    if (!guide.value) throw createError({ statusCode: 404, statusMessage: "\u6307\u5357\u4E0D\u5B58\u5728" });
    useHead(() => ({ title: guide.value.title, meta: [{ name: "description", content: guide.value.description }] }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (unref(guide)) {
        _push(`<article${ssrRenderAttrs(mergeProps({ class: "guide-article" }, _attrs))}><div class="trust-pill">\u5B98\u65B9\u89C4\u5219\u6574\u7406 \xB7 2026-09-19 \u6838\u9A8C</div><h1>${ssrInterpolate(unref(guide).title)}</h1><p class="lead">${ssrInterpolate(unref(guide).description)}</p><ol class="guide-steps"><!--[-->`);
        ssrRenderList(unref(guide).points, (point) => {
          _push(`<li>${ssrInterpolate(point)}</li>`);
        });
        _push(`<!--]--></ol><div class="notice-box"><strong>\u63D0\u9192\uFF1A</strong>\u672C\u9875\u53EA\u7ED9\u901A\u7528\u884C\u52A8\u987A\u5E8F\uFF0C\u5177\u4F53\u5F85\u9047\u548C\u6750\u6599\u4ECD\u4EE5\u53C2\u4FDD\u5730\u6700\u65B0\u653F\u7B56\u4E3A\u51C6\u3002</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "primary-button",
          to: { path: "/wizard", query: unref(guide).query }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u752830\u79D2\u5224\u65AD\u6211\u7684\u60C5\u51B5`);
            } else {
              return [
                createTextVNode("\u752830\u79D2\u5224\u65AD\u6211\u7684\u60C5\u51B5")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/sources" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u67E5\u770B\u5168\u90E8\u5B98\u65B9\u4F9D\u636E \u2192`);
            } else {
              return [
                createTextVNode("\u67E5\u770B\u5168\u90E8\u5B98\u65B9\u4F9D\u636E \u2192")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p></article>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/guide/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-_KRQOGZs.mjs.map
