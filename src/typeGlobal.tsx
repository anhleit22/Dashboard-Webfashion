export type layoutProps = {
  children?: React.ReactNode;
};
export type PropsItem = {
  thumbnail?: string;
  title?: string;
  header?: number;
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
export type ProcessItem = {
  address: string;
  listporduct: string;
  name: string;
  numberphone: number;
  total: number;
};
export type Blog = {
  author?: string;
  content?: string;
  datetime: object;
  link: string;
  thumbnail: string;
  tittle: string;
};
export type BlogConvert = {
  author?: string;
  content?: string;
  datetime: string;
  link: string;
  thumbnail: string;
  tittle: string;
};
