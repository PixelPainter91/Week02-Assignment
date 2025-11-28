//TODO: Create thumbnail images, so the user can click on them and see them in a fullscreen format

//step1: store image data
 const imageData = [
    {
    imageName:"nwAdd",
    imageSrc: "./assets/nailwardrobeadvert.jpg",
    imageAlt: `A woman’s hand with pink nail polish on a pink background. The image includes text: “Sort your stash — with Nail Wardrobe. Upload > Filter > Keep track.”`,
    imgTab:0,
 },
 {
    imageName:"nwOrganised",
    imageSrc: "./assets/organised.png",
    imageAlt: `A black android phone on a pink background with an image gallery showing different colour nail swatches. Text above reads "The simple way to get organised. Catalog your collection"`,
    imgTab:1,
 },
{
    imageName:"nwUpload",
    imageSrc: "./assets/upload.png",
    imageAlt: `A black android phone on a pink background with an image gallery showing an upload symbol with the users photo gallery open, showing nail colour swatches. Text below reads "Upload: use the in app camera to upload an existing image.`,
    imgTab:2,
 },
 {
    imageName:"nwFilter",
    imageSrc: "./assets/filter.png",
    imageAlt: `A black android phone on a pink background with an image gallery showing a pink nail colour swatch and upload options: Name, Colour Group, Colour, Colour Code, Brand, Type, Finish`,
    imgTab:3,
 },
 {
    imageName:"nwCommunityDriven",
    imageSrc: "./assets/communityDriven.png",
    imageAlt: `A black Android phone on a pink background showing an empty nail polish bottle logo and the text ‘Nail Wardrobe.’ Above the phone, text reads: ‘Community driven: Your feedback makes Nail Wardrobe work for you.`,
    imgTab: 4,
 },
 {
    imageName:"nwkeepTrack",
    imageSrc: "./assets/keepTrack.png",
    imageAlt: `A black Android phone on a pink background showing the Nail Wardrobe gallery with different nail colour swatches. On the right side are solid-colour nail polish bottle icons used to sort the gallery, and across the top are categories for tracking polish. The image includes the text: "Keep Track: Less time looking, knowing what you have in a tap."`,
    imgTab: 5,
 },
 
]
//step2: create thumbnail images
 function createThumbnails(){
    //select the DOM element (thumbnail-container) to contain my thumbnail
    const thumbnailContainer = document.getElementById("thumbnail-container");
    //for loop
    //loop: task
    for (let i = 0 ; i< imageData.length; i++){
    //-creat img element 
    const img = document.createElement("img");
    //update the src and alt attributes of the img elemet to 
    //match those in the array 
    img.src =imageData[i].imageSrc;
    img.alt =imageData[i].imageAlt;
    img.tabIndex = imageData[i].imgTab;
    //-give each img a className (img.className)
    img.className = "thumbnail";
    //- add an event listener to each image --> the event handler of this imagesis tje function you write to create the fullscreen images

    img.addEventListener("click", function(){
        createFullscreenImages(this.src, this.alt);
    });
    //--append the created images to the thumbnail-container
    thumbnailContainer.appendChild(img);
    }
 }

//step3: create fullscreen images
function createFullscreenImages(src, alt){
    //this is the event handler
    // select the fullscreen-container
    const fullscreenContainer = document.getElementById("fullscreen-container");
    //delete the current fullscreen image
    fullscreenContainer.innerHTML = "";
    // fullscreenContainer.innerHTML = "" or null
    //create image
    const fullImg= document.createElement("img");
    fullImg.src = src;
    fullImg.alt = alt;
    fullImg.setAttribute("aria-label", alt);
    //update its values 
    //add className for styling
    fullImg.className = "fullscreen-image"
    //append image to container
    fullscreenContainer.appendChild(fullImg);
    currentIndex = getCurrentImageIndex(src);
}
document.addEventListener("DOMContentLoaded", function(){
    createThumbnails();
});