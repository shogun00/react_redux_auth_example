import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import { Button } from 'react-toolbox/lib/button';
// import Link from 'react-toolbox/lib/link'

const HeaderBar = ({ auth, onClick }) => (
  <AppBar title='Auth Demo'>
    <Navigation type='horizontal'>
      { auth.isLoggedIn && <Button label='Sign out' onClick={onClick}/>}
    </Navigation>
  </AppBar>
)

export default HeaderBar
