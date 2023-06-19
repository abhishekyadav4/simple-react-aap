import { Link } from "react-router-dom";


export default function ErrorPage(){
    return(
        <>
        <h1>
            Error 404
        </h1>
        <p>Page Not Found</p>

        <Link to="/home">Go To Home Page</Link>
        </>
    )
}