export default {
  getARRAYStorage(STORAGE_KEY) {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '[true, false, false, false]')
  },
  setARRAYStorage(STORAGE_KEY, val) {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
