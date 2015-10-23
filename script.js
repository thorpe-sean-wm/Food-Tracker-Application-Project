

function addFoods(){
    var foodName = $('#foodname').val();
    var definition = $('#definition').val();
    var purchaseDate = $('#purchasedate').val();
    var expirationDate = $('#expirationdate').val();

    $('#savedFoods').append('<tr><td>' + foodName + '</td><td>' + definition + '</td><td>' + purchaseDate + '</td><td>' + expirationDate + '</td></tr>');

    $('#foodname').val('');
    $('#definition').val('');
    $('#purchasedate').val('');
    $('#expirationdate').val('');
}
