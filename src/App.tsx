import { DevUiPage } from './app/DevUiPage';

import { Routes, Route } from 'react-router';
import { Layout } from './app/Layout';
import { ShopPage } from './features/catalog/ShopPage';
import { NotFoundPage } from './app/NotFoundPage';
import { ProductPage } from './features/catalog/ProductPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ShopPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="p/:slug" element={<ProductPage />} />
        <Route path="c/:groupSlug" element={<ShopPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      {import.meta.env.DEV && <Route path="dev/ui" element={<DevUiPage />} />}
    </Routes>
  );
}

export default App;
