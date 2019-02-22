function getCookieByName(name) {
	var arr = document.cookie.split("; ");
	for(var i = 0; i < arr.length; i++) {
		newarr = arr[i].split("=");
		if(newarr[0] == name) {
			return newarr[1]
		}
	}
}

function setCookie(key, value, expiresDate) {

	var oDate = new Date();
	oDate.setDate(oDate.getDate() + expiresDate)
	document.cookie =
		key + "=" +
		value +
		";expires=" +
		oDate
}

function removeCookie(key) {
	setCookie(key, "", -1)
}