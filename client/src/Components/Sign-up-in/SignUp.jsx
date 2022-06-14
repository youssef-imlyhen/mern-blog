import  {useState} from 'react'
import './sign.css'
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();


  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("from handle");
    if (!isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
console.log('times');

  const handleChange = (e) => {setForm({ ...form, [e.target.name]: e.target.value }); console.log(form);}
    return (
        <>
            <form className="sign-container">
            <div className="sign-form">
                <h1 className="editor-title sign-title">Sign Up</h1>
                <h4 className="sign-subtitle">it's easy and quick</h4>
            <div className="input-couple">
                <label className="sign-label" htmlFor="firstname">First Name</label>
                <input onChange={handleChange} placeholder="First Name Here" type="text" className="sign-input" name="firstName"/>
            </div>
            <div className="input-couple">
                <label className="sign-label" htmlFor="lastname">Last Name</label>
                <input onChange={handleChange} placeholder="Last Name Here" type="text" className="sign-input" name="lastName"/>
            </div>
            <div className="input-couple">
                <label className="sign-label" htmlFor="email">Email</label>
                <input onChange={handleChange} placeholder="Email Here" type="email" className="sign-input" name="email"/>
            </div>
            <div className="input-couple">
                <label className="sign-label" htmlFor="password">Password</label>
                <input onChange={handleChange} placeholder="Password Here" type="password" className="sign-input" name="password"/>
            </div>
            <div className="input-couple">
                <label className="sign-label" htmlFor="password">Confirm Password</label>
                <input onChange={handleChange} placeholder="Confirm Password Here" type="password" className="sign-input" name="confirmPassword"/>
            </div>
            <div className="input-couple">
                <button className="sign-btn" onClick={handleSubmit}>Regester</button>
            </div>
        </div>
            </form>
        </>
    )
}

export default SignUp
