import { useReducer, useState } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  msg: "Open your account!",
};

const START_BONUS = 50;

function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return state;

  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        isActive: true,
        balance: START_BONUS,
        msg: `Welcome, you receive ${START_BONUS} € as a bonus to start`,
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        msg: `You deposit ${action.payload} €`,
      };
    case "withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
        msg: `You withdraw ${action.payload} €`,
      };
    case "requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
        msg: `You request ${action.payload} € loan`,
      };
    case "payLoan":
      return {
        ...state,
        balance: state.balance - action.payload,
        loan: state.loan - action.payload,
        msg: `You pay ${action.payload} € loan`,
      };
    case "closeAccount":
      if (state.balance !== 0 || state.loan > 0) return state;
      return initialState;
    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { balance, loan, isActive, msg } = state;
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [requestLoanAmount, setRequestLoanAmount] = useState("");
  const [payLoanAmount, setPayLoanAmount] = useState("");

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p className="msg">{msg}</p>
      <p>
        Balance:
        <span style={{ color: balance >= 0 ? "green" : "red" }}>
          {" "}
          {balance} €
        </span>
      </p>
      <p>
        Loan:
        <span style={{ color: balance >= 0 ? "green" : "red" }}> {loan} €</span>
      </p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <input
          type="number"
          disabled={!isActive}
          value={depositAmount}
          onChange={(e) => {
            setDepositAmount(Number(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "deposit", payload: depositAmount });
            setDepositAmount("");
          }}
          disabled={!isActive}
        >
          Deposit
        </button>
      </p>
      <p>
        <input
          type="number"
          disabled={!isActive}
          value={withdrawAmount}
          onChange={(e) => {
            setWithdrawAmount(Number(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "withdraw", payload: withdrawAmount });
            setWithdrawAmount("");
          }}
          disabled={!isActive}
        >
          Withdraw
        </button>
      </p>
      <p>
        <input
          type="number"
          disabled={!isActive}
          value={requestLoanAmount}
          onChange={(e) => {
            setRequestLoanAmount(Number(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "requestLoan", payload: requestLoanAmount });
            setRequestLoanAmount("");
          }}
          disabled={!isActive}
        >
          Request a loan
        </button>
      </p>
      <p>
        <input
          type="number"
          disabled={!isActive}
          value={payLoanAmount}
          onChange={(e) => {
            setPayLoanAmount(Number(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "payLoan", payload: payLoanAmount });
            setPayLoanAmount("");
          }}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "closeAccount" });
          }}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
