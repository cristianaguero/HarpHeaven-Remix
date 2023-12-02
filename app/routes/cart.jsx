import { useEffect, useState } from 'react';
import { useOutletContext } from '@remix-run/react';
import styles from '~/styles/cart.css'
import { moneyFormat } from '~/helpers'

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

export function meta() {
    return [{
        charset: "utf-8",
        title: "Harp Heaven - Shopping Cart",
        viewport: "width=device-width, initial-scale=1.0",
        description: "Harp Heaven - shopping cart, offering a curated selection of harmonicas for purchase.",
        keywords: "harmonica, harmonicas, harp, harps, harmonica hub, harmonica store, harmonica shop, harmonica blogs, harmonica courses, harmonica lessons, harmonica learning, harmonica education, harmonica development, harmonica skill development, harmonica skill, harmonica skills, harmonica skill development, harmonica skill development, harmonica"
    }];
}

function Cart() {

    const [total, setTotal] = useState(0)
    const { cart, updateQuantity } = useOutletContext()

    useEffect(() => {
        const totalPayment = cart.reduce((total, product) => {
            return total + (product.price * product.quantity)
        }, 0)

        setTotal(totalPayment)
    }, [cart])

    return (
        <main className="container">
            <h1 className="heading">Shopping Cart</h1>

            <div className="content">
                <div className="cart">
                    <h2>Articles</h2>

                    {cart.length === 0
                        ? <p>Your cart is empty</p>
                        : (
                            cart.map(product => (
                                <div key={product.id} className='product'>
                                    <div>
                                        <img src={product.imageSrc} alt={`image of the product ${product.name}`} />
                                    </div>
                                    <div>
                                        <p className='name'>{product.name}</p>
                                        <p>Quantity: </p>

                                        <select value={product.quantity}
                                            className='select'
                                            onChange={e => updateQuantity({
                                                quantity: parseInt(e.target.value),
                                                id: product.id
                                            })

                                            }>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <p className="price">
                                            <span>
                                                {moneyFormat(product.price)}
                                            </span>
                                        </p>
                                        <p className="subtotal">
                                            Subtotal {' '}
                                            <span>
                                                {moneyFormat(product.price * product.quantity)}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            )
                            )
                        )
                    }
                </div>

                <aside className="summary">
                    <h3>Your order</h3>
                    <p>Total: {moneyFormat(total)}  </p>
                </aside>
            </div>


        </main>
    )
}

export default Cart