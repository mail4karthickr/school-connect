export const getSelectedTab = (state) => { return state.student.selectedTab; };

export const getClassName = (state) => {
    return state.user.currentUser.info.class
}