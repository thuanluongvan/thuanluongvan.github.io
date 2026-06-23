import van from 'vanjs-core'
import './nav.css'

const { nav, ul, li } = van.tags

const Nav = () =>
    nav(ul(
        li("About me"),
        li("Projects"),
        li("Say hello"),
    ))

export default Nav

