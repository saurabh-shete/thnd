import React from 'react'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'

function Layout() {
    return (
        <div className='grid gap-4 w-full h-screen '>
            <Header />
            <MainContainer />
            <Footer />
        </div>
    )
}

export default Layout