
import van from 'vanjs-core'
import './header.css'

const logo = `_|_|_     _  _   |    _  _  _ 
 | | ||_|(_|| |  ||_|(_)| |(_|
                            _|`

const { header, pre } = van.tags

const Header = () =>
    header(pre(logo))

export default Header