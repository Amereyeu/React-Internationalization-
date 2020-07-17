import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
	const { t, i18n } = useTranslation();

	const languageSwitch = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		<div className="App">
			<div className="switch">
				<button onClick={() => languageSwitch("en")}>EN</button>
				<button onClick={() => languageSwitch("esp")}>ESP</button>
			</div>

			<h3>{t("title")}</h3>
			<p>{t("description.p1")}</p>
			<p>{t("description.p2")}</p>
		</div>
	);
}

export default App;
