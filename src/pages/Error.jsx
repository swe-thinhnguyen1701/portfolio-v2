import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Error() {
    const error = useRouteError();
    console.log(error);


    return (
        <>
            <NavBar />
            <section className="section">
                <h2>ERROR</h2>
                <p>{error.statusText || error.message}</p>
            </section>
            <Footer />
        </>
    )
}

export default Error;