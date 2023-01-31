
// Get form elements
const form = document.querySelector('form');
const HSCInstitutionName = document.querySelector('#HSCInstitutionName');
const HSCBoard = document.querySelector('#HSCBoard');
const ScoreInHsc = document.querySelector('#ScoreInHsc');
const SSCInstitutionName = document.querySelector('#SSCInstitutionName');
const SSCBoard = document.querySelector('#SSC Board');
const ScoreInSsc = document.querySelector('#ScoreInSsc');
const CurrentlyPursuing = document.querySelector('#CurrentlyPursuing');
const InstitutionName = document.querySelector('#InstitutionName');
const OAP = document.querySelector('#OAP');
const CB = document.querySelector('#CB');
let selectedOption = selectElement.options[selectElement.selectedIndex];

// Form submit event listener
form.addEventListener('submit', (e) => {
    // Prevent default form behavior
    e.preventDefault();

    // Validate HSC Institution Name
    if (HSCInstitutionName.value === '') {
        alert('HSC Institution Name is required');
        return;
    }

    // Validate HSC Board
    // Get the selected option

    // Check if the selected option has a value
    if (selectedOption.value === "") {
        // Show error message
        alert("Please select an option from the dropdown");
    } else {
        // Continue with form submission or further processing
    }

    // Validate HSC Score
    if (ScoreInHsc.value === '') {
        alert('HSC Score is required');
        return;
    }

    // Validate SSC Institution Name
    if (SSCInstitutionName.value === '') {
        alert('SSC Institution Name is required');
        return;
    }

    // Validate SSC Board
    if (SSCBoard.value === '') {
        alert('SSC Board is required');
        return;
    }

    // Validate SSC Score
    if (ScoreInSsc.value === '') {
        alert('SSC Score is required');
        return;
    }

    // Validate Currently Pursuing
    if (CurrentlyPursuing.value === '') {
        alert('Currently Pursuing is required');
        return;
    }

    // Validate Institution Name
    if (InstitutionName.value === '') {
        alert('Institution Name is required');
        return;
    }

    // Validate Overall Percentage
    if (OAP.value === '') {
        alert('Overall Percentage is required');
        return;
    }

    // Validate Current Backlogs
    if (CB.value === '') {
        alert('Current Backlogs is required');
        return;
    }

    // If form is valid, submit it
    form.submit();
});

