import Header from "../components/Header.jsx";
import {Outlet} from "react-router";
import Footer from "../components/Footer.jsx";

export function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-grow bg-gray-100">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
