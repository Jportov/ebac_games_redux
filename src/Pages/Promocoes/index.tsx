
import { useState } from "react";
import ProductList from "../../components/ProductList";

import { Game } from "../Home";


const Promocoes = () => {
        const [promocoes, setPromocoes] = useState<Game[]>([]);

        return (

                <>
                        <ProductList title="Promoções" background="grey" games={promocoes} />
                </>
                
                )

}

export default Promocoes