export type Product = {
    id: string;
    name: string;
    productType: string;
    costPrice: number;
    sellingPrice: number;
    url: string;
    addedDate: string; // This should ideally be a Date object, but you may parse it in your code
    quantity: number;
  }