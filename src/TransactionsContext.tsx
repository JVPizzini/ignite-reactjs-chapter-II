import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

type TransactionProps = {
  id: number,
  title: string,
  type: string,
  amount: number,
  category: string,
  createdAt: string,
}

// Primeira forma
type TransactionInput = Omit<TransactionProps, 'id'|'createdAt'>
// Segunda forma
// type TransactionInput2 = Pick<TransactionProps, 'title'|'type'|'amount'|'category'>

type TransactionProvidersProps = {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionProvidersProps) {

  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput){
    const response = await api.post('/transactions', {
      ...transactionInput,
    createdAt : new Date(),})

    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ]);
  }

  return (
    <TransactionContext.Provider value={{transactions,createTransaction}}>
      {children}
    </TransactionContext.Provider>
  )
}