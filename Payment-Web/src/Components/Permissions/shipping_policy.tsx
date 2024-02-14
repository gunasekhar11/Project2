import React from "react";
import { Link } from "react-router-dom";

const Shipping_policy = () => {
  return (
    <>
      <section className="terms-section">
      <div className="terms-layout">
          <h5>Shipping & Delivery Policy</h5>
          <p>Last updated on Jan 7th, 2024</p>
          <br />
          <section>
            <h6>International Shipping</h6>
            <p>
              For International buyers, orders are shipped and delivered through
              registered international courier companies and/or International
              speed post only. Our international shipping ensures that your
              products reach you safely and in a timely manner. Please note that
              additional customs duties or taxes may apply, and it is the
              responsibility of the buyer to cover these costs.
            </p>
          </section>

          <section>
            <h6>Domestic Shipping</h6>
            <p>
              For domestic buyers, orders are shipped through registered
              domestic courier companies and/or speed post only. We strive to
              provide reliable and efficient domestic shipping services to
              ensure the timely delivery of your orders within the country. Our
              team works to process and dispatch orders promptly to meet your
              expectations.
            </p>
          </section>

          <section>
            <h6>Order Processing and Delivery Time</h6>
            <p>
              Orders are processed and shipped within 0-7 days or as per the
              delivery date agreed at the time of order confirmation. The
              delivery time is subject to Courier Company/post office norms. We
              make every effort to dispatch orders promptly, and the estimated
              delivery timeframes are communicated to you during the checkout
              process. Please consider any additional processing time during
              peak seasons or holidays.
            </p>
          </section>

          <section>
            <h6>Delay Disclaimer</h6>
            <p>
              MAANG TECHNOLOGIES PRIVATE LIMITED is not liable for any delay in
              delivery by the courier company/postal authorities. While we
              guarantee to hand over the consignment to the courier company or
              postal authorities within 0-7 days from the date of the order and
              payment, unforeseen circumstances or external factors may cause
              delays. We appreciate your understanding in such situations.
            </p>
          </section>

          <section>
            <h6>Delivery Address</h6>
            <p>
              Delivery of all orders will be made to the address provided by the
              buyer. It is crucial to ensure that the delivery address is
              accurate and complete. MAANG TECHNOLOGIES PRIVATE LIMITED will not
              be responsible for misdelivery or non-delivery due to inaccurate
              or incomplete addresses. Please double-check your address
              information before confirming your order.
            </p>
          </section>

          <section>
            <h6>Contact Information</h6>
            <p>
              For any issues or queries regarding our shipping and delivery
              services, you may contact our helpdesk at [insert email] or
              [insert phone number]. Our customer service team is here to assist
              you and provide any necessary information or support related to
              your orders.
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default Shipping_policy;
