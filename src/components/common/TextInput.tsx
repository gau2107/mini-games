interface TextInputProps {
  hidden: boolean;
  onChange: Function;
}

const TextInput: React.FC<TextInputProps> = ({ hidden, onChange }) => {
  return <input autoFocus className="d-none" onChange={(ev) => onChange(ev)} />;
};
export default TextInput;
