import { Product } from "../../utils/types"
import useDeleteProduct from '../../hooks/useDeleteProduct';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  product: Product
}

const ProductCard = ({product}: Props) => {

  const deleteProduct = useDeleteProduct();

  
  const handleDelete = async (productId: string | undefined) => {
    // Ensure productId is not undefined
    if (!productId) {
      toast.error('Invalid productId:');
      return;
    }
  
    try {
      await deleteProduct.mutateAsync(productId);
      toast.success('Product deleted successfully');
    } catch (error) {
      const errorMessage = (error as Error).toString(); // Type assertion
      toast.error(`Error fetching products: ${errorMessage}`);
    }
  };


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
          onClick={() => handleDelete(product.id)}
          
        >
          Delete
        </button>
      
    </div>
  </div>
</div>
  )
}

export default ProductCard