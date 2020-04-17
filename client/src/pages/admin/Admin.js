import React from "react"
import Sidebar from "../../components/admin/sidebar"
import Main from "../../components/admin/main"
import { navLinks } from "./navLinks"
import './admin.css'


const Admin = ({ ...props }) => {

  return (
    <div id="admin_container">
      <Sidebar navLinks={navLinks} />
      <Main {...props} />
    </div>
  )
}


export default Admin