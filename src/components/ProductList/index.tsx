import Produto from "../Produto";
import { ListProducts, ProductListContainer, TitleProductList } from "./styles";

import { Game } from "../Produto";

export type Props = {
  title?: string;
  background: "grey" | "black";
  games: Game[];
};

const ProductList = ({ background, title, games }: Props) => {
  return (
    <ProductListContainer background={background} games={games}>
      <div className="container">
        <TitleProductList>{title}</TitleProductList>
        <ListProducts>
          {games.map((game) => (
            <Produto key={game.id} game={game} />
          ))}
        </ListProducts>
      </div>
    </ProductListContainer>
  );
};

export default ProductList;
