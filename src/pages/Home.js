import React, { Component } from 'react'
import './homes.css'

class Home extends React.Component {
   
    render() {
        return (
          
    <div className="continer_home">
      <div className="item_home">
          <h1>Adimin</h1>
         <h2>Bienvenu dans le space Back-office Paroisse Emmanuel</h2>
        <br/>
        <br/>
         <h3>ici vous trouvez tous les partie CRUD de site suivez les Explication  avant de 
        commencer  quoi qu'il soit</h3>
        <br/>
        <br/>

        <ul>
            <li>1. pour voir tout les cours qui sont dans la base de donnée cliquer sur Le nav "CRUD"et choisiesz le Get</li>
            <br/>
            <li>2. Pour effacer ou editer un cours qui est dans la base de donnée cliquer sur Le Nav ou il y a marquer (CRUD) et choisissez le (Get) vous trouverez tout les cour et choisissez un et cliquez sur le button Delete</li>
            <br/>
            <li>3. pour voir tout les Calander qui sont dans la base de donnée cliquer sur Le nav "CRUD"et choisiesz Calander</li>
            <li>4. pour effacer ou editer tout les Calander qui sont dans la base de donnée cliquer sur Le nav "CRUD"et choisiesz </li>
            <li>B</li>
            <li>B</li>
            <li>B</li>
        </ul>
        <br/>
        <br/>
       
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
