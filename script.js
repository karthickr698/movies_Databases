//get information
$("#search").click(function () {
    $("#searchOut").show()
    var title = $("#titleIn").val()
    var year = Number($("#yearIn").val())
    var type = $("#typeIn").val()
    console.log(title, year, type)
    if (title != "" && year != "") {
        var url = "https://www.omdbapi.com/?t=" + title + "&y=" + year + "&type=" + type + "&apikey=a06613a3"
    }
    if (title != "" && year == "") {
        var url = "https://www.omdbapi.com/?t=" + title + "&type=" + type + "&apikey=a06613a3"
    }
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (data, xhr) {
            console.log(xhr.status);
            prinData(data)

        },
        error: function (error) {
            console.log(error);
        },
    });
})
//print the JSON output
function prinData(data) {
    $("#tableForm").empty()
    var json = data
    console.log(json)
    var keysData = Object.keys(json)
    console.log(keysData)
    console.log(json.Title)
    console.log(keysData.length)
    var valuesData = Object.values(json)
    for (i = 0; i < keysData.length; i++) {
        if (keysData[i] == "Poster" || keysData[i] == "Ratings") {
            continue
        }
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        td.innerHTML = keysData[i]
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerHTML = valuesData[i]
        tr.appendChild(td)
        $("#tableForm").append(tr)
    }
    $("#poster").attr("src", json.Poster)
    $("#poster").css("width", "100%")
    $("#poster").css("height", "700px")

}
//animation
$(".card").mouseenter(function () {
    $(this).css("width", "20rem")
}).mouseleave(function () {
    $(this).css("width", "18rem")
})
$(".zoomIt").mouseenter(function () {
    $(this).css("box-shadow", "5px 10px 18px #888888")
})
$(".zoomIt").mouseleave(function () {
    $(this).css("box-shadow", "0px 0px 0px #888888")
})
$("#reset").click(function () {
    $("#searchOut").hide()
    $("#tableForm").empty()
    $("#titleIn").val("")
    $("#yearIn").val("")
    $("#typeIn").val("movie")
})

