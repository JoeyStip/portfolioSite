$(document).ready(()=>{
    $(".labels").css("opacity", 0);

    
})

$("img")
    .mouseenter((event)=>{
    //console.log("#" + event.target.id + "Label");
    $("#" + event.target.id + "Label").css("opacity", 1)
    //.attr("opacity", 1.0)
})
    .mouseleave((event)=>{
        $("#" + event.target.id + "Label").css("opacity", 0)
    })
