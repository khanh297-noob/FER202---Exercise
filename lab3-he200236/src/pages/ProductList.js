import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import ProductItem from '../components/ProductItem';
import Pagination from '../components/Pagination';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. Đọc tham số từ URL
  const keyword = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || '';
  const currentPage = Number(searchParams.get('page')) || 1;
  const itemsPerPage = 3; 


  const updateParams = (newKeyword, newCategory, newPage) => {
    const params = {};
    if (newKeyword) params.keyword = newKeyword;
    if (newCategory) params.category = newCategory;
    if (newPage > 1) params.page = newPage;
    setSearchParams(params);
  };

  const handleSearch = (newKeyword) => {
    updateParams(newKeyword, category, 1);
  };

  const handleCategoryChange = (newCategory) => {
    updateParams(keyword, newCategory, 1);
  };

  const handlePageChange = (newPage) => {
    updateParams(keyword, category, newPage);
  };

  const filteredProducts = products.filter((p) => {
    const matchesKeyword = p.name.toLowerCase().includes(keyword.toLowerCase());
    const matchesCategory =
      category === '' || category === 'All Category' || p.category === category;
    return matchesKeyword && matchesCategory;
  });

  //Phân trang bằng phương thức slice()
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="card p-4 shadow-sm border-0 rounded-4 bg-white">
      <h4 className="fw-bold mb-3">Product List</h4>

      <SearchBar initialKeyword={keyword} onSearch={handleSearch} />

      <CategoryFilter
        selectedCategory={category}
        onCategoryChange={handleCategoryChange}
      />

      <div className="p-2 mb-3 rounded bg-secondary bg-opacity-10 text-center fw-semibold">
        Total products: <span className="text-primary">{filteredProducts.length}</span> (Currently displayed: <span className="text-primary">{displayedProducts.length}</span>)
      </div>

      {displayedProducts.length > 0 ? (
        <div className="row g-3">
          {displayedProducts.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 col-12">
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-warning text-center my-4">
          No products available matching your criteria
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;