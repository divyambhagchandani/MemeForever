function getRandomInt(min , max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://www.reddit.com/r/dankmemes/top.json", false);
xhr.send();
var data = xhr.responseText;
data = data.replace(/^[^(]*\(([\S\s]+)\);?$/, '$1');
data = JSON.parse(data);
s = data['data']['children'][getRandomInt(0,20)]['data']['url'];
a = getRandomInt(0 , document.getElementsByTagName('p').length-1);
i = document.createElement('img');
i.src=s;
document.getElementsByTagName('p')[a].appendChild(i)