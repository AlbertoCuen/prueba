import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../components/home/Home"
import Login from "../components/login/Login"


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login />} />
                <Route path="/home" element={ <Home />} />
            </Routes>
        </BrowserRouter>

    )
}
