const showSite = () =>{
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('site')){
        const site = urlParams.has('site') ? urlParams.get('site') : '';

        const isBlocWebsite = site.includes('bloc');
    
        document.getElementById("blocSection").style.display = isBlocWebsite ? "block" : "none";
        document.getElementById("thinkfulSection").style.display = !isBlocWebsite ? "block" : "none";
    }

}

showSite();