import { useDispatch } from "react-redux";


import { adicionar } from "../../store/reducers/carrinho";
import { BtnComprar } from "../Button/styles";
import { TagContainer } from "../Tag/styles";
import { Card, Descricao, Infos, PlataformasContainer, Prices, Titulo } from "./styles";


export type Game = {
  id: number;
  titulo: string;
  categoria: string;
  plataformas: string[];
  descricao?: string;
  info?: string[];
  precoAntigo: number | null;
  preco: number;
  imagem: string;
};




type PropsGame = {
  game: Game;
};

export const paraReal = (valor: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);

const Produto = ({ game }: PropsGame) => {
  const dispatch = useDispatch();

  if (!game.titulo) return null;

  return (
    <Card>
      <img src={game.imagem} alt={game.titulo} />

      {/* Categoria - Fica no topo */}
      <Infos>
        <TagContainer>{game.categoria}</TagContainer>
      </Infos>

      {/* Plataformas - Ficam abaixo da imagem */}
        
              <Titulo>{game.titulo}</Titulo>
      <PlataformasContainer>
        {game.plataformas?.map((plataforma) => (
          <TagContainer key={plataforma}>{plataforma}</TagContainer>
        ))}
      </PlataformasContainer>
      <Descricao>{game.descricao || "Descrição não disponível."}</Descricao>

      <Prices>
        {game.precoAntigo && <small>{paraReal(game.precoAntigo)}</small>}
        <strong>{paraReal(game.preco)}</strong>
      </Prices>

      <div className="btn-container">
        <BtnComprar
          data-testid="btn-adicionar"
          onClick={() => dispatch(adicionar(game))}
          type="button"
        >
          Adicionar ao carrinho
        </BtnComprar>
      </div>
    </Card>
  );
};


export default Produto;
