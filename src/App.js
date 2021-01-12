import "./css/App.css";
import { BrowserRouter, Route } from "react-router-dom";

import { NavBar } from "./components/navbar/NavBar";
import { About } from "./components/about/About";
import { Admin } from "./components/admin/Admin";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { Contact } from "./components/contact/Contact";
import { Home } from "./components/home/Home";
import { Stories } from "./components/storiespage/Stories";
import Story from "./components/storiespage/Story";
import Signup from "./components/admin/Signup";
import News from "./components/news/News"
import Search from "./components/search/Search"
import { Footer } from "./components/footer/footer";
import { ContributingWriter } from './components/contact/ContributingWriter';
import StoryForm from './components/contact/StoryForm';
import MailchimpForm from './components/contact/MailchimpForm'

function App() {
    return (
        <div className="App">
            {/* <div className="sharethis-inline-share-buttons">HERE</div> */}
            <BrowserRouter>
                <div className="navbar">
                    <NavBar />
                </div>
                <Route exact path="/" component={Home} />
                <Route exact path="/stories" component={Stories} />
                <Route exact path="/stories/:id" component={Story} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact-us" component={Contact} />
                <Route exact path="/news" component={News} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/signup-private" component={Signup} />
                <Route exact path="/admin-dashboard" component={AdminDashboard} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/contributing-writer" component={ContributingWriter} />
                <Route exact path="/story-form" component={StoryForm} />
                <Route exact path="/mailchimp-form" component={MailchimpForm} />
            </BrowserRouter>

            <div className="ftrr">
                <Footer />
            </div>

        </div>
    );
}

export default App;
