import van from "vanjs-core"
import './styles/common.css'
import Header from "./components/header"
import Nav from "./components/nav"
import Content from "./components/content"

const { div } = van.tags

const Main = () => div(
    Header,
    Nav,
    Content
)

van.add(document.body, Main())
