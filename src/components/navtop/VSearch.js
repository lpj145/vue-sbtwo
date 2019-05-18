export default {
    name: 'v-search',
    functional: true,
    props: {
        placeholder: {
            type: String,
            default: 'Search for...'
        }
    },
    render(h, ctx) {
        const {props} = ctx;
        return (
            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                    <input class="form-control bg-light border-0 small" placeholder={props.placeholder} type="text" aria-label="Search" aria-describedby="basic-addon2" />
                    <div class="input-group-appended">
                        <button class="btn btn-primary" type="button">
                            <i class="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
        )
    },
}
