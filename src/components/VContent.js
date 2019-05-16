import {renderDiv} from '../Prototypes/ElementPrototype';

export default {
    name: 'v-content',
    functional: true,
    render(h, ctx) {        
        return renderDiv(h, 'd-flex flex-column', ctx.slots().default)
    },
}
