// Start img
import one from '../Poster/Anmie/Ooyuk.jpg';
import Tow from '../Poster/Anmie/Tow.jpg';
import Thr from '../Poster/Anmie/Thr.jpg';
import Four from '../Poster/Anmie/Fo.jpg';
import Fiv from '../Poster/Anmie/Fiv.jpg';
import Six from '../Poster/Anmie/six.jpg';
import Seven from '../Poster/Anmie/seven.jpg';
import Nine from '../Poster/Anmie/Nain.jpg';
import Ten from '../Poster/Anmie/Ten.jpg';
import OneE from '../Poster/Anmie/On11.jpg';

// End img 
import './Stayle/Anmie.css';
import Headr from '../../components/Headr';
import Footr from '../../components/Footer';
import Anmi from './Anmie';
export default function Inf_anme() {
    return (<>
        <Headr></Headr>
        <div className='fle_kid'>
            <Anmi name=" Hoshi no Kenja 2023" tit=" فيلم Ooyukiumi no Kaina: Hoshi no Kenja 2023 مترجم حصرى" post={one} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Anmi>
            <Anmi name=" Mugen Jou-hen 2025" tit="فيلم Kimetsu no Yaiba Movie: Mugen Jou-hen 2025 مترجم حصرى" post={Tow} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Anmi>
            <Anmi name="Kin no Kuni Mizu no Kuni 2023" tit="مشاهدة فيلم Kin no Kuni Mizu no Kuni 2023 مترجم حصرى" post={Thr} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Anmi>
            <Anmi name="Kaijuu 8-gou Movie 2025" tit="مشاهدة فيلم Kaijuu 8-gou Movie 2025 مترجم حصرى" post={Four} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Anmi>
            <Anmi name="Hoshina no Kyuujitsu 2025" tit=" فيلم Kaijuu 8-gou: Hoshina no Kyuujitsu 2025 مترجم حصرى" post={Fiv} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Anmi>
            <Anmi name=" The First Slam Dunk 2022" tit="مشاهدة فيلم The First Slam Dunk 2022 مترجم حصرى" post={Six} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Anmi>
            <Anmi name="Princess Principal: Crown Handler Movie 3" tit="Crown Handler Movie 3 – Cost for Custom Cars مترجمة حصرى " post={Seven} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Anmi>
            <Anmi name="Kuramerukagari 2024" tit=" فيلم Kuramerukagari 2024 مترجم حصرى" post={Nine} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Anmi>
            <Anmi name="Kurayukaba 2024" tit=" فيلم Kurayukaba 2024 مترجم حصرى" post={Ten} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Anmi>
            <Anmi name=" Hanma Baki vs. Kengan Ashura 2024" tit="Hanma Baki vs. Kengan Ashura 2024 مترجم حصرى" post={OneE} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Anmi>
        </div>
        <Footr></Footr>
    </>);
}