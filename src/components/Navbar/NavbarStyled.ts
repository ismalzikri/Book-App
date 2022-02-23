import styled from "styled-components"
import{ BiBookmarkMinus } from 'react-icons/bi'

export  const Nav = styled.nav `
  display: flex;
  align-items: center;
  position:fixed;
  width: 100%;
  padding: 0px 20px 5px;
  background: #867AE9;
  box-sizing: border-box;
  border-radius:0px 0px  15px 15px;  
`

export const Logo = styled.span `
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 500;
  color: #fff;
`

export const ImageLang =  styled.figure `
  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #fff;  
  }
`

export const RightMenu = styled.div `
  display: flex;
  align-items:center;
`

export const IconBook = styled(BiBookmarkMinus) `
  width: 32px;
  height:32px;
  color: white;
  margin-right:10px;

`