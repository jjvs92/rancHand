import React from "react"
import { Route } from "react-router-dom"
import { Users } from "../../../modules/users"

const Main = ({ ...props }) => {

  return (
    <div id="content">
        <Route exact path="/admin/users" component={Users} />
    </div>
  )
}

export default Main