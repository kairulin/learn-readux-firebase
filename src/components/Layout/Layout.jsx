import React from 'react'
import Routers from '../../roters/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = () => {
    return (
        <>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </>
    )
}

export default Layout