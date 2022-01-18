import React, { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Routings from './components/Routings'

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routings />
        <Footer />
      </div>
    </div>
  );
}

export default App;
