export default function () {
    String.prototype.capitalize = function(){
        return this.toLowerCase().replace( /\b\w/g, function (m) {
            return m.toUpperCase();
        });
    };
};