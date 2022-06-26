import React from 'react'
import './home.css'

import Header from '../../assets/home.jpg'

const Home = () => {
  return (
    <div className='mboard__header'>
        <img src={Header} alt='Header' />
    </div>
  )
}

export default Home