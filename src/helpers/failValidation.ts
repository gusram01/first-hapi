import { RouteOptionsValidate } from '@hapi/hapi';

export const failJoiValidation: RouteOptionsValidate['failAction'] = (
  req,
  h,
  err,
) => {
  const view = req.path.split('/')[1];
  if (err) {
    req.logger.error(err, 'Error from failJoiValidation');
  }
  return h
    .view(view, {
      title: 'Validation Error',
      error: 'Please write valid data for every field ',
    })
    .code(400)
    .takeover();
};
