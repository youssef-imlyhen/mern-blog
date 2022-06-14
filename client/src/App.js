import Posts from './Components/Posts/Posts'
import {useDispatch} from 'react-redux'
import { getPosts } from './actions/posts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SinglePost from './Components/Posts/Single-Post/SinglePost'
import {useEffect} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Editor from './Components/Form-Eidtor/Editor'
// import Editor  from './Components/Form-Eidtor/Editor';
// import { Editor } from 'react-draft-wysiwyg';
// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import SignUp from './Components/Sign-up-in/SignUp'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);


  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/"><Posts/></Route>
            <Route exact path="/Editor"><Editor/></Route>
            <Route  path="/blog/:_id"><SinglePost/></Route>
            <Route path="/signup"><SignUp/></Route>
            <Route  path="/Editor/:_id"><Editor/></Route>
         </Switch>
         <Footer/>
        </Router>
    </div>
  );
}

export default App;
