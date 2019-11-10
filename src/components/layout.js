import React from 'react'
import PrimarySearchAppBar from './nav'
import Footer from './footer'


const Layout = (props) => {
    return (
        <div>
            <PrimarySearchAppBar />
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout