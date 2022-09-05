import useSWR from "swr";
import Contact from "./Contact";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (error) return <p>An error occurred</p>;
  if (!data) return <p>Loading</p>;

  return (
    <div className="App">
      {data.map(({ id, name, email, company }) => (
        <Contact
          key={id}
          name={name}
          email={email}
          tagline={company.catchPhrase}
        />
      ))}
    </div>
  );
}

export default App;
