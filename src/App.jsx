import React, { Component, Suspense, lazy } from 'react'
import { Switch } from 'react-router-dom'

//components
import routes from './routes'
import AppBar from './Components/AppBar'
import Container from './Components/Container/Container'
import PrivateRoute from './Components/PrivateRoute'
import PublicRoute from './Components/PublicRoute'

//material-ui
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

import { getCurrentUser } from './redux/auth/auth-operations'
import { connect } from 'react-redux'

const HomeView = lazy(() => import('./view/HomeView/HomeView.js' /*webpackChunkName: "home-view" */))
const RegisterView = lazy(() => import('./view/RegisterView/RegisterView.js' /*webpackChunkName: "register-view" */))
const LoginView = lazy(() => import('./view/LoginView/LoginView.js' /*webpackChunkName: "login-view" */))
const ContactsView = lazy(() => import('./view/ContactsView/ContactsView.js' /*webpackChunkName: "contacts-view" */))

const theme = createTheme({
  palette: {
    primary: blue,
  },
})

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser()
  }
  render() {
    return (
      <Container title="Phonebook">
        <ThemeProvider theme={theme}>
          <AppBar />
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <PublicRoute exact path={routes.home} component={HomeView} />
              <PublicRoute path={routes.register} restricted component={RegisterView} redirectTo={routes.contacts} />
              <PublicRoute path={routes.login} restricted component={LoginView} redirectTo={routes.contacts} />
              <PrivateRoute path={routes.contacts} component={ContactsView} redirectTo={routes.login} />
            </Switch>
          </Suspense>
        </ThemeProvider>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App)
