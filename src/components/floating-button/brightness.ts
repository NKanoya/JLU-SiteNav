const html = document.documentElement;

export const toggleTheme = () : void => {
    html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
};