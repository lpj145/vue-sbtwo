export default {
    name: 'v-navtop',
    functional: true,
    props: {
        noShadow: Boolean
    },

    render(h, ctx) {
        const {props, slots} = ctx;

        const classes = {
            'navbar': true,
            'navbar-expand': true,
            'navbar-light': true,
            'bg-white': true,
            'topbar': true,
            'mb-4': true,
            'static-top': true,
            'shadow': props.noShadow ? false : true
        };


        return (
            <div {...{class: classes}}>
                {slots().default}
            </div>
        )
    },
}
