import {renderDiv} from '../Prototypes/ElementPrototype';

export default {
    name: 'v-col',
    functional: true,

    props: {
        col: {
            type: String,
            default: 'col'
        }
    },

    render(h, ctx) {
        const {props, slots} = ctx;
        const className = props.col === 'col' ? 'col' : `col-${props.col}`;
        return renderDiv(h, className, slots().default);
    },
}