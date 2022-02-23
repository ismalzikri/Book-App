import {
  Wrap,
  InputSearch,
  IconSearch
} from './SearchStyled'

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
