// ========================================
// GLOBAL VARIABLES & INITIALIZATION
// ========================================

// JavaScript Types: Number, String, Boolean, Object, Array
let currentStep = 1;
const totalSteps = 4;
let formData = {};
let startTime = new Date();
let timerInterval;

// Arrays to store validation rules
const validationRules = {
    fullName: { required: true, minLength: 3, pattern: /^[a-zA-Z\s]+$/ },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    phone: { required: true, pattern: /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/ },
    age: { required: true, min: 16, max: 100 },
    gender: { required: true },
    username: { required: true, minLength: 4, pattern: /^[a-zA-Z0-9_]+$/ },
    password: { required: true, minLength: 8 },
    confirmPassword: { required: true, match: 'password' },
    courses: { required: true, minSelected: 2 },
    studyMode: { required: true },
    terms: { required: true, checked: true }
};

// ========================================
// EVENT LISTENERS - DOM MANIPULATION
// ========================================

// Window onload event
window.onload = function() {
    initializeForm();
    startTimer();
    attachEventListeners();
    showWelcomePopup();
};

// Initialize form
function initializeForm() {
    updateProgressBar();
    updateStats();
}

// Attach all event listeners
function attachEventListeners() {
    // Real-time validation on input
    document.getElementById('fullName').addEventListener('input', function() {
        validateField('fullName', this.value);
    });
    
    document.getElementById('email').addEventListener('input', function() {
        validateField('email', this.value);
    });
    
    document.getElementById('phone').addEventListener('input', function() {
        formatPhoneNumber(this);
        validateField('phone', this.value);
    });
    
    document.getElementById('age').addEventListener('input', function() {
        validateField('age', this.value);
    });
    
    document.getElementById('gender').addEventListener('change', function() {
        validateField('gender', this.value);
    });
    
    document.getElementById('username').addEventListener('input', function() {
        validateField('username', this.value);
    });
    
    document.getElementById('password').addEventListener('input', function() {
        checkPasswordStrength(this.value);
        validateField('password', this.value);
    });
    
    document.getElementById('confirmPassword').addEventListener('input', function() {
        validateField('confirmPassword', this.value);
    });
    
    // Textarea character count
    document.getElementById('comments').addEventListener('input', function() {
        updateCharCount(this);
    });
    
    // Form submission
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        submitForm();
    });
}

// ========================================
// VALIDATION FUNCTIONS
// ========================================

// Main validation function
function validateField(fieldName, value) {
    const rules = validationRules[fieldName];
    const errorElement = document.getElementById(fieldName + 'Error');
    const successElement = document.getElementById(fieldName + 'Success');
    const inputElement = document.getElementById(fieldName);
    
    let isValid = true;
    let errorMessage = '';
    
    // Required check
    if (rules.required && !value.trim()) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Minimum length check
    else if (rules.minLength && value.length < rules.minLength) {
        isValid = false;
        errorMessage = `Minimum ${rules.minLength} characters required`;
    }
    
    // Pattern check
    else if (rules.pattern && !rules.pattern.test(value)) {
        isValid = false;
        errorMessage = getPatternErrorMessage(fieldName);
    }
    
    // Number range check
    else if (rules.min && value < rules.min) {
        isValid = false;
        errorMessage = `Minimum value is ${rules.min}`;
    }
    else if (rules.max && value > rules.max) {
        isValid = false;
        errorMessage = `Maximum value is ${rules.max}`;
    }
    
    // Password match check
    else if (rules.match) {
        const matchField = document.getElementById(rules.match).value;
        if (value !== matchField) {
            isValid = false;
            errorMessage = 'Passwords do not match';
        }
    }
    
    // Update UI based on validation
    if (errorElement) {
        errorElement.textContent = errorMessage;
    }
    
    if (inputElement) {
        if (isValid && value.trim()) {
            inputElement.classList.remove('invalid');
            inputElement.classList.add('valid');
            if (successElement) {
                successElement.textContent = '✓ Looks good!';
            }
        } else if (!isValid) {
            inputElement.classList.remove('valid');
            inputElement.classList.add('invalid');
            if (successElement) {
                successElement.textContent = '';
            }
        }
    }
    
    updateStats();
    return isValid;
}

