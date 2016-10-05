$(document).ready(function(){
    var mConsole = $('#console');

    $('#postReq').click(function(){
        mConsole.prepend('<br>');
        mConsole.prepend('<b>Client:</b> Sending a post request to /data <br>');

        $.post('/data', function(data){
            mConsole.prepend('<b>Client:</b> Recieved a response to a post request<br>');
            mConsole.prepend('<b>Server:</b> ' + data + ' <br>');
        });
    });

    $('#getReq').click(function(){
        mConsole.prepend('<br>');
        mConsole.prepend('<b>Client:</b> Sending a post request to /data <br>');
        
        $.get('/data', function(data){
            mConsole.prepend('<b>Client:</b> Recieved a response to a post request<br>');
            mConsole.prepend('<b>Server:</b> ' + data + ' <br>');
        });
    });

    $('#urlReq').click(function(){
         mConsole.prepend('<br>');
        var url = $('#url').val();
        mConsole.prepend('<b>Client:</b> Sending a post request to /'+url+' <br>');
        
        $.post('/' + url, function(data){
            mConsole.prepend('<b>Client:</b> Recieved a response to a post request<br>');
            
            mConsole.prepend(' <br>');
            mConsole.prepend(document.createTextNode(data));
            mConsole.prepend('<b>Server:</b> ');
        });
    });

});