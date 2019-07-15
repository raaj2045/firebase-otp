import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebase from "firebase";

// Configure Firebase.
const config = {
	apiKey: "AIzaSyACcylTHsKOcNsFUej0IXN-1XXaSTJ2ynM",
	authDomain: "phone-do-ee669.firebaseapp.com",
	databaseURL: "https://phone-do-ee669.firebaseio.com",
	projectId: "phone-do-ee669",
	storageBucket: "",
	messagingSenderId: "115197511746",
	appId: "1:115197511746:web:104a335f0c59970b"
};

// Configure FirebaseUI.
const uiConfig = {
	callbacks: {
		signInSuccessWithAuthResult: function(authResult, redirectUrl) {}
	},
	// Popup signin flow rather than redirect flow.
	signInFlow: "popup",
	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: "/signedIn",
	// We will display Google and Facebook as auth providers.
	signInOptions: [
		{
			provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
			// recaptchaParameters: {
			// 	type: "image", // 'audio'
			// 	size: "normal", // 'invisible' or 'compact'
			// 	badge: "bottomleft" //' bottomright' or 'inline' applies to invisible.
			// },
			defaultCountry: "IN", // Set default country to the United Kingdom (+44).
			// For prefilling the national number, set defaultNationNumber.
			// This will only be observed if only phone Auth provider is used since
			// for multiple providers, the NASCAR screen will always render first
			// with a 'sign in with phone number' button.
			defaultNationalNumber: "1234567890",
			// You can also pass the full phone number string instead of the
			// 'defaultCountry' and 'defaultNationalNumber'. However, in this case,
			// the first country ID that matches the country code will be used to
			// populate the country selector. So for countries that share the same
			// country code, the selected country may not be the expected one.
			// In that case, pass the 'defaultCountry' instead to ensure the exact
			// country is selected. The 'defaultCountry' and 'defaultNationaNumber'
			// will always have higher priority than 'loginHint' which will be ignored
			// in their favor. In this case, the default country will be 'GB' even
			// though 'loginHint' specified the country code as '+1'.
			loginHint: "+911234567890",
			// You can provide a 'whitelistedCountries' or 'blacklistedCountries' for
			// countries to select. It takes an array of either ISO (alpha-2) or
			// E164 (prefix with '+') formatted country codes. If 'defaultCountry' is
			// not whitelisted or is blacklisted, the default country will be set to the
			// first country available (alphabetical order). Notice that
			// 'whitelistedCountries' and 'blacklistedCountries' cannot be specified
			// at the same time.
			whitelistedCountries: ["IN", "+91"]
		}
	]
};

firebase.initializeApp(config);
class App extends Component {
	state = {
		phone: ""
	};

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => console.log(user));
	}
	render() {
		return (
			<div>
				<h1>My App</h1>
				<p>Please sign-in:</p>
				<StyledFirebaseAuth
					uiConfig={uiConfig}
					firebaseAuth={firebase.auth()}
				/>
			</div>
		);
	}
}

export default App;
