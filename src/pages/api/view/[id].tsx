export default (req: any, res: any) => {
  res.statusCode = 200;
  res.json({ id: req.query.id });
};
