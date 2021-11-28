const apiError = require('../error/apiError');

class userController {
  async registration(req, res) {
    console.log('rest');
  }

  async login(req, res) {
    console.log('test');
  }

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(apiError.badRequest('NO HAVE ID'));
    }
    res.json(id);
  }
}

module.exports = new userController();
