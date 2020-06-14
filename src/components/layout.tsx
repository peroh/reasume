import * as React from 'react'
import DarkModeToggle from '../components/DarkModeToggle';

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <DarkModeToggle />
      {children}
    </React.Fragment>
  )
}

export default Layout
