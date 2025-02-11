import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding:24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

      a{ 
      color: ${cores.branca};
      text-decoration: none;
      font-weight: bold;
    }


    div {
      display: flex;
      align-items: center;
      }

      img {
        width: 78px;
        height:32px;  
      }


  @media (max-width: 768px) {
    flex-direction: column;

    div {
      margin-top: 16px;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;`


export const LinkItem = styled.li`
  margin-right: 16px;
  `


export const LinkCarrinho = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 40px;

    img{ 
    margin-left: 16px;}

`