$(document).ready(()=>{
    $(".labels").css("opacity", 0);

    
})

$(".projectPreview").mouseenter((event)=>{
    let id = event.target.id
    
    //console.log($(".projectPreview").children())
})

$("img")
    .mouseenter((event)=>{
        // console.log(event)
        // cool idea: list projects out and have the whole background change to a screenshot
        // of the project site when you mouseover its item on the list
        console.log(event.target, event.target.width)
        let width = event.target.width;
        let halfWidth = Math.round(width/2);
        // console.log(event.target)

        $("#" + event.target.id + "Label")
            .css("opacity", 1)
            .css("transform", "translate(" + halfWidth + "px,-50px)" )
            .css("width", width);

        $("#" + event.target.id + "Container")
            //.css("grid-area", "1 / 3 / 1 / 1")
            //.css("z-index", "1")    
})
    .mouseleave((event)=>{
        $("#" + event.target.id + "Label").css("opacity", 0);
    })

$(".projectPreview")
    .mouseenter((event)=>{
        //console.log(event)
    })