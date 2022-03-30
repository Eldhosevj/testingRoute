import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom"

const A1=()=>{
    return(<div>
        I love you
    </div>)
}

const A2=()=>{
    return (<div>
        I am not loving you
    </div>)
}
function App(){




return (<div>
<Router>
    <Switch>
        <Route path="/first" component={A1} />
        <Route path="/second" component={A2} />

    </Switch>
</Router>
</div>)

}

export default App

