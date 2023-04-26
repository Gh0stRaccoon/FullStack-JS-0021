const travels = [
	{
		from: {
			name: 'Chicago, USA',
		},
		to: {
			name: 'Venecia, IT',
		},
		layovers: true,
	},
	{
		from: {
			name: 'Boston, USA',
		},
		to: {
			name: 'Paris, FR',
		},
		layovers: true,
	},
	{
		from: {
			name: 'Santiago, CL',
		},
		to: {
			name: 'Los Angeles, USA',
		},
		layovers: false,
	},
	{
		from: {
			name: 'Buenos Aires, AR',
		},
		to: {
			name: 'Londres, UK',
		},
		layovers: false,
	},
];

const confirmLayovers = () => {
	const originInfo = document.getElementById('origin').value;
	const destinationInfo = document.getElementById('destination').value;
	const travelInfo = document.getElementById('travel-info');
	const infoElement = document.querySelector(`#layovers-info span`);

	if (originInfo && destinationInfo) {
		travelInfo.classList.remove('d-none');
		const hasLayovers =
			travels.find(
				(travel) =>
					travel.from.name === originInfo && travel.to.name === destinationInfo
			)?.layovers || false;
		!hasLayovers
			? (infoElement.textContent = '¡Tu vuelo no tiene escalas!')
			: (infoElement.textContent = '¡OJO! Tu vuelo tiene escalas.');
	}
};
const handleTravelChange = (e) => {
	const id = e.target.id;
	const value = e.target.value;

	const infoElement = document.querySelector(`#${id}-info h3`);

	infoElement.textContent = value;

	confirmLayovers();
};

const initializeSelects = () => {
	const originSelect = document.getElementById('origin');
	const destinationSelect = document.getElementById('destination');
	const originDate = document.getElementById('travel-date');
	const returnDate = document.getElementById('return-date');

	travels.forEach((travel) => {
		originSelect.innerHTML += `<option value="${travel.from.name}">${travel.from.name}</option>`;
		destinationSelect.innerHTML += `<option value="${travel.to.name}">${travel.to.name}</option>`;
	});

	originSelect.addEventListener('change', handleTravelChange);
	destinationSelect.addEventListener('change', handleTravelChange);
};

initializeSelects();
