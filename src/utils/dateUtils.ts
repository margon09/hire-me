export const isPastTime = (time: string): boolean => {
  const [hours, minutes] = time.split(':').map(Number)
  const now = new Date()
  const customTime = new Date()
  customTime.setHours(hours, minutes, 0, 0)
  return now > customTime
}

export const getFormattedDate = (time: string): string => {
  const [hours, minutes] = time.split(':').map(Number)
  const today = new Date()
  today.setHours(hours + 1, minutes, 0, 0)
  return today.toISOString().replace('.000', '').replace('Z', '+00:00')
}

export const formatToLocalTime = (isoString: string | null): string => {
  if(isoString){
    const date = new Date(isoString)
    date.setHours(date.getHours() - 1)
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${hours}:${minutes}`
  }
  return ''
}