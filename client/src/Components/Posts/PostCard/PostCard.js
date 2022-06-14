import './postcard.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {deletePost} from '../../../actions/posts'
import {AiTwotoneDelete} from "react-icons/ai"
//   import SinglePost from '../Single-Post/SinglePost'
//   import Posts from '../Posts'


 function PostCard({post}) {
    let dispatch = useDispatch();
    let {title, descreption, background, tags} = post;
    
    return (
            <div className="card" style={{background}} >
              <div className="top-section">
                <h2 className="title">{title ? title : ("A Card blah lahblahblah")}</h2>
                <AiTwotoneDelete className="delete-post" onClick={() => dispatch(deletePost(post._id))}/>
                 </div>
                <div className="buttons">
                    <Link to={"/blog/" + post._id}>
                        <button className="code">more...</button>
                    </Link>
                    <Link to={"/Editor/" + post._id}>
                        <button className="code">edit</button>
                    </Link>
                </div>
                <div className="bottom-serction" >
                    <p className="details">{descreption ? descreption : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt accusantium quaerat. Porro, obcaecati aliquam."}</p>
                <div className="tags">
                    <em >Techs:</em>
                    {tags ? tags.map((element) => <span key={element}>{element}</span>) : <span >react</span>}
                    
                </div>
            </div>
      

        </div>
        

    )
}
export default PostCard;