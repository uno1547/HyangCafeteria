import style from "./Store.module.css"

const Store = ({ data }) => {
  const {name, url} = data
  return (
    <div className={style.store} onClick={() => {console.log(name)}}>
      <img src={url} alt={name}/>
      <span className={style.text}>{name}</span>
    </div>
  )
}

export default Store