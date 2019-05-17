export default {
    name: 'v-content',
    functional: true,
    render(h, ctx) {        
        return (
            <div id="content-wrapper" class="d-flex flex-column">{ctx.slots().default}</div>
        )
    },
}
