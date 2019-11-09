export async function getTags() {
  return fetch('https://api.imgur.com/3/tags?client_id=2621db41aa08a64', {
    method: 'GET',
    credentials: 'include',
  })
  .then(response => response.json());
};

export async function getTagImages(tagName) {
  return fetch(`https://api.imgur.com/3/gallery/t/${tagName}?client_id=2621db41aa08a64`, {
    method: 'GET',
    credentials: 'include',
  })
  .then(response => response.json())
  .then(response => response.data.items);
};

export async function getImageComments(id) {
  return fetch(`https://api.imgur.com/3/gallery/${id}/comments?client_id=2621db41aa08a64`, {
    method: 'GET',
    credentials: 'include',
  })
  .then(response => response.json())
  .then(response => response.data);
}