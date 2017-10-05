import React from 'react'
import { Link } from 'react-router-dom'

const HomeContainer = () => (
  <div>
    <h1>Home</h1>
    <ul>
      <li><Link to="/hobbies">Hobbies List</Link></li>
    </ul>
  </div>
)

export default HomeContainer
