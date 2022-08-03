import styled from "styled-components";

export const StyledContacts = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
width: 100%;
height: 100%;
margin: 0;
padding: 0;

div .contact {
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px
}

@media (max-width: 1400px) {
    grid-template-columns: 1fr;
}
@media (max-width: 1650px) {
    div .contact {
        grid-template-columns: 1fr;
        gap: 0;
}
`
