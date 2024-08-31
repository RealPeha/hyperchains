import { Route, Switch } from 'wouter';
import { useStore } from './store';

import Chains from './pages/chains';

useStore.getState().load();

export const App = () => {
  return (
    <Switch>
      {/* <Route path="/" component={Dashboard} /> */}
      <Route path="/" component={Chains} />
    </Switch>
  );
};
