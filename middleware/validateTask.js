module.exports = function validateTask(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ message: " missing project data" });
  } else if (!req.body.desc) {
    res.status(400).json({ message: "missing required desc field" });
  } else {
    next();
  }
};
