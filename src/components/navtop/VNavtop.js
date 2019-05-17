import VSearch from './VSearch';

export default {
    name: 'v-navtop',
    functional: true,

    render(h, ctx) {
        return (
            <div class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <VSearch></VSearch>
            </div>
        )
    },
}
