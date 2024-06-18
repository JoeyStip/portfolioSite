$(document).ready(()=>{
    $(".labels").css("opacity", 0);

    
})

$("img")
    .mouseenter((event)=>{
        // console.log(event)
        // cool idea: list projects out and have the whole background change to a screenshot
        // of the project site when you mouseover its item on the list
        let width = event.target.width;
        let halfWidth = Math.round(width/2);

        $("#" + event.target.id + "Label")
            .css("opacity", 1)
            .css("transform", "translate(" + halfWidth + "px,-50px)" )
            .css("width", width);
})
    .mouseleave((event)=>{
        $("#" + event.target.id + "Label").css("opacity", 0);
    })

$(".projectPreview")
    .mouseenter((event)=>{
        console.log(event)
    })