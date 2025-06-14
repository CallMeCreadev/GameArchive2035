window.initializeNavigation = function () {
    let initialState = { page: 'home' };
    history.replaceState(initialState, '', '/');

    window.addEventListener('popstate', (event) => {
        if (!event.state || event.state.page === 'home') {
            // Automatically reset to login state
            DotNet.invokeMethodAsync('Archive2035', 'ResetToLoginState');
            history.replaceState(initialState, '', '/'); // Ensure forward navigation leads to login
        }
    });

    // Function to manually reset state from Blazor
    window.resetNavigationToHome = function () {
        history.replaceState(initialState, '', '/');
    };
};
