import logo from "../assets/portfolio-logo.png";
import {FaLinkedinIn} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-16" src={logo} alt="nav-logo"/>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href={"https://linkedin.com/in/bahadır-öztekin-49b911216"}
                   target="_blank"
                   rel="noopener noreferrer">
                    <FaLinkedinIn/>
                </a>
                <a href={"https://github.com/bahadiroztekin"}
                   target="_blank"
                   rel="noopener noreferrer">
                    <FaGithub/>
                </a>
            </div>
        </nav>
    );
}