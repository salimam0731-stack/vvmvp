const ashrams = [
    { name: "Bangalore Ashram", location: "Bangalore, Karnataka", image: "bangalore.jpg", map: "https://maps.app.goo.gl/Ujssm71SJR4obSUT7", programs: "bangalore", programCount: 66, donate: "bangalore", donateCount: 9 },
    { name: "Triveni Ashram", location: "Pune, Maharashtra", image: "triveni.jpg", map: "https://maps.app.goo.gl/LSG3gp3F8PBrGdvS8", programs: "triveni", programCount: 77, donate: "triveni", donateCount: 12 },
    { name: "Bodh Gaya Ashram", location: "Bodh Gaya, Bihar", image: "bodhgaya.jpg", map: "https://maps.app.goo.gl/8gw2iFfrTXUfmmPFA", programs: "bodhgaya", programCount: 2, donate: "bodhgaya", donateCount: 1 },
    { name: "Vidarbha Ashram", location: "Nagpur, Maharashtra", image: "nagpur.jpg", map: "https://maps.app.goo.gl/2biNQNbBN6kyRrc17", programs: "nagpur", programCount: 9, donate: "nagpur", donateCount: 3 },
    { name: "Rishikesh Ashram", location: "Rishikesh, Uttarakhand", image: "rishikesh.jpg", map: "https://maps.app.goo.gl/AA6RrzYrkSynS3E58", programs: "rishikesh", programCount: 31, donate: "rishikesh", donateCount: 2 },
    { name: "Vasad Ashram", location: "Vasad, Gujarat", image: "vasad.jpg", map: "https://maps.app.goo.gl/qygKDSTa5XnwKH7B8", programs: "vasad", programCount: 39, donate: "vasad", donateCount: 2 },
    { name: "Jaipur Ashram", location: "Jaipur, Rajasthan", image: "jaipur.jpg", map: "https://maps.app.goo.gl/iVnP3pc14hLQfQk99", programs: "jaipur", programCount: 12, donate: "jaipur", donateCount: 2 },
    { name: "Omkareshwar Ashram", location: "Omkareshwar, Madhya Pradesh", image: "omkareshwar.jpg", map: "https://maps.app.goo.gl/11X3RR51A699AUCY8", programs: "omkareshwar", programCount: 21 },
    { name: "Manasa Ganga Ashram", location: "Hyderabad, Telangana", image: "manasganga.jpg", map: "https://maps.app.goo.gl/vrT39FfhR8tMZRQf9", programs: "manasganga", programCount: 9 },
    { name: "Kosi Ashram", location: "Mathura, Uttar Pradesh", image: "kosi.jpg", map: "https://maps.app.goo.gl/hAhRWer6NVCREeN97", programs: "kosi", programCount: 8 },
    { name: "Guwahati Ashram", location: "Guwahati, Assam", image: "guwahati.jpg", map: "https://maps.app.goo.gl/FKLV4TZ2zPeetiHb8", programs: "guwahati", programCount: 5, donate: "guwahati", donateCount: 2 },
    { name: "Tehri Ashram", location: "Faigul, Uttarakhand", image: "tehri.jpg", map: "https://maps.app.goo.gl/AfzxwLZakK37mk2QA", programs: "tehri", programCount: 3 },
    { name: "Mysore Ashram", location: "Mysore, Karnataka", image: "mysore.jpg", map: "https://maps.app.goo.gl/ZcesBKnziFWevACq6", programs: "mysore", programCount: 14 },
    { name: "Diphu Ashram", location: "Thesojuri, Assam", image: "diphu.jpg", map: "https://maps.app.goo.gl/LXoknusMXWhSAWDYA", programs: "diphu", programCount: 6, donate: "diphu", donateCount: 2 },
    { name: "Kollam Ashram", location: "Kollam, Kerala", image: "kollam.jpg", map: "https://www.google.com/maps/search/?api=1&query=Kollam%2C%20Kerala", programs: "kollam", programCount: 8, donate: "kollam", donateCount: 1 },
    { name: "Kalady Ashram", location: "Kalady, Kerala", image: "kalady.jpg", map: "https://maps.app.goo.gl/Uw2xkKerxtBg9YpH6", programs: "kalady", programCount: 14, donate: "kalady", donateCount: 1 },
    { name: "Payyoli Ashram", location: "Moodadi, Kerala", image: "payyoli.jpg", map: "https://maps.app.goo.gl/8BpWa1x7cYzgEF2x5", programs: "payyoli", programCount: 12, donate: "payyoli", donateCount: 2 },
    { name: "Farrukhabad Gurukul", location: "Farrukhabad, Uttar Pradesh", image: "farrukhabad.jpg", map: "https://maps.app.goo.gl/6ZLzAZ9uPXw1Atv26", programs: "farrukhabad", programCount: 2 },
    { name: "Chamba Gurukul", location: "Chamba, Himachal Pradesh", image: "chamba.jpg", map: "https://maps.app.goo.gl/hYgnFn1mvT1YUegv5", programs: "chamba", programCount: 0 },
    { name: "Kaithal Ashram", location: "Kaithal, Haryana", image: "kaithal.jpg", map: "https://maps.app.goo.gl/iYuvgopL2PiJtRdQ8", programs: "kaithal", programCount: 0 },
    { name: "Trivandrum Ashram", location: "Trivandrum, Kerala", image: "trivandrum.jpg", map: "https://maps.app.goo.gl/djMo1T86MGwiEEz8A", programs: "trivandrum", programCount: 2, donate: "trivandrum", donateCount: 1 },
    { name: "Swarg Dham Ashram", location: "Rishikesh, Uttarakhand", image: "swargdham.jpg", map: "https://maps.app.goo.gl/JpdVwHQKqZ7U7N2D9", programs: "swargdham", programCount: 13, donate: "swargdham", donateCount: 1 },
    { name: "SSU Gurukul", location: "Cuttack, Odisha", image: "ssugurukul.jpg", map: "https://maps.app.goo.gl/dpjPxfzqQfxZ9nVQ6", programs: "ssugurukul", programCount: 0 },
    { name: "Jabalpur Gurukul", location: "Jabalpur, Madhya Pradesh", image: "jabalpurgurukul.jpg", map: "https://maps.app.goo.gl/2ETj8XAg4zaPvgnN9", programs: "jabalpurgurukul", programCount: 0, donate: "jabalpurgurukul", donateCount: 1 },
    { name: "Amravati Ashram", location: "Amravati, Maharashtra", image: "amravati.jpg", map: "https://maps.app.goo.gl/T6DrDE8Prbacu2cy7", programs: "amravati", programCount: 2 },
    { name: "Kollam Ashram", location: "Kollam, Kerala", image: "kollam.jpg", map: "https://maps.app.goo.gl/T6DrDE8Prbacu2cy7", programs: "kollam", programCount: 0 },
    { name: "Mata Sundari Ashram", location: "New Delhi, New Delhi", image: "matasundari.jpg", map: "https://maps.app.goo.gl/K6jFrGXkha7TeMTv6", programs: "matasundari", programCount: 0 },
    { name: "Sanjan Ashram", location: "Vapi, Gujarat", image: "sanjan.jpg", map: "https://www.google.com/maps/search/?api=1&query=Vapi%2C%20Gujarat", programs: "sanjan", programCount: 0 },
    { name: "Mumbai Ashram (Bhadane)", location: "Bhadane, Maharashtra", image: "bhadane.jpg", map: "https://www.google.com/maps/search/?api=1&query=Bhadane%2C%20Maharashtra", programs: "bhadane", programCount: 0 },
    { name: "Vijayawada Ashram", location: "Vijayawada, Andhra Pradesh", image: "vijayawada.jpg", map: "https://maps.app.goo.gl/FFoJuVBk7Bs2iFX67", programs: "vijayawada", programCount: 0 }
];

