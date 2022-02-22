import styled, { keyframes } from "styled-components"
import {HiOutlineSearch} from 'react-icons/hi'

const Wrap = styled.section `
  position : relative;
  width: 50%;
  display: flex;
  margin: 0 auto;
`

const InputSearch = styled.input `
  width: 100%;
  padding: 10px 50px 10px ;
  font-size: 12px;
  outline:none;
  border: 1px solid #fff;
  border-radius: 10px;
`

const AnimateIcon = keyframes `
  from {
    transform : rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

const IconSearch = styled(HiOutlineSearch) `
  position: absolute;
  left: 10px;
  top:10px;
  cursor: pointer;
  :hover {
    animation: ${AnimateIcon} 0.8s linear;
  }
`

export const Search = () => {
  return (
    <>
      <Wrap>
        <InputSearch type="text" placeholder="Cari disini..."  />
        <IconSearch />
      </Wrap>
    </>
  )
}
