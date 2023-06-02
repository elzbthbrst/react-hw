
import { Link } from 'react-router-dom'
import '../styles/App.css';


export default function Home() {
  return (
    <div className='btn_home '> 
        <Link to = '/users'> 
    <button>LET'S CHOOSE THE USER</button>
    </Link> 
    </div>
    
  )  
}