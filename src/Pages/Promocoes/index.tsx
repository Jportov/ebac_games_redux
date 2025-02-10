
import ProductList from "../../components/ProductList";
import gamesData from "../../db.json";



const Promocoes = () => (

<>
        <ProductList title="Promoções" background="grey" games={gamesData.promocoes} />
</>

)

export default Promocoes