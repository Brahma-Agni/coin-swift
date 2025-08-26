import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CoreSolutions } from "./components/CoreSolutions";
import { WhatSetsUsApart } from "./components/WhatSetsUsApart";
import { PlatformWallet } from "./components/PlatformWallet";
import { Newsroom } from "./components/Newsroom";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CoreSolutions />
      <WhatSetsUsApart />
      <PlatformWallet />
      <Newsroom />
      <Footer />
    </div>
  );
}