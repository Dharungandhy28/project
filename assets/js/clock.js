function updateclock(){
    var now = new Date();
    var dname = now.getDay(),
     mo = now.getMonth(),
     dnumber = now.getDate(),
     year = now.getFullYear(),
     hour = now.getHours(),
     min = now.getMinutes(),
     sec = now.getSeconds(),
     period = "AM";

    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
        period = "PM";
    }

    Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }


    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynumber", "year", "hour", "minutes", "seconds", "period"];
    // console.log(weeks[dname]);
    var values = [weeks[dname], months[mo], dnumber.pad(2), year, hour.pad(2), min.pad(2), sec.pad(2), period];
    // console.log(values);
    for(var i=0; i < ids.length; i++){
    document.getElementById(ids[i]).innerText = values[i];
    }
    

}

function initclock(){
    updateclock();
    window.setInterval("updateclock()", 1);
}