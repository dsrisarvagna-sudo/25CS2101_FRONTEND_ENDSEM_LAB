import Card from './components/Card.jsx'

const products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Mobile', price: 25000 },
  { id: 3, name: 'Keyboard', price: 5000 },
  { id: 4, name: 'iPad', price: 15000 },
]

function App() {
  return (
    <main className="app-shell">
      <section className="storefront" aria-labelledby="store-title">
        <header className="storefront__header">
          <p className="eyebrow">Featured products</p>
          <h1 id="store-title">E-commerce</h1>
          <p className="storefront__subtitle">
            Browse our latest technology products.
          </p>
        </header>

        <div className="product-grid">
          {products.map((product) => (
            <Card key={product.id} name={product.name} price={product.price} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
