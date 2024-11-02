import spinningGears from '../images/spinningGears.gif'
import background from '../images/background.png'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Link} from 'react-router-dom';

function Home()
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
    
      <h3>Timetravel by clicking one of the buttons down below: </h3>
        <footer className="homeFooter">
                <ButtonGroup variant="contained" aria-label="Basic button group">
                  <Link to="/timeline/past">
                    <Button sx={{ 
                    backgroundColor: 'red', 
                    '&:hover': { 
                      backgroundColor: 'darkbrown' 
                    } 
                    }}>
                      <h2>Past</h2>
                    </Button>
                  </Link>
        
                  <Link to="/timeline/present">
                  <Button sx={{ 
                    backgroundColor: 'brown', 
                    '&:hover': { 
                      backgroundColor: 'darkbrown' 
                    } 
                    }}>
                      <h2>Present</h2>
                    </Button>
                  </Link>
        
                  <Link to="/timeline/future">
                  <Button sx={{ 
                    backgroundColor: 'green', 
                    '&:hover': { 
                      backgroundColor: 'darkbrown' 
                    } 
                    }}>
                      <h2>Future</h2>
                    </Button>
                  </Link>
                </ButtonGroup>
              </footer>
    
      </div>
    
      )
}

export default Home;