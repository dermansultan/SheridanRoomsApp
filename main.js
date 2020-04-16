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

const modal = document.getElementById('modalWrapper');
const modalCloseBtn = document.getElementById('exitModal');

modalCloseBtn.addEventListener('click', modalClose);



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