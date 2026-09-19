var SUPABASE_URL = 'https://gzxbppwlfxtbbynxlocw.supabase.co';
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6eGJwcHdsZnh0Ynlienhsb2N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4MjY2NjEsImV4cCI6MjEwMjQwMjY2MX0.rvTEgP-JATqMy2Nx2arreY9ABgEMwCwIlBKRhYMILDs';

var supabase = null;

(function () {
    try {
        if (window.supabase && typeof window.supabase.createClient === 'function') {
            supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        } else if (typeof window.createClient === 'function') {
            supabase = window.createClient(SUPABASE_URL, SUPABASE_KEY);
        } else {
            console.warn('Supabase library not loaded. Make sure the CDN script is included before supabase-client.js');
        }
    } catch (e) {
        console.error('Failed to initialize Supabase:', e);
    }
})();