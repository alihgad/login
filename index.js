// Initialize Lucide icons
lucide.createIcons();

// Tab functionality with smooth transitions
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabContents = document.querySelectorAll('.tab-content');

tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const tabName = trigger.getAttribute('data-tab');
        
        // Don't do anything if the tab is already active
        if (trigger.classList.contains('active')) return;
        
        // Remove active class from all triggers
        tabTriggers.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked trigger
        trigger.classList.add('active');
        
        // Fade out current active content
        const currentActiveContent = document.querySelector('.tab-content.active');
        if (currentActiveContent) {
            currentActiveContent.style.opacity = '0';
            currentActiveContent.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                currentActiveContent.classList.remove('active');
                
                // Show new content
                const newContent = document.getElementById(tabName + '-tab');
                newContent.classList.add('active');
                
                // Trigger reflow to ensure transition works
                newContent.offsetHeight;
                
                // Fade in new content
                setTimeout(() => {
                    newContent.style.opacity = '1';
                    newContent.style.transform = 'translateY(0)';
                }, 50);
            }, 300);
        } else {
            // If no active content, show new content immediately
            const newContent = document.getElementById(tabName + '-tab');
            newContent.classList.add('active');
            setTimeout(() => {
                newContent.style.opacity = '1';
                newContent.style.transform = 'translateY(0)';
            }, 50);
        }
    });
});

// Toast notification function with improved animation
function showToast(title, description, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="font-medium">${title}</div>
        <div class="text-sm opacity-90">${description}</div>
    `;
    
    document.body.appendChild(toast);
    
    // Show toast with smooth animation
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    // Hide and remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
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