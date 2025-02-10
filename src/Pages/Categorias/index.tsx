
import ProductList from "../../components/ProductList";
import gamesData from "../../db.json";



const Categorias = () => (

<>
        <ProductList title="Promoções" background="grey" games={gamesData.emBreve} />
</>

)

export default Categorias