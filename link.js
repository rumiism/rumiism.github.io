// JSON taken from: https://reqres.in/api/users/1
var user = {
    "data": {
        "id": 1,
        "first_name": "mister",
        "last_name": "fish",
        "avatar": "http://www.bigshocking.com/wp-content/uploads/2014/10/The-Leviathan.jpg"
    }
};

// From HTML line 13: <div class="panel-body" id="user-list">
var userList = document.getElementById("user-list");

/* We want to generate a HTML template based on the user data, and append it to the userList */
//TODO in line __ write: userList.innerHTML += userTemplate(user.data.first_name, user.data.last_name, user.data.avatar);
userList.innerHTML += userTemplate(user.data.first_name, user.data.last_name, user.data.avatar);


/* This helper function generates the bootstrap template based on the parameters
 * fname: first name
 * lname: last name
 * imgUrl: src url for the avatar image */
function userTemplate(fname, lname, imgUrl){
    var template = '<div class="media">' +
        '<div class="media-left"><img src=' + imgUrl +'></div>' +
        '<div class="media-body">' +
        '<h4 class="media-heading">' + fname + ' ' +  lname + '</h4>' +
        'description</div></div>';
    return template;
}