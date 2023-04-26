const activities = [
	{
		name: 'trekking',
		location: 'Volvan Villarica',
		image: './assets/img/patagonia01.jpg',
		description:
			'Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por el turismo convencional.',
		url: '#',
	},
	{
		name: 'Natación',
		location: 'Lago Cochrane',
		image: './assets/img/patagonia02.jpg',
		description:
			'Deporte o ejercicio que consiste en nadar; en las pruebas de natación se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa.',
		url: '#',
	},
	{
		name: 'Ferry',
		location: 'Lago Llanquihue',
		image: './assets/img/patagonia03.jpg',
		description:
			'Embarcación que realiza alternativamente el mismo recorrido entre dos puntos; especialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros',
		url: '#',
	},
];

function fillSelectOptions() {
	const selectActivities = document.getElementById('select-activities');

	selectActivities.addEventListener('change', (e) =>
		renderActivity(e.target.value)
	);
	const html = activities
		.map(
			(activity) => `<option value="${activity.name}">${activity.name}</option>
  `
		)
		.join('');
	selectActivities.innerHTML += html;

	renderActivity(selectActivities.value);
}

function renderActivity(activityName) {
	const cardContainer = document.getElementById('card-container');

	const activityInfo = activities.find(
		(activity) => activity.name === activityName
	);

	cardContainer.innerHTML = `
  <div class="activity-card card text-bg-dark mt-3">
							<img
								src="${activityInfo.image}"
								class="card-img"
								alt="${activityInfo.name} en patagonia"
							/>
							<div
								class="card-img-overlay d-flex flex-column align-items-center justify-content-center"
							>
								<h3 class="card-title">${activityInfo.name}</h3>
								<div>
									<i class="bi bi-geo-alt-fill"></i>

									<span class="card-text">${activityInfo.location}</span>
								</div>
							</div>
						</div>
            <div class="activity-card card mt-2">
      <div class="card-body">
        <p class="card-text">${activityInfo.description}</p>
        <a class="d-block mb-3">Conocer más</a>
        <a href="#" class="btn btn-light">Agendar actividad</a>
      </div>
    </div>
  </div>
  `;
}

function handlechange(e) {
	console.log(e);
}

fillSelectOptions();
