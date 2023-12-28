document.getElementById('monthly-price').textContent = 0.00;
document.getElementById('vat').textContent = 0.00;
document.getElementById('fees').textContent = 0.00;
document.getElementById('total-price').textContent = 0.00;

let selectedDuration = 3; // Default duration is 3 days

// Populate server options based on category
async function populateServers() {
    const category = document.getElementById('category').value;
    const serverTableBody = document.querySelector('#server-table tbody');
    serverTableBody.innerHTML = '';

    for (const server of serverData[category]) {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td><button class="select-button" onclick="selectServer('${server.id}', ${server.monthly}, ${server.hourly});">Auswählen</button></td>    
                <td>${server.vCPU}</td>
                <td>${server.RAM}</td>
                <td>${server.SSD}</td>
                <td>${server.monthly.toFixed(2)}</td>
            `;
        serverTableBody.appendChild(row);
    }
}

// Calculate and display the total price
function calculatePrice(tPrice) {

    const vat = (tPrice * 0.19).toFixed(2);
    const fees = 0.05
    const totalPrice = (parseFloat(tPrice) + parseFloat(vat) + parseFloat(fees)).toFixed(2);

    document.getElementById('monthly-price').textContent = tPrice;
    document.getElementById('vat').textContent = vat;
    document.getElementById('fees').textContent = fees;
    document.getElementById('total-price').textContent = totalPrice;
    document.getElementById('selected-duration').textContent = `${selectedDuration} Tage`;
}

// Handle server selection
function selectServer(serverId, monthlyPrice, hourlyPrice) {
    console.log(`Selected Server: ${serverId}`);

    if (document.getElementById('selected-duration').textContent == "3 Tage") {
        let calcPrice = (hourlyPrice * 24 * 3).toFixed(2);
        calculatePrice(calcPrice);
    } else if (document.getElementById('selected-duration').textContent == "30 Tage") {
        let calcPrice = monthlyPrice.toFixed(2);
        calculatePrice(calcPrice);
    } else if (document.getElementById('selected-duration').textContent == "90 Tage") {
        let calcPrice = (monthlyPrice * 3).toFixed(2);
        calculatePrice(calcPrice);
    } else if (document.getElementById('selected-duration').textContent == "180 Tage") {
        let calcPrice = (monthlyPrice * 6).toFixed(2);
        calculatePrice(calcPrice);
    } else if (document.getElementById('selected-duration').textContent == "365 Tage") {
        let calcPrice = (monthlyPrice * 12).toFixed(2);
        calculatePrice(calcPrice);
    } else {
        alert("Es ist ein Fehler in der Funktion selectServer() aufgetreten")
    }
}

// Set the selected duration
function setDuration(duration) {
    selectedDuration = duration;

    // Calculate and display the total price
    calculatePrice(document.querySelector('#server-table tbody tr button').textContent);
}

// Initialize the calculator
populateServers();
calculatePrice(document.querySelector('#server-table tbody tr button').textContent);
