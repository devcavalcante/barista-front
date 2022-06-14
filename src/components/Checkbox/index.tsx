import * as S from './styles';

interface CheckboxProps {
  label: string;
  value: boolean | undefined;
  onChange: () => void;
}

function Checkbox({
  label,
  value,
  onChange,
}: CheckboxProps){
  return(
    <S.Container>
      <p>{label}</p>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
    </S.Container>
  )
}

export default Checkbox;