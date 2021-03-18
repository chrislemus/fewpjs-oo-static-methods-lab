class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.substring(1)
  }
  static sanitize(string) {
    const filteredWords = string.match(/[\w\d\s-']/g)
    return filteredWords ? filteredWords.join('') : ''
  }
  static titleize(string) {
    const noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return string.split(/\s/).map((word, idx) => {
      const isCap = idx === 0 || !noCap.includes(word)
      return isCap ? this.capitalize(word) : word
    }).join(' ')
  }
  
}