import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'

const Header = props => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
        </div>
    )
}

Header.propTypes = {

}

export default Header
