let editDialog = {
    date_of_registr: null,
    date_of_update: null,
    tit: null,
    artic: null,
    author: null,
    saveButton: null
}

function showEditDialog() {
    //console.log(this.dataset.id);
    fetch(`/announs/${this.dataset.id}`)
        .then(res => res.json())
        .then(res => {
            editDialog.date_of_registr.value = res.date_of_registr;
            editDialog.date_of_update.value = res.date_of_update;
            //editDialog.tit.value = res.tit;
            let markupStr = res.tit;
            $('#tit').summernote('code', markupStr);
            editDialog.artic.value = res.artic;
            editDialog.author.value = res.author;
            editDialog.saveButton.dataset.id = this.dataset.id;
        })
        .catch(err => alert(err))
}

function saveAnnoun() {
    let data = {
        date_of_registr: editDialog.date_of_registr.value,
        date_of_update: editDialog.date_of_update.value,
        // tit: editDialog.tit.value,
        tit: $('#tit').summernote('code'),
        artic: editDialog.artic.value,
        author: editDialog.author.value
    };
    fetch(`/announs/${this.dataset.id}`, {
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
    let announsTableBody =
        document.getElementById('announsTable').getElementsByTagName('tbody')[0];
    fetch('/announs')
        .then(res => res.json())
        .then(res => {
            let rows = '';
            for (element of res) {
                rows += `<tr><td>${element.date_of_registr}</td><td>${element.date_of_update}</td><td>${element.tit}</td><td>${element.artic}</td><td>${element.author}</td>`;
                rows += `<td><button type="button" class="btn btn-primary btn-edit" data-id="${element._id}" data-toggle="modal" data-target="#editModal">Edit</button> | `;
                rows += `<button type="button" class="btn btn-danger btn-delete" data-id="${element._id}" data-toggle="modal" data-target="#delModal">Delete</button></td></tr>`;
            }

            announsTableBody.innerHTML = rows;
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

//window.onload = function() {
//    fillTable();
//    editDialog.date_of_registr = this.document.getElementById('date_of_registr');
//    editDialog.date_of_update = this.document.getElementById('date_of_update');
//    editDialog.tit = this.document.getElementById('tit');
//    editDialog.artic = this.document.getElementById('artic');
//    editDialog.author = this.document.getElementById('author');
//    editDialog.saveButton = this.document.getElementById('announSave');
//    editDialog.saveButton.onclick = saveAnnoun;
//};