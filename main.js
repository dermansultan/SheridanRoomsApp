const rooms = [
    {
        roomTitle : "J319",
        iMacs: 5,
        "Microsoft Kinect": 1,
        "Photo Studio": true,
        Availibility: true,
        roomDesc: "Where did the desc go? Whoops...",
    },

    {
        roomTitle : "J220",
        iMacs: 9,
        "Microsoft Kinect": 1,
        Availibility: true,
        "Solder Stations": 4,
        roomDesc: "J220 is more of a work room than other labs but is considered a very versatile room for multiple production mediums. Located along the perimeter wall closest to the door is solder stations accompanied by iMac desktops. Each iMac in this room are space grey iMac Pros speced to render projects better than normal IXD iMacs.",
    },

    {
        roomTitle : "J219",
        iMacs: 3,
        "Microsoft Kinect": 0,
        Availibility: false,
        Couch: true,
        roomDesc: "J219 is a unique room commonly descried as a typography YSDN classroom which is adjoining to the Photo lab. Students highlight the fact it houses a couch for students to use, making it a great room for pulling all nighters in. There is a Roland vinyl cutter and multiple large bed digital scanners for students to use for project work, as well there is a Wacom tablet although no pen provided.",
    },

    {
        roomTitle: "J208",
        iMacs: 8,
        "Microsoft Kinect": 1,
        Availibility: false,
        "Cutting Matts": 3,
        roomDesc: "J208 is a large open room designed for craft and Assembly. Within the room so highlight features are lard adjustable height tables with cutting mats, large kitchen sink with countertop, and multiple storage spots. In addition to the physical attributes to J208, each iMac is loaded with software like the latest version of SketchUp, Pepakura paper folding, and the full Adobe suite. Students chose this space commonly for meeting up with various sized groups for the rooms large open space plus simple apple tv airplay projection sharing.",
    },

    ];



//Room Box's elements
const room1Title = document.getElementById('title1').innerHTML = rooms[0].roomTitle;
const room2Title = document.getElementById('title2').innerHTML = rooms[1].roomTitle;;
const room3Title = document.getElementById('title3').innerHTML = rooms[2].roomTitle;;
const room4Title = document.getElementById('title4').innerHTML = rooms[3].roomTitle;;
const room1Desc = document.getElementById('roomDesc1').innerHTML = `This room features ${rooms[0].iMacs} iMacs, a Microsoft Kinect, and a Photo Studio`;
const room2Desc = document.getElementById('roomDesc2').innerHTML = `This room features ${rooms[1].iMacs} iMacs, a Microsoft Kinect, and ${rooms[1]["Solder Stations"]} solder Stations`;
const room3Desc = document.getElementById('roomDesc3').innerHTML = `This room features ${rooms[2].iMacs} iMacs, and a couch`;
const room4Desc = document.getElementById('roomDesc4').innerHTML = `This room features ${rooms[3].iMacs} a Microsoft Kinect, and ${rooms[3]["Cutting Matts"]} cutting Matts`;
const boxBackgrounds = document.getElementsByClassName("boxImageBanner");

for (let i = 0; i < boxBackgrounds.length; i++) {
boxBackgrounds[i].style.backgroundImage = `url('img/${i}BG.png')`
}

//Modal 
const modal = document.getElementById('modalWrapper');
const modalCloseBtn = document.getElementById('exitModal');
let exploreBtn = document.getElementsByClassName('exploreBtn');
modalCloseBtn.addEventListener('click', modalClose);

