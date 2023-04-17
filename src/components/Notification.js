import React from 'react'

function Notification({ showNotification }) {
  return (
    // conditionally render page item based on letter entry 
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Letter Already entered</p>
    </div>
  )
}

export default Notification
