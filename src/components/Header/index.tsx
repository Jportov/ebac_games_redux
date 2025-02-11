import { useSelector } from 'react-redux'
import cesta from '../../assets/images/carrinho.svg'
import logo from '../../assets/images/alter.png'
import { RootState } from '../../store'
import { paraReal } from '../Produto'
import { HeaderBar, LinkCarrinho, LinkItem, Links } from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <HeaderBar>
      <div>
      <Link to="/">
      <img src={logo} />
      </Link>
      <nav>
          <Links>
          <LinkItem><Link to="/categorias">Categorias</Link></LinkItem>
          <LinkItem><Link to="/embreve">Novidades</Link></LinkItem>
          <LinkItem> <Link to="/promocoes">Promoções</Link></LinkItem>
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
