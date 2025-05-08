
let sessionStart;
let annualSpend;
let wasteRate;
let interval;

function startClock() {
  const name = document.getElementById('prospectName').value;
  annualSpend = parseFloat(document.getElementById('annualSpend').value);
  if (!name || isNaN(annualSpend)) {
    alert("Please enter a valid name and annual spend.");
    return;
  }

  wasteRate = annualSpend * 0.3 / (365 * 24 * 60 * 60);

  document.getElementById('header').innerText = name;
  document.getElementById('annualSpendDisplay').innerText = annualSpend.toLocaleString();

  document.getElementById('input-screen').style.display = 'none';
  document.getElementById('main-screen').style.display = 'block';

  sessionStart = new Date();

  updateClock();
  interval = setInterval(updateClock, 1000);
}

function updateClock() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const secondsSinceYearStart = Math.floor((now - startOfYear) / 1000);
  const spendYTD = (annualSpend / (365 * 24 * 60 * 60)) * secondsSinceYearStart;
  const wasteYTD = spendYTD * 0.3;

  const sessionSeconds = Math.floor((now - sessionStart) / 1000);
  const sessionWaste = wasteRate * sessionSeconds;

  document.getElementById('spendYTD').innerText = spendYTD.toFixed(2);
  document.getElementById('wasteYTD').innerText = wasteYTD.toFixed(2);
  document.getElementById('sessionWaste').innerText = sessionWaste.toFixed(2);
}