const subjects = ["construction workers", "marine life", "jockeys", "doctors", "monkeys", "philanthropists"];
const activities = ["sim racing", "painting", "ballet", "grilling meat", "treasure hunting", "astronomy", "eating bananas"];
const emotions = ["happy", "wild", "loving", "caring", "joyful", "anxious", "fearful", "confused"];

const generateMessage = () => {
    const randomSubjectIndex = Math.floor(Math.random() * subjects.length);
    const randomActivityIndex = Math.floor(Math.random() * activities.length);
    const randomEmotionIndex = Math.floor(Math.random() * emotions.length);

    const randomMessage = subjects[randomSubjectIndex] + " love to do " + activities[randomActivityIndex] + " which makes them " + emotions[randomEmotionIndex];
    console.log(randomMessage);
};

generateMessage();