import 'startbootstrap-sb-admin-2/scss/sb-admin-2.scss';

import VButton from './VButton';

export default {
    render(h) {
        return (
            <div class="wrapper">
                <VButton theme="primary" splited split-icon="fas fa-circle">
                    Botao Grande
                </VButton>
            </div>
        )
    },
}