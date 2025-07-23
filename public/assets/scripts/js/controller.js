const base_url = window.location.host;
const [host, port] = base_url.split(':');
const $base_url = (IsValidVal(port) ? `http://${host}:${port}` : `https://${host}/mycv`);

tailwind.config = {
	theme: {
		extend: {
			colors: {
				// Blue
				primary: {
					DEFAULT: "#4e73df",
					light: "#5a86e5",
					dark: "#3c5bb5",
				},
				// Green
				success: {
					DEFAULT: "#198754",
					light: "#23a062",
					dark: "#146c43",
				},
				// Light Blue
				info: {
					DEFAULT: "#36b9cc",
					light: "#4fc8da",
					dark: "#2a93a2",
				},
				// Yellow
				warning: {
					DEFAULT: "#f6c23e",
					light: "#f8d267",
					dark: "#d4a533",
				},
				// Red
				danger: {
					DEFAULT: "#e74a3b",
					light: "#ee5c4c",
					dark: "#c83f35",
				},
			},
		}
	}
}

$(document).ready(function () {
    $.getScript(`${$base_url}/public/assets/scripts/js/functions.js`, async function () {
        SetUmur();
        setDurasiKerja();
        DisableRightClickOnMouse();
    });

    $("#loadingAjax").hide();
    $("#loadingContetLoader").hide();
});

(async function () {
    LoadingNotify("Sedang memuat data", "info", true, true);
    await $.ajax({
        type: "GET",
        url: `${$base_url}/public/assets/pages/cv.html`,
        success: function (res) {
            $("#content_container").html(res);
            LoadingNotify("Berhasil memuat data", "info", false, true);
        }
    });
})();

function LoadingNotify($msg, $section, $isElmentShow, $isContentLoader) {
    if ($section == "success") {
        toastr.success($msg, "Berhasil!");
    }

    if ($section == "error") {
        toastr.error($msg, "Kesalahan!");
    }

    if ($section == "warning") {
        toastr.warning($msg, "Peringatan!");
    }

    if ($section == "info") {
        toastr.info($msg, "Informasi!");
    }

    if ($isContentLoader) {
        if ($isElmentShow) {
            $('#loadingContetLoader').show();
        } else {
            $('#loadingContetLoader').hide();
        }
    } else {
        if ($isElmentShow) {
            $('#loadingAjax').show();
        } else {
            $('#loadingAjax').hide();
        }
    }
}

function AllNotify($msg, $section) {
    if ($section == "success") {
        Swal.fire({
            title: "Berhasil!",
            html: $msg,
            icon: "success",
            confirmButtonColor: "#3085d6",
        })
        toastr.success($msg, "Berhasil!");
    }

    if ($section == "error") {
        Swal.fire({
            title: "Kesalahan!",
            html: $msg,
            icon: "error",
            confirmButtonColor: "#3085d6",
        })
        toastr.error($msg, "Kesalahan!");
    }

    if ($section == "warning") {
        Swal.fire({
            title: "Peringatan!",
            html: $msg,
            icon: "warning",
            confirmButtonColor: "#3085d6",
        })
        toastr.warning($msg, "Peringatan!");
    }

    if ($section == "info") {
        Swal.fire({
            title: "Sekilas Info!",
            html: $msg,
            icon: "info",
            confirmButtonColor: "#3085d6",
        })
        toastr.info($msg, "Sekilas Info!");
    }
}

function getVarValue(val, key = null, defaultVal = null) {
    let tmpVal = key !== null && val && typeof val === 'object' && val[key] != null && val[key] !== '' ? val[key] : defaultVal;
    tmpVal = (key === null && val !== '' ? val : tmpVal);

    return typeof tmpVal === 'string' ? tmpVal.trim() : tmpVal;
}

function IsValidVal(val, key = null, mode = 'bool', other = null) {
    const tmp = getVarValue(val, key, other);
    return {
        value: tmp,
        equal: tmp == other,
        bool: tmp != null && tmp !== ''
    }[mode];
}

function isValEqual(val, key = null, value) {
    return getVarValue(val, key) == value;
}

function valNotEmpty(val, key = null) {
    const tmp = getVarValue(val, key);
    return tmp != null && tmp !== '';
}