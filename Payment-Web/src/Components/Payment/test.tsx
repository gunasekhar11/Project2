import React, { useState } from "react";


const PaymentGateway = () => {
  const [paymentSessionId, setPaymentSessionId] = useState("");

  const render = () => {
    const paymentSessionIdValue = paymentSessionId.trim();
    if (!paymentSessionIdValue) {
      alert("No session_id specified");
      return;
    }
    // const cf = new Cashfree(paymentSessionIdValue);
    // cf.redirect();
  };

  const { Payouts } = require('@cashfreepayments/cashfree-sdk');

// Instantiate Cashfree Payouts
const payoutsInstance = new Payouts({
  env: 'TEST',
  clientId: '<CLIENT_ID>',
  clientSecret: '<CLIENT_SECRET>',
  pathToPublicKey: '/path/to/your/public/key/file.pem',
  //"publicKey": "ALTERNATIVE TO SPECIFYING PATH (DIRECTLY PASTE PublicKey)"
});

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Payment Gateway</title>
        <script
          type="text/javascript"
          src="https://sdk.cashfree.com/js/ui/2.0.0/cashfree.sandbox.js"
        ></script>
      </head>
      <body>
        <div>
          <span className="order-token">Payment Session Id :</span>
          <input
            type="text"
            placeholder="order_token"
            id="paymentSessionId"
            className="inputText"
            value={paymentSessionId}
            onChange={(e) => setPaymentSessionId(e.target.value)}
          />
          <button className="btn-render" onClick={render}>
            Render
          </button>
        </div>
      </body>
    </html>
  );
};

export default PaymentGateway;
