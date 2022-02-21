import styled from "styled-components"
import {HiOutlineSearch} from 'react-icons/hi'

const Wrap = styled.section `
  position : relative;
`

const InputSearch = styled.input `
  padding: 6px;
  font-size: 12px;
  padding-left: 25px;
`

const IconSearch = styled(HiOutlineSearch) `
  position: absolute;
  left: 5px;
  top:6px;
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
