const fileName = window.location.pathname.split("/").pop();

const statusValidation = {
	removeButtons: () => {
		const loginButton = document.getElementById("login-button");
		const registerButton = document.getElementById("register-button");
		const greeting = document.getElementById("greeting-parent");
		const logoutButton = document.getElementById("logout-button-parent");
		const loginParent = document.getElementById("login-parent");
		const registerParent = document.getElementById("register-parent");

		loginParent.setAttribute("style", "display: none");
		registerParent.setAttribute("style", "display: none");
		loginButton.setAttribute("style", "display: none");
		registerButton.setAttribute("style", "display: none");

		greeting.setAttribute("style", "display: flex");
		logoutButton.setAttribute("style", "display: flex");
	},

	checkLoginStatus: () => {
		return fetch("../php/web/UserController.php").then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error();
			}
		});
	},
};

const logout = () => {
	fetch("../php/web/UserController.php", {
		method: "DELETE",
	}).then(() => {
		document.location.reload();
	});
};

statusValidation.checkLoginStatus().then((loginStatus) => {
	if (loginStatus.logged) {
		statusValidation.removeButtons();
		document.getElementById("greeting").innerHTML = "Hi, " + loginStatus.session.username;
		if (fileName == "login.php" || fileName == "register.php") {
			window.location.replace("./index.php");
		}
	} else {
		if (fileName == "addsong.php") {
			window.location.replace("./index.php");
		} else if (fileName == "songlist.php") {
			document.getElementById("new-song-btn").setAttribute("style", "display: none");
		}
	}
});

document.getElementById("logout-button").addEventListener("click", logout);
