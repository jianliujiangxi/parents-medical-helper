import { defineComponent, reactive, ref, computed, mergeProps, unref, useSSRContext } from 'file:///home/lj/githubs/parents-medical-helper/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'file:///home/lj/githubs/parents-medical-helper/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-CdLVj83h.mjs';
import { u as useRoute, b as useRouter } from './server.mjs';
import '../_/renderer.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/h3/dist/index.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/destr/dist/index.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/hookable/dist/index.mjs';
import 'file:///home/lj/githubs/parents-medical-helper/node_modules/ofetch/dist/node.mjs';
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
  __name: "wizard",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "30\u79D2\u5224\u65AD\u60C5\u51B5" });
    const route = useRoute();
    useRouter();
    const ctx = reactive({
      actor: route.query.actor === "self" ? "self" : "parent",
      insuranceProvince: "jiangxi",
      insuranceCity: "",
      destinationProvince: "guangdong",
      destinationCity: "guangzhou",
      insuranceType: "unknown",
      reason: "long_term",
      careType: "inpatient",
      stage: "before",
      filingStatus: "unknown",
      networkStatus: "unknown"
    });
    if (typeof route.query.reason === "string") ctx.reason = route.query.reason;
    if (typeof route.query.stage === "string") ctx.stage = route.query.stage;
    if (typeof route.query.filingStatus === "string") ctx.filingStatus = route.query.filingStatus;
    const questions = [
      { key: "actor", title: "\u8FD9\u6B21\u662F\u5E2E\u8C01\u770B\uFF1F", options: [["parent", "\u5E2E\u7238\u5988"], ["self", "\u6211\u81EA\u5DF1"]] },
      { key: "insuranceType", title: "\u8001\u4EBA\u53C2\u52A0\u54EA\u79CD\u57FA\u672C\u533B\u4FDD\uFF1F", options: [["employee", "\u804C\u5DE5\u533B\u4FDD"], ["resident", "\u57CE\u4E61\u5C45\u6C11\u533B\u4FDD"], ["unknown", "\u4E0D\u77E5\u9053"]] },
      { key: "reason", title: "\u4E3A\u4EC0\u4E48\u8981\u5728\u5916\u7701\u5C31\u533B\uFF1F", options: [["long_term", "\u957F\u671F\u5728\u5E7F\u5DDE\u751F\u6D3B"], ["referral", "\u672C\u5730\u533B\u9662\u5EFA\u8BAE\u8F6C\u5916\u7701"], ["temporary", "\u4E34\u65F6\u53BB\u5916\u7701\u770B\u75C5"], ["emergency", "\u7A81\u7136\u6025\u8BCA/\u62A2\u6551"], ["unknown", "\u8BF4\u4E0D\u6E05"]] },
      { key: "careType", title: "\u8FD9\u6B21\u4E3B\u8981\u662F\u54EA\u79CD\u5C31\u533B\uFF1F", options: [["inpatient", "\u4F4F\u9662"], ["outpatient", "\u666E\u901A\u95E8\u8BCA"], ["chronic", "\u95E8\u8BCA\u6162\u7279\u75C5"]] },
      { key: "stage", title: "\u73B0\u5728\u5230\u54EA\u4E00\u6B65\u4E86\uFF1F", options: [["before", "\u8FD8\u6CA1\u53BB/\u8FD8\u6CA1\u4F4F\u9662"], ["hospitalized", "\u5DF2\u7ECF\u4F4F\u9662/\u6B63\u5728\u5C31\u533B"], ["discharged", "\u5DF2\u7ECF\u81EA\u8D39\u7ED3\u7B97\u51FA\u9662"]] },
      { key: "filingStatus", title: "\u5F02\u5730\u5C31\u533B\u5907\u6848\u72B6\u6001\uFF1F", options: [["valid", "\u786E\u8BA4\u6709\u6709\u6548\u5907\u6848"], ["none", "\u786E\u8BA4\u6CA1\u6709\u5907\u6848"], ["unknown", "\u4E0D\u77E5\u9053"]] },
      { key: "networkStatus", title: "\u76EE\u6807\u533B\u9662\u662F\u5426\u652F\u6301\u5BF9\u5E94\u8DE8\u7701\u76F4\u63A5\u7ED3\u7B97\uFF1F", options: [["yes", "\u786E\u8BA4\u652F\u6301"], ["no", "\u786E\u8BA4\u4E0D\u652F\u6301"], ["unknown", "\u8FD8\u6CA1\u67E5"]] }
    ];
    const step = ref(0);
    const current = computed(() => questions[step.value]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wizard" }, _attrs))}><div class="progress"><span style="${ssrRenderStyle({ width: `${(unref(step) + 1) / questions.length * 100}%` })}"></span></div><p class="progress-text">${ssrInterpolate(unref(step) + 1)} / ${ssrInterpolate(questions.length)}</p><h1>${ssrInterpolate(unref(current).title)}</h1>`);
      if (unref(step) === 1) {
        _push(`<p class="helper">\u4E0D\u77E5\u9053\u4E5F\u53EF\u4EE5\u9009\u201C\u4E0D\u77E5\u9053\u201D\uFF0C\u7CFB\u7EDF\u4E0D\u4F1A\u56E0\u6B64\u7F16\u9020\u62A5\u9500\u6BD4\u4F8B\u3002</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="option-stack"><!--[-->`);
      ssrRenderList(unref(current).options, (opt) => {
        _push(`<button class="option-button" type="button">${ssrInterpolate(opt[1])}</button>`);
      });
      _push(`<!--]--></div><div class="wizard-nav">`);
      if (unref(step) > 0) {
        _push(`<button class="ghost-button" type="button">\u2190 \u4E0A\u4E00\u6B65</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="ghost-button" type="button">\u76F4\u63A5\u770B\u7ED3\u679C</button></div><p class="small-muted">\u521D\u7248\u9ED8\u8BA4\uFF1A\u6C5F\u897F\u53C2\u4FDD\u3001\u5E7F\u4E1C\u5E7F\u5DDE\u5C31\u533B\u3002\u540E\u7EED\u4F1A\u628A\u53C2\u4FDD\u5730/\u5C31\u533B\u5730\u9009\u62E9\u505A\u6210\u5168\u56FD\u53EF\u914D\u7F6E\u3002</p></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=wizard-nHXigyKZ.mjs.map
