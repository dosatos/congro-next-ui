import React from 'react'

interface User {
  id: number
  name: string
  email: string
}

const UsersPage = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // const res = await fetch(
  //   'https://jsonplaceholder.typicode.com/users', 
  //   { cache: 'no-store' }
  // );
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    { next: { revalidate: 10 } }
  );
  const data: User[] = await res.json()
  return (
    <>
      <div className='overflow-x-auto'>
        <h1>Users Page</h1>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user: any) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default UsersPage