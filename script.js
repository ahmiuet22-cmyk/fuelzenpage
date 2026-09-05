// FuelZen Landing Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const downloadBtns = document.querySelectorAll('a[download]');
    const toast = document.getElementById('toast');

    // Show toast message when download button is clicked
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            showToast();
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
