import { useSelector } from 'react-redux'
import logo from '../../assets/images/alter.png'
import { RootState } from '../../store'
import paraReal from '../Produto' // Ajuste a importação
import { HeaderBar, LinkCarrinho, LinkItem, Links } from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)

 

  return (
    <HeaderBar>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Links>
        <LinkItem >
          <LinkCarrinho>
            <span>{itens.length}</span>
       
          </LinkCarrinho>
        </LinkItem>
      </Links>
    </HeaderBar>
  )
}

export default Header
