import { Route, Switch } from 'react-router-dom';
import FuturamaList from './views/Futurama/List';
import './App.css';

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <h1>Futurama Compendium</h1>
        <FuturamaList />
      </Route>
    </Switch>
  );
}
