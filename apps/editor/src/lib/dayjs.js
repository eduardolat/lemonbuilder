import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import es from 'dayjs/locale/es'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(localizedFormat)
dayjs.extend(customParseFormat)

dayjs.locale(es)

dayjs.tz.setDefault('Europe/Madrid')

const cleanDateFormat = (date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm')
}

export { dayjs, cleanDateFormat }
