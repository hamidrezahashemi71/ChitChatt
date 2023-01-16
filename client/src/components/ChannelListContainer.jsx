import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'
import Cookies from 'universal-cookie'
import { BiChat, BiLogOut } from 'react-icons/bi'

const Sidebar = ({ logout }) => (
  <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
        <BiChat size={30}/>
      </div>
    </div>
    <div className='channel-list__sidebar__icon2' onClick={logout}>
      <div className='icon1__inner'>
        <BiLogOut size={30} />
      </div>
    </div>
  </div>
)

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Chit Chat</p>
  </div>
)

const ChennelListContainer = () => {

  const cookies = new Cookies()

  const logout = () => {
    cookies.remove('token');
    cookies.remove('userId');
    cookies.remove('username');
    cookies.remove('fullName');
    cookies.remove('avatarURL');
    cookies.remove('hashedPassword');
    cookies.remove('phoneNumber');

    window.location.reload()
  }

  return (
    <>
      <Sidebar logout={logout} />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type = 'team'
            /> 
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type = 'team'
            />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type = 'messaging'
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type = 'messaging'
            />
          )}
        />
      </div>
    </>
  )
}

export default ChennelListContainer