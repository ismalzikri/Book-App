import { BooksCard } from "./BooksCard/BooksCard";
import { ReactComponent as ArrowIcon } from "../../assets/svg/arrow.svg";
import {
  ContainerList,
  WrapCardList,
  WrapTitle,
  WrapCard,
  SeeMore,
  Title,
  LeftButton,
  RightButton,
} from "./BooksListStyled";

type ListProps = {
  title: string;
  items: ListCardType[];
};

type ListCardType = {
  id: number;
  cover: string;
  title: string;
};

export const BooksList = (props: { listProps: ListProps }) => {
  const { title, items } = props.listProps;

  const listItem = items.map((item) => {
    return <BooksCard key={item.id} cardData={item} />;
  });

  return (
    <ContainerList>
      <LeftButton>
        <ArrowIcon />
      </LeftButton>
      <WrapCard>
        <WrapTitle>
          <Title>{title}</Title>
          <SeeMore>See more</SeeMore>
        </WrapTitle>
        <WrapCardList>{listItem}</WrapCardList>
      </WrapCard>
      <RightButton>
        <ArrowIcon />
      </RightButton>
    </ContainerList>
  );
};
