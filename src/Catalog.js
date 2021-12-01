import React, {useState} from 'react'
import axios from 'axios'
const Catalog = () => {
  const [id, setID] = useState();
  const [phone, setPhone] = useState([]);
  const [phones, setPhones] = useState([]);


  async function getPhone() {

    try {
      await axios.get(`/phones/${id}`)
        .then((res) => {
          setPhone(res.data);
        });
    } catch (error) {
      alert("Something went wrong. Please try again")
    }
  }

  async function getPhones() {

    try {
      await axios.get(`/phones`)
        .then((res) => {
          setPhones(res.data);
        });
    } catch (error) {
      alert("Something went wrong. Please try again")
    }
  }
  return (
    <div>
      <form>
        <h1>phone here</h1>
        <input type="text" required placeholder="Phone ID"  onChange={(id) => setID(id.target.value)} />
        <button type="button" onClick={getPhone}>GET INFO</button>
      </form>
      <table>
          <th>id</th>
          <th>name</th>
          <th>quantity</th>
          <th>brand</th>
          {
            phone.map((phone, index) => {
              return (
                <tr>
                  <td key={index}>{phone.id}</td>
                  <td key={index}>{phone.name}</td>
                  <td key={index}>{phone.quantity}</td>
                  <td key={index}>{phone.brand}</td>
                </tr>
              )
            })
          }
        </table>
      <form>
        <h1>all phones here</h1>
        <button type="button" onClick={getPhones}>GET INFO</button>
      </form>
     
     
        <table>
          <th>id</th>
          <th>name</th>
          <th>quantity</th>
          <th>brand</th>
          {
            phones.map((phone, index) => {
              return (
                <tr>
                  <td key={index}>{phone.id}</td>
                  <td key={index}>{phone.name}</td>
                  <td key={index}>{phone.quantity}</td>
                  <td key={index}>{phone.brand}</td>
                </tr>
              )
            })
          }
        </table>
    </div>
  )
}

export default Catalog
