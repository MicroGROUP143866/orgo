import React from 'react';
import Button from '../components/button';
import axios from 'axios';
import '../App';

const register=(req) => {
    return axios.post("/api/register", {
        firstName: req.firstname,
        lastName: req.lastname,
        phoneNumber: req.number,
        mailAddress: req.mail,
        bloodType: req.blood,
        dateOfBirth: req.dob,
        donorType: req.type,
        })
        .then(function (response) {
        console.log(response);
        return response;
        });
};

class Reg extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            firstname: "",
            lastname: "",
            number: "",
            mail: "",
            blood: "",
            dob: "",
            type: "",
        };
    }
  
    handleFirstNameChange = (event) => {
      this.setState({
        firstname: event.target.value,
      });
    };
  
    handleTypeChange = (event) => {
      this.setState({
        type: event.target.value,
      });
    };

    handleDobChange = (event) => {
      this.setState({
        dob: event.target.value,
      });
    };
  
    handleLastNameChange = (event) => {
      this.setState({
        lastname: event.target.value,
      });
    };
  
    handleNumberChange = (event) => {
      this.setState({
        number: event.target.value,
      });
    };
  
    handlMailChange = (event) => {
      this.setState({
        mail: event.target.value,
      });
    };
  
    handleBloodTypeChange = (event) => {
      this.setState({
        blood: event.target.value,
      });
    };

  
    handleSubmit = async (event) => {
      try {
        console.log(this.state);
        const response = await register(this.state);
        if (response) {
          console.log("successful");
        } else {
          console.log("failed");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    render() {
      return (
        <center>
            <br></br>
            <section>
            <div class="formbox">
                <center><h2>Donate and Save Lives</h2></center>
                    <form onSubmit={this.handleSubmit}>
                        <br></br>
                        <div class="innerBox">
                            <div>
                                <label className="formlabel">First Name</label>
                                <br></br>
                                <input
                                className="forminput"
                                type="text"
                                value={this.state.firstname}
                                onChange={this.handleFirstNameChange}
                                placeholder="Enter your First Name"
                                />
                            </div>
                            <div>
                                <label className="formlabel">Last Name</label>
                                <br></br>
                                <input
                                className="forminput"
                                type="text"
                                value={this.state.lastname}
                                onChange={this.handleLastNameChange}
                                placeholder="Enter your Last Name"
                                />
                            </div>
                            <div>
                                <label class="formlabel">Date of Birth</label>
                                <br></br>
                                <input
                                className="forminput"
                                type="date"
                                value={this.state.dob}
                                onChange={this.handleDobChange}
                                />
                            </div>
                            <div>
                                <label className="formlabel">E-Mail Address</label>
                                <br></br>
                                <input
                                className="forminput"
                                type="text"
                                value={this.state.mail}
                                onChange={this.handlMailChange}
                                placeholder="Enter your E-Mail Address"
                                />
                            </div>
                            <div>
                                <label className="formlabel">Mobile Number</label>
                                <br></br>
                                <input
                                className="forminput"
                                type="text"
                                value={this.state.number}
                                onChange={this.handleNumberChange}
                                placeholder="Enter your Mobile Number"
                                />
                            </div>
                            <div>
                                <label className="formlabel">Blood Type</label>
                                <br></br>
                                <select
                                value={this.state.blood}
                                class="forminput" 
                                onChange={this.handleBloodTypeChange}
                                placeholder="Blood Type"
                                >
                                    <option value="Not Specified">Blood Type</option>
                                    <option value="O-">O-</option>
                                    <option value="O+">O+</option>
                                    <option value="A-">A-</option>
                                    <option value="A+">A+</option>
                                    <option value="B-">B-</option>
                                    <option value="B+">B+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="AB+">AB+</option>
                                </select>
                            </div>    
                            <div>
                                <label className="formlabel">Donor Type</label>
                                <br></br>
                                <select
                                value={this.state.type}
                                onChange={this.handleTypeChange}
                                class="forminput"
                                >
                                    <option value="Not Specified">Donor Type</option>
                                    <option value="Blood Donor">Blood Donor</option>
                                    <option value="Orgon Donor">Orgon Donor</option>
                                </select>
                            </div>
                        </div>
                        <center>
                            <br></br>
                            <div onClick={this.handleSubmit}>
                            <Button 
                            text="Submit" 
                            url="/thankyou" 
                            class="submitbutton"
                            >
                            </Button>   
                            </div>
                            <br></br>
                        </center>    
                    </form>
                </div>
            </section>
            <br></br>
        </center>
      );
    }
  }

export default Reg;