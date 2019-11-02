import React from 'react';

class Navbar extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav class="navbar navbar-light bg-light">
                <div class = "col-md-6" style = {{textAlign: "right"}}>
                <button type="button" class="btn btn-primary btn-lg">Developers</button>
                </div>
                <div class = "col-md-6">
                <button type="button" class="btn btn-primary btn-lg">Companies</button>
                </div>
</nav>
            </div>
            
            
         );
    }
}
 
export default Navbar;