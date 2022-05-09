const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmael = state => state.auth.user.email;

const authSelectors = {
    getIsLoggedIn,
    getUserEmael,
}

export default authSelectors;