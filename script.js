let leads = JSON.parse(localStorage.getItem("leads")) || [];

function saveData() {
    localStorage.setItem("leads", JSON.stringify(leads));
}

function displayLeads() {
    let table = document.getElementById("leadTable");
    table.innerHTML = "";

    leads.forEach((lead, index) => {
        table.innerHTML += `
        <tr>
            <td>${lead.name}</td>
            <td>${lead.email}</td>
            <td>${lead.source}</td>
            <td>${lead.status}</td>
            <td>
                <button onclick="editLead(${index})">Edit</button>
                <button onclick="deleteLead(${index})">Delete</button>
            </td>
        </tr>
        `;
    });
}

function addLead() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let source = document.getElementById("source").value;
    let status = document.getElementById("status").value;

    if(name === "" || email === ""){
        alert("Fill all required fields");
        return;
    }

    leads.push({
        name,
        email,
        source,
        status
    });

    saveData();
    displayLeads();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("source").value = "";
}

function deleteLead(index){
    leads.splice(index,1);
    saveData();
    displayLeads();
}

function editLead(index){

    let newStatus = prompt(
        "Enter Status: New / Contacted / Converted",
        leads[index].status
    );

    if(newStatus){
        leads[index].status = newStatus;
        saveData();
        displayLeads();
    }
}

displayLeads();