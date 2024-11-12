/**
 * Given a string and a substring, find the number of instances of the substring in the string.
 * return number of instances of substring in string
 * For example, find how many times 'danger' exists in the string 'dangdandangerererer' (answer is 3)
 */
it.only('should find instances of string in other string', () => {
  const string = 'banana'
  // const substring = 'thbthathnthabthnabthathnthatnhthabththtanana'
  const substring =
    'thbbatnahnaathnthathnabthathbanananthatnhthabththtabanananana' // 6
  // const substring = 'bananabnnnnnnnnananaaaaaaaaaaaa' // 2

  const createStore = (string) => {
    const obj = {}
    for (let i = 0; i < string.length; i++) {
      const letter = string[i]

      obj[letter] = {
        actual: 0,
        required: obj[letter] ? obj[letter].required + 1 : 1,
      }
    }

    return obj
  }

  const setProperties = (string, obj, key) => {
    for (let i = 0; i < string.length; i++) {
      const letter = string[i]

      if (obj[letter]) {
        obj[letter][key]++
      }
    }
    return obj
  }

  let store = createStore(string)
  store = setProperties(substring, store, 'actual')

  const instanceMax = Math.min(
    ...Object.values(store).map((value) => value.actual / value.required),
  )

  console.log(Math.floor(instanceMax))
})
