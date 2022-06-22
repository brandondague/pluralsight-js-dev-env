import {deleteUser, getUsers} from './api/userApi';
import './index.css';

getUsers().then(res => {
  let usersBody = "";

  res.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteLinks, link => {
    link.onclick = function(e) {
      const el = e.target;
      e.preventDefault();
      deleteUser(el.attributes["data-id"].value);
      const row = el.parentNode.parentNode;
      row.parentNode.removeChold(row);
    };
  });
});
