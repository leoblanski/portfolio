import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Layout(props) {

    return (
        <div className="w-full mx-auto">
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )

}