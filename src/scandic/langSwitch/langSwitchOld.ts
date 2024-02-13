//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
//THIS IS AN OLD VERSION OF LANG SWITCHER - DO NOT USE IT ON MAIN WEBSITE//
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//

//Website lang switch
//Get current page language from navbar attribute
const currentLang = document.getElementById("nav").getAttribute("lang");
const pageType = document.body.getAttribute("page-type");

//Get domain name
var currentUrl = window.location.href;

//var currentUrl = "https://scandic-fusion-new.webflow.io/solutions/insurance";
let domain = new URL(currentUrl);
domain = domain.hostname;
//console.log(domain);

//Get buttons in nav dropdown
let langLinks = document.getElementsByClassName("lang-link active");
for (let i = 0; i < langLinks.length; i++) {
  console.log(langLinks[i].id)
  langLinks[i].addEventListener(
    "click",
    function () { changeLanguage(currentLang, langLinks[i].getAttribute("lang-selector")) }
  );
}


function changeLanguage(currentLang, targetLang) {
  var newUrl = "";

  //Replace string for static page
  if (currentLang === "en") {
    newUrl = currentUrl.replace(`${domain}/`, `${domain}/${targetLang}/`);
  } else {
    if (targetLang === "en") {
      newUrl = currentUrl.replace(`${domain}/${currentLang}/`, `${domain}/`);
    } else {
      newUrl = currentUrl.replace(`/${currentLang}/`, `/${targetLang}/`);
    }
  }
  //Replace additional string for CMS page
  if (pageType === "dynamic") {
    //Search for last "/"
    let indices = [];
    for (let i = 0; i < newUrl.length; i++) {
      if (newUrl[i] === "/") indices.push(i);
    }
    if (currentLang === "en") {
      newUrl =
        newUrl.slice(0, indices[indices.length - 1]) +
        "-" +
        targetLang +
        newUrl.slice(indices[indices.length - 1]);
    } else {
      if (targetLang === "en") {
        newUrl = newUrl.replace(`-${currentLang}/`, "/");
      } else {
        newUrl = newUrl.replace(`-${currentLang}/`, `-${targetLang}/`);
      }
    }
  }


  window.location.href = newUrl;
}


