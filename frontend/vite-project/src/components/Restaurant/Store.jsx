import style from "./Store.module.css"

const Store = ({ data }) => {
  const {name, url} = data
  return (
    <div className={style.store}>
      <img src={url}/>
      {name}
    </div>
  )
}

export default Store