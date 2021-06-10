import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
   background-color: ${(props)=> props.theme.backgroundColor};
   color: ${(props) => props.theme.mainColor};
}`;

export const DataWrapper= styled.div`
margin:20px

img{
    width:250px;
    height:250px;
}
`;