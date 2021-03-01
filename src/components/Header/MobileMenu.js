import { Link, withPrefix } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import Logo from './Logo'



const MobileMenu = ({location: {pathname}, token, cartCount, signout}) => {
  const [activeItem, setActiveItem] = useState(pathname)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setActiveItem(pathname)
  }, [pathname])


  return (
    <Menu size="huge" borderless pointing style={{backgroundColor: '#F38C8F'}}>
      <Container text>
        <Menu.Item
          as={Link}
          to="/"
          header
          active={activeItem === withPrefix('/')}
        >
          <Logo />
          April's Store
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default MobileMenu
