module.exports = function validateProject(req, res, next){
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ message: " missing project data" });
    } else if (!req.body.name) {
      res.status(400).json({ message: "missing required name field" });
    } else {
     next();
    }
}