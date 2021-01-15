import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import history from '../../utils/history'
import actions from '../../actions/index'
import _ from 'lodash'
import searchIcon from '../../static/media/search-icon.gif'
import './searchBar.css'

const SearchBar = (props) => {
    const [keyWord, setKeyWord] = useState('')
    
    useEffect(() => {
        searchShow(props.products, keyWord)
    }, [keyWord])

    const onSubmit = (e) => {
        e.preventDefault()
        searchShow(props.products, keyWord)
        history.push('/shop/search')
    }

    const handlerKeyWord = e => {
        setKeyWord(e.target.value)
    }

    const searchShow = (products, keyWord) => {
        props.loadingAction(true)
        if (keyWord === '' || !/[a-zA-Z]/.test(keyWord)) {
            props.fetchSearchProducts({finalData: [], keyWord: ''})
            return
        }
        
        const reg = new RegExp(keyWord, "i")
        const searchData = products.map(data => {
                let arrayData = Object.values(data)
                if (reg.test(arrayData)) return data
                return null
            })
        const finalData = _.filter(searchData, null)
        const dataObj = {finalData, keyWord}
        props.fetchSearchProducts(dataObj)
        history.push('/shop/search')
    }

    return (
        <form onSubmit={onSubmit}>
            <input className="searchBar-input" type="text" placeholder="Search..." onChange={handlerKeyWord} />
            <div className="search-icon-container">
                <img className="search-icon" alt="" src={searchIcon} onClick={onSubmit} />
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return { products: Object.values(state.products) }
}

export default connect(mapStateToProps, actions)(SearchBar)