const rooms = [
    {
        roomTitle : "J319",
        iMacs: 5,
        MsftKinect: 1,
        photoStudio: true,
        Availibility: true,
        roomDesc: "This is totally one lol",
    },

    {
        roomTitle : "J220",
        iMacs: 5,
        MsftKinect: 1,
        Availibility: true,
        roomDesc: "This is totally one lol",
    },

    {
        roomTitle : "J219",
        iMacs: 3,
        MsftKinect: 0,
        Availibility: false,
        roomDesc: "This is totally one lol",
    },

    {
        roomTitle: "J208",
        iMacs: 5,
        MsftKinect: 1,
        Availibility: false,
        roomDesc: "This is totally one lol",
    },

    ];


//Modal 
const modal = document.getElementById('modalWrapper');
const modalCloseBtn = document.getElementById('exitModal');
modalCloseBtn.addEventListener('click', modalClose);

//Modal Elements
const modalBanner = document.getElementById('modalBanner');
const breadCrumb = document.getElementById('modalBreadCrumb')
const modalAvail = document.getElementById('modalAvail');
const roomDropDown = document.getElementById('roomScheduleList');
const roomFeatures = document.getElementById('modalFeature');
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





function modal_Fill(clicked_id) {
//if blah clicked fill modal if blah clicked fill modal with this info if blah clicked fill
modal.style.display = 'flex';
console.log((clicked_id), "was clicked!")
if (clicked_id === "1")
{

} else if (clicked_id === "2"){

} else if (clicked_id === "3"){

} else if (clicked_id === "4") {

} else {
    console.log("This could be an error who knows...")
}


    };


function modalClose(){
    modal.style.display = 'none';
}