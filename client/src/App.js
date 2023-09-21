import { BrowserRouter, Routes, Route, Redirect, Navigate  } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.jsx'
import './assets/css/reset.css'
import AdminIndex from './pages/Admin/AdminIndex'
import Layout from './layout/Layout';
import AdminLayout from './layout/AdminLayout';
import Login from './pages/Admin/Login';
import Messages from './pages/Admin/Message/Messages';
import SiteContent from './pages/Admin/Content/SiteContent';

function App() {
  const token = localStorage.getItem('token')

  return (
    <div className="App">
           <BrowserRouter>
          {
            token ? <AdminLayout>
                <Routes>
                  <Route path='/admin' element={<AdminIndex />}/>
                  <Route path='/admin/messages' element={<Messages />}/>
                  <Route path='/admin/settings' element={<SiteContent />}/>
                </Routes>
            </AdminLayout> :
              <Layout />
          }
        </BrowserRouter>
    </div>
  );
}

export default App;
