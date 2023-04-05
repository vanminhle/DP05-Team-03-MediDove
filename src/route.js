import { Switch, Route } from 'react-router-dom';
import HomePage from '@app/pages/Home/HomePage';

export default function MainRoutes() {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
    </Switch>
  );
}
