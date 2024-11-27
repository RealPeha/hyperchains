import { Route, Switch } from 'wouter';
import { useStore } from './store';

import Chains from './pages/chains';
import WarpRoutes from './pages/routes';

useStore.getState().init();

export const App = () => {
  return (
    <Switch>
      <Route path="/" component={Chains} />
      <Route path="/chains" component={Chains} />
      <Route path="/routes" component={WarpRoutes} />
    </Switch>
  );
};
