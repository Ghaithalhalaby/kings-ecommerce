import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/header/header.componant'
import HomePage from './pages/homepage/homepage.componant';
import Shop from './components/shop/shop.componant'
import SignInOut from './pages/sign-in-out/sign-in-out'
import { auth, creatUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          });
         });
         
      } else {
        this.setState( { currentUser: userAuth } )
      }
    } )
  
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignInOut} />
      </Switch>
      </div>
    );
  }

}
export default App;
