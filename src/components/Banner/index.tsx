import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Button from '../Button'
import Tag from '../Tag'

import { ImgBanner, Preco, Titulo } from './styles'





export const Banner  = () => (
    <ImgBanner style={{backgroundImage: `url(${bannerImg})`}}>
        <div className="container">
            <Tag size="big" children={'Destaque do dia'}/>
        <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Preco>
            De <span>R$ 215,00</span> por R$ 215,00
        </Preco>

        </div>
        <Button type="link" to="/produto" title="Clique aqui para aproveitar essa oferta">Aproveitar</Button>
        </div>
    </ImgBanner>
)