import React from 'react'
import { Header, Sidebar } from '../../components'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className='home'>
    <div className='side'>
        <Sidebar />
    </div>
    <div className='body'>
        <Header />
    </div>
    </div>
  )
}

export default Homepage