// Get appropriate error message for pattern validation
function getPatternErrorMessage(fieldName) {
    const messages = {
        fullName: 'Only letters and spaces allowed',
        email: 'Please enter a valid email address',
        phone: 'Please enter a valid phone number',
        username: 'Only letters, numbers and underscores allowed'
    };
    return messages[fieldName] || 'Invalid format';
}

// Validate checkbox group (courses)
function validateCourses() {
    const checkboxes = document.querySelectorAll('input[name="courses"]:checked');
    const errorElement = document.getElementById('coursesError');
    
    if (checkboxes.length < 2) {
        errorElement.textContent = 'Please select at least 2 courses';
        return false;
    }
    
    errorElement.textContent = '';
    return true;
}

// Validate radio group (study mode)
function validateStudyMode() {
    const radio = document.querySelector('input[name="studyMode"]:checked');
    const errorElement = document.getElementById('studyModeError');
    
    if (!radio) {
        errorElement.textContent = 'Please select a study mode';
        return false;
    }
    
    errorElement.textContent = '';
    return true;
}

// Validate terms checkbox
function validateTerms() {
    const terms = document.getElementById('terms');
    const errorElement = document.getElementById('termsError');
    
    if (!terms.checked) {
        errorElement.textContent = 'You must agree to the terms';
        return false;
    }
    
    errorElement.textContent = '';
    return true;
}

// ========================================
// STEP NAVIGATION
// ========================================

