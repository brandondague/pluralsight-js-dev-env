import 'whatwg-fetch';
import getBaseUrl from './baseUrl'

const baseUrl = getBaseUrl();

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(success, error);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(success, error);
}

function success(res) {
  return res.json();
}

function error(err) {
  console.log(err); //eslint-disable-line no-console
}
