import { signup, useAuth, logout, login } from '../firebase';
import React, { useRef, useState } from 'react';
function App() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth() /* 設定currentUser為firebase裡面的useAuth回傳的值 */
    /* try為防止重複輸入相同帳號導致錯誤 */
    async function handleSignup(){
      /* 讓signup鍵不能按 */
      setLoading(true);
      //try{
      await signup(emailRef.current.value, passwordRef.current.value);
      //} catch {
      //  alert('Error!')
      //}
      setLoading(false);
      /* 讓signup鍵能按 */
    }

    async function handleLogIn(){
      /* 讓signup鍵不能按 */
      setLoading(true);
      try{
      await login(emailRef.current.value, passwordRef.current.value);
      } catch {
        alert('Error!')
      }
      setLoading(false);
      /* 讓signup鍵能按 */
    }

    async function handleLogout(){
      setLoading(true);
      try{
        await logout();
      } catch{
        alert('Error!');
      }
      setLoading(false);
    }
    return (
    <div id = 'main'>
      <div>Currently logged in as: { currentUser?.email} </div> {/* 如果有成功註冊會執行currentUser...，沒有則會忽視currentUser... */}
      <div id = 'fields'>
        <input ref = { emailRef } placeholder='email'/>
        <input ref = { passwordRef } placeholder='password' type="password"/>
      </div>
      <button disabled = { loading || currentUser } onClick = {handleSignup}>Sign Up</button> 
      <button disabled = { loading || currentUser } onClick = {handleLogIn}>Log In</button> 
      <button diabled = { loading || !currentUser } onClick={ handleLogout } >Log Out</button>{/* 如果currentuser是null就讓按鍵不能用 */}
    </div>
  );
}
  export default App











