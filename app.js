const litmusPapers = document.querySelectorAll('#litmus-papers div');
const beakers = document.querySelectorAll('.beaker');
let draggedItem = null;

// Drag-and-Drop Logic
litmusPapers.forEach(paper => {
    paper.addEventListener('dragstart', () => {
        draggedItem = paper.id; // 'blue-paper' or 'red-paper'
    });
});

beakers.forEach(beaker => {
    // Allow drop
    beaker.addEventListener('dragover', event => event.preventDefault());

    // Handle drop
    beaker.addEventListener('drop', () => {
        const type = beaker.dataset.type; // acidic, alkaline, or neutral
        const beakerId = beaker.dataset.id.toLowerCase(); // 'a', 'b', 'c', ...

        // Determine result based on dragged item and beaker type
        let result = '';
        if (draggedItem === 'blue-paper') {
            result = type === 'acidic' ? 'Turns Red' : 'No Change';
            document.getElementById(`blue-${beakerId}`).value = result;
        } else if (draggedItem === 'red-paper') {
            result = type === 'alkaline' ? 'Turns Blue' : 'No Change';
            document.getElementById(`red-${beakerId}`).value = result;
        }
    });
});

// Check Answers Logic
document.getElementById('check-answers').addEventListener('click', () => {
    document.getElementById('correct-answers-header').style.display = 'block';
    document.getElementById('correct-answers-table').style.display = 'block';
    document.getElementById('reset-observations').style.display = 'block';
});

// Reset Button Logic
document.getElementById('reset-observations').addEventListener('click', () => {
    // Select all input fields in the observation table
    const inputs = document.querySelectorAll('table tbody input');
    
    // Clear each input field
    inputs.forEach(input => input.value = '');
    
    // Hide the correct answers table and header (optional)
    document.getElementById('correct-answers-header').style.display = 'none';
    document.getElementById('correct-answers-table').style.display = 'none';
    document.getElementById('reset-observations').style.display = "none";
});
