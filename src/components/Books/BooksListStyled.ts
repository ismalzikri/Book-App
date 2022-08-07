import styled from "styled-components";

export const ContainerList = styled.section `
  margin-top: 50px;
  display: flex;
`

export const WrapCard = styled.div `
  display: flex;
  flex-direction: column; 
  overflow:hidden;
`

export const WrapCardList = styled.div `
  position: relative;
  display:flex;
  gap:1rem;
`

export const WrapTitle = styled.div `
  display:flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2 `
  margin-bottom: 25px;
  font-weight: 600;
`

export const SeeMore = styled.span `
  font-size: 16px;
  color:#7c27e3;
  cursor:pointer;
  transition: .3s ease;
  letter-spacing: calc(14px * .03);
  font-family: Red Hat Display,sans-serif;
    &:hover {
      color:#867AE9;
    }
`

export const LeftButton = styled.button `
  position: absolute;
  display:flex;
  align-items:center;
  background:#867AE9;
  z-index: 1;
  height: 46px;
  width: 46px;
  left: 50px;
  top: 110px;
  bottom:0;
  margin:auto;
  outline:none;
  border:none;
  cursor:pointer;
  border-radius:50%;
  transform: rotate(270deg);
  box-shadow: 1px 0 5px 0 rgb(49 53 59 / 35%);
  transition-timing-function: cubic-bezier(0.2,0.64,0.21,1);
  transition: all 0.5s;
    &:hover {
      width:50px;
      height:50px;
      left:48px;
    }
`

export const RightButton = styled.button `
  position: absolute;
  display:flex;
  align-items:center;
  background:#867AE9;
  z-index: 1;
  height: 46px;
  width: 46px;
  right: 50px;
  top: 110px;
  bottom:0;
  margin:auto;
  outline:none;
  border:none;
  cursor:pointer;
  border-radius:50%;
  transform: rotate(90deg);
  box-shadow: 1px 0 5px 0 rgb(49 53 59 / 35%);
  transition-timing-function: cubic-bezier(0.2,0.64,0.21,1);
  transition: all 0.5s;
    &:hover {
      width:50px;
      height:50px;
      right:48px;
    }
`
