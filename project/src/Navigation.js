import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './component/Dashboard';
const Navigation = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>}>
                {/* <Route path='/table' element={<Table />} /> */}
                <Route path='/cards' element={<Cards />} />
                </Route>
            </Routes>
        </BrowserRouter>
        
    )

}
export default Navigation;