import React from 'react'
import ProductShop from './product/ProductShop'
import ProductDetail from './product/ProductDetail'
import ProductSearchShow from './product/ProductSearchShow'
import CampfireIndex from './product/CampfireIndex'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Router, Switch, Route } from 'react-router-dom'
import history from '../utils/history'


const App = () => {
  return (
    <>
      <Router history={history}>
        <>
          <Header />
          <Switch>
            <Route path={'/'} exact component={CampfireIndex} />
            <Route path={'/shop'} exact component={ProductShop} />
            <Route path={'/shop/:id'} exact component={ProductDetail} />
            <Route path={'/shop/search/:keyWord'} exact component={ProductSearchShow} />
          </Switch>
          <Footer />
        </>
      </Router>
    </>
  )
}

export default App