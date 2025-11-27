import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const nav = useNavigate();
  async function submit(e){
    e.preventDefault();
    try{
      const res = await fetch('/api/auth/login', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({email,password}), credentials: 'include'
      });
      if(res.ok){ alert('Logged in'); nav('/dashboard'); }
      else { const j = await res.json(); alert(j.error || 'Login failed'); }
    }catch(err){ alert('Network error: '+err.message); }
  }
  return <div style={{padding:20}}>
    <h2>Login</h2>
    <form onSubmit={submit}>
      <div><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email"/></div>
      <div><input value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" type="password"/></div>
      <button type="submit">Login</button>
    </form>
  </div>
}
