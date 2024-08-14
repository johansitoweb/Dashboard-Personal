// Datos de ejemplo  
const exerciseData = {  
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],  
    datasets: [{  
        label: 'Ejercicio (minutos)',  
        data: [30, 45, 60, 50, 30, 45, 20],  
        backgroundColor: 'rgba(54, 162, 235, 0.2)',  
        borderColor: 'rgba(54, 162, 235, 1)',  
        borderWidth: 1  
    }]  
};  

const dietData = {  
    labels: ['Proteínas', 'Lípidos', 'Carbohidratos', 'Fibra'],  
    datasets: [{  
        label: 'Porcentaje de Ingesta',  
        data: [25, 30, 35, 10],  
        backgroundColor: [  
            'rgba(255, 99, 132, 0.2)',  
            'rgba(54, 162, 235, 0.2)',  
            'rgba(255, 206, 86, 0.2)',  
            'rgba(75, 192, 192, 0.2)'  
        ],  
        borderColor: [  
            'rgba(255, 99, 132, 1)',  
            'rgba(54, 162, 235, 1)',  
            'rgba(255, 206, 86, 1)',  
            'rgba(75, 192, 192, 1)'  
        ],  
        borderWidth: 1  
    }]  
};  

const financeData = {  
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],  
    datasets: [{  
        label: 'Gastos mensuales ($)',  
        data: [300, 200, 150, 400, 350, 500, 450],  
        fill: false,  
        borderColor: 'rgba(255, 159, 64, 1)',  
        tension: 0.1  
    }]  
};  

// Configurar gráficos  
const configExercise = {  
    type: 'bar',  
    data: exerciseData,  
    options: {  
        scales: {  
            y: {  
                beginAtZero: true  
            }  
        }  
    }  
};  

const configDiet = {  
    type: 'pie',  
    data: dietData,  
};  

const configFinance = {  
    type: 'line',  
    data: financeData,  
    options: {  
        scales: {  
            y: {  
                beginAtZero: true  
            }  
        }  
    }  
};  

// Renderizar gráficos  
const exerciseChart = new Chart(document.getElementById('exerciseChart'), configExercise);  
const dietChart = new Chart(document.getElementById('dietChart'), configDiet);  
const financeChart = new Chart(document.getElementById('financeChart'), configFinance);