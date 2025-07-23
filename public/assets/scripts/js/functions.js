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

 $(`#text_umur`).html(`umur ${currentDate.diff(birthDate, "years")} tahun`);
 $(`#text_ttl`).html(`<i class="fa-solid fa-cake-candles"></i> bandar lampung, ${birthDate.format("DD MMMM YYYY")}`);
}

function setDurasiKerja() {
 const currentDate = moment();
 const tglKerja1 = moment("29-04-2024", "DD-MM-YYYY");
 $(`#tglKerja1`).html(`<i class="fa-solid fa-calendar-days"></i> ${tglKerja1.format("DD MMM YYYY")} - Now`);

 const $tahunKerja1 = currentDate.diff(tglKerja1, "years");
 tglKerja1.add($tahunKerja1, "years");
 const $bulanKerja1 = currentDate.diff(tglKerja1, "months");
 tglKerja1.add($bulanKerja1, "months");
 const $hariKerja1 = currentDate.diff(tglKerja1, "days");
 tglKerja1.add($hariKerja1, "days");

 let $txtDurasiKerja = IsValidVal($tahunKerja1) ? `${$tahunKerja1} Thn ` : "";
 $txtDurasiKerja += IsValidVal($bulanKerja1) ? `${$bulanKerja1} Bln ` : "";
 $txtDurasiKerja += IsValidVal($hariKerja1) ? `${$hariKerja1} Hari` : "";

 $(`#durasiKerja1`).html(`<i class="fa-solid fa-clock"></i> ${$txtDurasiKerja}`);

 const startTglKerja2 = moment("18-08-2023", "DD-MM-YYYY");
 const endTglKerja2 = moment("18-10-2023", "DD-MM-YYYY");
 $(`#tglKerja2`).html(`<i class="fa-solid fa-calendar-days"></i> ${startTglKerja2.format("DD MMM YYYY")} - ${endTglKerja2.format("DD MMM YYYY")}`);

 const $tahunKerja2 = endTglKerja2.diff(startTglKerja2, "years");
 startTglKerja2.add($tahunKerja2, "years");
 const $bulanKerja2 = endTglKerja2.diff(startTglKerja2, "months");
 startTglKerja2.add($bulanKerja2, "months");
 const $hariKerja2 = endTglKerja2.diff(startTglKerja2, "days");
 startTglKerja2.add($hariKerja2, "days");

 $txtDurasiKerja = IsValidVal($tahunKerja2) ? `${$tahunKerja2} Thn ` : "";
 $txtDurasiKerja += IsValidVal($bulanKerja2) ? `${$bulanKerja2} Bln ` : "";
 $txtDurasiKerja += IsValidVal($hariKerja2) ? `${$hariKerja2} Hari` : "";

 $(`#durasiKerja2`).html(`<i class="fa-solid fa-clock"></i> ${$txtDurasiKerja}`);

 const startTglKerja3 = moment("02-2017", "MM-YYYY");
 const endTglKerja3 = moment("05-2017", "MM-YYYY");
 $(`#tglKerja3`).html(`<i class="fa-solid fa-calendar-days"></i> ${startTglKerja3.format("DD MMM YYYY")} - ${endTglKerja3.format("DD MMM YYYY")}`);

 const $tahunKerja3 = endTglKerja3.diff(startTglKerja3, "years");
 startTglKerja3.add($tahunKerja3, "years");
 const $bulanKerja3 = endTglKerja3.diff(startTglKerja3, "months");
 startTglKerja3.add($bulanKerja3, "months");
 const $hariKerja3 = endTglKerja3.diff(startTglKerja3, "days");
 startTglKerja3.add($hariKerja3, "days");

 $txtDurasiKerja = IsValidVal($tahunKerja3) ? `${$tahunKerja3} Thn ` : "";
 $txtDurasiKerja += IsValidVal($bulanKerja3) ? `${$bulanKerja3} Bln ` : "";
 $txtDurasiKerja += IsValidVal($hariKerja3) ? `${$hariKerja3} Hari` : "";

 $(`#durasiKerja3`).html(`<i class="fa-solid fa-clock"></i> ${$txtDurasiKerja}`);
}