//Modal Elements
const modalBanner = document.getElementById('modalBanner');
const breadCrumb = document.getElementById('modalRoomCrumb')
const modalAvail = document.getElementById('modalAvail');
const roomDropDown = document.getElementById('roomScheduleList');
const roomFeatures = document.getElementById('modalFeature');
const roomFloor = document.getElementById('floor');
const availButton = document.getElementById('availButton');
//Item Boxes
const macItemBox = document.getElementById('itemBoxMac');
const macItemCount = document.getElementById('modalItemMac');
const solderItemBox = document.getElementById('itemBoxsolder');
const solderItemCount = document.getElementById('modalItemSolder');
const cutterItemBox = document.getElementById('itemBoxCut');
const cutterItemCount = document.getElementById('modalItemBoxCut');
const couchItem = document.getElementById('itemBoxCouch');
const KinectItem = document.getElementById('itemBoxKinect')
const photoStudioItem = document.getElementById('itemBoxPhotoStudio');

//Room Info
const roomTitle = document.getElementById('modalRoomTitle');
const roomDescP = document.getElementById('modalRoomDesc');
const roomItems = document.getElementById('roomItems');




// String Regex Filtering method from https://css-tricks.com/snippets/javascript/strip-whitespace-from-string/

//Template from objec property for Numbered Values
function generateNumTemplate(roomItem, value){
return `
<img src="img/${roomItem}Item.png" class ="${roomItem.replace(/\s+/g, '')}IMG" alt="${roomItem} icon">
<h3 id="modalItem${roomItem}">${value} ${roomItem}</h3> 
`
}

//Template from Object property for Boolean Values 
function generateBooleanTemplate(roomItem){
    return `
    <img src="img/${roomItem}Item.png" class ="${roomItem.replace(/\s+/g, '')}IMG" alt="${roomItem} icon">
    <h3 id="modalItem${roomItem}">${roomItem}</h3> 
    `
    }


for (let btn of exploreBtn) {
    
let room = rooms[Number(btn.id)]

let containerDiv = document.createElement("div");
containerDiv.setAttribute('id', btn.id);
containerDiv.setAttribute('class', 'roomModals')

        for(let roomItem in room){
            let div = document.createElement("div");
            div.setAttribute('class', 'itemBox');
            if (typeof (room[roomItem]) === "number" && room[roomItem] > 0 && roomItem != 'Photo Studio' && roomItem != 'Availibility' && roomItem != 'roomTitle' && roomItem != 'Couch' && roomItem != 'roomDesc') {
                // console.log(`number: ${roomItem}`)
                div.setAttribute('id', `itemBox${roomItem}`);
                console.log(div)
                let template = generateNumTemplate(roomItem, room[roomItem]);
                div.innerHTML = div.innerHTML + template;
                containerDiv.appendChild(div);
            } else if (typeof(room[roomItem]) === 'boolean' && roomItem != 'Availibility' && roomItem != 'roomTitle' && roomItem != 'roomDesc') {
                console.log('bool')
                div.setAttribute('id', `itemBox${roomItem}`);
                let template = generateBooleanTemplate(roomItem);
                div.innerHTML = div.innerHTML + template;
                containerDiv.appendChild(div);
            }
            
            console.log(containerDiv)
            roomItems.appendChild(containerDiv);             
        }   

}
function modal_Fill(clicked_id) {

    
let roomModals = document.getElementsByClassName('roomModals')

    for(room of roomModals){
        roomTitle.innerHTML = rooms[clicked_id].roomTitle;
        roomFeatures.innerHTML = `${rooms[clicked_id].roomTitle} features:`;
        breadCrumb.innerHTML = rooms[clicked_id].roomTitle;
        roomDescP.innerHTML = rooms[clicked_id].roomDesc;
        roomFloor.innerHTML = `Floor ${rooms[clicked_id].roomTitle[1]}`;

        if (clicked_id === "2"){
            modalAvail.innerHTML = "Unavailable";
            availButton.style.backgroundColor = "#FF5000";

        }

        if (room.id != clicked_id){
            room.style.display = 'none'
        }else{
            room.style.display = 'flex'
            modalBanner.style.backgroundImage = `url('img/${clicked_id}BG.png')`
        }
    }

modal.style.display = 'flex';



    };


function modalClose(){
    modal.style.display = 'none';
}

