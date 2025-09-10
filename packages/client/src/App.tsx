import { useEffect, useState } from 'react';
import { Button } from "./components/ui/button";

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
    <div className="p-4" >
      <h1 className="text-2xl font-bold bg-amber-400 p-4">
        Message from server:
      </h1>
      <p className="text-gray-700">{message}</p>
        <Button>Click Me</Button>
    </div>
  );
}

export default App;
