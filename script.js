

function addFoods(){
    var foodName = $('#foodname').val();
    var definition = $('#definition').val();
    var purchaseDate = $('#purchasedate').val();
    var expirationDate = $('#expirationdate').val();


    $('#foodname').val('');
    $('#definition').val('');
    $('#purchasedate').val('');
    $('#expirationdate').val('');

    var unixExpiration = Date.parse(expirationDate);
    var today = new Date();
    var unixToday = Date.parse(today);

    if(unixToday > unixExpiration - 259200000){
        $('#savedFoods').append('<tr style="background-color: red"><td>' + foodName + '</td><td>' + definition + '</td><td>' + purchaseDate + '</td><td>' + expirationDate + '</td></tr>');
    }
    else {
        $('#savedFoods').append('<tr><td>' + foodName + '</td><td>' + definition + '</td><td>' + purchaseDate + '</td><td>' + expirationDate + '</td></tr>');
    }
}


