function User({ name, email, work, phone, about }) {
	this.name = name;
	this.email = email;
	this.work = work;
	this.phone = phone;
	this.about = about;
	this.print = function () {
		for (let key in this) {
			if (key === 'print' || key === undefined) continue;

			console.log(key);
			const domElement = document.getElementById(`user-${key}`);
			domElement.textContent = this[key];
		}
	};
}

function handleSubmit(e) {
	e.preventDefault();
	const userFormdata = new FormData(e.target);
	const userData = Object.fromEntries(userFormdata);
	if (Array.from(userFormdata.values()).some((value) => !value)) {
		return alert('Rellena todos los datos!');
	}
	const user = new User(userData);
	user.print();
}

const userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);
