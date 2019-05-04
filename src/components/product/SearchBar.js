import React, { Component } from 'react'
import { fetchSearchProducts } from '../../actios/index'
import { connect } from 'react-redux'

class SearchBar extends Component {

    state = {
        keyWord: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.fetchSearchProducts(this.state.keyWord)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="ui icon input">
                    <input type="text" placeholder="Search..." onChange={e => this.setState({ keyWord: e.target.value })} />
                    <i className="search link icon"></i>
                </div>
            </form>
        )
    }
}

export default connect(null, { fetchSearchProducts })(SearchBar)