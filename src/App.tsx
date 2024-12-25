import { useState } from "react"
import Header from "./Modules/Header/Header"
import HomePage from "./pages/HomePage/HomePage"

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <>
      <Header isToggled={isDark} setIsToggled={setIsDark}/>
      <HomePage isDark={isDark}/>
    </>
  )
}

export default App
