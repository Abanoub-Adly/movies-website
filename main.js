var imgContainers = document.querySelector(".imagesContainer");
var contents = document.querySelectorAll(".content")
var imgs = document.querySelectorAll(".imgContainer");
var banner = document.querySelector(".banner")
const items = document.querySelectorAll(".carousel-item");
const container = document.querySelector(".carousel-container");
var bars = document.querySelector(".bars");
var nav = document.querySelector(".nav");
var xmark = document.querySelector(".xmark")
var videoContainer = document.querySelector(".video-container")
var watchTrailer = document.querySelector(".watchTrailer");
var video = document.querySelector(".video-container .video video")
bars.onclick = function(){

        if(bars.classList.contains("fa-bars")){
            nav.classList.add("open")
            bars.classList.remove("fa-bars")
            bars.classList.add("fa-xmark")
            banner.style.padding = "400px 20px 5px"
        }else{
            nav.classList.remove("open")
            bars.classList.remove("fa-xmark")
            bars.classList.add("fa-bars")
                        banner.style.padding = "100px 20px 5px"
        }
}
imgs.forEach((img) => {
    img.addEventListener("click", () => {
        imgs.forEach(img => img.classList.remove("active"));
        img.classList.add("active");
        const containerRect = imgContainers.getBoundingClientRect();
        console.log("contaierBoundingClientRec",containerRect)
        const itemRect = img.getBoundingClientRect();
        console.log("itemBoundingClientRect",itemRect)
        const containerCenter = containerRect.left + containerRect.width / 2;
        const itemCenter = itemRect.left + itemRect.width / 2;
        const moveX = containerCenter - itemCenter;
        imgContainers.style.transform = `translateX(${moveX}px)`;
    });
});
function changeBgAndTitle(bg,title){
    banner.style.background = `url(${bg}) center`;
    banner.style.backgroundRepeat = " no-repeat";
    banner.style.backgroundSize = "cover";
    banner.style.backgroundPosition= "center"
    contents.forEach(function(content){
        if(content.classList.contains(title)){
            contents.forEach(content=>content.classList.remove("active"))
            content.classList.add("active")
        }
    })
}
watchTrailer.addEventListener("click",function(){
    videoContainer.classList.add("watchVideo");
    video.play()
})
xmark.addEventListener("click",function(){
    videoContainer.classList.remove("watchVideo");
    video.pause()
})