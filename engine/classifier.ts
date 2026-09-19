import type { PathKey, UserContext } from '../types/domain'

export function classifyPath(ctx: UserContext): PathKey {
  if (ctx.reason === 'emergency') return 'EMERGENCY'
  if (ctx.stage === 'hospitalized' && ctx.filingStatus !== 'valid') return 'HOSPITALIZED_NO_FILING'
  if (ctx.stage === 'discharged') return 'DISCHARGED_SELF_PAY'
  if (ctx.reason === 'long_term') return 'LONG_TERM_PRE'
  if (ctx.reason === 'referral') return 'REFERRAL_PRE'
  return 'TEMPORARY_PRE'
}
