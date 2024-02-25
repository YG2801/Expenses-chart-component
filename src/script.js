const chartEl = document.getElementById("chart");
const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const currDay = days[new Date().getMonth()];

async function renderChart() {
  try {
    const resp = await fetch("../data.json");
    const data = await resp.json();
    const maxi = Math.max(...data.map((d) => d.amount));
    let html = data
      .map((d) => {
        const height = Math.floor((d.amount / maxi) * 100);
        return `
            <div class="flex h-full basis-[14%] flex-col justify-end">
                <div class="relative flex basis-[70%] items-end">
                    <div class="bar w-full cursor-pointer rounded-md bg-${d.day === currDay ? "cyan" : "soft-red"} transition-opacity hover:opacity-60" style="height:${height}%;">
                    </div>
                    <div class="tooltip absolute -left-[15%] flex w-[130%] items-center justify-center rounded-sm bg-dark-brown py-1 font-semibold text-very-pale-orange opacity-0 transition-opacity duration-300" style="bottom: ${height + 4}%;">
                        ${d.amount}
                    </div>
                </div>
                <p>${d.day}</p>
            </div>
        `;
      })
      .join("");
    chartEl.innerHTML = html;
  } catch (err) {
    console.log(err);
  }
}

renderChart();
