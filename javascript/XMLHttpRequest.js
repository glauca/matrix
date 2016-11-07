/**
 * {@see https://developer.mozilla.org/en-US/docs/Web/API/XMLHTTPRequest}
 */

var xhr = null;

try {
    xhr = new XMLHttpRequest();
} catch (e) {
    try {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
}

var method = 'GET',
    url = 'http://www.baidu.com';
xhr.open(method, url, true);

xhr.timeout = 2000;
xhr.ontimeout = function(e) {
    // XMLHttpRequest timed out. Do something here.
};

/**
 * "" (default value), "arraybuffer", "blob", "document", "json", or "text"
 */
xhr.responseType = 'json';

xhr.overrideMimeType('text/html');
xhr.setRequestHeader('Content-Type', 'application/text');
xhr.setRequestHeader("X-Requested-With", 'XMLHttpRequest');

xhr.onreadystatechange = function() {
    /**
     * 0 UNSENT Client has been created. open() not called yet.
     * 1 OPENED open() has been called.
     * 2 HEADERS_RECEIVED send() has been called, and headers and status are available.
     * 3 LOADING Downloading; responseText holds partial data.
     * 4 DONE The operation is complete.
     */
    if (xhr.readyState == 2) {
        console.log(xhr.getResponseHeader("Content-Type"));
        console.log(xhr.getAllResponseHeaders());
    }

    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.response);
        console.log(xhr.responseText);
        console.log(xhr.statusText);
    }
};

xhr.withCredentials = false;

/**
 * {@see https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started#Step_1_%E2%80%93_How_to_make_an_HTTP_request}
 * {@see https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started#Step_5_%E2%80%93_Working_with_data}
 */
xhr.send(null);

/**
 * {@see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Using_nothing_but_XMLHttpRequest}
 *
 * An html <form> can be sent in four ways:
 *
 *     using the POST method and setting the enctype attribute to application/x-www-form-urlencoded (default);
 *     using the POST method and setting the enctype attribute to text/plain;
 *     using the POST method and setting the enctype attribute to multipart/form-data;
 *     using the GET method (in this case the enctype attribute will be ignored).
 */