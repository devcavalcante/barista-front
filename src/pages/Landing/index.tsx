import * as S from './styles';
import BannerImg from '../../assets/images/people-drink-localization.svg';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

interface IEstablishments {
  id: number;
  razao_social: string;
  rua: string;
}

function Landingpage() {
  const [establishments, setEstablishments] = useState<IEstablishments[]>();

  const token = sessionStorage.getItem("@Barista-Token");

  useEffect(() => {
    async function getEstablishments() {
      const token = sessionStorage.getItem("@Barista-Token");
      api.defaults.headers['Authorization'] = `Bearer ${token}`
      if(!token){
        setEstablishments(undefined)
      }
      
      const response = await api.get('/estabelecimento')
      setEstablishments(response.data)
    }

    getEstablishments();
  }, [token]);

  return (
    <>
      <Header />

      <S.Container>
        <S.Banner>
          <div>
            <h1>Encontre o bar ideal para você</h1>
            <p>Tudo que você precisa saber está aqui</p>
            <br />
            {!token && <p>Acesse a plataforma e descubra</p>}
            {/* <form>
              <input type="text" />
              <button type="submit">Buscar</button>
            </form> */}
          </div>
          <img src={BannerImg} alt="Imagem do Banner" />
        </S.Banner>
        <S.Main>
          {establishments?.map((establishment) => {
            return (
              <Card 
                key={establishment.id}
                img={"https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"}
                title={establishment.razao_social}
                address={establishment.rua}
                note={"4,0"}
                id={establishment.id}
              />
            );
          })}
        </S.Main>
      </S.Container>
    </>
  );
};

export default Landingpage;