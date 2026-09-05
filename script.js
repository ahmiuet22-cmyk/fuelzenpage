// FuelZen Landing Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const downloadBtns = document.querySelectorAll('a[download], .download-btn, .nav-cta');
    const toast = document.getElementById('toast');
    const directApkUrl = 'https://raw.githubusercontent.com/ahmiuet22-cmyk/fuelzenpage/main/fuelzen.apk';

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            showToast();
            
            // Explicit trigger for mobile webviews or browsers with download attribute restrictions
            if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
                setTimeout(() => {
                    window.location.href = directApkUrl;
                }, 400);
            }
        });
    });

    function showToast() {
        if (!toast) return;
        toast.classList.remove('hidden');

        setTimeout(() => {
            toast.classList.add('hidden');
        }, 5000);
    }
});
