import React from 'react'
import history from '../../utils/history'
import { connect } from 'react-redux'
import './renderList.css'

const RenderList = (props) => {
    const { products, search, action } = props

    const renderList = () => {
        let list = []
        switch (action) {
            case 'normal': list = products; break
            case 'search': list = search; break
            default: list = []; break
        }

        return list.map(data => {
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

    const resultCount = () => {
        const length = action === 'search' ? search.length : products.length
        return length
    }

    return (
        <div className="list-align">
            <div className="list-results">Showing {resultCount()} results</div>
            <div className="list-container">
                {renderList()}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        products: Object.values(state.products),
        search: Object.values(state.search)
    }
}

export default connect(mapStateToProps)(RenderList)