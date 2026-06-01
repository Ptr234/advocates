const Ticker = () => {
  const items = [
    "Banking & Finance",
    "Corporate & Commercial",
    "Dispute Resolution",
    "Intellectual Property",
    "Energy & Infrastructure",
    "Taxation",
    "Employment & Labour",
    "Real Estate & Conveyancing",
  ];

  const displayItems = [...items, ...items];

  return (
    <div className="bg-white py-6 overflow-hidden border-y-[0.5px] border-rule">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {displayItems.map((item, index) => (
          <span
            key={index}
            className="text-ink-muted font-sans text-[10px] uppercase tracking-[0.3em] font-bold mx-16 flex items-center"
          >
            {item}
            <span className="ml-32 w-1.5 h-1.5 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
