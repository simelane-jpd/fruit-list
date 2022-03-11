const values = ["Grapes 🍇", "Melon 🍈", "Watermelon 🍉", "Tangerine 🍊", "Lemon 🍋", "Banana 🍌", "Pineapple 🍍", "Mango 🥭", "Red Apple 🍎"];

const emojis = [, "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎",];


//add fruits//



const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function () {
  let myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('a');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = '';
  list.appendChild(listItem);

  listBtn.onclick = function (e) {
    list.removeChild(listItem);
  }

  input.focus();

  function emojis(str) {
    var ranges = [
      '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])'
    ];
    if (str.match(ranges.join('|'))) {
      return true;
    } else {
      return false;
    }
  }
}

function ass() {

  let values, i, run, li, stop;


  values = document.getElementById("fruits");
  run = true;
  while (run) {
    run = false;
    li = values.getElementsByTagName("LI");


    for (i = 0; i < (li.length - 1); i++) {
      stop = false;
      if (li[i].innerHTML.toLowerCase() >
        li[i + 1].innerHTML.toLowerCase()) {
        stop = true;
        break;
      }
    }
    if (stop) {
      li[i].parentNode.insertBefore(
        li[i + 1], li[i]);

      run = true;
    }
  }
}

function des() {

  let values, i, run, li, stop;


  values = document.getElementById("values");
  run = true;
  while (run) {
    run = false;
    li = values.getElementsByTagName("LI");
    Array.from(values.children).ass().des().forEach(element => values.appendChild(element));


    for (i = li.length - 1; i >= 0; --i) {
      values.appendChild(li[i]);
      stop = false;
      if (li[i].innerHTML.toLowerCase() >
        li[i + 1].innerHTML.toLowerCase()) {
        stop = true;
        break;
      }
    }
    if (stop) {
      li[i].parentNode.insertBefore(
        li[i + 1], li[i]);

      run = true;
    }
  }
}



//existing fruits search//
function myFruits() {

  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("values");
  li = ul.getElementsByTagName('li');


  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
document.getElementById("container").appendChild(select);





