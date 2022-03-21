import React from 'react'
import "./MessageHistory.css"


function MessageHistory({ msg }) {
   
 if(!msg) return null
    return (
        msg.map((message, i) => (
                 
            <div  key={i} className='message-history mt-3'>
            <div className='send-message text-secondary mt-3' style={{fontWeight : "bold"}}>
                <div className='sender'>{message.sender}</div>
                <div className='date'>{message.msgAt && new Date(message.msgAt).toLocaleDateString()}</div>
            </div>
            <div className='reply-message'>
            {message.message}
            </div>
        </div>
      
        ))
    )
}

export default MessageHistory
