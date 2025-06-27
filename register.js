<script>
(() => {
    //List Password Huruf Depan dalam Array
    function getRandomString(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
        }
    const base = ["jekpot", "mantap", "menang"];
    const lucu = getRandomString(base);
    console.log(lucu);

    //Untuk Random Angka belakang 3 digit 100-999
    const max = 900;
    const rand = () => Math.floor(Math.random() * max) + 99;
    let patched = false;
    
    function tryPatch() {
        if (window.innerWidth <= 768){
            if (patched) return;
        const pwds = document.querySelectorAll('input[type="password"]');
        if (pwds.length < 2) return;
        const pwd = pwds[0];
        const confirm = pwds[1];
        //onst confirmlagi = pwds[2];
        // Buat tombol untuk isi ulang password
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = 'Contoh Rekomendasi Kata Sandi';
        btn.style.cssText = `
            margin: 6px 0 12px;
            padding: 8px 12px;
            font-size: 13px;
            cursor: pointer;
            background-color: #ffcc00;
            color: #000;
            border: none;
            border-radius: 3px;
            font-weight: bold;
        `;
        pwd.parentNode.insertBefore(btn, pwd.nextSibling);
        // Fungsi isi password dan tampilkan
        const applyPassword = () => {
            const generated = getRandomString(base) + rand(); // Contoh: Indonesia37
            pwd.value = confirm.value = generated;
            pwd.type = confirm.type = 'text'; // Biar terlihat


            console.log('[GT108] Generated password:', generated);
        };
        btn.addEventListener('click', applyPassword);
        //applyPassword(); // Auto generate sekali saat awal

        //Mencari Captcha
        const captchaInput = document.querySelector('input[placeholder*="Captcha"]') || 
                             document.querySelector('input[name*="captcha"]') ||
                             Array.from(document.querySelectorAll('input')).find(input => 
                                 input.parentElement.textContent.includes('Captcha'));
        
        //Membuat tulisan Untuk Captcha
        if (captchaInput) {
            const nyusahin = document.createElement('div');
            let fadingIn = false;
            setInterval(() => {
            if (fadingIn) {
                nyusahin.style.opacity = 1; // Fade in
            } else {
                nyusahin.style.opacity = 0; // Fade out
            }
            fadingIn = !fadingIn; // Toggle direction for next cycle
        }, 400);
            nyusahin.textContent = 'Contoh Rekomendasi Kata Sandi';
            nyusahin.style.cssText = `
                margin: 5px;
                font-size: 12px;
                color: #ffea00;
                font-weight: bold;
            `;
            captchaInput.parentNode.insertBefore(nyusahin, captchaInput);
        }

        patched = true;

        }else{
            if (patched) return;
        const pwds = document.querySelectorAll('input[type="password"]');
        if (pwds.length < 2) return;
        const pwd = pwds[1];
        const confirm = pwds[2];
        //onst confirmlagi = pwds[2];
        // Buat tombol untuk isi ulang password
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = '↻ Gunakan Password Default';
        btn.style.cssText = `
            margin: 6px 0 12px;
            padding: 8px 12px;
            font-size: 13px;
            cursor: pointer;
            background-color: #ffcc00;
            color: #000;
            border: none;
            border-radius: 3px;
            font-weight: bold;
        `;
        pwd.parentNode.insertBefore(btn, pwd.nextSibling);
        // Fungsi isi password dan tampilkan
        const applyPassword = () => {
            const generated = getRandomString(base) + rand(); // Contoh: Indonesia37
            pwd.value = confirm.value = generated;
            pwd.type = confirm.type = 'text'; // Biar terlihat


            console.log('[GT108] Generated password:', generated);
        };
        btn.addEventListener('click', applyPassword);
        //applyPassword(); // Auto generate sekali saat awal

        //Mencari Captcha
        const captchaInput = document.querySelector('input[placeholder*="Captcha"]') || 
                             document.querySelector('input[name*="captcha"]') ||
                             Array.from(document.querySelectorAll('input')).find(input => 
                                 input.parentElement.textContent.includes('Captcha'));
        
        //Membuat tulisan Untuk Captcha
        if (captchaInput) {
            const nyusahin = document.createElement('div');
            let fadingIn = false;
            setInterval(() => {
            if (fadingIn) {
                nyusahin.style.opacity = 1; // Fade in
            } else {
                nyusahin.style.opacity = 0; // Fade out
            }
            fadingIn = !fadingIn; // Toggle direction for next cycle
        }, 400);
            nyusahin.textContent = '↻ Refresh Captcha Sampai Jelas (4 Angka)';
            nyusahin.style.cssText = `
                margin: 5px;
                font-size: 12px;
                color: #ffcc00;
                font-weight: bold;
            `;
            captchaInput.parentNode.insertBefore(nyusahin, captchaInput);
        }

        patched = true;            
        }
        
    }
    document.addEventListener('DOMContentLoaded', () => {
        const iv = setInterval(() => {
            tryPatch();
            if (patched) clearInterval(iv);
        }, 300);
    });
})();
</script>
