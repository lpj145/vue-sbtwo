export default {
    name: 'v-sidebar',
    functional: true,
    render(h, ctx) {
        return (
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
                {ctx.slots().default}
            </ul>
        )
    },
}