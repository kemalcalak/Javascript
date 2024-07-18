const startDate=new Date('07/15/2024 9:45:00');
const now=new Date();
console.log(startDate);

const diff=now.getTime()-startDate.getTime();
console.log(diff);

const mins=Math.round(diff/1000/60);
const hours=Math.round(mins/60);
const days=Math.round(hours/24);
const years=Math.round(days/365);
console.log(`Ders Dinlemeye ${mins} dakika önce başladım`);
console.log(`Ders Dinlemeye ${hours} saat önce başladım`);
console.log(`Ders Dinlemeye ${days} gün önce başladım`);
console.log(`Ders Dinlemeye ${years} yıl önce başladım`);

