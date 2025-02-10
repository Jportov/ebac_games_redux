import { Banner } from "../../components/Banner";
import ProductList from "../../components/ProductList";
import gamesData from "../../db.json";



const Embreve = () => (

<>
        <Banner />
        <ProductList title="Promoções" background="grey" games={gamesData.produtos} />
        <ProductList title="Em breve" background="black" games={gamesData.emBreve} />
</>

)

export default Embreve