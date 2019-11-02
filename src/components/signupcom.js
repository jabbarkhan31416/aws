import React from 'react';

class Signupcom extends React.Component {
    render() { 
        return ( 
            <div style={{color : "blue", fontSize: "20px"}}>
           <form>
  <div class="form-row">
  <div class="form-group">
      <label for="inputEmail4">Company Name</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Company Name" />
    </div>
    </div>
    <div class="form-row">
  <div class="form-group col-md-4">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" />
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip" />
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="inputEmail4">Website</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Website" />
    </div>
  <div class="form-group col-md-6">
    <label for="inputAddress">Phone</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Phone" />
  </div>
  </div>

  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
            </div>
        )
    }
}
 
export default Signupcom;