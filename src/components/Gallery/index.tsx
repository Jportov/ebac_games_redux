import Section from "../Section";

import spidermanimg from "../../assets/images/banner-homem-aranha.png";
import zeldaimg from "../../assets/images/zelda.png";
import { Action, GalleryItem, GalleryList, Modal, ModalContent } from "./styles";

import iconePlay from "../../assets/images/play.png";
import iconePause from "../../assets/images/pause.png";
import iconeFechar from "../../assets/images/fechar.png";
import zoom from "../../assets/images/zoom.png";

type GalleryItemProps = {

    type: 'video' | 'image'
    url: string
}



const mock: GalleryItemProps[] = [ {

    type: 'image',
    url: zeldaimg
},
{

    type: 'image',
    url: spidermanimg
}, 
{

    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ'
}
]


type Props = {

    defaultImage: string
    name: string


}







const Gallery = ({defaultImage, name}: Props) => {


    const getMediaIcon = (item: GalleryItemProps) => {

        if(item.type === 'image') return zoom
        return iconePlay
    }

    const getMediaCover = (item: GalleryItemProps) => {

        if(item.type === 'image') return item.url
        return defaultImage
    }
  return (
    <Section title="Galeria " background="black">
        
         <GalleryList>
            {mock.map((media, index) => (
                    <GalleryItem key={media.url} >
                    <img src={getMediaCover(media)} alt={`Media ${index + 1} do ${name}`} />
                    <Action>
                    <img src={getMediaIcon(media)} alt="Clique para maximar a midia." />
                    </Action>              
                    </GalleryItem>))}
        </GalleryList>  
        <Modal>
            <ModalContent className="container">
                   <header>
                    <h4>{name}</h4>
                        <img src={iconeFechar} alt="Botao para fechar " />
                    </header>
                        <img src={spidermanimg} alt="Jogo Teste"/>
            </ModalContent>
            <div className="overlay"></div>
        </Modal>
        
        </Section>
  );
}


export default Gallery