
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUpPage from './pages/signup'
import './index.css';
import SignInPage from './pages/signin';
import Dashboard from './pages/dashboard';
import SendMoney from './pages/sendmoney';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<SignUpPage />}></Route>
            <Route path='/' element={<SignInPage />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/sendmoney' element={<SendMoney />}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
