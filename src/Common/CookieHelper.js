import Cookies from 'universal-cookie'
const cookies = new Cookies()
export default class CookieHelper {
  static set (key, value, expireInMinute = 10000) {
    const date = new Date()
    date.setTime(date.getTime() + expireInMinute * 60 * 100)
    cookies.set(key, value, {
      path: '/',
      expires: date
    })
  }

  static get (key) {
    return cookies.get(key)
  }

  static remove (key) {
    cookies.remove(key)
  }
}
