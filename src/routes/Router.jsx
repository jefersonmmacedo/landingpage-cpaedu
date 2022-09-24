import {Route, Routes, Navigate} from 'react-router-dom';
import { Home } from '../pages/Home/Home';

function Router () {
const Local = localStorage.getItem("cpaeduu");
const userLocal = JSON.parse(Local)

function PrivateRoute({children} ) {
    return userLocal !== null ? children : <Navigate to="/"/>
}

    return (
            <Routes>
            {/* Rotas abertas */}
            <Route path="/" element={<Home />}/>
            </Routes>
           
    )
}

export {Router}