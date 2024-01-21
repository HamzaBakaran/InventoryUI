import { ChangeEvent, FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Product } from '../../utils/types';
import useProduct from '../../hooks/useProduct';
import useCreateProduct from '../../hooks/useCreateProduct';
import ProductCard from '../ProductCard';
import * as yup from 'yup';



const productTypeValues: Array<Product['productType']> = ['ACCESORIES', 'WATCH_ACESSORIES'];

const productSchema = yup.object({
  name: yup.string().required(),
  productType: yup.mixed<Product['productType']>().oneOf(productTypeValues).required(),
  costPrice: yup.number().required(),
  sellingPrice: yup.number().required(),
  url: yup.string().url().required(),
  quantity: yup.number().required().positive().integer(),
});

const ProductList = () => {
  const { data: products,  isLoading,  refetch } = useProduct();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [formData, setFormData] = useState<Product>({
    name: '',
    productType: 'ACCESORIES',
    costPrice: 0,
    sellingPrice: 0,
    url: '',
    quantity: 0,
  });

  const createProduct = useCreateProduct();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await productSchema.validate(formData, { abortEarly: false });
      await createProduct.mutateAsync(formData);
      toast.success('Product added successfully!');
      refetch();
    } catch (validationError) {
      if (validationError instanceof yup.ValidationError) {
        validationError.inner.forEach((error) => {
          toast.error(error.message);
        });
      } else {
        toast.error(`Error adding product: ${validationError}`);
      }
    }

    setFormData({
      name: '',
      productType: 'ACCESORIES',
      costPrice: 0,
      sellingPrice: 0,
      url: '',
      quantity: 0,
    });

    setIsModalOpen(false);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          Add Product
        </button>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Add Product Modal"
        >
          <form onSubmit={handleSubmit}>
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
              <select
                className="form-select"
                name="productType"
                value={formData.productType}
                onChange={handleInputChange}
              >
                <option value="ACCESORIES">Accessories</option>
                <option value="WATCH_ACESSORIES">WATCH_ACESSORIES</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Cost Price</label>
              <input
                type="number"
                className="form-control"
                name="costPrice"
                value={formData.costPrice}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Selling Price</label>
              <input
                type="number"
                className="form-control"
                name="sellingPrice"
                value={formData.sellingPrice}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">URL</label>
              <input
                type="text"
                className="form-control"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </form>
        </Modal>

        {!isLoading && (
          <div className="row">
            {filteredProducts?.map((product, i) => (
              <div className="col-md-4 mb-3" key={i}>
                <ProductCard product={product} />
              </div>
            ))}
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
};

export default ProductList;
