


let hot = new HotClass("hot");

let columnData = setColumn();
hot.updateSettings({
    columns: columnData.map(function (e) {
        return e.setting;
    }),
    colWidths: columnData.map(function (e) {
        return e.width;
    }),
});

var jsonData = $("#data").val();
if (jsonData !== "") {
    hot.load(jsonData);
}

function setColumn() {

    let list = [];

    list.push(hotUtil.setTextColumn("id", 100));
    list.push(hotUtil.setTextColumn("name", 100));
    list.push(hotUtil.setTextColumn("type", 100));
    list.push(hotUtil.setTextColumn("updatedatetime", 100));

    return list;
}