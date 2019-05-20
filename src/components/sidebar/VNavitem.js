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
        },
        grouped: Boolean
    },
    render(h, ctx) {
        const {props} = ctx;
        const classes = {
            'nav-link': true,
            'collapsed': !props.grouped
        };

        return (
            <li class="nav-item">
                <a {...{class:classes}} href={props.to}>
                    {props.icon !== false ? <i class={props.icon}></i> : ''}
                    <span>{props.label}</span>
                </a>
            </li>
        )
    },
}