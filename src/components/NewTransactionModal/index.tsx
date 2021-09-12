// react
import Modal from 'react-modal';
import { useState } from 'react';

//Components
import { Container, RadioBox, TransactionTypeContainer } from './styles';

// Images
import imgClose from '../../assets/fechar.svg';
import imgEntrada from '../../assets/entrada.svg';
import imgSaida from '../../assets/saida.svg';
// Props
type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  
  const [type,setType] = useState('deposit')
  
  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-clase"
      >
        <img src={imgClose} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar nova transação</h2>

        <input
          placeholder="Título"
        />

        <input
          type="number"
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => {setType('deposit');}}
            isActive={type=== 'deposit'}
            activeColor='green'
          >
            <img src={imgEntrada} alt="Valor de entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"
            onClick={() => {setType('withdraw');}}
            isActive={type=== 'withdraw'}
            activeColor='red'
          >
          <img src={imgSaida} alt="Valor de saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar 
        </button>

      </Container>
    </Modal>
  )
};