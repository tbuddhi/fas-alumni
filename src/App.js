import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Layout from './components/Layout';
import Landing from './components/Landing';
import Scholarships from './components/pages/Scholarships';
import AboutUs from './components/pages/AboutUs';
import OurEvents from './components/pages/OurEvents';
import ContactUs from './components/pages/ContactUs';
import RegisterForm from './components/RegisterForm';
import ScholarViewTable from './components/ScholarViewTable';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>

          <Route path="/" exact>
            <Landing />
          </Route>

          <Route path="/about-us">
            <AboutUs />
          </Route>

          <Route path="/our-events">
            <OurEvents />
          </Route>

          <Route path="/contact-us">
            <ContactUs />
          </Route>

          <Route path="/sholarships">
            <Scholarships />
          </Route>

          <Route path="/register">
            <RegisterForm />
          </Route>

          <Route path="/admin">
            <ScholarViewTable />
          </Route>

        </Switch>
      </Layout>     
    </Router>
  );
}

export default App;
