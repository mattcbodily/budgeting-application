insert into budget (
    user_id,
    income,
    monthly_savings
) values (
    ${user_id},
    ${income},
    ${monthlySavings}
)
returning budget_id, income, monthly_savings;