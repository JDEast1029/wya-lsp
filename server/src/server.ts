import { WLS } from './services/WLS';

const app = new WLS();

console.log = (...args: any[]) => app.connection.console.log(args.join(' '));
console.error = (...args: any[]) => app.connection.console.error(args.join(' '));

app.init();
app.listen();