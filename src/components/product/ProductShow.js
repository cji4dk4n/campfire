import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../../actios/index'
import '../../css/productShow.css'

class ProductShow extends Component {

    state = {
        count: 0
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchProduct(id)
    }

    increase = () => {
        const count = this.state.count + 1
        this.setState({ count: count })
    }

    decrease = () => {
        const count = this.state.count - 1
        if (count < 0) {
            this.setState({ count: 0 })
        } else {
            this.setState({ count: count })
        }

    }

    yellowStar() {
        let star = []
        for (let i = 0; i < 5; i++) {
            star.push(<i className="star yellow icon" key={i}></i>)
        }
        return star
    }

    renderContent() {
        const { title, description, price, review } = this.props.product
        return (
            <div className="mycontainer">
                <div className="describe">
                    <h4 className="title">{title}</h4>
                    <p className="text">{description}</p>
                    <div className="starposition">{this.yellowStar()}</div>
                </div>
                <div className="imgposition">
                    <img alt="" src={review.imgSrc[1]} className="img" />
                </div>
                <div className="price">
                    {price}
                    <form className="cart-form">
                        <div className="cartbutton">
                            <div className="count">{this.state.count}</div>
                            <div className="cartbutton-content-position">
                                <div className="cartbutton-up" onClick={this.increase}><i className="chevron up icon"></i></div>
                                <div className="cartbutton-down" onClick={this.decrease}><i className="chevron down icon"></i></div>
                            </div>
                        </div>
                        <div className="addcartbutton"><p>Add to cart</p></div>
                    </form>
                </div>
            </div>
        )
    }

    renderReview() {
        const { review } = this.props.product
        const { title, slogan, comment, imgSrc } = this.props.product.review
        let reviewItem = []
        for (let i = 0; i < review.title.length; i++) {
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


    render() {
        if (!this.props.product) {
            return <div>Loading...</div>
        }
        return (
            <div>
                {this.renderContent()}
                {this.renderReview()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { product: state.products[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchProduct })(ProductShow)
