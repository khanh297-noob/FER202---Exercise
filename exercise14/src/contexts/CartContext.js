import React, { createContext, useState, useContext } from 'react';

// Dữ liệu mẫu 4 món ăn theo tài liệu
export const initialDishes = [
  {
    id: 0,
    name: "Uthappizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=60",
    category: "mains",
    label: "Hot",
    price: "4.99",
    featured: true,
    description: "A unique combination of Indian Uthappam and Italian pizza, topped with olives, tomatoes, and paneer."
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=60",
    category: "appetizer",
    label: "",
    price: "1.99",
    featured: false,
    description: "Deep fried Zucchini coated with mildly spiced Chickpea flour batter with sweet-tangy tamarind sauce."
  },
  {
    id: 2,
    name: "Vadonut",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&auto=format&fit=crop&q=60",
    category: "appetizer",
    label: "New",
    price: "1.99",
    featured: false,
    description: "A quintessential ConFusion experience, is it a vada or is it a donut?"
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&auto=format&fit=crop&q=60",
    category: "dessert",
    label: "",
    price: "2.99",
    featured: false,
    description: "A delectable, semi-sweet New York Style Cheese Cake spiced with Indian cardamoms."
  }
];

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Thêm món vào giỏ hàng
  const addToCart = (dish) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === dish.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...dish, quantity: 1 }];
    });
  };

  // Xóa 1 món khỏi giỏ
  const removeFromCart = (dishId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== dishId));
  };

  // Xóa trắng giỏ hàng
  const clearCart = () => {
    setCartItems([]);
  };

  // Tính tổng số lượng và tổng tiền real-time
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cartItems
    .reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)
    .toFixed(2);

  return (
    <CartContext.Provider
      value={{
        dishes: initialDishes,
        cartItems,
        totalCount,
        totalAmount,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);