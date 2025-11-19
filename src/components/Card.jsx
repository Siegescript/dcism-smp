import '../styles/card.css'

function Card(props) {


  return (
    <div className="card">
      {props.title && <h2 className="card-title">{props.title}</h2>}
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}

export default Card
