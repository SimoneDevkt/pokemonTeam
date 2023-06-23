export default function About() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>  <li>{number}</li>);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1>TEAMS LIST</h1>

      <form className='flex'>
        <ul>{listItems}</ul>
      </form>
    </main>
  )
}