import React from 'react'

import "./header.css"
import Logo from '../../assets/image/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
    return (
        <div  className='header-outer-container'>
            <div className='header-container'>
                <div className='header-left'>
                    <ul>
                        <img src={Logo} alt="" width={'100'} height={'90'} />
                        <li>Ntflix</li>
                        <li>Home</li>
                        <li>Tv Show</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>MyLists</li>
                        <li>Browser my language</li>
                    </ul>
                </div>
                <div className='header-right'>
                    <ul>
                        <li><SearchIcon /></li>
                        <li><NotificationsIcon /></li>f
                        <li><AccountBoxIcon /></li>
                        <li><ArrowDropDownIcon /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
