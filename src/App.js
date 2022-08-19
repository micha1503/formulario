import React from "react";
import {form, field } from "react-final-form";
function finalfrom () {
 function onSubmit ( values) 

}
returm (
  <form onSubmit ={onSubmit}>
{({handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="email">Email</label>
    <field name="email" component ="input" id="email" type="email" />
    <label htmlFor="password">password</label>
    <field
   name ="password"
   component="input"
   id="password"
   type="password"
   />

   button type="submit">sign up</button>
  </form>
)}
  </form>