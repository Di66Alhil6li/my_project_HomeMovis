// Start img
import one from '../Action/img/HIGHEST.jpg';
import Yading from '../Action/img/Yading.jpg';
import A_Line from '../Action/img/A_Line of Fire.jpg';
import Red from '../Action/img/Red Sonja.jpg';
import The_Walking from '../Action/img/The Walking.jpg';
import Cop from '../Action/img/Cop&Half.jpg';
import The_Land from '../Action/img/The Land That.jpg';
import Forgive from '../Action/img/Forgive Us All 2025.jpg';
import Bang from '../Action/img/Bang2025.jpg';
import OnTa from '../Action/img/OnThe.jpg';
// End img 
import './Style/Action.css';
import Headr from '../../components/Headr';
import Footr from '../../components/Footer';
import Acti from './Actin';



export default function Inf_Kid() {
    return (<>
        <Headr></Headr>
        <div className='fle_kid'>
            <Acti name="Highest 2 Lowest 2025" tit="مشاهدة فيلم Highest 2 Lowest 2025 مترجم حصرى" post="" lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Acti>
            <Acti name="Yadang: The Snitch 2025" tit="فيلم Yadang: The Snitch 2025 مترجم حصرى" post={Yading} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Acti>
            <Acti name="A Line of Fire 2025" tit="فيلم A Line of Fire 2025 مترجم حصرى" post={A_Line}></Acti>
            <Acti name="Red Sonja 2025" tit="فيلم Red Sonja 2025 مترجم حصرى" post={Red} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Acti>
            <Acti name="The Walking Dead: Daryl Dixon 2025" tit="فيلم The Walking Dead: Daryl Dixon 2025 مترجم حصرى" post={The_Walking} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Acti>
            <Acti name="Cop & a Half 2025" tit="فيلم Cop & a Half 2025 مترجم حصرى" post={Cop} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Acti>
            <Acti name="The Land That Time Forgot 2025" tit="فيلم The Land That Time Forgot 2025 مترجم حصرى" post={The_Land} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Acti>
            <Acti name="Forgive Us All 2025" tit="فيلم Forgive Us All 2025 مترجم حصرى " post={Forgive} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Acti>
            <Acti name="Bang 2025" tit=" فيلم Bang 2025 مترجم حصرى" post={Bang} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Acti>
            <Acti name="On the Run 2024" tit="فيلم On the Run 2024" post={OnTa} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Acti>
        </div>
        <Footr></Footr>
    </>);
}