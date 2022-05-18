import { 
    SideNavContainer,
    ContentContainer,
    IconContainer,
    ListIcon,
    CloseIcon
} from './side-nav.styles.js';
import { useState } from 'react';

const SideNav = (props) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <SideNavContainer isOpen={isOpen}>
            <IconContainer onClick={toggleHandler}>{isOpen ? <CloseIcon /> : <ListIcon /> }</IconContainer>
            <ContentContainer>{props.children}</ContentContainer>
        </SideNavContainer>
    );
}

export default SideNav;