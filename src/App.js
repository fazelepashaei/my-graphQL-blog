import {Route, Routes} from "react-router-dom"
import {gql, useQuery} from "@apollo/client";

import AuthorPage from "./components/author/AuthorPage"
import BlogPage from "./components/blog/BlogPage";
//import Blogs from './components/blog/Blogs'
import Header from './components/layout/Header'
import HomePage from './components/home/HomePage'
import Layout from './components/layout/index'

// const QUERY= gql`
// query {
//        authors {name}
// }
// `
// ;
function App() {
  // const {loading,data}=useQuery(QUERY);
  // console.log(data)
  return (
   // <h1>ok</h1>
     <Layout>
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/blogs/:slug" element={<BlogPage/>}/>
         <Route path="/authors/:slug" element={<AuthorPage/>}/>
      </Routes>
      {/* <HomePage/> */}
      {/* <Blogs/> */}
     </Layout>
  
  );
}

export default App;
