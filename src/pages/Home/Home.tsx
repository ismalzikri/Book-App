import { BooksList, Navbar } from "../../components";
import { ChipsList } from "../../components/";
import { ListTrend } from "../../data/ListTrend";
import styled from "styled-components";

const ContainerCard = styled.div`
  padding: 120px 50px;
  width:1300px;
  margin: 0px auto;
`;

export const Home = () => {
  return (
    <main>
      <Navbar />
      <ContainerCard>
        <ChipsList />
        <BooksList listProps={ListTrend} />
      </ContainerCard>
    </main>
  );
};
