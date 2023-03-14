var cityCode;
var apikey = "bd2ebdf12e3d42e783c9e26fdebcc919";
var data;
var flag = false;
var theTip;
const udt = document.querySelector("#updatetime");
const date = document.querySelector("#date");
const sr = document.querySelector("#sunrise");
const ss = document.querySelector("#sunset");
const mr = document.querySelector("#moonrise");
const ms = document.querySelector("#moonset");
const mp = document.querySelector("#moonphase");
const tmax = document.querySelector("#tempmax");
const tmin = document.querySelector("#tempmin");
const wead = document.querySelector("#weatherday");
const wean = document.querySelector("#weathernight");
const wdd = document.querySelector("#winddirday");
const wsd = document.querySelector("#windscaleday");
const wdn = document.querySelector("#winddirnight");
const wsn = document.querySelector("#windscalenight");
const tip = document.querySelector("#tips");
const bgimg = document.querySelector("#forecastSpace");

function getSubmit() {
    cityCode = document.getElementById("searchCity").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://devapi.qweather.com/v7/weather/7d?location="
        + cityCode + "&key=" + apikey, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = JSON.parse(xhr.responseText);
            flag = true;
            weatherDisplay(0);
        }
    }
}

function weatherDisplay(day) {
    udt.innerHTML = data.updateTime;
    date.innerHTML = data['daily'][day]['fxDate'];
    sr.innerHTML = data['daily'][day]['sunrise'];
    ss.innerHTML = data['daily'][day]['sunset'];
    mr.innerHTML = data['daily'][day]['moonrise'];
    ms.innerHTML = data['daily'][day]['moonset'];
    mp.innerHTML = data['daily'][day]['moonPhase'] + " " +
        "<img src='./icons/" + data['daily'][day]['moonPhaseIcon'] + ".svg' style='width:30px;height:30px'>";;
    tmax.innerHTML = data['daily'][day]['tempMax'] + "℃";
    tmin.innerHTML = data['daily'][day]['tempMin'] + "℃";
    wead.innerHTML = data['daily'][day]['textDay'] + " " +
        "<img src='./icons/" + data['daily'][day]['iconDay'] + ".svg' style='width:30px;height:30px'>";
    wean.innerHTML = data['daily'][day]['textNight'] + " " +
        "<img src='./icons/" + data['daily'][day]['iconNight'] + ".svg' style='width:30px;height:30px;color:white;'>";;
    wdd.innerHTML = data['daily'][day]['windDirDay'];
    wsd.innerHTML = data['daily'][day]['windScaleDay'] + "级";
    wdn.innerHTML = data['daily'][day]['windDirNight'];
    wsn.innerHTML = data['daily'][day]['windScaleNight'] + "级";
    if (data['daily'][day]['textDay'].includes('晴')) {
        tip.innerHTML = '心情如今天的天一样晴朗！';
        bgimg.style.backgroundImage = "url(./pictures/sunny.jpg)";
        bgimg.style.backgroundSize = "100%";
        bgimg.style.backgroundRepeat = "no-repeat";
    }
    else if (data['daily'][day]['textDay'].includes('雾')||data['daily'][day]['textDay'].includes('霾')) {
        tip.innerHTML = '雾霾来袭，请注意防护！';
        bgimg.style.backgroundImage = "url(./pictures/foggy.jpg)";
        bgimg.style.backgroundSize = "100%";
        bgimg.style.backgroundRepeat = "no-repeat";
    }
    else if(data['daily'][day]['textDay'].includes('雨')) {
        tip.innerHTML = '随风潜入夜，润物细无声。';
        bgimg.style.backgroundImage = "url(./pictures/rainy.jpg)";
        bgimg.style.backgroundSize = "100%";
        bgimg.style.backgroundRepeat = "no-repeat";
    }
    else if(data['daily'][day]['textDay'].includes('雪')) {
        tip.innerHTML = '可以去玩雪啦！';
        bgimg.style.backgroundImage = "url(./pictures/snowy.jpg)";
        bgimg.style.backgroundSize = "100%";
        bgimg.style.backgroundRepeat = "no-repeat";
    }
    else if(data['daily'][day]['textDay'].includes('阴')) {
        tip.innerHTML = '今天也要保持好心情哦！';
        bgimg.style.backgroundImage = "url(./pictures/overcastsky.jpg)";
        bgimg.style.backgroundSize = "100%";
        bgimg.style.backgroundRepeat = "no-repeat";
    }
    else if(data['daily'][day]['textDay'].includes('多云')) {
        tip.innerHTML = '今天也要保持好心情哦！';
        bgimg.style.backgroundImage = "url(./pictures/cloudy.jpg)";
        bgimg.style.backgroundSize = "100%";
        bgimg.style.backgroundRepeat = "no-repeat";
    }
    else {
        tip.innerHTML = '又是美好的一天呢！';
    }
}

function day1Color() {
    if (flag) {
        weatherDisplay(0);
    }
}

function day2Color() {
    if (flag) {
        weatherDisplay(1);
    }
}

function day3Color() {
    if (flag) {
        weatherDisplay(2);
    }
}

function day4Color() {
    if (flag) {
        weatherDisplay(3);
    }
}

function day5Color() {
    if (flag) {
        weatherDisplay(4);
    }
}

function day6Color() {
    if (flag) {
        weatherDisplay(5);
    }
}

function day7Color() {
    if (flag) {
        weatherDisplay(6);
    }
}