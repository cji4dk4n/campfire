import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductSearchShow extends Component {

    renderSearch() {
        return this.props.search.map(data => {
            return (
                <div key={data.id}>
                    {data.title}
                </div>
            )
        })
    }

    render() {
        //console.log(this.props)
        return (
            <div>
                {this.renderSearch()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { search: Object.values(state.search) }
}

export default connect(mapStateToProps)(ProductSearchShow)