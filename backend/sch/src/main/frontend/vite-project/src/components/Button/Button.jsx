import style from "./Button.module.css"
const Button = ({ text, handler, disabled}) => {
  return <button onClick={handler} className={style.button} disabled = {disabled}>{text}</button>
}
export default Button