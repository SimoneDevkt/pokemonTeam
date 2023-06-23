import { Card } from "@/components/card/card";


export default function Edit({ params }: { params: { 'team-id': string } }) {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>  <li>{number}</li>);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1>TEAMS EDIT N.{params['team-id']}</h1>

      <form className='flex'>
        <ul>{listItems}</ul>
      </form>
      <Card></Card>
    </main>
  )
}