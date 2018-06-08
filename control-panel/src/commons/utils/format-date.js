const padNumber = number => number < 10
  ? '0' + number
  : number

const convertDate = (date, from, to) => {
  if (!date) {
    return ''
  }
  try {
    return date
      .split(from)
      .reverse()
      .join(to)
  }
  catch(err) {
    return ''
  }
}

export const convertFromDDMMYYYY = dateString => convertDate(dateString, '/', '-')

export const convertFromYYYYMMDD = dateString => convertDate(dateString, '-', '/')

const formatDate = dateString => {
  const date = dateString ? new Date(dateString) : new Date()
  return [
    date.getFullYear(),
    padNumber(date.getMonth() + 1),
    padNumber(date.getDate())
  ].join('-')
}

export default formatDate
