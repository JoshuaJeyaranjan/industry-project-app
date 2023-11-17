import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventListPage from './pages/EventListPage/EventListPage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use = instead of {} for the element prop */}
        <Route path='/eventlist' element={<EventListPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
