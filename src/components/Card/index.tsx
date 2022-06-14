import * as S from './styles';
// import { RiStarFill } from 'react-icons/ri';

interface CardProps {
  img: string;
  title: string;
  address: string;
  note: string;
  id: number;
}

function Card({
  img,
  title,
  address,
  note,
  id,
}: CardProps) {
  return (  
    <S.Container href={`/bar/${id}`}>
      {/* <S.Evaluation>
        <RiStarFill />
        <p>{note}</p>
      </S.Evaluation> */}
      <img src={img} alt="imagem do card" />
      <S.Main>
        <h1>{title}</h1>
        <p>{address}</p>
      </S.Main>
    </S.Container>
  );
};

export default Card;