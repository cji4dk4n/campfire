import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../actios/index'
import '../../css/productlist.css'
import RenderList from '../product/RenderList'

class ProductList extends Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div className="list-align">
        <div className="list-results">Showing {this.props.products.length} results</div>
        <div className="list-container">
          <RenderList name="list" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { products: Object.values(state.products) }
}

export default connect(mapStateToProps, { fetchProducts })(ProductList)