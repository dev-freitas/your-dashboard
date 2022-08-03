import styled from "styled-components";

export const StyledTodo = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
width: 100%;
height: 100%;
margin: 0;
padding: 0;

@media (min-width: 100px) and (max-width: 1400px) {
    grid-template-columns: 1fr;
}
`
