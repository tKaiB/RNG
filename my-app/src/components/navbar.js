import React ,{ useState , useRef} from 'react'
import "./styles.css"
import { Link , useNavigate } from "react-router-dom"
import { UserAuth } from '../contexts/AuthContext'

function NavBar(){
    const {signIn} = UserAuth();
    const [error,setError] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        setError('')
        try {
            await signIn(emailRef.current.value, passwordRef.current.value)
            navigate('/account')
            
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }
    return <nav className = "nav">
          <a onClick={handleSubmit} className="site-title">RNG</a>
          <ul>
            <li>
                <Link to="/Aboutus">About Us</Link>
            </li>
            <li>
                <Link to="/FAQ">FAQ</Link>
            </li>
            <div>
                <button className="btn" onClick = {() => navigate('/')}>Sign Up</button>
            </div>
            <div>
                <button className="btn" onClick = {() => navigate('/Signin')}>Sign In</button>
                
            </div>
          </ul>
    
    </nav>
        
}
export default NavBar
