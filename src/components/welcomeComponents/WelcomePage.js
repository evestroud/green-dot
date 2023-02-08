import './WelcomePage.css'
import {useState, React } from 'react'

const WelcomePage = props => {
  const [welcomePage, setIsWelcomePage] = useState("Welcome1")

  const displayWelcomePage = pageName => {
    setIsWelcomePage(pageName)
  }
  return (
    <div>
      <div>WelcomePage</div>
      <button onClick={() => props.displayPage('CommunitySelector')}>
        CommunitySelector
      </button>
      {/* {welcomePage == "Welcome1" ? <Welcome1 displayWelcome={displayWelcomePage}/> : null } */}
    </div>
  )
}

export default WelcomePage


