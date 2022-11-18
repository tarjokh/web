// Погода
window.onload = function(){
const weather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=702550&appid=bbb8eda2dcab920b23258aace83a56d5')
        .then(function (resp) { return resp.json()})
        .then(function (data) {
            console.log(data);
            // document.querySelector('.celcium').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            // document.querySelector('.w_img').innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png">';
        })
        .catch(function () {

        })
}



const months1 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
//weather();
const renderElements = () =>{


    // Дата
    let date1 = new Date;
    let day = date1.getDate();
    let month = date1.getMonth()+1;
    let day1 = date1.getDay();
    let day2;
    let days = new Array();
    days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    switch (day1){
        case 0:day2 = days[6]; break;
        case 1:day2 = days[0]; break;
        case 2:day2 = days[1]; break;
        case 3:day2 = days[2]; break;
        case 4:day2 = days[3]; break;
        case 5:day2 = days[4]; break;
        case 6:day2 = days[5]; break;
    }
    let p1=document.getElementById('day1');
    let p2=document.getElementById('day_month');



    // Час для блог-посту
    let hours=date1.getHours();
    let minutes=date1.getMinutes();

    ;
    let k='';
    if ((k+minutes).length==1){
        k='0'+minutes;
    }
    else {
        k=minutes
    }



    p1.innerHTML = day2;
    p2.innerHTML = day + ' / ' + month;
    document.querySelector(".blog_time1").innerHTML = months1[date1.getMonth()] +', ' + date1.getDate() + ', '+ date1.getFullYear();
    document.querySelector(".blog_time").innerHTML=hours +  ':' + k;
    document.querySelector(".right-clock-side p").innerHTML=hours +  ':' + k;
    //weather();
}

const online_weather = () => {
    weather();
    let weatherId = setInterval(() => {
        renderElements();
    }, 100000)
}
online_weather();

const online = () => {
    renderElements();
    let timerId = setInterval(() => {
        renderElements();
    }, 1000)
}
online();


// Календар

const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".date").innerHTML = months[date.getMonth()];


    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
}
// Графік


/*const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['', '', '','','','',''],
        datasets: [{
            label: '',
            data: [1, 5, 5, 8, 8, 13, 17, 14, 20],
            backgroundColor: [
                'rgba(248,82,58, 0.2)',
                'rgba(248,82,58, 0.2)',
                'rgba(248,82,58, 0.2)',
                'rgba(248,82,58, 0.2)',
                'rgba(248,82,58, 0.2)',
                'rgba(248,82,58, 0.2)'
            ],
            borderColor: [
                'rgba(248,82,58, 1)',
                'rgba(248,82,58, 1)',
                'rgba(248,82,58, 1)',
                'rgba(248,82,58, 1)',
                'rgba(248,82,58, 1)',
                'rgba(248,82,58, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});*/