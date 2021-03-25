import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStore from "./store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import SignupPage from './components/Pages/SignupPage';
import LoginPage from './components/Pages/LoginPage';
import Homepage from './components/Pages/Homepage';
import Dashboard from './components/Pages/Dashboard';

const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route render={() => (<h1>404: Page Is Not Found</h1>)} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider >
  );
}

export default App;
