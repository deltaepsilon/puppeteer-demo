module.exports = (req, res) => {
  const { world } = req.params;
  
  res.json({ hello: world });
};
