import React, { Component } from 'react'
import './homes.css'

class Home extends React.Component {
   
    render() {
        return (
          
    <div className="continer_home">
      <div className="item_home">
         <h1>this is home</h1>
         <p>Under Unix, database names are case-sensitive (unlike SQL keywords),
              so you must always refer to your database as menagerie, not as Menagerie,
               MENAGERIE, or some other variant. This is also true for table names. (Under Windows, 
               this restriction does not apply, although you must refer to databases and tables using 
               the same lettercase throughout a given query. However, for a variety of reasons, the recommended 
               best practice is always to use the same
              lettercase that was used when the database was created.)</p>
              <p>Under Unix, database names are case-sensitive (unlike SQL keywords),
              so you must always refer to your database as menagerie, not as Menagerie,
               MENAGERIE, or some other variant. This is also true for table names. (Under Windows, 
               this restriction does not apply, although you must refer to databases and tables using 
               the same lettercase throughout a given query. However, for a variety of reasons, the recommended 
               best practice is always to use the same
              lettercase that was used when the database was created.)</p>
     </div>
    </div>
        )
    }
}

export default Home
