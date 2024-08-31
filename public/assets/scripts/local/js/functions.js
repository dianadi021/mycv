function DisableRightClickOnMouse() {
    function disabledSelection(e) {
        return false;
    }

    function reEnable() {
        return true;
    }

    document.onselectstart = new Function("return false");

    if (window.sidebar) {
        document.onmousedown = disabledSelection;
        document.onclick = reEnable;
    }
}

function SetUmur() {
    const currentDate = moment();
    const birthDate = moment("11-07-2000", "DD-MM-YYYY");

    $(`#umur`).html(`umur ${currentDate.diff(birthDate, 'years')} tahun`);
    $(`#tempat-tanggal-lahir`).html(`<i class="fa-solid fa-cake-candles"></i> bandar lampung, ${birthDate.format("DD MMMM YYYY")}`);
}

function AnchorOnClick() {
    $(`.anchor-on-click`).click(function (event) {
        event.preventDefault();
        const url = this.href;
        window.open(url, '_blank', 'popup');
    })
}

function SetDurasiJobs() {
    const currentDate = moment();

    // DURASI FULLSTACK START
    const inJobs = moment("29-04-2024", "DD-MM-YYYY");
    $(`#inJobs`).html(`${inJobs.format("DD MMM YYYY")}`);
    const iFullstackYears = currentDate.diff(inJobs, 'years');
    inJobs.add(iFullstackYears, 'years');
    const iFullstackMonths = currentDate.diff(inJobs, 'months');
    inJobs.add(iFullstackMonths, 'months');
    const iFullstackDays = currentDate.diff(inJobs, 'days');

    let txtDurasiJob = (iFullstackYears ? `${iFullstackYears} Thn ` : "");
    txtDurasiJob += (iFullstackMonths ? `${iFullstackMonths} Bln ` : "");
    txtDurasiJob += (iFullstackDays ? `${iFullstackDays} Hari ` : "");
    $(`#durasiJob`).html(`Durasi: ${txtDurasiJob}`);
    // DURASI FULLSTACK END
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Hello, this is a PDF document!", 10, 10);

    doc.save("CV-Dian Adi Nugroho.pdf");
}

function saveAsPDF() {
    var element = $("#pages");
    html2pdf().from(element).save();
}