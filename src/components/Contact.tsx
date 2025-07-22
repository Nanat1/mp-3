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

export default function Contact() {
    return (
        <Main>
            <title> Contact | -L.Z.X- </title>
            <h2>Contact</h2>
            <br/>

            <h3>LinkedIn: <a
                href="https://www.linkedin.com/in/%E4%B9%8B%E5%BF%83-%E6%9D%8E-b5025a256/">https://www.linkedin.com/in/%E4%B9%8B%E5%BF%83-%E6%9D%8E-b5025a256/</a>
            </h3>
            <h3>The Dots: <a
                href="https://the-dots.com/users/zhixin-li-1948328">https://the-dots.com/users/zhixin-li-1948328</a>
            </h3>
            <br/>
            <br/>

        </Main>
    )
}