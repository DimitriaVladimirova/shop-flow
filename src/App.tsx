import { ResetMockDataButton } from './mocks/resetMockDataButton';

function App() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold text-sky-600">ShopFlow</h1>
      <p className="mt-2 text-slate-600">Tailwind is working</p>

      {import.meta.env.DEV && import.meta.env.VITE_USE_MOCKS === 'true' && <ResetMockDataButton />}
    </main>
  );
}

export default App;
