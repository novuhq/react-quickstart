<div align="center">
  <a href="https://novu.co" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/2233092/213641039-220ac15f-f367-4d13-9eaf-56e79433b8c1.png">
    <img src="https://user-images.githubusercontent.com/2233092/213641043-3bbb3f21-3c53-4e67-afe5-755aeb222159.png" width="280" alt="Logo"/>
  </picture>
  </a>
</div>

# Novu React Quickstart

This sample app demonstrates how to integrate Novu's Notification Center in a React app.

It demonstrates how to trigger notifications from any backend and view them in real-time within the app.

You can refer to [this](https://docs.novu.co/quickstarts/react#install-novu-react-notification-center-package-in-your-react-app) guide to know more about it.

## Configuration

### Create a free account in Novu

1. Go to [Novu](https://web.novu.co) and click Sign Up.
2. Use GitHub Account to login.

### Obtain Credentials

Your project needs to be configured with the following:

1. App Identifier
2. API key from [your Novu dashboard](https://web.novu.co/settings).
3. SubscriberId to send notifications to.

## Run the project

To run the project, first, clone the repo.

```sh
cd Front-end
```

```sh
npm install
```

Create a `.env` file and the following variables - `REACT_APP_SUB_ID` and `REACT_APP_APP_ID` to it.
<br/>

`REACT_APP_SUB_ID` is the identifier for the 'SubscriberID' and it is used to identify the [subscriber](https://docs.novu.co/subscribers/subscribers) you're sending notifications to. 

You can obtain the 'SubscriberID' from the [Novu dsashboard](https://web.novu.co/subscribers). `REACT_APP_APP_ID`, on the other hand, is the identifier for the application.

<br/>

You can get your own application identifier from the [Novu dashboard settings](https://web.novu.co/settings).

Start the front-end using:

```sh
npm start
```

Now, we'll set up the backend:

```sh
cd ../Back-end
```

```sh
npm install
```

Create a `.env` file and the variable - `NOVU_API_KEY` to it. It has been logged in `novu.js` at line 6. Use it to confirm your key value. You can get your API key from the [Novu dashboard](https://web.novu.co/settings).

Fire up the backend server using:

```sh
npm start
```

## ⭐️ Why Novu?

Novu provides a unified API that makes it simple to send notifications through multiple channels, including In-App, Push, Email, SMS, and Chat.
With Novu, you can create custom workflows and define conditions for each channel, ensuring that your notifications are delivered in the most effective way possible.

## ✨ Features

- 🌈 Single API for all messaging providers (In-App, Email, SMS, Push, Chat)
- 💅 Easily manage notifications over multiple channels
- 🚀 Equipped with a CMS for advanced layouts and design management
- 🛡 Built-in protection for missing variables (Coming Soon)
- 📦 Easy to set up and integrate
- 🛡 Debug and analyze multi-channel messages in a single dashboard
- 📦 Embeddable notification center with real-time updates
- 👨‍💻 Community driven
