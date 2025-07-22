import styled from "styled-components";

const StyledHeader = styled.header`
    display: block;
    margin: 30px;
    text-align: left;
    border-bottom: 2px solid lightgray;
    
    @media screen and (max-width: 750px){
        text-align: center;
        margin: 10px auto;
        border: 1px solid #07e191;
    }
`;

export default function Header() {
    return(
        <StyledHeader>
            <h1>Zhixin Li</h1>
            <p>Current Boston University Student in Computer Science (BA) and Sculpture (BFA).</p>
        </StyledHeader>
    )
}