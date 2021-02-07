import { RouteOptionsValidate } from '@hapi/hapi';
import Boom from '@hapi/boom';

export const failValidation: RouteOptionsValidate['failAction'] = (
  req,
  h,
  err,
) => {
  const message = 'Please write valid params';

  console.error('errorr ojknsadiojunsdffgion', err);

  return Boom.badRequest(message);
};
