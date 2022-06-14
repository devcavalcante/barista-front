import { FormEvent, useContext, useState } from 'react';
import Input from '../../components/Input';
import signupImg from '../../assets/images/sign-up.svg'
import * as S from './styles';
import { api } from '../../services/api';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';


function Signup() {
  const [name, setName] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();
  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if(!email || !password || !name || !idade){
      console.log("Preencha todos os dados para se cadastrar")
    } else {
      try {
        await api.post('users', {email, password, name, username: name, idade})
        await signIn({email, password});

        history.push('/');
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <S.Container>
      <S.ContainerSignUp>
        <img src={signupImg} alt="signupImg" />
        <S.CardSignUp>
          <h1>Vamos fazer o seu cadastro!</h1>
          <form onSubmit={handleSubmit}>
            <Input type="text" name="name" label="Nome Completo" value={name} onChange={e => setName(e.target.value)}/>
            <Input type="number" name="idade" label="Idade" value={idade} onChange={e => setIdade(e.target.value)}/>
            <Input type="email" name="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input type="password" name="password" label="Senha" value={password} onChange={e => setPassword(e.target.value)} />
            <Input type="password" name="confirmPassword" label="Confirmar Senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            <button type="submit">Cadastrar</button>
          </form>
        </S.CardSignUp>
      </S.ContainerSignUp>
    </S.Container>
  );
};

export default Signup;
