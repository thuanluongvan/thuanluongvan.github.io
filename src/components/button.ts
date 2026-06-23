import van from 'vanjs-core'
import './button.css'

const { button } = van.tags

type Props = {
    title: string,
    variant?: 'primary' | 'outline' | 'ghost',
    class?: string,
}
const Button = (props: Props) => {
    const _class = [props.class, props.variant ?? 'primary'].filter(Boolean).join(' ')

    return button({ class: _class }, props.title)
}

export default Button