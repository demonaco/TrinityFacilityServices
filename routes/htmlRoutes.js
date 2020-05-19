var path = require('path');

module.exports = function(app) {
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});


app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"))
});

app.get("/services", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/services.html"))
});

app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/aboutUs.html"))
});

app.get("/facilities", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/facilities.html"))
});

}