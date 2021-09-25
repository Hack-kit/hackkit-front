export interface ISignupBody {
  user_type: 'owner' | 'customer';
  email: string;
  nickname: string;
  address: {
    text: string;
  };
  username: string;
  number: string;
  google_id: string;
}
