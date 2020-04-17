import React from 'react'
import { Link } from "react-router-dom" 

const Sidebar = ({ navLinks }) => {

  return (
    <div id="side_bar">
        {navLinks.map(({title, link}) => (
          <Link style={{ width: '90%', margin: "0px auto", padding: "20px 10px", display: 'block' }} to={link}>{title}</Link>
        ))}
    </div>
  )
}

export default Sidebar