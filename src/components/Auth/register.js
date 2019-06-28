import React, { Component } from "react";
import InputTemplate from "../../utils/Form/inputTemplate";
import { Link } from "react-router-dom";
import { Modal, message } from "antd";
import "antd/dist/antd.css";
import {
  update,
  generateData,
  isFormValid
} from "../../utils/Form/validateForm";
class Register extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      name: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "First Name..."
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      lastname: {
        element: "input",
        value: "",
        config: {
          name: "lastname_input",
          type: "text",
          placeholder: "Last Name..."
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      confirmPassword: {
        element: "input",
        value: "",
        config: {
          name: "confirm_password_input",
          type: "password",
          placeholder: "Confirm your password"
        },
        validation: {
          required: true,
          confirm: "password"
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };
  updateForm = element => {
    const newFormdata = update(element, this.state.formdata, "register");

    this.setState({
      formError: false,
      formdata: newFormdata
    });
  };
  countDown = () => {
    let secondsToGo = 3;
    const modal = Modal.success({
      title: "SUCCESSFULLY !!",
      content: `You will be redirected to the LOGIN after ${secondsToGo} second!`
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `You will be redirected to the LOGIN after ${secondsToGo} second!`
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  };
  onSubmit = e => {
    e.preventDefault();
    let dataToSubmit = generateData(this.state.formdata, "register");
    console.log(dataToSubmit);
    let formIsValid = isFormValid(this.state.formdata, "register");
    if (formIsValid) {
      this.setState({
        formError: false
      });
    } else {
      this.setState({
        formError: true
      });
    }
  };
  render() {
    var { formdata } = this.state;
    return (
      <div>
        <div className="breadcrumbs">
          <div className="container">
            <ol
              className="breadcrumb breadcrumb1 animated wow slideInLeft"
              data-wow-delay=".5s"
            >
              <li>
                <a href="index.html">
                  <span
                    className="glyphicon glyphicon-home"
                    aria-hidden="true"
                  />
                  Home
                </a>
              </li>
              <li className="active">Register Page</li>
            </ol>
          </div>
        </div>

        <div className="register">
          <div className="container">
            <h3 className="animated wow zoomIn" data-wow-delay=".5s">
              Register Here
            </h3>

            <div className="login-form-grids">
              <h5 className="animated wow slideInUp" data-wow-delay=".5s">
                profile information
              </h5>
              <form
                className="animated wow slideInUp"
                data-wow-delay=".5s"
                onSubmit={this.onSubmit}
              >
                <InputTemplate
                  id={"name"}
                  formdata={formdata.name}
                  change={element => this.updateForm(element)}
                />
                <InputTemplate
                  id={"lastname"}
                  formdata={formdata.lastname}
                  change={element => this.updateForm(element)}
                />
                <h6 className="animated wow slideInUp" data-wow-delay=".5s">
                  Login information
                </h6>
                <InputTemplate
                  id={"email"}
                  formdata={formdata.email}
                  change={element => this.updateForm(element)}
                />
                <InputTemplate
                  id={"password"}
                  formdata={formdata.password}
                  change={element => this.updateForm(element)}
                />
                <InputTemplate
                  id={"confirmPassword"}
                  formdata={formdata.confirmPassword}
                  change={element => this.updateForm(element)}
                />
                {this.state.formError ? (
                  <div className="error_label">Please check your data</div>
                ) : null}
                <input onClick={this.onSubmit} type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
