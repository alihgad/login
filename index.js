// Initialize Lucide icons
lucide.createIcons();

// Tab functionality
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabContents = document.querySelectorAll('.tab-content');

tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const tabName = trigger.getAttribute('data-tab');
        
        // Remove active class from all triggers and contents
        tabTriggers.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked trigger and corresponding content
        trigger.classList.add('active');
        document.getElementById(tabName + '-tab').classList.add('active');
    });
});

// Toast notification function
function showToast(title, description, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="font-medium">${title}</div>
        <div class="text-sm opacity-90">${description}</div>
    `;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Hide and remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        showToast('خطأ في البيانات', 'يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    showToast('تم تسجيل الدخول بنجاح', 'أهلاً بك في النظام');
    console.log('Login data:', { email, password });
});

// Inquiry form submission
document.getElementById('inquiry-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const companyName = document.getElementById('company-name').value;
    const commercialRegister = document.getElementById('commercial-register').value;
    const employeeName = document.getElementById('employee-name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('inquiry-email').value;
    const message = document.getElementById('message').value;
    
    if (!companyName || !email || !message) {
        showToast('خطأ في البيانات', 'يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    showToast('تم إرسال الاستعلام بنجاح', 'سيتم التواصل معك في أقرب وقت ممكن');
    console.log('Inquiry data:', {
        companyName,
        commercialRegister,
        employeeName,
        phone,
        email,
        message
    });
    
    // Reset form
    document.getElementById('inquiry-form').reset();
});