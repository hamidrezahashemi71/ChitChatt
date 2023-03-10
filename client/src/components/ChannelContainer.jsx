import React, { useState } from 'react'
import { Channel, useChatContext, MessageTeam } from 'stream-chat-react'
import { ChannelInner, CreateChannel, EditChannel } from './'

const ChannelContainer = ({ isCreating, isEditing, createType, setMode }) => {
  const { channel } = useChatContext()

  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel
          createType={createType}
          setMode={setMode}
        />
      </div>
    )
  }

  if (isEditing) {
    return (
      <div className="channel__container">
      <EditChannel
        isEditing={isEditing}
        setMode={setMode}
      />
    </div>
    )
  }

  const EmptyState = () => (
    <div className="channel-empty__container">
      <p className="channel-empty__first">This is the beginning of your chat history</p>
      <p className="channel-empty__second">Send messages, attachments, emojies and more...</p>
    </div>
  )

  return (
    <div className='channel__container'>
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => <MessageTeam key={i} {...messageProps} />}
      >
        <ChannelInner
          isEditing={isEditing}
          setMode={setMode}
        />
      </Channel>
    </div>
  )
}

export default ChannelContainer