import Products from '../mocks/ecommerce/products.json';

import {useSearchParams} from 'react-router-dom';
import {AnalyticsViewItemType, ProductType} from '../types/Product';

export const useProducts = (): {
  color: string;
  products: ProductType[];
  product: ProductType | undefined;
  makeViewItemListWithProducts: () => AnalyticsViewItemType[];
} => {
  const [searchParams] = useSearchParams();
  const color = searchParams.get('color') || '';
  const products = getProductsByColor(color);
  const productName = searchParams.get('product') || '';
  const product = products.find((product: ProductType) => product.name.en === productName);

  const makeViewItemListWithProducts = (): AnalyticsViewItemType[] =>
    products.map(
      (product: ProductType): AnalyticsViewItemType => ({
        id: product.id,
        name: product.name.en,
        category: product.categoryId,
        variant: product.categoryId,
        price: product.price,
      }),
    );

  return {
    color,
    products,
    product,
    makeViewItemListWithProducts,
  };
};

function getProductsByColor(color: string): ProductType[] {
  switch (color) {
    case 'red':
      return Products.filter((product: ProductType) => product.categoryId === 'RED');
    case 'yellow':
      return Products.filter((product: ProductType) => product.categoryId === 'YELLOW');
    case 'green':
      return Products.filter((product: ProductType) => product.categoryId === 'GREEN');
    default:
      return Products;
  }
}
