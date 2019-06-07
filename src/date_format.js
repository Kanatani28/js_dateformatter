Date.prototype.DAY_OF_WEEK_STR_LIST = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
Date.prototype.DAY_OF_WEEK_STR_SHORT_LIST = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
Date.prototype.DAY_OF_WEEK_STR_JP_LIST = ["日", "月", "火", "水", "木", "金", "土"];

Date.prototype.getDayOfWeekStr = function() {
    return this.DAY_OF_WEEK_STR_LIST[this.getDay()];
}

Date.prototype.getDayOfWeekShortStr = function() {
    return this.DAY_OF_WEEK_STR_SHORT_LIST[this.getDay()];
}

Date.prototype.getDayOfWeekStrJP = function() {
    return this.DAY_OF_WEEK_STR_JP_LIST[this.getDay()];
}

Date.prototype.getFormattedDate = function(formatString) {

    formatString = formatString.replace(/yyyy/g, this.getFullYear());
    formatString = formatString.replace(/MM/g, ("0" + (this.getMonth() + 1)).slice(-2));
    formatString = formatString.replace(/dd/g, ("0" + this.getDate()).slice(-2));
    formatString = formatString.replace(/HH/g, ("0" + this.getHours()).slice(-2));
    formatString = formatString.replace(/mm/g, ("0" + this.getMinutes()).slice(-2));
    formatString = formatString.replace(/ss/g, ("0" + this.getSeconds()).slice(-2));

    formatString = formatString.replace(/yy/g, ("" + this.getFullYear()).slice(-2));
    formatString = formatString.replace(/M/g, this.getMonth() + 1);
    formatString = formatString.replace(/d/g, this.getDate());
    formatString = formatString.replace(/H/g, this.getHours());
    formatString = formatString.replace(/m/g, this.getMinutes());
    formatString = formatString.replace(/s/g, this.getSeconds());

    formatString = formatString.replace(/JPE/g, this.getDayOfWeekStrJP());
    formatString = formatString.replace(/e/g, this.getDayOfWeekShortStr());
    formatString = formatString.replace(/E/g, this.getDayOfWeekStr());

    return formatString;
}