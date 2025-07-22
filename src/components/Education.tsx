import styled from "styled-components";

const Main = styled.main`
    display: block;
    margin: 10px 30px;
    max-width: 70%;
    min-height: 60vh;
    @media screen and (max-width: 750px){
        max-width: 90%;
        margin: 10px auto;
    }
`;

export default function Education() {
    return (
        <Main>
            <title> Education | -L.Z.X- </title>
            <h2>Education Background</h2>
            <br/>
            <p>
                Dual Degree in <strong>Sculpture BFA</strong> & <strong>Computer Science BA</strong>
            </p>
            <p>
                Boston University - Boston, MA -
            </p>
            <p>
                Begining September 2022 • Graduating May 2026
            </p>
            <br/>
            <br/>

        </Main>
    )
}