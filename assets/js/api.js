async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/Thamyresarm/Thamyresarm.github.io/main/data/profile.json';
    const fetching = await fetch(url);
    return fetching.json();
}
