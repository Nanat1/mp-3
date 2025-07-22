import styled from "styled-components";
import {Link} from "react-router";

const StyledNav = styled.nav`
    display: block;
    margin: 30px;
    max-width: 30%;
    Link {
        text-decoration: none;
        background-color: transparent;
    }
    @media screen and (max-width: 750px){
        text-align: center;
        max-width: 100%;
        padding: 15px 0;
        border-bottom: 2px solid lightgray;
    }
`;

const NavLi = styled.li`
    display: block;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #07e191;
    &:hover{
        background-color: white;
    }
    @media screen and (max-width: 750px){
        display: inline;
    }
`

export default function Nav() {
    return (
        <StyledNav>
            <ul>
                <NavLi><Link to={`/`}>Home</Link></NavLi>
                <NavLi><Link to={`/edu`}>Education</Link></NavLi>
                <NavLi><Link to={`/exp`}>Experiences</Link></NavLi>
                <NavLi><Link to={`/proj`}>Projects</Link></NavLi>
                <NavLi><Link to={`/portfolio`}>Portfolio</Link></NavLi>
                <NavLi><Link to={`/ref`}>Contact</Link></NavLi>
            </ul>
        </StyledNav>
    )
}