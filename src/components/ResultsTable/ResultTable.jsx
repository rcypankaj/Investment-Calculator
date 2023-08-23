import React from "react";

import classes from "./ResultTable.module.css";

const formatter = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultTable = ({ data, initialInvestment }) => {
  console.log("yearlyData");
  console.log(data);
  return (
    <table className={classes["result"]}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((particularYear) => {
          return (
            <tr key={formatter.format(particularYear.year)}>
              <td>{formatter.format(particularYear.year)}</td>
              <td>{formatter.format(particularYear.savingsEndOfYear)}</td>
              <td>{formatter.format(particularYear.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  particularYear.savingsEndOfYear -
                    initialInvestment -
                    particularYear.yearlyContribution * particularYear.year
                )}
              </td>
              <td>
                {formatter.format(
                  initialInvestment +
                    particularYear.yearlyContribution * particularYear.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultTable;
