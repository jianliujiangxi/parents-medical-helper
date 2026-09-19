const sourcesJson = [
  {
    id: "NHSA-2022-22",
    authority: "\u56FD\u5BB6\u533B\u7597\u4FDD\u969C\u5C40\u3001\u8D22\u653F\u90E8",
    title: "\u5173\u4E8E\u8FDB\u4E00\u6B65\u505A\u597D\u57FA\u672C\u533B\u7597\u4FDD\u9669\u8DE8\u7701\u5F02\u5730\u5C31\u533B\u76F4\u63A5\u7ED3\u7B97\u5DE5\u4F5C\u7684\u901A\u77E5\uFF08\u533B\u4FDD\u53D1\u30142022\u301522\u53F7\uFF09\u53CA\u7ECF\u529E\u89C4\u7A0B",
    url: "https://www.nhsa.gov.cn/art/2022/7/26/art_104_8629.html",
    level: "national",
    publishedAt: "2022-07-26",
    effectiveFrom: "2023-01-01",
    verifiedAt: "2026-09-19",
    reviewIntervalDays: 90,
    note: "\u8DE8\u7701\u5F02\u5730\u5C31\u533B\u5206\u7C7B\u3001\u5907\u6848\u3001\u6025\u8BCA\u3001\u6301\u7801\u5361\u3001\u76F4\u63A5\u7ED3\u7B97\u7B49\u56FD\u5BB6\u7EDF\u4E00\u89C4\u5219\u3002"
  },
  {
    id: "NHSA-2025-GUIDE",
    authority: "\u56FD\u5BB6\u533B\u7597\u4FDD\u969C\u5C40",
    title: "\u201C\u8DE8\u7701\u5F02\u5730\u201D\u5C31\u533B\u5982\u4F55\u76F4\u63A5\u62A5\u9500\uFF1F",
    url: "https://www.nhsa.gov.cn/art/2025/6/7/art_14_16754.html",
    level: "national",
    publishedAt: "2025-06-07",
    verifiedAt: "2026-09-19",
    reviewIntervalDays: 90,
    note: "\u56FD\u5BB6\u533B\u4FDD\u5C40\u5F02\u5730\u5907\u6848\u64CD\u4F5C\u4E0E\u67E5\u8BE2\u670D\u52A1\u8BF4\u660E\u3002"
  },
  {
    id: "NPS-2025-MEDICAL",
    authority: "\u56FD\u5BB6\u653F\u52A1\u670D\u52A1\u5E73\u53F0",
    title: "\u533B\u4FDD\u670D\u52A1\u4E13\u533A\uFF1A\u5F02\u5730\u5C31\u533B\u529E\u7406\u6D41\u7A0B",
    url: "https://gjzwfw.www.gov.cn/col/col1576/index.html",
    level: "national",
    verifiedAt: "2026-09-19",
    reviewIntervalDays: 90,
    note: "\u5B98\u65B9\u516C\u5171\u670D\u52A1\u5165\u53E3\uFF0C\u5305\u542B\u5907\u6848\u3001\u5907\u6848\u8BB0\u5F55\u3001\u5B9A\u70B9\u673A\u6784\u3001\u6162\u7279\u75C5\u8D44\u683C\u7B49\u3002"
  },
  {
    id: "NHSA-SERVICE-PORTAL",
    authority: "\u56FD\u5BB6\u533B\u7597\u4FDD\u969C\u5C40",
    title: "\u56FD\u5BB6\u533B\u4FDD\u670D\u52A1\u5E73\u53F0",
    url: "https://fuwu.nhsa.gov.cn/",
    level: "national",
    verifiedAt: "2026-09-19",
    reviewIntervalDays: 60,
    note: "\u56FD\u5BB6\u533B\u4FDD\u5B98\u65B9\u670D\u52A1\u5E73\u53F0\u3002\u90E8\u5206\u5177\u4F53\u529E\u7406\u9700\u4F7F\u7528APP/\u5C0F\u7A0B\u5E8F\u3002"
  },
  {
    id: "JIANGXI-SERVICE",
    authority: "\u6C5F\u897F\u7701\u533B\u7597\u4FDD\u969C\u5C40",
    title: "\u6C5F\u897F\u533B\u4FDD\u7F51\u4E0A\u670D\u52A1\u5927\u5385",
    url: "https://ggfw.ybj.jiangxi.gov.cn/",
    level: "province",
    verifiedAt: "2026-09-19",
    reviewIntervalDays: 60,
    note: "\u6C5F\u897F\u5B98\u65B9\u533B\u4FDD\u516C\u5171\u670D\u52A1\u95E8\u6237\u3002"
  },
  {
    id: "JIANGXI-APP",
    authority: "\u6C5F\u897F\u7701\u533B\u7597\u4FDD\u969C\u5C40",
    title: "\u6C5F\u897F\u667A\u6167\u533B\u4FDDAPP",
    url: "https://ggfw.ybj.jiangxi.gov.cn/h5-download/",
    level: "province",
    verifiedAt: "2026-09-19",
    reviewIntervalDays: 90,
    note: "\u6C5F\u897F\u667A\u6167\u533B\u4FDD\u5B98\u65B9\u4E0B\u8F7D\u5165\u53E3\u3002"
  },
  {
    id: "GUANGZHOU-2025-CROSSPROVINCE",
    authority: "\u5E7F\u5DDE\u5E02\u4EBA\u6C11\u653F\u5E9C\uFF08\u6765\u6E90\uFF1A\u5E7F\u5DDE\u533B\u4FDD\uFF09",
    title: "\u5F02\u5730\u5C31\u533B\u4E0D\u7528\u6101\uFF01\u4F4F\u9662\u3001\u95E8\u8BCA\u8D39\u7528\u76F4\u63A5\u7ED3\u7B97\uFF0C\u4FBF\u6377\u67E5\u8BE2\u5B9A\u70B9\u533B\u7597\u673A\u6784\u540D\u5355",
    url: "https://www.gz.gov.cn/zwfw/zxfw/ylfw/content/post_10224952.html",
    level: "city",
    publishedAt: "2025-04-17",
    verifiedAt: "2026-09-19",
    reviewIntervalDays: 90,
    note: "\u5E7F\u5DDE\u4F5C\u4E3A\u5C31\u533B\u5730\u7684\u8DE8\u7701\u4F4F\u9662\u3001\u666E\u901A\u95E8\u8BCA\u3001\u95E8\u8BCA\u6162\u7279\u75C5\u76F4\u63A5\u7ED3\u7B97\u670D\u52A1\u8BF4\u660E\u3002"
  }
];

export { sourcesJson as s };
//# sourceMappingURL=sources-Cht0IMjG.mjs.map
