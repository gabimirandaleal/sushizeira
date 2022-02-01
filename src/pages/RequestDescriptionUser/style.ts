import styled from "styled-components";

export const ContainerA = styled.div`
    background-color: #000;
    color: #fff;
    font-family: 'Rock Salt', cursive;
    padding: 10px;
    box-sizing: border-box;
    height: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
`;

export const MyOrder = styled.div`
  display: flex;
  flex-direction:column;
  align-items: flex-end;
  a{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top:10px;
    text-decoration:none;
    color: #fff;
  }
  a:hover{
    color: red;
  }
`;

export const UserContainer = styled.div`
  svg{
    margin: 0px 10px;
    width: 30px;
    height: 30px;
    color: #fff;
  }
  display: flex;
  flex-wrap: wrap;
`;

export const IconsH = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  text-align:center;
  font-size: 30px;
  margin: 10px 0px;
`;

export const ContainerBody = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin-top: 30px;
    @media(min-width:830px){
      flex-direction:row;
      flex-wrap: wrap;
    }
`;

export const CartBody = styled.div`
    width: 100%;
    @media(min-width:830px){
      max-width:400px;
    }
`;

export const CartDetails = styled.div`
    width: 100%;
    max-width:400px;
    margin: 10px 0px 0px 0px;
`;

export const DetailsOrder = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 20px 0px 0px 0px;
    
    span, label{
      font-family: Ubuntu;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
      color: black;
    }
    .red{
      color: red;
    }
    .userId{
      overflow: hidden;
      text-overflow: clip;
      white-space: nowrap;
      max-width: 10ch; 
    }
    .space{
      margin-bottom:20px ;
    }
    button{
      background: #4CDE18;
      border-radius: 20px;
      padding: 10px;
      border: 0px;
    }
    header {
      display: flex;
      justify-content: flex-start;
      section{
        display: flex;
        margin-right: 50px;
        img{
          user-select: auto;
          border-radius: 60px;
          width: 95px;
        }
        div{
          display: flex;
          flex-direction: column;
        }
      }
    }
    .status{
        background: #b2e06b;
        text-align: center;
        border-radius: 5px;
        margin-bottom: 5px;
        padding-bottom: 3px;
    }
    .othersInformations {
      border-top: 2px solid black;
      padding-top: 15px;
      display: flex;
      flex-direction: column;
    }
    .inf{
        text-align: center;
        background: #f3f3f3;
        border: 2px solid #c3bdb5;
        margin-bottom: 10px;
      }
`;

export const CardHeader = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    svg{
        width: 25px;
        height: 25px;
    }
`;

export const CardProducts = styled.div`
  display: flex;
  overflow-x:scroll;
  .empty{
    margin-top:20px;
    padding: 4px;
    overflow: hidden;
  }
  &::-webkit-scrollbar {
    width: 12px;
    height: 9px;
  }
  &::-webkit-scrollbar-track {
    background: grey;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #04000586;
    border-radius: 20px;
  }
  @media(min-width:830px){
    max-height: 700px;
    overflow-x: hidden;
    overflow-y: scroll;
    flex-direction:column;
  }
`;