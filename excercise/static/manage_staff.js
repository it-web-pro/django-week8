function addStaff(pro_Id, staff_id, csrf_token){
    const emp = document.getElementById('input-add-staff');
    const data = {emp_id: emp.value};

    // กำหนด path ให้ถูกต้อง
    fetch(``, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrf_token
        },
    })
    .then(data => {
        console.log('Item updated successfully')
        window.location.reload()
    })
    .catch(error => console.error('Error:', error));
}


async function removeStaff(pro_Id, emp_Id, csrf_token){

    // กำหนด path ให้ถูกต้อง
    fetch(``, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrf_token
        },
    })
    .then(data => {
        console.log('Item updated successfully')
        window.location.reload()
    })
    .catch(error => console.error('Error:', error));
}