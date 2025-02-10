import { useSelector } from 'react-redux'
import cesta from '../../assets/images/carrinho.svg'
import logo from '../../assets/images/logo.svg'
import { RootState } from '../../store'
import { paraReal } from '../Produto'
import { HeaderBar, LinkCarrinho, LinkItem, Links } from './styles'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <HeaderBar>
      <div>



      <img src={logo} />
      <nav>
          <Links>
          <LinkItem><a href='categorias'>Categorias</a></LinkItem>
          <LinkItem><a href='embreve'>Novidades</a></LinkItem>
          <LinkItem><a href='promocao'>Promocoções</a></LinkItem>
          </Links>
      </nav>
      </div>
        <LinkCarrinho href='#'>
          <span data-testid="qtd-carrinho">{itens.length} itens</span>, valor
          total: {paraReal(valorTotal)}
        <img src={cesta} />
        </LinkCarrinho>
    </HeaderBar>
  )
}

export default Header
