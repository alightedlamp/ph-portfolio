function getEntries(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("Get", url, true);
    xmlHttp.send(null);
}

url = "https://public-api.wordpress.com/rest/v1.1/sites/painterprogramming.wordpress.com/posts/";