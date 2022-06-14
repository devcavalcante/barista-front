import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { api } from '../../services/api';
import { Container} from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  user_id: string | null;
  estabelecimento_id: string;
}

export function NewTransactionModal({ isOpen, onRequestClose, user_id, estabelecimento_id}: NewTransactionModalProps) {
    const [grade, setGrade] = useState('');


    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        try {
            await api.post('/nota', {
                user_id,
                estabelecimento_id,
                nota: grade,
            })
            setGrade('');
            onRequestClose();
        } catch (error) {
            console.log(error);
        }
    };

    return(
    <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        ariaHideApp={false}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close"
        >
            X
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Avaliar Estabelecimento</h2>

            <input 
                placeholder="Ex: 4"
                value={grade}
                onChange={event => setGrade(event.target.value)}
            />

            <button type="submit">
                Cadastrar
            </button>

        </Container>
    </Modal>
    );
}