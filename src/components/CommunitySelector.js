import React from 'react'
import './CommunitySelector.css'

const CommunitySelector = (props) => {
  return (
    <div>
      <div>CommunitySelector</div>
      <button onClick={() => props.displayPage('UserLocationShareScreen')}>
        UserLocationShareScreen
      </button>
    </div>
  )
}

export default CommunitySelector
