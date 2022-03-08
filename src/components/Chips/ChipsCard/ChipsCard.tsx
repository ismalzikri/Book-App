import { 
  Item,
  IconSort,
  IconFilter,
  WrapItem
} from "./ChipsCardStyled"

export const ChipsCard = () => {
  return (
    <>
      <Item>
        <IconFilter />
        <span>Filter</span>
      </Item>
      <Item>
        <IconSort />
        <span>Sort</span>
      </Item>
      <WrapItem>
        <Item>
          <span>International</span>
        </Item>
        <Item>
          <span>Localization</span>
        </Item>
        <Item>
          <span>Introvert</span>
        </Item>
        <Item>
          <span>Extrovert</span>
        </Item>
      </WrapItem>
    </>
  )
}
