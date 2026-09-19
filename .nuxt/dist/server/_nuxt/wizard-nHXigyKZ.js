import { defineComponent, reactive, ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { u as useHead } from "./v3-CdLVj83h.js";
import { u as useRoute, b as useRouter } from "../server.mjs";
import "/home/lj/githubs/parents-medical-helper/node_modules/@unhead/vue/dist/index.mjs";
import "/home/lj/githubs/parents-medical-helper/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/lj/githubs/parents-medical-helper/node_modules/hookable/dist/index.mjs";
import "/home/lj/githubs/parents-medical-helper/node_modules/unctx/dist/index.mjs";
import "/home/lj/githubs/parents-medical-helper/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/lj/githubs/parents-medical-helper/node_modules/defu/dist/defu.mjs";
import "/home/lj/githubs/parents-medical-helper/node_modules/ufo/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "wizard",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "30秒判断情况" });
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
      { key: "actor", title: "这次是帮谁看？", options: [["parent", "帮爸妈"], ["self", "我自己"]] },
      { key: "insuranceType", title: "老人参加哪种基本医保？", options: [["employee", "职工医保"], ["resident", "城乡居民医保"], ["unknown", "不知道"]] },
      { key: "reason", title: "为什么要在外省就医？", options: [["long_term", "长期在广州生活"], ["referral", "本地医院建议转外省"], ["temporary", "临时去外省看病"], ["emergency", "突然急诊/抢救"], ["unknown", "说不清"]] },
      { key: "careType", title: "这次主要是哪种就医？", options: [["inpatient", "住院"], ["outpatient", "普通门诊"], ["chronic", "门诊慢特病"]] },
      { key: "stage", title: "现在到哪一步了？", options: [["before", "还没去/还没住院"], ["hospitalized", "已经住院/正在就医"], ["discharged", "已经自费结算出院"]] },
      { key: "filingStatus", title: "异地就医备案状态？", options: [["valid", "确认有有效备案"], ["none", "确认没有备案"], ["unknown", "不知道"]] },
      { key: "networkStatus", title: "目标医院是否支持对应跨省直接结算？", options: [["yes", "确认支持"], ["no", "确认不支持"], ["unknown", "还没查"]] }
    ];
    const step = ref(0);
    const current = computed(() => questions[step.value]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wizard" }, _attrs))}><div class="progress"><span style="${ssrRenderStyle({ width: `${(unref(step) + 1) / questions.length * 100}%` })}"></span></div><p class="progress-text">${ssrInterpolate(unref(step) + 1)} / ${ssrInterpolate(questions.length)}</p><h1>${ssrInterpolate(unref(current).title)}</h1>`);
      if (unref(step) === 1) {
        _push(`<p class="helper">不知道也可以选“不知道”，系统不会因此编造报销比例。</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="option-stack"><!--[-->`);
      ssrRenderList(unref(current).options, (opt) => {
        _push(`<button class="option-button" type="button">${ssrInterpolate(opt[1])}</button>`);
      });
      _push(`<!--]--></div><div class="wizard-nav">`);
      if (unref(step) > 0) {
        _push(`<button class="ghost-button" type="button">← 上一步</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="ghost-button" type="button">直接看结果</button></div><p class="small-muted">初版默认：江西参保、广东广州就医。后续会把参保地/就医地选择做成全国可配置。</p></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=wizard-nHXigyKZ.js.map
