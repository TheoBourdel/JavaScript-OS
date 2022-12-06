
//ELements
const apps = document.querySelector("#br-os-apps")
var menu = document.querySelector("#os-ct-menu")
const os_window = document.querySelector(".br-os-window")
const brand_window = document.querySelector(".brand")
const app_main = document.querySelector ("#app-main")
const maximise = document.querySelector("#maximise")
const shorter = document.querySelector("#shorter")
const cross = document.querySelector("#cross")
const taskbar = document.querySelector ("#taskbar")

/* Sound effects */
const click = new Audio("assets/music/click.wav")
const con = new Audio("assets/music/alert.wav")
const okay = new Audio("assets/music/positive.wav")
const no = new Audio("assets/music/negative.wav")


/* Reseting window */
close(os_window)

const allApps = [
    {
        id:"file-manager",
        name:"File manager",
        directoryLink:"",
        image:"assets/images/apps/file-manager.png",
        htmlCompnent: ''
    },
    {
        id:"recycle-bin",
        name:"Recycle bin",
        directoryLink:"",
        image:"assets/images/apps/recycle-bin.png",
        htmlCompnent: ''
    },
    {
        id:"settings",
        name:"Settings",
        directoryLink:"",
        image:"assets/images/apps/settings.png",
        htmlCompnent: ''
    },
    {
        id:"system-info",
        name:"System Info",
        directoryLink:"",
        image:"assets/images/apps/system-information.png",
        htmlCompnent: ''
    },
    {
        id:"tic_tac_toe",
        name:"Tic Tac Toc",
        directoryLink:"apps/Tic/",
        image:"assets/images/apps/tic.png",
    },
    {
        id:"clock",
        name:"Clock",
        directoryLink:"apps/Horloge/",
        image:"assets/images/apps/clock.png",
    },
    {
        id:"calculator",
        name:"Calculatrice",
        directoryLink:"apps/Calculatrice/",
        image:"assets/images/apps/calculator.png",
    },
]

/* Creating apps */
allApps.map((app) => {
    create_app(app)
})

//Functions
function create_app (CurrentApp) {
    const app = document.createElement("div")
    app.classList.add("app")
    app.id = CurrentApp.id
    app.oncontextmenu = e => {
        click.play()
        open_menu(e, CurrentApp.id)
    }

    let img = document.createElement("img")
    img.src = CurrentApp.image
    img. setAttribute("alt", CurrentApp.name)

    let p = document.createElement("p")
    p.innerText = CurrentApp.name
   
    app.setAttribute("onclick", "window_open('" + CurrentApp.id + "')")
    app.setAttribute("class", "app draggable")
    app.setAttribute("draggable", "true")


    app.appendChild (img)
    app.appendChild (p)
    apps.appendChild (app)
}
//______________________________________________________________

//draggable

// const draggables = document.querySelectorAll('.draggable')

// draggables.forEach((draggable) => {
//     draggable.addEventListener('dragstart', ()=>{
//         draggable.classList.add('dragging')
//     })

//     draggable.addEventListener('dragend', ()=>{
//         draggable.classList.remove('dragging')
//     })
// })


//______________________________________________________________

function open (tag) {
    tag.style.display = "inline-block"
}

function close (tag) {
    tag.style.display = "none"
}

function window_open (id) {

const allDivs = app_main.children
Object.values(allDivs).map((currentDiv) => {
    if(currentDiv.getAttribute('id')=== id && id !=='calculator') {
        currentDiv.setAttribute('style', 'display: flex')
    } else if(currentDiv.getAttribute('id')=== id && id ==='calculator'){
        currentDiv.setAttribute('style', 'display: block')
    }else {
        currentDiv.setAttribute('style', 'display: none')
    }
})

    click.play()
    brand_window.innerHTML = ""
    init_window()
    let main = document.querySelector("#" + id)

    let img = document.createElement("img")
    img.src = main.childNodes[0].src
    img.setAttribute("alt", main.childNodes[0].getAttribute("alt"))

    let p = document.createElement("p")
    p.innerText = main.childNodes[1].innerText
    brand_window.appendChild(img)
    brand_window.appendChild(p)

    open(os_window)
}

function init_window() {
    close(shorter)
    maximise.onclick = e => {
        click.play()
        maximise_window()
    }
    shorter.onclick = e => {
        click.play()
        shorter_window()
    }
    cross.onclick = e => {
        click.play()
        close(os_window)
        os_window
    }
}

function maximise_window () {
    open(shorter)
    close(maximise)
    window.restoreX = os_window.style.left
    window.restoreY = os_window.style.top
    os_window.style.top = 0
    os_window.style.left = 0
    os_window.style.width = "100%"
    os_window.style.height = "100vh"
}

function shorter_window () {
    open(maximise)
    close(shorter)
    os_window.style.top = window.restoreY
    os_window.style.left = window.restoreX
    os_window.style.width = "60%"
    os_window.style.height = "60vh"
}

function open_menu (e, id) {
    e.preventDefault()
    menu.classList.add("active")
    menu.querySelectorAll("ul li")[0].childNodes[0].onclick = () => {
        window_open(id)
    }
    menu.querySelectorAll("ul li")[1].childNodes[0].onclick = () => {
        admin_access(id)
    }
    menu.querySelectorAll("ul li")[2].childNodes[0].onclick = () => {
        remove_app(id)
    }
    menu.style.top = e.pageY + 5 + "px"
    menu.style.left = e.pageX + 5 + "px"
    return false
}

function admin_access(id) {
    con.play()
    vex.dialog.confirm({
        message: "Are you sure to give admin access to this app?",
        callback: function(value) {
            if(value) {
                okay.play()
                window_open(id)
            } else {
                no.play()
                vex.dialog.alert({
                    message: "Request declined"
                })
            }
        }
    })
}

function remove_app(id) {
    con.play()
    vex.dialog.confirm({
        message: "Are you sure to remove this app?",
        callback: function(value) {
            if(value) {
                okay.play()
                document.querySelector("#" + id).remove()
            } else {
                no.play()
                vex.dialog.alert({
                    message: "App is not removed"
                })
            }
        }
    })
}

//Anonimus functions in Event Listeners
window.onclick = e => {
    if (menu.classList.contains ("active")) {
        menu.classList.remove("active")
    }
}

os_window.ondragend = e => {
    let go_top = e.pageY
    let go_left = e.pageX
    if(go_top < 0) {
        go_top= e
    }
    if(go_left < 0) {
        go_left = 0
    }
    os_window.style.top = go_top + "px"
    os_window.style.left = go_left + "px"
}

function getActualHourly() {
    let date = new Date();
    let hours = date.getHours().toString();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString();
    let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds().toString() : date.getSeconds().toString();
    let hourly = hours + ':' + minutes + ':' + seconds;

    return hourly;
}

function getActualDate() {
    let date = new Date();
    let day = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate.toString();
    let month = date.getMonth() < 10 ? '0' + date.getMonth().toString : date.getMonth().toString();
    let year = date.getFullYear().toString();
    let fullDate = day + '/' + month + '/' + year;
    
    return fullDate;
}

let hourlyContainer = document.createElement("div");
let dateContainer = document.createElement("div");
taskbar.appendChild(hourlyContainer);
taskbar.appendChild(dateContainer);

function actualizeDateHourly() {
    hourlyContainer.innerHTML = getActualHourly();
    dateContainer.innerHTML = getActualDate();
}


setInterval(actualizeDateHourly, 1000);
