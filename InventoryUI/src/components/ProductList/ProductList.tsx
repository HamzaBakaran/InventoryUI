import { ChangeEvent, useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import { Product } from '../../utils/types';
import { ProductService } from '../../services';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProduct from '../../hooks/useProduct';
import useCreateProduct from '../../hooks/useCreateProduct';


type Props = {};

const ProductList = (props: Props) => {
  
  const {data: products,error, isLoading,isError,refetch} = useProduct()

  const [searchQuery, setSearchQuery] = useState<string>('');

  const createProduct = useCreateProduct();

  const [formData, setFormData] = useState({
    name: '',
    productType: '',
    costPrice: 0,
    sellingPrice: 0,
    url: '',
    quantity: 0,
  });

  const [isModalOpen, setModalOpen] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createProduct.mutateAsync(formData);
      toast.success('Product added successfully!');
      refetch(); // Refetch the product list after adding a new product
    } catch (error) {
      toast.error(`Error adding product: ${error}`);
    }

    closeModal();
  };


  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateProduct = async () => {
    try {
      // You can modify this with your own logic to get new product data
      const newProductData: Product = {
        name: 'Apple Watch Series 6',
        productType: 'WATCH_ACESSORIES',
        costPrice: 100,
        sellingPrice: 150,
        url: 'https://www.apple.com/shop/buy-watch/apple-watch',
        quantity: 5,
        //addedDate: new Date()

        
      };

      await createProduct.mutateAsync(newProductData);
      toast.success('Product created successfully');
    } catch (error) {
      const errorMessage = (error as Error).toString(); // Type assertion
      toast.error(`Error fetching products: ${errorMessage}`);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12 col-md-4 mb-3 mx-auto">
            <input
              type="text"
              className="form-control"
              onChange={handleSearch}
              value={searchQuery}
              placeholder='Search for a product...'
            />
          </div>
        </div>
        {isLoading &&
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
        <button onClick={handleCreateProduct}>Create Product</button>
        <button
              type="button"
              className="btn btn-primary"
              onClick={openModal}
            >
              Add Product
            </button>
       
       {!isLoading && (
          <div className="row">
            {filteredProducts?.map((product, i) => (
              <div className="col-md-4 mb-3" key={i}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
                 {/* Bootstrap Modal for adding a new product */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <button type="button" onClick={closeModal}>
                Close
              </button>
              {/* Form for adding a new product */}
              <form onSubmit={handleSubmit}>
                {/* Include input fields for each property */}
                <div className="mb-3">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Product Type</label>
                  <input
                    type="text"
                    className="form-control"
                    name="productType"
                    value={formData.productType}
                    onChange={handleInputChange}
                  />
                </div>
                {/* Repeat for other fields */}
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        )}

        {!isLoading && filteredProducts?.length === 0 && (
          <div className="row mb-3">
            <p>No items found.</p>
          </div>
        )}
      </div>
          
      <ToastContainer />
          
    </>
  );
}

export default ProductList;
