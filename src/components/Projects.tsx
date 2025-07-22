import Calculator from "./Calculator";

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

export default function Projects() {
    return (
        <Main>
            <title> Projects | -L.Z.X- </title>
            <h2>Projects Participated</h2>
            <br/>

            <h2>Collaborated ADV Game Demo</h2>
            <p><strong>May 2022 to February 2023</strong></p>
            <p><em>for detailed demonstration see <a href="../portfolio/portfolio.html">Portfolio</a> for my works.</em>
            </p>
            <p> • Worked with fellow Computer Science students at McGill University to make an ADV game in Unity.</p>
            <p> • Responsible for every art asset, implemented them for the programmer’s ease of use, and designed the
                settings and characters from scratch. </p>
            <p> • Communicated effectively with peers and followed up on feedback to improve game quality.</p>
            <br/>
            <br/>

            <h2>Collaborative Animated Project</h2>
            <p><strong>May 2022 to February 2023</strong></p>
            <p><em>Part-time - Online</em></p>
            <p>for detailed demonstration see <a href="../portfolio/portfolio.html">Portfolio</a> for my works.</p>
            <p> • Worked with fellow Animation students at the University of the Arts London and Boston University.</p>
            <p> • Responsible for background design with given color, style, and description.</p>
            <p> • Communicated effectively with peers and very responsive to deadlines.</p>
            <br/>
            <br/>

            <Calculator/>

        </Main>
    )
}