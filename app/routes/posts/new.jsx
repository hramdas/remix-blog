import {Link, redirect} from 'remix'
import Post from '../../utils/db.server.js'

export const action = async ({request})=>{
  const form = await request.formData()
  const title = form.get('title')
  const body = form.get('body')
  const fields = {title, body}

    const post = await Post.create(fields);
    console.log(post)
    // return post

    return redirect(`/posts/${post.id}`)
}

function NewPost() {
    return (
        <>
        <div>
            <div className="page-header"></div>
            <h1>New post</h1>
            <Link to="/posts" className='btn btn-reverse' >Back</Link>
        </div>

        <div className="page-content">
            <form method='POST'>
                <div className="form-control">
                    <label htmlFor='title' >Title</label>
                    <input id="title" type="text" name="title" />
                </div>
                <div className="form-control">
                    <label htmlFor='body' >Post Body</label>
                    <textarea id="body" type="text" name="body" />
                </div>
                <button type='submit' className='btn btn-block'>Add Post</button>
            </form>
        </div>
        </>
    )
}

export default NewPost
