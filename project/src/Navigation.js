import { BrowserRouter,Outlet,Route,Routes } from "react-router-dom";

import Dashboard from './component/Dashboard';
import Cards from './component/Cards';

const Navigation = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />}>
                {/* <Route path='/table' element={<Table />} /> */}
                <Route path='/cards' element={<Cards />} />
                </Route>
            </Routes>
        </BrowserRouter>
        
    )

}
export default Navigation;