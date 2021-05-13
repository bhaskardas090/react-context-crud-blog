import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AddBlog from './Pages/AddBlog/AddBlog';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
// ! PRIME REACT COMPONENT
import MobileMenu from './Components/Navbar/MobileMenu';
import Navbar from './Components/Navbar/Navbar';
import BlogById from './Pages/BlogById/BlogById';
import EditBlog from './Pages/EditBlog/EditBlog';
import { ABOUT, ADD_BLOG, CONTACT, EDIT_BLOG, HOME } from './_utility/menuItem';

function App() {
  return (
    <div className="App">
      <MobileMenu />
      <Navbar />
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route path={ADD_BLOG} component={AddBlog} />
        <Route path={ABOUT} component={About} />
        <Route path={CONTACT} component={Contact} />
        <Route path="/blog/:id" component={BlogById} />
        <Route path={EDIT_BLOG} component={EditBlog} />
      </Switch>
    </div>
  );
}

export default App;
