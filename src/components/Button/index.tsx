import * as S from './styles';
import { useHistory } from 'react-router-dom';

interface InputProps {
  name: string;
  page: string;
  color : string;
}

function Button({ name, color, page }: InputProps) {
  const history = useHistory();
  return (
    <S.Container>
      <button type="button" className={color} onClick={()=>{history.push(`/${page}`)}}>{name}</button> 
    </S.Container>
  );
};

export default Button;