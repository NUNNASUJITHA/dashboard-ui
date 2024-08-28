import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg">
          <div className="p-6">
            <ul>
              <li className="mb-4">
                <a href="#" className="block text-gray-700 font-medium hover:text-blue-600">Home</a>
              </li>
              <li className="mb-4">
                <a href="#" className="block text-gray-700 font-medium hover:text-blue-600">Reports</a>
              </li>
              <li className="mb-4">
                <a href="#" className="block text-gray-700 font-medium hover:text-blue-600">Settings</a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Card 1</h2>
              <p className="text-gray-600">Some quick example text to build on the card title.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Card 2</h2>
              <p className="text-gray-600">Some quick example text to build on the card title.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Card 3</h2>
              <p className="text-gray-600">Some quick example text to build on the card title.</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Card 4</h2>
              <p className="text-gray-600">More detailed information on this card.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Card 5</h2>
              <p className="text-gray-600">Additional content for a longer description.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

