import 'startbootstrap-sb-admin-2/scss/sb-admin-2.scss';

import VButton from './VButton';
import VContainer from './VContainer';
import VCol from './VCol';
import VRow from './VRow';
import VCard from './VCard';
import VContent from './VContent';
import VSidebar from './sidebar/VSidebar';
import VLogo from './sidebar/VLogo';

export default {
    render(h) {
        return (
            <div class="wrapper" style="display:flex;">
                <VSidebar>
                </VSidebar>
                <VContent>
                    <VContainer>
                        <VCol col="6">
                            <VCard>
                                Apois é isso!
                            </VCard>
                        </VCol>
                    </VContainer>
                </VContent>
            </div>
        )
    },
}
