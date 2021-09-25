export interface IUser {
  pk: number;
  access_token: string;
  address: {
    lat: number;
    long: number;
    name: string;
    text: string;
  };
  username: null | string;
}
