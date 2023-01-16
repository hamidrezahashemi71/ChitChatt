import React, { useState } from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelContainer, ChannelListContainer, Auth } from './components'
import 'stream-chat-react/dist/css/index.css'
import './App.css'


const apiKey = '778hw467f82k'
const clinet = StreamChat.getInstance(apiKey)
const cookies = new Cookies()
const authToken = cookies.get('token')

if (authToken) {
  clinet.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
}, authToken)
}

const App = () => {

  const [mode, setMode] = useState({
    createType: '',
    isCreating: false,
    isEditing: false
  })


  if (!authToken) return <Auth />
  
  return (
    <div className='app__wrapper'>
      <Chat client={clinet} theme="team light">
        <ChannelListContainer
          isCreating={mode.isCreating}
          setMode={setMode}
        />
        <ChannelContainer
          isCreating={mode.isCreating}
          isEditing={mode.isEditing}
          createType={mode.createType}
          setMode={setMode}
        />
      </Chat>
    </div>
  )
}

export default App