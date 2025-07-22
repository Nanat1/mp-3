// mp-3/src/components/Index.tsx

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

export default function Index() {
    return(
        <Main>
            <title> About Me | -L.Z.X- </title>
            <main>
                <h2>About Me</h2>
                <br/>
                <p>
                    I am a candle maker, an insect sympathizer, a trash collector, a driver with a not-so-valid license,
                    and an artist who doesn't call myself an artist.
                </p>
                <p>
                    I am a student at <strong>Boston University</strong> studying <strong>Sculpture</strong> and <strong>Computer
                    Science</strong>,
                    and people constantly think they misheard my major.
                    A number of interests play parts in my life, my friends and family being some of them.
                </p>
                <p>
                    The "About Me" I have ever written before are my University Application Essays and my Artist Statements,
                    in which I explain why I am applying to higher education or what I am doing with my art.
                    I hereby explain why I am here and what I am doing.
                </p>
                <p>
                    I am here to experience another life and another part of the world.
                    In 10 years this moment would be like a dream for me,
                    and I will no longer be experiencing this place as an insider, just like before I came. I do sculpture,
                    shape cardboard, shattered glass, and wax. I play games, and I make games. I code.
                    I find meaning by identifying and representing objects with data.
                    I set pointers to recall this moment and come back to this dream when I need to.
                    I travel in time, and fetch the pieces of dreams in the palace I built,
                    feeding them into an ever-going execution cycle.
                    I manufacture, with my fetch-execute cycle, from my pieces of dreams and experiences,
                    new dreams and experiences that have not happened before.
                    I am thus, instead of an artist, a manufacturer of art, or whatever my products are called.
                </p>
                <p>
                    I am a piece of flesh on a set of bones. In the end, I am a writer.
                    A writer means a variable or a recorder.
                    I change things and record what has been changed; that is called a test. I am a tester with my writings.
                </p>
                <br/>
                <br/>

            </main>

        </Main>

    )
}