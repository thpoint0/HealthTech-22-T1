import { Routes, Route } from 'react-router'
import './css/App.css'
import SideBar from './components/SideBar'
import {
  Dashboard,
  CheckIn,
  Rewards
} from './pages'

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
