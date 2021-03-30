function validate() {
    var u = document.getElementById("username").value;
    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("password-repeat").value;
    var num = document.getElementById("phone").value;

    if (u == "" || pass1 == "" || pass2 == "" || num=="" || day=="" || year=="") {
        alert("Bạn chưa hoàn thành đủ thông tin!");
        return false;
    }
    
    //Kiểm tra dữ liệu nhập phải là số:
    var checkPhone = isNaN(num);
    if (checkPhone == true) {
        alert("Điện thoại phải để ở định dạng số");
        return false;
    }

    var checkForm = document.getElementById("gridCheck").value;
    if (checkForm.checked == false) {
        alert("Bạn chưa đồng ý với điểu khoản của chúng tôi");
        return false;
    }
    alert("Thành công")
    return true;
}
grecaptcha.ready(function () {
    grecaptcha.execute('6Lefr40aAAAAAJo5fdck-sHVwj1NI4tHYmyZkPJZ', { action: 'signup' })
        .then(function (token) {
            //sau khi có mã token gắn vào thẻ input để post lên cùng form
            $("#token").val(token);
    });
});