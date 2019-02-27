import React from 'react';
import LoginClient from './LoginClient';
import { connect} from 'react-redux';
import { loginSuccess } from '../redux/actions/loginActions';

class LoginPage extends React.Component {
  DEFAULT_NEXT_ROUTE = '/projects'
  state = {
      email: 'admin@minijira.com',
      password: 'password'
  }
  onChange = (value, type) => {
    this.setState({
      [type]: value
    });
  } 

  onSubmit = () => {
    const { email, password} = this.state;
    const { location } = this.props;
    LoginClient.login({
      email, password
    }).then((res) => {
      console.log(res);
      this.props.loginSuccess(res);
      if (location && location.state && location.state.from && location.state.from.pathname){
        this.props.history.push(location.state.from.pathname);
      } else {
        this.props.history.push(this.DEFAULT_NEXT_ROUTE);
      }
    }).catch(() => alert("login failed"))
  }
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login Page</h1>
        <label>email</label>
        <input onChange={(e) => this.onChange(e.target.value, 'email')} value={email} />
        <label>pwd</label>
        <input type="password" onChange={(e) => this.onChange(e.target.value, 'password')} value={password} />
        <button onClick={this.onSubmit} >Login</button>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginSuccess: (data) => dispatch(loginSuccess(data))
})

export default connect(null, mapDispatchToProps)(LoginPage);