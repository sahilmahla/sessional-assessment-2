const apiUrl = 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09';
var xhttp = new XMLHttpRequest();
function loadPerson(data){
    for(var i=0; i<data.length; i++){
        var person = data[i];
        var randNum = Math.floor(Math.random() * 8) + 1;;

        var personDiv = document.createElement('div');
        personDiv.setAttribute('class', 'person-card');
        // var centerboxDiv = document.createElement('div');
        // centerboxDiv.setAttribute('class', 'contact-box center-version');
        // var anchortag = document.createElement('a');
        // anchortag.setAttribute('href', '#');
        // var personAvatar = document.createElement('img');
        // personAvatar.setAttribute('src', 'https://bootdey.com/img/Content/avatar/avatar1.png');
        // personAvatar.setAttribute('class', 'img-circle');
        // var name = document.createElement('h3');
        
        var personBody = `
        <article class="material-card Red">
        <h2>
            <span>${person.name}</span>
            <strong>
                <i class="fa fa-fw fa-star"></i>
                @${person.username}
            </strong>
        </h2>
        <div class="mc-content">
            <div class="img-container">
                <img
                alt="image"
                class="img-circle"
                src="https://bootdey.com/img/Content/avatar/avatar${randNum}.png"
              />
          
              <address class="m-t-md">
                <strong>${person.email}</strong><br />
                ${person.address.street}, ${person.address.suite}<br />
                ${person.address.city}, ${person.address.zipcode}<br />
                <abbr title="Phone">P:</abbr> ${person.phone}
              </address>
            </div>
            <div class="mc-description">
                <strong>Company Details</strong><br />
                 Name: ${person.company.name}<br />
                 Phrase: ${person.company.catchPhrase}<br />
                BS: ${person.company.bs} <br />
            </div>
        </div>
        <a class="mc-btn-action">
            <i class="fa fa-bars"></i>
        </a>
        <div class="mc-footer">
            <h4>
                Social
            </h4>
            <a class="fa fa-fw fa-phone"></a>
            <a class="fa fa-fw fa-envelope"></a>
            <a class="fa fa-fw fa-solid fa-globe"></a>
      
        </div>
    </article>
        `;

        // var personFooter = `        `;
        // personDiv.appendChild(centerboxDiv);
     //   centerboxDiv.appendChild(anchortag);
        // centerboxDiv.appendChild(personFooter);
        personDiv.innerHTML = personBody;
        document.getElementById('profiles-cont').appendChild(personDiv);
        
    }
}
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
//    document.getElementById("demo").innerHTML = this.responseText;
    var data = JSON.parse(this.responseText);
    loadPerson(data);
    console.log(data);
  }
};
xhttp.open("GET", apiUrl, true);
xhttp.send();


$(function() {
    $('.material-card > .mc-btn-action').click(function () {
        console.log("heelo")
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    });
});