let editDialog = {
    producer: null,
    country: null,
    type: null,
    color: null,
    saveButton: null
}

function showEditDialog() {
    //console.log(this.dataset.id);
    fetch(`/baby_car_seats/${this.dataset.id}`)
        .then(res => res.json())
        .then(res => {
            editDialog.producer.value = res.producer;
            editDialog.country.value = res.country;
            //editDialog.type.value = res.type;
            let markupStr = res.type;
            $('#type').summernote('code', markupStr);
            editDialog.color.value = res.color;
            editDialog.saveButton.dataset.id = this.dataset.id;
        })
        .catch(err => alert(err))
}

function saveBaby_car_seat() {
    let data = {
        producer: editDialog.producer.value,
        country: editDialog.country.value,
        // type: editDialog.type.value,
        type: $('#type').summernote('code'),
        color: editDialog.color.value
    };
    fetch(`/baby_car_seats/${this.dataset.id}`, {
            method: 'PUT',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(fillTable())
        .catch(err => alert(err))
}

function showDeleteDialog() {
    console.log(this.dataset.id);
}

function fillTable() {
    let baby_car_seatsTableBody =
        document.getElementById('baby_car_seatsTable').getElementsByTagName('tbody')[0];
    fetch('/baby_car_seats')
        .then(res => res.json())
        .then(res => {
            let rows = '';
            for (element of res) {
                rows += `<tr><td>${element.producer}</td><td>${element.country}</td><td>${element.type}</td><td>${element.color}</td>`;
                rows += `<td><button type="button" class="btn btn-primary btn-edit" data-id="${element._id}" data-toggle="modal" data-target="#editModal">Edit</button> | `;
                rows += `<button type="button" class="btn btn-danger btn-delete" data-id="${element._id}" data-toggle="modal" data-target="#delModal">Delete</button></td></tr>`;
            }

            baby_car_seatsTableBody.innerHTML = rows;
            let editButtons = Array.from(document.getElementsByClassName('btn-edit'));
            editButtons.forEach(element => {
                element.onclick = showEditDialog;
            });
            let deleteButtons = Array.from(document.getElementsByClassName('btn-delete'));
            deleteButtons.forEach(element => {
                element.onclick = showDeleteDialog;
            })
        })
        .catch(err => alert(err));
}

// window.onload = function() {
// fillTable();
//  editDialog.producer = this.document.getElementById('producer');
//editDialog.country = this.document.getElementById('country');
// editDialog.type = this.document.getElementById('type');
// editDialog.color = this.document.getElementById('color');
// editDialog.saveButton = this.document.getElementById('baby_car_seatSave');
// editDialog.saveButton.onclick = saveBaby_car_seat;
//};