const toggleScrollTopAndChangeNav = () => {
    const togglescrolltop = document.getElementById("scrollTop");
    const nav = document.querySelector('nav');
    const root = document.querySelector(':root');
    const rs = getComputedStyle(root);
    const hider = document.querySelector('.hider');
    if (window.scrollY > 30) {
        togglescrolltop.style.display = 'block';
        updateNavColor();
        // changeNavBarColor(rs.getPropertyValue('--nav-color'));
    }
    else {
        togglescrolltop.style.display = 'none';
        nav.style.backgroundColor = '';
        hider.style.backgroundColor = '';
        changeNavBarColor('');
    }
}
//
const updateNavColor = () => {
    const nav = document.querySelector('nav');
    const root = document.querySelector(':root');
    const hider = document.querySelector('.hider');
    const rs = getComputedStyle(root);
    if (window.pageYOffset > 30) {
        nav.style.backgroundColor = rs.getPropertyValue('--nav-color');
        hider.style.backgroundColor = rs.getPropertyValue('--hider-color');
        // 
    }
}
//To change the ScrollTop button and Change navigation bar Background according theme - End


//To indicate active section in navigation bar
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('.navitems a');
let currsection = 'home';
navlinks[0].classList.add("active");
// window.addEventListener('scroll', (e) => {
//     toggleScrollTopAndChangeNav();
//     sections.forEach(section => {
//         if (window.scrollY >= (section.offsetTop - 500)) {
//             currsection = section.id;
//         }
//     });
//     navlinks.forEach(link => {
//         if (link.href.includes(currsection)) {
//             document.querySelector('.active').classList.remove("active");
//             link.classList.add("active");
//         }
//     });
// })
let media560 = window.matchMedia("(max-width: 560px)");
window.addEventListener('scroll', (e) => {
    toggleScrollTopAndChangeNav();
    sections.forEach(section => {
        // console.log(section);
        // let x = window.matchMedia("(max-width: 560px)");
        // if (x.mmat && window.scrollY >= (section.offsetTop)) {
        //     currsection = section.id;
        // }
        // else {
            if (window.scrollY >= (section.offsetTop - 300)) {
                currsection = section.id;
            }
        // }
    });
    navlinks.forEach(link => {
        // console.log(link.href);
        if (link.href.includes(currsection)) {
            document.querySelector('.active').classList.remove("active");
            link.classList.add("active");
        }
    });
})

const toggletheme = () => {
    const root = document.querySelector(':root');
    const rs = getComputedStyle(root);
    const sun = document.getElementsByClassName("sun")[0];
    const moon = document.getElementsByClassName("moon")[0];
    const toggleinput = document.getElementById("toggle");
    // console.log(toggleinput.checked);
    if (toggleinput.checked) {
        root.style.setProperty('--text-color', 'rgb(251, 247, 247)');
        root.style.setProperty('--background-color', 'rgba(0,0,0,0.8)');
        root.style.setProperty('--nav-color', 'rgba(0,0,0,0.2)');
        root.style.setProperty('--hider-color', 'rgb(51 51 51)');
        root.style.setProperty('--heading-color', '#ffba19');
        updateNavColor();
        console.log(media560.matches);
        if (window.scrollY > 30 && media560.matches) {
            changeNavBarColor(rs.getPropertyValue('--nav-color'));
            console.log('line 239');
        }
        if (window.scrollY > 30 && !media560.matches) {
            changeNavBarColor(rs.getPropertyValue(''));
            console.log('line 245');
        }
        console.log(242);
        moon.style.display = 'block';
        sun.style.display = '';
    }
    else {
        root.style.setProperty('--text-color', 'black');
        root.style.setProperty('--background-color', 'rgba(229, 229, 229,0.5)');
        root.style.setProperty('--nav-color', 'rgba(229, 229, 229,0.8)');
        root.style.setProperty('--hider-color', 'white');
        root.style.setProperty('--heading-color', 'purple');
        updateNavColor();
        // changeNavBarColor('rgba(229, 229, 229,0.8)');
        if (window.scrollY > 30 && media560.matches) {
            changeNavBarColor(rs.getPropertyValue('--nav-color'));
            console.log('line 253');
        }
        if (window.scrollY > 30 && !media560.matches) {
            changeNavBarColor(rs.getPropertyValue(''));
            console.log('line 245');
        }
        sun.style.display = 'block';
        moon.style.display = '';
    }
}
const changeNavBarColor = (color) => {
    let navbar = document.querySelector('.navbar');
    navbar.style.backgroundColor = color;
}

let header = document.querySelector('header');
let hider = document.querySelector('.hider');
let nav = document.querySelector('nav');
let navbar = document.querySelector('.navbar');
let defaultheaderHeight = header.clientHeight;
let defaulthiderHeight = hider.clientHeight;
let defaultnavHeight = nav.clientHeight;
let defaultnavbarHeight = navbar.clientHeight;
console.log(defaultheaderHeight+" "+defaulthiderHeight+" "+defaultnavHeight+" "+defaultnavbarHeight);
hitflag=true;

media560fire(media560);
window.addEventListener('resize', () => {
        media560fire(media560);
})

function media560fire(media560) {
    console.log(hitflag);
    if (media560.matches && hitflag) {
        console.log('media hit');
        header.style.height = (header.clientHeight + nav.getBoundingClientRect().bottom - 6).toString() + 'px';
        console.log(header.clientHeight.toString() + 'px');
        hider.style.height = (header.clientHeight.toString() - 2) + 'px';

        navbar.style.height = (hider.clientHeight - nav.clientHeight).toString() + 'px';
        window.addEventListener('scroll', () => {
            const root = document.querySelector(':root');
            const rs = getComputedStyle(root);
            if (window.scrollY > 30 &&!media560.matches) {
                changeNavBarColor('');
                console.log('line 310');
            }
            else if (window.scrollY > 30) {
                changeNavBarColor(rs.getPropertyValue('--nav-color'));
                console.log('line 306');
            }
            else {
                changeNavBarColor('');
            }
        })
        hitflag=false;
    }
    if(!media560.matches) {
        console.log('change to default');
        header.style.height = defaultheaderHeight.toString()+'px';
        hider.style.height = defaulthiderHeight.toString()+'px';
        navbar.style.height = '';
        nav.style.height=defaultnavHeight.toString()+'px';
        if(window.scrollY > 30){
            changeNavBarColor('');
            console.log('line 310');
        }
        console.log(defaultheaderHeight+" "+defaulthiderHeight+" "+defaultnavHeight+" "+defaultnavbarHeight);
        hitflag=true;
        
    }
    // reloadpage();
}
const goToResume=()=>{
    location.href="resume.html"
}
