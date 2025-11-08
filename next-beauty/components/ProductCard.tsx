export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="product-card">
      <div className="thumb" />
      <div className="info">
        <h3>{product.name}</h3>
        <p className="desc">{product.desc}</p>
        <div className="tags">{product.tags?.map((t:string)=> <span key={t}>{t}</span>)}</div>
        <button className="buy">View</button>
      </div>
    </div>
  )
}
