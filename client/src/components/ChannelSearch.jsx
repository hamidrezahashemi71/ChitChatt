import React, { useState, useEffect } from 'react'
import { useChatContext } from 'stream-chat-react'
import { BiSearchAlt } from 'react-icons/bi'

const ChannelSearch = () => {
  const [searchData, setSearchData] = useState({
    query: '',
    loading: false
  })
 
  const getChannels = async (text) => {
    try {
      // TODO fetch channels
    } catch (error) {
      setSearchData({...searchData, query:''})
    }
  } 

  const onSearch = (e) => {
    e.preventDefault()
    setSearchData({...searchData, loading:true, query: e.target.value})
  }
  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <BiSearchAlt className='text-white'/>
        </div>
        <input
          type="text"
          className="channel-search__input__text"
          placeholder='Search...'
          value={searchData.query}
          onChange={onSearch}
        />
      </div>
    </div>
  )
}

export default ChannelSearch