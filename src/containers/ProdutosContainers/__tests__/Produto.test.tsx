import '@testing-library/jest-dom/vitest'; // Suporte para matchers do Testing Library
import { screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw'; // Atualização da importação
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, expect, test } from 'vitest';
import Produtos from '..'; // Caminho correto
import { renderizaComProvider } from '../../../utils/tests';

const mocks = [
  {
    "id": 1,
    "titulo": "FIFA 23",
    "plataformas": ["Xbox Series S/X","Windows","PS5"],
    "precoAntigo": 299.9,
    "preco": 190,
    "categoria": "Esportes",
    "imagem": ""
  },
  {
    "id": 2,
    "titulo": "Gotham Knights",
    "plataformas": ["Xbox Series S/X", "PS5", "Windows"],
    "precoAntigo": 299.9,
    "preco": 150,
    "categoria": "Ação",
    "imagem": ""
  },
  {
    "id": 3,
    "titulo": "The Witcher 3",
    "plataformas": ["Xbox Series S/X", "PS5", "Windows"],
    "precoAntigo": 349,
    "preco": 140.90,
    "categoria": "Ação",
    "imagem": ""
  },
  {
    "id": 4,
    "titulo": "Hogwarts Legacy",
    "plataformas": ["PS5", "Windows"],
    "precoAntigo": 199.9,
    "preco": 349.90,
    "categoria": "Aventura",
    "imagem": ""
  }
];

const server = setupServer(
  http.get('http://localhost:4000/produtos', async () => {
    return HttpResponse.json(mocks); // Resposta JSON usando `http` e `HttpResponse`
  })
);

// Configuração global dos mocks
beforeAll(() => server.listen()); // Inicia o servidor antes dos testes
afterEach(() => server.resetHandlers()); // Reseta os handlers após cada teste
afterAll(() => server.close()); // Fecha o servidor depois de tudo

test('should show loading message initially', async () => {
  renderizaComProvider(<Produtos/>);

  await waitFor(() => {
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  });
});


test('should render all products after loading', async () => {
  renderizaComProvider(<Produtos/>);
  for (const mock of mocks) {
    await expect(screen.findByText(mock.titulo)).resolves.toBeInTheDocument();
  }  
  });

