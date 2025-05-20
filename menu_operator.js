const prompt = require('prompt-sync')({ sigint: true });

function ussdMenu() {
    let stack = ['main'];
    let isRunning = true;

    while (isRunning) {
        const currentMenu = stack[stack.length - 1];
        let input;

        switch (currentMenu) {
            case 'main':
                console.log('\nMenu principal:\n1. Service\n2. Achat de forfait\n3. Quitter');
                input = prompt('Choisissez une option: ');
                if (input === '1') stack.push('service');
                else if (input === '2') stack.push('achatForfait');
                else if (input === '3') {
                    console.log('Merci d\'avoir utilisé notre service.');
                    isRunning = false;
                } else showInvalidInput();
                break;

            case 'service':
                console.log('\nService:\n1. Consultation du solde\n2. Recharger mon compte\n#. Retour');
                input = prompt('Choisissez une option: ');
                if (input === '1') {
                    console.log('Votre solde est de 5 000 Ar');
                } else if (input === '2') stack.push('recharge');
                else if (input === '#') stack.pop();
                else showInvalidInput();
                break;

            case 'recharge':
                console.log('\nRecharger mon compte:\n1. Recharger directement\n2. SOS Crédit\n#. Retour');
                input = prompt('Choisissez une option: ');
                if (input === '1') stack.push('rechargerDirect');
                else if (input === '2') stack.push('sosCredit');
                else if (input === '#') stack.pop();
                else showInvalidInput();
                break;

            case 'rechargerDirect':
                input = prompt('\nEntrez le montant que vous souhaitez recharger: ');
                if (isValidAmount(input)) {
                    console.log(`Merci d’avoir rechargé ${input} Ar.`);
                    stack = ['main'];
                } else showInvalidInput();
                break;

            case 'sosCredit':
                input = prompt('\nEntrez le montant de votre SOS crédit: ');
                if (isValidAmount(input)) {
                    console.log(`Vous avez reçu un SOS de ${input} Ar. À rembourser ultérieurement.`);
                    stack = ['main'];
                } else showInvalidInput();
                break;

            case 'achatForfait':
                console.log('\nAchat de forfait:\n1. Forfait appel\n2. Forfait sms\n3. Forfait internet\n#. Retour');
                input = prompt('Choisissez une option: ');
                if (input === '1') stack.push('forfaitAppel');
                else if (input === '2') stack.push('forfaitSMS');
                else if (input === '3') stack.push('forfaitInternet');
                else if (input === '#') stack.pop();
                else showInvalidInput();
                break;

            case 'forfaitAppel':
                input = prompt('\nForfait appel:\n1. 200ar\n2. 500ar\n3. 1000ar\n#. Retour\nChoisissez une option: ');
                handleForfait(input, 'appel');
                break;

            case 'forfaitSMS':
                input = prompt('\nForfait SMS:\n1. 200ar\n2. 500ar\n3. 1000ar\n#. Retour\nChoisissez une option: ');
                handleForfait(input, 'SMS');
                break;

            case 'forfaitInternet':
                input = prompt('\nForfait internet:\n1. 200ar\n2. 500ar\n3. 1000ar\n#. Retour\nChoisissez une option: ');
                handleForfait(input, 'internet');
                break;

            default:
                console.log('Erreur interne du menu.');
                isRunning = false;
        }
    }
}

// Utilitaires
function handleForfait(input, type) {
    const values = { '1': '200', '2': '500', '3': '1000' };
    if (input in values) {
        console.log(`Merci d’avoir acheté un forfait ${type} de ${values[input]} Ar.`);
        stack = ['main'];
    } else if (input === '#') {
        stack.pop();
    } else {
        showInvalidInput();
    }
}

function isValidAmount(value) {
    return /^\d+$/.test(value) && parseInt(value) > 0;
}

function showInvalidInput() {
    console.log('Entrée invalide. Veuillez entrer une option valide.');
}

// Lancer le menu
ussdMenu();
