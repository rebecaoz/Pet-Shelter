import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage.component';
import AddPet from './components/AddPet/AddPet.component';


function App() {
  return (
    <div className="App">
      <h1 className="text-center">Pet Shelter</h1>
      <BrowserRouter>
            <Routes>
                <Route index={true} path="/" element={<MainPage />} />
                <Route index={true} path="/new" element={<AddPet />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
