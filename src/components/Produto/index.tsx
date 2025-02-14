import { useDispatch } from "react-redux";
import { adicionar } from "../../store/reducers/carrinho";
import { BtnComprar } from "../Button/styles";
import { TagContainer } from "../Tag/styles";
import { Card, Descricao, Infos, PlataformasContainer, Prices, Titulo } from "./styles";
import { Game } from "../../Pages/Home";

type PropsGame = {
  game: Game;
};

export const paraReal = (valor: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);

const Produto = ({ game }: PropsGame) => {
  const dispatch = useDispatch();

  if (!game.name) return null;

  return (
    <Card>
      <img src={game.media.thumbnail} alt={game.name} />

      {/* Categoria - Fica no topo */}
      <Infos>
        <TagContainer>{game.details.category}</TagContainer>
      </Infos>

      {/* Plataformas - Ficam abaixo da imagem */}
      <Titulo>{game.name}</Titulo>
      <PlataformasContainer>
        {game.details.system && <TagContainer>{game.details.system}</TagContainer>}
      </PlataformasContainer>
      <Descricao>{game.description || "Descrição não disponível."}</Descricao>

      <Prices>
        {game.prices.old && <small>{paraReal(game.prices.old)}</small>}
        <strong>{paraReal(game.prices.current)}</strong>
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
