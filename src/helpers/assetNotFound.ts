export const fileNotFound = (req: any, h: any) => {
  const res = req.response;

  if (res.isBoom && res.output.statusCode === 404) {
    return h
      .view('404', {
        title: 'Resource Not found',
      })
      .code(404);
  }

  return h.continue;
};
