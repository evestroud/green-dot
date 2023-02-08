import React from 'react'
import './UserLocationShareScreen.css'

const UserLocationShareScreen = (props) => {
  return (
    <div>
    <div>UserLocationShareScreen</div>
    <button onClick={() => props.displayPage('CommunityMap')}>
  CommunityMap
</button>
</div>

  )
}

export default UserLocationShareScreen