import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100 bg-light pb-5">
        <Header />

        <div className="container" style={{ maxWidth: '900px' }}>
          <Routes>
            {/* 1. Home Page */}
            <Route path="/" element={<Home />} />

            {/* 2. Product List Page */}
            <Route path="/products" element={<ProductList />} />

            {/* 3. Product Detail Page */}
            <Route path="/products/:id" element={<ProductDetail />} />

            {/* 4. Not Found Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;




























/**
 * Build a ReactJS application that allows user to manage and explore a list of products
 * Each product object should contain ID | Name | Category | Price | Description
 * 
 * 1. Set up React router: use React ROuter to manage navigation between application pages
 * Requiment
 * +) Use BrowserRouter to enable client-side routing
 * +) Use routes and route to define application routes
 * +) Use link to navigate menu containing Home and Products links
 * +) Create a Not Found page for invalid URLs
 * The application must contain the following routes
 * +) Home Page
 * +) /products - Product List Page
 * +) /products/:id - Product Detail Page
 * +) Not Found Page
 * 
 * 2. Display the product list: Display the product list dynamically
 * Each product item should display
 * Name | Category | Price | View Details
 * Requiments
 * +) DIsplay product using the map() method
 * +) Each product must have a unique ID
 * +) Product data must be loaded from src/data.js
 * +) Use React components to organize the application
 * +) Display an appropriate message when no product are availabale
 * 
 * 3. Search Product by Name
 * Seach Product [           ]
 * Requimennt
 * +) Search product by name
 * +) Display only product whose names match the search keyword
 * +) Search result must update when the user submits the searh form
 * +) Search must not be case-sensitive
 * +) Use useState to manage the search input
 * +) Use useSeacrchParams to store and retrieve the search keyword from the URL
 * +) Preserve the search keyword in the URL when navigating between product list states
 * Example:
 * /products?keyword=iphone
 * 
 * 4. Filter Product by Category: Create a dropdown list
 * Category: [All Category]
 * Options:
 * +) All Category
 * +) Dien thoai
 * +) Laptop
 * +) May tinh bang
 * Requiments
 * +) Display only product belonging to the selectd category
 * +) If all categories is selected, display all product matching the serach keyword
 * +) The category filter must work together with the serach function
 * +) Use use SearchParams to store and retrieve the selected category
 * +) Upadte the URL when the selected category changes
 * Example: /product?category=Laptop
 * 
 * 5. Paginate the ProductList: Display navigation controls: [Previous] Page: 1/2 [Next]
 * Requiments
 * +) Display a maximum of 3 product per page
 * +) Use the slice() method to display products for the current page number
 * +) Use setSeacrchParams to store and retrieve the current page number
 * +) Use setSearchParams function to update the page number
 * +) Disable the Previous button on the first page
 * +) Disable the Next button on the last page
 * +) Reset the page number to 1 when the search keyword or category changes
 * +) Preserve the current search keyword and category when changing pages
 * +) Update the total number of pages when the filtered product list changes
 * Example: /products?keyword=iphone&page=2
 * 
 * 6. View Product Details: Each product must have a [View Details] button
 * When the users click the button, navigate to the corresponding product detail page
 * Reqiment
 * +) Usr link to navigate to /products/:id
 * +) Use useParams to retrieve the product ID from the URL
 * +) Find and display the product matching the specified ID
 * +) Display the following information
 * ID | Name | Category | Price | Description
 * +) Display only the selectes product details
 * +) Display an appropriate message if the product ID does not exsit
 * +) Provide a [Back to product] butoon to return to the product lisy
 * +) Use useNavigate for programatic navigation
 * Example:
 * /products/1 - Display the details of product ID 1
 * /products/3 - Display the details of product ID 3
 * /products/999 - Display the product not found message id id 999 does not exsit
 * 
 * 7. Count total products cureent displayed
 * Display: total product: 6
 * 
 * bài này có riêng trang chi tiêt, thì cái ảnh demo thì không cần có cũng được, tôi tự lấy ảnh ở máy, vì khi làm là làm offine không có mạng, có ảnh là giảng viên biết
 */