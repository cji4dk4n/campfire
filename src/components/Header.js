import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProducts } from '../actios/index'
import SearchBar from './product/SearchBar'
import '../css/header.css'

class Header extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    renderHeader() {
        return this.props.products.map(product => {
            return (
                <Link to={`/shop/${product.id}`} className="two wide column item" key={product.id}>{product.title}</Link>
            )
        })
    }

    render() {
        //console.log(this.props.products)
        return (
            <div className="ui secondary massive menu">
                <Link to={'/'} className="blockSize">
                    <img alt=""
                        src="https://campfireaudio.com/wp-content/uploads/2016/05/cropped-admin-ajax.png"
                        className="logo"
                    />
                </Link>
                <div className="ui grid container">
                    <div className="ui secondary menu">
                        <Link to={'/shop'} className="two wide column item">Shop</Link>
                        {this.renderHeader()}
                        <div className="right menu">
                            <div className="item">
                                <SearchBar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { products: Object.values(state.products) }
}

export default connect(mapStateToProps, { fetchProducts })(Header)