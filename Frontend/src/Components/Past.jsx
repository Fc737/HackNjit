import background from '../images/background.png'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';

function Past()
{
    return (
        <div>
            <div
            className="bg"
            style={{
            backgroundImage: `url(${background})`,
            height: '100vh',
            width: '100vw',        
            position: 'fixed',      
            top: 0,
            left: 0,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            zIndex: -1,             
            }}/>
            <h3>You have hit the past page </h3>
            <Link to = "/">
                <Button color = "info"> Return to Homepage</Button>
            </Link>
        </div>
    )
}

export default Past;