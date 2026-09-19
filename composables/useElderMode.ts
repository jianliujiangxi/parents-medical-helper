export function useElderMode() {
  const elderMode = useState<boolean>('elder-mode', () => false)
  if (import.meta.client) {
    const saved = localStorage.getItem('elder-mode')
    if (saved !== null) elderMode.value = saved === '1'
    watch(elderMode, (value) => localStorage.setItem('elder-mode', value ? '1' : '0'))
  }
  return { elderMode }
}
