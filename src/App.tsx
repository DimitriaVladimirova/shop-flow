import { DevUiPage } from './app/DevUiPage';

import { Routes, Route } from 'react-router';
import { Layout } from './app/Layout';
import { ShopPage } from './features/catalog/ShopPage';
import { NotFoundPage } from './app/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ShopPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      {import.meta.env.DEV && <Route path="dev/ui" element={<DevUiPage />} />}
    </Routes>
  );
}

export default App;
