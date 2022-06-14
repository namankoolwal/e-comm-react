import React from 'react'
import './Details.css';

const Details = () => {
  return (
    <div id="form_wrapper1">
    <div id="form_right1">
        <h1>Deliver to: </h1>
        <br />
        <div class="input_container1">
            <i class="fas fa-user"></i>
            <input placeholder="Name" type="text" name="Uname" id="field_name1" class="input_field1" />
        </div>
        <br />
        <div class="input_container1">
            <i class="fas fa-envelope"></i>
            <input placeholder="Email" type="email" name="email" id="field_email1" class="input_field1" />
        </div>
        <br />
        <div class="input_container1">
            <i class="fas fa-mobile"></i>
            <input placeholder="Mobile no." type="tel" name="mobile" id="field_mobile1" class="input_field1" />
        </div>
        <br />
        <div class="input_container1">
            <i class="fas fa-home"></i>
            <input placeholder="Address" type="text" name="add" id="field_address1" class="input_field1" />
        </div>
        <br />
        <div class="input_container1" id="try1">
            <div class="input_container1">
                <i class="fas fa-city"></i>
                <input placeholder="City" type="text" name="city" id="field_city1" class="input_field1" />
            </div>
            <div class="input_container1">
                <i class="fas fa-map-pin"></i>
                <input placeholder="Pin Code" type="text" name="pcode" id="field_code1" class="input_field1" />
            </div>
        </div>
        <br /><br />
          <input type="submit" value="continue to payment" id="input_submit1" class="input_field1" />
    </div>
</div>
  )
}

export default Details