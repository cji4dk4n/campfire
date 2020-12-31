import React, { useState } from 'react'
import { fetchSearchProducts } from '../../actios/index'
import { connect } from 'react-redux'

const SearchBar = (props) => {
    const [keyWord, setKeyWord] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        props.fetchSearchProducts(keyWord)
    }

    const handlerKeyWord = e => {
        setKeyWord(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="ui icon input">
                <input type="text" placeholder="Search..." onChange={handlerKeyWord} />
                <i className="search link icon"></i>
            </div>
        </form>
    )
}

export default connect(null, { fetchSearchProducts })(SearchBar)