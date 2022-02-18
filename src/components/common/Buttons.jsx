import { ButtonStyle } from '../../styles/Common';

export const Button = ({ name, onClick, mode }) => {
  return (
    <ButtonStyle onClick={onClick} mode={mode}>
      {name}
    </ButtonStyle>
  );
};
