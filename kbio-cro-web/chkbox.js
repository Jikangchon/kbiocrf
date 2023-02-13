function chkbox(obj) {
    var checked = obj.checked;
    if(checked) {
        obj.value = "checked";
    } else {
        obj.value = "check";
    }
};

var chkbox = "${data.chkbox}";
if (chkbox == "checked") {
    $("#chkbox").prop("checked", true);
} else {
    $("#chkbox").prop("checked", false);
}

