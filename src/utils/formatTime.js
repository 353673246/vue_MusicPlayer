export const formatTime = (num) => {
  let mm = parseInt(num / 60)
  let ss = parseInt(num - mm * 60)
  ss = ss < 10 ? `0${ss}` : ss
  return `${mm}:${ss}`
}
