 const dobValue = document.querySelector("#dob")
 const luckyValue = document.querySelector("#luckyNo")
 const checkBtn = document.querySelector("#check-luck")
 const resultCont = document.querySelector("#result")
 const warningBox = document.querySelector(".warning")
 const crossbtn = document.querySelector("#cut")


 const luckCheck = sum => {
     const luckyNo = Number(luckyValue.value);
     if (sum % luckyNo === 0) {
         resultCont.innerHTML = `
                    <p>Your bday Is Lucky</p>
                    <img style="height: 200px;" src="https://cdn.pixabay.com/photo/2013/07/13/10/27/anniversary-157248_960_720.png" alt="lucky">
                    `

         console.log(`lucky`)

     } else {

         resultCont.innerHTML = `
                <p>Your bday Is Not Lucky</p>
                <img style="height: 200px;" src="https://cdn.pixabay.com/photo/2021/02/22/05/26/employee-6038877_960_720.png" alt="notlucky">
                `
         console.log(`not lucky`)
     }


 }

 const CheckBdayIsLucky = () => {
     const dob = dobValue.value
         //  console.log(dob)
     const sum = CalculateSum(dob)
     luckCheck(sum)
 }

 const CalculateSum = dob => {
     dob = dob.replaceAll("-", "")
     console.log(dob)
     var sum = 0
     for (const digit of dob) {
         sum += Number(digit);
     }
     console.log(sum)
     return sum;
 }

 checkBtn.addEventListener('click', CheckBdayIsLucky);
 crossbtn.addEventListener('click', () => {
     warningBox.style.display = "none"
 });
