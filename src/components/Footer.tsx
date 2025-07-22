import styled from "styled-components";
import {Link} from "react-router";

const StyledFooter = styled.footer`
    display: block;
    margin: 30px;
    text-align: left;
    border-top: 2px solid lightgray;
`;
export default function Footer() {
    return(
        <StyledFooter>
            <p>All Rights Reserved by Zhixin Li <Link to={`/credit`}>Credit</Link> &copy;</p>
        </StyledFooter>
    )
}