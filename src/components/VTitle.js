export default {
    name: 'v-title',
    functional: true,
    props: {
        level: {            
            default: 1
        }
    },
    render(h, ctx) {
        const {props} = ctx;
        return h(`h${props.level}`, {attrs:{class: 'h3 mb-0 text-gray-800'}}, [ctx.slots().default])
    },
}