



function dynamicStory() { 

    let userName = prompt("Enter your name");
    let gender = prompt("Enter your gender");
    let age = parseInt(prompt("Enter your age"));
    let location = prompt("Enter your location");
    let occupation =prompt("Enter your occupation");
    let spouseName =prompt("Enter name of your spouse");
    let numberOfchildren =parseInt(prompt("Enter the number of children,you have")); 
    let hobbies = prompt("Enter Your Hobbies");
    let religion = prompt("Enter Your religion");
    let aspiration = prompt("Enter Your future aspirations");
    let personalBeliefs = prompt("Enter Your personal Beliefs");
    const story_Name = ("A Journey of Success, Family, and Faith");
    let _introStory_ = `My name is ${userName} ,I am ${gender}.I am ${age} years old. The title of my story is ${story_Name}`;
    let bodyPart1 = `Once upon a time, in the bustling city of ${location},there lived a ${age},years old ,successful and benevolent ${gender} named ${userName}who was ${occupation} by profession.Beyond his professional endeavors, ${userName} cherished his loving spouse,${spouseName}, and their ${numberOfchildren}`;
    let bodyPart2 = `In his leisure moments, ${userName} liked to enjoy ${hobbies}, which brought him peace and inspiration.${userName}'s success and happiness were deeply rooted in the strong faith of ${religion}.Looking to the future, ${userName} had great aspirations. Driven by ${personalBeliefs}, ${userName} strived to create a world where kindness and fairness prevailed.`;

    return story_Name + _introStory_ + bodyPart1 + bodyPart2;
         
          
};

let output = dynamicStory();
alert(output);

