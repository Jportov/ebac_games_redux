import { screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Header from '..';
import { renderizaComProvider } from '../../../utils/tests';

  test('should render', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    renderizaComProvider(<Header />)
    expect(screen.getByText('Porto Games')).toBeInTheDocument()
  })
  test('should render with 2 itens', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows'],
              preco: 140.9,
              precoAntigo: 199.9,
              titulo: 'The Witcher 3: Wild Hunt'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows'],
              preco: 199.9,
              precoAntigo: 299.9,
              titulo: 'Elden Ring'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })

