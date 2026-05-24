// Start img
import Kung_Fu from '../Poster/kids/kunfu.jpg';
import Thebad from '../Poster/kids/The bad.jpg';
import Doge from '../Poster/kids/DogMan.jpg';
import Ploy from '../Poster/kids/Ploy.jpg';
import Eip from '../Poster/kids/Epic-Tails-2022-16283.jpg';
import Night from '../Poster/kids/Night.jpg';
import Plank from '../Poster/kids/Plank.jpg';
import NOH from '../Poster/kids/Nosh.jpg';
import Moan from '../Poster/kids/Mona.jpg';
import Crism from '../Poster/kids/Crisms.jpg';
// End Img
import Headr from '../../components/Headr';
import Footr from '../../components/Footer';
import Kids from "./kids";
export default function Inf_Kid() {
    return (<>
        <Headr></Headr>
        <div className='fle_kid'>
            <Kids name="Kung Fu Panda Holiday 2010" tit="فيلم Kung Fu Panda Holiday 2010 مترجم حصري" post={Kung_Fu} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Kids>
            <Kids name="The Bad Guys 2 2025" tit="فيلم The Bad Guys 2 2025 مترجم حصري" post={Thebad} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Kids>
            <Kids name="Dog Man 2025" tit="فيلم Dog Man 2025 مترجم حصري" post={Doge} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Kids>
            <Kids name="Ploey 1 2018" tit="فيلم Ploey 1 2018 مترجم حصري" post={Ploy} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Kids>
            <Kids name="Night of the Zoopocalypse 2024" tit="فيلم Night of the Zoopocalypse 2024 مترجم حصري" post={Night} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Kids>
            <Kids name="Epic Tails 2022" tit="فيلم Epic Tails 2022 مترجم حصري" post={Eip} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Kids>
            <Kids name="Plankton 2025" tit="فيلم Plankton 2025 مترجم حصري" post={Plank} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Kids>
            <Kids name="Noah’s Ark 2024" tit="فيلم Noah’s Ark 2024 " post={NOH} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Kids>
            <Kids name=" Moana 2 2024" tit="فيلم Moana 2 2024 مترجم حصري" post={Moan} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Kids>
            <Kids name="The Nightmare Before Christmas 1993" tit="فيلم The Nightmare Before Christmas 1993 مترجم" post={Crism} lic={"https://www.youtube.com/watch?v=zMJRXt_9K1w"}></Kids>
        </div>
        <Footr></Footr>
    </>);
}