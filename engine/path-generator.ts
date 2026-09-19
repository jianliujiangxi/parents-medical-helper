import { ACTIONS } from '../data/actions'
import { classifyPath } from './classifier'
import type { GuidanceResult, UserContext } from '../types/domain'

const PATH_ACTIONS: Record<string, string[]> = {
  LONG_TERM_PRE: ['CHECK_FILING', 'APPLY_LONG_TERM', 'CHECK_NETWORK', 'PREPARE_CREDENTIAL', 'TELL_HOSPITAL', 'JIANGXI_CONFIRM_BENEFIT'],
  REFERRAL_PRE: ['CONFIRM_REFERRAL', 'CHECK_FILING', 'APPLY_TEMP', 'CHECK_NETWORK', 'PREPARE_CREDENTIAL', 'TELL_HOSPITAL', 'JIANGXI_CONFIRM_BENEFIT'],
  TEMPORARY_PRE: ['CHECK_FILING', 'APPLY_TEMP', 'CHECK_NETWORK', 'PREPARE_CREDENTIAL', 'TELL_HOSPITAL', 'JIANGXI_CONFIRM_BENEFIT'],
  EMERGENCY: ['EMERGENCY_FIRST', 'TELL_HOSPITAL', 'ASK_HOSPITAL_OFFICE', 'JIANGXI_CONFIRM_BENEFIT'],
  HOSPITALIZED_NO_FILING: ['CHECK_NETWORK', 'COMPLETE_BEFORE_DISCHARGE', 'ASK_HOSPITAL_OFFICE', 'JIANGXI_CONFIRM_BENEFIT'],
  DISCHARGED_SELF_PAY: ['SAVE_DOCUMENTS', 'CHECK_MANUAL_REIMBURSEMENT', 'CONTACT_JIANGXI', 'JIANGXI_CONFIRM_BENEFIT']
}

const META: Record<string, { title: string; summary: string }> = {
  LONG_TERM_PRE: { title: '长期在外地居住：按这条顺序准备', summary: '先查备案，再按长期居住情形办理；确认医院联网后持码卡就医。' },
  REFERRAL_PRE: { title: '准备转诊去外省：先确认转诊和备案', summary: '转诊要求由参保地执行，别只看就医地医院是否接诊。' },
  TEMPORARY_PRE: { title: '临时去外省就医：先核实备案类型和待遇', summary: '临时外出待遇可能与本地不同，具体以参保地政策为准。' },
  EMERGENCY: { title: '外地突然急诊：先就医，再确认医保结算', summary: '国家规则对异地急诊抢救有特殊安排，不要为了备案耽误治疗。' },
  HOSPITALIZED_NO_FILING: { title: '已经住院但没备案：先别急着自费出院', summary: '若医院属于跨省联网定点，尽快在出院结算前补办备案并让医院重新核验。' },
  DISCHARGED_SELF_PAY: { title: '已经自费出院：整理资料并向参保地确认手工报销', summary: '是否可报、报多少、需要什么材料，应由江西具体参保统筹地区规则决定。' }
}

export function generateGuidance(ctx: UserContext): GuidanceResult {
  const pathKey = classifyPath(ctx)
  const ids = [...PATH_ACTIONS[pathKey]]

  if (ctx.careType === 'chronic' && !ids.includes('CHRONIC_CHECK')) ids.splice(Math.min(2, ids.length), 0, 'CHRONIC_CHECK')
  if (ctx.networkStatus === 'no' && !ids.includes('NON_NETWORK_WARNING')) ids.splice(1, 0, 'NON_NETWORK_WARNING')
  if (ctx.destinationCity === 'guangzhou' && !ids.includes('GUANGZHOU_INFO')) ids.splice(Math.min(3, ids.length), 0, 'GUANGZHOU_INFO')

  const steps = ids.map(id => ACTIONS[id]).filter(Boolean)
  const sourceIds = [...new Set(steps.flatMap(step => step.sourceIds))]
  const notices = [
    '本工具只做办事导航，不替代医保经办机构的资格审核和待遇计算。',
    '不输入姓名、身份证号、医保号或病历信息也能使用本工具。',
    '如页面与官方最新办理页面冲突，以官方实时规则和经办机构答复为准。'
  ]

  return { pathKey, title: META[pathKey].title, summary: META[pathKey].summary, steps, notices, sourceIds }
}
