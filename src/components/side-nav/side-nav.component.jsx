import { 
    SideNavContainer,
    ContentContainer,
    IconContainer,
    ListIcon,
    CloseIcon
} from './side-nav.styles.js';
import { useState, useEffect } from 'react';

const SideNav = (props) => {
    const { shouldOpen, toggled } = props;
    const [isOpen, setIsOpen] = useState(shouldOpen);

    useEffect(() => {
        toggled(isOpen);
    }, [isOpen]);

    const toggleHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <ListIcon onClick={toggleHandler} />
            <SideNavContainer isOpen={isOpen}>
                <IconContainer onClick={toggleHandler}><CloseIcon /></IconContainer>
                <ContentContainer>{props.children}</ContentContainer>
            </SideNavContainer>
        </>
    );
}

export default SideNav;