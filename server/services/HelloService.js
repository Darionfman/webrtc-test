//This is a service, it contains methods for business logic
class HelloService {
  customGreeting(name) {
    if(name.toLowerCase() === 'steve') {
      return 'Hello Steve\n';
    }
    if(name.toLowerCase() === 'greg') {
      return 'Good Day Greg\n';
    }
    return `Sup ${name}\n`;
  }
}
export default HelloService;