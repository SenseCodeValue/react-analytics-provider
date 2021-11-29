import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Card from '../../components/Card';
import Cards from '../../components/Cards';
import ProductNav from '../../components/ProductNav';
import {ProductType} from '../../types/Product';
import ProductDetailPage from './ProductDetailPage';
import {useProducts} from '../../hooks/useProducts';

const ProductsPage = () => {
  const {color, products, product, makeViewItemListWithProducts} = useProducts();
  const analytics = useAnalyticsContext();
  const navigate = useNavigate();

  useEffect(() => {
    analytics.onPageView();
    analytics.onEvent('view_item_list', {items: makeViewItemListWithProducts()});
  }, [analytics, products]);

  const getProductDetailUrl = (product: ProductType): string => {
    return `/products?color=${color}&product=${product.name.en}`;
  };

  return (
    <ProductNav>
      {product ? (
        <ProductDetailPage product={product} />
      ) : (
        <>
          <h2>{color} fruits</h2>
          <Cards>
            {products.map((product: ProductType) => (
              <Card
                key={product.id}
                title={product.name.en}
                imageUrl={product.imageUrl}
                onClick={() => {
                  navigate(getProductDetailUrl(product));
                  analytics.onClick('product', product);
                }}
              />
            ))}
          </Cards>
        </>
      )}
    </ProductNav>
  );
};

export default ProductsPage;
