var SUPABASE_URL = 'https://gzxbppwlfxtbybzxlocw.supabase.co';
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6eGJwcHdsZnh0Ynlienhsb2N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4MjY2NjEsImV4cCI6MjEwMjQwMjY2MX0.rvTEgP-JATqMy2Nx2arreY9ABgEMwCwIlBKRhYMILDs';

var _supabaseLib = window.supabase;
var supabase = null;

(function () {
    if (_supabaseLib && typeof _supabaseLib.createClient === 'function') {
        supabase = _supabaseLib.createClient(SUPABASE_URL, SUPABASE_KEY);
    }
})();
