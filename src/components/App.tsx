import React from 'react';
import { User } from '../model/Model'
import { AuthService } from '../services/AuthService'
import { Login } from './Login'
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom'
import history from '../utils/history'
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Profile } from './Profile';
import {Spaces} from './spaces/Spaces'
import { DataService } from '../services/DataService';


interface AppState {
  user: User | undefined
}

export class App extends React.Component<{}, AppState> {

  private authService: AuthService = new AuthService()
  private dataService: DataService = new DataService()

  constructor(props: any) {
    super(props)
    this.state = {
      user: undefined
    }
    this.setUser = this.setUser.bind(this)
  }

  private setUser(user: User) {
    this.setState({
      user: user
    })
   
    console.log('Setting the user: ', user)
  }

  render() {
    return (
      <div className='wrapper'>
        <HistoryRouter history={history} >
          <div>
            <Navbar user={this.state.user} />
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login authService={this.authService} setUser={this.setUser}/>}/>
              <Route path='/profile' element={<Profile authService={this.authService} user={this.state.user}/>}/>
              <Route path='/spaces' element={<Spaces dataService={this.dataService}/>}/>
            </Routes>
          </div>
        </HistoryRouter>
      </div>
     );
  }
}

export default App;
