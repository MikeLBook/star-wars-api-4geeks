const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterData: null,
			starshipData: null,
			planetData: null,
		},
		actions: {
			loadStarWarsData: () => {
				// fetch character data
				fetch('https://www.swapi.tech/api/people/', {
					method: 'GET'
				}).then(res => {
					return res.json()
				}).then(data => {
					setStore({characterData: data.results})
				})

				// fetch planet data
				fetch('https://www.swapi.tech/api/planets/', {
					method: 'GET'
				}).then(res => {
					return res.json()
				}).then(data => {
					setStore({planetData: data.results})
				})

				// fetch vehicle data
				fetch('https://www.swapi.tech/api/starships/', {
					method: 'GET'
				}).then(res => {
					return res.json()
				}).then(data => {
					setStore({starshipData: data.results})
				})
			},
		}
	};
};

export default getState;
