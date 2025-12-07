
document.getElementById('student-form').addEventListener('submit', addStudent);


function addStudent(event) {
  event.preventDefault();

  var input = document.getElementById('student-name');
  var studentName = input.value;

  
  if (studentName === '') {
    alert('Please enter a student name');
    return;
  }

 
  var li = document.createElement('li');
  li.classList.add('student-item');

  
  var span = document.createElement('span');
  span.textContent = studentName;

  
  var editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('btn-edit');
  editButton.addEventListener('click', function () {
    editStudent(li, span);
  });

  
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('btn-delete');
  deleteButton.addEventListener('click', function () {
    deleteStudent(li);
  });

  
  li.appendChild(span);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  
  document.getElementById('student-list').appendChild(li);

  
  input.value = '';
  input.focus();
}


function deleteStudent(studentElement) {
  studentElement.remove();
}


function editStudent(studentElement, studentNameElement) {
  var newName = prompt('Enter the new name:', studentNameElement.textContent);
  if (newName !== null && newName !== '') {
    studentNameElement.textContent = newName;
  }
}


function changeListStyle() {
  var students = document.querySelectorAll('.student-item');
  students.forEach(function (student) {
    student.classList.toggle('highlight');
  });
}


var changeStyleButton = document.createElement('button');
changeStyleButton.textContent = 'Highlight Students';
changeStyleButton.addEventListener('click', changeListStyle);
document.body.appendChild(changeStyleButton);