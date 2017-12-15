function orderTemplate(img, menuname, qty, unitprice){
    var template = '<div class="media">' +
        '<div class="media-left"><img src="' + img + '" alt=""></div>' +
        '<div class="media-body">' +
            '<h4 class="media-heading">' + menuname + '</h4>' +
            'Quanity: <span>' + qty + '</span><br>' +
            'Unit Price: <span>S$' + unitprice + '</span><br>' +
        '</div>' +
    '</div>';
    return template;
}