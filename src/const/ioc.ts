import { Container } from 'inversify';

export const AppContainer = new Container({
  skipBaseClassChecks: true,
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});
