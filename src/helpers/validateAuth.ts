import { usersDB } from '../store';

export const validate = async (req: any, email: any, password: any, h: any) => {
  try {
    const data = await usersDB.canLogin({ email, password });
    if (!data) {
      return { credentials: null, isValid: false };
    }

    return { isValid: true, credentials: data };
  } catch (e) {
    req.logger.error(e, 'Api user validation error');
    return { credentials: null, isValid: false };
  }
};
