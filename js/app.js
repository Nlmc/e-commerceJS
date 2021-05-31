// function loadFile() {
//     var fileReader;

//     if (typeof window.FileReader !== 'function') {
//         alert("The file API isn't supported on this browser yet.");
//         return;
//     }
//     else {
//         fileReader = new FileReader();
//         fileReader.onload = receivedText;
//         fileReader.readAsText(file);
//     }

//     function receivedText(e) {
//         let lines = e.target.result;
//         var newArr = JSON.parse(lines);
//     }
// }
// window.onload = loadFile();


// const MY_JSON_FILE = [{ "hello": "world" }];
// let json = JSON.stringify(MY_JSON_FILE);
// const blob = new Blob([json], { type: "application/json" });
// const fr = new FileReader();
// fr.addEventListener("load", e => {
//     console.log(e.target.result, JSON.parse(fr.result))
// });
// fr.readAsText(blob);

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'products.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
function init() {
    loadJSON(function (response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
        console.log(actual_JSON);
    });
}
window.onload = init();