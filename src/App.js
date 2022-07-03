// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_USERS);

    console.log(data);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    // debugger

  return data.users.map(({ id, name, email }) => (
      <div key={id}>
        <h3>{name}</h3>
        <b>Email:</b>
        <p>{email}</p>
        <br />
      </div>
  ));
}

export default function App() {
    return (
        <div>
            <h2>My first Apollo app 🚀</h2>
            <br/>
            <DisplayLocations />
        </div>
    );
}