import React from 'react'
import { BiAddToQueue } from 'react-icons/bi'

const TeamChannelList = ({ setToggleContainer, children, error = false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing }) => {
  if (error) {
    return type === 'team' && (
      <div className='team-channel-list'>
        <p className='team-channel-list__message'>
          Connection Error! Try again...
        </p>
    </div>
    )
  }

  if (loading) {
    return type === 'team' ? (
      <div className='team-channel-list'>
        <p className='team-channel-list__message'>
          {type === 'team' ? 'Channels' : 'Messages'} loading ...
        </p>
    </div> 
    ): null
  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
         {type === 'team' ? 'Channels' : 'Direct Messages'}
        </p>
        <BiAddToQueue
          className='text-white'
          onClick={() => {
            setCreateType(type);
            setIsCreating((prevState) => !prevState);
            setIsEditing(false);
            if(setToggleContainer) setToggleContainer((prevState) => !prevState) 
          }}
        />
      </div>
      {children}
    </div>
  )
}

export default TeamChannelList