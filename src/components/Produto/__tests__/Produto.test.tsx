import { fireEvent, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Produto from '..';
import { renderizaComProvider } from '../../../utils/tests';

const jogo = {
  id: 1,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['Windows'],
  preco: 199.9,
  precoAntigo: 299.9,
  titulo: 'Elden Ring'
}

  test('should render the component', () => {
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Elden Ring')).toBeInTheDocument()
  })
  test('should add one component to the cart', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)
    const btnAdicionar = screen.getByTestId('btn-adicionar')
    fireEvent.click(btnAdicionar)
    expect(store.getState().carrinho.itens).toHaveLength(1)
  })

