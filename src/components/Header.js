import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProducts, toggleTodo } from '../actios/index'
import SearchBar from './product/SearchBar'
import '../css/header.css'

const Header = (props) => {
    useEffect(() => {
        props.fetchProducts()
        props.toggleTodo(false)
    }, [])

    const handlerClick = () => {
        props.toggleTodo(props.toggle)
    }

    const renderHeader = () => {
        return props.products.map(product => {
            return (
                <Link to={`/shop/${product.id}`} className="two wide column item" key={product.id}>{product.title}</Link>
            )
        })
    }

    console.log(props.toggle)
    console.log(props.products)
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
                    {renderHeader()}
                    <div className="right menu">
                        <div className="item">
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handlerClick}>{String(props.toggle)}</button>
        </div>
    )
}

const mapStateToProps = state => {
    return { products: Object.values(state.products), toggle: state.toggle }
}

export default connect(mapStateToProps, { fetchProducts, toggleTodo })(Header)