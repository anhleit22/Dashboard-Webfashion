export type layoutProps = {
  children?: React.ReactNode;
};
export type PropsItem = {
  thumbnail?: string;
  title?: string;
  header?: string;
};
export type User = {
  email: string;
  password: string;
};
export type product = {
  id: number;
  title: string;
  thumbnail: string;
  price: string;
  sale?: string;
  quanlity: number;
  state?: boolean;
  reducePrice?: boolean;
  salestate?: boolean;
};
export type Customer = {
  id?: number;
  firstName?: string;
  lastName?: string;
  userName: string;
  password?: string;
  email?: string | "";
};
