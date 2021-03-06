function randomSelect(...arr) {
	if(!arr || arr.length === 0) throw new Error("Array / Text ?");
	if(typeof arr[0] === "object") arr = arr[0];
	return arr[Math.floor(Math.random() * arr.length)];
}

function randomPass(length = 8) {
	let r = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789";
	let out = "";
	for(let i = 1; i <= length; i++) {
		out += r[Math.floor(Math.random() * r.length)];
	};
	if(length <= 0) return randomPass(8);
	return out;
}

function randomUID(length = 5) {
	let r = "0123456789";
	let out = "";
	for(let i = 1; i <= length; i++) {
		out += r[Math.floor(Math.random() * r.length)];
	};
	if(length <= 0) return randomUID(5);
	return out;
}

function randomPh() {
	let awal = ["857", "823", "831"];
	let n = ["8341", "5245", "4137"];
	let n2 = ["7029", "9384", "4917"];
	let outN = `${randomSelect(awal)}-${randomSelect(n)}-${randomSelect(n2)}`
	let out = `0${outN.split("-").join("")}\n+62 ${outN}\nhttps://wa.me/62${outN.split("-").join("")}`;
	return out;
}

function isString(text) {
	return typeof(text) == "string";
}

function isNotString(text) {
	return typeof(text) != "string";
}

function isNotNumber(n) {
	return typeof(n) != "number";
}

function isNumber(n) {
	return typeof(n) == "number";
}

function wame(n, text) {
	if(n == undefined) return !1
	let phone = n.split("+").join("").split(" ").join("").split("-").join("");
	phone = phone.startsWith("08") ? phone.replace("08", "62") : phone;
	let url = text != undefined ? `https://wa.me/${phone}?text=${encodeURIComponent(text)}` : `https://wa.me/${phone}`;
	return url;
}

function find(word, on, result = false) {
	if(result) return (on || "").substr((on || "").indexOf((word || "")));
	if(!result) return (on || "").indexOf((word || ""));
}

function isEven(num) {
	return isNaN(num) ? "Error" : num % 2 === 0;
}

function isOdd(num) {
	return isNaN(num) ? "Error" : num % 2 === 1;
}

function getAge(ttl) {
	let [th, bl, tg] = ttl.split("-");
	let [thn, bln, tgl] = [new Date().getFullYear(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12][new Date(). getMonth()], new Date().getDate()];
	
	if(tgl >= tg && bln >= bl) return thn - th;
	else return thn - th - 1;
}

function parseRegex(...args) {
	let tmp = "";
	for(let string of args) {
		if(string != args[args.length - 1]) {
			tmp += string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&') + "|";
		} else {
			tmp += string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'); // |
		}
	}
	return tmp;
}

function genHTML(wn = "(Name)", js, css, cnt) {
	let out = "";
		out += "<!DOCTYPE html>" +
		"\n<html>" +
		"\n  <head>" +
		(js ? "\n    <script src=\"" + js + "\"></script>" : "") +
		(css ? "\n    <link rel=\"stylesheet\" href=\"" + css + "\">" : "") +
		"\n    <title>" + wn + "</title>" +
		"\n  </head>" +
		"\n  <body>" +
		"\n    <h1>" + wn + "</h1>" +
		"\n    <hr>" +
		(cnt ? "\n    " + (cnt.split(`
`).join("\n    ")) : "") +
		"\n  </body>" +
		"\n</html>";
	return out;
}

function Kerang() {
	this.apakah = function(text) {
		let jawaban = ["Iya", "Tidak", "Mungkin", "Mungkin Iya", "Mungkin Tidak", "Coba Tanya Lagi"][Math.floor(Math.random() * 6)];
		return jawaban;
	};
	this.kapankah = function(text) {
		let jawaban = ["Besok", "2 Hari Lagi", "10 Hari Lagi", "Tahun depan", new Date().getFullYear() + 3, new Date().getFullYear() + 5, new Date().getFullYear() + 2][Math.floor(Math.random() * 7)];
		return jawaban;
	}
}

function hk(digit = 4) {
	digit = digit * 1; // Number(digit)
	if(digit <= 0) return hk(digit + 2);
	if(digit != 2 && digit != 4 && digit != 6) return hk(digit - 1);
	let out = String(Math.floor(Math.random() * (digit === 2 ? 99 : digit === 4 ? 9999 : digit === 6 ? 999999 : 0)));
	return !((out.length != 2) && (out.length != 4) && (out.length != 6)) ? out : hk(digit);
}

function chck(code) {
	code = (code || ";").split(`
`);
	for(let i of code) {
		if(!i.endsWith(";") && !i.endsWith("}") && !i.endsWith(")") && !i.endsWith("{") && !i.endsWith("(") && !i.endsWith("`")) {
			return "Error in:\n\n" + i;
		}
	}
	return "Nothing";
}

function levenshtein(value, other, insensitive) {
	let length;
	let lengthOther;
	let code;
	let result;
	let distance;
	let distanceOther;
	let index;
	let indexOther;
	let codes = {};
	let cache = {};

	if (value === other) {
		return 0;
	}

	length = value.length;
	lengthOther = other.length;

	if (length === 0) {
		return lengthOther;
	}

	if (lengthOther === 0) {
		return length;
	}

	if (insensitive) {
		value = value.toLowerCase();
		other = other.toLowerCase();
	}

	index = 0;

	while (index < length) {
		codes[index] = value.charCodeAt(index);
		cache[index] = ++index;
	}

	indexOther = 0;

	while (indexOther < lengthOther) {
		code = other.charCodeAt(indexOther);
		result = distance = indexOther++;
		index = -1;

		while (++index < length) {
			distanceOther = code === codes[index] ? distance : distance + 1;
			distance = cache[index];
			cache[index] = result =
				distance > result
					? distanceOther > result
						? result + 1
						: distanceOther
					: distanceOther > distance
					? distance + 1
					: distanceOther;
		}
	}

	return result;
}

function similarity(a, b, insensitive = false) {
	let left = a || '';
	let right = b || '';
	//let insensitive = !(options || {}).sensitive;
	let longest = Math.max(left.length, right.length);

	return longest === 0 ? 1 : (longest - levenshtein(left, right, !insensitive)) / longest;
}

function User(fullname, yob, soulmate) {
	yob = (yob || "9999-99-99").split("-");
	if(!fullname || !fullname.length > 0) return console.log("Full Name?");
	if((yob && yob[0] === "9999") || (yob && yob.length < 3) || !(yob)) return console.log("Year Of Birth? (2000-05-13)");
	
	let name = (fullname.startsWith("Muhammad") ? fullname.split(" ")[1] : fullname.split(" ")[0])
	
	this.fname = fullname;
	this.name = name;
	this.yob = yob;
	this.age = getAge(yob.join("-"));
	((this.smate = soulmate) || "");
}
