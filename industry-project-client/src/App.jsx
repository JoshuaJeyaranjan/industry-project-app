import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventListPage from './pages/EventListPage/EventListPage';
import EventDetailsPage from './pages/EventDetailsPage/EventDetailsPage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use = instead of {} for the element prop */}
        <Route path='/eventlist' element={<EventListPage />} />
        <Route path='/eventdetails' element={<EventDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
