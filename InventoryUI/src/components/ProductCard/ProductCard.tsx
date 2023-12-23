import { Product } from "../../utils/types"

type Props = {
  product: Product
}

const ProductCard = ({product}: Props) => {
  return (
<div className="card">
  <div className="card-header">
    {product.name}
  </div>
  <div className="card-body">
    <h5 className="card-title">{product.productType}</h5>
    <p className="card-text">
      <strong>Cost Price:</strong> {product.costPrice}<br />
      <strong>Selling Price:</strong> {product.sellingPrice}<br />
      <strong>Added Date:</strong> {product.addedDate}<br />
      <strong>Quantity:</strong> {product.quantity}
    </p>
    <div className="d-flex justify-content-between">
      <a
        href={product.url}
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to Product
      </a>
      
        <button
          type="button"
          className="btn btn-success mx-2"
        
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          
        >
          Delete
        </button>
      
    </div>
  </div>
</div>
  )
}

export default ProductCard