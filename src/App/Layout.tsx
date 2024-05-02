import { Outlet } from "react-router-dom"
import Header from "../component/Header"
import Footer from "../component/Footer"
export default function Layout(){
    return (<>
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    </>)
}