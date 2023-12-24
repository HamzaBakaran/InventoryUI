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
  export type Dashboard = {
    title: string;
    total: number;
    color?: string;
  }
  export type OrderType = {
    id: string;
    orderDate: string;
    products: {
      productName: string;
      quantity: number;
      price: number;
      subtotal: number;
    }[];
    total: number;
  };
  export type UserType = {
    id: string;
    firstName: string;
    lastName: string;
    userType: 'ADMIN' | 'USER' | 'GUEST'; // Adjust the possible user types as needed
    email: string;
    userName: string;
  };
 