var config = {
    apiKey: "AIzaSyCCvJaQU9iy3Rd6jZzvfSkfI9oud_jvO2k",
    authDomain: "my-iot-21a51.firebaseapp.com",
    databaseURL: "https://my-iot-21a51.firebaseio.com",
    projectId: "my-iot-21a51",
    storageBucket: "my-iot-21a51.appspot.com",
    messagingSenderId: "447306023699"
};
firebase.initializeApp(config);

firebase.database().ref("googlehome").on('value', function (snapshot) {
    let date = new Date();
    let datetimeText = "" + date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();
    firebase.database().ref("google-home/" + datetimeText).set(snapshot.val());
    
    setTimeout(function () {
        // データ削除
        firebase.database().ref("googlehome").set(null);
    },0)
});

firebase.database().ref("google-home").on('value', function (snapshot) {
    let dataList = snapshot.val();
    if (dataList) {
        var dataListKeys = Object.keys(dataList);

        let ul = document.getElementById("view-ul");
        ul.innerHTML = "";

        for (var i = 0, len = dataListKeys.length; i < len; i++) {
            let value = dataList[dataListKeys[i]];

            let li = document.createElement('li');
            li.className = "mdl-list__item";

            let span = document.createElement('span');
            span.className = "mdl-list__item-primary-content";
            span.innerHTML = value;

            li.appendChild(span);
            ul.appendChild(li);
        }
    }
});

firebase.database().ref("iot-hue").on('value', function (snapshot) {
    let dataList = snapshot.val();
    if (dataList) {
        var dataListKeys = Object.keys(dataList);

        let table = document.getElementById("view-table");
        let tdbody = table.getElementsByTagName("tbody")[0];
        tdbody.innerHTML = "";



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


        }
    }
});

$("#registration").click(function () {
    let obj = {};
    obj[$("#key").val()] = $("#value").val();

    let date = new Date();
    let datetimeText = "" + date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();

    firebase.database().ref("iot-hue/" + datetimeText).set(obj);
});