import { useState, useEffect } from 'react'
import Card from "./components/Card"

function App() {
  const [randData, setRandData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums");
      const data = await response.json();
      setRandData(data);
    };
    fetchdata();
    console.log(randData);
  }, []);

  return (
    <>
      <div className="container flex flex-wrap border border-black gap-2 items-center">
        {randData.map((obj) => {
          return <Card userid={obj.userId} id={obj.id} title={obj.title} />
        })}
      </div>
    </>
  )
}

export default App
