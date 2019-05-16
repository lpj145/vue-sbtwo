import {renderDiv} from '../Prototypes/ElementPrototype';

export default {
    name: 'v-row',
    functional: true,

    render(h, ctx) {
        const {slots} = ctx;
        return renderDiv(h, 'row', slots().default)
    }
}