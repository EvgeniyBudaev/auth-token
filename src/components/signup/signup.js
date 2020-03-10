import React, { Component } from "react";
import classes from "./signup.module.css";
import { Link } from "react-router-dom";
import { URL } from "../routes/urls";
import Input from "../ui/input";
import { connect } from "react-redux";
import { auth } from "../../actions/auth";

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class SignUp extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        name: "email",
        placeholder: "Email",
        errorMessage: "Введите корректный email!",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: "",
        type: "password",
        label: "Пароль",
        name: "password",
        placeholder: "Пароль",
        errorMessage: "Неверный пароль!",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  };

  registerHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      false
    );
  };

  onSubmitHandler = event => {
    event.preventDefault();
  };

  validateControl = (value, validation) => {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (validation.email) {
      isValid = validateEmail(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  };

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);
    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({
      formControls,
      isFormValid
    });
  };

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          name={control.name}
          placeholder={control.placeholder}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      );
    });
  };

  render() {
    return (
      <div className={classes.Signup}>
        <form onSubmit={this.onSubmitHandler}>
          <div className={classes.Signup__inner}>
            <div className={classes.Signup__title}>
              <h2>Регистрация</h2>
            </div>
            <div className={classes.Signup__content}>
              <div className={classes.Signup__inputs}>
                {this.renderInputs()}
              </div>
              <div className={classes.Signup__btn}>
                <Link to={URL.HOME} className={classes.link}>
                  <input
                    type="primary"
                    value="Зарегистрироваться"
                    onClick={this.registerHandler}
                    disabled={!this.state.isFormValid}
                  ></input>
                </Link>
              </div>
            </div>
            <div className={classes.Signup__footer}>
              Уже есть аккаунт?
              <Link to={URL.LOGIN} className={classes.link}>
                &nbsp;Войти
              </Link>
              <div className={classes.Signup__footer_goToHome}>
                <Link to={URL.HOME} className={classes.link}>
                  Вернуться на главную страницу
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
