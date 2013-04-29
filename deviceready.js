;(function($){
    window.cordova = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
    if(window.cordova === false) {
        $(function() {
            $(document).trigger('deviceready');
        });
    }
})(Zepto);