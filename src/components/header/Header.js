import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import './header.css'

const Header = (props) => {
    const renderHeader = () => {
        return props.products.map(product => {
            return (
                <Link to={`/detail/${product.id}`} className="productHref" key={product.id}>{product.title}</Link>
            )
        })
    }

    return (
        <div className="main-header">
            <div className="header-logo">
                <Link to={'/'} className="blockSize">
                    <img alt=""
                        src="https://campfireaudio.com/wp-content/uploads/2016/05/cropped-admin-ajax.png"
                        className="logo"
                    />
                </Link>
            </div>
            <div className="header-item">
                <Link to={'/shop'} className="productHref">Shop</Link>
                {renderHeader()}
            </div>
            <div className="header-searhBar">
                <SearchBar />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { products: Object.values(state.products) }
}

export default connect(mapStateToProps)(Header)