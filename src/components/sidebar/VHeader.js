export default {
    name: 'v-header',
    functional: true,
    props: {
        label: {
            type: String,
            default: 'Label'
        }
    },
    render(h, ctx) {
        return (
            <div class="sidebar-heading">
                {ctx.props.label}
            </div>
        )
    },
}