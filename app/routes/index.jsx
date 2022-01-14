import {useLoaderData, Link} from 'remix'
import Post from '../utils/db.server.js'

export let loader  = async () => {
    const post =  await Post.find({});
    //console.log(posts)
    return post
  };

function PostItems() {
    
    const posts = useLoaderData()
    // const postbody = 

    return (
        <div>
            <div className="page-header">
            {/* <Link className='btn' to='/posts/new'>New Post</Link> */}
            </div>
            <ul className='posts-list'>
                {posts ? posts.map((post)=>(
                    <li key={post._id}>
                        <Link to={`./${post._id}`}>
                            <h3>{post.title}</h3>
                            <p>{post.body.slice(0, 220)} <Link to={`./${post._id}`}><b>...Read more</b></Link></p>
                        </Link>
                    </li> 
                )) : <p>not available</p> }
            </ul>
            
        </div>
    )
}

export default PostItems
