import styled from "styled-components";

export const StyledMain = styled.main`

position: absolute;
background-color: white;
padding: 150px 5% 10% 25%;
width: 100%;
height:100vh;
bottom: 0;
right: 0;
z-index: -10;

@media (min-width: 910px) and (max-width: 1400px) {
    position: absolute;
    background-color: white;
    padding: 150px 5% 5% 35%;
    width: 100%;
    height:100vh;
    bottom: 0;
    right: 0;
    z-index: -10;
}

@media (max-width: 910px) {
    position: absolute;
    background-color: white;
    padding: 50px 0 0 0;
    width: 100%;
    height:65vh;
    bottom: 0;
    right: 0;
    z-index: -10;
    
}

`
