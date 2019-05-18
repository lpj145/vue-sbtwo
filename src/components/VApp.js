
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
import VNavitem from './sidebar/VNavitem';
import VDivider from './sidebar/VDivider';
import VHeader from './sidebar/VHeader';

export default {
    render(h) {
        return (
            <div id="wrapper">
                <VSidebar>
                    <VLogo icon="fas fa-laugh-wink" label="SB ADMIN"></VLogo>
                    <VDivider></VDivider>
                    <VNavitem label="Painel" icon="fas fa-fw fa-chart-line"></VNavitem>
                    <VDivider m-bottom={3}></VDivider>
                    <VHeader label="Interface"></VHeader>
                    <VNavitem label="Components" icon="fas fa-fw fa-cog"></VNavitem>
                    <VNavitem label="Utilities" icon="fas fa-fw fa-wrench"></VNavitem>
                    <VDivider m-bottom={3}></VDivider>
                    <VHeader label="Addons"></VHeader>
                    <VNavitem label="Pages" icon="fas fa-fw fa-folder"></VNavitem>
                    <VNavitem label="Charts" icon="fas fa-fw fa-chart-area"></VNavitem>
                    <VNavitem label="Tables" icon="fas fa-fw fa-table"></VNavitem>
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
