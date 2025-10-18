import React, { useState } from 'react';
import API from '../api';

export default function Login({ onLogin }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name:'', email:'', password:'' });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const url = mode === 'login' ? '/auth/login' : '/auth/register';
      const res = await API.post(url, form);
      localStorage.setItem('gt_token', res.data.token);
      localStorage.setItem('gt_user', JSON.stringify(res.data.user));
      onLogin && onLogin(res.data.user);
    } catch (err) { alert(err.response?.data?.error || err.message); }
  };

  return (
    <div style={{width:260}}>
      <div style={{display:'flex', gap:8, marginBottom:8}}>
        <button onClick={()=>setMode('login')} disabled={mode==='login'}>Login</button>
        <button onClick={()=>setMode('register')} disabled={mode==='register'}>Register</button>
      </div>
      <form onSubmit={submit}>
        {mode==='register' && <input placeholder="Nombre" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />}
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
        <input type="password" placeholder="Contraseña" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required />
        <button type="submit">{mode==='login' ? 'Entrar' : 'Crear cuenta'}</button>
      </form>
    </div>
  );
}
