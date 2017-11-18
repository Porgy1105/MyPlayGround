const azureFunctionUrl = "https://myiot-function.azurewebsites.net/api/gh-simple-notifier?code=HGTJPFCeAJkCx6qafrDJe3SoZmy1QJZK1ifxAVIB7Zh2Q9kT49wSdA==";

const config = {
    apiKey: "AIzaSyCCvJaQU9iy3Rd6jZzvfSkfI9oud_jvO2k",
    authDomain: "my-iot-21a51.firebaseapp.com",
    databaseURL: "https://my-iot-21a51.firebaseio.com",
    projectId: "my-iot-21a51",
    storageBucket: "my-iot-21a51.appspot.com",
    messagingSenderId: "447306023699"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

// 現在のアドレス表示
firebase.database().ref("gh-notifier-address").on('value', function (snapshot) {
    let addressText = snapshot.val();
    if (addressText) {
        let ul = document.getElementById("address");
        ul.innerHTML = "";

            let li = document.createElement('li');
            li.className = "mdl-list__item";

            let span = document.createElement('span');
            span.className = "mdl-list__item-primary-content curent-address";
            span.innerHTML = addressText;

            li.appendChild(span);
            ul.appendChild(li);
    }
});

// 送信ボタンを押した場合
$("#send").click(function () {
    let errSpan = document.getElementById("errText");
    errSpan.innerText = "";

    let text = document.getElementById("talk-value").value;
    if(text){
        let notifierAddress = document.getElementsByClassName("curent-address")[0].innerText;
        if(notifierAddress){
            let parameter = "&text=" + text + "&ghNgrokUrl=" + notifierAddress;
            let ajaxUrl = azureFunctionUrl + parameter;
            $.ajax({
                type: "GET",
                url: ajaxUrl
            }).done(function(response){
                // 何もしない
            }).fail(function(response){
                //errSpan.innerText = "送信に失敗しました。";
            });
        }else{
            errSpan.innerText = "GoogleHomeのアドレスが取得できませんでした。";
        }
    }else{
        errSpan.innerText = "送信するテキストを入力してください。";
    }
});

// 更新ボタンを押した場合
$("#update").click(function () {
    let text = document.getElementById("address-value").value;
    if(text){
        firebase.database().ref("gh-notifier-address").set(text);
    }
});