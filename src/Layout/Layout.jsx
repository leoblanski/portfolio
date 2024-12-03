import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Layout(props) {

    return <>
        <div className="w-full mx-auto bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
            <Navbar />
            <div className="container mx-auto py-10">
                {props.children}
            </div>
            {/* Fixado no final */}
        </div>
    </>

}