import {useLoaderData, Link } from "remix"
import Post from '../utils/db.server.js'

export const loader = async ({params})=>{
  
    const postdata = await Post.findById(params.postid)
    if(!postdata) throw new Error("Post not fount")
    return postdata
}

function PostItem() {
    const data = useLoaderData()
    const datetime = data.createdAt.split('T')
    const date = datetime[0]
    return (
        <div>
            <div className="page-header">
                <h1>{data.title}</h1>
                <Link to="/" className="btn btn-reverse" >Back</Link>
            </div>
            <div className="post-content">
                <p id="postdate">Published on {date}</p>
                {data.body}
            </div>
        </div> 
    )
}

export default PostItem
