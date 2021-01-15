import React from 'react'
import { connect } from 'react-redux'
import './css/campfireIndex.css'
import history from '../../utils/history'


const CampfireIndex = (props) => {
    const renderProducts = () => {
        return props.products.map(data => {
            return (
                <div key={data.id} className="cd-fixed-bg" style={{ backgroundImage: `url(${data.imgSrc.srca})` }}>
                    <div className="indexImgBox">
                        <img className="img-size" alt="" src={data.imgSrc.srcb} onClick={() => history.push(`/shop/${data.id}`)} />
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="main">
            {renderProducts()}
        </div>
    )

}

const mapStateToProps = state => {
    return { products: Object.values(state.products) }
}

export default connect(mapStateToProps)(CampfireIndex)