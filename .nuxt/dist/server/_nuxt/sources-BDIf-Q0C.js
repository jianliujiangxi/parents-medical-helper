import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { s as sourcesJson } from "./sources-Cht0IMjG.js";
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
const factsJson = [
  {
    id: "NAT-001",
    topic: "scope",
    fact: "跨省异地就医包括基本医保参保人员在参保省外定点医药机构发生的就医购药行为。",
    sourceId: "NHSA-2022-22",
    article: "第2-3条",
    confidence: "A"
  },
  {
    id: "NAT-002",
    topic: "principle",
    fact: "跨省直接结算执行‘就医地目录、参保地政策、就医地管理’。",
    sourceId: "NHSA-2022-22",
    article: "第6条",
    confidence: "A"
  },
  {
    id: "NAT-003",
    topic: "people",
    fact: "跨省异地长期居住人员包括异地安置退休、异地长期居住、常驻异地工作人员。",
    sourceId: "NHSA-2022-22",
    article: "第7条",
    confidence: "A"
  },
  {
    id: "NAT-004",
    topic: "people",
    fact: "跨省临时外出就医人员包括异地转诊、异地急诊抢救以及其他跨省临时外出就医人员。",
    sourceId: "NHSA-2022-22",
    article: "第7条",
    confidence: "A"
  },
  {
    id: "NAT-005",
    topic: "materials",
    fact: "异地长期居住备案国家规程列明医保电子凭证/身份证件或社保卡、备案表、长期居住认定材料或个人承诺书。",
    sourceId: "NHSA-2022-22",
    article: "第8条",
    confidence: "A"
  },
  {
    id: "NAT-006",
    topic: "materials",
    fact: "异地转诊人员国家规程列明身份凭证、备案表以及参保地规定的定点医疗机构转诊转院证明材料。",
    sourceId: "NHSA-2022-22",
    article: "第8条",
    confidence: "A"
  },
  {
    id: "NAT-007",
    topic: "emergency",
    fact: "异地急诊抢救人员视同已备案。",
    sourceId: "NHSA-2022-22",
    article: "第8条、第34条",
    confidence: "A"
  },
  {
    id: "NAT-008",
    topic: "channel",
    fact: "可通过参保地窗口、指定线上渠道、国家医保服务平台APP、国家异地就医备案小程序、国务院客户端等办理备案。",
    sourceId: "NHSA-2022-22",
    article: "第9条",
    confidence: "A"
  },
  {
    id: "NAT-009",
    topic: "identity",
    fact: "跨省联网定点医药机构就医时应主动表明参保身份并出示医保电子凭证或社保卡等有效凭证。",
    sourceId: "NHSA-2022-22",
    article: "第17条",
    confidence: "A"
  },
  {
    id: "NAT-010",
    topic: "hospitalized",
    fact: "未办理备案但已在跨省联网定点医疗机构入院的，出院结算前完成备案后，医疗机构应提供直接结算服务。",
    sourceId: "NHSA-2022-22",
    article: "第16条",
    confidence: "A"
  },
  {
    id: "NAT-011",
    topic: "nonnetwork",
    fact: "在非跨省联网定点医药机构发生的医疗费用，按参保地规定执行。",
    sourceId: "NHSA-2022-22",
    article: "第14条",
    confidence: "A"
  },
  {
    id: "NAT-012",
    topic: "settlement",
    fact: "直接结算时参保地按本地政策计算个人负担和医保基金支付金额并回传就医地。",
    sourceId: "NHSA-2022-22",
    article: "第32-33条",
    confidence: "A"
  },
  {
    id: "NAT-013",
    topic: "filing",
    fact: "跨省备案可以直接备案到就医地市或直辖市等，住院可在备案地已开通的跨省联网定点医疗机构直接结算。",
    sourceId: "NHSA-2022-22",
    article: "通知第三部分（一）",
    confidence: "A"
  },
  {
    id: "NAT-014",
    topic: "temporary",
    fact: "临时外出就医待遇可低于参保地本地待遇，具体由统筹地区政策确定，不能仅凭国家规则推断具体报销比例。",
    sourceId: "NHSA-2022-22",
    article: "通知第二部分（六）",
    confidence: "A"
  },
  {
    id: "NAT-015",
    topic: "query",
    fact: "国家异地就医备案服务提供备案记录及跨省联网定点医药机构查询。",
    sourceId: "NHSA-2025-GUIDE",
    article: "查询服务",
    confidence: "A"
  },
  {
    id: "NAT-016",
    topic: "unknown",
    fact: "具体报销待遇、起付线、支付比例、最高支付限额等应以参保地政策和经办机构实际执行为准。",
    sourceId: "NHSA-2022-22",
    article: "通知第二部分（一）",
    confidence: "A"
  },
  {
    id: "JX-001",
    topic: "channel",
    fact: "江西参保人员可使用江西医保网上服务大厅等江西官方医保公共服务渠道。",
    sourceId: "JIANGXI-SERVICE",
    article: "服务门户",
    confidence: "A"
  },
  {
    id: "JX-002",
    topic: "channel",
    fact: "江西省医疗保障局提供江西智慧医保APP官方下载入口。",
    sourceId: "JIANGXI-APP",
    article: "下载页",
    confidence: "A"
  },
  {
    id: "JX-003",
    topic: "safety",
    fact: "初版不写死江西各统筹地区具体支付比例；需按参保市、险种、就医情形向官方规则或经办机构核验。",
    sourceId: "JIANGXI-SERVICE",
    article: "产品保守规则",
    confidence: "A"
  },
  {
    id: "GZ-001",
    topic: "service",
    fact: "广州已提供跨省异地住院、普通门诊和门诊慢特病直接结算服务。",
    sourceId: "GUANGZHOU-2025-CROSSPROVINCE",
    article: "跨省来穗就医",
    confidence: "A"
  },
  {
    id: "GZ-002",
    topic: "query",
    fact: "广州官方提示通过国家医保服务平台等官方渠道查询异地联网定点医疗机构。",
    sourceId: "GUANGZHOU-2025-CROSSPROVINCE",
    article: "定点机构查询",
    confidence: "A"
  },
  {
    id: "SAFE-001",
    topic: "boundary",
    fact: "本工具不判断疾病、不推荐医院、不承诺报销金额、不替代医保经办机构审核。",
    sourceId: "NHSA-2022-22",
    article: "产品边界",
    confidence: "A"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sources",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "官方依据" });
    const sources = sourcesJson;
    const facts = factsJson;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><h1>官方依据与核验记录</h1><p class="lead">关键规则只引用政府/医保官方来源。内容过期或无法确认时，系统应该提示核验，而不是继续输出确定结论。</p><div class="source-list"><!--[-->`);
      ssrRenderList(unref(sources), (source) => {
        _push(`<a class="source-card"${ssrRenderAttr("href", source.url)} target="_blank" rel="noopener noreferrer"><strong>${ssrInterpolate(source.authority)}</strong><span>${ssrInterpolate(source.title)}</span><small>${ssrInterpolate(source.id)} · 核验 ${ssrInterpolate(source.verifiedAt)} · 复核周期 ${ssrInterpolate(source.reviewIntervalDays)} 天</small></a>`);
      });
      _push(`<!--]--></div><h2>当前原子规则（${ssrInterpolate(unref(facts).length)} 条）</h2><div class="fact-table"><!--[-->`);
      ssrRenderList(unref(facts), (fact) => {
        _push(`<div class="fact-row"><code>${ssrInterpolate(fact.id)}</code><span>${ssrInterpolate(fact.fact)}</span><small>${ssrInterpolate(fact.sourceId)} · ${ssrInterpolate(fact.article)}</small></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sources.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sources-BDIf-Q0C.js.map
