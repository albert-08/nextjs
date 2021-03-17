import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const { query: {id} } = useRouter() 

    return (
        <div>
            The is the product page: {id}
        </div>
    )
}

export default ProductItem
