import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Housing from './pages/Housing/Housing'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing" element={<Housing />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}
export default App