// Next step function
function nextStep(step) {
    if (validateStep(step)) {
        saveStepData(step);
        
        // Hide current step
        document.getElementById('step' + step).classList.remove('active');
        
        // Show next step
        currentStep = step + 1;
        document.getElementById('step' + currentStep).classList.add('active');
        
        // Update progress
        updateProgressBar();
        updateStepIndicators();
        
        // If review step, populate review data
        if (currentStep === 4) {
            populateReviewData();
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Previous step function
function prevStep(step) {
    // Hide current step
    document.getElementById('step' + step).classList.remove('active');
    
    // Show previous step
    currentStep = step - 1;
    document.getElementById('step' + currentStep).classList.add('active');
    
    // Update progress
    updateProgressBar();
    updateStepIndicators();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Validate current step before proceeding
function validateStep(step) {
    let isValid = true;
    
    switch(step) {
        case 1:
            // Validate all step 1 fields
            isValid = validateField('fullName', document.getElementById('fullName').value) &&
                     validateField('email', document.getElementById('email').value) &&
                     validateField('phone', document.getElementById('phone').value) &&
                     validateField('age', document.getElementById('age').value) &&
                     validateField('gender', document.getElementById('gender').value);
            
            if (!isValid) {
                alert('Please fill all required fields correctly before proceeding!');
            }
            break;
            
        case 2:
            // Validate all step 2 fields
            isValid = validateField('username', document.getElementById('username').value) &&
                     validateField('password', document.getElementById('password').value) &&
                     validateField('confirmPassword', document.getElementById('confirmPassword').value);
            
            if (!isValid) {
                alert('Please complete your account details correctly!');
            }
            break;
            
        case 3:
            // Validate all step 3 fields
            isValid = validateCourses() && validateStudyMode() && validateTerms();
            
            if (!isValid) {
                alert('Please complete all preferences and agree to terms!');
            }
            break;
    }
    
    return isValid;
}

// Save step data to formData object
function saveStepData(step) {
    switch(step) {
        case 1:
            formData.fullName = document.getElementById('fullName').value;
            formData.email = document.getElementById('email').value;
            formData.phone = document.getElementById('phone').value;
            formData.age = document.getElementById('age').value;
            formData.gender = document.getElementById('gender').value;
            break;
            
        case 2:
            formData.username = document.getElementById('username').value;
            formData.password = document.getElementById('password').value;
            break;
            
        case 3:
            // Get selected courses
            const selectedCourses = [];
            document.querySelectorAll('input[name="courses"]:checked').forEach(cb => {
                selectedCourses.push(cb.value);
            });
            formData.courses = selectedCourses;
            
            // Get study mode
            const studyMode = document.querySelector('input[name="studyMode"]:checked');
            formData.studyMode = studyMode ? studyMode.value : '';
            
            formData.comments = document.getElementById('comments').value;
            break;
    }
}

// ========================================
// UI UPDATE FUNCTIONS
// ========================================

// Update progress bar
function updateProgressBar() {
    const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
    const progressBar = document.querySelector('.progress-bar::before') || 
                       document.querySelector('.progress-bar');
    
    // Using CSS custom property
    document.documentElement.style.setProperty('--progress-width', progress + '%');
    
    // Alternative: direct style manipulation
    const style = document.createElement('style');
    style.textContent = `.progress-bar::before { width: ${progress}% !important; }`;
    document.head.appendChild(style);
}

// Update step indicators
function updateStepIndicators() {
    const steps = document.querySelectorAll('.step');
    
    steps.forEach((step, index) => {
        const stepNumber = index + 1;
        
        if (stepNumber < currentStep) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (stepNumber === currentStep) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
}

// Update statistics dashboard
function updateStats() {
    const totalFields = 12;
    let completedFields = 0;
    
    // Count completed fields
    const fields = ['fullName', 'email', 'phone', 'age', 'gender', 
                   'username', 'password', 'confirmPassword'];
    
    fields.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        if (element && element.value.trim() && element.classList.contains('valid')) {
            completedFields++;
        }
    });
    
    // Check courses
    if (document.querySelectorAll('input[name="courses"]:checked').length >= 2) {
        completedFields++;
    }
    
    // Check study mode
    if (document.querySelector('input[name="studyMode"]:checked')) {
        completedFields++;
    }
    
    // Check terms
    if (document.getElementById('terms').checked) {
        completedFields++;
    }
    
    // Check comments (optional but counts if filled)
    if (document.getElementById('comments').value.trim()) {
        completedFields++;
    }
    
    const progress = Math.round((completedFields / totalFields) * 100);
    
    document.getElementById('completedFields').textContent = `${completedFields}/${totalFields}`;
    document.getElementById('formProgress').textContent = `${progress}%`;
}

// ========================================
// HELPER FUNCTIONS
// ========================================

// Password strength checker
function checkPasswordStrength(password) {
    const strengthBar = document.getElementById('passwordStrength');
    let strength = 0;
    
    // Check password criteria
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]+/)) strength++;
    if (password.match(/[A-Z]+/)) strength++;
    if (password.match(/[0-9]+/)) strength++;
    if (password.match(/[$@#&!]+/)) strength++;
    
    // Remove all strength classes
    strengthBar.classList.remove('weak', 'medium', 'strong');
    
    // Add appropriate class
    if (strength <= 2) {
        strengthBar.classList.add('weak');
    } else if (strength <= 4) {
        strengthBar.classList.add('medium');
    } else {
        strengthBar.classList.add('strong');
    }
}

// Toggle password visibility
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    
    if (field.type === 'password') {
        field.type = 'text';
    } else {
        field.type = 'password';
    }
}

// Format phone number
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 10) {
        value = value.substr(0, 10);
    }
    
    if (value.length >= 6) {
        input.value = `(${value.substr(0, 3)}) ${value.substr(3, 3)}-${value.substr(6)}`;
    } else if (value.length >= 3) {
        input.value = `(${value.substr(0, 3)}) ${value.substr(3)}`;
    } else {
        input.value = value;
    }
}

// Update course count
function updateCourseCount() {
    const checked = document.querySelectorAll('input[name="courses"]:checked').length;
    document.getElementById('courseCount').textContent = `Selected: ${checked}`;
    
    updateStats();
}

// Update character count for textarea
function updateCharCount(textarea) {
    const maxLength = 500;
    const currentLength = textarea.value.length;
    
    document.getElementById('charCount').textContent = `${currentLength} / ${maxLength} characters`;
    
    if (currentLength > maxLength) {
        textarea.value = textarea.value.substr(0, maxLength);
    }
}

// Timer function
function startTimer() {
    timerInterval = setInterval(() => {
        const now = new Date();
        const diff = Math.floor((now - startTime) / 1000);
        
        const minutes = Math.floor(diff / 60);
        const seconds = diff % 60;
        
        document.getElementById('timeSpent').textContent = 
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// ========================================
// REVIEW & SUBMIT
// ========================================

// Populate review data
function populateReviewData() {
    document.getElementById('reviewFullName').textContent = formData.fullName || '-';
    document.getElementById('reviewEmail').textContent = formData.email || '-';
    document.getElementById('reviewPhone').textContent = formData.phone || '-';
    document.getElementById('reviewAge').textContent = formData.age || '-';
    document.getElementById('reviewGender').textContent = 
        formData.gender ? formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1) : '-';
    
    document.getElementById('reviewUsername').textContent = formData.username || '-';
    
    document.getElementById('reviewCourses').textContent = 
        formData.courses && formData.courses.length > 0 ? formData.courses.join(', ') : '-';
    
    document.getElementById('reviewStudyMode').textContent = 
        formData.studyMode ? formData.studyMode.replace(/([A-Z])/g, ' $1').trim() : '-';
    
    document.getElementById('reviewComments').textContent = 
        formData.comments || 'No additional comments';
}

// Submit form
function submitForm() {
    // Confirm submission
    const confirmSubmit = confirm('Are you sure you want to submit your registration?');
    
    if (!confirmSubmit) {
        return;
    }
    
    // Show loading state
    const submitBtn = document.querySelector('.btn-submit');
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate API call with setTimeout
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = 'Submit Registration 🚀';
        submitBtn.disabled = false;
        
        // Stop timer
        clearInterval(timerInterval);
        
        // Show success modal
        showSuccessModal();
        
        // Log data to console (in real app, this would be sent to server)
        console.log('Form Data Submitted:', formData);
        
        // Optional: Reset form after delay
        // setTimeout(() => resetForm(), 3000);
        
    }, 2000);
}

// ========================================
// POPUP BOXES / MODALS
// ========================================

// Show welcome popup
function showWelcomePopup() {
    alert('Welcome to the Student Registration Portal!\n\nThis form demonstrates:\n✓ Form Validation\n✓ DOM Manipulation\n✓ Event Handling\n✓ Data Storage\n\nPlease fill out all required fields marked with *');
}

// Show terms popup
function showTerms() {
    const termsText = `
TERMS AND CONDITIONS

1. All information provided must be accurate
2. You must be at least 16 years old to register
3. Your password will be securely encrypted
4. We respect your privacy and won't share your data
5. You can update your information anytime

Do you agree to these terms?
    `;
    
    const agree = confirm(termsText);
    
    if (agree) {
        document.getElementById('terms').checked = true;
        validateTerms();
    }
}

// Show success modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    const message = document.getElementById('successMessage');
    
    message.innerHTML = `
        <strong>Welcome, ${formData.fullName}!</strong><br><br>
        Your registration has been successfully submitted.<br>
        Username: <strong>${formData.username}</strong><br>
        Email: <strong>${formData.email}</strong><br><br>
        You will receive a confirmation email shortly.
    `;
    
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    document.getElementById('successModal').classList.remove('active');
    resetForm();
}

