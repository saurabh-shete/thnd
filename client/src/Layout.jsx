import React from 'react'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'

function Layout() {
    return (
        <div className='flex flex-col w-full h-screen'>
            <Header />
            <MainContainer />
            <Footer />
        </div>

    )
}

export default Layout