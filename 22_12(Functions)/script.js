const q1n1 = document.querySelector("#q1n1");
const q1n2 = document.querySelector("#q1n2");
const q2n1 = document.querySelector("#q2n1");
const q2n2 = document.querySelector("#q2n2");
const q2n3 = document.querySelector("#q2n3");
const q3year = document.querySelector("#q3year");
const res1 = document.querySelector("#ans1");
const res2 = document.querySelector("#ans2");
const cont_3 = document.querySelector("#cont_3");

function Greatest_A_2() {
  const num1 = q1n1.value;
  const num2 = q1n2.value;
  if (num1 > num2) {
    res1.innerHTML = `${num1} is Greater`;
  } else {
    res1.innerHTML = `${num2} is Greater`;
  }
}

const Greatest_A_3 = () => {
  const num1 = q2n1.value;
  const num2 = q2n2.value;
  const num3 = q2n3.value;
  if (num1 > num2 && num1 > num3) {
    res2.innerHTML = `${num1} is Greater`;
  } else if (num2 > num1 && num2 > num3) {
    res2.innerHTML = `${num2} is Greater`;
  } else {
    res2.innerHTML = `${num3} is Greater`;
  }
};

const Is_Leap_Year = function () {
  const year = Number(q3year.value);
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    cont_3.style.backgroundColor = "#90EE90";
  } else {
    cont_3.style.backgroundColor = "#FFCCCB";
  }
};
