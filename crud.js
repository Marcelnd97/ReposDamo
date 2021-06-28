var selectedRow = null

function onFormSubmit() {
    if(validate()) {
      var formData = readFormData();
        if(selectedRow == null)
         insertNewRecord(formData);
        else
        updateRecord(formData);
        resetForm();
    }    
}

function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["CodEmp"] = document.getElementById("CodEmp").value;
    formData["salaire"] = document.getElementById("salaire").value;
    formData["ville"] = document.getElementById("ville").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("emplyeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.CodEmp;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salaire;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.ville; 
    cell5 = newRow.insertCell (4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Editer</a>
                       <a onClick="onDelete(this)">Supprimer</a>`;
}

function resetForm(){
    document.getElementById("fullName").value ="";
    document.getElementById("CodEmp").value ="";
    document.getElementById("salaire").value ="";
    document.getElementById("ville").value ="";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("CodEmp").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salaire").value = selectedRow.cells[2].innerHTML;
    document.getElementById("ville").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.CodEmp;
    selectedRow.cells[2].innerHTML = formData.salaire;
    selectedRow.cells[3].innerHTML = formData.ville;
}

function onDelete(td) {
    if(confirm('Ëtes-vous sûr de vouloir supprimer le record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("emplyeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate(){
    isValid = true;
     if(document.getElementById("fullName").value == ""){
         isValid = false;
         document.getElementById("fullNameValidationError").classList.remove("hide");
     }else{
         isValid = true;
            if(!document.getElementById("fullNameValidationError").classList.contains("hide"))
                document.getElementById("fullNameValidationError").classList.add("hide");
        }
        return isValid;
}