import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import CardGroup from "../../components/CardGroup";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import MenuHeader from "../../components/MenuHeader";

function HomePage() {
  return (
    <div>
      <Navbar />
      <MenuHeader />
      <div
        className="mt-4 fs-3 ms-2"
        style={{ marginBottom: "-25px", fontWeight: "600" }}
      >
        Newly Arrived Cars
      </div>
      <CarouselCard />
      <div
        className="mt-4 fs-3 ms-2"
        style={{ marginBottom: "-25px", fontWeight: "600" }}
      >
        Cars with Best Inspection Score
      </div>
      <CardGroup />
      <Footer />
    </div>
  );
}

export default HomePage;
