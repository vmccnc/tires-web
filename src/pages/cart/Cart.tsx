import React, { useState, useEffect, useContext } from 'react';
import { Item, IUserCart } from '../../interfaces/IUser';
import { AuthContext } from '../../context/AuthContext';
import './Cart.css';
import { loadCartById } from '../../dbRequests/userRequests';

interface CartItem extends Item {
    isAvailable: boolean;
}

const Cart: React.FC = () => {
    const { user, isAuthenticated } = useContext(AuthContext);
    const [cart, setCart] = useState<IUserCart | null>(null);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [discount] = useState<number>(0.05);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCartItems = async () => {
            if (isAuthenticated && user) {
                try {
                    const data: IUserCart = await loadCartById(user.uid);
                    setCart(data);
                } catch (error) {
                    setError("Failed to load cart items.");
                } finally {
                    setLoading(false);
                }
            } else {
                setError("User is not authenticated.");
                setLoading(false);
            }
        };

        fetchCartItems();
    }, [isAuthenticated, user]);

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
