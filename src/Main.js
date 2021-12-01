import React, { useState } from 'react'
import axios from 'axios'
const Main = () => {

  const [id, setID] = useState();

  const [name, setName] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [brand, setBrand] = useState([]);


  async function add_phone(add_phone) {
    add_phone.preventDefault();
    try {
      await axios.post("/phones", { name, quantity, brand })
      alert(`${name} added successfully`)
    } catch (err) {
      console.log(err);
      alert('Error')
    }
  }


  async function delete_phone() {
    try {
      await axios.delete(`/phones/${id}`)
      alert(`Запись с ID: ${id} удалена`)
    } catch (err) {
      alert("Цветков с таким ID нет")
    }
  }

  async function update_phone(update_phone) {
    update_phone.preventDefault();
    try {
      await axios.put(`/phones/${id}`, { name, quantity, brand })
      alert(`Запись с ID: ${id} обновлена`)
    } catch (error) {
      alert('Error')
    }
  }

  return (
    <div>
      <form>
        <h1>delete phone here</h1>
        <input type="text" required placeholder="Phone ID" onChange={(id) => setID(id.target.value)} />
        <button type="button" onClick={delete_phone}>delete info about phone</button>
      </form>

      <form onSubmit={add_phone}>
        <h1>add phone here</h1>
        <input type="text" required placeholder="Name" onChange={(add_phone) => setName(add_phone.target.value)} />
        <input type="text" required placeholder="Quantity" onChange={(add_phone) => setQuantity(add_phone.target.value)} />
        <input type="text" required placeholder="Brand" onChange={(add_phone) => setBrand(add_phone.target.value)} />
        <button type="submit">add phone</button>
      </form>

      <form >
        <h1>update info about phone here</h1>
        <input type="text" required placeholder="Phone ID" onChange={(id) => setID(id.target.value)} />
        <input type="text" required placeholder="Name" onChange={(update_phone) => setName(update_phone.target.value)} />
        <input type="text" required placeholder="Quantity" onChange={(update_phone) => setQuantity(update_phone.target.value)} />
        <input type="text" required placeholder="Brand" onChange={(update_phone) => setBrand(update_phone.target.value)} />
        <button type="button" onClick={update_phone}>Update info about flower</button>
      </form>
    </div>
  )
}

export default Main
