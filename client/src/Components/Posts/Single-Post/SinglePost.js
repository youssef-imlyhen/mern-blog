import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router';
import "./Single.css";
import {getPosts} from '../../../actions/posts.js'

export default function SinglePost() {
    let {_id} = useParams();
    let post = useSelector((state) => state.posts[state.posts.findIndex(thePost => thePost._id === _id)]);

    const dispatch = useDispatch();
    useEffect(() => {
        const singlePostContainer = document.querySelector('.post-container');
        if(singlePostContainer === null) return 
        singlePostContainer.style.background = post.background;
    },[])

    useEffect(() => {
      dispatch(getPosts());
    },[dispatch]);




    return (
        <div>
       {post ?  <div className="post-container">
       {post.tags.map((tag, i) => <span className=
       {"tag tag"+i+1} key={i}><a>{"#"+tag+""}</a></span>)}
       <h1 className="post-title">this is a post {post.title}</h1>
       <span className="des">{post.descreption}...</span>
       <div className="author-sec">
           <div className="author-avatar"></div>
           <div className="author-text">
               <h5>{post.author}</h5>
               <h6>{(post.createdAt)}</h6>
           </div>
       </div>
       <img className="thumbnail" src="https://reedbarger.com/content/images/size/w2000/2021/04/is-react-a-library-or-framework.png" alt="just a demo img" />
       <div dangerouslySetInnerHTML={{__html: post.content}}></div>
   </div> : "loading"}
   </div>
    )
}
