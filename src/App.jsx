import { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./Contact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setError(null);
        setContacts(response.data);
      })
      .catch(setError);

    /* Using Fetch
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        setContacts(response);
        setError(null);
      })
      .catch(setError);
    */
  }, []);

  if (error) return <p>An error occurred</p>;

  return (
    <div className="App">
      {contacts.map(({ id, name, email, company }) => (
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