// Reset form
function resetForm() {
    const confirmed = confirm('Do you want to reset the form and start over?');
    
    if (confirmed) {
        document.getElementById('registrationForm').reset();
        
        currentStep = 1;
        formData = {};
        
        // Hide all steps
        document.querySelectorAll('.form-step').forEach(step => {
            step.classList.remove('active');
        });
        
        // Show first step
        document.getElementById('step1').classList.add('active');
        
        // Reset all validation classes
        document.querySelectorAll('input, select').forEach(element => {
            element.classList.remove('valid', 'invalid');
        });
        
        // Clear all messages
        document.querySelectorAll('.error-message, .success-message').forEach(msg => {
            msg.textContent = '';
        });
        
        // Reset progress
        updateProgressBar();
        updateStepIndicators();
        updateStats();
        
        // Reset timer
        startTime = new Date();
    }
}

// ========================================
// BROWSER APIs & ADDITIONAL FEATURES
// ========================================

// Save to localStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem('registrationDraft', JSON.stringify(formData));
        alert('Draft saved successfully!');
    } catch (e) {
        console.error('Error saving to localStorage:', e);
    }
}

// Load from localStorage
function loadFromLocalStorage() {
    try {
        const draft = localStorage.getItem('registrationDraft');
        if (draft) {
            formData = JSON.parse(draft);
            // Populate form fields with saved data
            // ... implementation
            alert('Draft loaded successfully!');
        }
    } catch (e) {
        console.error('Error loading from localStorage:', e);
    }
}

// Print form data
function printFormData() {
    window.print();
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Get form completion percentage
function getCompletionPercentage() {
    const totalFields = Object.keys(validationRules).length;
    let completedFields = 0;
    
    for (let field in formData) {
        if (formData[field] && formData[field].length > 0) {
            completedFields++;
        }
    }
    
    return Math.round((completedFields / totalFields) * 100);
}

