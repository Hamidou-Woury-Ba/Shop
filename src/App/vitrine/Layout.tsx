import { Outlet } from "react-router-dom"
export default function Layout(){
    return (<>
        <div>
            <h1>Je suis présent partout</h1>
            <Outlet />
        </div>
    </>)
}