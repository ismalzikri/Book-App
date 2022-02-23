import { Search } from '..'
import { 
  Nav,  
  Logo,
  ImageLang
} from './NavbarStyled'

import Flag from '../../assets/img/english.jpg'

export const Navbar = () => {
  return (
    <Nav>
      <Logo>Booku</Logo>
      <Search />
      <ImageLang>
        <img src={Flag} alt="flag-language"  />
      </ImageLang>
    </Nav>
  )
}
