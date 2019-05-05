import React, { Component } from 'react'
import { connect } from 'react-redux'
import RenderList from '../product/RenderList'

class ProductSearchShow extends Component {

    render() {
        console.log(this.props.products)
        return (
            <div className="list-align">
                <div className="list-results">Showing {this.props.products.length} results</div>
                <div className="list-container">
                    <RenderList name="search" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { products: Object.values(state.search) }
}

export default connect(mapStateToProps)(ProductSearchShow)