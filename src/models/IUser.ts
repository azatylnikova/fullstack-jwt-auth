export type IUAdress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export interface IUser {
  id: number;
  name: string;
  username: string;
  address: IUAdress[];
  email: string;
  password: string;
  phone: string;
  website: string;
}
