import van from 'vanjs-core'
import './content.css'
import Button from './button'

const { div, section, h2, p, ul, li } = van.tags

const Content = () => {
    return section(
        h2("About me"),
        p("Hi, I'm Thuan. I'm a Fullstack Developer who admires simplicity. My experience includes:"),
        ul(
            li('Wordpress PHP'),
            li('ReactJS, VueJS'),
            li('Java Spring Framework'),
            li('Microservices'),
        ),
        p('and some other things on my pet projects :)'),
        div(
            { class: 'button-container' },
            div(
                Button({ title: "See Projects" }),
                Button({ title: "Say Hello!", variant: 'outline' }),
            ),
            Button({ title: "My CV", variant: 'ghost' }),
        )
    )
}

export default Content