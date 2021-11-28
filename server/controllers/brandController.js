class brandController {
  async create(req, res) {
    console.log(req);
  }

  async getAll(req, res) {
    console.log(res);
  }
}

module.exports = new brandController();
