const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			swData: null
		},
		actions: {
			loadSomeData: () => {
				// const store = getStore();
				fetch('https://www.swapi.tech/api/people/1', {
					method: 'GET'
				}).then(res => {
					return res.json()
				}).then(data => {
					setStore({swData: data})
				})
			},
		}
	};
};

export default getState;
