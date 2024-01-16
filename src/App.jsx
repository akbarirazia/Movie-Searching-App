import { ApiCall } from "./Data/ApiCall"
import HomePage from "./Layout/HomePage"

function App() {
  ApiCall("joker")
  return (
    <>
      <HomePage />
    </>
  )
}

export default App
