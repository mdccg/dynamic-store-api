import { app } from './app';

const PORT = 3001;
const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

process.on('SIGINT', () => {
  server.close();
  console.log('Server closed');
});