import { Search } from '..'
import { 
  Nav,  
  Logo,
  IconBook,
  ImageLang,
  RightMenu
} from './NavbarStyled'

import Flag from '../../assets/img/english.jpg'

export const Navbar = () => {
  return (
    <Nav>
      <Logo>Booku</Logo>
      <Search />
      <RightMenu>
        <ImageLang>
          <img src={Flag} alt="flag-language"  />
        </ImageLang>
        <IconBook/>
      </RightMenu>
    </Nav>
  )
}
