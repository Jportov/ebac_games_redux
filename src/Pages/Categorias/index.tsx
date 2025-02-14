import { useState } from "react";
import ProductList from "../../components/ProductList";
import { Game } from "../Home";

const Categorias = () => {
    const [emBreve, setEmBreve] = useState<Game[]>([]);

    return (
        <>
            <ProductList title="FPS" background="grey" games={emBreve} />
        </>
    );
}

export default Categorias;