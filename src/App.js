import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './routes/signin/signin.component.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}

export default App;
