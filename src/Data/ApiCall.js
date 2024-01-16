export function ApiCall(name) {
  const URL = `http://www.omdbapi.com/?t=${name}&apikey=528abed3`
  fetch(URL)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
    })
}
