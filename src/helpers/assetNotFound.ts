export const fileNotFound = (req: any, h: any) => {
  const res = req.response;

  if (
    !req.path.startsWith('/api') &&
    res.isBoom &&
    res.output.statusCode === 404
  ) {
    return h
      .view('404', {
        title: 'Resource Not found',
        error: 'Please verify the resource path',
      })
      .code(404);
  }

  return h.continue;
};
