const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			profile: {
				name: "Matheus",
				type: "user"
			},
			freelancers: [
				{
					name: "Matheus",
					qualifications: "front-end",
					technologies: "html"
				},
				{
					name: "Thiago",
					qualifications: "front-end",
					technologies: "javascript"
				},
				{
					name: "Natasha",
					qualifications: "back-end",
					technologies: "java"
				},
				{
					name: "Sasha",
					qualifications: "front-end",
					technologies: "css"
				},
				{
					name: "Jaqueline",
					qualifications: "back-end",
					technologies: "mysql"
				}
			],
			recruiters: [
				{
					name: "GitHub",
					companyType: "repository storing services"
				},
				{
					name: "Apple",
					companyType: "technology"
				},
				{
					name: "Oracle",
					companyType: "computer software"
				},
				{
					name: "AWS",
					companyType: "cloud srvices"
				},
				{
					name: "Azure",
					companyType: "cloud srvices"
				}
			],
			jobs: [
				{
					title: "python developer",
					skills: "python",
					companyType: "tech"
				},
				{
					title: "back-end developer",
					skills: "mysql",
					companyType: "tech"
				},
				{
					title: "front-end developer",
					skills: "html",
					companyType: "retail"
				},
				{
					title: "react developer",
					skills: "react",
					companyType: "hr"
				},
				{
					title: "full-stack dev",
					skills: "react",
					companyType: "tech"
				}
			],
			currentUser: {
				email: "matheusferretti96@gmail.com",
				token: null
			}
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			login: (email, password, history) => {
				//get the store
				const store = getStore();

				//this is where I fetch, and only will set the store if after fetching I get a 200
				//reset the global store
				setStore({
					currentUser: {
						email: "matheusferretti96@gmail.com",
						token: "e1e2e3"
					}
				});
				history.push("/home");
			},
			search: (jobs, freelancers, history) => {
				const store = getStore();

				setStore({
					currentUser: {
						email: "matheusferretti96@gmail.com",
						token: "e1e2e3"
					}
				});
			}
		}
	};
};

export default getState;
