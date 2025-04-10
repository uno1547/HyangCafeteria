const Store = ({ data }) => {
  const {name, url} = data
  return (
    <div>
      <img src={url}/>
      {name}
    </div>
  )
}

export default Store