import styled from "styled-components";

interface SelectBoxProps {
    ison?: boolean;
    ishow?: boolean;
}

export const Box = styled.div`
    align-items: center;
    display: flex;
    border-right: 1px solid white;
    height: 33px;
    width: 100%;
    justify-content: center;
    flex-direction: row;
    text-align: center;
`

export const DataContent = styled.div`
    display: flex;
    border-radius: 1px;
    font-weight: bold;
    background: black;
    @media(min-width: 514px){
        ${Box} {
            border-bottom: 1px solid;
        }
    }
    @media(max-width: 514px){
        ${Box}:first-child {
            display: none;
    }
`

export const Content = styled.div<SelectBoxProps>`
    ${Box}:nth-last-child(1) {
        border-right: none;
    } 
    background: #000000;
    display: ${(props) => (props.ishow ? "none" : "flex")};
    color: white;
    font-weight: bold;
    width: 100%;
    @media(min-width: 514px){
        width: 80%;
    }
`
export const RegisterContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-weight: bold;
`
export const BoxConteiner = styled.div`
    ${Box}:nth-last-child(1) {
        border-right: none;
    } 
    display: flex;
    flex-direction: row;
    @media(max-width: 514px){
        ${Box}:first-child {
            display: none;
    }
`

export const BoxNotHistoric = styled.div<SelectBoxProps>`
    height: 73vh;
    display: ${(props) => (props.ishow ? "none" : "flex")};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    span {
        color: blue;
        font-family: 'Rock Salt';
    }
`