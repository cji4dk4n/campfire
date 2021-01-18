import React, { useState } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions/index'
import {ReactComponent as SvgStar} from '../../static/media/star.svg'
import './css/productDetail.css'

const ProductShow = (props) => {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        if (count > 0) setCount(count - 1)
    }

    const yellowStar = () => {
        const { star } = props.product.review
        let starShow = []
        for (let i = 0; i < star; i++) {
            starShow.push(
                <div className="starSvg-container">
                    <SvgStar className="starSvg" alt="starSvg"/>
                </div>
            )
        }
        return starShow
    }

    const renderContent = () => {
        const { title, description, price, review } = props.product
        return (
            <div className="mycontainer">
                <div className="describe">
                    <h4 className="title">{title}</h4>
                    <p className="text">{description}</p>
                    <div className="starposition">{yellowStar()}</div>
                </div>
                <div className="imgposition">
                    <img alt="" src={review.imgSrc[1]} className="img" />
                </div>
                <div className="price">
                    {price}
                    <form className="cart-form">
                        <div className="cartbutton">
                            <div className="count">{count}</div>
                            <div className="inc-dec">
                                <div className="cartbutton-up" onClick={increase}>+</div>
                                <div className="cartbutton-down" onClick={decrease}>-</div>
                            </div>
                        </div>
                        <div className="addcartbutton"><p>Add to cart</p></div>
                    </form>
                </div>
            </div>
        )
    }

    const renderReview = () => {
        const { title, slogan, comment, imgSrc } = props.product.review
        let reviewItem = []
        for (let i = 0; i < title.length; i++) {
            const reviewLayout =
                <div className={i === 2 ? "img-content2" : "img-content"}>
                    <img alt="" src={imgSrc[i]} className={i === 2 ? "img_size2" : "img_size"} />
                </div>

            const imgLeft = i % 2 === 0 ? reviewLayout : <></>
            const imgRight = i % 2 === 1 ? reviewLayout : <></>

            reviewItem.push(
                <div className="mycontainer2" key={i}>
                    {imgLeft}
                    <div className={i === 2 ? "review-content2" : "review-content"}>
                        <div className="review-title">{title[i]}</div>
                        <div className="review-slogan">{slogan[i]}</div>
                        <div className="review-comment">{comment[i]}</div>
                    </div>
                    {imgRight}
                </div>
            )
        }
        return reviewItem
    }

    if (!props.product) {
        return (
            <div className="productDetailLoading">
                <div className="productDetailLoadingText">Loading...</div>
            </div>
        )
    } else {
        return (
            <div>
                {renderContent()}
                {renderReview()}
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return { product: state.products[ownProps.match.params.id]}
}

export default connect(mapStateToProps, actions)(ProductShow)
