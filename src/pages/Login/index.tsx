import { FormEvent, useContext, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import signupImg from '../../assets/images/sign-up.svg'
import * as S from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password
    }
    
    const response = await signIn(data);

    if(response !== null){
      history.push('/');
    }
  };

  return (
    <S.Container>
      <S.ContainerSignUp>
        <img src={signupImg} alt="signupImg" />
        <S.CardSignUp>
          <h1>Bem vindo de volta!</h1>
          <form onSubmit={handleSubmit}>
            <Input type="email" name="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input type="password" name="password" label="Senha" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Entrar</button>
          </form>
          <hr/>
          <Button  name="Criar Nova Conta!" page="signup" color="new-object" />
        </S.CardSignUp>
      </S.ContainerSignUp>
    </S.Container>
  );
};

export default Signup;