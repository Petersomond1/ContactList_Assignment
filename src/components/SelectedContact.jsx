import { useState, useEffect } from "react";

const SelectedContact = ({selectedContactId, setSelectedContactId}) => {
  const [Contacts, setContacts] = useState(null);
console.log(contacts)
  useEffect(() => {
    async function fetchContact() {
      try {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`)
        const result = await resp.json();
        setContacts(result)
      } catch (error) {
      }
    }
    fetchContact()
  }, [])


  return (  <div> 
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{contacts.username}</td>
          <td>{contacts.email}</td>
          <td>{contacts.phone}</td>
        </tr>
          <tr>
          </tr>
      </tbody>
    </table>
    </div>
); 
};
export default SelectedContact;