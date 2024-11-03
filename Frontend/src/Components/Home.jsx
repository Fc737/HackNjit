import spinningGears from '../images/spinningGears.gif'
import background from '../images/background.png'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Link} from 'react-router-dom';

import PastCard from './PastCard';
import PresentCard from './PresentCard';
import FutureCard from './FutureCard';

function Home()
{
    return (
      <div className ="homePage">
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
    
      <h4>Timetravel by clicking one of the buttons down below: </h4>
        <footer className="container">
        
        {<PastCard />}
        {<PresentCard />}
        {<FutureCard />}
            </footer>
    
      </div>
    
      )
}

export default Home;