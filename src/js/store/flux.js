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
					companyType: "Repository Storing Services"
				},
				{
					name: "Apple",
					companyType: "Technology"
				},
				{
					name: "Oracle",
					companyType: "Computer Software"
				},
				{
					name: "AWS",
					companyType: "Cloud Services"
				},
				{
					name: "Azure",
					companyType: "Cloud Services"
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
					jobsPosted: [
						{
							jobName: "Data Scientist - Business Intelligence",
							companyName: "GitHub",
							cityName: "Orlando, FL"
						},
						{
							jobName: "Security Analyst - GitHub Security Lab",
							companyName: "GitHub",
							cityName: "Miami, FL"
						},
						{
							jobName: "Software Engineer - Admin Experiences",
							companyName: "GitHub",
							cityName: "Chatanooga, TN"
						}
					]
				},
				{}
			],
			jobs: [
				{
					companyName: "Windows",
					companyType: "Tech",
					title: "Python Developer",
					location: "Miami, FL"
				},
				{
					companyName: "Apple",
					companyType: "Tech",
					title: "Back-End Developer",
					location: "Chatanooga, TN"
				},
				{
					companyName: "Kaseya",
					companyType: "Software",
					title: "Account Executive",
					location: "Miami, FL"
				},
				{
					companyName: "GitHub",
					companyType: "Repository Storage Services",
					title: "React Developer",
					location: "Chicago, IL"
				},
				{
					companyName: "4Geeks Academy",
					companyType: "Tech",
					title: "Web Dev Instructor",
					location: "Punta Arenas, Chile"
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
			signup: async (email, username, password) => {
				const store = getStore();

				let user = {
					username: username,
					email: email,
					password: password,
					is_active: true
				};

				let response = await fetch("https://3000-e344c25e-db40-4cd4-8969-e24e7ce763fc.ws-us03.gitpod.io/user", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(user)
				});

				// let result = await response.json();
				// alert(result.message);
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
