import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import BlogPage from './Features/Posts/BlogPage';
import EditBlog from './Features/Posts/EditBlog';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="Blog">
            <Route index element={<Blogs />} />
            <Route path=":postId" element={<BlogPage />} />
            <Route path="edit/:postId" element={<EditBlog />} />
          </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
