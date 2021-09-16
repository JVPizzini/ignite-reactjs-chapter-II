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


export function Summary() {

  const { transactions } = useContext(TransactionContext);

  const summary = transactions.reduce((acc, transaction) => {

    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc

  }, {
    deposits: 0,
    withdraw: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={imgEntrada} alt="entrada de valores" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={imgSaida} alt="saida de valores" />
        </header>
        <strong>-{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.withdraw)}</strong>
      </div>
      <div className="wallet-values">
        <header>
          <p>Total</p>
          <img src={imgTotal} alt="valores totais da conta" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.total)}</strong>
      </div>

    </Container>
  );
}