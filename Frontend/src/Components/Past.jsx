import background from '../images/background.png';
import loadingSpin from '../images/loading.gif';
import past from '../images/past.jpg';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Past() {
    const [loading, setLoading] = useState(true);
    const [past, setPastData] = useState('');
    const [error, setError] = useState(false); 

    useEffect(() => {
        async function getData() {
            try {
                await new Promise(resolve => setTimeout(resolve, 3000));
                //const data = await axios.get('https://localhost:8000/testing');

                //Testing for valid data fetching
                const data = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
                setPastData(data); 
                setLoading(false);
            } catch (e) {
                console.error(e);
                setError(true);
                setLoading(false); 
            }
        }
        getData();
    }, []);


    if (loading) {
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
                }}
            />
                <h1 className = "header">Loading...</h1>
                <img src={loadingSpin} alt="Loading..." />
            </div>
        );
    }

    if (error) {
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
                }}
                />

                 <h2 className = "header">
                        Error fetching Data
                </h2>

                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={loadingSpin} width="200" height="200" alt="Loading Spinner" />
                </div>

                <br />

                <Link to="/">
                    <Button color="info" variant="contained">Return to Homepage</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="pastPage">
            <div
                className="bg"
                style={{
                    backgroundImage: `url(${past})`,
                    height: '100vh',
                    width: '100vw',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    zIndex: -1,
                }}
            />
            <div className = "header">
                <h1>Time Period: 1920s</h1>
            </div>
            
            <Link to="/">
                <Button color="info" variant="contained">Return to Homepage</Button>
            </Link>
        </div>
    );
}

export default Past;