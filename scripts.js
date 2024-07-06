document.addEventListener('DOMContentLoaded', function () {
    let challenges = JSON.parse(localStorage.getItem('challenges')) || [
        {
            title: "Reverse a String",
            description: "Write a function that reverses a string. The input string is given as an array of characters s."
        },
        {
            title: "Sum of Two Numbers",
            description: "Given two integers a and b, return the sum of the two integers."
        },
        {
            title: "Palindrome Check",
            description: "Write a function that checks if a given string is a palindrome."
        }
    ];

    function saveChallenges() {
        localStorage.setItem('challenges', JSON.stringify(challenges));
    }

    function displayChallenges() {
        const challengesList = document.getElementById('challengesList');
        challengesList.innerHTML = '';
        challenges.forEach((challenge, index) => {
            const li = document.createElement('li');
            li.innerText = challenge.title;
            li.addEventListener('click', () => displayChallenge(challenge));
            challengesList.appendChild(li);
        });
    }

    function displayChallenge(challenge) {
        document.getElementById('challengeTitle').innerText = challenge.title;
        document.getElementById('challengeDescription').innerText = challenge.description;
        document.getElementById('solution').value = '';
    }

    document.getElementById('submitSolutionBtn').addEventListener('click', function () {
        const title = document.getElementById('challengeTitle').innerText;
        const solution = document.getElementById('solution').value;
        alert(`Solution for "${title}" submitted: \n${solution}`);
    });

    document.getElementById('addChallengeBtn').addEventListener('click', function () {
        const title = document.getElementById('newChallengeTitle').value;
        const description = document.getElementById('newChallengeDescription').value;
        if (title && description) {
            challenges.push({ title, description });
            saveChallenges();
            displayChallenges();
            document.getElementById('newChallengeTitle').value = '';
            document.getElementById('newChallengeDescription').value = '';
        } else {
            alert("Please fill in both the title and description.");
        }
    });

    const comments = [];

    document.getElementById('addCommentBtn').addEventListener('click', function() {
        const commentText = document.getElementById('commentInput').value;
        if (commentText) {
            comments.push(commentText);
            displayComments();
            document.getElementById('commentInput').value = '';
        } else {
            alert("Please enter a comment.");
        }
    });

    function displayComments() {
        const commentsList = document.getElementById('commentsList');
        commentsList.innerHTML = '';
        comments.forEach(comment => {
            const li = document.createElement('li');
            li.innerText = comment;
            commentsList.appendChild(li);
        });
    }

    displayChallenges();
    displayComments();

    // Toggle Dark Mode and Container Visibiliy
    const toggleBtn = document.getElementById('toggleBtn');
    const container = document.querySelector('.container');

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelectorAll('button').forEach(button => button.classList.toggle('dark-mode'));
        container.classList.toggle('dark-mode');
        container.classList.toggle('hidden');
    });
});
