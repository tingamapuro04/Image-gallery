const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
const pics = [["pic1.jpg", "First pic"], ["pic2.jpg", "Second photo"], ["pic3.jpg", "Third photo"], ["pic4.jpg", "Fourth photo"], ["pic5.jpg", "Fifth photo"]]
console.log(pics)

pics.map(item => {
  const newImage = document.createElement('img');
  newImage.setAttribute('class', 'mapicha')
  newImage.setAttribute('src', `images/${item[0]}`);
  newImage.setAttribute('alt', `${item[1]}`);
  thumbBar.appendChild(newImage);
})


/* Clicking a single image item and setting it to be the image to be dispalyed at the top */

const mapicha = document.querySelectorAll('.mapicha')

const changepic = (item) => {
  displayedImage.setAttribute('src', `${item.target.src}`)
}

// mapicha[0].addEventListener('click', changepic)

const looper = (item) => {
  item.addEventListener('click', changepic)
}

mapicha.forEach(looper)





/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  overlay.style.display = 'block'
})