const ashramGrid = document.getElementById("ashrams-grid");

ashrams.forEach((ashram) => {
    const card = document.createElement("article");
    card.className = "ashram-card";

    const image = document.createElement("img");
    image.src = `https://programs.vvmvp.org/wp-content/themes/vds/img/ashrams/${ashram.image}`;
    image.alt = `${ashram.name} campus`;
    image.loading = "lazy";
    card.appendChild(image);

    const content = document.createElement("div");
    content.className = "ashram-card-content";

    const heading = document.createElement("h2");
    heading.textContent = ashram.name;
    content.appendChild(heading);

    const location = document.createElement("a");
    location.className = "ashram-location";
    location.href = ashram.map;
    location.target = "_blank";
    location.rel = "noopener noreferrer";
    location.innerHTML = `<span aria-hidden="true">&#128205;</span> ${ashram.location}`;
    content.appendChild(location);

    const programs = document.createElement("a");
    programs.className = "ashram-program-button";
    programs.href = "programs.html";
    programs.textContent = "View Programs";
    content.appendChild(programs);

    const donate = document.createElement("a");
    donate.className = "ashram-donate-button";
    donate.href = ashram.donate
        ? `https://programs.vvmvp.org/donate/${ashram.donate}`
        : "https://programs.vvmvp.org/donate/";
    donate.textContent = ashram.donateCount === undefined
        ? "Donate to Projects"
        : `Donate to Projects ${ashram.donateCount}`;
    content.appendChild(donate);

    card.appendChild(content);
    ashramGrid.appendChild(card);
});
