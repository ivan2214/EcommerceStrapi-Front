import CartDetails from '@/components/CardDetails'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { productDetail } = useSelector((s) => s.productDetail)
  
  return <CartDetails id={productDetail?.id} data={productDetail?.attributes} />
}

export default ProductDetail
