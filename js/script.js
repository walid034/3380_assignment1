let data;

const jsondata = fetch("js/data.json")
  .then((response) => response.json())
  .then((results) => {
    return results.results;
  });

const readJSON = async () => {
  const a = await jsondata;
  data = a;
};

readJSON();

function getUserNumber() {
    document.body.innerHTML =  document.body.innerHTML.replace('TotalUserCount', data.length);
}

let userslist = document.getElementsByClassName('contact-list');

var obj;

fetch('js/data.json')
  .then(res => res.json())
  .then(data => {
    obj = data;
   })
  .then(() => {
    console.log(obj);
   });

console.log(obj);

for (let i=0; i<obj.length; i++) {
    let li = document.createElement("li");
    li.className = "contact-item cf";
    li.innerHTML = `<div class="contact-details">
                        <img class="avatar" src=${data[i]['picture']['thumbnail']}>
                        <h3>${data[i]['name']['first']}+" "+${data[i]['name']['last']}</h3>
                        <span class="email">${data[i]['email']}</span>
                    </div>
                    <div class="joined-details">
                        <span class="date">Joined ${data[i]['registered']['date']}</span>
                    </div>`;
    userslist.appendChild(li);
};