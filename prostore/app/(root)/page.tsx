import { getLatestProds } from '@/lib/actions/product.actions';
import ProductList from '@/components/shared/product/product-list';
const Homepage = async () => {
  const latestProds = await getLatestProds();
  return (
    <div className='space-y-8'>
      <ProductList title='Newest Arrivals' data={latestProds} />
    </div>
  );
};

export default Homepage;

