import styled from "styled-components";

const Main = styled.main`
    display: block;
    margin: 10px 30px;
    max-width: 70%;
    min-height: 60vh;
    
    img{
        width: calc(560px + 4*5.6vw);
    }

    iframe{
        width: calc(560px + 4*5.6vw);
        height: calc(315px + 4*3.15vw);
    }
    @media screen and (max-width: 750px){
        max-width: 90%;
        margin: 10px auto;
        img{
            width: calc(1.5*56vw);
        }

        iframe{
            width: calc(1.5*56vw);
            height: calc(1.5*31.5vw);
        }
    }
`;

const PortfolioDiv = styled.div`
    display: block;
`

export default function Portfolio() {
    return (
        <Main>
            <title> Portfolio | -L.Z.X- </title>
            <h2>Portfolio</h2>
            <br/>

            <h2>Collaborated ADV Game Demo</h2>
            <h3>Character Animation Design</h3>
            <PortfolioDiv>
                <iframe src="https://www.youtube.com/embed/X27TZSqls1s?si=662RY-CKLnQbPeED"
                        title="YouTube video player" frameBorder="0" allow="accelerometer;
                                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
                <img src="../../public/EnemyAlterAttackA201226.png" alt="Enemy_Sample"/>
                <img src="../../public/CharacterAttack221204.png" alt="Character_Sample"/>
            </PortfolioDiv>
            <br/>

            <h3>Background Design</h3>
            <PortfolioDiv>
                <img src="../../public/BacgroundExample1.2.png" alt="Background_Sample"/>
                <img src="../../public/BackgroundRitual090737.png" alt="Background_Sample"/>
                <img src="../../public/BacgroundSheet001.png" alt="Background_Sample"/>
                <img src="../../public/BacgroundSheet002.png" alt="Background_Sample"/>
            </PortfolioDiv>
            <br/>
            <br/>

            <h2>Collaborative Animated Project</h2>
            <h3>Finished Product</h3>
            <PortfolioDiv>
                <iframe src="https://www.youtube.com/embed/ztDsI_jmMSw?si=3m4rGTjIWzsVJcVf&amp;start=24"
                        title="YouTube video player" frameBorder="0" allow="accelerometer;
                                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </PortfolioDiv>
            <br/>

            <h3>Background Design</h3>
            <PortfolioDiv>
                <img src="../../public/Animation_Background_01_v1.png" alt="Background_S301"/>
                <img src="../../public/Animation_Background_02_v0.2.png" alt="Background_S302"/>
                <img src="../../public/S2_bg1_vlined.png" alt="Background_S201"/>
                <img src="../../public/S2_bg2_vlined.png" alt="Background_S202"/>
                <img src="../../public/S2_bg5_vlined.png" alt="Background_S205"/>
                <img src="../../public/S2_bg6_vlined.png" alt="Background_S206"/>
            </PortfolioDiv>
            <br/>
            <br/>

            <h2>Independent Animation Commission</h2>
            <PortfolioDiv>
                <iframe src="https://www.youtube.com/embed/8yQoLeEa6EM?si=0Ft_IOoo3F_ebIpc"
                        title="YouTube video player" frameBorder="0" allow="accelerometer;
                                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </PortfolioDiv>
            <br/>
            <br/>

        </Main>
    )
}