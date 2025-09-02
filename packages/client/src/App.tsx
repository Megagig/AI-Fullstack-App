import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setMessage(data.message);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Message from server:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
