var config = {
    apiKey: "AIzaSyCCvJaQU9iy3Rd6jZzvfSkfI9oud_jvO2k",
    authDomain: "my-iot-21a51.firebaseapp.com",
    databaseURL: "https://my-iot-21a51.firebaseio.com",
    projectId: "my-iot-21a51",
    storageBucket: "my-iot-21a51.appspot.com",
    messagingSenderId: "447306023699"
};
firebase.initializeApp(config);

// DB値の取得
firebase.database().ref("iot-hue").on('value', function (snapshot) {
    let dataList = snapshot.val();
    var dataListKeys = Object.keys(dataList);

    let table = document.getElementById("view-table");
    let tdbody = table.getElementsByTagName("tbody")[0];

    //let ul = document.getElementById("view-ul");
    //ul.innerHTML = "";

    for (var i = 0, len = dataListKeys.length; i < len; i++) {
        let dataObj = dataList[dataListKeys[i]];

        let tr = document.createElement('tr');
        let tdKey = document.createElement('td');
        tdKey.innerHTML = Object.keys(dataObj)[0];
        tdKey.className = "mdl-data-table__cell--non-numeric";
        tr.appendChild(tdKey);

        let tdValue = document.createElement('td');
        tdValue.innerHTML = dataObj[Object.keys(dataObj)[0]];
        tdValue.className = "mdl-data-table__cell--non-numeric";
        tr.appendChild(tdValue);

        tdbody.appendChild(tr);

        // リスト表示
        //let li = document.createElement('li');
        //li.className = "mdl-list__item";

        //let span = document.createElement('span');
        //span.className = "mdl-list__item-primary-content";
        //span.innerHTML = Object.keys(dataObj)[0] + " : " + dataObj[Object.keys(dataObj)[0]];

        //li.appendChild(span);

        //ul.appendChild(li);
    }
});

$("#registration").click(function () {
    let obj = {};

    let date = new Date();
    let datetimeText = "" + date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();

    obj[$("#key").val()] = $("#value").val();

    firebase.database().ref("iot-hue/" + datetimeText).set(obj);
});