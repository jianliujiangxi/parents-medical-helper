import { defineComponent, computed, ref, unref, mergeProps, useSSRContext } from 'file:///home/lj/githubs/parents-medical-helper/node_modules/vue/index.mjs';
import { ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs } from 'file:///home/lj/githubs/parents-medical-helper/node_modules/vue/server-renderer/index.mjs';
import { s as sourcesJson } from './sources-Cht0IMjG.mjs';
import { u as useRoute } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ActionStep",
  __ssrInlineRender: true,
  props: {
    step: {},
    index: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["step-card", `kind-${__props.step.kind}`]
      }, _attrs))}><div class="step-index">${ssrInterpolate(__props.index)}</div><div class="step-content"><h3>${ssrInterpolate(__props.step.title)}</h3><p>${ssrInterpolate(__props.step.body)}</p>`);
      if (__props.step.officialUrl) {
        _push(`<a class="official-link"${ssrRenderAttr("href", __props.step.officialUrl)} target="_blank" rel="noopener noreferrer">${ssrInterpolate(__props.step.officialLabel || "\u6253\u5F00\u5B98\u65B9\u5165\u53E3")} \u2197 </a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="source-mini">\u4F9D\u636E\uFF1A${ssrInterpolate(__props.step.sourceIds.join("\u3001"))}</p></div></article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionStep.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const defaults = {
  actor: "parent",
  insuranceProvince: "jiangxi",
  destinationProvince: "guangdong",
  destinationCity: "guangzhou",
  insuranceType: "unknown",
  reason: "long_term",
  careType: "inpatient",
  stage: "before",
  filingStatus: "unknown",
  networkStatus: "unknown"
};
function contextFromQuery(query) {
  var _a, _b, _c, _d;
  const get = (key, allowed, fallback) => {
    var _a2;
    const raw = String((_a2 = query[key]) != null ? _a2 : "");
    return allowed.includes(raw) ? raw : fallback;
  };
  return {
    actor: get("actor", ["self", "parent"], defaults.actor),
    insuranceProvince: String((_a = query.insuranceProvince) != null ? _a : defaults.insuranceProvince),
    insuranceCity: String((_b = query.insuranceCity) != null ? _b : ""),
    destinationProvince: String((_c = query.destinationProvince) != null ? _c : defaults.destinationProvince),
    destinationCity: String((_d = query.destinationCity) != null ? _d : defaults.destinationCity),
    insuranceType: get("insuranceType", ["employee", "resident", "unknown"], defaults.insuranceType),
    reason: get("reason", ["long_term", "referral", "temporary", "emergency", "unknown"], defaults.reason),
    careType: get("careType", ["inpatient", "outpatient", "chronic"], defaults.careType),
    stage: get("stage", ["before", "hospitalized", "discharged"], defaults.stage),
    filingStatus: get("filingStatus", ["valid", "none", "unknown"], defaults.filingStatus),
    networkStatus: get("networkStatus", ["yes", "no", "unknown"], defaults.networkStatus)
  };
}
const ACTIONS = {
  CHECK_FILING: {
    id: "CHECK_FILING",
    title: "\u5148\u786E\u8BA4\u6709\u6CA1\u6709\u6709\u6548\u5F02\u5730\u5907\u6848",
    kind: "check",
    body: "\u5148\u5728\u56FD\u5BB6\u533B\u4FDD\u5B98\u65B9\u6E20\u9053\u67E5\u8BE2\u5907\u6848\u8BB0\u5F55\u3002\u82E5\u5DF2\u7ECF\u6709\u8986\u76D6\u5F53\u524D\u5C31\u533B\u5730\u4E14\u4ECD\u6709\u6548\u7684\u5907\u6848\uFF0C\u4E0D\u8981\u91CD\u590D\u529E\u7406\u3002",
    sourceIds: ["NHSA-2025-GUIDE", "NPS-2025-MEDICAL"],
    officialUrl: "https://gjzwfw.www.gov.cn/col/col1576/index.html",
    officialLabel: "\u6253\u5F00\u56FD\u5BB6\u653F\u52A1\u670D\u52A1\u5E73\u53F0\u533B\u4FDD\u4E13\u533A"
  },
  APPLY_LONG_TERM: {
    id: "APPLY_LONG_TERM",
    title: "\u65E0\u6709\u6548\u5907\u6848\u65F6\uFF0C\u6309\u957F\u671F\u5C45\u4F4F\u60C5\u5F62\u529E\u7406\u5907\u6848",
    kind: "do",
    body: "\u5982\u679C\u8001\u4EBA\u957F\u671F\u5728\u53C2\u4FDD\u7701\u5916\u5C45\u4F4F\uFF0C\u4F18\u5148\u6309\u5B9E\u9645\u60C5\u51B5\u9009\u62E9\u957F\u671F\u5C45\u4F4F\u76F8\u5173\u5907\u6848\u7C7B\u578B\u3002\u6750\u6599\u548C\u5177\u4F53\u5BA1\u6838\u4EE5\u53C2\u4FDD\u5730\u9875\u9762\u63D0\u793A\u4E3A\u51C6\u3002",
    sourceIds: ["NHSA-2022-22", "NHSA-2025-GUIDE"],
    officialUrl: "https://fuwu.nhsa.gov.cn/",
    officialLabel: "\u6253\u5F00\u56FD\u5BB6\u533B\u4FDD\u670D\u52A1\u5E73\u53F0"
  },
  APPLY_TEMP: {
    id: "APPLY_TEMP",
    title: "\u6309\u5B9E\u9645\u60C5\u5F62\u529E\u7406\u4E34\u65F6\u5916\u51FA/\u8F6C\u8BCA\u5907\u6848",
    kind: "do",
    body: "\u4E34\u65F6\u5916\u51FA\u3001\u8F6C\u8BCA\u7B49\u60C5\u5F62\u5E94\u9009\u62E9\u4E0E\u5B9E\u9645\u60C5\u51B5\u76F8\u7B26\u7684\u5907\u6848\u7C7B\u578B\u3002\u4E0D\u540C\u53C2\u4FDD\u5730\u5BF9\u5F85\u9047\u548C\u8F6C\u8BCA\u6750\u6599\u53EF\u80FD\u6709\u5DEE\u5F02\u3002",
    sourceIds: ["NHSA-2022-22", "NHSA-2025-GUIDE"],
    officialUrl: "https://fuwu.nhsa.gov.cn/",
    officialLabel: "\u6253\u5F00\u56FD\u5BB6\u533B\u4FDD\u670D\u52A1\u5E73\u53F0"
  },
  CONFIRM_REFERRAL: {
    id: "CONFIRM_REFERRAL",
    title: "\u5982\u5C5E\u4E8E\u8F6C\u8BCA\uFF0C\u5148\u786E\u8BA4\u53C2\u4FDD\u5730\u8F6C\u8BCA\u8981\u6C42",
    kind: "check",
    body: "\u56FD\u5BB6\u89C4\u7A0B\u8981\u6C42\u5F02\u5730\u8F6C\u8BCA\u4EBA\u5458\u6309\u53C2\u4FDD\u5730\u89C4\u5B9A\u63D0\u4F9B\u8F6C\u8BCA\u8F6C\u9662\u8BC1\u660E\u6750\u6599\u3002\u8BF7\u4EE5\u6C5F\u897F\u5177\u4F53\u53C2\u4FDD\u7EDF\u7B79\u5730\u533A\u7684\u5B98\u65B9\u8981\u6C42\u4E3A\u51C6\u3002",
    sourceIds: ["NHSA-2022-22", "JIANGXI-SERVICE"],
    officialUrl: "https://ggfw.ybj.jiangxi.gov.cn/",
    officialLabel: "\u6253\u5F00\u6C5F\u897F\u533B\u4FDD\u7F51\u4E0A\u670D\u52A1\u5927\u5385"
  },
  CHECK_NETWORK: {
    id: "CHECK_NETWORK",
    title: "\u786E\u8BA4\u76EE\u6807\u533B\u9662\u652F\u6301\u76F8\u5E94\u7684\u8DE8\u7701\u76F4\u63A5\u7ED3\u7B97",
    kind: "check",
    body: "\u4E0D\u8981\u4EC5\u51ED\u533B\u9662\u540D\u79F0\u5224\u65AD\u3002\u8BF7\u901A\u8FC7\u56FD\u5BB6\u533B\u4FDD\u5B98\u65B9\u67E5\u8BE2\u786E\u8BA4\u76EE\u6807\u673A\u6784\u662F\u5426\u5DF2\u5F00\u901A\u4F60\u9700\u8981\u7684\u4F4F\u9662\u3001\u666E\u901A\u95E8\u8BCA\u6216\u95E8\u8BCA\u6162\u7279\u75C5\u8DE8\u7701\u7ED3\u7B97\u670D\u52A1\u3002",
    sourceIds: ["NHSA-2025-GUIDE", "GUANGZHOU-2025-CROSSPROVINCE"],
    officialUrl: "https://gjzwfw.www.gov.cn/col/col1576/index.html",
    officialLabel: "\u67E5\u8BE2\u8DE8\u7701\u8054\u7F51\u5B9A\u70B9\u673A\u6784"
  },
  PREPARE_CREDENTIAL: {
    id: "PREPARE_CREDENTIAL",
    title: "\u51C6\u5907\u533B\u4FDD\u7535\u5B50\u51ED\u8BC1\u6216\u793E\u4F1A\u4FDD\u969C\u5361",
    kind: "do",
    body: "\u5230\u8DE8\u7701\u8054\u7F51\u5B9A\u70B9\u533B\u836F\u673A\u6784\u5C31\u533B\u65F6\uFF0C\u4E3B\u52A8\u8868\u660E\u5F02\u5730\u53C2\u4FDD\u8EAB\u4EFD\uFF0C\u5E76\u6309\u533B\u9662\u8981\u6C42\u51FA\u793A\u533B\u4FDD\u7535\u5B50\u51ED\u8BC1\u6216\u793E\u4F1A\u4FDD\u969C\u5361\u7B49\u6709\u6548\u51ED\u8BC1\u3002",
    sourceIds: ["NHSA-2022-22"]
  },
  TELL_HOSPITAL: {
    id: "TELL_HOSPITAL",
    title: "\u5165\u9662/\u5C31\u8BCA\u65F6\u4E3B\u52A8\u8BF4\u660E\u9700\u8981\u8DE8\u7701\u533B\u4FDD\u76F4\u63A5\u7ED3\u7B97",
    kind: "do",
    body: "\u5C3D\u65E9\u5411\u533B\u9662\u6536\u8D39\u6216\u533B\u4FDD\u7A97\u53E3\u8BF4\u660E\u53C2\u4FDD\u5730\u548C\u8DE8\u7701\u7ED3\u7B97\u9700\u6C42\uFF0C\u907F\u514D\u5230\u51FA\u9662\u7ED3\u7B97\u65F6\u624D\u53D1\u73B0\u4FE1\u606F\u4E0D\u4E00\u81F4\u3002",
    sourceIds: ["NHSA-2022-22"]
  },
  EMERGENCY_FIRST: {
    id: "EMERGENCY_FIRST",
    title: "\u6025\u8BCA\u62A2\u6551\u65F6\u5148\u5C31\u533B\uFF0C\u4E0D\u8981\u4E3A\u4E86\u5907\u6848\u803D\u8BEF\u6CBB\u7597",
    kind: "warning",
    body: "\u56FD\u5BB6\u89C4\u5219\u660E\u786E\u5F02\u5730\u6025\u8BCA\u62A2\u6551\u4EBA\u5458\u89C6\u540C\u5DF2\u5907\u6848\u3002\u662F\u5426\u5C5E\u4E8E\u6025\u8BCA\u62A2\u6551\u4EE5\u53CA\u7CFB\u7EDF\u4E0A\u4F20\u6807\u8BC6\uFF0C\u7531\u533B\u7597\u673A\u6784\u548C\u533B\u4FDD\u4E1A\u52A1\u6D41\u7A0B\u786E\u8BA4\uFF0C\u672C\u5DE5\u5177\u4E0D\u4F5C\u533B\u5B66\u5224\u65AD\u3002",
    sourceIds: ["NHSA-2022-22"]
  },
  ASK_HOSPITAL_OFFICE: {
    id: "ASK_HOSPITAL_OFFICE",
    title: "\u7ED3\u7B97\u5F02\u5E38\u5148\u627E\u533B\u9662\u533B\u4FDD\u529E\u786E\u8BA4\u5177\u4F53\u5931\u8D25\u539F\u56E0",
    kind: "contact",
    body: "\u5148\u786E\u8BA4\u662F\u5426\u4E3A\u672A\u5907\u6848\u3001\u5907\u6848\u5730\u4E0D\u5339\u914D\u3001\u533B\u9662\u672A\u5F00\u901A\u5BF9\u5E94\u7ED3\u7B97\u7C7B\u578B\u3001\u53C2\u4FDD\u72B6\u6001\u6216\u7CFB\u7EDF\u4FE1\u606F\u95EE\u9898\uFF0C\u518D\u51B3\u5B9A\u4E0B\u4E00\u6B65\u627E\u53C2\u4FDD\u5730\u533B\u4FDD\u7ECF\u529E\u673A\u6784\u3002",
    sourceIds: ["NHSA-2022-22"]
  },
  COMPLETE_BEFORE_DISCHARGE: {
    id: "COMPLETE_BEFORE_DISCHARGE",
    title: "\u8FD8\u6CA1\u51FA\u9662\uFF1A\u5C3D\u5FEB\u5728\u7ED3\u7B97\u524D\u8865\u529E\u5907\u6848",
    kind: "do",
    body: "\u56FD\u5BB6\u7ECF\u529E\u89C4\u7A0B\u660E\u786E\uFF1A\u5728\u8DE8\u7701\u8054\u7F51\u5B9A\u70B9\u533B\u7597\u673A\u6784\u5DF2\u7ECF\u5165\u9662\u3001\u6B64\u524D\u672A\u5907\u6848\u7684\uFF0C\u82E5\u5728\u51FA\u9662\u7ED3\u7B97\u524D\u5B8C\u6210\u5907\u6848\uFF0C\u533B\u7597\u673A\u6784\u5E94\u63D0\u4F9B\u8DE8\u7701\u76F4\u63A5\u7ED3\u7B97\u670D\u52A1\u3002\u529E\u5B8C\u540E\u8BF7\u8BA9\u533B\u9662\u533B\u4FDD\u529E\u91CD\u65B0\u6838\u9A8C\u3002",
    sourceIds: ["NHSA-2022-22"],
    officialUrl: "https://fuwu.nhsa.gov.cn/",
    officialLabel: "\u53BB\u56FD\u5BB6\u533B\u4FDD\u5B98\u65B9\u5E73\u53F0\u529E\u7406/\u67E5\u8BE2"
  },
  SAVE_DOCUMENTS: {
    id: "SAVE_DOCUMENTS",
    title: "\u5DF2\u7ECF\u81EA\u8D39\u51FA\u9662\uFF1A\u5148\u628A\u7968\u636E\u548C\u533B\u7597\u8D44\u6599\u4FDD\u5B58\u5B8C\u6574",
    kind: "do",
    body: "\u4FDD\u5B58\u6536\u8D39\u7968\u636E\u3001\u8D39\u7528\u6E05\u5355\u3001\u51FA\u9662\u8BB0\u5F55\u7B49\u53C2\u4FDD\u5730\u540E\u7EED\u53EF\u80FD\u8981\u6C42\u7684\u6750\u6599\u3002\u5177\u4F53\u6750\u6599\u6E05\u5355\u4EE5\u6C5F\u897F\u53C2\u4FDD\u7EDF\u7B79\u5730\u533A\u7684\u5B98\u65B9\u624B\u5DE5/\u96F6\u661F\u62A5\u9500\u8981\u6C42\u4E3A\u51C6\u3002",
    sourceIds: ["NHSA-2022-22", "JIANGXI-SERVICE"]
  },
  CHECK_MANUAL_REIMBURSEMENT: {
    id: "CHECK_MANUAL_REIMBURSEMENT",
    title: "\u5411\u6C5F\u897F\u53C2\u4FDD\u5730\u786E\u8BA4\u662F\u5426\u53EF\u7533\u8BF7\u624B\u5DE5/\u96F6\u661F\u62A5\u9500",
    kind: "contact",
    body: "\u5DF2\u7ECF\u5B8C\u6210\u81EA\u8D39\u7ED3\u7B97\u540E\uFF0C\u4E0D\u8981\u7531\u672C\u5DE5\u5177\u627F\u8BFA\u4E00\u5B9A\u80FD\u62A5\u3002\u8BF7\u6309\u53C2\u4FDD\u5730\u5177\u4F53\u89C4\u5219\u6838\u5B9E\u8D44\u683C\u3001\u65F6\u9650\u3001\u6750\u6599\u548C\u529E\u7406\u6E20\u9053\u3002",
    sourceIds: ["NHSA-2022-22", "JIANGXI-SERVICE"],
    officialUrl: "https://ggfw.ybj.jiangxi.gov.cn/",
    officialLabel: "\u6253\u5F00\u6C5F\u897F\u533B\u4FDD\u7F51\u4E0A\u670D\u52A1\u5927\u5385"
  },
  CHRONIC_CHECK: {
    id: "CHRONIC_CHECK",
    title: "\u95E8\u8BCA\u6162\u7279\u75C5\u5148\u786E\u8BA4\u8D44\u683C\u548C\u75C5\u79CD\u662F\u5426\u652F\u6301\u8DE8\u7701\u76F4\u63A5\u7ED3\u7B97",
    kind: "check",
    body: "\u95E8\u8BCA\u6162\u7279\u75C5\u4E0E\u666E\u901A\u95E8\u8BCA\u4E0D\u540C\uFF0C\u5E94\u5148\u786E\u8BA4\u53C2\u4FDD\u5730\u6162\u7279\u75C5\u5F85\u9047\u8D44\u683C\u4EE5\u53CA\u76EE\u6807\u673A\u6784\u662F\u5426\u5F00\u901A\u5BF9\u5E94\u75C5\u79CD\u7684\u8DE8\u7701\u76F4\u63A5\u7ED3\u7B97\u3002",
    sourceIds: ["NHSA-2022-22", "NPS-2025-MEDICAL"],
    officialUrl: "https://gjzwfw.www.gov.cn/col/col1576/index.html",
    officialLabel: "\u67E5\u8BE2\u95E8\u8BCA\u6162\u7279\u75C5\u8D44\u683C/\u670D\u52A1"
  },
  JIANGXI_CONFIRM_BENEFIT: {
    id: "JIANGXI_CONFIRM_BENEFIT",
    title: "\u5177\u4F53\u62A5\u9500\u6BD4\u4F8B\u4E0D\u8981\u731C\uFF1A\u4EE5\u6C5F\u897F\u53C2\u4FDD\u5730\u653F\u7B56\u4E3A\u51C6",
    kind: "warning",
    body: "\u8DE8\u7701\u7ED3\u7B97\u9075\u5FAA\u201C\u5C31\u533B\u5730\u76EE\u5F55\u3001\u53C2\u4FDD\u5730\u653F\u7B56\u3001\u5C31\u533B\u5730\u7BA1\u7406\u201D\u3002\u8D77\u4ED8\u7EBF\u3001\u652F\u4ED8\u6BD4\u4F8B\u3001\u6700\u9AD8\u652F\u4ED8\u9650\u989D\u7B49\u4E3B\u8981\u7531\u53C2\u4FDD\u5730\u653F\u7B56\u8BA1\u7B97\uFF1B\u6C5F\u897F\u4E0D\u540C\u7EDF\u7B79\u5730\u533A\u548C\u5C31\u533B\u60C5\u5F62\u53EF\u80FD\u4E0D\u540C\u3002",
    sourceIds: ["NHSA-2022-22", "JIANGXI-SERVICE"],
    officialUrl: "https://ggfw.ybj.jiangxi.gov.cn/",
    officialLabel: "\u67E5\u770B\u6C5F\u897F\u533B\u4FDD\u5B98\u65B9\u670D\u52A1"
  },
  NON_NETWORK_WARNING: {
    id: "NON_NETWORK_WARNING",
    title: "\u76EE\u6807\u533B\u9662\u4E0D\u662F\u8DE8\u7701\u8054\u7F51\u5B9A\u70B9\u65F6\uFF0C\u4E0D\u8981\u9ED8\u8BA4\u53EF\u4EE5\u73B0\u573A\u76F4\u63A5\u62A5\u9500",
    kind: "warning",
    body: "\u56FD\u5BB6\u89C4\u7A0B\u89C4\u5B9A\uFF0C\u5728\u975E\u8DE8\u7701\u8054\u7F51\u5B9A\u70B9\u533B\u836F\u673A\u6784\u53D1\u751F\u7684\u8D39\u7528\u6309\u53C2\u4FDD\u5730\u89C4\u5B9A\u6267\u884C\u3002\u8BF7\u5148\u5411\u6C5F\u897F\u53C2\u4FDD\u5730\u786E\u8BA4\u540E\u7EED\u5904\u7406\u65B9\u5F0F\u3002",
    sourceIds: ["NHSA-2022-22", "JIANGXI-SERVICE"]
  },
  CONTACT_JIANGXI: {
    id: "CONTACT_JIANGXI",
    title: "\u9047\u5230\u5F85\u9047\u3001\u8D44\u683C\u3001\u6750\u6599\u95EE\u9898\uFF1A\u8054\u7CFB\u6C5F\u897F\u53C2\u4FDD\u5730\u533B\u4FDD\u7ECF\u529E\u673A\u6784",
    kind: "contact",
    body: "\u201C\u80FD\u4E0D\u80FD\u62A5\u3001\u62A5\u591A\u5C11\u3001\u8981\u4EC0\u4E48\u6750\u6599\u201D\u5C5E\u4E8E\u53C2\u4FDD\u5730\u653F\u7B56\u6267\u884C\u95EE\u9898\u3002\u4F18\u5148\u901A\u8FC7\u6C5F\u897F\u533B\u4FDD\u5B98\u65B9\u6E20\u9053\u6216\u5F53\u5730\u653F\u52A1/\u533B\u4FDD\u7ECF\u529E\u673A\u6784\u786E\u8BA4\u3002",
    sourceIds: ["JIANGXI-SERVICE"],
    officialUrl: "https://ggfw.ybj.jiangxi.gov.cn/",
    officialLabel: "\u6C5F\u897F\u533B\u4FDD\u7F51\u4E0A\u670D\u52A1\u5927\u5385"
  },
  GUANGZHOU_INFO: {
    id: "GUANGZHOU_INFO",
    title: "\u5E7F\u5DDE\u4F5C\u4E3A\u5C31\u533B\u5730\u5DF2\u63D0\u4F9B\u8DE8\u7701\u4F4F\u9662\u3001\u95E8\u8BCA\u7B49\u76F4\u63A5\u7ED3\u7B97\u670D\u52A1",
    kind: "check",
    body: "\u662F\u5426\u80FD\u5728\u67D0\u5BB6\u533B\u9662\u76F4\u63A5\u7ED3\u7B97\uFF0C\u4ECD\u5E94\u4EE5\u56FD\u5BB6\u533B\u4FDD\u5B98\u65B9\u5B9E\u65F6\u67E5\u8BE2\u548C\u533B\u9662\u533B\u4FDD\u529E\u786E\u8BA4\u4E3A\u51C6\u3002",
    sourceIds: ["GUANGZHOU-2025-CROSSPROVINCE"],
    officialUrl: "https://www.gz.gov.cn/zwfw/zxfw/ylfw/content/post_10224952.html",
    officialLabel: "\u67E5\u770B\u5E7F\u5DDE\u5B98\u65B9\u8BF4\u660E"
  }
};
function classifyPath(ctx) {
  if (ctx.reason === "emergency") return "EMERGENCY";
  if (ctx.stage === "hospitalized" && ctx.filingStatus !== "valid") return "HOSPITALIZED_NO_FILING";
  if (ctx.stage === "discharged") return "DISCHARGED_SELF_PAY";
  if (ctx.reason === "long_term") return "LONG_TERM_PRE";
  if (ctx.reason === "referral") return "REFERRAL_PRE";
  return "TEMPORARY_PRE";
}
const PATH_ACTIONS = {
  LONG_TERM_PRE: ["CHECK_FILING", "APPLY_LONG_TERM", "CHECK_NETWORK", "PREPARE_CREDENTIAL", "TELL_HOSPITAL", "JIANGXI_CONFIRM_BENEFIT"],
  REFERRAL_PRE: ["CONFIRM_REFERRAL", "CHECK_FILING", "APPLY_TEMP", "CHECK_NETWORK", "PREPARE_CREDENTIAL", "TELL_HOSPITAL", "JIANGXI_CONFIRM_BENEFIT"],
  TEMPORARY_PRE: ["CHECK_FILING", "APPLY_TEMP", "CHECK_NETWORK", "PREPARE_CREDENTIAL", "TELL_HOSPITAL", "JIANGXI_CONFIRM_BENEFIT"],
  EMERGENCY: ["EMERGENCY_FIRST", "TELL_HOSPITAL", "ASK_HOSPITAL_OFFICE", "JIANGXI_CONFIRM_BENEFIT"],
  HOSPITALIZED_NO_FILING: ["CHECK_NETWORK", "COMPLETE_BEFORE_DISCHARGE", "ASK_HOSPITAL_OFFICE", "JIANGXI_CONFIRM_BENEFIT"],
  DISCHARGED_SELF_PAY: ["SAVE_DOCUMENTS", "CHECK_MANUAL_REIMBURSEMENT", "CONTACT_JIANGXI", "JIANGXI_CONFIRM_BENEFIT"]
};
const META = {
  LONG_TERM_PRE: { title: "\u957F\u671F\u5728\u5916\u5730\u5C45\u4F4F\uFF1A\u6309\u8FD9\u6761\u987A\u5E8F\u51C6\u5907", summary: "\u5148\u67E5\u5907\u6848\uFF0C\u518D\u6309\u957F\u671F\u5C45\u4F4F\u60C5\u5F62\u529E\u7406\uFF1B\u786E\u8BA4\u533B\u9662\u8054\u7F51\u540E\u6301\u7801\u5361\u5C31\u533B\u3002" },
  REFERRAL_PRE: { title: "\u51C6\u5907\u8F6C\u8BCA\u53BB\u5916\u7701\uFF1A\u5148\u786E\u8BA4\u8F6C\u8BCA\u548C\u5907\u6848", summary: "\u8F6C\u8BCA\u8981\u6C42\u7531\u53C2\u4FDD\u5730\u6267\u884C\uFF0C\u522B\u53EA\u770B\u5C31\u533B\u5730\u533B\u9662\u662F\u5426\u63A5\u8BCA\u3002" },
  TEMPORARY_PRE: { title: "\u4E34\u65F6\u53BB\u5916\u7701\u5C31\u533B\uFF1A\u5148\u6838\u5B9E\u5907\u6848\u7C7B\u578B\u548C\u5F85\u9047", summary: "\u4E34\u65F6\u5916\u51FA\u5F85\u9047\u53EF\u80FD\u4E0E\u672C\u5730\u4E0D\u540C\uFF0C\u5177\u4F53\u4EE5\u53C2\u4FDD\u5730\u653F\u7B56\u4E3A\u51C6\u3002" },
  EMERGENCY: { title: "\u5916\u5730\u7A81\u7136\u6025\u8BCA\uFF1A\u5148\u5C31\u533B\uFF0C\u518D\u786E\u8BA4\u533B\u4FDD\u7ED3\u7B97", summary: "\u56FD\u5BB6\u89C4\u5219\u5BF9\u5F02\u5730\u6025\u8BCA\u62A2\u6551\u6709\u7279\u6B8A\u5B89\u6392\uFF0C\u4E0D\u8981\u4E3A\u4E86\u5907\u6848\u803D\u8BEF\u6CBB\u7597\u3002" },
  HOSPITALIZED_NO_FILING: { title: "\u5DF2\u7ECF\u4F4F\u9662\u4F46\u6CA1\u5907\u6848\uFF1A\u5148\u522B\u6025\u7740\u81EA\u8D39\u51FA\u9662", summary: "\u82E5\u533B\u9662\u5C5E\u4E8E\u8DE8\u7701\u8054\u7F51\u5B9A\u70B9\uFF0C\u5C3D\u5FEB\u5728\u51FA\u9662\u7ED3\u7B97\u524D\u8865\u529E\u5907\u6848\u5E76\u8BA9\u533B\u9662\u91CD\u65B0\u6838\u9A8C\u3002" },
  DISCHARGED_SELF_PAY: { title: "\u5DF2\u7ECF\u81EA\u8D39\u51FA\u9662\uFF1A\u6574\u7406\u8D44\u6599\u5E76\u5411\u53C2\u4FDD\u5730\u786E\u8BA4\u624B\u5DE5\u62A5\u9500", summary: "\u662F\u5426\u53EF\u62A5\u3001\u62A5\u591A\u5C11\u3001\u9700\u8981\u4EC0\u4E48\u6750\u6599\uFF0C\u5E94\u7531\u6C5F\u897F\u5177\u4F53\u53C2\u4FDD\u7EDF\u7B79\u5730\u533A\u89C4\u5219\u51B3\u5B9A\u3002" }
};
function generateGuidance(ctx) {
  const pathKey = classifyPath(ctx);
  const ids = [...PATH_ACTIONS[pathKey]];
  if (ctx.careType === "chronic" && !ids.includes("CHRONIC_CHECK")) ids.splice(Math.min(2, ids.length), 0, "CHRONIC_CHECK");
  if (ctx.networkStatus === "no" && !ids.includes("NON_NETWORK_WARNING")) ids.splice(1, 0, "NON_NETWORK_WARNING");
  if (ctx.destinationCity === "guangzhou" && !ids.includes("GUANGZHOU_INFO")) ids.splice(Math.min(3, ids.length), 0, "GUANGZHOU_INFO");
  const steps = ids.map((id) => ACTIONS[id]).filter(Boolean);
  const sourceIds = [...new Set(steps.flatMap((step) => step.sourceIds))];
  const notices = [
    "\u672C\u5DE5\u5177\u53EA\u505A\u529E\u4E8B\u5BFC\u822A\uFF0C\u4E0D\u66FF\u4EE3\u533B\u4FDD\u7ECF\u529E\u673A\u6784\u7684\u8D44\u683C\u5BA1\u6838\u548C\u5F85\u9047\u8BA1\u7B97\u3002",
    "\u4E0D\u8F93\u5165\u59D3\u540D\u3001\u8EAB\u4EFD\u8BC1\u53F7\u3001\u533B\u4FDD\u53F7\u6216\u75C5\u5386\u4FE1\u606F\u4E5F\u80FD\u4F7F\u7528\u672C\u5DE5\u5177\u3002",
    "\u5982\u9875\u9762\u4E0E\u5B98\u65B9\u6700\u65B0\u529E\u7406\u9875\u9762\u51B2\u7A81\uFF0C\u4EE5\u5B98\u65B9\u5B9E\u65F6\u89C4\u5219\u548C\u7ECF\u529E\u673A\u6784\u7B54\u590D\u4E3A\u51C6\u3002"
  ];
  return { pathKey, title: META[pathKey].title, summary: META[pathKey].summary, steps, notices, sourceIds };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "result",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const ctx = computed(() => contextFromQuery(route.query));
    const result = computed(() => generateGuidance(ctx.value));
    const sources = sourcesJson;
    const usedSources = computed(() => sources.filter((s) => result.value.sourceIds.includes(s.id)));
    ref(null);
    const qrData = ref("");
    useHead({ title: "\u6211\u7684\u5F02\u5730\u5C31\u533B\u529E\u4E8B\u6E05\u5355" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ActionStep = _sfc_main$1;
      _push(`<!--[--><section class="result-head"><div class="trust-pill">\u{1F7E2} \u5173\u952E\u56FD\u5BB6\u89C4\u5219\u5DF2\u6838\u9A8C \xB7 2026-09-19</div><h1>${ssrInterpolate(unref(result).title)}</h1><p class="lead">${ssrInterpolate(unref(result).summary)}</p><div class="context-chips"><span>\u6C5F\u897F\u53C2\u4FDD</span><span>\u5E7F\u5DDE\u5C31\u533B</span><span>${ssrInterpolate(unref(ctx).careType === "inpatient" ? "\u4F4F\u9662" : unref(ctx).careType === "outpatient" ? "\u666E\u901A\u95E8\u8BCA" : "\u95E8\u8BCA\u6162\u7279\u75C5")}</span></div></section>`);
      if (unref(ctx).reason === "emergency") {
        _push(`<div class="urgent-box">\u6025\u8BCA\u62A2\u6551\u60C5\u5F62\uFF1A\u5148\u5C31\u533B\u3002\u672C\u5DE5\u5177\u4E0D\u5224\u65AD\u533B\u5B66\u4E0A\u662F\u5426\u5C5E\u4E8E\u201C\u6025\u8BCA\u62A2\u6551\u201D\uFF0C\u7531\u533B\u7597\u673A\u6784\u548C\u533B\u4FDD\u4E1A\u52A1\u6D41\u7A0B\u786E\u8BA4\u3002</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="steps-list"><!--[-->`);
      ssrRenderList(unref(result).steps, (step, i) => {
        _push(ssrRenderComponent(_component_ActionStep, {
          key: step.id,
          step,
          index: i + 1
        }, null, _parent));
      });
      _push(`<!--]--></section><section class="notice-box"><strong>\u4E3A\u4EC0\u4E48\u4E0D\u663E\u793A\u201C\u80FD\u62A5\u591A\u5C11\u201D\uFF1F</strong><p>\u8DE8\u7701\u76F4\u63A5\u7ED3\u7B97\u9075\u5FAA\u201C\u5C31\u533B\u5730\u76EE\u5F55\u3001\u53C2\u4FDD\u5730\u653F\u7B56\u3001\u5C31\u533B\u5730\u7BA1\u7406\u201D\u3002\u8D77\u4ED8\u7EBF\u3001\u652F\u4ED8\u6BD4\u4F8B\u3001\u6700\u9AD8\u652F\u4ED8\u9650\u989D\u7B49\u4E3B\u8981\u7531\u53C2\u4FDD\u5730\u653F\u7B56\u51B3\u5B9A\uFF0C\u521D\u7248\u5B81\u53EF\u8BA9\u4F60\u53BB\u5B98\u65B9\u6838\u9A8C\uFF0C\u4E5F\u4E0D\u731C\u4E00\u4E2A\u6BD4\u4F8B\u3002</p></section><section class="card-section"><h2>\u628A\u7ED3\u679C\u5E26\u8D70</h2><div class="print-card"><h2>\u7238\u5988\u5F02\u5730\u770B\u75C5\u529E\u4E8B\u5361</h2><p class="card-sub">\u6C5F\u897F\u53C2\u4FDD \u2192 \u5E7F\u5DDE\u5C31\u533B \xB7 ${ssrInterpolate(unref(result).title)}</p><ol><!--[-->`);
      ssrRenderList(unref(result).steps, (step) => {
        _push(`<li><strong>${ssrInterpolate(step.title)}</strong><br><span>${ssrInterpolate(step.body)}</span></li>`);
      });
      _push(`<!--]--></ol><div class="card-bottom"><div><strong>\u6700\u540E\u6838\u9A8C\uFF1A</strong>2026-09-19<br><small>\u672C\u5DE5\u5177\u4E0D\u66FF\u4EE3\u533B\u4FDD\u7ECF\u529E\u673A\u6784\u5BA1\u6838\uFF1B\u9047\u5230\u51B2\u7A81\u4EE5\u5B98\u65B9\u6700\u65B0\u89C4\u5219\u4E3A\u51C6\u3002</small></div>`);
      if (unref(qrData)) {
        _push(`<img${ssrRenderAttr("src", unref(qrData))} alt="\u5F53\u524D\u529E\u4E8B\u5361\u4E8C\u7EF4\u7801">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="card-actions no-print"><button class="primary-button" type="button">\u4FDD\u5B58\u4E3A\u56FE\u7247</button><button class="secondary-button" type="button">\u590D\u5236\u6587\u5B57\u7248</button><button class="secondary-button" type="button">\u6253\u5370 A4</button></div></section><section class="section-block"><h2>\u5B98\u65B9\u4F9D\u636E</h2><div class="source-list"><!--[-->`);
      ssrRenderList(unref(usedSources), (source) => {
        _push(`<a${ssrRenderAttr("href", source.url)} target="_blank" rel="noopener noreferrer" class="source-card"><strong>${ssrInterpolate(source.authority)}</strong><span>${ssrInterpolate(source.title)}</span><small>${ssrInterpolate(source.id)} \xB7 \u6700\u540E\u6838\u9A8C ${ssrInterpolate(source.verifiedAt)}</small></a>`);
      });
      _push(`<!--]--></div></section><section class="small-muted"><!--[-->`);
      ssrRenderList(unref(result).notices, (notice) => {
        _push(`<p>\u2022 ${ssrInterpolate(notice)}</p>`);
      });
      _push(`<!--]--></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/result.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=result-Bv_Y_e7l.mjs.map
