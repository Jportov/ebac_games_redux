
import ProductList from "../../components/ProductList";
import gamesData from "../../db.json";



const Categorias = () => (

<>
        <ProductList title="FPS" background="grey" games={gamesData.emBreve} />
        <ProductList title="Ação" background="grey" games={gamesData.emBreve} />
        <ProductList title="RPG" background="grey" games={gamesData.emBreve} />
        <ProductList title="Promoções" background="grey" games={gamesData.emBreve} />
</>

)

export default Categorias