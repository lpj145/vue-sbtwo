import {renderDiv} from './Prototypes/ElementPrototype';

export default {
    name: 'v-container',
    functional: true,
    props: {
        fluid: Boolean
    },
    render(h, ctx) {
        const {props, slots} = ctx;
        const classContainer = props.fluid ? 'container-fluid' : 'container'
        return renderDiv(h, classContainer, slots().default);
    },
}