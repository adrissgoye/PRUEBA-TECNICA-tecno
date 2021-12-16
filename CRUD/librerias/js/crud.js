
var selectedRow = null,
TipoAlert = null
idDelete = 0;

function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

function TypeItem (Tipo){
	TipoAlert = Tipo;
}
//Recuperar los datos
function readFormData(){
    var formData = {};
    formData["item"] = document.getElementById("item").value;
    return formData;
}

//Insertar data
function insertNewRecord(data){
	
	idDelete = idDelete + 1;
	var storeList = `<div id="task` + idDelete +`" class = "alert alert-` + TipoAlert + ` row"><div class="col-5"><span onClick='onEdit(this)' style="color:#000000">`+`          `+ data.item +`</span></div>`+
	`<div class="col-7"><button style="float:right" class="btn btn-danger" onClick='onDelete(` + idDelete +`)'" > <span aria-hidden="true">&times;</span> </button></div></div>`;
    
	$('#storeList').append(storeList);

   TipoAlert = null;
}

//Editar tarea
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('item').value = selectedRow.cells[0].innerHTML;

}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.item;
	document.getElementById('productCode').value = selectedRow.cells[0].innerHTML;
}

//Eliminar tarea
function onDelete(id){

    if(confirm('Estas seguro de eliminar esta tarea?')){
		$('#task' + id).remove();
    }
    resetForm();
}

//Restablecer los datos
function resetForm(){
    document.getElementById('item').value = '';

}