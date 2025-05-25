import style from "./Menu.module.css"
const Menu = ({ menu }) => {
  const {name, price, url} = menu
  return (
    <div className={style.menu}>
      <img src={url} alt={name} />
      <span className={style.text}>{name}</span>
      <span className={style.price}>{price}원</span>
    </div>
  )
}
export default Menu