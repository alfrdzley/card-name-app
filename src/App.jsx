import React, { useState } from 'react';
import CardName from './components/CardName';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex justify-center items-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition duration-500`}>
      <div className="w-full max-w-2xl p-4">
        <CardName
          name="SYERA AL-FARIDZI"
          username="alfrdzley"
          title="Software Engineer | Backend Dev"
          repositories={27}
          stars={14}
          darkMode={darkMode} // Pass the darkMode state as a prop
          toggleTheme={toggleTheme} // Pass the toggleTheme function as a prop
        />
      </div>
    </div>
  );
}

export default App;
