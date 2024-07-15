// src/components/Collection.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productActions';
import Cover from './Collection_mini/Cover';
import Newsletter from './Collection_mini/Newsletter';

const Collection = () => {
  const dispatch = useDispatch();
  const { products, loading, error, page } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts(page));
  }, [dispatch, page]);

  return (
    <div>
      <Cover />
      <Newsletter products={products} loading={loading} error={error} />
    </div>
  );
};

export default Collection;
