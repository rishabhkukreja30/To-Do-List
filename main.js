let ultasks = $('#ultasks');
let btnAdd = $('#buttonAdd');
let btnReset = $('#buttonReset');
let newTask = $('#newTask');
let btnCleanUp = $('#buttonCleanUp');
let btnSort = $('#buttonSort');

function addItem() {
  let listItem = $('<li>', {
    'class' : 'list-group-item',
    text : newTask.val()
  })

  listItem.click(function() {
    listItem.toggleClass("done");
  })

  ultasks.append(listItem);
  newTask.val('');

  toggleInputBtns()
}

function clearDone() {
  $('#ultasks .done').remove()
  toggleInputBtns()
}

function sortTasks()  {
  $('#ultasks .done').appendTo(ultasks)
}

function toggleInputBtns() {
    btnReset.prop('disabled', newTask.val() == '');
    btnAdd.prop('disabled', newTask.val() == '');
    btnSort.prop('disabled', ultasks.children().length < 1);
    btnCleanUp.prop('disabled', ultasks.children().length < 1);
}

newTask.keypress((e) => {
  if(e.which == 13) {
    addItem();
  }
})

newTask.on('input', toggleInputBtns)

btnAdd.click(addItem);

btnReset.click(() => {
  newTask.val('')
  toggleInputBtns()
})

btnCleanUp.click(clearDone);
btnSort.click(sortTasks);
