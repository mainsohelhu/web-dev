import './navBar.css'
function NavBar() {
        return (
    <nav className="navbar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="../pages/about.jsx">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>  );

}
export default NavBar;