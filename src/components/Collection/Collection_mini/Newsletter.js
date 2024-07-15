import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/actions/productActions";
import './Newsletter.css'; 

const Newsletter = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  console.log(products);

  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState('RELEVANCE');

  useEffect(() => {
    setLoading(true);
    dispatch(fetchProducts(page, sortOption))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch, page, sortOption]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 1 
    ) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!Array.isArray(products)) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="newsletter-container">
      <aside className="filter-sidebar">
  <div className="mb-4">
    <select id="company" className="w-full p-2 border rounded-md appearance-none">
      <option value="company1">COMPANY</option>
      <option value="company2">COMPANY</option>
      <option value="company3">COMPANY</option>
    </select>
  </div>
  <div className="mb-4">
    <select id="price" className="w-full p-2 border rounded-md appearance-none">
      <option value="">PRICE</option>
      <option value="0-50">$0 - $50</option>
      <option value="51-100">$51 - $100</option>
      <option value="101-200">$101 - $200</option>
    </select>
  </div>
  <div className="mb-4">
    <select id="category" className="w-full p-2 border rounded-md appearance-none">
      <option value="category1">CATEGORY</option>
      <option value="category2">Life-Style</option>
      <option value="category3">Food</option>
    </select>
  </div>
</aside>


      <div className="products-section">
        <div className="header">
          <div>
            <p> {products.length}Products</p>
          </div>
          <div className="sort-container">
            <label className="mr-2"></label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 border"
            >
              <option value="SORT">Relevance </option>
              <option value="RELEVANCE">Sort</option>
              <option value="PRICE_LOW_TO_HIGH">Price: Low to High</option>
              <option value="PRICE_HIGH_TO_LOW">Price: High to Low</option>
              <option value="RATING">Rating</option>
            </select>
          </div>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.asin} className="product-card">
              <img src={product.product_photo} alt={product.product_title} className="w-full h-48 object-cover mb-4"/>
              <div className="product-details">
                <h3 className="text-lg font-bold mb-2">{product.product_title}</h3>
                <p><s>{product.product_price}</s> {product.product_original_price}</p>
                
              </div>
            </div>
          ))}
        </div>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Newsletter;
