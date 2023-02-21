import React from "react";
import "./App.css";

function App() {
  let priceinfo = [
    {
      title: "FREE",
      subtitle: "$0",
      description: [
        {
          list1: "Single User",
          list2: "5GB Storage",
          list3: "Unlimited Public Projects",
          list4: "Unlimited Private Projects",
          list5: "Dedicated Phone Support",
          list6: "Free Subdomain",
          list7: "Monthly Status Reports",
        },
      ],
    },
    {
      title: "PLUS",
      subtitle: "$9",
      description: [
        {
          list1: "5 Users",
          list2: "50GB Storage",
          list3: "Unlimited Public Projects",
          list4: "Unlimited Private Projects",
          list5: "Dedicated Phone Support",
          list6: "Free Subdomain",
          list7: "Monthly Status Reports",
        },
      ],
    },
    {
      title: "PRO",
      subtitle: "$49",
      description: [
        {
          list1: "Unlimited Users",
          list2: "150GB Storage",
          list3: "Unlimited Public Projects",
          list4: "Unlimited Private Projects",
          list5: "Dedicated Phone Support",
          list6: "Unlimited Free Subdomain",
          list7: "Monthly Status Reports",
        },
      ],
    },
  ];

  return <div>{<Main d={priceinfo} />}</div>;
}

function Main({ d }) {
  return (
    <div className="row" id="container">
      {d.map((data) => (
        <PricingCard
          title={data.title}
          subtitle={data.subtitle}
          desc={data.description}
        />
      ))}
    </div>
  );
}

function PricingCard({ title, subtitle, desc }) {
  let ss = Object.values(desc[0]);

  console.log(ss);

  return (
    <div class="col">
      <div class="card">
        <h6 class="card-title text-center p-2">{title}</h6>
        <h1 class="card-header text-center">
          {subtitle}
          <span className="period">/month</span>
        </h1>
        <div class="card-body">
          <p class="card-text">
            <ul class="row">
              {ss.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </p>
          <a href="#" class="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
