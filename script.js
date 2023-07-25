async function getCricketData() {
  try {
    const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=f061b623-2698-4c92-b89b-c3d80915b31c&offset=0");
    const data = await response.json();

    if (data.status != "success") return;

    const cricketList = data.data;

    if (!cricketList) return [];

    const showData = cricketList
      //.filter(match => match.series_id === "7e6e13be-a46d-472f-b73c-f4360e320539")
      .map(match => `${match.name}, ${match.status}, ${match.teams}`);

    console.log({ showData });

    document.getElementById("matchesofcricket").innerHTML=showData.map(match => `<li type="cricle">${match} </li>`).join('');
    return showData;
  } catch (error) {
    console.error("Error fetching cricket data:", error);
  }
}

getCricketData();
