import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './pages/layouts/app';
import { AuthLayout } from './pages/layouts/auth';
import { Feedback } from './pages/app/feedback';
import { Home } from './pages/app/home';
import { SignIn } from './pages/auth/sign-in';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Loading } from './components/loading';
import { NotFound } from './pages/error/NotFound';
import { NotAuthorized } from './pages/error/NotAuthorized';
import { InDevelopment } from './pages/error/InDevelopment';
import { AdminLayout } from './pages/app/admin/layout';
import { Test } from './pages/app/admin/home';
import { Dash } from './pages/app/admin/dashboard';
import { AdminSettings } from './pages/app/admin/settings';

export function Router() {
  const { loading, user } = useContext(AuthContext)
  if(loading) {
    return (<Loading/>)
  }

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route path='' element={<Home />} />
      </Route>

      <Route path='/login' element={<AuthLayout />}>
        <Route path='' element={<SignIn />} />
      </Route>

      <Route path='/feedback' element={<Feedback />} />

      <Route path='/test' element={<AdminLayout />} >
        <Route path='' element={<Test />} />
        <Route path='dash' element={<Dash />} />
        <Route path='settings' element={<AdminSettings />} />
      </Route>

      <Route 
        path='/admin' 
        element={
          <ProtectedRoute user={user} >
            <AdminLayout />
          </ProtectedRoute>
        }>
        {/* <Route path='' element={<Admin />} /> */}
      </Route>
      

      <Route path='/401' element={<NotAuthorized />} />
      <Route path='/in-development' element={ <InDevelopment /> } />
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  )
}

function ProtectedRoute({ user, children }: any) {
  if (!user) {
    return <Navigate to="/401" replace />;
  }

  return children;
};
