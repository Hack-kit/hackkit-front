export interface IUser {
  pk: number;
  address: {
    lat: number;
    long: number;
    name: string;
    text: string;
  };
  username: null | string;
}
