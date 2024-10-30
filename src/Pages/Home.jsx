import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/productSlice'
import { FidgetSpinner } from 'react-loader-spinner'
import { addToCart } from '../store/cartSlice'

const Home = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.products)

    console.log(selector);
    useEffect(() => {
        console.log(selector);
    }, [selector.data])

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    if (selector.isLoading) {
        return <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass="fidget-spinner-wrapper"
        />
    }
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px"
        }}>
            {selector.data.map((p, i) => (
                <div key={i} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #ddd",
                    padding: "8px"
                }}>
                    <img style={{ height: "80px" }} src={p.image} alt="" />
                    {p.title}
                    <div style={{ display: "flex" }} >
                        <button onClick={() => dispatch(addToCart(p))} > Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Home