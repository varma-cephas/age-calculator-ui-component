const calculateAgeButton = document.querySelector("#line-button img");
const dayInput = document.querySelector(".day-field");
const monthInput= document.querySelector(".month-field");
const yearInput = document.querySelector(".year-field");

const tellAgeYears = document.querySelector("#ageYears");
const tellAgeMonths = document.querySelector("#ageMonths");
const tellAgeDays = document.querySelector("#ageDays");

function getCurrentDayInYear(date){
    return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
}

function findAge(brithYear){
    const age = new Date().getFullYear()- brithYear
    return age
}

function findMonthOld(birthMonth){
    const currentMonth = new Date().getMonth() + 1;
    const monthOld = currentMonth - birthMonth;
    return Math.abs(monthOld)
}

function findDayOld(){
    const dayOld = getCurrentDayInYear(new Date(yearInput.value, monthInput.value, dayInput.value)) - 365;
    return Math.abs(dayOld);
}


calculateAgeButton.addEventListener("click",()=>{
    if(yearInput.value === "" || yearInput.value >= new Date().getFullYear()){
        alert("enter a valid year")
    }else{
        const currentAge = findAge(yearInput.value)
        tellAgeYears.innerHTML = currentAge;
    }
    if(monthInput.value === "" || monthInput.value > 12){
        alert("enter a valid month")
    }else{
        const currentMonthOld = findMonthOld(Number(monthInput.value));
        tellAgeMonths.innerHTML = currentMonthOld;
    }
    if(dayInput.value <= 0 || dayInput.value > 31){
        alert("enter a valid day")
    }else{
        const currentDayOld = findDayOld();
        tellAgeDays.innerHTML = currentDayOld;
    }
})
