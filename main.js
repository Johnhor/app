let year = 1989;
let present = 2019;

console.log(`Your age is ${present - year} years`);
console.log(`hello world`);

const card = document.querySelector('.card');
card.addEventListener('click', function(){
	const skeleton = document.querySelector('.card--skeleton');
	skeleton.classList.add('active');
})
