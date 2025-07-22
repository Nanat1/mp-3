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

export default function Experience() {
    return (
        <Main>
            <h2>Work Experience</h2>
            <br/>

            <h2>Localization Tester and Proofreader</h2>
            <p><strong>Eternal Dream Game Production - June 2025 until Now</strong></p>
            <p><em>Part-time - Online</em></p>
            <p> • Collaborate with Game Developers of the game "Buy a Croquette!" to create and varify the English localized version.</p>
            <br/>
            <br/>

            <h2>Independent Animation Commission</h2>
            <p><strong>Individual Commissionor - February to September 2023</strong></p>
            <p><em>Part-time - Online</em></p>
            <p> • Completed video editing, drawing, and painting with creativity and respect for given requirements.</p>
            <p> • Kept staged deadlines and regular updates with commissioners on projects.</p>
            <p> • With commissioner's consent, finished vieo can be seen in <a href="../portfolio/portfolio.html">Portfolio</a> as well as on <a href="https://youtu.be/8yQoLeEa6EM?si=YOPXywiHQOAB5PTj">YouTube</a>. </p>
            <br/>
            <br/>

            <h2>Program Assistant & Activities Counselor Visual Art Summer Institute (VASI) in </h2>
            <p><strong>Boston University College of Fine Art - July to August 2023</strong></p>
            <p><em>Full-time - in-person</em></p>
            <p> • Assisted in residence and activity management being the youngest among VASI employed students.</p>
            <p> • Attended every activity within the program with VASI students and handled several health emergencies and unexpected scenarios.</p>
            <br/>
            <br/>

        </Main>
    )
}