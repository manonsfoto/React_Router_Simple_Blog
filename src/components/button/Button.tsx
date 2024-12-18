import "./Button.css";
interface Props {
  text: string;
}
const Button: React.FC<Props> = ({ text }) => {
  return <button type="button">{text}</button>;
};

export default Button;
