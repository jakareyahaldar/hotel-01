import React from 'react';

const HotelConditions = () => {
  const conditions = [
    {
      id: 1,
      title: 'Check-in & Check-out',
      details: 'Check-in begins at 3:00 PM. Check-out is by 11:00 AM. Late check-outs are subject to availability and fees.',
      tag: 'Schedule',
    },
    {
      id: 2,
      title: 'Smoking Policy',
      details: 'Strictly 100% non-smoking indoors. A $250 cleaning fee will be assessed for violations in rooms or balconies.',
      tag: 'Policy',
    },
    {
      id: 3,
      title: 'Quiet Hours',
      details: 'For guest comfort, quiet hours are enforced daily between 10:00 PM and 7:00 AM.',
      tag: 'Noise',
    },
    {
      id: 4,
      title: 'Pet Policy',
      details: 'Pets are permitted in designated pet-friendly rooms only. Prior registration and daily fees apply.',
      tag: 'Pets',
    },
    {
      id: 5,
      title: 'Occupancy & Visitors',
      details: 'Maximum room occupancy limits must be strictly followed. Unregistered visitors are not allowed past 10:00 PM.',
      tag: 'Security',
    },
    {
      id: 6,
      title: 'Damages & Charges',
      details: 'Guests are held fully accountable for any loss or physical damage caused to hotel property during their stay.',
      tag: 'Liability',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 font-sans text-slate-800">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          Hotel Stay Conditions & Rules
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Please review our terms of stay to ensure a seamless and safe experience for all guests.
        </p>
      </div>

      {/* Conditions Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {conditions.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  0{item.id}
                </span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-8 rounded-lg bg-amber-50 p-4 border border-amber-200 text-xs sm:text-sm text-amber-900">
        <strong className="font-semibold">Need assistance or special accommodations?</strong> Please contact the front desk ahead of your arrival.
      </div>
    </section>
  );
};

export default HotelConditions;