import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Navbar from './components/Navbar';
import store from './store/store';
import Tabs from './components/Tabs';
import { Provider } from 'react-redux';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get('/api/todos');
      store.dispatch({ type: "addTodos", content: data.filter((item) => !item.done) });
      store.dispatch({ type: "addDones", content: data.filter((item) => item.done) });
      setLoading(false);
    }

    fetchData();
	}, []);

  return (
    <Provider store={store}>
      <div className="min-w-[440px]">
        <Navbar/>
        <Tabs/>
      </div>
    </Provider>
  )
}

export default App

