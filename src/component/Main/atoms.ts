import { atom } from 'recoil';
import { IUser } from './interface';

const accessTokenAtom = atom<string | undefined>({
  key: 'accessTokenAtom',
  default: undefined,
});

const userAtom = atom<IUser | undefined>({
  key: 'userAtom',
  default: undefined,
});

export default {
  accessTokenAtom,
  userAtom,
};
