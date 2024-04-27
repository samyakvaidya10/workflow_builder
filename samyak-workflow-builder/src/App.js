import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css';
import Flow from './Components/WorkFlow Builder/Flow';
import DnDFlow from './Components/WorkFlow Builder/DnDFlow';
import NavBar from './Components/NavBar';
import { Provider } from 'react-redux';
import store from './utils/Store/store';
import Home from './Components/Home';
import { Outlet } from 'react-router-dom';

function App() {
  
  return (
    <div className='h-screen bg-sky-200'>
    <Provider store={store}>
      <NavBar />
      <Outlet />

      </Provider>
    </div>
  );
}

export default App;
