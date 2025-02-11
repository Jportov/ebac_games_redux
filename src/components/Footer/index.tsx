import { CopyFooter, FooterContainer, FooterLink, FooterSection, LinksFooter, TituloFooter } from "./styles"


const dataAtual = new Date().getFullYear()

    
const Footer = () => (
    <FooterContainer>   
        <div className="container">
            <FooterSection>
                <TituloFooter>Categorias</TituloFooter>
                <LinksFooter>
                    <li><FooterLink>RPG</FooterLink></li>
                    <li><FooterLink>Ação</FooterLink></li>
                    <li><FooterLink>Aventura</FooterLink></li>
                    <li><FooterLink>Simulação</FooterLink></li>
                    <li><FooterLink>Estrategia</FooterLink></li>
                    <li><FooterLink>FPS</FooterLink></li>
                </LinksFooter>
            </FooterSection>
            <FooterSection>
                <TituloFooter>Acesso rapido</TituloFooter>
                <LinksFooter> 
                <li><FooterLink>Novidades</FooterLink></li>
                <li><FooterLink>Promoções</FooterLink></li>
                <li><FooterLink>Em Breve</FooterLink></li> 
                </LinksFooter>
            </FooterSection>
            <div>
                <CopyFooter>{dataAtual} - &copy; Game Turf todos os direitos reservados.</CopyFooter>
            </div>
        </div>
    </FooterContainer>
)


export default Footer