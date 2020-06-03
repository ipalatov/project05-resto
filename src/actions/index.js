const menuLoaded = (newMenu) => ({ type: 'MENU_LOADED', payload: newMenu });
const menuRequested = () => ({ type: 'MENU_REQUESTED' })
const menuRequestError = () => ({ type: 'MENU_REQUEST_ERROR' })



export {
    menuLoaded,
    menuRequested,
    menuRequestError
};