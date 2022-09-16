
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 200000,
    years: 30,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('583.34');
});



