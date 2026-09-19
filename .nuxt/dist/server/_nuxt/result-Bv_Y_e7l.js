import { defineComponent, mergeProps, useSSRContext, computed, ref, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { s as sourcesJson } from "./sources-Cht0IMjG.js";
import { u as useRoute } from "../server.mjs";
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
        _push(`<a class="official-link"${ssrRenderAttr("href", __props.step.officialUrl)} target="_blank" rel="noopener noreferrer">${ssrInterpolate(__props.step.officialLabel || "打开官方入口")} ↗ </a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="source-mini">依据：${ssrInterpolate(__props.step.sourceIds.join("、"))}</p></div></article>`);
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
  const get = (key, allowed, fallback) => {
    const raw = String(query[key] ?? "");
    return allowed.includes(raw) ? raw : fallback;
  };
  return {
    actor: get("actor", ["self", "parent"], defaults.actor),
    insuranceProvince: String(query.insuranceProvince ?? defaults.insuranceProvince),
    insuranceCity: String(query.insuranceCity ?? ""),
    destinationProvince: String(query.destinationProvince ?? defaults.destinationProvince),
    destinationCity: String(query.destinationCity ?? defaults.destinationCity),
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
    title: "先确认有没有有效异地备案",
    kind: "check",
    body: "先在国家医保官方渠道查询备案记录。若已经有覆盖当前就医地且仍有效的备案，不要重复办理。",
    sourceIds: ["NHSA-2025-GUIDE", "NPS-2025-MEDICAL"],
    officialUrl: "https://gjzwfw.www.gov.cn/col/col1576/index.html",
    officialLabel: "打开国家政务服务平台医保专区"
  },
  APPLY_LONG_TERM: {
    id: "APPLY_LONG_TERM",
    title: "无有效备案时，按长期居住情形办理备案",
    kind: "do",
    body: "如果老人长期在参保省外居住，优先按实际情况选择长期居住相关备案类型。材料和具体审核以参保地页面提示为准。",
    sourceIds: ["NHSA-2022-22", "NHSA-2025-GUIDE"],
    officialUrl: "https://fuwu.nhsa.gov.cn/",
    officialLabel: "打开国家医保服务平台"
  },
  APPLY_TEMP: {
    id: "APPLY_TEMP",
    title: "按实际情形办理临时外出/转诊备案",
    kind: "do",
    body: "临时外出、转诊等情形应选择与实际情况相符的备案类型。不同参保地对待遇和转诊材料可能有差异。",
    sourceIds: ["NHSA-2022-22", "NHSA-2025-GUIDE"],
    officialUrl: "https://fuwu.nhsa.gov.cn/",
    officialLabel: "打开国家医保服务平台"
  },
  CONFIRM_REFERRAL: {
    id: "CONFIRM_REFERRAL",
    title: "如属于转诊，先确认参保地转诊要求",
    kind: "check",
    body: "国家规程要求异地转诊人员按参保地规定提供转诊转院证明材料。请以江西具体参保统筹地区的官方要求为准。",
    sourceIds: ["NHSA-2022-22", "JIANGXI-SERVICE"],
    officialUrl: "https://ggfw.ybj.jiangxi.gov.cn/",
    officialLabel: "打开江西医保网上服务大厅"
  },
  CHECK_NETWORK: {
    id: "CHECK_NETWORK",
    title: "确认目标医院支持相应的跨省直接结算",
    kind: "check",
    body: "不要仅凭医院名称判断。请通过国家医保官方查询确认目标机构是否已开通你需要的住院、普通门诊或门诊慢特病跨省结算服务。",
    sourceIds: ["NHSA-2025-GUIDE", "GUANGZHOU-2025-CROSSPROVINCE"],
    officialUrl: "https://gjzwfw.www.gov.cn/col/col1576/index.html",
    officialLabel: "查询跨省联网定点机构"
  },
  PREPARE_CREDENTIAL: {
    id: "PREPARE_CREDENTIAL",
    title: "准备医保电子凭证或社会保障卡",
    kind: "do",
    body: "到跨省联网定点医药机构就医时，主动表明异地参保身份，并按医院要求出示医保电子凭证或社会保障卡等有效凭证。",
    sourceIds: ["NHSA-2022-22"]
  },
  TELL_HOSPITAL: {
    id: "TELL_HOSPITAL",
    title: "入院/就诊时主动说明需要跨省医保直接结算",
    kind: "do",
    body: "尽早向医院收费或医保窗口说明参保地和跨省结算需求，避免到出院结算时才发现信息不一致。",
    sourceIds: ["NHSA-2022-22"]
  },
  EMERGENCY_FIRST: {
    id: "EMERGENCY_FIRST",
    title: "急诊抢救时先就医，不要为了备案耽误治疗",
    kind: "warning",
    body: "国家规则明确异地急诊抢救人员视同已备案。是否属于急诊抢救以及系统上传标识，由医疗机构和医保业务流程确认，本工具不作医学判断。",
    sourceIds: ["NHSA-2022-22"]
  },
  ASK_HOSPITAL_OFFICE: {
    id: "ASK_HOSPITAL_OFFICE",
    title: "结算异常先找医院医保办确认具体失败原因",
    kind: "contact",
    body: "先确认是否为未备案、备案地不匹配、医院未开通对应结算类型、参保状态或系统信息问题，再决定下一步找参保地医保经办机构。",
    sourceIds: ["NHSA-2022-22"]
  },
  COMPLETE_BEFORE_DISCHARGE: {
    id: "COMPLETE_BEFORE_DISCHARGE",
    title: "还没出院：尽快在结算前补办备案",
    kind: "do",
    body: "国家经办规程明确：在跨省联网定点医疗机构已经入院、此前未备案的，若在出院结算前完成备案，医疗机构应提供跨省直接结算服务。办完后请让医院医保办重新核验。",
    sourceIds: ["NHSA-2022-22"],
    officialUrl: "https://fuwu.nhsa.gov.cn/",
    officialLabel: "去国家医保官方平台办理/查询"
  },
  SAVE_DOCUMENTS: {
    id: "SAVE_DOCUMENTS",
    title: "已经自费出院：先把票据和医疗资料保存完整",
    kind: "do",
    body: "保存收费票据、费用清单、出院记录等参保地后续可能要求的材料。具体材料清单以江西参保统筹地区的官方手工/零星报销要求为准。",
    sourceIds: ["NHSA-2022-22", "JIANGXI-SERVICE"]
  },
  CHECK_MANUAL_REIMBURSEMENT: {
    id: "CHECK_MANUAL_REIMBURSEMENT",
    title: "向江西参保地确认是否可申请手工/零星报销",
    kind: "contact",
    body: "已经完成自费结算后，不要由本工具承诺一定能报。请按参保地具体规则核实资格、时限、材料和办理渠道。",
    sourceIds: ["NHSA-2022-22", "JIANGXI-SERVICE"],
    officialUrl: "https://ggfw.ybj.jiangxi.gov.cn/",
    officialLabel: "打开江西医保网上服务大厅"
  },
  CHRONIC_CHECK: {
    id: "CHRONIC_CHECK",
    title: "门诊慢特病先确认资格和病种是否支持跨省直接结算",
    kind: "check",
    body: "门诊慢特病与普通门诊不同，应先确认参保地慢特病待遇资格以及目标机构是否开通对应病种的跨省直接结算。",
    sourceIds: ["NHSA-2022-22", "NPS-2025-MEDICAL"],
    officialUrl: "https://gjzwfw.www.gov.cn/col/col1576/index.html",
    officialLabel: "查询门诊慢特病资格/服务"
  },
  JIANGXI_CONFIRM_BENEFIT: {
    id: "JIANGXI_CONFIRM_BENEFIT",
    title: "具体报销比例不要猜：以江西参保地政策为准",
    kind: "warning",
    body: "跨省结算遵循“就医地目录、参保地政策、就医地管理”。起付线、支付比例、最高支付限额等主要由参保地政策计算；江西不同统筹地区和就医情形可能不同。",
    sourceIds: ["NHSA-2022-22", "JIANGXI-SERVICE"],
    officialUrl: "https://ggfw.ybj.jiangxi.gov.cn/",
    officialLabel: "查看江西医保官方服务"
  },
  NON_NETWORK_WARNING: {
    id: "NON_NETWORK_WARNING",
    title: "目标医院不是跨省联网定点时，不要默认可以现场直接报销",
    kind: "warning",
    body: "国家规程规定，在非跨省联网定点医药机构发生的费用按参保地规定执行。请先向江西参保地确认后续处理方式。",
    sourceIds: ["NHSA-2022-22", "JIANGXI-SERVICE"]
  },
  CONTACT_JIANGXI: {
    id: "CONTACT_JIANGXI",
    title: "遇到待遇、资格、材料问题：联系江西参保地医保经办机构",
    kind: "contact",
    body: "“能不能报、报多少、要什么材料”属于参保地政策执行问题。优先通过江西医保官方渠道或当地政务/医保经办机构确认。",
    sourceIds: ["JIANGXI-SERVICE"],
    officialUrl: "https://ggfw.ybj.jiangxi.gov.cn/",
    officialLabel: "江西医保网上服务大厅"
  },
  GUANGZHOU_INFO: {
    id: "GUANGZHOU_INFO",
    title: "广州作为就医地已提供跨省住院、门诊等直接结算服务",
    kind: "check",
    body: "是否能在某家医院直接结算，仍应以国家医保官方实时查询和医院医保办确认为准。",
    sourceIds: ["GUANGZHOU-2025-CROSSPROVINCE"],
    officialUrl: "https://www.gz.gov.cn/zwfw/zxfw/ylfw/content/post_10224952.html",
    officialLabel: "查看广州官方说明"
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
  LONG_TERM_PRE: { title: "长期在外地居住：按这条顺序准备", summary: "先查备案，再按长期居住情形办理；确认医院联网后持码卡就医。" },
  REFERRAL_PRE: { title: "准备转诊去外省：先确认转诊和备案", summary: "转诊要求由参保地执行，别只看就医地医院是否接诊。" },
  TEMPORARY_PRE: { title: "临时去外省就医：先核实备案类型和待遇", summary: "临时外出待遇可能与本地不同，具体以参保地政策为准。" },
  EMERGENCY: { title: "外地突然急诊：先就医，再确认医保结算", summary: "国家规则对异地急诊抢救有特殊安排，不要为了备案耽误治疗。" },
  HOSPITALIZED_NO_FILING: { title: "已经住院但没备案：先别急着自费出院", summary: "若医院属于跨省联网定点，尽快在出院结算前补办备案并让医院重新核验。" },
  DISCHARGED_SELF_PAY: { title: "已经自费出院：整理资料并向参保地确认手工报销", summary: "是否可报、报多少、需要什么材料，应由江西具体参保统筹地区规则决定。" }
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
    "本工具只做办事导航，不替代医保经办机构的资格审核和待遇计算。",
    "不输入姓名、身份证号、医保号或病历信息也能使用本工具。",
    "如页面与官方最新办理页面冲突，以官方实时规则和经办机构答复为准。"
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
    useHead({ title: "我的异地就医办事清单" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ActionStep = _sfc_main$1;
      _push(`<!--[--><section class="result-head"><div class="trust-pill">🟢 关键国家规则已核验 · 2026-09-19</div><h1>${ssrInterpolate(unref(result).title)}</h1><p class="lead">${ssrInterpolate(unref(result).summary)}</p><div class="context-chips"><span>江西参保</span><span>广州就医</span><span>${ssrInterpolate(unref(ctx).careType === "inpatient" ? "住院" : unref(ctx).careType === "outpatient" ? "普通门诊" : "门诊慢特病")}</span></div></section>`);
      if (unref(ctx).reason === "emergency") {
        _push(`<div class="urgent-box">急诊抢救情形：先就医。本工具不判断医学上是否属于“急诊抢救”，由医疗机构和医保业务流程确认。</div>`);
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
      _push(`<!--]--></section><section class="notice-box"><strong>为什么不显示“能报多少”？</strong><p>跨省直接结算遵循“就医地目录、参保地政策、就医地管理”。起付线、支付比例、最高支付限额等主要由参保地政策决定，初版宁可让你去官方核验，也不猜一个比例。</p></section><section class="card-section"><h2>把结果带走</h2><div class="print-card"><h2>爸妈异地看病办事卡</h2><p class="card-sub">江西参保 → 广州就医 · ${ssrInterpolate(unref(result).title)}</p><ol><!--[-->`);
      ssrRenderList(unref(result).steps, (step) => {
        _push(`<li><strong>${ssrInterpolate(step.title)}</strong><br><span>${ssrInterpolate(step.body)}</span></li>`);
      });
      _push(`<!--]--></ol><div class="card-bottom"><div><strong>最后核验：</strong>2026-09-19<br><small>本工具不替代医保经办机构审核；遇到冲突以官方最新规则为准。</small></div>`);
      if (unref(qrData)) {
        _push(`<img${ssrRenderAttr("src", unref(qrData))} alt="当前办事卡二维码">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="card-actions no-print"><button class="primary-button" type="button">保存为图片</button><button class="secondary-button" type="button">复制文字版</button><button class="secondary-button" type="button">打印 A4</button></div></section><section class="section-block"><h2>官方依据</h2><div class="source-list"><!--[-->`);
      ssrRenderList(unref(usedSources), (source) => {
        _push(`<a${ssrRenderAttr("href", source.url)} target="_blank" rel="noopener noreferrer" class="source-card"><strong>${ssrInterpolate(source.authority)}</strong><span>${ssrInterpolate(source.title)}</span><small>${ssrInterpolate(source.id)} · 最后核验 ${ssrInterpolate(source.verifiedAt)}</small></a>`);
      });
      _push(`<!--]--></div></section><section class="small-muted"><!--[-->`);
      ssrRenderList(unref(result).notices, (notice) => {
        _push(`<p>• ${ssrInterpolate(notice)}</p>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=result-Bv_Y_e7l.js.map
