import React from 'react'
import './Notification.css'


export const showSuccessMsg = (msg) => {
    return <div id='hideMe' className="successMsg">{msg}</div>
}