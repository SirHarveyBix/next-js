import { hash } from 'bcryptjs';

export const hashPassword = async (password) => {
  const hased = await hash(password, 12);
  return hased;
};
