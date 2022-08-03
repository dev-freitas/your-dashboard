import styled from "styled-components"

export const StyledNav = styled.nav`
    background-color: rgb(51, 50, 50);
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100vh;
    min-width: 300px;
    position: fixed;
    top: 0;
    left: 0;
    color: white;
    font-size: 25px;
    z-index:2;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        

        &:hover {
            background-color: rgb(86, 86, 86);
        }
        

        a {
            font-size: 30px;
            text-decoration: none;
            font-weight: 300;
            color: white;
            margin-left: 10px;
        }

    }

    button {
        font-size: 20px;
        width: 200px;
        margin: 20px;
        color: white;
        border-radius: 15px;
        background-color: rgb(51, 50, 50);
        border: 2px solid rgb(131, 176, 245);
        font-weight: 600;
        font-size: 25px;

        &:hover {
            background-color: rgb(86, 86, 86);
        }
    }

    @media (min-width: 100px) and (max-width: 910px) {
        padding: 20px 0; 
        justify-content: space-around;
        align-items: center;
        display: flex;
        flex-direction: row;
        width: 100vw;
        height: auto;
        flex-wrap: wrap;
        min-width: 200px;
        position: fixed;
        top: 0;
        left: 0;
        color: white;
        font-size: 30px;
        z-index:2;
        

    }
`
