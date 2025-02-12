import { BannerHero, HeroInfos, TagBanner } from "./styles";

import HeroBanner from "../../assets/images/fundo_hogwarts.png";
import { BtnComprar } from "../Button/styles";
import { Prices } from "../Produto/styles";
import Tag from "../Tag";


const Hero = () => (
    <BannerHero style={{backgroundImage: `url(${HeroBanner})`}}>
        <div className="container">
            <TagBanner>   
            <Tag children="RPG"/>
                <Tag children="PS5"/>
            </TagBanner>

            <HeroInfos>
            <h2>Hogwarts Legacy</h2>
            <Prices>De <small>R$ 250,00<br/></small>
            <strong>Por R$ 190,00</strong> </Prices>
            <BtnComprar type="button">Adicionar ao Carrinho</BtnComprar>
    </HeroInfos>
        </div>
    </BannerHero    >
)

export default Hero