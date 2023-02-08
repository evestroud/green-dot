import React from 'react'
import './CommunitySelector.css'

const CommunitySelector = ({ setCommunity }) => {
  console.log("CommunitySelector")
  return (
    <div>
      <div>CommunitySelector</div>
      <button onClick={() => setCommunity(true)}>
        UserLocationShareScreen
      </button>
    </div>
  )
}

export default CommunitySelector
