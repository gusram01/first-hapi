import { init } from './app';

init();

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection', err);
  process.exit(1);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception', err);
  process.exit(1);
});
