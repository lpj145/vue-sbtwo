export default {
    name: 'v-navitem',
    functional: true,
    props: {
        label: {
            type: String,
            default: 'Menu'
        },
        to: {
            type: String,
            default: '#'
        },
        icon: {
            default: 'far fa-question-circle'
        }
    },
    render(h, ctx) {
        const {props} = ctx;

        return (
            <li class="nav-item">
                <a class="nav-link" href={props.to}>
                    {props.icon !== false ? <i class={props.icon}></i> : ''}
                    <span>{props.label}</span>
                </a>
            </li>
        )
    },
}