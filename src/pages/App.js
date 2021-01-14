import React, { useEffect } from 'react'
import ProductShop from './product/ProductShop'
import ProductDetail from './product/ProductDetail'
import CampfireIndex from './product/CampfireIndex'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Router , Switch, Route } from 'react-router-dom'
import history from '../utils/history'
import { FETCH_PRODUCTS, LOADING } from '../constants/types'
import { connect } from 'react-redux'
import actions from '../actions/index'
import './App.css'


const App = (props) => {
  useEffect(() => {
    props.fetchProducts().then(res => {
      res.dispatch({ type: LOADING, payload: false})
      res.dispatch({ type: FETCH_PRODUCTS, payload: res.resData.data })
    })
  }, [])

  return (
    <Router history={history}>
      <Header />
      <div className="mainBody">
        <Switch>
          <Route path={'/'} exact component={CampfireIndex} />
          <Route path={'/shop'} exact component={ProductShop} />
          <Route path={'/shop/search'} exact component={ProductShop} />
          <Route path={'/detail/:id'} exact component={ProductDetail} />
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default connect(null, actions)(App)