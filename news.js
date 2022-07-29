fetch('http://hn.algolia.com/api/v1/items/1')
    .then(res => res.json())
    .then(res => {
        console.log(res);
    });

// var data = JSON.stringify({
//     "input": [
//         {
//             "type": "remote",
//             "source": "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
//         }
//     ],
//     "conversion": [
//         {
//             "category": "image",
//             "target": "png"
//         }
//     ]
// });

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//         console.log(this.responseText);
//     }
// });

// xhr.open("POST", "https://api.api2convert.com/v2/jobs");
// xhr.setRequestHeader("x-oc-api-key", "0469dde7ac0045deb743b39666310925");
// xhr.setRequestHeader("content-type", "application/json");
// xhr.setRequestHeader("cache-control", "no-cache");

// xhr.send(data);