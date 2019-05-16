export default {
    name: 'v-card',
    functional: true,
    props: {
        bodied: Boolean
    },

    render(h, ctx) {
        const {props, slots} = ctx;
        return (
            <div class="card">
                {slots().header === undefined ? null : <div class="card-header">{slots().header}</div>}
                {props.bodied ? <div class="card-body">{slots().default}</div> : slots().default}
            </div>
        )
    },
}