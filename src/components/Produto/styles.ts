  import styled from 'styled-components'

  import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'


  export const Card = styled.div`
    background-color: ${cores.cinza};
    padding: 8px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    justify-content: space-between;
    display: flex;
    flex-direction:column;
    position: relative;
    

      ${TagContainer} {
      margin-right: 4px;    
      }
    &:hover {
      transform: translateY(-4px);
    }

      img {
            width: 100%;
            height:200px;
            border-radius:8px;
      }
  `
  export const Titulo = styled.h3`
    font-weight: bold;
    font-size: 16px;
    display: block;
    margin: 8px; 

  `
  export const Descricao = styled.p`
    font-size: 14px;
    line-height: 20px;
    display: block;
    margin: 8px;

  `


  export const Prices = styled.div`
    margin: 8px 8px;
    color: ${cores.branca};
    font-size: 16px;

      span {
          text-decoration: line-through;
      }

    small {
      font-size: 16px;
      text-decoration: line-through;
      margin-right: 8px;
      opacity: 0.7;
    }

    strong {
      font-size: 18px;
    }
  `

  export const Infos = styled.div`
 
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  flex-direction:row-reverse;

`;
export const PlataformasContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 8px;
  gap: 5px;
  margin-top: 8px;
  flex-wrap: wrap;
`;
