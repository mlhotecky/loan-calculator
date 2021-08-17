import React  from "react";
import LoanItem from "./LoanItem";

export default function LoanDetail(props) {
    const {
        totalPrincipal,
        term,
        totalCostOfCredit,
        totalRepayableAmount,
        monthlyPayment
    } = props;
    return (
        <div>
            <LoanItem title="Total Principal" value={totalPrincipal} />
            <LoanItem title="Term" value={term} unit="days" />
            <LoanItem title="Total Cost" value={totalCostOfCredit} />
            <LoanItem bold title="Total Amount" value={totalRepayableAmount}  />
            <LoanItem bold title="Monthly Payment" value={monthlyPayment} />
        </div>
    )

}