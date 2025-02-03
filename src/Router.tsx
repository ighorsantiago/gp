import { Routes, Route } from 'react-router-dom';

import { Welcome } from './pages/Welcome';
import { Home } from './pages/Home';
import { RJ } from './pages/RJ';
import { SP } from './pages/SP';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rj" element={<RJ />} />
            <Route path="/sp" element={<SP />} />
        </Routes>
    );
}