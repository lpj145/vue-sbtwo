export default {
    name: 'v-logo',
    functional: true,
    props: {
        icon: {
            type: String,
            default: null
        },
        label: String
    },

    render(h, ctx) {
        const {props} = ctx;
        return (
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                {props.icon ? <div class="sidebar-brand-icon rotate-n-15"><i class={props.icon}></i></div> : null}
                <div class="sidebar-brand-text mx-3">{props.label}</div>
            </a>
        )
    },
}