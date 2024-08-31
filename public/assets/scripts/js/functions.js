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

function JQueryOnLoad() {
    // AJAX SECTION START
    // Tampilkan loading overlay saat form dikirim
    // $(document).on("submit", "form", function () {
    //     $("#loadingAjax").removeClass("hidden");
    // });

    // Tampilkan loading overlay untuk Ajax request
    // $(document).ajaxStart(function () {
    //     $("#loadingAjax").removeClass("hidden");
    // });

    // Sembunyikan loading overlay setelah Ajax selesai
    // $(document).ajaxStop(function () {
    //     $("#loadingAjax").addClass("hidden");
    // });
    // AJAX SECTION END
}

function AutoToIDR() {
    $(".convert_to_idr").on("input", function () {
        let value = $(this).val().replace(/[^0-9]/g, "");
        let formatted = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 2}).format(value);
        $(this).val(formatted);
    });
}

function InputNumberOnly() {
    $(".input_number_only").on("input", function () {
        let value = $(this).val().replace(/[^0-9]/g, "");
        $(this).val(value);
    });
}

function InitAutocomplete() {
    $(document).ready(function () {
        if ($("#provinsi").length) {
            $("#provinsi").autocomplete({
                source: async function (request, response) {
                    if (request.term.length < 1) return;

                    LoadingInput('loading', 'provinsi');

                    try {
                        const { datas } = await $.ajax({
                            url: `/api/search?get_data=provinsi`,
                            data: { q: request.term },
                        });

                        LoadingInput('idle', 'provinsi');

                        response(datas.length ? datas : [{ name: 'Data tidak ditemukan', id: '' }]);
                    } catch (error) {
                        console.dir("error", error);
                        LoadingInput('idle', 'provinsi');
                        response([{ name: 'Data tidak ditemukan', id: '' }]);
                    }
                },
                minLength: 1,
                focus: function (_, ui) {
                    if (ui.item.id) {
                        $("#provinsi").val(ui.item.name);
                        $("#id_provinsi").val(ui.item.id);
                    }
                    return false;
                },
                select: function (_, ui) {
                    if (ui.item.id) {
                        $("#provinsi").val(ui.item.name);
                        $("#id_provinsi").val(ui.item.id);
                    }
                    return false;
                }
            }).autocomplete("instance")._renderItem = function (ul, item) {
                return $("<li>").append(`<div>Provinsi: <strong>${item.name}</strong></div>`).appendTo(ul);
            };
        }

        if ($("#kabupaten").length) {
            $("#kabupaten").autocomplete({
                source: async function (request, response) {
                    if (request.term.length < 1) return;

                    LoadingInput('loading', 'kabupaten');

                    try {
                        const { datas } = await $.ajax({
                            url: `/api/search?get_data=kabupaten`,
                            data: { q: request.term, id_provinsi: (IsValidVal($("#provinsi").val()) ? $("#id_provinsi").val() : null) },
                        });

                        LoadingInput('idle', 'kabupaten');
                        response(datas.length ? datas : [{ name: 'Data tidak ditemukan', id: '' }]);
                    } catch (error) {
                        console.dir("error", error);
                        LoadingInput('idle', 'kabupaten');
                        response([{ name: 'Data tidak ditemukan', id: '' }]);
                    }
                },
                minLength: 1,
                focus: function (_, ui) {
                    if (ui.item.id) {
                        $("#kabupaten").val(ui.item.name);
                        $("#id_kabupaten").val(ui.item.id);
                    }
                    return false;
                },
                select: function (_, ui) {
                    if (ui.item.id) {
                        $("#kabupaten").val(ui.item.name);
                        $("#id_kabupaten").val(ui.item.id);
                    }
                    return false;
                }
            }).autocomplete("instance")._renderItem = function (ul, item) {
                return $("<li>").append(`<div><strong>${item.name}</strong></div>`).appendTo(ul);
            };
        }

        if ($("#kecamatan").length) {
            $("#kecamatan").autocomplete({
                source: async function (request, response) {
                    if (request.term.length < 1) return;

                    LoadingInput('loading', 'kecamatan');

                    try {
                        const { datas } = await $.ajax({
                            url: `/api/search?get_data=kecamatan`,
                            data: { q: request.term, id_kabupaten: IsValidVal($("#kabupaten").val()) ? $("#id_kabupaten").val() : null },
                        });

                        LoadingInput('idle', 'kecamatan');
                        response(datas.length ? datas : [{ name: 'Data tidak ditemukan', id: '' }]);
                    } catch (error) {
                        console.dir("error", error);
                        LoadingInput('idle', 'kecamatan');
                        response([{ name: 'Data tidak ditemukan', id: '' }]);
                    }
                },
                minLength: 1,
                focus: function (_, ui) {
                    if (ui.item.id) {
                        $("#kecamatan").val(ui.item.name);
                        $("#id_kecamatan").val(ui.item.id);
                    }
                    return false;
                },
                select: function (_, ui) {
                    if (ui.item.id) {
                        $("#kecamatan").val(ui.item.name);
                        $("#id_kecamatan").val(ui.item.id);
                    }
                    return false;
                }
            }).autocomplete("instance")._renderItem = function (ul, item) {
                return $("<li>").append(`<div>Kecamatan: <strong>${item.name}</strong></div>`).appendTo(ul);
            };
        }

        if ($("#kelurahan").length) {
            $("#kelurahan").autocomplete({
                source: async function (request, response) {
                    if (request.term.length < 1) return;

                    LoadingInput('loading', 'kelurahan');

                    try {
                        const { datas } = await $.ajax({
                            url: `/api/search?get_data=kelurahan`,
                            data: { q: request.term, id_kecamatan: (IsValidVal($("#kecamatan").val()) ? $("#id_kecamatan").val() : null) },
                        });

                        LoadingInput('idle', 'kelurahan');
                        response(datas.length ? datas : [{ name: 'Data tidak ditemukan', id: '' }]);
                    } catch (error) {
                        console.dir("error", error);
                        LoadingInput('idle', 'kelurahan');
                        response([{ name: 'Data tidak ditemukan', id: '' }]);
                    }
                },
                minLength: 1,
                focus: function (_, ui) {
                    if (ui.item.id) {
                        $("#kelurahan").val(ui.item.name);
                        $("#id_kelurahan").val(ui.item.id);
                    }
                    return false;
                },
                select: function (_, ui) {
                    if (ui.item.id) {
                        $("#kelurahan").val(ui.item.name);
                        $("#id_kelurahan").val(ui.item.id);
                    }
                    return false;
                }
            }).autocomplete("instance")._renderItem = function (ul, item) {
                return $("<li>").append(`<div>Kelurahan: <strong>${item.name}</strong></div>`).appendTo(ul);
            };
        }

        if ($("#golongan_darah").length) {
            $("#golongan_darah").autocomplete({
                source: async function (request, response) {
                    if (request.term.length < 1) return;

                    LoadingInput('loading', 'golongan_darah');

                    try {
                        const { datas } = await $.ajax({
                            url: `/api/search?get_data=golongan_darah`,
                            data: { q: request.term },
                        });

                        LoadingInput('idle', 'golongan_darah');
                        response(datas.length ? datas : [{ name: 'Data tidak ditemukan', id: '' }]);
                    } catch (error) {
                        console.dir("error", error);
                        LoadingInput('idle', 'golongan_darah');
                        response([{ name: 'Data tidak ditemukan', id: '' }]);
                    }
                },
                minLength: 1,
                focus: function (_, ui) {
                    if (ui.item.id) {
                        $("#golongan_darah").val(ui.item.name);
                        $("#id_golongan_darah").val(ui.item.id);
                    }
                    return false;
                },
                select: function (_, ui) {
                    if (ui.item.id) {
                        $("#golongan_darah").val(ui.item.name);
                        $("#id_golongan_darah").val(ui.item.id);
                    }
                    return false;
                }
            }).autocomplete("instance")._renderItem = function (ul, item) {
                return $("<li>").append(`<div>Golongan Darah: <strong>${item.name}</strong></div>`).appendTo(ul);
            };
        }
    });
}

