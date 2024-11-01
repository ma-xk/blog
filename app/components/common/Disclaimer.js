const Disclaimer = () => (
    <div className="bg-blue p-6 rounded-lg shadow-lg mb-8">
      <p className="text-white text-lg mb-6 leading-relaxed">
        Unlock incredible savings on your healthcare expenses with{" "}
        <span className="font-bold">Flexible Spending Accounts</span>! Dive into
        the world of pre-tax savings, slashing your medical, pharmaceutical,
        dental, and eye care costs by up to{" "}
        <span className="text-green font-bold">30%</span>! The tricky part?
        Deciding how much to allocate. But fear not, we've got your back! Curious
        about what qualifies for FSA? Explore our vast selection or check out the{" "}
        <a href="/fsa-eligible-products" className="text-white underline hover:text-yellow-200">
          FSA Eligibility List
        </a>{" "}
        on our site. Craving more details? Our{" "}
        <a href="/what-is-a-fsa" className="text-white underline hover:text-yellow-200">
          'What is a Flexible Spending Account?'
        </a>{" "}
        explainer breaks down the essentials, ensuring you make the most out of
        your FSA.
      </p>
      <p className="text-sm text-gray-100 italic">
        *The maximum allowed IRS contribution to your FSA in 2024 is up to $3,200,
        however your employer may enforce a lesser maximum. The estimated tax
        savings provided are for illustrative purposes only, and should not be
        construed as tax or legal advice. Consult a licensed tax professional for
        appropriate advice given your individual situation. Plan your FSA
        contribution carefully, as any unused funds may be forfeited following the
        end of your plan year or any deadline extension period thereafter. Additionallt, you should keep in mind that various factors may influence a provider’s decision to deny a claim, including restrictions on over-the-counter products or specific services not covered by your plan. It is incumbent upon you to be informed of your plan's limitations.
      </p>
    </div>
  );
  
  export default Disclaimer;