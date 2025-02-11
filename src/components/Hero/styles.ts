import styled from "styled-components";
import { cores } from "../../styles";




export const BannerHero = styled.div`
    
    display:flex;
    height: 480px;
    width:100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 100%;
    font-weight: bold;
    position:relative;

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




`