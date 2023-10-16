export default async function Home() {
  const usersFetch = await fetch('http:/localhost:3000/api/users');
  const users = await usersFetch.json();

  return (
    <main>
      <ul>
        <li>
          {
            users.data.results.map((u:any) => (
              <p key={u.email}>{u.name.first}</p>
            ))
          }
        </li>
      </ul>
    </main>
  )
}
