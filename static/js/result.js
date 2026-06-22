const cat = localStorage.getItem("winnerCat");

const descriptions = {

    Maple: "You are Maple, the wise storyteller of the forest. Curious, thoughtful and always eager to learn, you find joy in discovering new ideas and understanding the world around you. People admire your intelligence and calm presence, and they often come to you for advice or a different perspective. Whether you are reading, researching or quietly observing, your mind is always exploring something fascinating.",

    Misty: "You are Misty, the kind-hearted caretaker of the forest. Warm, compassionate and dependable, you naturally make others feel welcome and understood. You enjoy helping people, creating harmony and building meaningful connections. Your gentle strength inspires trust, and your ability to listen and support others makes you a treasured friend. Wherever you go, you bring comfort and kindness with you.",

    Clover: "You are Clover, the peaceful dreamer of the forest. Creative, imaginative and deeply connected to nature, you find beauty in the little things that others often overlook. You enjoy quiet moments, artistic expression and the feeling of being surrounded by calm and wonder. Your presence is soothing to those around you, and your unique perspective helps people see the world in a more magical and meaningful way.",

    Ember: "You are Ember, the fearless adventurer of the forest. Brave, energetic and always ready for something new, you thrive on excitement and discovery. Challenges do not intimidate you—they motivate you. Your confidence and enthusiasm inspire others to step outside their comfort zones and embrace new experiences. Whether exploring unknown paths or chasing ambitious goals, you approach life with courage, passion and determination."
};

const images = {

    Maple: "/static/images/maple.png",

    Misty: "/static/images/misty.png",

    Clover: "/static/images/clover.png",

    Ember: "/static/images/ember.png"
};

document.getElementById("result-name").textContent = cat;

document.getElementById("result-text").textContent =
    descriptions[cat];

document.getElementById("result-cat").src =
    images[cat];