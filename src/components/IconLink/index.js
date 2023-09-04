import instagram from '../../assets/svg/instagram.svg';
import youtube from '../../assets/svg/youtube.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import { IconLinkContainer } from '../../styles/global';

export default function IconLink({ icon, path }) {
    var selectedImg = instagram;

    if(icon === 'youtube') {
        selectedImg = youtube;
    }
    else if(icon === 'linkedin') {
        selectedImg = linkedin;
    }

    return (
        <IconLinkContainer to={path}>
            <img src={selectedImg} alt="icon"/>
        </IconLinkContainer>
    )
}