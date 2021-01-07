import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import history from '../../utils/history'
import actions from '../../actions/index'
import _ from 'lodash'

const SearchBar = (props) => {
    const [keyWord, setKeyWord] = useState('')
    
    useEffect(() => {
        searchShow(props.products, keyWord)
    }, [keyWord])

    const onSubmit = (e) => {
        e.preventDefault()
        searchShow(props.products, keyWord)
        history.push('/shop')
    }

    const handlerKeyWord = e => {
        setKeyWord(e.target.value)
    }

    const searchShow = (products, keyWord) => {
        if (keyWord === '') { 
            props.searchText(keyWord)
            return
        }
    
        const reg = new RegExp(keyWord, "i")
        const searchData = products.map(data => {
                let arrayData = Object.values(data)
                if (reg.test(arrayData)) {
                    return data
                }
                return null
            })
        const finalData = _.filter(searchData, null)
    
        props.searchText(keyWord)
        props.fetchSearchProducts(finalData)
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

const { searchText, fetchSearchProducts } = actions

const mapStateToProps = (state) => {
    return { products: Object.values(state.products) }
}

export default connect(mapStateToProps, { searchText, fetchSearchProducts })(SearchBar)