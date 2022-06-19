import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import Header from '../../components/Header';
import { api } from '../../services/api';
import * as S from './styles';

function BarForm() {
  const [razao_social, setRazao_social] = useState('');
  const [hora_abertura, setHora_abertura] = useState('');
  const [hora_fechamento, setHora_fechamento] = useState('');
  const [outras_informacoes, setOutras_informacoes] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [numero, setNumero] = useState('');
  const [CEP, setCep] = useState('');
  const [telefoneCelular, setTelefoneCelular] = useState('');
  const [possui_bilhar, setPossui_bilhar] = useState(false);
  const [possui_happyHour, setPossui_happyHour] = useState(false);
  const [paga_cover, setPaga_cover] = useState(false);
  const [possui_delivery, setPossui_delivery] = useState(false);
  const [possui_musica_ao_vivo, setPossui_musica_ao_vivo] = useState(false);
  
  const history = useHistory();

  async function handleSubmit(event: FormEvent) {
    const token = sessionStorage.getItem("@Barista-Token");
    const user_id = sessionStorage.getItem("@Barista-id");
    api.defaults.headers['Authorization'] = `Bearer ${token}`
    event.preventDefault();
    try{
      await api.post('/estabelecimento', {
        razao_social,
        possui_bilhar,
        possui_happyHour,
        paga_cover,
        possui_delivery,
        hora_abertura,
        hora_fechamento,
        outras_informacoes,
        possui_musica_ao_vivo,
        user_id,
        CEP,
        rua,
        bairro,
        cidade,
        estado,
        celular: telefoneCelular,
        numero,
      });

      history.push('/');
    } catch (error) {
      console.log(error);
    }    
  }

  const handleChangeBilhar = () => { 
    setPossui_bilhar(!possui_bilhar);
  }

  const handleChangeHappyHour = () => {
    setPossui_happyHour(!possui_happyHour);
  }

  const handleChangeCover = () => {
    setPaga_cover(!paga_cover);
  }

  const handleChangeDelivery = () => {
    setPossui_delivery(!possui_delivery);
  }

  const handleChangeMusica_ao_vivo = () => {
    setPossui_musica_ao_vivo(!possui_musica_ao_vivo);
  }

  return (
    <>
      <Header />
      
      <S.Container>
          <S.BarFormCreate>
            <h1>Adicione um Bar</h1>
            <form onSubmit={handleSubmit}>
              <Input type="text" name="barName" label="Nome do bar" value={razao_social} onChange={e => setRazao_social(e.target.value)} />
              {/* <Input type="file" name="imageBar" label="Foto do bar" /> */}

              <S.DuplaLeft>
                <Input type="number" name="cep" label="CEP" value={CEP} onChange={e => setCep(e.target.value)}/>
                <Input type="text" name="rua" label="Rua" value={rua} onChange={e => setRua(e.target.value)}/>
              </S.DuplaLeft>

              <S.DuplaRight>
                <Input type="text" name="bairro" label="Bairro" value={bairro} onChange={e => setBairro(e.target.value)}/>
                <Input type="number" name="number" label="Número" value={numero} onChange={e => setNumero(e.target.value)}/>
              </S.DuplaRight>

              <S.DuplaRight>
                <Input type="text" name="city" label="Cidade" value={cidade} onChange={e => setCidade(e.target.value)}/>
                <Input type="text" name="uf" label="Estado" value={estado} onChange={e => setEstado(e.target.value)}/>
              </S.DuplaRight>

              <Input type="number" name="phone" label="Telefone Celular" value={telefoneCelular} onChange={e => setTelefoneCelular(e.target.value)}/>
              
              <h2>Serviços Disponíveis</h2>
              <hr />

              <S.Services>
                <Checkbox
                  label="Bilhar"
                  value={possui_bilhar}
                  onChange={handleChangeBilhar}
                />

                <Checkbox
                  label="Happy Hour"
                  value={possui_happyHour}
                  onChange={handleChangeHappyHour}
                />

                <Checkbox
                  label="Paga Cover"
                  value={paga_cover}
                  onChange={handleChangeCover}
                />

                <Checkbox
                  label="Delivery"
                  value={possui_delivery}
                  onChange={handleChangeDelivery}
                />


                <Checkbox
                  label="Musica Ao Vivo"
                  value={possui_musica_ao_vivo}
                  onChange={handleChangeMusica_ao_vivo}
                />
              </S.Services>

              <h3>Atendimento</h3>
              <hr />

              <S.DuplaCenter>
                <Input type="time" name="hora_abertura" label="Início do Atendimento" value={hora_abertura} onChange={e => setHora_abertura(e.target.value)}/>
                <Input type="time" name="hora_fechamento" label="Fim do Atendimento" value={hora_fechamento} onChange={e => setHora_fechamento(e.target.value)}/>
              </S.DuplaCenter>

              <S.TextArea>
                <label>Outras Informações</label>
                <textarea name="outras_informações" value={outras_informacoes} onChange={e => setOutras_informacoes(e.target.value)}/>
              </S.TextArea>

              <S.ButtonForm>
                <button type="submit">Cadastrar</button>
              </S.ButtonForm>
            </form>
          </S.BarFormCreate>
      </S.Container>
    </>
  );
};

export default BarForm;