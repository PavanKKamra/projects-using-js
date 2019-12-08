// This function deletes the row after pressing the trash icon. 
function deleteRow(row) 
{
    var deleteRow=row.parentNode.parentNode;
    deleteRow.parentNode.removeChild(deleteRow);
}