function SetUmur() {
    const currentDate = moment();
    const birthDate = moment("11-07-2000", "DD-MM-YYYY");

    $(`#txtUmur`).html(`umur ${currentDate.diff(birthDate, 'years')} tahun`);
    $(`#txtTTL`).html(`<i class="fa-solid fa-cake-candles"></i> bandar lampung, ${birthDate.format("DD MMMM YYYY")}`);
}

function setDurasiKerja() {
    const currentDate = moment();
    const tglKerja1 = moment("29-04-2024", "DD-MM-YYYY");
    $(`#tglKerja1`).html(`<i class="fa-solid fa-calendar-days"></i> ${tglKerja1.format("DD MMM YYYY")} - Now`);

    const $tahunKerja1 = currentDate.diff(tglKerja1, 'years');
    tglKerja1.add($tahunKerja1, 'years');
    const $bulanKerja1 = currentDate.diff(tglKerja1, 'months');
    tglKerja1.add($bulanKerja1, 'months');
    const $hariKerja1 = currentDate.diff(tglKerja1, 'days');
    tglKerja1.add($hariKerja1, 'days');

    let $txtDurasiKerja = (IsValidVal($tahunKerja1) ? `${$tahunKerja1} Thn ` : "");
    $txtDurasiKerja += (IsValidVal($bulanKerja1) ? `${$bulanKerja1} Bln ` : "");
    $txtDurasiKerja += (IsValidVal($hariKerja1) ? `${$hariKerja1} Hari` : "");

    $(`#durasiKerja1`).html(`<i class="fa-solid fa-clock"></i> ${$txtDurasiKerja}`);

    const startTglKerja2 = moment("18-08-2023", "DD-MM-YYYY");
    const endTglKerja2 = moment("18-10-2023", "DD-MM-YYYY");
    $(`#tglKerja2`).html(`<i class="fa-solid fa-calendar-days"></i> ${startTglKerja2.format("DD MMM YYYY")} - ${endTglKerja2.format("DD MMM YYYY")}`);

    const $tahunKerja2 = endTglKerja2.diff(startTglKerja2, 'years');
    startTglKerja2.add($tahunKerja2, 'years');
    const $bulanKerja2 = endTglKerja2.diff(startTglKerja2, 'months');
    startTglKerja2.add($bulanKerja2, 'months');
    const $hariKerja2 = endTglKerja2.diff(startTglKerja2, 'days');
    startTglKerja2.add($hariKerja2, 'days');

    $txtDurasiKerja = (IsValidVal($tahunKerja2) ? `${$tahunKerja2} Thn ` : "");
    $txtDurasiKerja += (IsValidVal($bulanKerja2) ? `${$bulanKerja2} Bln ` : "");
    $txtDurasiKerja += (IsValidVal($hariKerja2) ? `${$hariKerja2} Hari` : "");

    $(`#durasiKerja2`).html(`<i class="fa-solid fa-clock"></i> ${$txtDurasiKerja}`);

    const startTglKerja3 = moment("02-2017", "MM-YYYY");
    const endTglKerja3 = moment("05-2017", "MM-YYYY");
    $(`#tglKerja3`).html(`<i class="fa-solid fa-calendar-days"></i> ${startTglKerja3.format("DD MMM YYYY")} - ${endTglKerja3.format("DD MMM YYYY")}`);

    const $tahunKerja3 = endTglKerja3.diff(startTglKerja3, 'years');
    startTglKerja3.add($tahunKerja3, 'years');
    const $bulanKerja3 = endTglKerja3.diff(startTglKerja3, 'months');
    startTglKerja3.add($bulanKerja3, 'months');
    const $hariKerja3 = endTglKerja3.diff(startTglKerja3, 'days');
    startTglKerja3.add($hariKerja3, 'days');

    $txtDurasiKerja = (IsValidVal($tahunKerja3) ? `${$tahunKerja3} Thn ` : "");
    $txtDurasiKerja += (IsValidVal($bulanKerja3) ? `${$bulanKerja3} Bln ` : "");
    $txtDurasiKerja += (IsValidVal($hariKerja3) ? `${$hariKerja3} Hari` : "");

    $(`#durasiKerja3`).html(`<i class="fa-solid fa-clock"></i> ${$txtDurasiKerja}`);
}