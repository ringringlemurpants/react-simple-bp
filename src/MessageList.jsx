/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import Message from './Message.jsx'

class MessageList extends Component {
  render() {
    const messageOrNotify = this.props.messages.map(message => (
      <Message key={message.id} username={message.username} content={message.content} type={message.type} />
    ))

    return(
      <main className="messages">
        {messageOrNotify}
      </main>
    )
  }
}

export default MessageList
