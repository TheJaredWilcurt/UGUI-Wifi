
//Wait for the document to load and for ugui.js to run before running your app's custom JS
$(document).ready( runApp );

//Container for your app's custom JS
function runApp() {






    var WiFiControl = require('wifi-control');

    //  Initialize wifi-control package with verbose output
    WiFiControl.init({
        debug: true
    });

    //  Try scanning for access points:
    WiFiControl.scanForWiFi( function(err, response) {
        if (err) {
            console.log(error);
        }

        if (response.success) {
            for (var i = 0; i < response.networks.length; i++) {
                var ssid        = response.networks[i].ssid;
                var mac         = response.networks[i].mac;
                var signalLevel = response.networks[i].signal_level;
                var channel     = response.networks[i].channel;
                var macId       = mac.split(":").join("").toLowerCase();
                var radioDial   = '<input type="radio" name="network" data-argName="' + macId + '" value="' + ssid + '" />';

                var row =
                  "<tr>" +
                    "<td>" + radioDial   + "</td>" +
                    "<td>" + ssid        + "</td>" +
                    "<td>" + mac         + "</td>" +
                    "<td>" + signalLevel + "</td>" +
                    "<td>" + channel     + "</td>" +
                  "</tr>";

                $("#wifi-list tbody").append(row);
            }
        }
        ugui.helpers.buildUGUIArgObject();
    });

    $("#showpassword").click(function(){
        ugui.helpers.buildUGUIArgObject();
        if (ugui.args.showpassword.htmlticked) {
            $("#password").attr("type","text");
        } else {
            $("#password").attr("type","password");
        }
    });

    $("#connect-button").click(function(e){
        e.preventDefault();

        var radios = $('input[name="network"]');
        var ssid = "";

        for (var i = 0; i < radios.length; i++) {
            if ($(radios[i]).prop("checked")){
                ssid = radios.val();
            }
        }

        ugui.helpers.buildUGUIArgObject();
        var accessPoint = {
            "ssid": ssid,
            "password": ugui.args.password.value
        };
console.log(accessPoint);
        //WiFiControl.connectToAP( accessPoint );

    });



}// end runApp();
