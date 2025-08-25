import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID;

interface PayPalButtonProps {
  amount: number;
  onSuccess?: () => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, onSuccess }) => {
  return (
    <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID }}>
      <PayPalButtons
        style={{ layout: "vertical", color: "gold", label: "paypal", tagline: false, shape: "rect" }}
        fundingSource="paypal"
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [{ amount: { currency_code: "USD", value: amount.toFixed(2) } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            if (onSuccess) onSuccess();
          });
        }}
        onError={() => {
          alert('There was an error processing your payment.');
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
