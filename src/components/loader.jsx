import React from 'react';
import {
  Code,
  Cpu,
  BookOpen,
  ShoppingCart,
  Briefcase,
  Brain,
  Laptop,
  Globe,
  Building2,
  Boxes
} from 'lucide-react';
import sstar from '../assets/icons/sstar.svg'
function LogoSection() {
  return (
    <div className="flex gap-16 items-center justify-center min-w-max">
      <div className="flex items-center gap-2">
        <Code size={40} />
        <span className="text-[10px] font-semibold" style={{fontSize: '30px'}}>Codecademy</span>
      </div>
      <img src={sstar} />
      <div className="flex items-center gap-2">
        <Cpu size={40} />
        <span className="text-8xl font-bold" style={{ fontSize: '30px' }}>AMD</span>
      </div>
      <img src={sstar} />
      <div className="flex items-center gap-2">
        <BookOpen size={40} />
        <span className="text-[10px] font-semibold" style={{ fontSize: '30px' }}>Coursera</span>
      </div>
      <img src={sstar} />
      <div className="flex items-center gap-2">
        <ShoppingCart size={40} />
        <span className="text-[10px] font-semibold" style={{ fontSize: '30px' }}>Amazon</span>
      </div>
      <img src={sstar} />
      <div className="flex items-center gap-2">
        <Briefcase size={40} />
        <span className="text-[10px] font-semibold" style={{ fontSize: '30px' }}>Microsoft</span>
      </div>
      <img src={sstar} />
      <div className="flex items-center gap-2">
        <Brain size={40} />
        <span className="text-[10px] font-semibold" style={{ fontSize: '30px' }}>Cognizant</span>
      </div>
      <img src={sstar} />
      <div className="flex items-center gap-2">
        <Laptop size={40} />
        <span className="text-[10px] font-semibold" style={{ fontSize: '30px' }}>Dell</span>
      </div>
      <img src={sstar} />
      <div className="flex items-center gap-2">
        <Globe size={40} />
        <span className="text-[10px] font-semibold" style={{ fontSize: '30px' }}>Meta</span>
      </div>
      <img src={sstar} />
      <div className="flex items-center gap-2">
        <Building2 size={40} />
        <span className="text-[10px] font-semibold" style={{ fontSize: '30px' }}>Oracle</span>
      </div>
      <img src={sstar} />
      <div className="flex items-center gap-2">
        <Boxes size={40} />
        <span className="text-[10px] font-semibold" style={{ fontSize: '30px' }}>AWS</span>
      </div>
      <img src={sstar} />
    </div>
  );
}

function Loader() {
  return (
    <div className="h-[200px]  flex items-center justify-center bg-white">
      <div className="w-full h-[100px] bg-navy-900 py-8 overflow-hidden flex items-center">
        <div className="relative flex">
          <div className="animate-scroll flex">
            <LogoSection />
            <LogoSection />
          </div>
          <div className="animate-scroll flex" aria-hidden="true">
            <LogoSection />
            <LogoSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;