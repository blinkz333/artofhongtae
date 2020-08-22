import React , {Component} from 'react';
import {Route} from 'react-router-dom';


// pages
import Index from "views/Index.js";
import Ramakien from "views/Gallary/Ramakien.js"
import Disney from "views/Gallary/Disney.js"
import ThaiBook from "views/Gallary/Thaibook.js"
import Longka from "views/Gallary/Longka.js"

class App extends Component {
    render(){
        return (
            <div>
                <Route exact path='/' component={Index} />
                <Route path='https://blinkz333.github.io/art_of_hongtae/#/ramakien' component={Ramakien} />
                <Route path='https://blinkz333.github.io/art_of_hongtae/#/disney' component={Disney} />
                <Route path='https://blinkz333.github.io/art_of_hongtae/#/thaibook' component={ThaiBook} />
                <Route path='https://blinkz333.github.io/art_of_hongtae/#/longka' component={Longka} />
            </div>
        )
    }
}

export default App;