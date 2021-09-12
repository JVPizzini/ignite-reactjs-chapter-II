// react

//images
import imgLogo from '../../assets/logo.svg';

//styles
import { Container, Content } from './styles';

type HeaderProps = {
  onOpenNewTransactionModal : () => void;
}


export function Header({onOpenNewTransactionModal} : HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="pig pay" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}