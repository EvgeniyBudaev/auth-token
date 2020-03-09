import React, { Component } from 'react';
import classes from './signup.module.css';
import { Link } from "react-router-dom";
import { URL } from '../routes/urls';
import Input from '../ui/input';

class SignUp extends Component {

  state = {
    formControls: {
      email: {},
      password: {}
    }
  }

  registerHandler = () => { };

  onSubmitHandler = (event) => {
    event.preventDefault()
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
                <Input label="Email" placeholder="Email" />
                <Input label="Пароль" placeholder="Пароль" errorMessage="tedt" />
              </div>
              <div className={classes.Signup__btn}>
                <Link to={URL.HOME} className={classes.link}>
                  <button
                    type="primary"
                    value="Зарегистрироваться"
                    onClick={this.registerHandler}
                    disabled={!this.state.isFormValid}
                  >Зарегистрироваться</button>
                </Link>
              </div>
            </div>
            <div className={classes.Signup__footer}>
              Уже есть аккаунт?<Link to={URL.LOGIN} className={classes.link}>&nbsp;Войти</Link>
              <div className={classes.Signup__footer_goToHome}><Link to={URL.HOME} className={classes.link}>Вернуться на главную страницу</Link></div>
            </div>
          </div>
        </form>
      </div>
    )
  };
};

export default SignUp;
