function getYmid() {
    try {
        return new URL(location.href).searchParams.get('ymid');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
function getVar() {
    try {
        return new URL(location.href).searchParams.get('var');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
self.options = {
    "domain": "woudaufe.net",
    "resubscribeOnInstall": true,
    "zoneId": 6224936,
    "ymid": getYmid(),
    "var": getVar()
}
self.lary = "";
importScripts('https://woudaufe.net/pfe/current/sw.perm.check.min.js?r=sw');
