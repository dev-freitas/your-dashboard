import styled from "styled-components";

export const StyledHeader = styled.header`

    display: flex;
    justify-content:end;
    flex-wrap: wrap;
    position: fixed;
    min-width: 600px;
    top: 0;
    right: 0;
    z-index: 1;
    background-color:white;
    width:85%;

    h2 {
        color: rgb(51, 50, 50);
        padding: 30px;
        font-weight: 400;
        font-size: 20px;
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

        @media (max-width: 1100px) {
            h2 {
                display: none;
            }
        }
        @media (max-width: 800px) {
            button {
                display: none;
            }
        }
`
