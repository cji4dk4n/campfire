import React, { useEffect } from 'react'
import RenderList from '../../components/product/RenderList'
import { connect } from 'react-redux'
import { searchShow } from './../../utils/searchShow'

const ProductSearchShow = (props) => {
    const keyWord = props.match.params.keyWord
    const productIsReady = props.products.length === 0

    useEffect(() => {
        searchShow(props.products, keyWord)(props.dispatch)
    }, [productIsReady])

    return (
        <RenderList action="search"/>
    )
}

const mapStateToProps = (state) => {
    return { products: Object.values(state.products) }
}

export default connect(mapStateToProps)(ProductSearchShow)