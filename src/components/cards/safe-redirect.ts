const safeRedirectBase = (url: string, target: string) : void => {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.rel = 'noopener noreferrer';
    a.target = target;
    document.body.appendChild(a);
    a.click();
    document.body.appendChild(a);
}

export const safeRedirect = {
    // 在新标签页中打开
    inNewTab: (url: string) : void => safeRedirectBase(url, '_blank'),
    // 在本中打开
    inCurrentTab: (url: string) : void => safeRedirectBase(url, '_self')
}