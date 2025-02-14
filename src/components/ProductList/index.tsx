import Produto from "../Produto";
import { ListProducts, ProductListContainer, TitleProductList } from "./styles";
import { Game } from "../../Pages/Home";

export type Props = {
  title?: string;
  background: "grey" | "black";
  games: Game[];
};

const ProductList = ({ background, title, games }: Props) => {
  const formataPreco = (price: number) => {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  };

  const getNameTags = (game: Game) => {
    const tags = [];
    if (game.release_Date) {
      tags.push(game.release_Date);
    }

    if (game.prices.discount) {
      tags.push(`-${game.prices.discount}%`);
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current));
    }

    return tags;
  };

  return (
    <ProductListContainer background={background} games={games}>
      <div className="container">
        <TitleProductList>{title}</TitleProductList>
        <ListProducts>
          {games.map((game) => (
            <Produto
              key={game.id}
              category={game.details.category}
              description={game.description}
              image={game.media.thumbnail}
              infos={getNameTags(game)}
              system={game.details.system}
              title={game.name}
            />
          ))}
        </ListProducts>
      </div>
    </ProductListContainer>
  );
};

export default ProductList;
