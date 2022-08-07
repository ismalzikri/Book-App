import styled from "styled-components";

export const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  width: 210px;
  height: 310px;
  background: #d9d9d9;
  border-radius: 8px;
`;

export const Title = styled.span`
  font-family: Red Hat Display, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 12px 4px;
  max-width: 140px;
`;
