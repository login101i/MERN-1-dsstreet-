import './App.css';

import {Switch, Route} from 'react-router-dom'



import Header from './components/layout/Header'
import Home from './pages/Home'
import MenuNavigation from './components/MenuNavigation'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <main>

    <Header/>
    <MenuNavigation/>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/product/:id" component={ProductDetails} exact />
    </Switch>
  
    </main>
  );
}


export default App;
