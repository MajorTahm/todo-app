import { useContext } from "react";
import { AppContext } from "../../context/appContext";


function ErrorMessage() {

    const { error } = useContext(AppContext)

    return (
        <p className='text-center text-red-700'>{error}</p>
    );
}

export default ErrorMessage;