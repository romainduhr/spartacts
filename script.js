const form = document.getElementById('email-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    const response = await fetch('SUPABASE_API_URL/rest/v1/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'SUPABASE_API_KEY',
            'Authorization': 'Bearer SUPABASE_API_KEY'
        },
        body: JSON.stringify({ email })
    });

    if (response.status === 409) {
        alert('Cet email existe déjà dans la base de données.');
    } else if (response.ok) {
        alert('Email enregistré avec succès!');
    } else {
        alert('Erreur : Impossible d’enregistrer cet email.');
    }
});
