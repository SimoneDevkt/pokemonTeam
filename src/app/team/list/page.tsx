import { Card } from "@/components/card/card";
import { NavBar } from "@/components/navbar/navbar";


import axios from 'axios';

export default async function About() {
  const numbers = [1, 2, 3, 4, 5];
  
  try {
    const response = await axios.get('/api/team');
    console.log(response)
  } catch (error) {
    console.error(error);
  }
  const listItems = numbers.map((number) => {
    return <>    
      <li>
        {number}
        <div>teamName</div>
        <div>base_exp</div>
        <Card></Card>
      </li>
      
    </>
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <NavBar></NavBar>
      <h1>TEAMS LIST</h1>

      <form className='flex'>
        <ul>{listItems}</ul>
      </form>
    </main>
  )
}