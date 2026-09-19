import type { UserContext } from '../types/domain'

const defaults: UserContext = {
  actor: 'parent', insuranceProvince: 'jiangxi', insuranceCity: '',
  destinationProvince: 'guangdong', destinationCity: 'guangzhou',
  insuranceType: 'unknown', reason: 'long_term', careType: 'inpatient',
  stage: 'before', filingStatus: 'unknown', networkStatus: 'unknown'
}

export function contextFromQuery(query: Record<string, unknown>): UserContext {
  const get = <T extends string>(key: keyof UserContext, allowed: readonly T[], fallback: T): T => {
    const raw = String(query[key as string] ?? '') as T
    return allowed.includes(raw) ? raw : fallback
  }
  return {
    actor: get('actor', ['self','parent'] as const, defaults.actor),
    insuranceProvince: String(query.insuranceProvince ?? defaults.insuranceProvince),
    insuranceCity: String(query.insuranceCity ?? ''),
    destinationProvince: String(query.destinationProvince ?? defaults.destinationProvince),
    destinationCity: String(query.destinationCity ?? defaults.destinationCity),
    insuranceType: get('insuranceType', ['employee','resident','unknown'] as const, defaults.insuranceType),
    reason: get('reason', ['long_term','referral','temporary','emergency','unknown'] as const, defaults.reason),
    careType: get('careType', ['inpatient','outpatient','chronic'] as const, defaults.careType),
    stage: get('stage', ['before','hospitalized','discharged'] as const, defaults.stage),
    filingStatus: get('filingStatus', ['valid','none','unknown'] as const, defaults.filingStatus),
    networkStatus: get('networkStatus', ['yes','no','unknown'] as const, defaults.networkStatus)
  }
}

export function contextToQuery(ctx: UserContext): Record<string, string> {
  return Object.fromEntries(Object.entries(ctx).map(([k,v]) => [k, String(v ?? '')]))
}
