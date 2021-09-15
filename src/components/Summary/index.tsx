// React
import { useContext } from "react";

// Components
import { TransactionContext } from "../../TransactionsContext";

//styles
import { Container } from "./styles";

// Images
import imgEntrada from '../../assets/entrada.svg'
import imgSaida from '../../assets/saida.svg'
import imgTotal from '../../assets/pig-money.svg'


export function Summary(){

  const {transactions} = useContext(TransactionContext);

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={imgEntrada} alt="entrada de valores" />
        </header>
        <strong>R$ 10000</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={imgSaida} alt="saida de valores" />
        </header>
        <strong>-R$ 10000</strong>
      </div>
      <div className="wallet-values">
        <header>
          <p>Total</p>
          <img src={imgTotal} alt="valores totais da conta" />
        </header>
        <strong>R$ 10000</strong>
      </div>
      
    </Container>
  );
}