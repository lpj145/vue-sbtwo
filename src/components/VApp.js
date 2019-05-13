import 'startbootstrap-sb-admin-2/scss/sb-admin-2.scss';

import VButton from './VButton';
import VContainer from './VContainer';
import VCol from './VCol';
import VRow from './VRow';
import VCard from './VCard';

export default {
    render(h) {
        return (
            <div class="wrapper">
                <VContainer fluid>
                    <VRow>
                        <VCol col="sm-4">Amigo, voce é de boa!</VCol>
                        <VCol>
                            <VCard>
                                Apois isso é um card!
                            </VCard>
                        </VCol>
                    </VRow>
                </VContainer>
            </div>
        )
    },
}