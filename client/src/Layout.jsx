import React, { useState } from 'react'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'
import SearchContainer from './components/SearchContainer'

function Layout() {
    const [showSearch,setShowSearch]=useState(false)
    const handleChange=()=>{
        if(showSearch==false)
        {setShowSearch(true)}
        else
        {setShowSearch(false)}
    }
    return (
        <div className='flex flex-col w-full h-screen'>
            <Header />
            {!showSearch&&<MainContainer handleChange={handleChange} />}
            {showSearch&&<SearchContainer handleChange={handleChange} />}
            <Footer />
        </div>

    )
}

export default Layout