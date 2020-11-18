const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			profile: {
				name: "Matheus",
				type: "user"
			},
			user: {
				username: "",
				password: "",
				userType: ""
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
			recruitersPage: [
				{
					name: "GitHub",
					companyType: "Repository Storing Services",
					review: "5 Stars",
					siteUrl: "https://github.com/",
					companyLkdn: "https://www.linkedin.com/company/github/",
					image:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fsocial-media-2169%2F24%2Fsocial_media_social_media_logo_github-512.png&f=1&nofb=1",
					pageIntro: "Welcome to GitHub",
					companyIntro:
						"GitHub is the best place to share code with friends, co-workers, classmates, and complete strangers. Over 31 million people use GitHub to build amazing things together across 97+ million repositories. With all the collaborative features of GitHub, it has never been easier for individuals and teams to write faster, better code.",
					jobsPosted: []
				},
				{}
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
				email: "",
				token: null,
				userType: ""
			},
			users: [
				{
					email: "matheus.ferretti@gmail.com",
					token: null,
					userType: "recruiter",
					companyName: "Target",
					companyUrl: "www.target.com",
					password: "1234"
				},
				{
					email: "matheus.monteiro@gmail.com",
					token: null,
					userType: "freelancer",
					name: "Matheus",
					lastName: "Monteiro",
					password: "1234"
				}
			]
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
				for (let x of store.users) {
					if (x.email == email) {
						setStore({
							currentUser: {
								email: email,
								token: "e1e2e3",
								userType: x.userType
							}
						});
					}
				}
				history.push("/profile");
			},
			logout: () => {
				setStore({
					currentUser: {
						email: "",
						token: null,
						userType: ""
					}
				});
			},
			// setUser: user => {
			// 	setStore({ user: user });
			// },
			search: (jobs, freelancers, history) => {
				const store = getStore();
			}
		}
	};
};

export default getState;
