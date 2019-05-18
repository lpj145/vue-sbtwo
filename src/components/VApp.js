
import VButton from './VButton';
import VContainer from './VContainer';
import VCol from './VCol';
import VRow from './VRow';
import VCard from './VCard';
import VContent from './VContent';
import VSidebar from './sidebar/VSidebar';
import VNavtop from './navtop/VNavtop';
import VLogo from './sidebar/VLogo';
import VSearch from './navtop/VSearch';
import VUsernav from './navtop/VUsernav';

export default {
    render(h) {
        return (
            <div id="wrapper">
                <VSidebar>
                    <VLogo icon="fas fa-laugh-wink" label="SB ADMIN"></VLogo>
                </VSidebar>
                <VContent>
                    <VNavtop>
                        <VSearch></VSearch>
                        <VUsernav></VUsernav>
                    </VNavtop>
                    <VContainer fluid>
                        <VCol col="12">
                            <VCard bodied>
                                <template slot="header">Teste de card!</template>
                                Apois é isso!
                            </VCard>
                        </VCol>
                    </VContainer>
                </VContent>
            </div>
        )
    },
}
