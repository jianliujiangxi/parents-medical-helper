import { defineComponent, unref, useSSRContext } from 'file:///home/lj/githubs/parents-medical-helper/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///home/lj/githubs/parents-medical-helper/node_modules/vue/server-renderer/index.mjs';
import { s as sourcesJson } from './sources-Cht0IMjG.mjs';
import { u as useHead } from './v3-CdLVj83h.mjs';
import './server.mjs';
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

const factsJson = [
  {
    id: "NAT-001",
    topic: "scope",
    fact: "\u8DE8\u7701\u5F02\u5730\u5C31\u533B\u5305\u62EC\u57FA\u672C\u533B\u4FDD\u53C2\u4FDD\u4EBA\u5458\u5728\u53C2\u4FDD\u7701\u5916\u5B9A\u70B9\u533B\u836F\u673A\u6784\u53D1\u751F\u7684\u5C31\u533B\u8D2D\u836F\u884C\u4E3A\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u7B2C2-3\u6761",
    confidence: "A"
  },
  {
    id: "NAT-002",
    topic: "principle",
    fact: "\u8DE8\u7701\u76F4\u63A5\u7ED3\u7B97\u6267\u884C\u2018\u5C31\u533B\u5730\u76EE\u5F55\u3001\u53C2\u4FDD\u5730\u653F\u7B56\u3001\u5C31\u533B\u5730\u7BA1\u7406\u2019\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u7B2C6\u6761",
    confidence: "A"
  },
  {
    id: "NAT-003",
    topic: "people",
    fact: "\u8DE8\u7701\u5F02\u5730\u957F\u671F\u5C45\u4F4F\u4EBA\u5458\u5305\u62EC\u5F02\u5730\u5B89\u7F6E\u9000\u4F11\u3001\u5F02\u5730\u957F\u671F\u5C45\u4F4F\u3001\u5E38\u9A7B\u5F02\u5730\u5DE5\u4F5C\u4EBA\u5458\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u7B2C7\u6761",
    confidence: "A"
  },
  {
    id: "NAT-004",
    topic: "people",
    fact: "\u8DE8\u7701\u4E34\u65F6\u5916\u51FA\u5C31\u533B\u4EBA\u5458\u5305\u62EC\u5F02\u5730\u8F6C\u8BCA\u3001\u5F02\u5730\u6025\u8BCA\u62A2\u6551\u4EE5\u53CA\u5176\u4ED6\u8DE8\u7701\u4E34\u65F6\u5916\u51FA\u5C31\u533B\u4EBA\u5458\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u7B2C7\u6761",
    confidence: "A"
  },
  {
    id: "NAT-005",
    topic: "materials",
    fact: "\u5F02\u5730\u957F\u671F\u5C45\u4F4F\u5907\u6848\u56FD\u5BB6\u89C4\u7A0B\u5217\u660E\u533B\u4FDD\u7535\u5B50\u51ED\u8BC1/\u8EAB\u4EFD\u8BC1\u4EF6\u6216\u793E\u4FDD\u5361\u3001\u5907\u6848\u8868\u3001\u957F\u671F\u5C45\u4F4F\u8BA4\u5B9A\u6750\u6599\u6216\u4E2A\u4EBA\u627F\u8BFA\u4E66\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u7B2C8\u6761",
    confidence: "A"
  },
  {
    id: "NAT-006",
    topic: "materials",
    fact: "\u5F02\u5730\u8F6C\u8BCA\u4EBA\u5458\u56FD\u5BB6\u89C4\u7A0B\u5217\u660E\u8EAB\u4EFD\u51ED\u8BC1\u3001\u5907\u6848\u8868\u4EE5\u53CA\u53C2\u4FDD\u5730\u89C4\u5B9A\u7684\u5B9A\u70B9\u533B\u7597\u673A\u6784\u8F6C\u8BCA\u8F6C\u9662\u8BC1\u660E\u6750\u6599\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u7B2C8\u6761",
    confidence: "A"
  },
  {
    id: "NAT-007",
    topic: "emergency",
    fact: "\u5F02\u5730\u6025\u8BCA\u62A2\u6551\u4EBA\u5458\u89C6\u540C\u5DF2\u5907\u6848\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u7B2C8\u6761\u3001\u7B2C34\u6761",
    confidence: "A"
  },
  {
    id: "NAT-008",
    topic: "channel",
    fact: "\u53EF\u901A\u8FC7\u53C2\u4FDD\u5730\u7A97\u53E3\u3001\u6307\u5B9A\u7EBF\u4E0A\u6E20\u9053\u3001\u56FD\u5BB6\u533B\u4FDD\u670D\u52A1\u5E73\u53F0APP\u3001\u56FD\u5BB6\u5F02\u5730\u5C31\u533B\u5907\u6848\u5C0F\u7A0B\u5E8F\u3001\u56FD\u52A1\u9662\u5BA2\u6237\u7AEF\u7B49\u529E\u7406\u5907\u6848\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u7B2C9\u6761",
    confidence: "A"
  },
  {
    id: "NAT-009",
    topic: "identity",
    fact: "\u8DE8\u7701\u8054\u7F51\u5B9A\u70B9\u533B\u836F\u673A\u6784\u5C31\u533B\u65F6\u5E94\u4E3B\u52A8\u8868\u660E\u53C2\u4FDD\u8EAB\u4EFD\u5E76\u51FA\u793A\u533B\u4FDD\u7535\u5B50\u51ED\u8BC1\u6216\u793E\u4FDD\u5361\u7B49\u6709\u6548\u51ED\u8BC1\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u7B2C17\u6761",
    confidence: "A"
  },
  {
    id: "NAT-010",
    topic: "hospitalized",
    fact: "\u672A\u529E\u7406\u5907\u6848\u4F46\u5DF2\u5728\u8DE8\u7701\u8054\u7F51\u5B9A\u70B9\u533B\u7597\u673A\u6784\u5165\u9662\u7684\uFF0C\u51FA\u9662\u7ED3\u7B97\u524D\u5B8C\u6210\u5907\u6848\u540E\uFF0C\u533B\u7597\u673A\u6784\u5E94\u63D0\u4F9B\u76F4\u63A5\u7ED3\u7B97\u670D\u52A1\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u7B2C16\u6761",
    confidence: "A"
  },
  {
    id: "NAT-011",
    topic: "nonnetwork",
    fact: "\u5728\u975E\u8DE8\u7701\u8054\u7F51\u5B9A\u70B9\u533B\u836F\u673A\u6784\u53D1\u751F\u7684\u533B\u7597\u8D39\u7528\uFF0C\u6309\u53C2\u4FDD\u5730\u89C4\u5B9A\u6267\u884C\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u7B2C14\u6761",
    confidence: "A"
  },
  {
    id: "NAT-012",
    topic: "settlement",
    fact: "\u76F4\u63A5\u7ED3\u7B97\u65F6\u53C2\u4FDD\u5730\u6309\u672C\u5730\u653F\u7B56\u8BA1\u7B97\u4E2A\u4EBA\u8D1F\u62C5\u548C\u533B\u4FDD\u57FA\u91D1\u652F\u4ED8\u91D1\u989D\u5E76\u56DE\u4F20\u5C31\u533B\u5730\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u7B2C32-33\u6761",
    confidence: "A"
  },
  {
    id: "NAT-013",
    topic: "filing",
    fact: "\u8DE8\u7701\u5907\u6848\u53EF\u4EE5\u76F4\u63A5\u5907\u6848\u5230\u5C31\u533B\u5730\u5E02\u6216\u76F4\u8F96\u5E02\u7B49\uFF0C\u4F4F\u9662\u53EF\u5728\u5907\u6848\u5730\u5DF2\u5F00\u901A\u7684\u8DE8\u7701\u8054\u7F51\u5B9A\u70B9\u533B\u7597\u673A\u6784\u76F4\u63A5\u7ED3\u7B97\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u901A\u77E5\u7B2C\u4E09\u90E8\u5206\uFF08\u4E00\uFF09",
    confidence: "A"
  },
  {
    id: "NAT-014",
    topic: "temporary",
    fact: "\u4E34\u65F6\u5916\u51FA\u5C31\u533B\u5F85\u9047\u53EF\u4F4E\u4E8E\u53C2\u4FDD\u5730\u672C\u5730\u5F85\u9047\uFF0C\u5177\u4F53\u7531\u7EDF\u7B79\u5730\u533A\u653F\u7B56\u786E\u5B9A\uFF0C\u4E0D\u80FD\u4EC5\u51ED\u56FD\u5BB6\u89C4\u5219\u63A8\u65AD\u5177\u4F53\u62A5\u9500\u6BD4\u4F8B\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u901A\u77E5\u7B2C\u4E8C\u90E8\u5206\uFF08\u516D\uFF09",
    confidence: "A"
  },
  {
    id: "NAT-015",
    topic: "query",
    fact: "\u56FD\u5BB6\u5F02\u5730\u5C31\u533B\u5907\u6848\u670D\u52A1\u63D0\u4F9B\u5907\u6848\u8BB0\u5F55\u53CA\u8DE8\u7701\u8054\u7F51\u5B9A\u70B9\u533B\u836F\u673A\u6784\u67E5\u8BE2\u3002",
    sourceId: "NHSA-2025-GUIDE",
    article: "\u67E5\u8BE2\u670D\u52A1",
    confidence: "A"
  },
  {
    id: "NAT-016",
    topic: "unknown",
    fact: "\u5177\u4F53\u62A5\u9500\u5F85\u9047\u3001\u8D77\u4ED8\u7EBF\u3001\u652F\u4ED8\u6BD4\u4F8B\u3001\u6700\u9AD8\u652F\u4ED8\u9650\u989D\u7B49\u5E94\u4EE5\u53C2\u4FDD\u5730\u653F\u7B56\u548C\u7ECF\u529E\u673A\u6784\u5B9E\u9645\u6267\u884C\u4E3A\u51C6\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u901A\u77E5\u7B2C\u4E8C\u90E8\u5206\uFF08\u4E00\uFF09",
    confidence: "A"
  },
  {
    id: "JX-001",
    topic: "channel",
    fact: "\u6C5F\u897F\u53C2\u4FDD\u4EBA\u5458\u53EF\u4F7F\u7528\u6C5F\u897F\u533B\u4FDD\u7F51\u4E0A\u670D\u52A1\u5927\u5385\u7B49\u6C5F\u897F\u5B98\u65B9\u533B\u4FDD\u516C\u5171\u670D\u52A1\u6E20\u9053\u3002",
    sourceId: "JIANGXI-SERVICE",
    article: "\u670D\u52A1\u95E8\u6237",
    confidence: "A"
  },
  {
    id: "JX-002",
    topic: "channel",
    fact: "\u6C5F\u897F\u7701\u533B\u7597\u4FDD\u969C\u5C40\u63D0\u4F9B\u6C5F\u897F\u667A\u6167\u533B\u4FDDAPP\u5B98\u65B9\u4E0B\u8F7D\u5165\u53E3\u3002",
    sourceId: "JIANGXI-APP",
    article: "\u4E0B\u8F7D\u9875",
    confidence: "A"
  },
  {
    id: "JX-003",
    topic: "safety",
    fact: "\u521D\u7248\u4E0D\u5199\u6B7B\u6C5F\u897F\u5404\u7EDF\u7B79\u5730\u533A\u5177\u4F53\u652F\u4ED8\u6BD4\u4F8B\uFF1B\u9700\u6309\u53C2\u4FDD\u5E02\u3001\u9669\u79CD\u3001\u5C31\u533B\u60C5\u5F62\u5411\u5B98\u65B9\u89C4\u5219\u6216\u7ECF\u529E\u673A\u6784\u6838\u9A8C\u3002",
    sourceId: "JIANGXI-SERVICE",
    article: "\u4EA7\u54C1\u4FDD\u5B88\u89C4\u5219",
    confidence: "A"
  },
  {
    id: "GZ-001",
    topic: "service",
    fact: "\u5E7F\u5DDE\u5DF2\u63D0\u4F9B\u8DE8\u7701\u5F02\u5730\u4F4F\u9662\u3001\u666E\u901A\u95E8\u8BCA\u548C\u95E8\u8BCA\u6162\u7279\u75C5\u76F4\u63A5\u7ED3\u7B97\u670D\u52A1\u3002",
    sourceId: "GUANGZHOU-2025-CROSSPROVINCE",
    article: "\u8DE8\u7701\u6765\u7A57\u5C31\u533B",
    confidence: "A"
  },
  {
    id: "GZ-002",
    topic: "query",
    fact: "\u5E7F\u5DDE\u5B98\u65B9\u63D0\u793A\u901A\u8FC7\u56FD\u5BB6\u533B\u4FDD\u670D\u52A1\u5E73\u53F0\u7B49\u5B98\u65B9\u6E20\u9053\u67E5\u8BE2\u5F02\u5730\u8054\u7F51\u5B9A\u70B9\u533B\u7597\u673A\u6784\u3002",
    sourceId: "GUANGZHOU-2025-CROSSPROVINCE",
    article: "\u5B9A\u70B9\u673A\u6784\u67E5\u8BE2",
    confidence: "A"
  },
  {
    id: "SAFE-001",
    topic: "boundary",
    fact: "\u672C\u5DE5\u5177\u4E0D\u5224\u65AD\u75BE\u75C5\u3001\u4E0D\u63A8\u8350\u533B\u9662\u3001\u4E0D\u627F\u8BFA\u62A5\u9500\u91D1\u989D\u3001\u4E0D\u66FF\u4EE3\u533B\u4FDD\u7ECF\u529E\u673A\u6784\u5BA1\u6838\u3002",
    sourceId: "NHSA-2022-22",
    article: "\u4EA7\u54C1\u8FB9\u754C",
    confidence: "A"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sources",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "\u5B98\u65B9\u4F9D\u636E" });
    const sources = sourcesJson;
    const facts = factsJson;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><h1>\u5B98\u65B9\u4F9D\u636E\u4E0E\u6838\u9A8C\u8BB0\u5F55</h1><p class="lead">\u5173\u952E\u89C4\u5219\u53EA\u5F15\u7528\u653F\u5E9C/\u533B\u4FDD\u5B98\u65B9\u6765\u6E90\u3002\u5185\u5BB9\u8FC7\u671F\u6216\u65E0\u6CD5\u786E\u8BA4\u65F6\uFF0C\u7CFB\u7EDF\u5E94\u8BE5\u63D0\u793A\u6838\u9A8C\uFF0C\u800C\u4E0D\u662F\u7EE7\u7EED\u8F93\u51FA\u786E\u5B9A\u7ED3\u8BBA\u3002</p><div class="source-list"><!--[-->`);
      ssrRenderList(unref(sources), (source) => {
        _push(`<a class="source-card"${ssrRenderAttr("href", source.url)} target="_blank" rel="noopener noreferrer"><strong>${ssrInterpolate(source.authority)}</strong><span>${ssrInterpolate(source.title)}</span><small>${ssrInterpolate(source.id)} \xB7 \u6838\u9A8C ${ssrInterpolate(source.verifiedAt)} \xB7 \u590D\u6838\u5468\u671F ${ssrInterpolate(source.reviewIntervalDays)} \u5929</small></a>`);
      });
      _push(`<!--]--></div><h2>\u5F53\u524D\u539F\u5B50\u89C4\u5219\uFF08${ssrInterpolate(unref(facts).length)} \u6761\uFF09</h2><div class="fact-table"><!--[-->`);
      ssrRenderList(unref(facts), (fact) => {
        _push(`<div class="fact-row"><code>${ssrInterpolate(fact.id)}</code><span>${ssrInterpolate(fact.fact)}</span><small>${ssrInterpolate(fact.sourceId)} \xB7 ${ssrInterpolate(fact.article)}</small></div>`);
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

export { _sfc_main as default };
//# sourceMappingURL=sources-BDIf-Q0C.mjs.map
