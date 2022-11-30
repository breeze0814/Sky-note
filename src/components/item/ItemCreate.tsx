import { defineComponent, PropType, ref } from 'vue';
import { MainLayout } from '../../layout/MainLayout';
import { Icon } from '../../shared/Icon';
import { Tabs, Tab } from '../../shared/Tabs';
import s from './ItemCreate.module.scss';
export const ItemCreate = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup: (props, context) => {
        const refKind = ref('支出')
        return () => (
            <MainLayout>{{
                title: () => '记帐',
                icon: () => <Icon name="chart" class={s.navIcon} />,
                default: () => <>
                    <Tabs selected={refKind.value} onUpdateSelected = {name=>refKind.value = name}>
                        <Tab name='支出'>
                            icon 列表
                        </Tab>
                        <Tab name='收入'>
                            icon 列表2
                        </Tab>
                    </Tabs>
                </>
            }}</MainLayout>
        )
    }
})