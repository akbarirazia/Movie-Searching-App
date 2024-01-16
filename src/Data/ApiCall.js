export function ApiCall(name) {
  const URL = `http://www.omdbapi.com/?t=${name}&apikey=528abed3`
  return fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error fetching! Status: ${res.status}`)
      }
      return res.json()
    })
    .then((data) => {
      //   console.log(data)
      return data
    })
    .catch((error) => {
      console.error("Error: ", error)
    })
}

console.log(ApiCall("The Nun"))
console.log(ApiCall("Squid Game"))
console.log(ApiCall("joker"))
