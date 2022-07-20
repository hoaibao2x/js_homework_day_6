/**Tìm số nguyên dương nhỏ nhất */
function timMinNguyenDuong() {
    // Process
    var tong = 1;
    var minNum = 0;
    var tempValue = 0;
    for (var i = 0; i <= tong; i++) {
        if (tong <= 10000) {
            tong += i;
            tempValue = i;
        } else {
            minNum = tempValue;
            break;
        }
    }
    document.querySelector('#inSoNguyenDuong').innerHTML = 'Số nguyên dương nhỏ nhất trong khoảng 1 + 2 + ... + n > 10000 là ' + minNum;
}
timMinNguyenDuong();



/**Tính tổng */
function tinhTong() {
    // Input
    var numX = Number(document.querySelector('#inputX').value);
    var numN = Number(document.querySelector('#inputN').value);
    var inKetQua = document.querySelector('#inTong');
    // Process
    var tong = 0;
    for (var i = 1; i <= numN; i++) {
        tong += Math.pow(numX, i);
    }
    inKetQua.innerHTML = 'S(' + numN + ')' + ' = ' + tong;
}



/**Tính giai thừa */
function tinhGiaiThua() {
    // Input
    var nhapSoNguyen = Number(document.querySelector('#nhapSoNguyen').value);
    var inKetQua = document.querySelector('#inGiaiThua');
    // Process
    var bienKhoiTao = 1;
    for (var i = 1; i <= nhapSoNguyen; i++) {
        bienKhoiTao *= i;
    }
    var kqGiaiThua = bienKhoiTao;
    inKetQua.innerHTML = 'Giai thừa của ' + nhapSoNguyen + ' là: ' + kqGiaiThua;
}



/**In div chẵn - div lẻ */
function inChanLe() {
    // Process
    for (var i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            var goiHam = createDiv();
            goiHam.innerHTML = 'Div chẵn ' + i;
            goiHam.style.backgroundColor = 'red';
        } else {
            var goiHam = createDiv();
            goiHam.innerHTML = 'Div lẻ ' + i;
            goiHam.style.backgroundColor = 'blue';
        }
    }
}

// Function tạo div
function createDiv() {
    var divCha = document.querySelector('#inKetQua');
    var createDiv = document.createElement('div');
    createDiv.style.width = '100%';
    createDiv.style.color = 'white';
    createDiv.style.padding = '10px';
    divCha.appendChild(createDiv);

    return createDiv;
}