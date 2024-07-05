window.onload = () => {
   let bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
   bannerNode.parentNode.removeChild(bannerNode);
	const elements = document.getElementsByClassName('.disclaimer');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
