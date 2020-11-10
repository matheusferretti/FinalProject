const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			profile: [
				{
					name: "Matheus",
					type: "user"
				}
			],
			freelancers: [
				{
					name: "FIRST",
					qualifications: "front-end",
					technologies: "html"
				},
				{
					name: "SECOND",
					qualifications: "front-end",
					technologies: "javascript"
				},
				{
					name: "THIRD",
					qualifications: "back-end",
					technologies: "java"
				},
				{
					name: "FOURTH",
					qualifications: "front-end",
					technologies: "css"
				},
				{
					name: "5TH",
					qualifications: "back-end",
					technologies: "mysql"
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
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
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
			}
		}
	};
};

export default getState;
