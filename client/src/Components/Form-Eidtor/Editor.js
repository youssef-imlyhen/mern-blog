import React, { useCallback, useState, useEffect } from 'react';
import Quill from "quill";
import "./quill-snow.css";
import "./editor.css";
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {getPosts} from '../../actions/posts.js'
import { createPost, updatePost } from '../../actions/posts';
// import EditorFirstSection from './EditorFirstSection'



const Editor = (e) => {
    let history = useHistory();
    const dispatch = useDispatch();
    let {_id} = useParams();
    let post = useSelector((state) => state.posts[state.posts.findIndex(thePost => thePost._id === _id)]);
    
    const [quill, setQuill] = useState()
    const [postData, setPostData] = useState({ title: '', thumbnail: '', author: '', content: '', descreption: '', background: ''});
    
    const fillForm = useCallback(() => {
        if(_id === undefined || _id === null || post === undefined) return;
        setPostData((...prevState) => {
            return {...prevState, ...post};
        })
    }, [dispatch])
    useEffect(() => {
        dispatch(getPosts());
        fillForm();
    },[dispatch]);

    
    useEffect(() => {
        if (quill == null) return
        
        const handler = delta => {
            setPostData((prevState) => {return { ...prevState, content: quill.root.innerHTML}})
        }
        quill.on("text-change", handler)
        
        return () => {
            quill.off("text-change", handler)
        }
    }, [quill])
    

    
    
    useEffect(() => {
        let domContent = document.querySelector('.ql-editor');
        domContent.innerHTML = postData.content;
        fillForm();
        const container = document.querySelector('.editor-container');
        container.style.background = postData.background;
    }, [post])

    
    const TOOLBAR_OPTIONS = [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline"],
        [{ script: "sub" }, { script: "super" }],
        [{ align: [] }],
        ["image", "blockquote", "code-block"],
        ["clean"],
    ]
    
    
    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return;
        
        wrapper.innerHTML = '';
        
        const editor = document.createElement('div');
        wrapper.append(editor);
        const q = new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS }})
        
        setQuill(q)
    }, [])
    
    console.log(postData);
    
    const saveHandler = (e) => {
        if(_id === undefined || _id === null) {
            if(postData.title === "") return;
            dispatch(createPost(postData));
            history.push("/");
            
        } else {
            dispatch(updatePost(_id, postData));
        }
    }
    
    return (
        <div>
            {/* <EditorFirstSection/> */}
            <div className="editor-container">
            <div className="form-inputs">
                <h1 className="editor-title">Explode Your Creativity</h1>
                <img src="/assets/undraw_relaunch_day_902d.svg" width="300"/>
                
                <div className="l-a-i-couple">
                    <div className="lab-and-inp">
                         <label className="post-label">title</label>
                         <textarea className="ta-post-data"  onChange={(e) => setPostData({ ...postData, title: e.target.value })} className="title-input" rows="4" cols="22" value={postData.title}></textarea>
                    </div>       
                                    
                    <div className="lab-and-inp">
                         <label className="post-label">descreption</label>
                         <textarea className="ta-post-data"  onChange={(e) => setPostData({ ...postData, descreption: e.target.value })} className="descreption-input" rows="5" cols="22"  value={postData.descreption}></textarea>
                    </div>
                </div>
                
                <div className="l-a-i-couple">
                    <div className="lab-and-inp">
                     <label className="post-label">thumbnail url</label>
                         <textarea className="ta-post-data"  onChange={(e) => setPostData({ ...postData, thumbnail: e.target.value })} className="thumbnail-input" rows="4" cols="22"  value={postData.thumbnail}></textarea>
                    </div>
                                
                    <div className="lab-and-inp">
                         <label className="post-label">background</label>
                         <textarea className="ta-post-data"  onChange={(e) => setPostData({ ...postData, background: e.target.value })} className="background-input" rows="4" cols="22" value={postData.background}></textarea>
                         <input type="color"></input>
                    </div>
                </div>            
                
                <div className="l-a-i-couple">
                    <div className="lab-and-inp">
                         <label className="post-label">tags</label>
                         <textarea className="ta-post-data"  onChange={(e) => setPostData({ ...postData, tags: e.target.value })} className="tags-input" rows="4" cols="22" value={postData.tags}></textarea>
                    </div>    
                </div>        
               
             
            </div>
            <button onClick={saveHandler} className="save-post">save</button>
            <div className="editor"  ref={wrapperRef}></div>
        </div>
        </div>
       
    )
}

export default Editor;