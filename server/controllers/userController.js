class userController {
  async registration(req, res) {
    console.log('rest');
  }

  async login(req, res) {
    console.log('test');
  }

  async check(req, res) {
    const { id } = req.query;
    res.json(id);
  }
}

module.exports = new userController();
