import { useEffect, useState } from 'react';
import * as S from './styles';
import { signOut } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function Header() {
  const [logged, setLogged] = useState(false);

  const history = useHistory();
  const Token = sessionStorage.getItem('@Barista-Token');
  const UserName = sessionStorage.getItem('@Barista-NameUser');
  const user_id = sessionStorage.getItem("@Barista-id");

  useEffect(() => {
    if(Token){
      setLogged(true)
    } else {
      setLogged(false)
    }
  }, [Token]);

  async function handleSignOut(){
    await signOut();

    history.push('/');
  }

  return (
    <>
    <S.Container>
      <S.Section>
        <h1>Barista</h1>
        <a href="/">Home</a>
        {user_id === '2' && <a href="/bar/create">Adicionar</a>}
      </S.Section>
      { logged ? 
        <S.Section>
          <S.InfoProfile>
            <p>{UserName}</p>
            {/* <a href="/">Ver Perfil</a> */}
            <button onClick={() => handleSignOut()}>Sair</button>
          </S.InfoProfile>
          <img src="https://images.unsplash.com/photo-1544991185-13fe5d113fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="avatar" />
        </S.Section>

      : <S.Section>
          <a href="/signup">Criar conta</a>
          <S.Button href="/login">Entrar</S.Button>
        </S.Section>
      }
    </S.Container>
    <S.Separator />
    </>
  );
}

export default Header;