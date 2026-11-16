import { DevUiPage } from './app/DevUiPage';
import { ResetMockDataButton } from './mocks/ResetMockDataButton';

function App() {
  if (import.meta.env.DEV && window.location.pathname === '/dev/ui') {
    return <DevUiPage />;
  }
  return (
    <main className="min-h-screen bg-light-gray-1 p-8">
      <h1 className="text-h3 font-bold text-dark">ShopFlow</h1>
      <p className="mt-2 text-paragraph text-second-text">Tailwind is working</p>

      {import.meta.env.DEV && import.meta.env.VITE_USE_MOCKS === 'true' && <ResetMockDataButton />}
    </main>
  );
}

export default App;
