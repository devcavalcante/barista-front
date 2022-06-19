import { useParams } from 'react-router-dom';
import { RiMapPin2Fill, RiWhatsappLine } from 'react-icons/ri';
import Header from '../../components/Header';
import beerImg from '../../assets/images/undraw_berr.svg';
import evaluationImg from '../../assets/images/undraw.svg';
import StarImg from '../../assets/images/star.svg';
import * as S from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { NewTransactionModal } from '../../components/NewTransactionModal';

interface IEstablishment {
  id: number;
  razao_social: string;
  possui_bilhar: boolean;
  paga_cover: boolean;
  possui_happyHour: boolean;
  hora_abertura: string;
  hora_fechamento: string;
  possui_delivery: boolean;
  outras_informacoes: string;
  possui_musica_ao_vivo: boolean;
  user_id: number;
  CEP: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  celular: string;
  numero: number;
};

interface IGrades {
  id: number;
	nota: string;
	user_id: number;
}


function BarDetails() {
  const { id } = useParams<{id: string}>();
  const [establishment, setEstablishment] = useState<IEstablishment>();
  const [gradeEstablishment, setGradeEstablishment] = useState<string>();
  const [gradesEstablishment, setGradesEstablishment] = useState<IGrades>();
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const token = sessionStorage.getItem("@Barista-Token");
  const user_id = sessionStorage.getItem("@Barista-id");
  const user_name = sessionStorage.getItem("@Barista-NameUser");
  api.defaults.headers['Authorization'] = `Bearer ${token}`

  useEffect(() => {
    async function getEstablishment() {    
      const response = await api.get(`/estabelecimento/${id}`)
      setEstablishment(response.data)
    }

    getEstablishment();
  }, [id]);

  useEffect(() => {
    async function getGradeEstablishment() {
      const response = await api.get(`/nota/estabelecimento/${id}/geral`)
      if(response.data.info === 'Nenhuma avaliação'){
        setGradeEstablishment('0.0')
      } else {
        setGradeEstablishment(response.data)
      }
    }
    getGradeEstablishment();
  }, [id, gradeEstablishment]);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  useEffect(() => {
    async function getGradesEstablishment() {    
      const token = sessionStorage.getItem("@Barista-Token");
      api.defaults.headers['Authorization'] = `Bearer ${token}`
      const response = await api.get(`/nota/estabelecimento/${id}`)
      setGradesEstablishment(response.data)
    }
    getGradesEstablishment();
  }, [id]);

  return (
    <>
      <Header />

      <S.Container>
        <S.ButtonForm>
          {user_id === '2' && <a href={`/bar/${id}/edit`}>Editar</a>}
        </S.ButtonForm>

        <S.Session>
          <S.MainDetails>
            <h1>{establishment?.razao_social}</h1>
            <S.Location>
              <RiMapPin2Fill />
              <p>{`${establishment?.rua} - ${establishment?.bairro}, ${establishment?.cidade} - ${establishment?.estado}, ${establishment?.CEP}`}</p>
            </S.Location>

            <S.Services>
              {establishment?.possui_bilhar && <p>Bilhar</p>}
              {establishment?.possui_happyHour && <p>Happy Hour</p>}
              {establishment?.paga_cover && <p>Paga Cover</p>}
              {establishment?.possui_delivery && <p>Delivery</p>}
              {establishment?.possui_musica_ao_vivo && <p>Música ao vivo</p>}
            </S.Services>

            <S.Operation>
              <h2>Atendimento</h2>
              <hr />

              <S.Cards>
                <S.Card>
                  <label>Domingo</label>
                  <p>{establishment?.hora_abertura.replace(':00', '')} - {establishment?.hora_fechamento.replace(':00', '')}</p>
                </S.Card>

                <S.Card>
                  <label>Segunda</label>
                  <p>{establishment?.hora_abertura.replace(':00', '')} - {establishment?.hora_fechamento.replace(':00', '')}</p>
                </S.Card>

                <S.Card>
                  <label>Terça</label>
                  <p>{establishment?.hora_abertura.replace(':00', '')} - {establishment?.hora_fechamento.replace(':00', '')}</p>
                </S.Card>

                <S.Card>
                  <label>Quarta</label>
                  <p>{establishment?.hora_abertura.replace(':00', '')} - {establishment?.hora_fechamento.replace(':00', '')}</p>
                </S.Card>

                <S.Card>
                  <label>Quinta</label>
                  <p>{establishment?.hora_abertura.replace(':00', '')} - {establishment?.hora_fechamento.replace(':00', '')}</p>
                </S.Card>

                <S.Card>
                  <label>Sexta</label>
                  <p>{establishment?.hora_abertura.replace(':00', '')} - {establishment?.hora_fechamento.replace(':00', '')}</p>
                </S.Card>

                <S.Card>
                  <label>Sábado</label>
                  <p>{establishment?.hora_abertura.replace(':00', '')} - {establishment?.hora_fechamento.replace(':00', '')}</p>
                </S.Card>
              </S.Cards>

              <S.Contact>
                <a 
                  target="_blanck" 
                  href={`https://wa.me/${establishment?.celular}`}
                >
                  <RiWhatsappLine />
                  Entrar em contato
                </a>

                <div>
                  <h2>Telefone</h2>
                  <p>{establishment?.celular}</p>
                </div>
              </S.Contact>
            </S.Operation>
          </S.MainDetails>

          <S.Img>
            <img src={beerImg} alt="beerImg" />
          </S.Img>
        </S.Session>

        <S.Session>
          <div>
            <S.Header>
              <div>
                <h1>Avaliações</h1>
                <S.Grade>
                  <img src={StarImg} alt="StarImg" />
                  <p>{gradeEstablishment}</p>
                </S.Grade>
              </div>

              <button type='button' onClick={() => handleOpenNewTransactionModal()}>Adicionar</button>
            </S.Header>

            <hr />
            
            {gradesEstablishment &&
              <div>
                <S.Evaluation>
                  <S.ImgEvaluation>
                    <img src="https://images.unsplash.com/photo-1544991185-13fe5d113fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="avatar" />
                  </S.ImgEvaluation>

                  <S.EvaluationDescription>
                    <div>
                      <p>Sua avaliação</p>
                      <h2>{user_name}</h2>
                    </div>

                    <S.Grade>
                      <img src={StarImg} alt="StarImg" />
                      <p>{gradesEstablishment?.nota}</p>
                    </S.Grade>
                  </S.EvaluationDescription>
                </S.Evaluation>
              <hr />
              </div>
            }
          </div>

          <S.Img>
            <img src={evaluationImg} alt="evaluationImg" />
          </S.Img>
        </S.Session>
      </S.Container>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
        user_id={user_id}
        estabelecimento_id={id}
      />
    </>

  );
};

export default BarDetails;