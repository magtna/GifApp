
const GifGridItme = ({title , url}) => {

    //console.log(id, title , url);
  return (
    <div className="card animate__ animated animate__fadeIn" >
        <img src = { url } alt = { title } />
        <p>{title}</p>
    </div>
  )
}

export default GifGridItme