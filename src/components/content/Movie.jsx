
function Movie ({movie}) {
  return (
    <div className="row">
    <div className="col s6 m12">
      <div className="card">
        <div className="card-image">
          <img src={movie.Poster} alt={movie.Title}/>
          <span className="card-title">{movie.Title}</span>
        </div>
        <div className="card-content">
          <p>{movie.Title}</p>
        </div>
        <div className="card-action">
          <a href="#!">This is a link</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export  {Movie}
