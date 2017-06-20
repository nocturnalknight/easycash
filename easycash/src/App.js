import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

        </p>
        <button id="link-button">Link Account</button>

<script src="https://cdn.plaid.com/link/v2/stable/link-initialize.js"></script>}
//<script type="text/javascript">
  var handler = Plaid.create({
  clientName: 'Plaid Walkthrough Demo',
  env: 'sandbox',
  key: '4995c6459ed3833927ad2b18e8207f', // Replace with your public_key to test with live credentials
  product: ['auth', 'transactions'],
  webhook: '[WEBHOOK_URL]', // Optional – use webhooks to get transaction and error updates
  selectAccount: false, // Optional – trigger the Select Account
  onLoad: function() {
    // Optional, called when Link loads
  },
  onSuccess: function(public_token, metadata) {
    // Send the public_token to your app server.
    // The metadata object contains info about the institution the
    // user selected and the account ID, if `selectAccount` is enabled.
    $.post('/get_access_token', {
      public_token: public_token,
    });
  },
  onExit: function(err, metadata) {
    // The user exited the Link flow.
    if (err != null) {
      </div>
    );
  }

  $('#link-button').on('click', function(e) {
    handler.open();
    // Alternatively, you can have a specific institution
    // prompt for authentication. Example:
    //
    // handler.open('ins_100000');
    //
    // This will open Link with Union Bank as the institution.
  });

export default App;
