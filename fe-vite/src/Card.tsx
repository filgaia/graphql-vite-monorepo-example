import { useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { HELLO_QUERY } from './lib/queries';

function Card() {
	const [count, setCount] = useState(0);
	const { loading, error, data } = useQuery(HELLO_QUERY, { variables: { limit: 10 }});
  const users = data?.persons.map((person: { name: string }) => <li>{person.name}</li>);

	if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

	return (
		<div className="card">
			<h2>{data?.hello}</h2>
			<ul>
				{users}
			</ul>
			<button onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button>
			<p>
				Edit <code>src/App.tsx</code> and save to test HMR
			</p>
		</div>
	);
}

export default Card;
