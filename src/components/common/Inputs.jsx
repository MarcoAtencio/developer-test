import { Input, Label } from '../../styles/Common';

export const Field = ({ name, value, label, setChanged }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input
        type='text'
        name={name}
        value={value}
        onChange={(value) => setChanged(value)}
      />
    </div>
  );
};

export const FielDate = ({ name, value, label, setChanged }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input
        type='date'
        name={name}
        value={value}
        onChange={(value) => setChanged(value)}
      />
    </div>
  );
};
