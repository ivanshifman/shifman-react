import './spinner.css';
import { BeatLoader, PacmanLoader } from 'react-spinners';

const override = {
    display: "block",
    margin: "auto",
    borderColor: "rgb(245,245,245)"
}

export const Spinner = ({ isLoading }) => {
    return (
        <div className='contenedor-spinner'>
            <BeatLoader
                color="rgba(230, 18, 18, 0.919)"
                cssOverride={override}
                loading={isLoading}
                margin={2}
                size={50}
            />
        </div>
    )
}

export const SpinnerError = ({ isError }) => {
    return (
        <div className='contenedor-spinner'>
            <PacmanLoader
                color="#910b0b"
                cssOverride={override}
                loading={isError}
                margin={2}
                size={50}
            />
        </div>
    )
}
