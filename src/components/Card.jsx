function Card({ name, price }) {
  return (
    <article className="product-card">
      <div className="product-card__icon" aria-hidden="true">
        {name.charAt(0)}
      </div>
      <div>
        <h2>{name}</h2>
        <p className="product-card__price">
          ₹{price.toLocaleString('en-IN')}
        </p>
      </div>
    </article>
  )
}

export default Card
