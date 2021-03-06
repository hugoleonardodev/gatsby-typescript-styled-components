import React from 'react'

const SideNav: React.FC = () => {
    return (
        <ul className="sidenav" id="mobile-demo">
            <li>
                <a href="sass.html">Sass</a>
            </li>
            <li>
                <a href="badges.html">Components</a>
            </li>
            <li>
                <a href="collapsible.html">Javascript</a>
            </li>
            <li>
                <a href="mobile.html">Mobile</a>
            </li>
        </ul>
    )
}

export default SideNav
