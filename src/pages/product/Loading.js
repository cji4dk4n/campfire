import React from 'react'
import loadingImage from '../../static/media/product-loading.gif'

const Loading = () => {
    const style = {
        width: '100%',
        height: '90%',
        margin: '10px 0'
    }

    return (
        <>
            <img style={style} alt="" src={loadingImage} />
        </>
    )
}

export default Loading