import { Card } from "@/components/card/card";


export default function Edit({ params }: { params: { 'team-id': string } }) {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1>TEAMS EDIT N.{params['team-id']}</h1>

      <form className='flex'>
        <ul>TODO</ul>
      </form>
      <Card></Card>
    </main>
  )
}