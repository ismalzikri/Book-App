import { WrapCard, Card, Title } from "./BooksCardStyled"

type ListCardType = {
  id: number;
  cover: string;
  title: string;
}

export const BooksCard = (props: { cardData: ListCardType}) => {

  const { title } = props.cardData

  return (
    <WrapCard>
      <Card/>
      <Title>{title}</Title>
    </WrapCard>
  )
}
