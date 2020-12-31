import React from 'react'
import ProductList from './product/ProductList'
import ProductShow from './product/ProductShow'
import ProductSearchShow from './product/ProductSearchShow'
import CampfireIndex from './product/CampfireIndex'
import Header from './Header'
import Footer from './Footer'
import { Router, Switch, Route } from 'react-router-dom'
import history from '../history'


const App = () => {
  return (
    <>
      <Router history={history}>
        <>
          <Header />
          <Switch>
            <Route path={'/'} exact component={CampfireIndex} />
            <Route path={'/shop'} exact component={ProductList} />
            <Route path={'/shop/:id'} exact component={ProductShow} />
            <Route path={'/shop/search/:id'} exact component={ProductSearchShow} />
          </Switch>
          <Footer />
        </>
      </Router>
    </>
  )
}

export default App