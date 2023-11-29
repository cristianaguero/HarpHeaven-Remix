import { useOutletContext } from '@remix-run/react';
import styles from '~/styles/cart.css'

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

    const { cart } = useOutletContext()

    return (
        <main className="container">
            <h1 className="heading">Shopping Cart</h1>

            <div className="cart">
                <h2>Articles</h2>

            </div>
            <div className="content">
                <aside className="summary">
                    <h3>Your order</h3>
                    <p>Total</p>
                </aside>
            </div>


        </main>
    )
}

export default Cart