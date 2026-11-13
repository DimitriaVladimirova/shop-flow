export function ResetMockDataButton() {
  async function handleReset() {
    const { resetDb } = await import('./db');
    resetDb();
    window.location.reload();
  }

  return (
    <button
      type="button"
      onClick={handleReset}
      className="fixed bottom-4 right-4 px-3 py-2 rounded-md text-sm text-white cursor-pointer bg-red-600 hover:bg-red-700"
    >
      Reset mock data
    </button>
  );
}
