import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../css/campfireIndex.css'
import history from '../../history'


class CampfireIndex extends Component {

    renderProducts() {

        return this.props.products.map(data => {
            return (
                <div key={data.id} className="cd-fixed-bg" style={{ backgroundImage: `url(${data.imgSrc.srca})` }}>
                    <img className="img-size" alt="" src={data.imgSrc.srcb} onClick={() => history.push(`/shop/${data.id}`)} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="main">
                {this.renderProducts()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { products: Object.values(state.products) }
}

export default connect(mapStateToProps)(CampfireIndex)