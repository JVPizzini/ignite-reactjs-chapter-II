import imgLogo from '../../assets/logo.svg'
import { Container, Content } from './styles'


export function Header() {
  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="pig pay" />
        <button>
          nova transação
        </button>
      </Content>
    </Container>
  )
}