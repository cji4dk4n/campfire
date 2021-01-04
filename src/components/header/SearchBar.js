import React, { useState } from 'react'
import { connect } from 'react-redux'
import { searchShow } from '../../utils/searchShow'

const SearchBar = (props) => {
    const [keyWord, setKeyWord] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        searchShow(props.products, keyWord)(props.dispatch)
    }

    const handlerKeyWord = e => {
        setKeyWord(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="ui icon input">
                <input type="text" placeholder="Search..." onChange={handlerKeyWord} />
                <i className="search link icon" onClick={onSubmit}></i>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return { products: Object.values(state.products) }
}

export default connect(mapStateToProps)(SearchBar)