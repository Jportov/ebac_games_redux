
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import Gallery from "../../components/Gallery";
import residenT from '../../assets/images/resident.png'



const ProductPage = () => {
const {id}=  useParams()
return (
        <>
        <Hero />
        <Section title="Sobre o jogo" background="black">
        <p>
        Hogwarts Legacy é um RPG de ação e aventura em mundo aberto ambientado no universo de Harry Potter, desenvolvido pela Avalanche Software e publicado pela Warner Bros. Games sob o selo Portkey Games. O jogo permite que os jogadores vivam a experiência de serem alunos da Escola de Magia e Bruxaria de Hogwarts durante o século XIX, muito antes dos eventos dos livros e filmes da saga.
        O jogo oferece uma imersão completa no mundo mágico, com a possibilidade de explorar Hogwarts, Hogsmeade, a Floresta Proibida e outras áreas das Terras Altas Escocesas. Além disso, permite que os jogadores personalizem seus personagens, escolham suas casas e desenvolvam habilidades mágicas únicas enquanto enfrentam perigos e desvendam mistérios ancestrais.
        </p>  {/* Content related to the game will go here, such as game details or images */}
        </Section>
        <Section title="Mais detalhes " background="gray">
        <p>
        <b>Plataforma:</b> PlayStation 5 <br/>
        <b>Desenvolvedor:</b> Avalanche Software® <br/>
        <b>Editora:</b> Portkey Games, subsidiária da Warner Bros: Interactive Entertainment  <br/>
        <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo inglês, espanhol, francês, alemão, italiano, português, entre outros. As opções de áudio e legendas podem ser aiustadas nas configurações do jogo. 
        </p>  {/* Content related to the game will go here, such as game details or images */}
        </Section>
        <Gallery name="Jogo Teste" defaultImage={residenT}/>
        </>
)
}

export default ProductPage