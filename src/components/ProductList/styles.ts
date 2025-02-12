
import styled from 'styled-components';
import { Props } from '.';
import { cores } from '../../styles';
import { Card } from '../Produto/styles';


export const ProductListContainer = styled.section<Omit<Props, 'title'>>`
    padding: 32px 0;
    background-color: ${props => props.background === 'black' ? cores.preta : cores.cinza};



    ${Card} {
    background-color: ${props => props.background === 'black' ? cores.cinza : cores.preta};
    
    }

`
export const ListProducts = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 colunas fixas */
    grid-template-rows: repeat(2, auto); /* 2 linhas automáticas */ 
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 40px;
`;

export const TitleProductList = styled.h2`
    font-size: 18px;
    margin-bottom: 10px;
    color: ${cores.branca};
    font-weight: bold;
    margin-top: 10px;


`