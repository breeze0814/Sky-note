import { defineComponent } from 'vue';
import style from "./First.module.scss";
import savepig from "../../assets/icons/chart.svg";
import { RouterLink } from 'vue-router';

export const Second = defineComponent({
    setup: (props, context) => {
        return () => <>
            <div class={style.wrapper}>
                <div class={style.card}>
                    <img src={savepig} />
                    <h2>每日提醒<br/>记录每一笔消费</h2>
                </div>
                <div class={style.action}>
                    <RouterLink class={style.ffff} to="/start">跳过</RouterLink>
                    <RouterLink to="/Welcome/3">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                    </div>
            </div>
        </>

    }
})