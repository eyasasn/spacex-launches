import { Routes, Route } from "react-router-dom"
import Home from '../pages/home/Home'
import LaunchDetails from '../pages/launchDetails/LaunchDetails'

function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/launchDetails" element={<LaunchDetails />} />
        </Routes>
    )
}

export default Navigation