import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../actios/index'
import '../../css/productlist.css'
import history from '../../history'

class ProductList extends Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

  renderList() {
    return this.props.products.map(data => {
      return (
        <div className="item" key={data.id} onClick={() => history.push(`/shop/${data.id}`)}>
          <div className="plus">＋</div>
          <div className="list-img-container"><img className="list-img1" alt="" src={data.review.imgSrc[0]} /></div>
          <div className="list-img-container"><img className="list-img2" alt="" src={data.review.imgSrc[1]} /></div>
          <div className="list-review">
            <div className="list-name">{data.title}</div>
            <div className="list-price">{data.price}</div>
          </div>
          <div className="list-add-cart">Add to cart</div>
        </div>
      )
    })
  }

  render() {
    console.log(this.props.products)
    return (
      <div className="list-align">
        <div className="list-results">Showing {this.props.products.length} results</div>
        <div className="list-container">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { products: Object.values(state.products) }
}

export default connect(mapStateToProps, { fetchProducts })(ProductList)