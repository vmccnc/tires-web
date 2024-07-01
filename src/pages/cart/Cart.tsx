import React, { useState, useEffect } from 'react';
import { Item, IUserCart } from '../../interfaces/IUser';
import './Cart.css';

interface CartItem extends Item {
    isAvailable: boolean;
}

const Cart: React.FC = () => {
    const [cart, setCart] = useState<IUserCart | null>(null);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [discount] = useState<number>(0.05);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const exampleCart: IUserCart = {
        cartId: 1,
        items: [
            {
                productId: 1,
                productName: 'Tire A',
                productUrl: 'https://example.com/tire-a',
                quantity: 2,
                productPrice: 100,
                sumPrice: 200,
                link: {
                    href: 'https://example.com/tire-a',
                    hreflang: 'en',
                    title: 'Tire A',
                    type: 'product',
                    deprecation: null,
                    profile: null,
                    name: 'Tire A',
                    templated: false,
                },
            },
            {
                productId: 2,
                productName: 'Tire B',
                productUrl: 'https://example.com/tire-b',
                quantity: 1,
                productPrice: 150,
                sumPrice: 150,
                link: {
                    href: 'https://example.com/tire-b',
                    hreflang: 'en',
                    title: 'Tire B',
                    type: 'product',
                    deprecation: null,
                    profile: null,
                    name: 'Tire B',
                    templated: false,
                },
            },
            {
                productId: 3,
                productName: 'Tire C',
                productUrl: 'https://example.com/tire-c',
                quantity: 3,
                productPrice: 90,
                sumPrice: 270,
                link: {
                    href: 'https://example.com/tire-c',
                    hreflang: 'en',
                    title: 'Tire C',
                    type: 'product',
                    deprecation: null,
                    profile: null,
                    name: 'Tire C',
                    templated: false,
                },
            },
            {
                productId: 4,
                productName: 'Tire D',
                productUrl: 'https://example.com/tire-d',
                quantity: 4,
                productPrice: 110,
                sumPrice: 440,
                link: {
                    href: 'https://example.com/tire-d',
                    hreflang: 'en',
                    title: 'Tire D',
                    type: 'product',
                    deprecation: null,
                    profile: null,
                    name: 'Tire D',
                    templated: false,
                },
            },
            {
                productId: 5,
                productName: 'Tire E',
                productUrl: 'https://example.com/tire-e',
                quantity: 1,
                productPrice: 200,
                sumPrice: 200,
                link: {
                    href: 'https://example.com/tire-e',
                    hreflang: 'en',
                    title: 'Tire E',
                    type: 'product',
                    deprecation: null,
                    profile: null,
                    name: 'Tire E',
                    templated: false,
                },
            }
        ],
        totalPrice: 1260,
    };

    useEffect(() => {
        // Simulate data fetching by using exampleCart
        setTimeout(() => {
            setCart(exampleCart);
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        if (cart && cart.items.length > 0) {
            const items: CartItem[] = cart.items.map(item => ({
                ...item,
                isAvailable: true, // Предполагается, что доступность товара нужно рассчитать или добавить
            }));
            setCartItems(items);
        }
    }, [cart]);

    const handleQuantityChange = (productId: number, delta: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.productId === productId ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
            )
        );
    };

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
    const discountAmount = totalPrice * discount;
    const finalPrice = totalPrice - discountAmount;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!cartItems.length) {
        return <div>Your cart is empty.</div>;
    }

    return (
        <div>
            <div className='cart-top'>
                <h2>Your Order</h2>
            </div>
            <div className="cart-container">
                <div className="cart-left">
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.productId} className="cart-item">
                                <img src={item.productUrl || ''} alt={item.productName || 'Product Image'} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <div>
                                        <span>{item.productName}</span>
                                    </div>
                                    <div className="cart-item-quantity">
                                        <button onClick={() => handleQuantityChange(item.productId, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleQuantityChange(item.productId, 1)}>+</button>
                                    </div>
                                    <div>
                                        <span className="cart-item-price">{item.productPrice.toFixed(2)} €</span>
                                    </div>
                                    <div>
                                        <span>{item.isAvailable ? 'Available' : 'Out of Stock'}</span>
                                        <span>Guaranty: 1 year</span>
                                        <span className="cart-item-discount-price">{(item.productPrice * 0.95).toFixed(2)} €</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cart-right">
                    <div className="cart-summary">
                        <div>
                            <span>Total Tires: {totalQuantity}</span>
                            <span>Total: {totalPrice.toFixed(2)} €</span>
                        </div>
                        <div>
                            <span>Discount: 5%</span>
                            <span>Discount Amount: {discountAmount.toFixed(2)} €</span>
                        </div>
                        <div>
                            <span>Total:</span>
                            <span>{finalPrice.toFixed(2)} €</span>
                        </div>
                        <div className="order-button-container">
                            <button className="order-button">Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;