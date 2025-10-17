export const getToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

export const getCurrentDayOfWeek = () => getToday().getDay();

export const isPromoActive = (promo) => {
  const today = getToday();
  const start = new Date(promo.startDate);
  const end = new Date(promo.endDate);
  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);
  return today >= start && today <= end;
};

export const getDaysRemaining = (endDate) => {
  const today = getToday();
  const end = new Date(endDate);
  end.setHours(23, 59, 59, 999);
  const diffMs = end - today;
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
};
