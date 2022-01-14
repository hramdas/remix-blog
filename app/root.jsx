import {Outlet, LiveReload, Link, Links, Meta} from 'remix'
import glocalStylesUrl from '~/styles/global.css'
import mongoose from "mongoose";
import Post from "./utils/db.server.js";

export const links = ()=>[{
  rel: 'stylesheet', href:glocalStylesUrl
}]

export const meta = ()=>{
  const description = "Built with remix"
  const keywords = "remix, react, js"
  return {
    description,
    keywords
  }
}

mongoose.connect(
  "mongodb://127.0.0.1:27017/remix-blog",
  (error) => {
    if (!error) return console.info("Mongo connected");
    console.error(error);
  }
);

export default function App(){
  return(
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({children, title}){
  return(
    <html lang='eng'>
      <head>
        <Meta />
        <Links  />
        <title>{ title ? title : "Ramdas's Remix Blog"}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}

function Layout({children}){
  return(
    <>
    <nav className='navbar'>
      <Link to='/'  className='logo'>
        Remix
      </Link>
      <ul>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
        <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  <div className="container">
    {children}
  </div>
    </>
  )
}

export function ErrorBoundary({error}){
  return(
      <Document>
        <Layout>
          <h1>Error</h1>
          <p> {error.message}</p>
        </Layout>
      </Document>
  )
}