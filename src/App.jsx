import { Route, Switch } from 'react-router-dom';
import FuturamaList from './views/Futurama/List';
import './App.css';
import Header from './components/Header';

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <Header />
        <FuturamaList />
      </Route>
    </Switch>
  );
}
