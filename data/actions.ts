import type { ActionDefinition } from '../types/domain'

export const ACTIONS: Record<string, ActionDefinition> = {
  CHECK_FILING: {
    id: 'CHECK_FILING', title: '先确认有没有有效异地备案', kind: 'check',
    body: '先在国家医保官方渠道查询备案记录。若已经有覆盖当前就医地且仍有效的备案，不要重复办理。',
    sourceIds: ['NHSA-2025-GUIDE', 'NPS-2025-MEDICAL'],
    officialUrl: 'https://gjzwfw.www.gov.cn/col/col1576/index.html', officialLabel: '打开国家政务服务平台医保专区'
  },
  APPLY_LONG_TERM: {
    id: 'APPLY_LONG_TERM', title: '无有效备案时，按长期居住情形办理备案', kind: 'do',
    body: '如果老人长期在参保省外居住，优先按实际情况选择长期居住相关备案类型。材料和具体审核以参保地页面提示为准。',
    sourceIds: ['NHSA-2022-22', 'NHSA-2025-GUIDE'],
    officialUrl: 'https://fuwu.nhsa.gov.cn/', officialLabel: '打开国家医保服务平台'
  },
  APPLY_TEMP: {
    id: 'APPLY_TEMP', title: '按实际情形办理临时外出/转诊备案', kind: 'do',
    body: '临时外出、转诊等情形应选择与实际情况相符的备案类型。不同参保地对待遇和转诊材料可能有差异。',
    sourceIds: ['NHSA-2022-22', 'NHSA-2025-GUIDE'],
    officialUrl: 'https://fuwu.nhsa.gov.cn/', officialLabel: '打开国家医保服务平台'
  },
  CONFIRM_REFERRAL: {
    id: 'CONFIRM_REFERRAL', title: '如属于转诊，先确认参保地转诊要求', kind: 'check',
    body: '国家规程要求异地转诊人员按参保地规定提供转诊转院证明材料。请以江西具体参保统筹地区的官方要求为准。',
    sourceIds: ['NHSA-2022-22', 'JIANGXI-SERVICE'],
    officialUrl: 'https://ggfw.ybj.jiangxi.gov.cn/', officialLabel: '打开江西医保网上服务大厅'
  },
  CHECK_NETWORK: {
    id: 'CHECK_NETWORK', title: '确认目标医院支持相应的跨省直接结算', kind: 'check',
    body: '不要仅凭医院名称判断。请通过国家医保官方查询确认目标机构是否已开通你需要的住院、普通门诊或门诊慢特病跨省结算服务。',
    sourceIds: ['NHSA-2025-GUIDE', 'GUANGZHOU-2025-CROSSPROVINCE'],
    officialUrl: 'https://gjzwfw.www.gov.cn/col/col1576/index.html', officialLabel: '查询跨省联网定点机构'
  },
  PREPARE_CREDENTIAL: {
    id: 'PREPARE_CREDENTIAL', title: '准备医保电子凭证或社会保障卡', kind: 'do',
    body: '到跨省联网定点医药机构就医时，主动表明异地参保身份，并按医院要求出示医保电子凭证或社会保障卡等有效凭证。',
    sourceIds: ['NHSA-2022-22']
  },
  TELL_HOSPITAL: {
    id: 'TELL_HOSPITAL', title: '入院/就诊时主动说明需要跨省医保直接结算', kind: 'do',
    body: '尽早向医院收费或医保窗口说明参保地和跨省结算需求，避免到出院结算时才发现信息不一致。',
    sourceIds: ['NHSA-2022-22']
  },
  EMERGENCY_FIRST: {
    id: 'EMERGENCY_FIRST', title: '急诊抢救时先就医，不要为了备案耽误治疗', kind: 'warning',
    body: '国家规则明确异地急诊抢救人员视同已备案。是否属于急诊抢救以及系统上传标识，由医疗机构和医保业务流程确认，本工具不作医学判断。',
    sourceIds: ['NHSA-2022-22']
  },
  ASK_HOSPITAL_OFFICE: {
    id: 'ASK_HOSPITAL_OFFICE', title: '结算异常先找医院医保办确认具体失败原因', kind: 'contact',
    body: '先确认是否为未备案、备案地不匹配、医院未开通对应结算类型、参保状态或系统信息问题，再决定下一步找参保地医保经办机构。',
    sourceIds: ['NHSA-2022-22']
  },
  COMPLETE_BEFORE_DISCHARGE: {
    id: 'COMPLETE_BEFORE_DISCHARGE', title: '还没出院：尽快在结算前补办备案', kind: 'do',
    body: '国家经办规程明确：在跨省联网定点医疗机构已经入院、此前未备案的，若在出院结算前完成备案，医疗机构应提供跨省直接结算服务。办完后请让医院医保办重新核验。',
    sourceIds: ['NHSA-2022-22'],
    officialUrl: 'https://fuwu.nhsa.gov.cn/', officialLabel: '去国家医保官方平台办理/查询'
  },
  SAVE_DOCUMENTS: {
    id: 'SAVE_DOCUMENTS', title: '已经自费出院：先把票据和医疗资料保存完整', kind: 'do',
    body: '保存收费票据、费用清单、出院记录等参保地后续可能要求的材料。具体材料清单以江西参保统筹地区的官方手工/零星报销要求为准。',
    sourceIds: ['NHSA-2022-22', 'JIANGXI-SERVICE']
  },
  CHECK_MANUAL_REIMBURSEMENT: {
    id: 'CHECK_MANUAL_REIMBURSEMENT', title: '向江西参保地确认是否可申请手工/零星报销', kind: 'contact',
    body: '已经完成自费结算后，不要由本工具承诺一定能报。请按参保地具体规则核实资格、时限、材料和办理渠道。',
    sourceIds: ['NHSA-2022-22', 'JIANGXI-SERVICE'],
    officialUrl: 'https://ggfw.ybj.jiangxi.gov.cn/', officialLabel: '打开江西医保网上服务大厅'
  },
  CHRONIC_CHECK: {
    id: 'CHRONIC_CHECK', title: '门诊慢特病先确认资格和病种是否支持跨省直接结算', kind: 'check',
    body: '门诊慢特病与普通门诊不同，应先确认参保地慢特病待遇资格以及目标机构是否开通对应病种的跨省直接结算。',
    sourceIds: ['NHSA-2022-22', 'NPS-2025-MEDICAL'],
    officialUrl: 'https://gjzwfw.www.gov.cn/col/col1576/index.html', officialLabel: '查询门诊慢特病资格/服务'
  },
  JIANGXI_CONFIRM_BENEFIT: {
    id: 'JIANGXI_CONFIRM_BENEFIT', title: '具体报销比例不要猜：以江西参保地政策为准', kind: 'warning',
    body: '跨省结算遵循“就医地目录、参保地政策、就医地管理”。起付线、支付比例、最高支付限额等主要由参保地政策计算；江西不同统筹地区和就医情形可能不同。',
    sourceIds: ['NHSA-2022-22', 'JIANGXI-SERVICE'],
    officialUrl: 'https://ggfw.ybj.jiangxi.gov.cn/', officialLabel: '查看江西医保官方服务'
  },
  NON_NETWORK_WARNING: {
    id: 'NON_NETWORK_WARNING', title: '目标医院不是跨省联网定点时，不要默认可以现场直接报销', kind: 'warning',
    body: '国家规程规定，在非跨省联网定点医药机构发生的费用按参保地规定执行。请先向江西参保地确认后续处理方式。',
    sourceIds: ['NHSA-2022-22', 'JIANGXI-SERVICE']
  },
  CONTACT_JIANGXI: {
    id: 'CONTACT_JIANGXI', title: '遇到待遇、资格、材料问题：联系江西参保地医保经办机构', kind: 'contact',
    body: '“能不能报、报多少、要什么材料”属于参保地政策执行问题。优先通过江西医保官方渠道或当地政务/医保经办机构确认。',
    sourceIds: ['JIANGXI-SERVICE'],
    officialUrl: 'https://ggfw.ybj.jiangxi.gov.cn/', officialLabel: '江西医保网上服务大厅'
  },
  GUANGZHOU_INFO: {
    id: 'GUANGZHOU_INFO', title: '广州作为就医地已提供跨省住院、门诊等直接结算服务', kind: 'check',
    body: '是否能在某家医院直接结算，仍应以国家医保官方实时查询和医院医保办确认为准。',
    sourceIds: ['GUANGZHOU-2025-CROSSPROVINCE'],
    officialUrl: 'https://www.gz.gov.cn/zwfw/zxfw/ylfw/content/post_10224952.html', officialLabel: '查看广州官方说明'
  }
}
