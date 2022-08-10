const apiUrl = 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09';
var xhttp = new XMLHttpRequest();
function loadPerson(data){
    for(var i=0; i<data.length; i++){
        var person = data[i];
        var randNum = Math.floor(Math.random() * 8) + 1;;

        var personDiv = document.createElement('div');
        personDiv.setAttribute('id', 'person-card');
        var centerboxDiv = document.createElement('div');
        centerboxDiv.setAttribute('class', 'contact-box center-version');
        // var anchortag = document.createElement('a');
        // anchortag.setAttribute('href', '#');
        // var personAvatar = document.createElement('img');
        // personAvatar.setAttribute('src', 'https://bootdey.com/img/Content/avatar/avatar1.png');
        // personAvatar.setAttribute('class', 'img-circle');
        // var name = document.createElement('h3');
        
        var personBody = `
        <a href="#">
            <img
            alt="image"
            class="img-circle"
            src="https://bootdey.com/img/Content/avatar/avatar${randNum}.png"
        />
        <h3 class="m-b-xs"><strong>`+person.name+`</strong></h3>

        <div class="font-bold">`+person.username+`</div>
        <address class="m-t-md">
            <strong>`+person.company.name+`</strong><br />
            `+person.address.street+','+ person.suite+`<br />
            `+person.address.city+' , '+person.address.zipcode+`<br />
            <abbr title="Phone">P:</abbr>`+person.phone+`
        </address>
        </a>
        <div class="contact-box-footer">
        <div class="m-t-xs btn-group">
          <a class="btn btn-xs btn-white"
            ><i class="fa fa-phone"></i> Call
          </a>
          <a class="btn btn-xs btn-white"
            ><i class="fa fa-envelope"></i> Email</a
          >
          <a class="btn btn-xs btn-white"
            ><i class="fa-solid fa-globe"></i> Website</a
          >
        </div>
      </div>
        `;

        var personFooter = `        `;
        personDiv.appendChild(centerboxDiv);
     //   centerboxDiv.appendChild(anchortag);
        // centerboxDiv.appendChild(personFooter);
        centerboxDiv.innerHTML = personBody;
        document.getElementsByClassName('row')[0].appendChild(personDiv);
        
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