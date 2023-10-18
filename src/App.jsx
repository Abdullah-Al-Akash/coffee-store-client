import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffees = useLoaderData();
  return (
    <div className="md:mx-20 md:my-20">
      <h1 className="text-5xl text-red-700 font-bold text-center my-8">Our Coffee</h1>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mx-8">
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
