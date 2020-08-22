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
                <Route exact path='/index' component={Index} />
                <Route path='/ramakien' component={Ramakien} />
                <Route path='/disney' component={Disney} />
                <Route path='/thaibook' component={ThaiBook} />
                <Route path='/longka' component={Longka} />
            </div>
        )
    }
}

export default App;