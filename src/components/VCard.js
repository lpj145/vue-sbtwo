export default {
    name: 'v-card',
    functional: true,

    render(h, ctx) {
        const {props, slots} = ctx;
        return (
            <div class="card">
                <slot name="header"></slot>
                <slot></slot>
                <slot name="footer"></slot>
            </div>
        )
    },
}