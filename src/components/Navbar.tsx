import styled from "styled-components"
import { Search } from "./Search"

const Nav = styled.nav `
  position:fixed;
  width: 100%;
  background: #867AE9;
  box-sizing: border-box;
  border-radius:0px 0px  8px 8px;  
`

export const Navbar = () => {
  return (
    <Nav>
      <Search />
    </Nav>
  )
}
