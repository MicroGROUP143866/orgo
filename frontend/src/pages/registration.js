import React from 'react';
import Button from '../components/button';
import axios from 'axios';
import '../App';

const register = (req) => {
    return axios.post("http://localhost:5000/api/submit-query", {
        name: req.name,
        email: req.email,
        topic: req.topic,
        description: req.description,
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
            name: "",
            email: "",
            topic: "",
            description: "",
        };
    }
  
    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };
  
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handleTopicChange = (event) => {
        this.setState({ topic: event.target.value });
    };

    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
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
                        <center><h2>Contact Us</h2></center>
                        <form onSubmit={this.handleSubmit}>
                            <br></br>
                            <div class="innerBox">
                                <div>
                                    <label className="formlabel">Name</label>
                                    <br></br>
                                    <input
                                        className="forminput"
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.handleNameChange}
                                        placeholder="Enter your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="formlabel">Email</label>
                                    <br></br>
                                    <input
                                        className="forminput"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleEmailChange}
                                        placeholder="Enter your Email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="formlabel">Topic</label>
                                    <br></br>
                                    <input
                                        className="forminput"
                                        type="text"
                                        value={this.state.topic}
                                        onChange={this.handleTopicChange}
                                        placeholder="Enter the Topic"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="formlabel">Description</label>
                                    <br></br>
                                    <textarea
                                        className="forminput"
                                        value={this.state.description}
                                        onChange={this.handleDescriptionChange}
                                        placeholder="Enter your Description"
                                        required
                                    />
                                </div>
                            </div>
                            <center>
                                <br></br>
                                <div onClick={this.handleSubmit}>
                                    <Button 
                                        text="Submit" 
                                        url="/thankyou" 
                                        class="submitbutton"
                                    />   
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
