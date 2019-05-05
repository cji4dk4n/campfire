import React, { Component } from 'react'
import '../../css/productlist.css'
import RenderList from '../product/RenderList'

export default class ProductList extends Component {

  render() {
    return (
      <RenderList name="list" />
    )
  }
}