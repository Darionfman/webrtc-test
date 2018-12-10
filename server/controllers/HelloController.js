import HelloService from '../services/HelloService';
//This is a controller, this handles the request body reforming and sending a response
class HelloController {
  constructor(params) {
    this._helloService = new HelloService();
  }
//This handles the request reforming and sending for a get request
  get = (req, res) => {
    const name = req.params.name;
    const responseBody = this._helloService.customGreeting(name);
    res.status(200).send(responseBody);
  }
}

export default HelloController;