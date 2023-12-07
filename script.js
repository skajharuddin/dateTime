setInterval(time, 1000);

// for adding 0 before decimal number
function decimal(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

function button12h() {
  if (hour > 12 && hour == 23) {
    hour = hour - 12;
  }
};

function time() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  //   // console.log(typeof hour);
  //   if (hour > 12 && hour == 23) {
  //     hour = hour - 12;
  //   } else if (hour == 0o0) {
  //     //0o0 denotes 00.
  //     hour = 12;
  //   }
  let clock = `${decimal(hour)}:${decimal(minute)}:${decimal(second)}`;
  currentTime.innerText = clock;
}

// getting date
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

// printing date
let today = `${decimal(day)}/${decimal(month + 1)}/${year}`;
console.log(today);
todayDate.innerText = today;
