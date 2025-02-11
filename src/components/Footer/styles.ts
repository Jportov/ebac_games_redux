import styled from "styled-components";
import { cores } from "../../styles";


export const FooterContainer = styled.footer`

    background-color: ${cores.cinza};
    padding: 32px 0;
    font-size:14px;
`

export const TituloFooter = styled.h4`
    color: ${cores.branca};
    font-size:16px;
    font-weight:bold;
`


export const LinksFooter = styled.ul`
display:flex;
margin-top:16px;
`

export const FooterLink = styled.a`
    font-size:14px;
    color: ${cores.cinzaClaro};
    text-decoration: none;
    margin-right:8px;
    cursor:pointer;
    
`

export const FooterSection = styled.div`
    margin-bottom: 64px ;
`

export const CopyFooter = styled.p`
    font-weight:bold;


`