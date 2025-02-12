import styled from "styled-components";
import { cores } from "../../styles";
import { Prices } from "../Produto/styles";




export const BannerHero = styled.div`
    position:relative;
    display:flex;
    height: 480px;
    width:100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 100%;

    padding-top: 16px; 
        &::after {
            position:absolute;
            background-color: ${cores.preta};
            height: 100%;
            width:100%;
            top: 0;
            left:0;
            content: '';    
            opacity: 0.56;
        }

        .container {
        z-index: 1;
        position: relatve;
        display:flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        }
            
`


export const HeroInfos = styled.div`
    padding:16px;
    background-color:${cores.preta};
    max-width:250px;
    border-radius:4px;
    margin-bottom: 1px;



        h2 {
            font-size:32px;
        }

        ${Prices} {
            font-size:18px;
            margin: 16px 0;
        }


`

export const TagBanner = styled.div`
display: flex;
padding: 16px;
margin-left: 10px;
gap: 8px;

`