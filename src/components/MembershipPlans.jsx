import React from "react";
import Header from "./Header";

const plans = [
  {
    title: "Basic Membership (Free)",
    features: [
      "Welcome package with coupons or samples",
      "Access to member-only sales and promotions",
      "Monthly newsletter with pet care tips and exclusive offers",
    ],
    price: "Free",
  },
  {
    title: "Silver Membership",
    features: [
      "All Basic Membership benefits",
      "5% discount on all purchases",
      "Free birthday gift for the pet",
      "Early access to new products",
    ],
    price: "$50/year",
  },
  {
    title: "Gold Membership",
    features: [
      "All Silver Membership benefits",
      "10% discount on all purchases",
      "Free grooming service twice a year",
      "Invitations to VIP events and workshops",
      "Priority service for grooming appointments",
    ],
    price: "$100/year",
  },
  {
    title: "Platinum Membership",
    features: [
      "All Gold Membership benefits",
      "15% discount on all purchases",
      "Free monthly pet health checkup",
      "Personalized pet care consultation",
      "Free delivery service for all orders",
    ],
    price: "$200/year",
  },
];

const MembershipPlans = () => {
  return (
    <div className="mt-35 w-full">
      <Header />{" "}
      <div className="min-h-screen py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-10">
          Become a member; Get a discount
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-4">{plan.tittle}</h2>
              <ul className="mb-4 space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="text-center font-bold text-lg">{plan.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipPlans;
