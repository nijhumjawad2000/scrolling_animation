window.onscroll = function (e){
    console.log(this.document.body.scrollTop);
    let div = document.getElementById("crazy_boy");
 
    if (this.document.body.scrollTop < 50 ||
         document.documentElement.scrollTop < 50){
        div.style.backgroundPosition = '0px 0px';
        div.style.top = '-80px';
    }
    if (this.document.body.scrollTop >= 50 ||
         document.documentElement.scrollTop >= 50){
        div.style.backgroundPosition = '0px 0px';
        div.style.top = '0%';
    }
    if (this.document.body.scrollTop >= 1000 ||
         document.documentElement.scrollTop >= 1000){
        div.style.backgroundPosition = '-155px 0';
        div.style.top = '50%';
    }
    if (this.document.body.scrollTop >= 1300 ||
         document.documentElement.scrollTop >= 1300){
        div.style.backgroundPosition = '-310px 0';
        div.style.top = '50%';
    }
    // if (this.document.body.scrollTop >= 1600 ||
    //      document.documentElement.scrollTop >= 1600){
    //     div.style.backgroundPosition = '-465px 0';
    //     div.style.top = '50%';
    // }
    if (this.document.body.scrollTop >= 1900 ||
         document.documentElement.scrollTop >= 1900){
        div.style.backgroundPosition = '-310px 0';
        div.style.top = '50%';
    }
    if (this.document.body.scrollTop >= 2200 ||
         document.documentElement.scrollTop >= 2200){
        div.style.backgroundPosition = '-155px 0';
        div.style.top = '50%';
    }
    if (this.document.body.scrollTop >= 2500 ||
         document.documentElement.scrollTop >= 2500){
        div.style.backgroundPosition = '-465px 0';
        div.style.top = '80%';
    }
}