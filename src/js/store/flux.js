const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			swData: null
		},
		actions: {
			loadSomeData: () => {
				// const store = getStore();
				fetch('https://www.swapi.tech/api/people/', {
					method: 'GET'
				}).then(res => {
					return res.json()
				}).then(data => {
					console.log(data)
					setStore({swData: data})
				})
			},
		}
	};
};

export default getState;
