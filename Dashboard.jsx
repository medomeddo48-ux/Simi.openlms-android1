import React, {useEffect, useState} from 'react';
export default function Dashboard(){
  const [me,setMe]=useState(null);
  const [courses,setCourses]=useState([]);
  useEffect(()=>{ load(); }, []);
  async function load(){
    try{
      const r = await fetch('/api/users/me', {credentials:'include'});
      if(r.ok) setMe(await r.json());
      const c = await fetch('/api/courses', {credentials:'include'});
      if(c.ok) setCourses(await c.json());
    }catch(e){}
  }
  return <div style={{padding:20}}>
    <h2>Dashboard</h2>
    {me ? <div><b>{me.fullName}</b> ({me.role})</div> : <div>Not logged in</div>}
    <hr/>
    <h3>Courses</h3>
    <ul>{courses.map(c=> <li key={c.id}>{c.title}</li>)}</ul>
  </div>
}
