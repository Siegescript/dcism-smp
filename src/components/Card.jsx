import '../styles/card.css'

function Card({ title, children }) {
  return (
    <section className="card" aria-labelledby={title ? `card-${title}` : undefined}>
      {title && (
        <h2 id={`card-${title}`} className="card-title">
          {title}
        </h2>
      )}
      <div className="card-content">{children}</div>
    </section>
  )
}

export default Card
