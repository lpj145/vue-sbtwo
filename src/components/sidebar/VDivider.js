export default {
    name: 'v-divider',
    functional: true,
    props: {
        mBottom: {
            type: Number,
            default: 0
        },
        mTop: {
            type: Number,
            default: 0
        }
    },
    render(h, ctx) {
        const {props} = ctx;
        const classe = `sidebar-divider mb-${props.mBottom} mt-${props.mTop}`;
        return (
            <hr class={classe}></hr>
        )
    },
}